"use client";

const industries = [
  {
    sector: "Fashion & E-commerce",
    desc: "We build paid media systems for direct-to-consumer brands that scale — across Meta, Google, and emerging platforms.",
    services: ["Paid Ads", "Creative Strategy", "Email"],
    bg: "#1a0a00",
  },
  {
    sector: "Fintech & B2B",
    desc: "Full-funnel demand generation for financial services and B2B companies where qualified pipeline is the only metric that matters.",
    services: ["LinkedIn Ads", "SEO", "CRO"],
    bg: "#0a0f1a",
  },
  {
    sector: "Health & Wellness",
    desc: "Community-led growth strategies that turn health brands into cultural movements — organic, paid, and influencer combined.",
    services: ["Social Media", "Content", "Influencers"],
    bg: "#0a1a0a",
  },
  {
    sector: "Real Estate & Luxury",
    desc: "End-to-end digital marketing for premium real estate brands — from search intent capture to high-production video retargeting.",
    services: ["Google Ads", "Video", "SEO"],
    bg: "#1a1500",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      style={{
        padding: "120px 32px",
        background: "#0a0a0a",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "72px",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div>
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
                Industries We Serve
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
              Built for{" "}
              <span style={{ color: "#FF5500" }}>Your Industry</span>
            </h2>
          </div>
          <a
            href="#contact"
            style={{
              color: "#FF5500",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              paddingBottom: "2px",
              borderBottom: "1px solid #FF5500",
              transition: "opacity 0.2s",
            }}
          >
            All Case Studies
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="#FF5500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Industry cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "24px",
          }}
        >
          {industries.map((ind) => (
            <div
              key={ind.sector}
              style={{
                background: "#111",
                border: "1px solid #1e1e1e",
                padding: "40px",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
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
              {/* Accent dot bg */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "120px",
                  height: "120px",
                  background: `radial-gradient(circle at top right, ${ind.bg}, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />

              {/* Sector badge */}
              <span
                style={{
                  display: "inline-block",
                  background: "#1a1a1a",
                  border: "1px solid #2a2a2a",
                  color: "#666",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "5px 12px",
                  marginBottom: "24px",
                }}
              >
                {ind.sector}
              </span>

              {/* Description */}
              <p
                style={{
                  color: "#aaa",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  margin: "0 0 28px",
                }}
              >
                {ind.desc}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {ind.services.map((svc) => (
                  <span
                    key={svc}
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
                    {svc}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
