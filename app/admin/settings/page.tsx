"use client";

import { useEffect, useState, FormEvent } from "react";

interface Settings {
  id: string;
  business_name: string;
  physical_address: string;
  logo_url: string;
  brand_color: string;
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [form, setForm] = useState({ business_name: "", physical_address: "", logo_url: "", brand_color: "#FF5500" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/admin/settings")
      .then(r => r.json())
      .then(d => {
        setSettings(d);
        setForm({ business_name: d.business_name, physical_address: d.physical_address, logo_url: d.logo_url, brand_color: d.brand_color });
        setLoading(false);
      });
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    await fetch("/api/admin/settings", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  if (loading) return <div className="p-8 text-gray-400">Loading…</div>;

  return (
    <div className="p-8 max-w-xl">
      <h1 className="text-xl font-bold text-gray-900 mb-6">Settings</h1>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
          <input
            required
            value={form.business_name}
            onChange={e => setForm(f => ({ ...f, business_name: e.target.value }))}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <p className="text-xs text-gray-400 mt-1">Appears in the email footer.</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Physical Mailing Address</label>
          <textarea
            required
            rows={2}
            value={form.physical_address}
            onChange={e => setForm(f => ({ ...f, physical_address: e.target.value }))}
            placeholder="123 Main St, City, State 00000"
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <p className="text-xs text-gray-400 mt-1">Required by CAN-SPAM. Appears in every email footer.</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Logo URL</label>
          <input
            type="url"
            value={form.logo_url}
            onChange={e => setForm(f => ({ ...f, logo_url: e.target.value }))}
            placeholder="https://example.com/logo.png"
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <p className="text-xs text-gray-400 mt-1">Leave blank to show business name as text in the header.</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Brand Color</label>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={form.brand_color}
              onChange={e => setForm(f => ({ ...f, brand_color: e.target.value }))}
              className="w-10 h-10 rounded-lg border border-gray-300 cursor-pointer p-1"
            />
            <input
              type="text"
              value={form.brand_color}
              onChange={e => setForm(f => ({ ...f, brand_color: e.target.value }))}
              placeholder="#FF5500"
              className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 font-mono"
            />
          </div>
          <p className="text-xs text-gray-400 mt-1">Used for the email header background and accent colors.</p>
        </div>

        {/* Preview */}
        <div className="rounded-lg border border-gray-200 overflow-hidden">
          <div style={{ background: form.brand_color }} className="px-6 py-4 text-center">
            {form.logo_url ? (
              <img src={form.logo_url} alt={form.business_name} className="max-h-10 max-w-[160px] inline-block" />
            ) : (
              <span className="text-white font-bold text-lg">{form.business_name || "Business Name"}</span>
            )}
          </div>
          <div className="px-6 py-4 bg-gray-50 text-center">
            <p className="text-xs text-gray-400">{form.business_name} · {form.physical_address || "Physical address"}</p>
            <a href="#" style={{ color: form.brand_color }} className="text-xs underline">Unsubscribe</a>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-1">
          <button
            type="submit"
            disabled={saving}
            className="px-4 py-2 bg-[#FF5500] text-white rounded-lg text-sm font-medium hover:bg-[#e64d00] disabled:opacity-50 transition-colors"
          >
            {saving ? "Saving…" : "Save Settings"}
          </button>
          {saved && <span className="text-sm text-green-600">Saved!</span>}
        </div>
      </form>

      <div className="mt-6 bg-amber-50 border border-amber-100 rounded-xl p-4">
        <h2 className="text-sm font-semibold text-amber-900 mb-2">Setup Checklist</h2>
        <ul className="space-y-1.5 text-sm text-amber-800">
          <li>1. Run the SQL migration in <code className="font-mono text-xs bg-amber-100 px-1 rounded">supabase/migrations/001_schema.sql</code></li>
          <li>2. Enable <strong>pg_cron</strong> and <strong>pg_net</strong> in Supabase Dashboard → Extensions</li>
          <li>3. Set <code className="font-mono text-xs bg-amber-100 px-1 rounded">RESEND_API_KEY</code> as a Supabase secret</li>
          <li>4. Deploy the <code className="font-mono text-xs bg-amber-100 px-1 rounded">supabase/functions/send-drip</code> edge function</li>
          <li>5. Run the pg_cron schedule command (see migration file comments)</li>
          <li>6. Set env vars: <code className="font-mono text-xs bg-amber-100 px-1 rounded">NEXT_PUBLIC_SUPABASE_URL</code>, <code className="font-mono text-xs bg-amber-100 px-1 rounded">NEXT_PUBLIC_SUPABASE_ANON_KEY</code>, <code className="font-mono text-xs bg-amber-100 px-1 rounded">SUPABASE_SERVICE_ROLE_KEY</code>, <code className="font-mono text-xs bg-amber-100 px-1 rounded">RESEND_API_KEY</code>, <code className="font-mono text-xs bg-amber-100 px-1 rounded">NEXT_PUBLIC_APP_URL</code></li>
        </ul>
      </div>
    </div>
  );
}
