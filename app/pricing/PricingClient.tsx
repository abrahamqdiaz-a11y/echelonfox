"use client";
import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    tagline: "One channel, done properly.",
    price: "$1,500",
    period: "/mo",
    recommended: false,
    description:
      "For businesses that need to own one growth channel properly before adding more. One channel, weekly output, and a plan you can see progress against.",
    teamNote: null,
    includes: [
      "1 primary channel (your choice)",
      "Weekly sprint delivery",
      "Live reporting dashboard",
      "Monthly strategy review",
      "Direct Slack or email access to Abe",
    ],
    cta: "Start with Starter",
  },
  {
    name: "Growth",
    tagline: "The channels that matter, running together.",
    price: "$3,500",
    period: "/mo",
    recommended: true,
    description:
      "For businesses with steady demand that need several channels working at once — search, ads, and follow-up feeding each other rather than running in isolation.",
    teamNote:
      "Abe stays your point of contact and runs the strategy. Where a sprint needs a specialist — an editor, a designer, a developer — we bring in a vetted freelancer and stay accountable for the output.",
    includes: [
      "Up to 3 channels",
      "Weekly sprint delivery",
      "Live reporting dashboard",
      "Monthly strategy review",
      "Direct Slack or email access",
      "Quarterly competitive review",
    ],
    cta: "Start with Growth",
  },
  {
    name: "Fractional",
    tagline: "Marketing leadership without the hire.",
    price: "$6,500",
    period: "/mo",
    recommended: false,
    description:
      "For companies that want every active channel covered plus someone senior accountable for the growth number — at a fraction of the cost of building the function in-house.",
    teamNote:
      "The fractional equivalent of a marketing lead: strategy, prioritisation, and reporting from Abe, with specialist help brought in per sprint as the work requires.",
    includes: [
      "All active channels",
      "Weekly sprint delivery",
      "Live reporting dashboard",
      "Weekly strategy sync (30 min)",
      "Direct Slack or email access",
      "Monthly competitive review",
      "Board-level reporting on request",
    ],
    cta: "Enquire About Fractional",
  },
];

export default function PricingClient() {
  return (
    <section style={{ padding: "100px 32px", borderBottom: "1px solid #1a1a1a" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "48px" }}>
          <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
          <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Plans
          </span>
        </div>

        <div
          className="pricing-tiers"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "#1a1a1a", border: "1px solid #1a1a1a" }}
        >
          {tiers.map((tier) => (
            <div
              key={tier.name}
              style={{
                background: tier.recommended ? "#0d0d0b" : "#080808",
                padding: "48px 36px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = tier.recommended ? "#121210" : "#0d0d0d")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = tier.recommended ? "#0d0d0b" : "#080808")
              }
            >
              {tier.recommended && (
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    height: "3px",
                    background: "#FF5500",
                  }}
                />
              )}
              {tier.recommended && (
                <div
                  style={{
                    display: "inline-block",
                    background: "rgba(255,85,0,0.12)",
                    border: "1px solid rgba(255,85,0,0.3)",
                    color: "#FF5500",
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    padding: "4px 10px",
                    marginBottom: "20px",
                    alignSelf: "flex-start",
                  }}
                >
                  Most Popular
                </div>
              )}

              <h3 style={{ fontSize: "1.35rem", fontWeight: 900, margin: "0 0 4px", color: "#fff" }}>
                {tier.name}
              </h3>
              <p style={{ color: "#666", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.05em", margin: "0 0 24px" }}>
                {tier.tagline}
              </p>

              <p style={{ color: "#666", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 4px" }}>
                Starting at
              </p>
              <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "8px" }}>
                <span style={{ fontSize: "2.5rem", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>
                  {tier.price}
                </span>
                <span style={{ color: "#555", fontSize: "0.9rem" }}>{tier.period}</span>
              </div>
              <p style={{ color: "#555", fontSize: "0.75rem", marginBottom: "24px", lineHeight: 1.6 }}>
                Billed monthly · 60 days&apos; notice to cancel · advertising spend billed separately
                by the ad platforms
              </p>

              <p style={{ color: "#999", fontSize: "0.875rem", lineHeight: 1.7, margin: "0 0 24px" }}>
                {tier.description}
              </p>

              {tier.teamNote && (
                <div
                  style={{
                    background: "#141414",
                    border: "1px solid #222",
                    borderLeft: "3px solid #FF5500",
                    padding: "14px 16px",
                    marginBottom: "24px",
                  }}
                >
                  <p style={{ color: "#aaa", fontSize: "0.82rem", lineHeight: 1.65, margin: 0 }}>
                    {tier.teamNote}
                  </p>
                </div>
              )}

              <ul style={{ listStyle: "none", margin: "0 0 auto", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {tier.includes.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "#b0b0b0", fontSize: "0.875rem" }}>
                    <span style={{ color: "#FF5500", flexShrink: 0, marginTop: "1px" }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                style={{
                  marginTop: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  background: tier.recommended ? "#FF5500" : "transparent",
                  color: tier.recommended ? "white" : "#FF5500",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "14px 24px",
                  textDecoration: "none",
                  border: tier.recommended ? "none" : "1px solid #FF5500",
                  clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                  transition: "background 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = tier.recommended ? "#FF7733" : "rgba(255,85,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = tier.recommended ? "#FF5500" : "transparent";
                }}
              >
                {tier.cta}
                <svg aria-hidden="true" width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-tiers { grid-template-columns: 1fr !important; max-width: 520px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}
