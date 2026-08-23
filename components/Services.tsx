"use client";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Websites & Landing Pages",
    desc: "Design and build for sites that load fast, read clearly, and turn visitors into enquiries. Plus the ongoing improvements most sites never get.",
    tags: ["Design & Build", "Landing Pages", "Local SEO Setup"],
    href: "/websites",
  },
  {
    number: "02",
    title: "SEO & Content Strategy",
    desc: "Get found for the searches your customers actually make. Technical fixes, page structure, and content that compounds into traffic and leads.",
    tags: ["Technical SEO", "Local SEO", "Content Marketing"],
    href: "/services/seo-content",
  },
  {
    number: "03",
    title: "Paid Media & Advertising",
    desc: "Meta, Google, TikTok, and YouTube campaigns built and managed against cost per lead or sale — not impressions. Ad spend is billed separately by the platforms.",
    tags: ["Meta Ads", "Google Ads", "TikTok Ads", "YouTube"],
    href: "/services/paid-media",
  },
  {
    number: "04",
    title: "Email & CRM Marketing",
    desc: "Turn your list and your CRM into a follow-up system. Automated flows, segmentation, and campaigns that bring people back instead of letting leads go cold.",
    tags: ["Klaviyo", "HubSpot", "Automations", "A/B Testing"],
    href: "/services/email-crm",
  },
  {
    number: "05",
    title: "Social Media Management",
    desc: "Strategy, content, scheduling, and community — a consistent presence on the channels where your customers already spend their time.",
    tags: ["Instagram", "LinkedIn", "TikTok", "X / Twitter"],
    href: "/services/social-media",
  },
  {
    number: "06",
    title: "Brand Identity & Creative",
    desc: "Your brand is the first impression. Identity, messaging, and creative that make people stop, understand what you do, and trust it.",
    tags: ["Branding", "Design", "Video", "Copywriting"],
    href: "/services/brand-identity",
  },
  {
    number: "07",
    title: "Analytics & Growth Strategy",
    desc: "Data without strategy is noise. Clean tracking, dashboards you'll actually read, and conversion work that lifts results from the traffic you already have.",
    tags: ["GA4", "Dashboards", "CRO", "Attribution"],
    href: "/services/analytics-growth",
  },
  {
    number: "08",
    title: "AI Agents & Automation",
    desc: "Practical automation inside the tools you already use — instant lead response, appointment scheduling, CRM workflows, follow-up sequences, and internal admin.",
    tags: ["Lead Response", "Scheduling", "CRM Workflows", "Follow-Up"],
    href: "/ai-agents",
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
            maxWidth: "760px",
          }}
        >
          Everything a Growing Business{" "}
          <span style={{ color: "#FF5500" }}>Needs to Market Itself</span>
        </h2>
        <p
          style={{
            color: "#888",
            fontSize: "1rem",
            lineHeight: 1.75,
            maxWidth: "640px",
            margin: "24px 0 0",
          }}
        >
          Three jobs, whatever your industry: bring the right people in, convert more of the ones
          already looking, and follow up reliably so nothing leaks. Your plan uses the handful of
          services that move those numbers for your business — not all eight at once.
        </p>
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
              <svg aria-hidden="true" width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#FF5500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
          </Link>
        ))}
      </div>
      </div>
    </section>
  );
}
