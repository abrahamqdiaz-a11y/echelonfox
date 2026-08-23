import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GrowthSprint from "@/components/GrowthSprint";

export const metadata: Metadata = {
  title: { absolute: "SaaS Marketing — Echelon Fox" },
  description:
    "Pipeline-focused marketing for SaaS companies. SEO, paid media, and content built around qualified trials, demos, and self-serve signups.",
  alternates: { canonical: "https://echelonfox.com/saas" },
  openGraph: {
    title: "SaaS Marketing — Echelon Fox",
    description: "SEO, content, and pipeline strategy for SaaS companies winning against well-funded competitors.",
    url: "https://echelonfox.com/saas",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SaaS Marketing — Echelon Fox" }],
  },
};

const channels = [
  {
    title: "SEO & Content",
    desc: "Bottom-of-funnel keyword strategy, comparison pages, and category content that captures buyers at the decision stage.",
  },
  {
    title: "Paid Search",
    desc: "Google and LinkedIn campaigns targeting high-intent terms — built around cost per trial or demo, not cost per click.",
  },
  {
    title: "Conversion & CRO",
    desc: "Funnel analysis, landing page optimization, and onboarding copy that turns free trials into paid conversions.",
  },
  {
    title: "Pipeline Content",
    desc: "Case studies, comparison guides, and enablement content that shortens sales cycles and handles objections before the call.",
  },
];

export default function SaasPage() {
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
            top: "15%",
            right: "-5%",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(255,85,0,0.09) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
            <div style={{ width: "8px", height: "8px", background: "#FF5500", borderRadius: "50%", boxShadow: "0 0 12px #FF5500" }} />
            <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              SaaS Marketing
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              margin: "0 0 28px",
              maxWidth: "860px",
            }}
          >
            Pipeline Marketing
            <br />
            for{" "}
            <span style={{ color: "#FF5500" }}>SaaS Companies.</span>
          </h1>
          <p style={{ color: "#aaa", fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.75, maxWidth: "560px", margin: "0 0 20px" }}>
            SEO, content, and paid media built around the one metric that matters for SaaS:
            qualified pipeline. Trials, demos, and self-serve signups — not traffic reports.
          </p>
          <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: 1.65, maxWidth: "520px", margin: "0 0 48px" }}>
            We work with SaaS companies when the founding team&apos;s network stops generating leads
            and the business needs a repeatable, channel-driven growth engine.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{
                background: "#FF5500",
                color: "white",
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "16px 36px",
                textDecoration: "none",
                clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              Book a Free Growth Audit
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/pricing"
              style={{
                background: "transparent",
                color: "white",
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "15px 35px",
                textDecoration: "none",
                border: "1px solid #333",
                clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do for SaaS */}
      <section style={{ padding: "100px 32px", background: "#0a0a0a", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "48px" }}>
            <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
            <h2 style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: 0 }}>
              What We Do
            </h2>
          </div>
          <div
            className="saas-channels-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1px",
              background: "#1a1a1a",
              border: "1px solid #1a1a1a",
            }}
          >
            {channels.map((ch) => (
              <div key={ch.title} style={{ background: "#0a0a0a", padding: "48px 40px" }}>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, margin: "0 0 14px", color: "#fff" }}>{ch.title}</h3>
                <p style={{ color: "#aaa", fontSize: "0.9rem", lineHeight: 1.75, margin: 0 }}>{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process — Growth Sprint (SaaS variant) */}
      <GrowthSprint variant="saas" />

      {/* Audit CTA */}
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
            transform: "translate(-50%,-50%)",
            width: "700px",
            height: "350px",
            background: "radial-gradient(ellipse, rgba(255,85,0,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "600px", margin: "0 auto", position: "relative" }}>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", margin: "0 0 20px" }}>
            Book a Free Growth Audit
          </h2>
          <p style={{ color: "#aaa", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 12px" }}>
            No pitch, no obligation.
          </p>
          <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: 1.65, margin: "0 0 40px" }}>
            We&apos;ll show you which searches your buyers are making without finding you — and how
            your funnel compares to the competitors winning those clicks.
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
            Book a Free Growth Audit
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .saas-channels-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
