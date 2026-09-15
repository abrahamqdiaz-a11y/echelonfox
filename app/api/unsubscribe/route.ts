import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

type Outcome = "success" | "not_found" | "error";

function admin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

/**
 * Unsubscribe every contact row sharing an email address, so opting out of one
 * campaign opts the person out of all of them.
 */
async function unsubscribeByEmail(email: string): Promise<Outcome> {
  const { error } = await admin()
    .from("contacts")
    .update({ status: "unsubscribed" })
    .eq("email", email);

  return error ? "error" : "success";
}

async function unsubscribeByContactId(contactId: string): Promise<Outcome> {
  const { data: contact, error } = await admin()
    .from("contacts")
    .select("email")
    .eq("id", contactId)
    .maybeSingle();

  // A lookup failure is not the same as a bad link — don't tell someone their
  // opt-out went through when the database never answered.
  if (error) return "error";
  if (!contact) return "not_found";

  return unsubscribeByEmail(contact.email);
}

function done(req: NextRequest, status: Outcome) {
  return NextResponse.redirect(new URL(`/unsubscribe?status=${status}`, req.url), 303);
}

/** Legacy links from already-delivered emails still point here. */
export async function GET(req: NextRequest) {
  const contactId = req.nextUrl.searchParams.get("contact_id");
  if (!contactId) {
    return NextResponse.json({ error: "Missing contact_id" }, { status: 400 });
  }

  return done(req, await unsubscribeByContactId(contactId));
}

export async function POST(req: NextRequest) {
  const form = await req.formData().catch(() => null);
  if (!form) {
    return NextResponse.json({ error: "Expected a form submission" }, { status: 400 });
  }

  // RFC 8058 one-click: the mail client POSTs "List-Unsubscribe=One-Click" to
  // the header URL, which carries contact_id in the query string. It wants a
  // plain 200, not a redirect to a human-facing page.
  const oneClick = form.get("List-Unsubscribe") === "One-Click";
  const contactId =
    (form.get("contact_id") as string | null) ??
    req.nextUrl.searchParams.get("contact_id");
  const email = (form.get("email") as string | null)?.trim();

  let outcome: Outcome;
  if (contactId) {
    outcome = await unsubscribeByContactId(contactId);
  } else if (email) {
    const byEmail = await unsubscribeByEmail(email);
    // Never reveal whether an address is on the list: an unknown email reports
    // the same success a known one does.
    outcome = byEmail === "error" ? "error" : "success";
  } else {
    outcome = "not_found";
  }

  if (oneClick) {
    return new NextResponse(null, { status: outcome === "error" ? 500 : 200 });
  }

  return done(req, outcome);
}
