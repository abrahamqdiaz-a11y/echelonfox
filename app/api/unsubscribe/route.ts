import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function makeSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";

  if (!email) {
    return NextResponse.json({ error: "Missing email" }, { status: 400 });
  }

  const supabase = makeSupabase();

  const { data: contact } = await supabase
    .from("contacts")
    .select("email")
    .eq("email", email)
    .maybeSingle();

  if (!contact) {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }

  await supabase
    .from("contacts")
    .update({ status: "unsubscribed" })
    .eq("email", email);

  return NextResponse.json({ success: true });
}

export async function GET(req: NextRequest) {
  const contactId = req.nextUrl.searchParams.get("contact_id");
  if (!contactId) {
    return NextResponse.json({ error: "Missing contact_id" }, { status: 400 });
  }

  const supabase = makeSupabase();

  // Find the contact to get their email
  const { data: contact } = await supabase
    .from("contacts")
    .select("email")
    .eq("id", contactId)
    .maybeSingle();

  if (!contact) {
    return NextResponse.redirect(
      new URL("/unsubscribe?status=not_found", req.url)
    );
  }

  // Unsubscribe from ALL campaigns
  await supabase
    .from("contacts")
    .update({ status: "unsubscribed" })
    .eq("email", contact.email);

  return NextResponse.redirect(
    new URL("/unsubscribe?status=success", req.url)
  );
}
