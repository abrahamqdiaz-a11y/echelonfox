import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WorkCard from "@/components/WorkCard";
import { projects } from "@/lib/work-data";

export const metadata: Metadata = {
  title: { absolute: "Selected Work — Echelon Fox" },
  description: "Selected client projects from Echelon Fox across insurance, beauty and e-commerce, and pet services — the challenge, the work delivered, and where it landed.",
  alternates: { canonical: "https://echelonfox.com/work" },
  openGraph: {
    title: "Selected Work — Echelon Fox",
    description: "Selected client projects from Echelon Fox across insurance, beauty and e-commerce, and pet services — the challenge, the work delivered, and where it landed.",
    url: "https://echelonfox.com/work",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Selected Work — Echelon Fox" }],
  },
};

export default function WorkPage() {
  return (
    <div style={{ background: "#080808", minHeight: "100vh", color: "#fff" }}>
      <Nav />

      <main>
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
            A selection of client projects across different industries. We publish client names,
            logos, and screenshots only where we have written permission, and we don&apos;t publish
            performance numbers we can&apos;t evidence from the client&apos;s own analytics.
          </p>
        </div>
      </section>

      {/* Project grid */}
      <section style={{ padding: "100px 32px", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
            <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Case Studies
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)", fontWeight: 900, letterSpacing: "-0.02em", margin: "0 0 40px" }}>
            Recent Projects
          </h2>
          <div
            className="work-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}
          >
            {projects.map((card) => (
              <WorkCard key={card.name} card={card} />
            ))}
          </div>

          <div
            style={{
              marginTop: "48px",
              background: "#0f0f0f",
              border: "1px solid #1e1e1e",
              borderLeft: "3px solid #FF5500",
              padding: "24px 28px",
              maxWidth: "820px",
            }}
          >
            <h2 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#fff", margin: "0 0 10px" }}>
              Why there are no percentages on this page
            </h2>
            <p style={{ color: "#8a8a8a", fontSize: "0.9rem", lineHeight: 1.75, margin: 0 }}>
              Plenty of agencies publish growth figures that can&apos;t be traced back to anything.
              We only publish numbers when they come from a client&apos;s own analytics or ad
              account and the client has agreed to them being shared. On a call we&apos;ll walk you
              through the live accounts we have permission to show, and tell you which parts of a
              result the marketing can fairly claim.
            </p>
          </div>
        </div>
      </section>

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
            href="/contact"
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
            Book a Strategy Call
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      </main>

      <Footer />

      <style>{`
        @media (max-width: 860px) {
          .work-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
