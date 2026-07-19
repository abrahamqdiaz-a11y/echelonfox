import { NextRequest, NextResponse } from "next/server";
import { createClient, createAdminClient } from "@/lib/supabase-server";

// Body: { ids: string[] } — ordered list of email IDs, renumbers step_number 1..n
export async function POST(req: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { ids } = await req.json() as { ids: string[] };
  const admin = createAdminClient();

  for (let i = 0; i < ids.length; i++) {
    await admin
      .from("campaign_emails")
      .update({ step_number: i + 1 })
      .eq("id", ids[i]);
  }

  return NextResponse.json({ ok: true });
}
