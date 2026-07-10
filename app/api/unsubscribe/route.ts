import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET(req: NextRequest) {
  const contactId = req.nextUrl.searchParams.get("contact_id");
  if (!contactId) {
    return NextResponse.json({ error: "Missing contact_id" }, { status: 400 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

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
