"use client";

const pillars = [
  {
    icon: "→",
    label: "Strategy First",
    sub: "Every campaign starts with a clear brief, an audience map, and a measurable goal — before a single dollar is spent.",
  },
  {
    icon: "◈",
    label: "Full-Funnel Thinking",
    sub: "From first impression to follow-up, we work the whole customer journey — the site, the search results, the ads, and everything after the enquiry lands.",
  },
  {
    icon: "▲",
    label: "Transparent Reporting",
    sub: "A live dashboard plus a scheduled strategy review — you always know what the work cost and what it produced.",
  },
  {
    icon: "●",
    label: "Data-Driven Decisions",
    sub: "We test, learn, and iterate. No gut-feel campaigns — moves are backed by the numbers your tracking actually reports.",
  },
];

export default function Stats() {
  return (
    <section
      id="results"
      style={{
        background: "#080808",
        borderTop: "1px solid #1a1a1a",
        borderBottom: "1px solid #1a1a1a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Orange accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, transparent, #FF5500, transparent)",
        }}
      />

      <div className="stats-inner" style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 32px" }}>
        <div
          className="stats-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          {pillars.map((p) => (
            <div
              key={p.label}
              className="stats-pillar"
              style={{
                textAlign: "center",
                padding: "48px 32px",
                position: "relative",
                borderRight: "1px solid #1a1a1a",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  color: "#FF5500",
                  lineHeight: 1,
                  marginBottom: "16px",
                }}
              >
                {p.icon}
              </div>
              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "10px",
                  letterSpacing: "-0.01em",
                }}
              >
                {p.label}
              </div>
              <div style={{ fontSize: "0.8rem", color: "#555", letterSpacing: "0.02em", lineHeight: 1.6 }}>{p.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
