"use client";

import { useEffect, useState, FormEvent } from "react";
import { useParams, useRouter } from "next/navigation";

interface CampaignEmail {
  id: string;
  campaign_id: string;
  step_number: number;
  subject: string;
  body_html: string;
  delay_days: number;
  active: boolean;
}

interface Campaign {
  id: string;
  name: string;
  from_name: string;
  from_email: string;
  campaign_emails: CampaignEmail[];
}

type EditorMode = "list" | "edit" | "preview";

const BLANK_EMAIL: Omit<CampaignEmail, "id" | "campaign_id"> = {
  step_number: 1,
  subject: "",
  body_html: "",
  delay_days: 0,
  active: true,
};

export default function SequenceEditorPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [emails, setEmails] = useState<CampaignEmail[]>([]);
  const [mode, setMode] = useState<EditorMode>("list");
  const [editingEmail, setEditingEmail] = useState<CampaignEmail | null>(null);
  const [form, setForm] = useState(BLANK_EMAIL);
  const [saving, setSaving] = useState(false);
  const [previewHtml, setPreviewHtml] = useState("");
  const [testEmail, setTestEmail] = useState("");
  const [testStatus, setTestStatus] = useState("");
  const [loading, setLoading] = useState(true);

  async function load() {
    const r = await fetch(`/api/admin/campaigns/${id}`);
    const data: Campaign = await r.json();
    setCampaign(data);
    setEmails((data.campaign_emails ?? []).sort((a, b) => a.step_number - b.step_number));
    setLoading(false);
  }

  useEffect(() => { load(); }, [id]);

  function startNew() {
    setEditingEmail(null);
    setForm({ ...BLANK_EMAIL, step_number: emails.length + 1, delay_days: emails.length === 0 ? 0 : 3 });
    setMode("edit");
  }

  function startEdit(e: CampaignEmail) {
    setEditingEmail(e);
    setForm({ step_number: e.step_number, subject: e.subject, body_html: e.body_html, delay_days: e.delay_days, active: e.active });
    setMode("edit");
  }

  function openPreview(e: CampaignEmail) {
    setEditingEmail(e);
    setPreviewHtml(e.body_html);
    setMode("preview");
  }

  async function handleSave(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    const payload = { ...form, campaign_id: id };

    if (editingEmail) {
      await fetch(`/api/admin/campaign-emails/${editingEmail.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } else {
      await fetch("/api/admin/campaign-emails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    }
    setSaving(false);
    setMode("list");
    load();
  }

  async function deleteEmail(emailId: string) {
    if (!confirm("Delete this email step?")) return;
    await fetch(`/api/admin/campaign-emails/${emailId}`, { method: "DELETE" });
    load();
  }

  async function toggleActive(em: CampaignEmail) {
    await fetch(`/api/admin/campaign-emails/${em.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ active: !em.active }),
    });
    load();
  }

  async function move(emailId: string, dir: -1 | 1) {
    const sorted = [...emails];
    const idx = sorted.findIndex(e => e.id === emailId);
    const newIdx = idx + dir;
    if (newIdx < 0 || newIdx >= sorted.length) return;
    [sorted[idx], sorted[newIdx]] = [sorted[newIdx], sorted[idx]];
    await fetch("/api/admin/campaign-emails/reorder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids: sorted.map(e => e.id) }),
    });
    load();
  }

  async function sendTest() {
    if (!testEmail || !editingEmail) return;
    setTestStatus("Sending…");
    const r = await fetch("/api/admin/send-test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email_id: editingEmail.id, to: testEmail }),
    });
    setTestStatus(r.ok ? "Sent!" : "Failed");
    setTimeout(() => setTestStatus(""), 3000);
  }

  if (loading) return <div className="p-8 text-gray-400">Loading…</div>;
  if (!campaign) return <div className="p-8 text-red-500">Campaign not found</div>;

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center gap-3 mb-6">
        <button onClick={() => { if (mode !== "list") { setMode("list"); load(); } else router.push("/admin/campaigns"); }} className="text-sm text-gray-500 hover:text-gray-800">
          ← {mode !== "list" ? "Back to sequence" : "Campaigns"}
        </button>
        <span className="text-gray-300">/</span>
        <h1 className="text-xl font-bold text-gray-900">{campaign.name}</h1>
        {mode !== "list" && <span className="text-gray-300">/</span>}
        {mode === "edit" && <span className="text-sm text-gray-600">{editingEmail ? "Edit step" : "New step"}</span>}
        {mode === "preview" && <span className="text-sm text-gray-600">Preview</span>}
      </div>

      {/* List */}
      {mode === "list" && (
        <>
          <div className="flex justify-end mb-4">
            <button onClick={startNew} className="px-4 py-2 bg-[#FF5500] text-white rounded-lg text-sm font-medium hover:bg-[#e64d00] transition-colors">
              + Add Step
            </button>
          </div>

          {emails.length === 0 ? (
            <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
              <p className="text-gray-400 text-sm">No email steps yet. Add your first step above.</p>
            </div>
          ) : (
            <div className="space-y-2">
              {emails.map((em, idx) => (
                <div key={em.id} className={`bg-white rounded-xl border ${em.active ? "border-gray-200" : "border-gray-100 opacity-60"} p-4`}>
                  <div className="flex items-start gap-3">
                    <div className="flex flex-col gap-1 shrink-0 mt-0.5">
                      <button onClick={() => move(em.id, -1)} disabled={idx === 0} className="text-gray-300 hover:text-gray-600 disabled:opacity-20 text-xs leading-none">▲</button>
                      <button onClick={() => move(em.id, 1)} disabled={idx === emails.length - 1} className="text-gray-300 hover:text-gray-600 disabled:opacity-20 text-xs leading-none">▼</button>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">Step {em.step_number}</span>
                        {em.delay_days === 0 ? (
                          <span className="text-xs text-gray-400">Send immediately</span>
                        ) : (
                          <span className="text-xs text-gray-400">After {em.delay_days} day{em.delay_days !== 1 ? "s" : ""}</span>
                        )}
                        {!em.active && <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">Inactive</span>}
                      </div>
                      <p className="font-medium text-gray-900 text-sm truncate">{em.subject || <span className="italic text-gray-400">No subject</span>}</p>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <button onClick={() => openPreview(em)} className="px-2.5 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
                        Preview
                      </button>
                      <button onClick={() => startEdit(em)} className="px-2.5 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
                        Edit
                      </button>
                      <button
                        onClick={() => toggleActive(em)}
                        className={`px-2.5 py-1.5 text-xs font-medium rounded-lg ${em.active ? "text-orange-700 bg-orange-50 hover:bg-orange-100" : "text-green-700 bg-green-50 hover:bg-green-100"}`}
                      >
                        {em.active ? "Pause" : "Activate"}
                      </button>
                      <button onClick={() => deleteEmail(em.id)} className="px-2.5 py-1.5 text-xs font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* Edit form */}
      {mode === "edit" && (
        <form onSubmit={handleSave} className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Step Number</label>
              <input
                type="number" min={1}
                value={form.step_number}
                onChange={e => setForm(f => ({ ...f, step_number: Number(e.target.value) }))}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Delay (days after previous step)</label>
              <input
                type="number" min={0}
                value={form.delay_days}
                onChange={e => setForm(f => ({ ...f, delay_days: Number(e.target.value) }))}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <p className="text-xs text-gray-400 mt-1">0 = send immediately (step 1 only)</p>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Subject Line</label>
            <input
              required
              value={form.subject}
              onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
              placeholder="Your subject line"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Email Body (HTML)
              <span className="font-normal text-gray-400 ml-2">Use {"{{first_name}}"} for personalization</span>
            </label>
            <textarea
              value={form.body_html}
              onChange={e => setForm(f => ({ ...f, body_html: e.target.value }))}
              rows={14}
              placeholder="<p>Hi {{first_name}},</p><p>Your email content here...</p>"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 font-mono"
            />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="active" checked={form.active} onChange={e => setForm(f => ({ ...f, active: e.target.checked }))} className="w-4 h-4 accent-orange-500" />
            <label htmlFor="active" className="text-sm text-gray-700">Active</label>
          </div>

          {/* Test send row (only when editing existing) */}
          {editingEmail && (
            <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
              <input
                type="email"
                value={testEmail}
                onChange={e => setTestEmail(e.target.value)}
                placeholder="test@example.com"
                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button type="button" onClick={sendTest} className="px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium shrink-0">
                Send Test
              </button>
              {testStatus && <span className="text-xs text-gray-500">{testStatus}</span>}
            </div>
          )}

          <div className="flex gap-2 pt-1">
            <button type="submit" disabled={saving} className="px-4 py-2 bg-[#FF5500] text-white rounded-lg text-sm font-medium hover:bg-[#e64d00] disabled:opacity-50">
              {saving ? "Saving…" : "Save Step"}
            </button>
            <button type="button" onClick={() => { setMode("list"); load(); }} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Preview */}
      {mode === "preview" && editingEmail && (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between">
            <div>
              <span className="font-medium text-sm text-gray-900">{editingEmail.subject}</span>
              <span className="ml-3 text-xs text-gray-400">Step {editingEmail.step_number}</span>
            </div>
            <div className="flex gap-2">
              <button onClick={() => startEdit(editingEmail)} className="px-3 py-1.5 text-xs bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">Edit</button>
              <button onClick={() => setMode("list")} className="px-3 py-1.5 text-xs bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">Close</button>
            </div>
          </div>
          <iframe
            srcDoc={`<!DOCTYPE html><html><body style="margin:0;padding:20px;background:#f4f4f5;">${previewHtml}</body></html>`}
            className="w-full h-[600px] border-0"
            title="Email preview"
          />
        </div>
      )}
    </div>
  );
}
