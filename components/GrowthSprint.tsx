"use client";

interface GrowthSprintProps {
  variant?: "default" | "ecommerce" | "saas";
}

const step1Variants = {
  default: {
    title: "Audit & Plan",
    desc: "We map your funnel, competitors, and highest-leverage channels. Then build a prioritized roadmap with the metrics we'll be judged on.",
  },
  ecommerce: {
    title: "Store Audit & Plan",
    desc: "We dig into your traffic, rankings, ad accounts, and email flows. Then build a prioritized roadmap around the biggest revenue levers in your funnel.",
  },
  saas: {
    title: "Pipeline Audit & Plan",
    desc: "We map your current rankings, content gaps, and conversion funnel against the competitors winning your buyers' searches. Then build a roadmap around the keywords and pages worth the most pipeline.",
  },
};

const sharedSteps = [
  {
    step: "02",
    title: "Sprint",
    desc: "Every week has defined actions and defined outputs — content published, ads launched, technical fixes shipped. Nothing sits in a backlog.",
  },
  {
    step: "03",
    title: "Measure",
    desc: "Real-time dashboards tied to revenue, not vanity. You see what moved, what didn't, and what it cost — before we do.",
  },
  {
    step: "04",
    title: "Adjust",
    desc: "We optimize based on signal, not schedule. When something works, we scale it. When something doesn't, we kill it and reallocate. Then the next sprint starts.",
  },
];

export default function GrowthSprint({ variant = "default" }: GrowthSprintProps) {
  const s1 = step1Variants[variant];
  const steps = [{ step: "01", ...s1 }, ...sharedSteps];

  return (
    <section
      style={{
        padding: "120px 32px",
        background: "#080808",
        borderTop: "1px solid #1a1a1a",
        borderBottom: "1px solid #1a1a1a",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "64px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
            <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              How We Work
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              margin: "0 0 16px",
            }}
          >
            The Growth Sprint
          </h2>
          <p style={{ color: "#aaa", fontSize: "1rem", lineHeight: 1.75, maxWidth: "560px", margin: 0 }}>
            Every engagement runs on the same weekly cycle. No black boxes, no waiting for monthly
            reports — you see output every week.
          </p>
        </div>

        {/* 4-step grid */}
        <div
          className="growth-sprint-steps"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "#1a1a1a",
            border: "1px solid #1a1a1a",
          }}
        >
          {steps.map((s, i) => (
            <div
              key={s.step}
              style={{
                background: "#080808",
                padding: "40px 32px",
                position: "relative",
                overflow: "hidden",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#0d0d0d")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#080808")}
            >
              {/* Ghost step number */}
              <div
                style={{
                  position: "absolute",
                  top: "-10px",
                  right: "16px",
                  fontSize: "5rem",
                  fontWeight: 900,
                  color: "#141414",
                  lineHeight: 1,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                {s.step}
              </div>

              {/* Step marker row */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    background: "rgba(255,85,0,0.12)",
                    border: "1px solid rgba(255,85,0,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span style={{ color: "#FF5500", fontSize: "0.7rem", fontWeight: 900 }}>{s.step}</span>
                </div>
                {i < 3 && (
                  <div
                    style={{
                      flex: 1,
                      height: "1px",
                      background: "repeating-linear-gradient(90deg, #FF5500 0, #FF5500 4px, transparent 4px, transparent 10px)",
                      opacity: 0.25,
                    }}
                  />
                )}
                {i === 3 && (
                  <span
                    style={{
                      color: "#444",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    ↩ Repeats
                  </span>
                )}
              </div>

              <h3 style={{ fontSize: "1.05rem", fontWeight: 800, margin: "0 0 12px", color: "#fff" }}>
                {s.title}
              </h3>
              <p style={{ color: "#aaa", fontSize: "0.875rem", lineHeight: 1.75, margin: 0 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .growth-sprint-steps { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .growth-sprint-steps { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
