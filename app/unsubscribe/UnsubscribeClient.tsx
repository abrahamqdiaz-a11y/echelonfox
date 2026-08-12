"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function UnsubscribeContent() {
  const params = useSearchParams();
  const contactId = params.get("contact_id");
  const status = params.get("status");

  const [email, setEmail] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "not_found" | "error">("idle");

  useEffect(() => {
    if (contactId && !status) {
      window.location.href = `/api/unsubscribe?contact_id=${contactId}`;
    }
  }, [contactId, status]);

  const cardStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "480px",
    background: "var(--card-bg)",
    border: "1px solid var(--border)",
    borderRadius: "16px",
    padding: "48px 40px",
    textAlign: "center",
  };

  const iconWrap: React.CSSProperties = {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    background: "rgba(255,85,0,0.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 24px",
  };

  if (status === "success") {
    return (
      <div style={cardStyle}>
        <div style={iconWrap}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--white)", marginBottom: "12px" }}>
          You&apos;ve been unsubscribed
        </h1>
        <p style={{ color: "var(--gray)", lineHeight: 1.6, marginBottom: "32px" }}>
          You won&apos;t receive any more emails from us. Sorry to see you go!
        </p>
        <Link href="/" style={{ display: "inline-block", padding: "12px 28px", background: "var(--orange)", color: "var(--white)", borderRadius: "8px", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>
          Back to Echelon Fox
        </Link>
      </div>
    );
  }

  if (status === "not_found") {
    return (
      <div style={cardStyle}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--white)", marginBottom: "12px" }}>
          Link not found
        </h1>
        <p style={{ color: "var(--gray)", lineHeight: 1.6 }}>
          This unsubscribe link is invalid or has already been processed.
        </p>
      </div>
    );
  }

  if (contactId) {
    return (
      <div style={cardStyle}>
        <p style={{ color: "var(--gray)" }}>Processing your unsubscribe request…</p>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormStatus("submitting");
    try {
      const res = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setFormStatus("success");
      } else if (res.status === 404) {
        setFormStatus("not_found");
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  }

  if (formStatus === "success") {
    return (
      <div style={cardStyle}>
        <div style={iconWrap}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--white)", marginBottom: "12px" }}>
          You&apos;ve been unsubscribed
        </h1>
        <p style={{ color: "var(--gray)", lineHeight: 1.6, marginBottom: "32px" }}>
          You won&apos;t receive any more emails from us. Sorry to see you go!
        </p>
        <Link href="/" style={{ display: "inline-block", padding: "12px 28px", background: "var(--orange)", color: "var(--white)", borderRadius: "8px", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>
          Back to Echelon Fox
        </Link>
      </div>
    );
  }

  return (
    <div style={cardStyle}>
      <div style={iconWrap}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--white)", marginBottom: "12px" }}>
        Unsubscribe
      </h1>
      <p style={{ color: "var(--gray)", lineHeight: 1.6, marginBottom: "28px" }}>
        Enter your email address to be removed from all mailing lists.
      </p>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 16px",
            borderRadius: "8px",
            border: "1px solid var(--border)",
            background: "rgba(255,255,255,0.05)",
            color: "var(--white)",
            fontSize: "0.95rem",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
        {formStatus === "not_found" && (
          <p style={{ color: "#f87171", fontSize: "0.85rem", margin: 0 }}>
            No account found for that email address.
          </p>
        )}
        {formStatus === "error" && (
          <p style={{ color: "#f87171", fontSize: "0.85rem", margin: 0 }}>
            Something went wrong. Please try again.
          </p>
        )}
        <button
          type="submit"
          disabled={formStatus === "submitting"}
          style={{
            padding: "12px 28px",
            background: "var(--orange)",
            color: "var(--white)",
            borderRadius: "8px",
            fontWeight: 600,
            fontSize: "0.95rem",
            border: "none",
            cursor: formStatus === "submitting" ? "not-allowed" : "pointer",
            opacity: formStatus === "submitting" ? 0.7 : 1,
          }}
        >
          {formStatus === "submitting" ? "Unsubscribing…" : "Unsubscribe"}
        </button>
      </form>
    </div>
  );
}

export default function UnsubscribeClient() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--black)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 24px", fontFamily: "var(--font-inter), sans-serif" }}>
      <Link href="/" style={{ display: "inline-block", marginBottom: "48px" }}>
        <span style={{ fontWeight: 800, fontSize: "1.5rem", letterSpacing: "-0.02em", color: "var(--white)" }}>
          Echelon<span style={{ color: "var(--orange)" }}>Fox</span>
        </span>
      </Link>
      <Suspense fallback={<div style={{ color: "var(--gray)" }}>Loading…</div>}>
        <UnsubscribeContent />
      </Suspense>
      <p style={{ marginTop: "32px", fontSize: "0.8rem", color: "#444", textAlign: "center" }}>
        © {new Date().getFullYear()} Echelon Fox. All rights reserved.
      </p>
    </div>
  );
}
