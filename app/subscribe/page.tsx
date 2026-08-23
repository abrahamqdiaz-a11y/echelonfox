"use client";

import { useState, FormEvent } from "react";

interface Props {
  searchParams?: Promise<{ campaign_id?: string }>;
}

export default function SubscribePage({ searchParams: _sp }: Props) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [campaignId, setCampaignId] = useState(
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("campaign_id") ?? ""
      : ""
  );
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!campaignId) {
      setStatus("error");
      setMessage("No campaign specified.");
      return;
    }
    setStatus("loading");

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, first_name: firstName, campaign_id: campaignId }),
    });

    if (res.ok) {
      setStatus("success");
      setMessage("You're in! Check your inbox for a confirmation.");
    } else {
      const d = await res.json().catch(() => ({}));
      setStatus("error");
      setMessage(d.error ?? "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg aria-hidden="true" className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">You&apos;re subscribed!</h1>
          <p className="text-gray-600">{message}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">Stay in the loop</h1>
        <p className="text-gray-500 text-center mb-8">Enter your details below to subscribe.</p>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              placeholder="Jane"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="jane@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          {status === "error" && (
            <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">{message}</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-2.5 px-4 bg-[#FF5500] text-white rounded-lg font-medium hover:bg-[#e64d00] transition-colors disabled:opacity-50"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      </div>
    </main>
  );
}
