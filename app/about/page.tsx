import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import About from "@/components/About";
import GrowthSprint from "@/components/GrowthSprint";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: { absolute: "About Echelon Fox — Founder-Led Marketing & Growth" },
  description:
    "Echelon Fox is a founder-led marketing and growth partner run by Abe Quinn. Websites, SEO, paid media, content, branding, email, CRM, analytics, and AI automation for businesses across industries.",
  alternates: { canonical: "https://echelonfox.com/about" },
  openGraph: {
    title: "About Echelon Fox — Founder-Led Marketing & Growth",
    description:
      "A founder-led marketing and growth partner. You work directly with the person doing the work — no account-manager layers.",
    url: "https://echelonfox.com/about",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "About Echelon Fox" }],
  },
};

const facts = [
  { label: "Founded & led by", value: "Abe Quinn" },
  { label: "Engagement model", value: "Monthly subscription" },
  { label: "Delivery rhythm", value: "Weekly sprints" },
  { label: "Industries", value: "Cross-industry" },
];

const disciplines = [
  { title: "Websites", desc: "Design, build, and ongoing improvement of sites that load fast and convert.", href: "/websites" },
  { title: "SEO & Content", desc: "Technical fixes, on-page work, and content that earns search visibility.", href: "/services/seo-content" },
  { title: "Paid Media", desc: "Search, social, and video campaigns managed against cost per lead or sale.", href: "/services/paid-media" },
  { title: "Brand & Creative", desc: "Identity, messaging, and the creative that carries it across channels.", href: "/services/brand-identity" },
  { title: "Email & CRM", desc: "Lifecycle email, segmentation, and CRM workflows that follow up reliably.", href: "/services/email-crm" },
  { title: "Social Media", desc: "Channel strategy, content production, scheduling, and community.", href: "/services/social-media" },
  { title: "Analytics & CRO", desc: "GA4, dashboards, and conversion work so decisions rest on real numbers.", href: "/services/analytics-growth" },
  { title: "AI Automation", desc: "Lead response, scheduling, and CRM automation built into your existing tools.", href: "/ai-agents" },
];

export default function AboutPage() {
  return (
    <div style={{ background: "#080808", minHeight: "100vh", color: "#fff" }}>
      <Nav />

      <main>
        {/* Hero */}
        <section
          style={{
            padding: "160px 32px 90px",
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
          <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
              <div style={{ width: "8px", height: "8px", background: "#FF5500", borderRadius: "50%", boxShadow: "0 0 12px #FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                About
              </span>
            </div>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 6.5vw, 5rem)",
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: "-0.03em",
                margin: "0 0 28px",
                maxWidth: "860px",
              }}
            >
              A Marketing Partner{" "}
              <span style={{ color: "#FF5500" }}>You Actually Talk To.</span>
            </h1>
            <p style={{ color: "#aaa", fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.75, maxWidth: "620px", margin: "0 0 48px" }}>
              Echelon Fox is a founder-led marketing and growth partner. We help businesses attract
              customers, convert more of the traffic they already have, and put practical marketing
              systems in place — across whatever channels the business actually needs.
            </p>

            <div
              className="about-facts"
              style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "#1a1a1a", border: "1px solid #1a1a1a", maxWidth: "900px" }}
            >
              {facts.map((f) => (
                <div key={f.label} style={{ background: "#0a0a0a", padding: "24px 20px" }}>
                  <div style={{ color: "#555", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px" }}>
                    {f.label}
                  </div>
                  <div style={{ color: "#fff", fontSize: "0.95rem", fontWeight: 800 }}>{f.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder letter (shared with the homepage) */}
        <About />

        {/* What we do */}
        <section style={{ padding: "100px 32px", background: "#0a0a0a", borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                What We Do
              </span>
            </div>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 900, letterSpacing: "-0.02em", margin: "0 0 16px" }}>
              One partner across the whole stack
            </h2>
            <p style={{ color: "#aaa", fontSize: "1rem", lineHeight: 1.75, maxWidth: "620px", margin: "0 0 48px" }}>
              Most businesses don&apos;t need every channel at once. They need the two or three that
              matter, run properly, with everything else ready when the business is. Your plan starts
              with the channels that will move the number you care about.
            </p>
            <div
              className="about-disciplines"
              style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "#1a1a1a", border: "1px solid #1a1a1a" }}
            >
              {disciplines.map((d) => (
                <Link
                  key={d.title}
                  href={d.href}
                  style={{ background: "#080808", padding: "28px 24px", textDecoration: "none", display: "block" }}
                >
                  <h3 style={{ color: "#fff", fontSize: "0.98rem", fontWeight: 800, margin: "0 0 8px" }}>{d.title}</h3>
                  <p style={{ color: "#777", fontSize: "0.85rem", lineHeight: 1.65, margin: 0 }}>{d.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How we work */}
        <GrowthSprint />

        {/* Principles */}
        <Testimonials />

        {/* CTA */}
        <section style={{ padding: "110px 32px", background: "#0a0a0a", textAlign: "center", position: "relative", overflow: "hidden" }}>
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
          <div style={{ maxWidth: "640px", margin: "0 auto", position: "relative" }}>
            <h2 style={{ fontSize: "clamp(1.9rem, 4.5vw, 3rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", margin: "0 0 20px" }}>
              Want to see what we&apos;d do first?
            </h2>
            <p style={{ color: "#aaa", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 36px" }}>
              Book a growth audit. We&apos;ll walk your site, search presence, and funnel, and show
              you the changes worth making — whether or not you work with us.
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
              Book a Growth Audit
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 1000px) {
          .about-disciplines { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 700px) {
          .about-facts { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 520px) {
          .about-disciplines { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
