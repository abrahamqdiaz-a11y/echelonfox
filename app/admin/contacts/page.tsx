"use client";

import { useEffect, useState, FormEvent, useRef } from "react";

interface Contact {
  id: string;
  email: string;
  first_name: string;
  campaign_id: string;
  sequence_step: number;
  last_email_sent_at: string | null;
  status: "active" | "unsubscribed" | "completed";
  created_at: string;
  campaigns: { name: string };
}

interface Campaign {
  id: string;
  name: string;
}

const STATUS_COLORS = {
  active: "bg-green-50 text-green-700",
  unsubscribed: "bg-gray-100 text-gray-500",
  completed: "bg-blue-50 text-blue-700",
};

function fmtDate(s: string | null) {
  if (!s) return "—";
  return new Date(s).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({ campaign_id: "", status: "", q: "" });
  const [showAdd, setShowAdd] = useState(false);
  const [addForm, setAddForm] = useState({ email: "", first_name: "", campaign_id: "" });
  const [addSaving, setAddSaving] = useState(false);
  const [addError, setAddError] = useState("");
  const [importStatus, setImportStatus] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  async function load() {
    setLoading(true);
    const params = new URLSearchParams();
    if (filter.campaign_id) params.set("campaign_id", filter.campaign_id);
    if (filter.status) params.set("status", filter.status);
    if (filter.q) params.set("q", filter.q);
    const r = await fetch(`/api/admin/contacts?${params}`);
    setContacts(await r.json());
    setLoading(false);
  }

  useEffect(() => {
    fetch("/api/admin/campaigns").then(r => r.json()).then(d => {
      setCampaigns(Array.isArray(d) ? d : []);
      if (Array.isArray(d) && d.length > 0) setAddForm(f => ({ ...f, campaign_id: d[0].id }));
    });
  }, []);

  useEffect(() => { load(); }, [filter]);

  async function handleAdd(e: FormEvent) {
    e.preventDefault();
    setAddSaving(true);
    setAddError("");
    const r = await fetch("/api/admin/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addForm),
    });
    if (r.ok) {
      setShowAdd(false);
      setAddForm(f => ({ ...f, email: "", first_name: "" }));
      load();
    } else {
      const d = await r.json();
      setAddError(d.error ?? "Failed to add contact");
    }
    setAddSaving(false);
  }

  async function updateStatus(id: string, status: string) {
    await fetch(`/api/admin/contacts/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    load();
  }

  async function updateStep(id: string, step: number) {
    await fetch(`/api/admin/contacts/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sequence_step: step }),
    });
    load();
  }

  async function deleteContact(id: string) {
    if (!confirm("Remove this contact?")) return;
    await fetch(`/api/admin/contacts/${id}`, { method: "DELETE" });
    load();
  }

  async function handleImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const campaignId = filter.campaign_id || addForm.campaign_id;
    if (!campaignId) { setImportStatus("Select a campaign filter first."); return; }

    setImportStatus("Parsing…");
    const text = await file.text();
    const lines = text.trim().split("\n");
    const header = lines[0].toLowerCase().split(",").map(h => h.trim().replace(/"/g, ""));
    const emailIdx = header.indexOf("email");
    const nameIdx = header.findIndex(h => h.includes("first") && h.includes("name")) !== -1
      ? header.findIndex(h => h.includes("first") && h.includes("name"))
      : header.findIndex(h => h.includes("name"));

    if (emailIdx === -1) { setImportStatus("CSV must have an 'email' column."); return; }

    const rows = lines.slice(1).map(line => {
      const cols = line.split(",").map(c => c.trim().replace(/^"|"$/g, ""));
      return { email: cols[emailIdx], first_name: nameIdx >= 0 ? cols[nameIdx] : "" };
    }).filter(r => r.email);

    setImportStatus(`Importing ${rows.length} rows…`);
    const r = await fetch("/api/admin/contacts/import", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rows, campaign_id: campaignId }),
    });
    const d = await r.json();
    setImportStatus(`Done: ${d.imported} imported, ${d.skipped} skipped`);
    if (fileRef.current) fileRef.current.value = "";
    load();
    setTimeout(() => setImportStatus(""), 5000);
  }

  return (
    <div className="p-8 max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-gray-900">Contacts</h1>
        <div className="flex gap-2">
          <label className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 cursor-pointer transition-colors">
            Import CSV
            <input ref={fileRef} type="file" accept=".csv" className="hidden" onChange={handleImport} />
          </label>
          <button onClick={() => setShowAdd(true)} className="px-4 py-2 bg-[#FF5500] text-white rounded-lg text-sm font-medium hover:bg-[#e64d00] transition-colors">
            + Add Contact
          </button>
        </div>
      </div>

      {importStatus && (
        <div className="mb-4 px-4 py-2.5 bg-blue-50 border border-blue-100 rounded-lg text-sm text-blue-700">{importStatus}</div>
      )}

      {/* Filters */}
      <div className="flex gap-3 mb-4">
        <input
          type="text"
          placeholder="Search email…"
          value={filter.q}
          onChange={e => setFilter(f => ({ ...f, q: e.target.value }))}
          className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <select value={filter.campaign_id} onChange={e => setFilter(f => ({ ...f, campaign_id: e.target.value }))} className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
          <option value="">All campaigns</option>
          {campaigns.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
        <select value={filter.status} onChange={e => setFilter(f => ({ ...f, status: e.target.value }))} className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
          <option value="">All statuses</option>
          <option value="active">Active</option>
          <option value="unsubscribed">Unsubscribed</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {/* Add form */}
      {showAdd && (
        <div className="bg-white rounded-xl border border-gray-200 p-5 mb-4">
          <h2 className="text-sm font-semibold text-gray-900 mb-3">Add Contact</h2>
          <form onSubmit={handleAdd} className="space-y-3">
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Email *</label>
                <input required type="email" value={addForm.email} onChange={e => setAddForm(f => ({ ...f, email: e.target.value }))} className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">First Name</label>
                <input value={addForm.first_name} onChange={e => setAddForm(f => ({ ...f, first_name: e.target.value }))} className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Campaign *</label>
                <select required value={addForm.campaign_id} onChange={e => setAddForm(f => ({ ...f, campaign_id: e.target.value }))} className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option value="">Select…</option>
                  {campaigns.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>
            </div>
            {addError && <p className="text-xs text-red-600 bg-red-50 px-3 py-2 rounded-lg">{addError}</p>}
            <div className="flex gap-2">
              <button type="submit" disabled={addSaving} className="px-4 py-2 bg-[#FF5500] text-white rounded-lg text-sm font-medium hover:bg-[#e64d00] disabled:opacity-50">{addSaving ? "Adding…" : "Add & Send Step 1"}</button>
              <button type="button" onClick={() => { setShowAdd(false); setAddError(""); }} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">Cancel</button>
            </div>
          </form>
        </div>
      )}

      {/* Table */}
      {loading ? (
        <p className="text-gray-400 text-sm">Loading…</p>
      ) : contacts.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
          <p className="text-gray-400 text-sm">No contacts found.</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Contact</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Campaign</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Step</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Last Sent</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {contacts.map(c => (
                <tr key={c.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3">
                    <div className="font-medium text-gray-900">{c.email}</div>
                    {c.first_name && <div className="text-xs text-gray-400">{c.first_name}</div>}
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{c.campaigns?.name ?? "—"}</td>
                  <td className="px-4 py-3">
                    <select
                      value={c.status}
                      onChange={e => updateStatus(c.id, e.target.value)}
                      className={`text-xs font-medium px-2 py-1 rounded-full border-0 cursor-pointer ${STATUS_COLORS[c.status]}`}
                    >
                      <option value="active">active</option>
                      <option value="unsubscribed">unsubscribed</option>
                      <option value="completed">completed</option>
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <input
                      type="number"
                      min={0}
                      defaultValue={c.sequence_step}
                      onBlur={e => {
                        const v = Number(e.target.value);
                        if (v !== c.sequence_step) updateStep(c.id, v);
                      }}
                      className="w-14 px-2 py-1 text-xs border border-gray-200 rounded text-center"
                    />
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-400">{fmtDate(c.last_email_sent_at)}</td>
                  <td className="px-4 py-3 text-right">
                    <button onClick={() => deleteContact(c.id)} className="text-xs text-red-500 hover:text-red-700">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
