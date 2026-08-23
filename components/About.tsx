"use client";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "120px 32px",
        background: "#0f0d0c",
        borderTop: "1px solid #1a1a1a",
      }}
    >
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        {/* Section label */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
          <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
          <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Why Echelon Fox Exists
          </span>
        </div>

        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            margin: "0 0 48px",
          }}
        >
          Why Echelon Fox{" "}
          <span style={{ color: "#FF5500" }}>Exists</span>
        </h2>

        {/* Founder letter */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            marginBottom: "48px",
          }}
        >
          {[
            "Most marketing agencies sell you a retainer and then hand you off to a junior account manager you've never met. You get a monthly PDF full of impressions, a quarterly call where nothing changes, and the slow realization that nobody at the agency actually knows your business.",
            "I started Echelon Fox because I think that model is broken.",
            "I learn your market, your competitors, and your numbers, and I stay in the room as the business changes. Work runs in weekly sprints so it ships instead of sitting in a backlog. Where a job needs a specialist — a video editor, a developer, a designer — I bring in someone I've worked with and stay accountable for the result.",
            "That's worked for retail and e-commerce brands, insurance agencies, beauty businesses, pet and home services, and B2B companies. The channels change by industry; the way we work doesn't.",
            "We're small by design. You work directly with the person doing the work — no layers, no telephone game, no re-explaining your strategy to someone new every quarter.",
            "If that sounds like what you've been looking for, let's talk.",
          ].map((para, i) => (
            <p
              key={i}
              style={{
                color: i === 1 ? "#fff" : "#b0b0b0",
                fontSize: i === 1 ? "1.15rem" : "1rem",
                fontWeight: i === 1 ? 700 : 400,
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Signature */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            paddingTop: "40px",
            borderTop: "1px solid #1e1e1e",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid #333",
              flexShrink: 0,
              position: "relative",
            }}
          >
            <Image
              src="/profile pic of me.png"
              alt="Abe Quinn, Founder of Echelon Fox"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: "1rem", color: "#fff", marginBottom: "2px" }}>
              Abe Quinn
            </div>
            <div style={{ fontSize: "0.8rem", color: "#FF5500", fontWeight: 600, letterSpacing: "0.04em" }}>
              Founder, Echelon Fox
            </div>
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          style={{
            background: "#FF5500",
            color: "white",
            fontWeight: 700,
            fontSize: "0.85rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "14px 32px",
            textDecoration: "none",
            clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#FF7733")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#FF5500")}
        >
          Book a Strategy Call
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
