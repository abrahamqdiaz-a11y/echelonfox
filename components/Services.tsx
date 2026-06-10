"use client";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Paid Media & Advertising",
    desc: "Meta, Google, TikTok, YouTube — we build and manage high-ROAS campaigns that scale. Every dollar works harder.",
    tags: ["Meta Ads", "Google Ads", "TikTok Ads", "YouTube"],
    href: "/services/paid-media",
  },
  {
    number: "02",
    title: "SEO & Content Strategy",
    desc: "Outperform competitors in search with content that converts. We build authority, traffic, and leads that compound over time.",
    tags: ["Technical SEO", "Content Marketing", "Link Building"],
    href: "/services/seo-content",
  },
  {
    number: "03",
    title: "Social Media Management",
    desc: "From strategy to posting to community — we run your social presence like a media brand. Consistent, creative, relentless.",
    tags: ["Instagram", "LinkedIn", "TikTok", "X / Twitter"],
    href: "/services/social-media",
  },
  {
    number: "04",
    title: "Brand Identity & Creative",
    desc: "Your brand is your first impression. We build identities that demand attention and creative that makes people stop scrolling.",
    tags: ["Branding", "Design", "Video", "Copywriting"],
    href: "/services/brand-identity",
  },
  {
    number: "05",
    title: "Email & CRM Marketing",
    desc: "Turn your list into a revenue engine. Automated flows, segmentation, and campaigns that convert subscribers into customers.",
    tags: ["Klaviyo", "HubSpot", "Automations", "A/B Testing"],
    href: "/services/email-crm",
  },
  {
    number: "06",
    title: "Analytics & Growth Strategy",
    desc: "Data without strategy is noise. We turn your numbers into a roadmap — tracking what matters and scaling what works.",
    tags: ["GA4", "Dashboards", "CRO", "Attribution"],
    href: "/services/analytics-growth",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "120px 32px",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
      {/* Header */}
      <div style={{ marginBottom: "72px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "16px",
          }}
        >
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
            What We Do
          </span>
        </div>
        <h2
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            margin: 0,
            maxWidth: "600px",
          }}
        >
          Services Built to{" "}
          <span style={{ color: "#FF5500" }}>Dominate</span>
        </h2>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(380px, 100%), 1fr))",
          gap: "1px",
          background: "#1a1a1a",
          border: "1px solid #1a1a1a",
        }}
      >
        {services.map((s) => (
          <Link
            key={s.number}
            href={s.href}
            className="service-card"
            style={{
              background: "#080808",
              padding: "48px 40px",
              transition: "background 0.2s",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
              textDecoration: "none",
              color: "inherit",
              display: "block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#0f0f0f";
              const num = e.currentTarget.querySelector(".svc-num") as HTMLElement;
              if (num) num.style.color = "#FF5500";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#080808";
              const num = e.currentTarget.querySelector(".svc-num") as HTMLElement;
              if (num) num.style.color = "#1f1f1f";
            }}
          >
            {/* Large background number */}
            <div
              className="svc-num"
              style={{
                position: "absolute",
                top: "-10px",
                right: "20px",
                fontSize: "6rem",
                fontWeight: 900,
                color: "#1f1f1f",
                lineHeight: 1,
                transition: "color 0.3s",
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              {s.number}
            </div>

            <h3
              style={{
                fontSize: "1.35rem",
                fontWeight: 800,
                margin: "0 0 16px",
                letterSpacing: "-0.01em",
                position: "relative",
              }}
            >
              {s.title}
            </h3>
            <p
              style={{
                color: "#666",
                fontSize: "0.95rem",
                lineHeight: 1.7,
                margin: "0 0 24px",
                position: "relative",
              }}
            >
              {s.desc}
            </p>
            <div
              style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
                position: "relative",
              }}
            >
              {s.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: "#141414",
                    border: "1px solid #222",
                    color: "#888",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "5px 12px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div style={{ marginTop: "20px", display: "flex", alignItems: "center", gap: "6px", color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Learn More
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#FF5500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
          </Link>
        ))}
      </div>
      </div>
    </section>
  );
}
