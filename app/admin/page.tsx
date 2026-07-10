"use client";

import { useEffect, useState } from "react";

interface DashboardData {
  totalActive: number;
  sends7d: number;
  campaigns: Array<{ id: string; name: string; active: boolean; contacts: [{ count: number }] }>;
  recentLog: Array<{ id: string; sent_at: string; status: string; step_number: number; contacts: { email: string; first_name: string }; campaigns: { name: string } }>;
  failedLog: Array<{ id: string; sent_at: string; step_number: number; contacts: { email: string }; campaigns: { name: string } }>;
}

function fmtDate(s: string) {
  return new Date(s).toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}

export default function AdminDashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/dashboard")
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false); });
  }, []);

  if (loading) return <div className="p-8 text-gray-400">Loading…</div>;
  if (!data) return <div className="p-8 text-red-500">Failed to load dashboard</div>;

  return (
    <div className="p-8 max-w-5xl">
      <h1 className="text-xl font-bold text-gray-900 mb-6">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <p className="text-sm text-gray-500 mb-1">Active Contacts</p>
          <p className="text-3xl font-bold text-gray-900">{data.totalActive.toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <p className="text-sm text-gray-500 mb-1">Sends (last 7 days)</p>
          <p className="text-3xl font-bold text-gray-900">{data.sends7d.toLocaleString()}</p>
        </div>
      </div>

      {/* Campaigns breakdown */}
      <div className="bg-white rounded-xl border border-gray-200 mb-6">
        <div className="px-5 py-3 border-b border-gray-100">
          <h2 className="text-sm font-semibold text-gray-900">Campaigns</h2>
        </div>
        {data.campaigns.length === 0 ? (
          <p className="px-5 py-4 text-sm text-gray-400">No campaigns yet.</p>
        ) : (
          <div className="divide-y divide-gray-50">
            {data.campaigns.map(c => (
              <div key={c.id} className="flex items-center justify-between px-5 py-3">
                <div className="flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full ${c.active ? "bg-green-400" : "bg-gray-300"}`} />
                  <span className="text-sm font-medium text-gray-800">{c.name}</span>
                </div>
                <span className="text-sm text-gray-500">{c.contacts?.[0]?.count ?? 0} contacts</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Recent sends */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="px-5 py-3 border-b border-gray-100">
            <h2 className="text-sm font-semibold text-gray-900">Recent Sends</h2>
          </div>
          {data.recentLog.length === 0 ? (
            <p className="px-5 py-4 text-sm text-gray-400">No sends yet.</p>
          ) : (
            <div className="divide-y divide-gray-50 max-h-80 overflow-auto">
              {data.recentLog.map(l => (
                <div key={l.id} className="px-5 py-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 truncate max-w-[180px]">{l.contacts?.email}</span>
                    <span className={`text-xs px-1.5 py-0.5 rounded ${l.status === "sent" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>{l.status}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">{l.campaigns?.name} · Step {l.step_number} · {fmtDate(l.sent_at)}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Failed sends */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="px-5 py-3 border-b border-gray-100">
            <h2 className="text-sm font-semibold text-gray-900">
              Failed Sends
              {data.failedLog.length > 0 && (
                <span className="ml-2 bg-red-100 text-red-700 text-xs px-1.5 py-0.5 rounded-full">{data.failedLog.length}</span>
              )}
            </h2>
          </div>
          {data.failedLog.length === 0 ? (
            <p className="px-5 py-4 text-sm text-gray-400">No failures. 🎉</p>
          ) : (
            <div className="divide-y divide-gray-50 max-h-80 overflow-auto">
              {data.failedLog.map(l => (
                <div key={l.id} className="px-5 py-2.5">
                  <span className="text-sm text-gray-700 truncate block">{l.contacts?.email}</span>
                  <p className="text-xs text-gray-400 mt-0.5">{l.campaigns?.name} · Step {l.step_number} · {fmtDate(l.sent_at)}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
