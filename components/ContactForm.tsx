"use client";

import React, { useId, useState } from "react";
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

const fieldStyle: React.CSSProperties = {
  background: "#111",
  border: "1px solid #222",
  color: "#fff",
  padding: "14px 18px",
  fontSize: "1rem",
  outline: "none",
  transition: "border-color 0.2s",
  width: "100%",
  fontFamily: "inherit",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  color: "#999",
  fontSize: "0.78rem",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  marginBottom: "8px",
  textAlign: "left",
};

interface ContactFormProps {
  /** Show visible field labels instead of screen-reader-only ones. */
  visibleLabels?: boolean;
  /** Text on the submit button. */
  submitLabel?: string;
}

export default function ContactForm({
  visibleLabels = false,
  submitLabel = "Book a Strategy Call",
}: ContactFormProps) {
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;

  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const domForm = new FormData(e.currentTarget);
      // Netlify only intercepts POSTs to static paths; "/" is served by the
      // Next.js function, which swallows the submission. POST to the static
      // form-definition file instead. See PR #48.
      const res = await fetch("/netlify-forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(domForm as unknown as URLSearchParams).toString(),
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

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        style={{
          maxWidth: "560px",
          margin: "0 auto 32px",
          padding: "32px",
          border: "1px solid #FF5500",
          background: "#0f0f0f",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#FF5500", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 8px" }}>
          Thanks — your message is in.
        </p>
        <p style={{ color: "#999", fontSize: "0.95rem", lineHeight: 1.7, margin: "0 0 20px" }}>
          Abe reads every enquiry personally and replies within one business day. If you&apos;d rather
          pick a time now, you can book straight into the calendar.
        </p>
        <a
          href="https://cal.com/abe-quinn/growth-meeting"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "#FF5500",
            fontWeight: 700,
            fontSize: "0.85rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            textDecoration: "none",
            border: "1px solid #FF5500",
            padding: "12px 24px",
          }}
        >
          Book a time
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      action="/netlify-forms.html"
      data-netlify="true"
      netlify-honeypot="bot-field"
      aria-label="Contact Echelon Fox"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        maxWidth: "560px",
        margin: "0 auto 32px",
        width: "100%",
      }}
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <div style={{ display: "none" }} aria-hidden="true">
        <label htmlFor={id("bot")}>Do not fill this out if you are human</label>
        <input id={id("bot")} name="bot-field" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="cta-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        <div>
          <label htmlFor={id("name")} style={visibleLabels ? labelStyle : srOnly}>
            Your name (required)
          </label>
          <input
            id={id("name")}
            type="text"
            name="name"
            placeholder="Your Name"
            required
            autoComplete="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            style={fieldStyle}
            onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "#FF5500")}
            onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "#222")}
          />
        </div>
        <div>
          <label htmlFor={id("email")} style={visibleLabels ? labelStyle : srOnly}>
            Email address (required)
          </label>
          <input
            id={id("email")}
            type="email"
            name="email"
            placeholder="Email Address"
            required
            autoComplete="email"
            inputMode="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            style={fieldStyle}
            onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "#FF5500")}
            onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "#222")}
          />
        </div>
      </div>

      <div>
        <label htmlFor={id("company")} style={visibleLabels ? labelStyle : srOnly}>
          Company or business name
        </label>
        <input
          id={id("company")}
          type="text"
          name="company"
          placeholder="Company / Business"
          autoComplete="organization"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          style={fieldStyle}
          onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "#FF5500")}
          onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "#222")}
        />
      </div>

      <div>
        <label htmlFor={id("message")} style={visibleLabels ? labelStyle : srOnly}>
          What you&apos;re trying to grow (required)
        </label>
        <textarea
          id={id("message")}
          name="message"
          placeholder="What are you trying to grow, and what have you tried so far?"
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          style={{ ...fieldStyle, resize: "vertical" }}
          onFocus={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = "#FF5500")}
          onBlur={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = "#222")}
        />
      </div>

      <label
        htmlFor={id("consent")}
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "12px",
          cursor: "pointer",
          textAlign: "left",
          minHeight: "44px",
        }}
      >
        <input
          id={id("consent")}
          type="checkbox"
          name="consent"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          style={{ marginTop: "3px", accentColor: "#FF5500", flexShrink: 0, cursor: "pointer", width: "18px", height: "18px" }}
        />
        <span style={{ color: "#888", fontSize: "0.85rem", lineHeight: 1.6 }}>
          I agree to Echelon Fox using these details to respond to my enquiry. See our{" "}
          <Link href="/privacy" style={{ color: "#FF5500", textDecoration: "underline" }}>
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      <div aria-live="polite">
        {status === "error" && (
          <p style={{ color: "#ff6b6b", fontSize: "0.9rem", margin: 0, textAlign: "left" }}>
            That didn&apos;t send. Please try again, or email{" "}
            <a href="mailto:abe.quinn@echelonfox.com" style={{ color: "#FF5500" }}>
              abe.quinn@echelonfox.com
            </a>{" "}
            directly.
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        style={{
          background: status === "submitting" ? "#aa3800" : "#FF5500",
          color: "white",
          fontWeight: 700,
          fontSize: "0.9rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          padding: "16px 40px",
          border: "none",
          cursor: status === "submitting" ? "wait" : "pointer",
          clipPath:
            "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
          transition: "background 0.2s",
          width: "100%",
          minHeight: "52px",
          fontFamily: "inherit",
        }}
        onMouseEnter={(e) => {
          if (status !== "submitting") (e.currentTarget as HTMLElement).style.background = "#FF7733";
        }}
        onMouseLeave={(e) => {
          if (status !== "submitting") (e.currentTarget as HTMLElement).style.background = "#FF5500";
        }}
      >
        {status === "submitting" ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}
