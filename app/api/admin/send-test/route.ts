import { NextRequest, NextResponse } from "next/server";
import { createClient, createAdminClient } from "@/lib/supabase-server";
import { buildEmailHtml } from "@/lib/email-template";

export async function POST(req: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { email_id, to } = await req.json();
  if (!email_id || !to) {
    return NextResponse.json({ error: "email_id and to are required" }, { status: 400 });
  }

  const admin = createAdminClient();
  const { data: emailStep } = await admin
    .from("campaign_emails")
    .select("*, campaigns(*)")
    .eq("id", email_id)
    .single();

  if (!emailStep) return NextResponse.json({ error: "Email step not found" }, { status: 404 });

  const { data: settings } = await admin.from("settings").select("*").single();
  const effectiveSettings = settings ?? { business_name: "Echelon Fox", physical_address: "", logo_url: "", brand_color: "#FF5500" };
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://echelonfox.com";

  const html = buildEmailHtml({
    bodyHtml: emailStep.body_html,
    firstName: "Test",
    contactId: "preview",
    settings: effectiveSettings,
    baseUrl,
  });

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `${emailStep.campaigns.from_name} <${emailStep.campaigns.from_email}>`,
      to,
      subject: `[TEST] ${emailStep.subject}`,
      html,
    }),
  });

  if (!res.ok) {
    const err = await res.json();
    return NextResponse.json({ error: err.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
