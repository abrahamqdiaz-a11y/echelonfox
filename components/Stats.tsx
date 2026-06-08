"use client";

const pillars = [
  {
    icon: "→",
    label: "Strategy First",
    sub: "Every campaign starts with a clear brief, audience map, and measurable goal — before a single dollar is spent.",
  },
  {
    icon: "◈",
    label: "Full-Funnel Expertise",
    sub: "From awareness to conversion, we architect the entire customer journey across paid, owned, and earned channels.",
  },
  {
    icon: "▲",
    label: "Transparent Reporting",
    sub: "Real-time dashboards and weekly performance reviews — you always know exactly what your budget is doing.",
  },
  {
    icon: "●",
    label: "Data-Driven Decisions",
    sub: "We test, learn, and iterate continuously. No gut-feel campaigns — every move is backed by signal and attribution.",
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

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          {pillars.map((p) => (
            <div
              key={p.label}
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
