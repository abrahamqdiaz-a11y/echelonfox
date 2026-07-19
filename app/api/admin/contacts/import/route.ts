import { NextRequest, NextResponse } from "next/server";
import { createClient, createAdminClient } from "@/lib/supabase-server";
import { buildEmailHtml } from "@/lib/email-template";

// Body: { rows: { email: string; first_name?: string }[]; campaign_id: string }
export async function POST(req: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { rows, campaign_id } = await req.json();
  if (!rows?.length || !campaign_id) {
    return NextResponse.json({ error: "rows and campaign_id required" }, { status: 400 });
  }

  const admin = createAdminClient();
  const { data: campaign } = await admin.from("campaigns").select("*").eq("id", campaign_id).single();
  const { data: step1 } = await admin.from("campaign_emails").select("*").eq("campaign_id", campaign_id).eq("step_number", 1).eq("active", true).maybeSingle();
  const { data: settings } = await admin.from("settings").select("*").single();
  const effectiveSettings = settings ?? { business_name: "Echelon Fox", physical_address: "", logo_url: "", brand_color: "#FF5500" };
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://echelonfox.com";

  let imported = 0;
  let skipped = 0;

  for (const row of rows) {
    if (!row.email) { skipped++; continue; }

    const { data: existing } = await admin.from("contacts").select("id").eq("email", row.email).eq("campaign_id", campaign_id).maybeSingle();
    if (existing) { skipped++; continue; }

    const { data: contact, error } = await admin
      .from("contacts")
      .insert({ email: row.email, first_name: row.first_name ?? "", campaign_id, sequence_step: 0 })
      .select()
      .single();

    if (error || !contact) { skipped++; continue; }

    if (step1 && campaign) {
      const html = buildEmailHtml({ bodyHtml: step1.body_html, firstName: row.first_name ?? "", contactId: contact.id, settings: effectiveSettings, baseUrl });
      let sendStatus = "sent";
      let resendId: string | undefined;

      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
          body: JSON.stringify({ from: `${campaign.from_name} <${campaign.from_email}>`, to: row.email, subject: step1.subject, html }),
        });
        const d = await res.json();
        if (res.ok) resendId = d.id; else sendStatus = "failed";
      } catch { sendStatus = "failed"; }

      if (sendStatus === "sent") {
        await admin.from("contacts").update({ sequence_step: 1, last_email_sent_at: new Date().toISOString() }).eq("id", contact.id);
      }
      await admin.from("send_log").insert({ contact_id: contact.id, campaign_id, step_number: 1, resend_id: resendId, status: sendStatus });
    }

    imported++;
  }

  return NextResponse.json({ imported, skipped });
}
