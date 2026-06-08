"use client";

const caseStudies = [
  {
    client: "NovaSpark Apparel",
    industry: "Fashion E-commerce",
    result: "+340% ROAS",
    desc: "Rebuilt their entire paid media strategy across Meta and Google, resulting in a 340% return on ad spend in 90 days.",
    services: ["Paid Ads", "Creative Strategy", "Email"],
    color: "#FF5500",
    bg: "#1a0a00",
  },
  {
    client: "Apex Financial",
    industry: "Fintech / B2B",
    result: "6x Lead Volume",
    desc: "Launched a full-funnel LinkedIn and Google campaign that multiplied qualified lead flow while cutting CPL by 58%.",
    services: ["LinkedIn Ads", "SEO", "CRO"],
    color: "#FF5500",
    bg: "#0a0f1a",
  },
  {
    client: "Vibe Health Co.",
    industry: "Health & Wellness",
    result: "1.2M Impressions",
    desc: "Built a viral social strategy that generated 1.2M organic impressions per month and grew their community 10x in 6 months.",
    services: ["Social Media", "Content", "Influencers"],
    color: "#FF5500",
    bg: "#0a1a0a",
  },
  {
    client: "Crest Living",
    industry: "Real Estate",
    result: "$18M Attributed Revenue",
    desc: "End-to-end digital marketing for a premium real estate brand — from search to video to retargeting — driving $18M in closed deals.",
    services: ["Google Ads", "Video", "SEO"],
    color: "#FF5500",
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
                Case Studies
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
              Results That{" "}
              <span style={{ color: "#FF5500" }}>Speak</span>
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

        {/* Case study cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "24px",
          }}
        >
          {caseStudies.map((cs) => (
            <div
              key={cs.client}
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
                  background: `radial-gradient(circle at top right, ${cs.bg}, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />

              {/* Industry badge */}
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
                {cs.industry}
              </span>

              {/* Result */}
              <div
                style={{
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  fontWeight: 900,
                  color: "#FF5500",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {cs.result}
              </div>

              {/* Client */}
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  color: "#fff",
                  margin: "0 0 16px",
                  letterSpacing: "-0.01em",
                }}
              >
                {cs.client}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: "#666",
                  fontSize: "0.9rem",
                  lineHeight: 1.65,
                  margin: "0 0 24px",
                }}
              >
                {cs.desc}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {cs.services.map((svc) => (
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
