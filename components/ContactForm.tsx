"use client";

import React, { useId, useState } from "react";
import Link from "next/link";
import Arrow from "@/components/site/Arrow";
import { SITE } from "@/lib/site";

interface ContactFormProps {
  /** Show visible field labels instead of screen-reader-only ones. */
  visibleLabels?: boolean;
  /** Text on the submit button. */
  submitLabel?: string;
  /**
   * The submit button is the page's final call to action, so it takes the accent.
   * Only one control per page should do this.
   */
  final?: boolean;
}

export default function ContactForm({
  visibleLabels = false,
  submitLabel = "Start the conversation",
  final = true,
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

  const labelClass = visibleLabels ? undefined : "sr-only";

  if (status === "success") {
    return (
      <div role="status" aria-live="polite" className="form-success">
        <p className="serif" style={{ fontSize: "1.6rem", lineHeight: 1.2, margin: "0 0 0.75rem" }}>
          Thanks — your message is in.
        </p>
        <p className="muted" style={{ margin: "0 0 1.5rem" }}>
          We read every enquiry and reply within one business day. If you&apos;d rather
          pick a time now, you can book straight into the calendar.
        </p>
        <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
          Book a time
          <span className="sr-only"> (opens in a new tab)</span>
          <Arrow />
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
      className="form"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <div style={{ display: "none" }} aria-hidden="true">
        <label htmlFor={id("bot")}>Do not fill this out if you are human</label>
        <input id={id("bot")} name="bot-field" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor={id("name")} className={labelClass}>
            Your name <span className="muted">(required)</span>
          </label>
          <input
            id={id("name")}
            type="text"
            name="name"
            placeholder={visibleLabels ? undefined : "Your name"}
            required
            autoComplete="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="field">
          <label htmlFor={id("email")} className={labelClass}>
            Email address <span className="muted">(required)</span>
          </label>
          <input
            id={id("email")}
            type="email"
            name="email"
            placeholder={visibleLabels ? undefined : "Email address"}
            required
            autoComplete="email"
            inputMode="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor={id("company")} className={labelClass}>
          Company or business name
        </label>
        <input
          id={id("company")}
          type="text"
          name="company"
          placeholder={visibleLabels ? undefined : "Company or business"}
          autoComplete="organization"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        />
      </div>

      <div className="field">
        <label htmlFor={id("message")} className={labelClass}>
          Where does growth feel stuck? <span className="muted">(required)</span>
        </label>
        <textarea
          id={id("message")}
          name="message"
          placeholder="What the business does, where growth feels stuck, and what you've tried so far."
          rows={5}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <label htmlFor={id("consent")} className="consent">
        <input
          id={id("consent")}
          type="checkbox"
          name="consent"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
        />
        <span>
          I agree to Echelon Fox using these details to respond to my enquiry. See our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </span>
      </label>

      <div aria-live="polite">
        {status === "error" && (
          <p className="form-status">
            <strong style={{ fontWeight: 500 }}>That didn&apos;t send.</strong> Please try again, or email{" "}
            <a className="text-link" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>{" "}
            directly.
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className={`btn btn--block${final ? " btn--final" : ""}`}
      >
        {status === "submitting" ? "Sending…" : submitLabel}
        {status !== "submitting" && <Arrow />}
      </button>
    </form>
  );
}
