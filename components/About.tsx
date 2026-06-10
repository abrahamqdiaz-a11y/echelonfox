"use client";

const pillars = [
  {
    icon: "⚡",
    title: "Speed Over Perfection",
    desc: "We move fast, test, iterate, and scale winners. Waiting for perfect means losing to competitors who ship.",
  },
  {
    icon: "📊",
    title: "Data-Obsessed",
    desc: "Every decision is backed by numbers. We track everything that matters and ignore everything that doesn't.",
  },
  {
    icon: "🎯",
    title: "Results, Not Vanity",
    desc: "Likes don't pay bills. We focus on metrics that move your business forward: revenue, leads, and growth.",
  },
  {
    icon: "🌐",
    title: "Global Thinking",
    desc: "We bring enterprise-level strategy to every client — regardless of size. Your competition won't see us coming.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "120px 32px",
        background: "#0a0a0a",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* Left column */}
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
              About Echelon Fox
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              margin: "0 0 24px",
            }}
          >
            We Don&apos;t Play to{" "}
            <span style={{ color: "#FF5500" }}>Compete.</span>
            <br />
            We Play to{" "}
            <span
              style={{
                position: "relative",
                display: "inline-block",
              }}
            >
              Win.
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "#FF5500",
                }}
              />
            </span>
          </h2>

          <p
            style={{
              color: "#666",
              fontSize: "1rem",
              lineHeight: 1.8,
              margin: "0 0 24px",
            }}
          >
            Echelon Fox was built with one mission: to give e-commerce brands the kind of performance
            marketing usually reserved for companies ten times their size. Focused, measurable, and
            accountable to revenue — not vanity metrics.
          </p>

          <p
            style={{
              color: "#555",
              fontSize: "0.95rem",
              lineHeight: 1.8,
              margin: "0 0 40px",
            }}
          >
            We work with brands who want to outperform their market — not just participate in it.
            Our team combines creative firepower with analytical precision to deliver campaigns
            that consistently outperform benchmarks.
          </p>

          <a
            href="#contact"
            style={{
              background: "#FF5500",
              color: "white",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "14px 32px",
              textDecoration: "none",
              clipPath:
                "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
              display: "inline-block",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#FF7733")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#FF5500")}
          >
            Work With Us
          </a>

          {/* Founder block — TODO: fill in real name, photo, and bio */}
          <div
            style={{
              marginTop: "48px",
              paddingTop: "40px",
              borderTop: "1px solid #1e1e1e",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            {/* TODO: Replace this placeholder with a real circular photo (<img> or <Image>) */}
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background: "#1e1e1e",
                border: "2px solid #333",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#555",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Photo
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: "1rem", color: "#fff", marginBottom: "2px" }}>
                {/* TODO: Replace with founder name */}
                [FOUNDER NAME — TODO]
              </div>
              <div style={{ fontSize: "0.8rem", color: "#FF5500", fontWeight: 600, letterSpacing: "0.05em", marginBottom: "6px" }}>
                Founder, Echelon Fox
              </div>
              <p style={{ color: "#555", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>
                {/* TODO: 1–2 sentence bio */}
                [TODO — 1–2 sentences on background]
              </p>
            </div>
          </div>
        </div>

        {/* Right column - pillars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
          }}
        >
          {pillars.map((p) => (
            <div
              key={p.title}
              style={{
                background: "#111",
                border: "1px solid #1e1e1e",
                padding: "28px 24px",
                transition: "border-color 0.2s, transform 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#FF5500";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#1e1e1e";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: "1.75rem", marginBottom: "12px" }}>{p.icon}</div>
              <h4
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 800,
                  margin: "0 0 8px",
                  letterSpacing: "-0.01em",
                }}
              >
                {p.title}
              </h4>
              <p
                style={{
                  color: "#555",
                  fontSize: "0.85rem",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
