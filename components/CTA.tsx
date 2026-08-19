"use client";

import React, { useState } from "react";
import Link from "next/link";

const srOnly: React.CSSProperties = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0,0,0,0)",
  whiteSpace: "nowrap",
  border: 0,
};

export default function CTA() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(e.target as HTMLFormElement) as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) {
        setStatus("error");
        return;
      }
      setStatus("success");
      setFormData({ name: "", email: "", company: "", message: "" });
      setConsent(false);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: "120px 32px",
        background: "#0a0a0a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background elements */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,85,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,85,0,0.03) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(255,85,0,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(255,85,0,0.1)",
            border: "1px solid rgba(255,85,0,0.3)",
            borderRadius: "999px",
            padding: "6px 16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              background: "#FF5500",
              borderRadius: "50%",
              boxShadow: "0 0 8px #FF5500",
            }}
          />
          <span
            style={{
              color: "#FF5500",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Now Taking On New Clients
          </span>
        </div>

        <h2
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: "-0.03em",
            margin: "0 0 24px",
          }}
        >
          Ready to{" "}
          <span style={{ color: "#FF5500" }}>Grow</span>
          <br />
          Your Business?
        </h2>

        <p
          style={{
            color: "#aaa",
            fontSize: "1.1rem",
            lineHeight: 1.7,
            margin: "0 0 40px",
            maxWidth: "560px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Tell us where you are and what you&apos;re trying to grow. We&apos;ll show you how your
          marketing stacks up against competitors in your space — and where the biggest quick
          wins are.
        </p>

        {/* Form */}
        {status === "success" ? (
          <div
            style={{
              maxWidth: "560px",
              margin: "0 auto 32px",
              padding: "32px",
              border: "1px solid #FF5500",
              textAlign: "center",
            }}
          >
            <p style={{ color: "#FF5500", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 8px" }}>
              Message sent.
            </p>
            <p style={{ color: "#888", fontSize: "0.9rem", margin: 0 }}>
              We&apos;ll be in touch shortly.
            </p>
          </div>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            aria-label="Contact form"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              maxWidth: "560px",
              margin: "0 auto 32px",
            }}
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div style={{ display: "none" }}>
              <label htmlFor="cta-bot-field">Do not fill this out if you are human</label>
              <input id="cta-bot-field" name="bot-field" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="cta-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div>
                <label htmlFor="cta-name" style={srOnly}>Your Name (required)</label>
                <input
                  id="cta-name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  aria-required="true"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    background: "#111",
                    border: "1px solid #222",
                    color: "#fff",
                    padding: "14px 18px",
                    fontSize: "0.9rem",
                    outline: "none",
                    transition: "border-color 0.2s",
                    width: "100%",
                  }}
                  onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "#FF5500")}
                  onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "#222")}
                />
              </div>
              <div>
                <label htmlFor="cta-email" style={srOnly}>Email Address (required)</label>
                <input
                  id="cta-email"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  aria-required="true"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    background: "#111",
                    border: "1px solid #222",
                    color: "#fff",
                    padding: "14px 18px",
                    fontSize: "0.9rem",
                    outline: "none",
                    transition: "border-color 0.2s",
                    width: "100%",
                  }}
                  onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "#FF5500")}
                  onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "#222")}
                />
              </div>
            </div>
            <label htmlFor="cta-company" style={srOnly}>Company or Brand</label>
            <input
              id="cta-company"
              type="text"
              name="company"
              placeholder="Company / Brand"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              style={{
                background: "#111",
                border: "1px solid #222",
                color: "#fff",
                padding: "14px 18px",
                fontSize: "0.9rem",
                outline: "none",
                transition: "border-color 0.2s",
                width: "100%",
              }}
              onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "#FF5500")}
              onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "#222")}
            />
            <label htmlFor="cta-message" style={srOnly}>Message (required)</label>
            <textarea
              id="cta-message"
              name="message"
              placeholder="Tell us about your goals and what you're trying to achieve..."
              rows={4}
              required
              aria-required="true"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{
                background: "#111",
                border: "1px solid #222",
                color: "#fff",
                padding: "14px 18px",
                fontSize: "0.9rem",
                outline: "none",
                resize: "vertical",
                transition: "border-color 0.2s",
                fontFamily: "inherit",
                width: "100%",
              }}
              onFocus={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = "#FF5500")}
              onBlur={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = "#222")}
            />
            <label
              htmlFor="cta-consent"
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <input
                id="cta-consent"
                type="checkbox"
                name="consent"
                required
                aria-required="true"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                style={{ marginTop: "2px", accentColor: "#FF5500", flexShrink: 0, cursor: "pointer" }}
              />
              <span style={{ color: "#666", fontSize: "0.8rem", lineHeight: 1.6 }}>
                I agree to Echelon Fox processing my data to respond to this inquiry. See our{" "}
                <Link href="/privacy" style={{ color: "#FF5500", textDecoration: "underline" }}>
                  Privacy Policy
                </Link>{" "}
                for details.
              </span>
            </label>
            {status === "error" && (
              <p role="alert" style={{ color: "#ff4444", fontSize: "0.85rem", margin: 0 }}>
                Something went wrong. Please try again.
              </p>
            )}
            <button
              type="submit"
              disabled={status === "submitting" || !consent}
              style={{
                background: (status === "submitting" || !consent) ? "#aa3800" : "#FF5500",
                color: "white",
                fontWeight: 700,
                fontSize: "0.9rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "16px 40px",
                border: "none",
                cursor: (status === "submitting" || !consent) ? "not-allowed" : "pointer",
                opacity: !consent ? 0.6 : 1,
                clipPath:
                  "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                transition: "background 0.2s, transform 0.2s",
                width: "100%",
              }}
              onMouseEnter={(e) => {
                if (status !== "submitting" && consent) {
                  (e.currentTarget as HTMLElement).style.background = "#FF7733";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                }
              }}
              onMouseLeave={(e) => {
                if (status !== "submitting" && consent) {
                  (e.currentTarget as HTMLElement).style.background = "#FF5500";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }
              }}
            >
              {status === "submitting" ? "Sending..." : "Send It — Let’s Talk →"}
            </button>
          </form>
        )}

        <p style={{ color: "#444", fontSize: "0.8rem", letterSpacing: "0.05em" }}>
          No spam. No long sales calls. Just real strategy.
        </p>
      </div>
    </section>
  );
}
