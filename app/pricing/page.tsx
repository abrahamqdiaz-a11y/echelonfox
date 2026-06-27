import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GrowthSprint from "@/components/GrowthSprint";
import OldVsNew from "@/components/OldVsNew";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: { absolute: "Pricing — Echelon Fox" },
  description:
    "Flat-rate monthly plans for e-commerce and SaaS brands. No retainer traps, no rotating account managers — dedicated strategists, weekly sprints.",
  alternates: { canonical: "https://echelonfox.com/pricing" },
  openGraph: {
    title: "Pricing — Echelon Fox",
    description: "Flat-rate monthly plans. Dedicated strategist, weekly sprints, real-time dashboards.",
    url: "https://echelonfox.com/pricing",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Pricing — Echelon Fox" }],
  },
};

export default function PricingPage() {
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
            background: "radial-gradient(circle, rgba(255,85,0,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
            <div style={{ width: "8px", height: "8px", background: "#FF5500", borderRadius: "50%", boxShadow: "0 0 12px #FF5500" }} />
            <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Pricing
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              margin: "0 0 28px",
              maxWidth: "800px",
            }}
          >
            Flat Rate.{" "}
            <span style={{ color: "#FF5500" }}>Weekly</span>
            <br />
            Output.
          </h1>
          <p style={{ color: "#aaa", fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.75, maxWidth: "560px", margin: 0 }}>
            One monthly fee. A dedicated strategist who knows your business. Work that ships every
            week — not sitting in a backlog waiting for a report.
          </p>
        </div>
      </section>

      {/* How We Work — Growth Sprint */}
      <GrowthSprint />

      {/* Every Plan Includes */}
      <section style={{ padding: "100px 32px", background: "#0a0a0a", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "48px" }}>
            <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
            <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Every Plan Includes
            </span>
          </div>
          <div
            className="every-plan-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}
          >
            {[
              { title: "Dedicated Strategist", desc: "The same person runs your account start to finish. They know your market, your numbers, and your goals — no handoffs." },
              { title: "Weekly Sprint Delivery", desc: "Every week has defined actions and defined outputs. Work ships every week, not once a quarter." },
              { title: "Real-Time Dashboard", desc: "Live reporting tied to revenue and pipeline — not impressions. You see what moved before we tell you about it." },
              { title: "Monthly Strategy Review", desc: "A structured 60-minute review of what's working, what's being cut, and what the next sprint prioritizes." },
              { title: "Direct Access", desc: "You communicate directly with the people doing the work. No account manager buffer, no ticketing system." },
              { title: "2-Month Notice to Cancel", desc: "Month-to-month with a 2-month notice window. No annual traps, no auto-renewal surprises." },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#0f0f0f",
                  border: "1px solid #1e1e1e",
                  padding: "28px 24px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                }}
              >
                <div style={{ width: "6px", height: "6px", background: "#FF5500", borderRadius: "50%", flexShrink: 0, marginTop: "7px" }} />
                <div>
                  <div style={{ fontWeight: 800, fontSize: "0.95rem", color: "#fff", marginBottom: "6px" }}>{item.title}</div>
                  <p style={{ color: "#999", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Old vs New comparison */}
      <OldVsNew />

      {/* Pricing tiers — client component handles hover */}
      <PricingClient />

      {/* What the First Two Weeks Look Like */}
      <section style={{ padding: "100px 32px", background: "#0a0a0a", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
            <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Getting Started
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              margin: "0 0 16px",
            }}
          >
            What the First Two Weeks Look Like
          </h2>
          <p style={{ color: "#aaa", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 56px", maxWidth: "580px" }}>
            Before we touch a single ad or publish a single page, we learn your business. Every
            engagement starts the same way.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0px", borderLeft: "2px solid #1e1e1e" }}>
            {[
              {
                n: "1",
                title: "Deep-dive kickoff",
                desc: "We review your business goals, current marketing, analytics, competitive landscape, and the channels you've tried. We identify what's working, what's wasted, and where the biggest growth levers are.",
              },
              {
                n: "2",
                title: "Roadmap delivery",
                desc: "You get a clear, prioritized plan: which channels, which actions, in which order, and what each is worth. No 40-page strategy deck — a working document we execute against starting week three.",
              },
              {
                n: "3",
                title: "Sprint one kicks off",
                desc: "Defined actions, defined outputs, from day one of the engagement. You'll see work ship before most agencies have finished their onboarding questionnaire.",
              },
            ].map((item) => (
              <div
                key={item.n}
                style={{
                  paddingLeft: "32px",
                  paddingBottom: "40px",
                  position: "relative",
                }}
              >
                {/* Timeline dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "-9px",
                    top: "3px",
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: "#080808",
                    border: "2px solid #FF5500",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FF5500" }} />
                </div>
                <div style={{ color: "#FF5500", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px" }}>
                  Week {item.n === "3" ? "3+" : item.n}
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 800, margin: "0 0 10px", color: "#fff" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#aaa", fontSize: "0.9rem", lineHeight: 1.75, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channel Add-Ons */}
      <section style={{ padding: "100px 32px", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
            <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Add-Ons
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 900, letterSpacing: "-0.02em", margin: "0 0 16px" }}>
            Channel Add-Ons
          </h2>
          <p style={{ color: "#aaa", fontSize: "1rem", lineHeight: 1.75, maxWidth: "560px", margin: "0 0 48px" }}>
            Every plan runs on a primary channel. Add more as the business grows.
          </p>
          <div
            className="addons-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "#1a1a1a", border: "1px solid #1a1a1a" }}
          >
            {[
              { label: "Paid Media", note: "Meta, Google, TikTok, YouTube" },
              { label: "SEO & Content", note: "Technical, on-page, content production" },
              { label: "Email & CRM", note: "Klaviyo, HubSpot, lifecycle flows" },
              { label: "Social Media", note: "Strategy, content, scheduling, community" },
              { label: "Brand & Creative", note: "Ad creative, landing pages, copy" },
              { label: "Analytics & CRO", note: "GA4, dashboards, conversion rate work" },
            ].map((a) => (
              <div
                key={a.label}
                style={{ background: "#080808", padding: "28px 24px" }}
              >
                <div style={{ fontWeight: 800, fontSize: "0.95rem", color: "#fff", marginBottom: "4px" }}>{a.label}</div>
                <div style={{ color: "#666", fontSize: "0.8rem" }}>{a.note}</div>
                <div style={{ color: "#444", fontSize: "0.75rem", fontWeight: 700, marginTop: "12px", letterSpacing: "0.05em" }}>
                  {/* TODO: Set add-on pricing */}
                  +$[TODO]/mo
                </div>
              </div>
            ))}
          </div>
          <p style={{ color: "#555", fontSize: "0.8rem", marginTop: "16px" }}>
            {/* TODO: Confirm add-on pricing before publishing */}
            Add-on pricing applied per active channel. Contact us for bundle rates.
          </p>
        </div>
      </section>

      {/* Closing CTA */}
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
        <div style={{ maxWidth: "640px", margin: "0 auto", position: "relative" }}>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", margin: "0 0 20px" }}>
            Not Sure Which Plan?
          </h2>
          <p style={{ color: "#aaa", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 12px" }}>
            Book a free audit. No pitch, no pressure.
          </p>
          <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: 1.65, margin: "0 0 40px" }}>
            We&apos;ll assess where you are today, how it compares to others in your space, and which
            plan would actually move the needle — or whether we&apos;re even the right fit.
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
            Book a Free Audit
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .every-plan-grid { grid-template-columns: 1fr 1fr !important; }
          .addons-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .every-plan-grid { grid-template-columns: 1fr !important; }
          .addons-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
