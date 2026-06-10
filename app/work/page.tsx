import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WorkCard from "@/components/WorkCard";
import { projects } from "@/lib/work-data";

export const metadata: Metadata = {
  title: "Selected Work — Echelon Fox",
  description: "Selected projects from Echelon Fox: e-commerce SEO and website builds for growing businesses.",
  alternates: { canonical: "https://echelonfox.com/work" },
  openGraph: {
    title: "Selected Work — Echelon Fox",
    description: "Selected projects from Echelon Fox: e-commerce SEO and website builds for growing businesses.",
    url: "https://echelonfox.com/work",
    type: "website",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Selected Work — Echelon Fox" }],
  },
};

// TODO: Unhide testimonials by setting SHOW_TESTIMONIALS to true and filling in the quotes below
const SHOW_TESTIMONIALS = false;

const testimonials = [
  {
    quote: "[TODO — quote from insurance agency owner]",
    name: "[TODO — name]",
    business: "[TODO — insurance agency name]",
  },
  {
    quote: "[TODO — quote from pet care business owner]",
    name: "[TODO — name]",
    business: "[TODO — pet care business name]",
  },
];

export default function WorkPage() {
  return (
    <div style={{ background: "#080808", minHeight: "100vh", color: "#fff" }}>
      <Nav />

      {/* Hero */}
      <section
        style={{
          padding: "160px 32px 100px",
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
            background: "radial-gradient(circle, rgba(255,85,0,0.10) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
            <div style={{ width: "8px", height: "8px", background: "#FF5500", borderRadius: "50%", boxShadow: "0 0 12px #FF5500" }} />
            <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Selected Work
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 7vw, 6rem)",
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              margin: "0 0 24px",
              maxWidth: "800px",
            }}
          >
            Projects That{" "}
            <span style={{ color: "#FF5500" }}>Move</span>
            <br />
            the Needle.
          </h1>
          <p style={{ color: "#888", fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.7, maxWidth: "580px", margin: 0 }}>
            A small selection of client work. Names and details shared only with permission — we let results do the talking.
          </p>
        </div>
      </section>

      {/* Project grid */}
      <section style={{ padding: "100px 32px", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div
            className="work-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}
          >
            {projects.map((card) => (
              <WorkCard key={card.name} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials strip — hidden until quotes are supplied */}
      {SHOW_TESTIMONIALS && (
        <section style={{ padding: "100px 32px", background: "#0a0a0a", borderBottom: "1px solid #1a1a1a" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "48px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                What Clients Say
              </span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }} className="testimonials-grid">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  style={{
                    background: "#111",
                    border: "1px solid #1e1e1e",
                    padding: "40px",
                  }}
                >
                  <div style={{ color: "#FF5500", fontSize: "2rem", lineHeight: 1, marginBottom: "20px" }}>&#8220;</div>
                  <p style={{ color: "#888", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 24px", fontStyle: "italic" }}>
                    {t.quote}
                  </p>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#fff" }}>{t.name}</div>
                    <div style={{ color: "#555", fontSize: "0.8rem", marginTop: "2px" }}>{t.business}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section
        style={{
          padding: "120px 32px",
          background: "#0a0a0a",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            height: "350px",
            background: "radial-gradient(ellipse, rgba(255,85,0,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "640px", margin: "0 auto", position: "relative" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              margin: "0 0 20px",
            }}
          >
            Want to Be the{" "}
            <span style={{ color: "#FF5500" }}>Next One Here?</span>
          </h2>
          <p style={{ color: "#666", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 40px" }}>
            Tell us what you&apos;re building. We&apos;ll tell you honestly whether we&apos;re the right fit.
          </p>
          <Link
            href="/#contact"
            style={{
              background: "#FF5500",
              color: "white",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "16px 40px",
              textDecoration: "none",
              clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            Start a Conversation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .work-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .work-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
