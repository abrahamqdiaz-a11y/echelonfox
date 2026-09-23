"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

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

  const brand = (
    <Link href="/" className="brand" style={{ marginBottom: "2.5rem" }}>
      {/* eslint-disable-next-line @next/next/no-img-element -- 6 KB mark, sized by CSS */}
      <img src="/images/fox-mark.png" alt="" width={192} height={76} />
      <span>EchelonFox</span>
    </Link>
  );

  if (status === "success") {
    return (
      <main className="utility-page">
        {brand}
        <div className="utility-card" role="status">
          <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ marginBottom: "1.25rem" }}>
            <path d="M5 13l4 4L19 7" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h1 className="h3" style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>
            You&apos;re subscribed!
          </h1>
          <p className="muted" style={{ margin: 0 }}>
            {message}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="utility-page">
      {brand}
      <div className="utility-card">
        <h1 className="h3" style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
          Stay in the loop
        </h1>
        <p className="muted" style={{ margin: "0 0 1.75rem" }}>
          Enter your details below to subscribe.
        </p>

        <form onSubmit={handleSubmit} className="form">
          <div className="field">
            <label htmlFor="subscribe-first-name">First name</label>
            <input
              id="subscribe-first-name"
              type="text"
              autoComplete="given-name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              placeholder="Jane"
            />
          </div>
          <div className="field">
            <label htmlFor="subscribe-email">
              Email <span className="muted">(required)</span>
            </label>
            <input
              id="subscribe-email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="jane@example.com"
            />
          </div>

          <div aria-live="polite">
            {status === "error" && <p className="form-status">{message}</p>}
          </div>

          <button type="submit" disabled={status === "loading"} className="btn btn--block">
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      </div>
    </main>
  );
}
