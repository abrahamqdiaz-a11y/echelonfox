"use client";

import { useState } from "react";
import Link from "next/link";

export default function UnsubscribeClient() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--black)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 24px",
        fontFamily: "var(--font-inter), sans-serif",
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ display: "inline-block", marginBottom: "48px" }}>
        <span
          style={{
            fontWeight: 800,
            fontSize: "1.5rem",
            letterSpacing: "-0.02em",
            color: "var(--white)",
          }}
        >
          Echelon<span style={{ color: "var(--orange)" }}>Fox</span>
        </span>
      </Link>

      {/* Card */}
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          background: "var(--card-bg)",
          border: "1px solid var(--border)",
          borderRadius: "16px",
          padding: "48px 40px",
          textAlign: "center",
        }}
      >
        {status === "success" ? (
          <>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "rgba(255,85,0,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 13l4 4L19 7"
                  stroke="var(--orange)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "var(--white)",
                marginBottom: "12px",
              }}
            >
              You&apos;ve been unsubscribed
            </h1>
            <p style={{ color: "var(--gray)", lineHeight: 1.6, marginBottom: "32px" }}>
              We&apos;ve removed{" "}
              <strong style={{ color: "var(--gray-light)" }}>{email}</strong> from our mailing
              list. You won&apos;t receive any more marketing emails from us.
            </p>
            <Link
              href="/"
              style={{
                display: "inline-block",
                padding: "12px 28px",
                background: "var(--orange)",
                color: "var(--white)",
                borderRadius: "8px",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
              }}
            >
              Back to Echelon Fox
            </Link>
          </>
        ) : (
          <>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "rgba(255,85,0,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  stroke="var(--orange)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "var(--white)",
                marginBottom: "12px",
              }}
            >
              Unsubscribe
            </h1>
            <p style={{ color: "var(--gray)", lineHeight: 1.6, marginBottom: "32px" }}>
              Enter your email address below to unsubscribe from Echelon Fox marketing
              communications.
            </p>

            <form
              name="unsubscribe"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              style={{ textAlign: "left" }}
            >
              <input type="hidden" name="form-name" value="unsubscribe" />
              <div style={{ display: "none" }}>
                <input name="bot-field" />
              </div>

              <label
                htmlFor="email"
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "var(--gray-light)",
                  marginBottom: "8px",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  background: "#1a1a1a",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  color: "var(--white)",
                  fontSize: "1rem",
                  outline: "none",
                  marginBottom: "16px",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--orange)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />

              {status === "error" && (
                <p
                  style={{
                    color: "#ff4444",
                    fontSize: "0.875rem",
                    marginBottom: "16px",
                  }}
                >
                  Something went wrong. Please try again or email us at{" "}
                  <a
                    href="mailto:hello@echelonfox.com"
                    style={{ color: "var(--orange)", textDecoration: "none" }}
                  >
                    hello@echelonfox.com
                  </a>
                  .
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%",
                  padding: "14px",
                  background: loading ? "#555" : "var(--orange)",
                  color: "var(--white)",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: "1rem",
                  cursor: loading ? "not-allowed" : "pointer",
                  transition: "background 0.2s",
                  letterSpacing: "0.01em",
                }}
              >
                {loading ? "Processing…" : "Unsubscribe"}
              </button>
            </form>

            <p
              style={{
                marginTop: "24px",
                fontSize: "0.8rem",
                color: "var(--gray)",
                lineHeight: 1.5,
              }}
            >
              Changed your mind?{" "}
              <Link href="/" style={{ color: "var(--orange)", textDecoration: "none" }}>
                Return home
              </Link>
              .
            </p>
          </>
        )}
      </div>

      <p
        style={{
          marginTop: "32px",
          fontSize: "0.8rem",
          color: "#444",
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} Echelon Fox. All rights reserved.
      </p>
    </div>
  );
}
