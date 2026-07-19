"use client";

import { useEffect, useState, FormEvent } from "react";
import Link from "next/link";

interface Campaign {
  id: string;
  name: string;
  from_name: string;
  from_email: string;
  active: boolean;
  created_at: string;
  contacts: [{ count: number }];
}

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", from_name: "", from_email: "", active: true });
  const [saving, setSaving] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);

  async function load() {
    const r = await fetch("/api/admin/campaigns");
    setCampaigns(await r.json());
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  function startEdit(c: Campaign) {
    setEditId(c.id);
    setForm({ name: c.name, from_name: c.from_name, from_email: c.from_email, active: c.active });
    setShowForm(true);
  }

  function resetForm() {
    setEditId(null);
    setForm({ name: "", from_name: "", from_email: "", active: true });
    setShowForm(false);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    if (editId) {
      await fetch(`/api/admin/campaigns/${editId}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    } else {
      await fetch("/api/admin/campaigns", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    }
    setSaving(false);
    resetForm();
    load();
  }

  async function toggleActive(c: Campaign) {
    await fetch(`/api/admin/campaigns/${c.id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ active: !c.active }) });
    load();
  }

  async function deleteCampaign(id: string) {
    if (!confirm("Delete this campaign and all its contacts?")) return;
    await fetch(`/api/admin/campaigns/${id}`, { method: "DELETE" });
    load();
  }

  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-gray-900">Campaigns</h1>
        <button
          onClick={() => { resetForm(); setShowForm(true); }}
          className="px-4 py-2 bg-[#FF5500] text-white rounded-lg text-sm font-medium hover:bg-[#e64d00] transition-colors"
        >
          + New Campaign
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">{editId ? "Edit Campaign" : "New Campaign"}</h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Campaign Name</label>
                <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">From Name</label>
                <input required value={form.from_name} onChange={e => setForm(f => ({ ...f, from_name: e.target.value }))} className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">From Email</label>
                <input required type="email" value={form.from_email} onChange={e => setForm(f => ({ ...f, from_email: e.target.value }))} className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div className="flex items-end pb-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={form.active} onChange={e => setForm(f => ({ ...f, active: e.target.checked }))} className="w-4 h-4 accent-orange-500" />
                  <span className="text-sm text-gray-700">Active</span>
                </label>
              </div>
            </div>
            <div className="flex gap-2 pt-1">
              <button type="submit" disabled={saving} className="px-4 py-2 bg-[#FF5500] text-white rounded-lg text-sm font-medium hover:bg-[#e64d00] disabled:opacity-50">
                {saving ? "Saving…" : "Save"}
              </button>
              <button type="button" onClick={resetForm} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <p className="text-gray-400 text-sm">Loading…</p>
      ) : campaigns.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
          <p className="text-gray-400 text-sm">No campaigns yet. Create one to get started.</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
          {campaigns.map(c => (
            <div key={c.id} className="flex items-center justify-between px-5 py-4">
              <div>
                <div className="flex items-center gap-2.5">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${c.active ? "bg-green-400" : "bg-gray-300"}`} />
                  <span className="font-medium text-gray-900">{c.name}</span>
                  <span className="text-xs text-gray-400">{c.contacts?.[0]?.count ?? 0} contacts</span>
                </div>
                <p className="text-xs text-gray-400 mt-0.5 ml-4.5 pl-4">{c.from_name} &lt;{c.from_email}&gt;</p>
              </div>
              <div className="flex items-center gap-2">
                <Link href={`/admin/campaigns/${c.id}`} className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  Sequence
                </Link>
                <button onClick={() => startEdit(c)} className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  Edit
                </button>
                <button
                  onClick={() => toggleActive(c)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${c.active ? "text-orange-700 bg-orange-50 hover:bg-orange-100" : "text-green-700 bg-green-50 hover:bg-green-100"}`}
                >
                  {c.active ? "Pause" : "Activate"}
                </button>
                <button onClick={() => deleteCampaign(c.id)} className="px-3 py-1.5 text-xs font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
