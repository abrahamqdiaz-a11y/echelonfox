"use client";

import ContactForm from "@/components/ContactForm";

export default function CTA() {
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
          Tell us where you are and what you&apos;re trying to grow. We&apos;ll walk your site,
          search presence, and funnel, then show you the changes we&apos;d make first — and whether
          we&apos;re the right fit.
        </p>

        <ContactForm submitLabel="Book a Strategy Call" />

        <p style={{ color: "#666", fontSize: "0.85rem", letterSpacing: "0.03em", lineHeight: 1.7 }}>
          Prefer to pick a time?{" "}
          <a
            href="https://cal.com/abe-quinn/growth-meeting"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#FF5500", textDecoration: "underline" }}
          >
            Book a call with Abe directly
          </a>
          .
        </p>
      </div>
    </section>
  );
}
