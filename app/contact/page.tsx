import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: { absolute: "Contact Echelon Fox — Book a Strategy Call" },
  description:
    "Talk to Echelon Fox about your marketing. Send a message or book a strategy call with founder Abe Quinn — websites, SEO, paid media, email, and AI automation.",
  alternates: { canonical: "https://echelonfox.com/contact" },
  openGraph: {
    title: "Contact Echelon Fox — Book a Strategy Call",
    description:
      "Send a message or book a strategy call with founder Abe Quinn. We'll tell you honestly whether we're the right fit.",
    url: "https://echelonfox.com/contact",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Contact Echelon Fox" }],
  },
};

const expectations = [
  {
    title: "A reply from Abe, not a bot",
    desc: "Every enquiry goes straight to the founder. You'll hear back within one business day.",
  },
  {
    title: "A working call, not a pitch",
    desc: "We look at your site, your search presence, and your funnel together, and talk through what we'd change first.",
  },
  {
    title: "An honest answer on fit",
    desc: "If a monthly marketing partner isn't what you need right now, we'll say so and point you somewhere useful.",
  },
];

export default function ContactPage() {
  return (
    <div style={{ background: "#080808", minHeight: "100vh", color: "#fff" }}>
      <Nav />

      <main>
        <section
          style={{
            padding: "160px 32px 80px",
            position: "relative",
            overflow: "hidden",
            borderBottom: "1px solid #1a1a1a",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(255,85,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,85,0,0.04) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "10%",
              right: "-5%",
              width: "500px",
              height: "500px",
              background: "radial-gradient(circle, rgba(255,85,0,0.09) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div
            className="contact-grid"
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              position: "relative",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "start",
            }}
          >
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
                <div style={{ width: "8px", height: "8px", background: "#FF5500", borderRadius: "50%", boxShadow: "0 0 12px #FF5500" }} />
                <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                  Contact
                </span>
              </div>

              <h1
                style={{
                  fontSize: "clamp(2.25rem, 5.5vw, 4rem)",
                  fontWeight: 900,
                  lineHeight: 1.02,
                  letterSpacing: "-0.03em",
                  margin: "0 0 24px",
                }}
              >
                Let&apos;s Talk About{" "}
                <span style={{ color: "#FF5500" }}>Growth.</span>
              </h1>

              <p style={{ color: "#aaa", fontSize: "1.05rem", lineHeight: 1.75, margin: "0 0 40px", maxWidth: "460px" }}>
                Tell us what you&apos;re trying to grow and what you&apos;ve already tried. We work
                with businesses across industries — retail and e-commerce, insurance, beauty, pet
                services, home services, professional services, and B2B.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "40px" }}>
                {expectations.map((item) => (
                  <div key={item.title} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <div style={{ width: "6px", height: "6px", background: "#FF5500", borderRadius: "50%", flexShrink: 0, marginTop: "8px" }} />
                    <div>
                      <h2 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#fff", margin: "0 0 4px" }}>{item.title}</h2>
                      <p style={{ color: "#888", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <a
                  href="https://cal.com/abe-quinn/growth-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#FF5500",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                  }}
                >
                  Book a strategy call directly
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="mailto:abe.quinn@echelonfox.com"
                  style={{ color: "#888", fontSize: "0.9rem", textDecoration: "none" }}
                >
                  abe.quinn@echelonfox.com
                </a>
              </div>
            </div>

            <div style={{ background: "#0d0d0d", border: "1px solid #1e1e1e", padding: "40px 32px" }}>
              <h2 style={{ fontSize: "1.1rem", fontWeight: 800, margin: "0 0 8px", color: "#fff" }}>
                Send a message
              </h2>
              <p style={{ color: "#666", fontSize: "0.88rem", lineHeight: 1.7, margin: "0 0 28px" }}>
                Fields marked required must be completed. We only use these details to reply to you.
              </p>
              <ContactForm visibleLabels submitLabel="Book a Strategy Call" />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 768px) {
          .contact-grid { padding: 0 !important; }
        }
      `}</style>
    </div>
  );
}
