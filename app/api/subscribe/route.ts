import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { buildEmailHtml } from "@/lib/email-template";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

export async function POST(req: NextRequest) {
  try {
    const { email, first_name, campaign_id } = await req.json();

    if (!email || !campaign_id) {
      return NextResponse.json(
        { error: "email and campaign_id are required" },
        { status: 400, headers: CORS_HEADERS }
      );
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Check for duplicate
    const { data: existing } = await supabase
      .from("contacts")
      .select("id")
      .eq("email", email)
      .eq("campaign_id", campaign_id)
      .maybeSingle();

    if (existing) {
      return NextResponse.json({ ok: true, duplicate: true }, { headers: CORS_HEADERS });
    }

    // Get campaign
    const { data: campaign, error: campErr } = await supabase
      .from("campaigns")
      .select("*")
      .eq("id", campaign_id)
      .eq("active", true)
      .single();

    if (campErr || !campaign) {
      return NextResponse.json(
        { error: "Campaign not found" },
        { status: 404, headers: CORS_HEADERS }
      );
    }

    // Get step 1
    const { data: step1 } = await supabase
      .from("campaign_emails")
      .select("*")
      .eq("campaign_id", campaign_id)
      .eq("step_number", 1)
      .eq("active", true)
      .maybeSingle();

    // Insert contact
    const { data: contact, error: insertErr } = await supabase
      .from("contacts")
      .insert({
        email,
        first_name: first_name ?? "",
        campaign_id,
        sequence_step: 0,
      })
      .select()
      .single();

    if (insertErr) {
      return NextResponse.json(
        { error: insertErr.message },
        { status: 500, headers: CORS_HEADERS }
      );
    }

    // Send step 1 immediately
    if (step1) {
      const { data: settings } = await supabase
        .from("settings")
        .select("*")
        .single();

      const effectiveSettings = settings ?? {
        business_name: "Echelon Fox",
        physical_address: "",
        logo_url: "",
        brand_color: "#FF5500",
      };

      const baseUrl =
        process.env.NEXT_PUBLIC_APP_URL ?? "https://echelonfox.com";

      const html = buildEmailHtml({
        bodyHtml: step1.body_html,
        firstName: first_name ?? "",
        contactId: contact.id,
        settings: effectiveSettings,
        baseUrl,
      });

      let resendId: string | undefined;
      let sendStatus = "sent";

      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: `${campaign.from_name} <${campaign.from_email}>`,
            to: email,
            subject: step1.subject,
            html,
          }),
        });
        const data = await res.json();
        if (res.ok) resendId = data.id;
        else sendStatus = "failed";
      } catch {
        sendStatus = "failed";
      }

      // Update contact step
      if (sendStatus === "sent") {
        await supabase
          .from("contacts")
          .update({ sequence_step: 1, last_email_sent_at: new Date().toISOString() })
          .eq("id", contact.id);
      }

      await supabase.from("send_log").insert({
        contact_id: contact.id,
        campaign_id,
        step_number: 1,
        resend_id: resendId,
        status: sendStatus,
      });
    }

    return NextResponse.json({ ok: true }, { headers: CORS_HEADERS });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal error" },
      { status: 500, headers: CORS_HEADERS }
    );
  }
}
