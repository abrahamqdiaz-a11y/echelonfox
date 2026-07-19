import { NextResponse } from "next/server";
import { createClient, createAdminClient } from "@/lib/supabase-server";

export async function GET() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const admin = createAdminClient();
  const sevenDaysAgo = new Date(Date.now() - 7 * 86400000).toISOString();

  const [
    { count: totalActive },
    { count: sends7d },
    { data: campaigns },
    { data: recentLog },
    { data: failedLog },
  ] = await Promise.all([
    admin.from("contacts").select("*", { count: "exact", head: true }).eq("status", "active"),
    admin.from("send_log").select("*", { count: "exact", head: true }).gte("sent_at", sevenDaysAgo).eq("status", "sent"),
    admin.from("campaigns").select("id, name, active, contacts(count)").order("created_at", { ascending: false }),
    admin.from("send_log").select("*, contacts(email, first_name), campaigns(name)").order("sent_at", { ascending: false }).limit(20),
    admin.from("send_log").select("*, contacts(email, first_name), campaigns(name)").eq("status", "failed").order("sent_at", { ascending: false }).limit(10),
  ]);

  return NextResponse.json({
    totalActive: totalActive ?? 0,
    sends7d: sends7d ?? 0,
    campaigns: campaigns ?? [],
    recentLog: recentLog ?? [],
    failedLog: failedLog ?? [],
  });
}
