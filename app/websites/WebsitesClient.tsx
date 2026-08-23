"use client";
import Link from "next/link";

const inclusions = [
  {
    title: "Custom Design & Build",
    desc: "A fast, mobile-first site designed around what your customers are looking for.",
  },
  {
    title: "Local SEO Setup",
    desc: "Google Business Profile, on-page basics, and the structure to show up in local search.",
  },
  {
    title: "Launch & Handoff",
    desc: "You own everything. We hand it over working, with simple instructions — no hostage hosting.",
  },
];

export default function WebsitesClient() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "120px 32px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,85,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,85,0,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(255,85,0,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1400px", margin: "0 auto", width: "100%", position: "relative" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "32px" }}>
          <div style={{ width: "8px", height: "8px", background: "#FF5500", borderRadius: "50%", boxShadow: "0 0 12px #FF5500" }} />
          <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Websites for Local Businesses
          </span>
        </div>

        <h1
          style={{
            fontSize: "clamp(2.5rem, 7vw, 6rem)",
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            margin: "0 0 32px",
            maxWidth: "900px",
          }}
        >
          A Website That Actually{" "}
          <span style={{ color: "#FF5500" }}>Brings You</span>
          <br />
          Customers.
        </h1>

        <p
          style={{
            color: "#888",
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            lineHeight: 1.7,
            maxWidth: "560px",
            margin: "0 0 64px",
          }}
        >
          Flat-rate website design and build for local businesses — done in weeks, not months,
          with local SEO basics included.
        </p>

        {/* Inclusions */}
        <div
          className="websites-inclusions"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "#1a1a1a",
            border: "1px solid #1a1a1a",
            marginBottom: "64px",
          }}
        >
          {inclusions.map((item) => (
            <div
              key={item.title}
              style={{
                background: "#080808",
                padding: "40px 32px",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#0f0f0f")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#080808")}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background: "rgba(255,85,0,0.12)",
                  border: "1px solid rgba(255,85,0,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <div style={{ width: "8px", height: "8px", background: "#FF5500" }} />
              </div>
              <h2 style={{ fontSize: "1.1rem", fontWeight: 800, margin: "0 0 12px", letterSpacing: "-0.01em" }}>
                {item.title}
              </h2>
              <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div
          style={{
            display: "inline-block",
            background: "#0f0f0f",
            border: "1px solid #1e1e1e",
            padding: "24px 36px",
            marginBottom: "48px",
          }}
        >
          <div style={{ color: "#555", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px" }}>
            Pricing
          </div>
          <p style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 700, margin: 0 }}>
            Flat-rate projects starting at $1,000. One price, agreed up front, before work starts.
          </p>
        </div>

        {/* CTA */}
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
          <Link
            href="/contact"
            style={{
              background: "#FF5500",
              color: "white",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "16px 36px",
              textDecoration: "none",
              clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#FF7733")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#FF5500")}
          >
            Book a Strategy Call
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href="/work"
            style={{
              color: "#666",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FF5500")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#666")}
          >
            See our work →
          </Link>
          <a
            href="mailto:abe.quinn@echelonfox.com?subject=Website%20Project"
            style={{ color: "#666", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.05em", textDecoration: "none" }}
          >
            Or email us directly
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .websites-inclusions { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
