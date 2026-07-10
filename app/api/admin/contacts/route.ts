import { NextRequest, NextResponse } from "next/server";
import { createClient, createAdminClient } from "@/lib/supabase-server";
import { buildEmailHtml } from "@/lib/email-template";

export async function GET(req: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = req.nextUrl;
  const campaign_id = searchParams.get("campaign_id");
  const status = searchParams.get("status");
  const q = searchParams.get("q");

  const admin = createAdminClient();
  let query = admin
    .from("contacts")
    .select("*, campaigns(name, from_name, from_email)")
    .order("created_at", { ascending: false });

  if (campaign_id) query = query.eq("campaign_id", campaign_id);
  if (status) query = query.eq("status", status);
  if (q) query = query.ilike("email", `%${q}%`);

  const { data, error } = await query.limit(500);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { email, first_name, campaign_id } = await req.json();
  if (!email || !campaign_id) {
    return NextResponse.json({ error: "email and campaign_id required" }, { status: 400 });
  }

  const admin = createAdminClient();

  // Check duplicate
  const { data: existing } = await admin
    .from("contacts")
    .select("id")
    .eq("email", email)
    .eq("campaign_id", campaign_id)
    .maybeSingle();

  if (existing) {
    return NextResponse.json({ error: "Contact already exists in this campaign" }, { status: 409 });
  }

  const { data: campaign } = await admin
    .from("campaigns")
    .select("*")
    .eq("id", campaign_id)
    .single();

  const { data: contact, error: insertErr } = await admin
    .from("contacts")
    .insert({ email, first_name: first_name ?? "", campaign_id, sequence_step: 0 })
    .select()
    .single();

  if (insertErr) return NextResponse.json({ error: insertErr.message }, { status: 500 });

  // Send step 1 immediately
  const { data: step1 } = await admin
    .from("campaign_emails")
    .select("*")
    .eq("campaign_id", campaign_id)
    .eq("step_number", 1)
    .eq("active", true)
    .maybeSingle();

  if (step1 && campaign) {
    const { data: settings } = await admin.from("settings").select("*").single();
    const effectiveSettings = settings ?? { business_name: "Echelon Fox", physical_address: "", logo_url: "", brand_color: "#FF5500" };
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://echelonfox.com";
    const html = buildEmailHtml({ bodyHtml: step1.body_html, firstName: first_name ?? "", contactId: contact.id, settings: effectiveSettings, baseUrl });

    let sendStatus = "sent";
    let resendId: string | undefined;

    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({ from: `${campaign.from_name} <${campaign.from_email}>`, to: email, subject: step1.subject, html }),
      });
      const d = await res.json();
      if (res.ok) resendId = d.id; else sendStatus = "failed";
    } catch { sendStatus = "failed"; }

    if (sendStatus === "sent") {
      await admin.from("contacts").update({ sequence_step: 1, last_email_sent_at: new Date().toISOString() }).eq("id", contact.id);
    }
    await admin.from("send_log").insert({ contact_id: contact.id, campaign_id, step_number: 1, resend_id: resendId, status: sendStatus });
  }

  return NextResponse.json(contact, { status: 201 });
}
