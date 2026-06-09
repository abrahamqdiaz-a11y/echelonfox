"use client";

const values = [
  {
    title: "No Vanity Metrics",
    desc: "We don't celebrate impressions — we celebrate revenue. Every report ties directly to your business outcomes, not agency optics.",
  },
  {
    title: "Your Brand, Our Obsession",
    desc: "We embed deep into your category, your competitors, and your customers before writing a single line of copy or setting a single bid.",
  },
  {
    title: "Accountability Built In",
    desc: "Fixed monthly retainers with clearly scoped deliverables. No scope creep, no surprise invoices — just the work we said we'd do, done exceptionally.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        padding: "120px 32px",
        background: "#080808",
        borderTop: "1px solid #1a1a1a",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
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
              How We Work
            </span>
            <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
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
            Why Clients{" "}
            <span style={{ color: "#FF5500" }}>Stay</span>
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))",
            gap: "24px",
          }}
        >
          {values.map((v, i) => (
            <div
              key={i}
              className="value-card"
              style={{
                background: "#0f0f0f",
                border: "1px solid #1e1e1e",
                padding: "40px",
                position: "relative",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "#FF5500")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "#1e1e1e")
              }
            >
              <div
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  color: "#FF5500",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                0{i + 1}
              </div>
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 800,
                  color: "#fff",
                  margin: "0 0 16px",
                  letterSpacing: "-0.01em",
                }}
              >
                {v.title}
              </h3>
              <p
                style={{
                  color: "#777",
                  fontSize: "0.95rem",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "64px" }}>
          <p style={{ color: "#555", fontSize: "0.9rem", marginBottom: "24px" }}>
            Ready to work with an agency that puts your growth first?
          </p>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#FF5500",
              color: "white",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "16px 36px",
              textDecoration: "none",
              clipPath:
                "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "#FF7733")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "#FF5500")
            }
          >
            Let&apos;s Talk
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
