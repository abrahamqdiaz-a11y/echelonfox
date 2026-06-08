"use client";

const testimonials = [
  {
    quote:
      "Echelon Fox completely transformed our paid media. In 90 days they took us from breakeven to a 4x ROAS. They don't just run ads — they build systems that print money.",
    author: "Jordan Lee",
    role: "CEO, NovaSpark Apparel",
    highlight: "4x ROAS in 90 days",
  },
  {
    quote:
      "I've worked with five agencies in the last three years. Echelon Fox is the only one I'd actually recommend without hesitation. They're obsessed with results and it shows every single month.",
    author: "Maya Chen",
    role: "CMO, Apex Financial",
    highlight: "6x lead volume increase",
  },
  {
    quote:
      "Our social media went from an afterthought to our #1 acquisition channel. The Echelon Fox team thinks differently — they treat your brand like their own.",
    author: "Darius Thomas",
    role: "Founder, Vibe Health Co.",
    highlight: "1.2M monthly impressions",
  },
];

export default function Testimonials() {
  return (
    <section
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
              Client Testimonials
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
            Heard from the{" "}
            <span style={{ color: "#FF5500" }}>Best</span>
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "24px",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
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
              {/* Quote mark */}
              <div
                style={{
                  fontSize: "5rem",
                  fontWeight: 900,
                  color: "#FF5500",
                  lineHeight: 0.8,
                  marginBottom: "24px",
                  opacity: 0.6,
                  fontFamily: "Georgia, serif",
                }}
              >
                &ldquo;
              </div>

              {/* Highlight result */}
              <div
                style={{
                  display: "inline-block",
                  background: "rgba(255,85,0,0.1)",
                  border: "1px solid rgba(255,85,0,0.25)",
                  color: "#FF5500",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "5px 12px",
                  marginBottom: "20px",
                }}
              >
                {t.highlight}
              </div>

              <p
                style={{
                  color: "#aaa",
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  margin: "0 0 32px",
                  fontStyle: "italic",
                }}
              >
                {t.quote}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                {/* Avatar placeholder */}
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #FF5500, #FF7733)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 900,
                    fontSize: "1rem",
                    color: "white",
                    flexShrink: 0,
                  }}
                >
                  {t.author[0]}
                </div>
                <div>
                  <div
                    style={{ fontWeight: 700, fontSize: "0.9rem", color: "#fff", marginBottom: "2px" }}
                  >
                    {t.author}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#555" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
