import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const CRON_SECRET = Deno.env.get("CRON_SECRET") ?? "";
const APP_URL = Deno.env.get("APP_URL") ?? "https://echelonfox.com";

interface Settings {
  business_name: string;
  physical_address: string;
  logo_url: string;
  brand_color: string;
}

function buildEmailHtml(
  bodyHtml: string,
  firstName: string,
  contactId: string,
  settings: Settings
): string {
  const body = bodyHtml.replace(/\{\{first_name\}\}/g, firstName || "there");
  const unsubUrl = `${APP_URL}/unsubscribe?contact_id=${contactId}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Email</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px;">
<tr><td align="center">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
  <tr>
    <td style="background:${settings.brand_color};padding:28px 40px;text-align:center;">
      ${settings.logo_url
        ? `<img src="${settings.logo_url}" alt="${settings.business_name}" style="max-height:48px;max-width:220px;display:inline-block;">`
        : `<span style="color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.5px;">${settings.business_name}</span>`}
    </td>
  </tr>
  <tr>
    <td style="padding:40px;color:#1a1a1a;font-size:16px;line-height:1.7;">
      ${body}
    </td>
  </tr>
  <tr>
    <td style="padding:24px 40px;background:#f9f9f9;border-top:1px solid #eeeeee;text-align:center;">
      <p style="margin:0 0 6px;font-size:13px;color:#888888;">${settings.business_name}</p>
      <p style="margin:0 0 12px;font-size:13px;color:#888888;">${settings.physical_address}</p>
      <p style="margin:0;font-size:12px;">
        <a href="${unsubUrl}" style="color:${settings.brand_color};text-decoration:underline;">Unsubscribe</a>
      </p>
    </td>
  </tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}

serve(async (req) => {
  // Verify cron secret
  const secret = req.headers.get("x-cron-secret") ?? "";
  if (CRON_SECRET && secret !== CRON_SECRET) {
    return new Response("Unauthorized", { status: 401 });
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

  // Load settings
  const { data: settings } = await supabase
    .from("settings")
    .select("*")
    .single<Settings>();

  const effectiveSettings: Settings = settings ?? {
    business_name: "Echelon Fox",
    physical_address: "",
    logo_url: "",
    brand_color: "#FF5500",
  };

  // Get all active contacts with their campaign
  const { data: contacts, error: contactsErr } = await supabase
    .from("contacts")
    .select("*, campaigns(from_name, from_email)")
    .eq("status", "active");

  if (contactsErr) {
    return new Response(JSON.stringify({ error: contactsErr.message }), {
      status: 500,
    });
  }

  const results = { sent: 0, skipped: 0, failed: 0, completed: 0 };

  for (const contact of contacts ?? []) {
    const nextStep = contact.sequence_step + 1;

    // Find the next active email step
    const { data: emailStep } = await supabase
      .from("campaign_emails")
      .select("*")
      .eq("campaign_id", contact.campaign_id)
      .eq("step_number", nextStep)
      .eq("active", true)
      .maybeSingle();

    if (!emailStep) {
      // No more steps — mark completed
      await supabase
        .from("contacts")
        .update({ status: "completed" })
        .eq("id", contact.id);
      results.completed++;
      continue;
    }

    // Check delay
    if (contact.last_email_sent_at && emailStep.delay_days > 0) {
      const daysSince =
        (Date.now() - new Date(contact.last_email_sent_at).getTime()) /
        86400000;
      if (daysSince < emailStep.delay_days) {
        results.skipped++;
        continue;
      }
    }

    const html = buildEmailHtml(
      emailStep.body_html,
      contact.first_name,
      contact.id,
      effectiveSettings
    );

    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `${contact.campaigns.from_name} <${contact.campaigns.from_email}>`,
          to: contact.email,
          subject: emailStep.subject,
          html,
        }),
      });

      const resendData = await res.json();

      if (!res.ok) throw new Error(resendData.message ?? "Resend error");

      await supabase
        .from("contacts")
        .update({
          sequence_step: nextStep,
          last_email_sent_at: new Date().toISOString(),
        })
        .eq("id", contact.id);

      await supabase.from("send_log").insert({
        contact_id: contact.id,
        campaign_id: contact.campaign_id,
        step_number: nextStep,
        resend_id: resendData.id,
        status: "sent",
      });

      results.sent++;
    } catch (_err) {
      await supabase.from("send_log").insert({
        contact_id: contact.id,
        campaign_id: contact.campaign_id,
        step_number: nextStep,
        status: "failed",
      });
      results.failed++;
    }
  }

  return new Response(JSON.stringify(results), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
});
