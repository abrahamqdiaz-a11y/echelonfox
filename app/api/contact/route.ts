import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, company, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "name, email, and message are required" }, { status: 400 });
  }

  const notifyEmail = process.env.CONTACT_NOTIFY_EMAIL ?? "abe.quinn@echelonfox.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "contact@echelonfox.com";

  const html = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p style="white-space:pre-wrap;">${message}</p>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `Echelon Fox Contact <${fromEmail}>`,
      to: notifyEmail,
      reply_to: email,
      subject: `New contact from ${name}`,
      html,
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
