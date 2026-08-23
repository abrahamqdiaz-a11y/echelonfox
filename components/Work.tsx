"use client";
import Link from "next/link";

const segments = [
  {
    title: "Local & Service Businesses",
    desc: "Insurance agencies, beauty and wellness, pet care, home services, clinics, and professional firms — businesses that win a geographic market on visibility, reviews, and fast follow-up.",
    href: "/websites",
    bg: "#0a1a0a",
    tags: ["Website Design & Build", "Local SEO", "Lead Follow-Up"],
  },
  {
    title: "E-Commerce & Retail",
    desc: "Online stores and direct-to-consumer brands. Search, paid media, and email systems built around profitable, repeatable revenue rather than traffic for its own sake.",
    href: "/ecommerce",
    bg: "#1a0a00",
    tags: ["Paid Media", "SEO & Content", "Email & CRM"],
  },
  {
    title: "B2B & SaaS",
    desc: "Companies that need pipeline, not impressions. Search-led demand generation and content that answers the questions buyers ask before they ever fill in a form.",
    href: "/saas",
    bg: "#0a0f1a",
    tags: ["SEO & Content", "Paid Search", "Pipeline Content"],
  },
];

export default function Work() {
  return (
    <section
      id="work"
      style={{
        padding: "120px 32px",
        background: "#0a0a0a",
        borderTop: "1px solid #1a1a1a",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "72px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
            <span
              style={{
                color: "#FF5500",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Who We Work With
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Who We{" "}
            <span style={{ color: "#FF5500" }}>Work With</span>
          </h2>
          <p style={{ color: "#888", fontSize: "1rem", lineHeight: 1.75, maxWidth: "620px", margin: "20px 0 0" }}>
            We&apos;re not built around one industry. What our clients share is a real business, real
            revenue, and nobody in-house who owns growth full-time.
          </p>
        </div>

        {/* Segment cards */}
        <div
          className="who-we-work-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {segments.map((seg) => (
            <Link
              key={seg.title}
              href={seg.href}
              style={{
                background: "#111",
                border: "1px solid #1e1e1e",
                padding: "56px 48px",
                position: "relative",
                overflow: "hidden",
                textDecoration: "none",
                display: "block",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#FF5500";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#1e1e1e";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* Accent glow */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "200px",
                  height: "200px",
                  background: `radial-gradient(circle at top right, ${seg.bg}, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />

              <h3
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 900,
                  color: "#fff",
                  margin: "0 0 20px",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                {seg.title}
              </h3>

              <p
                style={{
                  color: "#aaa",
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  margin: "0 0 32px",
                  maxWidth: "420px",
                }}
              >
                {seg.desc}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "32px" }}>
                {seg.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "rgba(255,85,0,0.1)",
                      color: "#FF5500",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "5px 12px",
                      border: "1px solid rgba(255,85,0,0.2)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span
                style={{
                  color: "#FF5500",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Learn More
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="#FF5500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .who-we-work-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .who-we-work-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
