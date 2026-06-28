import type { Metadata } from "next";
import ServiceNav from "@/components/ServiceNav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Analytics & Growth Strategy — GA4, CRO & Attribution",
  description:
    "Echelon Fox builds analytics programs that turn your marketing data into a clear growth roadmap. GA4 setup, custom dashboards, CRO, attribution modeling, and strategy that scales what works.",
  alternates: {
    canonical: "https://echelonfox.com/services/analytics-growth",
  },
  openGraph: {
    title: "Analytics & Growth Strategy — Echelon Fox",
    description: "Data without strategy is noise. We turn your numbers into a roadmap.",
    url: "https://echelonfox.com/services/analytics-growth",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Analytics & Growth Strategy — Echelon Fox",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Analytics & Growth Strategy",
  serviceType: "Digital Marketing",
  provider: { "@type": "Organization", name: "Echelon Fox", url: "https://echelonfox.com" },
  url: "https://echelonfox.com/services/analytics-growth",
  description:
    "GA4 setup, custom dashboards, CRO, attribution modeling, and growth strategy that turns marketing data into a clear roadmap.",
  areaServed: { "@type": "AdministrativeArea", name: "Worldwide" },
};

const process = [
  {
    step: "01",
    title: "Analytics Audit & Data Layer Review",
    desc: "We audit your current measurement infrastructure: GA4 configuration, conversion tracking, event setup, tag management, attribution model, and data layer integrity. Most brands have significant gaps in what's being measured and what's being measured correctly — we identify every one of them.",
  },
  {
    step: "02",
    title: "Measurement Framework Design",
    desc: "We define what success looks like for your business, then work backwards to identify every metric, event, and data point required to track it. This produces a measurement framework: the source of truth for what gets tracked, how it's named, and what it means.",
  },
  {
    step: "03",
    title: "Technical Implementation",
    desc: "We implement or correct your analytics setup: GA4 configuration, GTM container build, custom event tracking, conversion goals, enhanced e-commerce, and cross-domain tracking. We validate every event fires correctly — in the right conditions, with the right data.",
  },
  {
    step: "04",
    title: "Attribution Modeling & Multi-Touch Analysis",
    desc: "Last-click attribution lies. We build multi-touch attribution models that fairly credit every channel's contribution to conversion — and connect your marketing spend data to actual revenue. This is the foundation for every intelligent budget decision.",
  },
  {
    step: "05",
    title: "Dashboard Build & Reporting Cadence",
    desc: "We build custom dashboards in Looker Studio, GA4, or your preferred BI tool — pulling from every relevant data source into a single view. Dashboards are designed for decisions, not just data display. Weekly and monthly reporting cadences are established to keep leadership aligned.",
  },
  {
    step: "06",
    title: "CRO Testing & Growth Strategy",
    desc: "Analytics tells you what's happening. CRO determines why and what to change. We run structured A/B and multivariate tests on landing pages, checkout flows, and key conversion points — and build a growth strategy that prioritizes the highest-impact improvements first.",
  },
];

const tools = [
  { name: "Google Analytics 4 (GA4)", detail: "Full GA4 configuration: event taxonomy, conversion goals, custom dimensions, audiences, and integration with Google Ads and Search Console." },
  { name: "Google Tag Manager", detail: "GTM container architecture, tag auditing, custom trigger and variable configuration, and data layer implementation for clean, maintainable tracking." },
  { name: "Looker Studio", detail: "Custom marketing dashboards that pull from GA4, Google Ads, Meta, email platforms, and your CRM — all in one view, updated automatically." },
  { name: "Hotjar / Microsoft Clarity", detail: "Session recording, heatmap analysis, and user behavior research to identify exactly where and why users drop off in your conversion funnel." },
  { name: "Triple Whale / Northbeam", detail: "Paid media attribution platforms for e-commerce brands that need accurate cross-channel ROAS and customer acquisition cost — beyond what platform pixels report." },
  { name: "Segment / Rudderstack", detail: "Customer data platform setup for brands that need to unify behavioral data across their website, app, and marketing tools into a single, actionable data stream." },
];

const included = [
  { category: "Audit & Setup", items: ["Full analytics audit", "GA4 configuration and QA", "GTM container build", "Event and conversion tracking", "Enhanced e-commerce setup", "Cross-domain tracking"] },
  { category: "Attribution & Reporting", items: ["Multi-touch attribution model", "Custom Looker Studio dashboards", "Weekly performance reporting", "Monthly strategy review", "Channel contribution analysis", "CRM and revenue integration"] },
  { category: "CRO & Testing", items: ["Conversion funnel audit", "Heatmap and session analysis", "A/B test design and execution", "Landing page optimization", "Checkout flow optimization", "Form and CTA testing"] },
  { category: "Growth Strategy", items: ["North Star metric definition", "OKR and KPI framework", "Growth model development", "Channel prioritization matrix", "Budget allocation recommendations", "Quarterly roadmap planning"] },
];

const whoFor = [
  { label: "Scaling E-commerce Brands", desc: "Brands who are spending on multiple paid channels and need accurate attribution to know where to put the next dollar — and where to cut." },
  { label: "B2B & SaaS Companies", desc: "Companies with complex, multi-touch buying journeys who need to understand which marketing activities are actually generating pipeline and closed revenue." },
  { label: "Growth Teams & In-House Marketers", desc: "Internal marketing teams who have the execution capacity but need a rigorous measurement framework and decision-making system to operate against." },
  { label: "Funded Startups", desc: "Companies that have raised and need to deploy capital efficiently. Analytics and attribution infrastructure is the prerequisite for every scaling decision that follows." },
];

const faq = [
  { q: "What is the difference between analytics and reporting?", a: "Reporting tells you what happened. Analytics tells you why it happened and what to do about it. A weekly report might show traffic dropped 20% — analytics explains whether it was organic, paid, or direct; which pages were affected; and what changed in user behavior. We build reporting systems, but our value is in the interpretation and action layer above the data." },
  { q: "Why do we need a GA4 migration if Universal Analytics still has our data?", a: "Universal Analytics stopped collecting data in July 2023. GA4 is now the standard — but many brands migrated hastily without properly configuring their event taxonomy, conversion tracking, or attribution setup. The result is data that looks complete but is unreliable for decision-making. A proper GA4 audit and configuration is the foundation every other analytics investment depends on." },
  { q: "What is CRO and how does it relate to analytics?", a: "CRO (Conversion Rate Optimization) is the discipline of improving the percentage of visitors who take a desired action — purchase, form fill, sign-up. Analytics provides the data that identifies where to focus: which pages have the highest drop-off, which traffic segments convert worst, which steps in the funnel create friction. Analytics diagnoses the problem; CRO tests the solutions." },
  { q: "How does attribution modeling work?", a: "Attribution modeling is the method used to assign credit for a conversion to each marketing touchpoint in the customer journey. Last-click gives 100% credit to the final touchpoint before conversion. First-click credits the first. Data-driven (GA4's default) uses machine learning to distribute credit based on which touchpoints actually influenced conversion probability. No model is perfect, but data-driven multi-touch attribution is significantly more accurate than last-click for complex journeys." },
  { q: "How do you measure the ROI of channels that don't have direct click attribution?", a: "Channels like organic social, brand awareness campaigns, and offline touchpoints require methods beyond click attribution. We use media mix modeling, incrementality testing (holdout groups), brand search lift analysis, and share-of-voice correlation to estimate contribution. We're honest about attribution limits — and build models that accurately reflect that uncertainty rather than pretending a last-click number is the truth." },
  { q: "What is a growth strategy and how is it different from a marketing plan?", a: "A growth strategy defines the highest-leverage growth levers for your specific business at your current stage, and prioritizes investments accordingly. A marketing plan lists activities. A growth strategy answers: what is the one metric that, if improved, would compound into all others? Which channel, when scaled, changes the business? Which funnel step, if fixed, unlocks the most revenue? We build growth strategies around those answers — not activity lists." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function AnalyticsGrowthPage() {
  return (
    <div className="service-page" style={{ background: "#080808", minHeight: "100vh", color: "#fff" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiceNav />

      <section style={{ padding: "160px 32px 100px", position: "relative", overflow: "hidden", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,85,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,85,0,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "10%", right: "-5%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(255,85,0,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
            <Link href="/#services" style={{ color: "#555", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>Services</Link>
            <span style={{ color: "#333" }}>/</span>
            <span style={{ color: "#FF5500", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Analytics & Growth</span>
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
            <div style={{ width: "8px", height: "8px", background: "#FF5500", borderRadius: "50%", boxShadow: "0 0 12px #FF5500" }} />
            <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Analytics & Growth Strategy</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.03em", margin: "0 0 28px", maxWidth: "900px" }}>
            Analytics That Turns Data Into{" "}
            <span style={{ color: "#FF5500" }}>Decisions</span>
          </h1>
          <p style={{ color: "#888", fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.7, maxWidth: "620px", margin: "0 0 48px" }}>
            GA4 configuration, multi-touch attribution, CRO testing, and growth strategy built around your actual business metrics — not dashboard vanity numbers.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/#contact" style={{ background: "#FF5500", color: "white", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "16px 36px", textDecoration: "none", clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              Get an Analytics Audit
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <Link href="/#services" style={{ background: "transparent", color: "white", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "15px 35px", textDecoration: "none", border: "1px solid #333", clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}>All Services</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 32px", background: "#0a0a0a", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Methodology</span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 }}>Our Analytics Process</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))", gap: "1px", background: "#1a1a1a", border: "1px solid #1a1a1a" }}>
            {process.map((p) => (
              <div key={p.step} style={{ background: "#0a0a0a", padding: "40px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "-10px", right: "16px", fontSize: "5rem", fontWeight: 900, color: "#141414", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>{p.step}</div>
                <div style={{ color: "#FF5500", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px" }}>Step {p.step}</div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, margin: "0 0 14px" }}>{p.title}</h3>
                <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 32px", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Tools & Platforms</span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 }}>Analytics Stack We Work With</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))", gap: "24px" }}>
            {tools.map((t) => (
              <div key={t.name} style={{ background: "#0f0f0f", border: "1px solid #1e1e1e", padding: "32px", display: "flex", gap: "20px" }}>
                <div style={{ width: "8px", height: "8px", background: "#FF5500", borderRadius: "50%", flexShrink: 0, marginTop: "6px" }} />
                <div>
                  <div style={{ fontWeight: 800, fontSize: "1rem", color: "#fff", marginBottom: "8px" }}>{t.name}</div>
                  <p style={{ color: "#666", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 32px", background: "#0a0a0a", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Scope of Work</span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 }}>What&apos;s Included</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "24px" }}>
            {included.map((block) => (
              <div key={block.category} style={{ background: "#111", border: "1px solid #1e1e1e", padding: "32px" }}>
                <h3 style={{ fontSize: "0.85rem", fontWeight: 800, color: "#FF5500", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 20px" }}>{block.category}</h3>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {block.items.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "#888", fontSize: "0.9rem" }}>
                      <span style={{ color: "#FF5500", flexShrink: 0, marginTop: "2px" }}>→</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 32px", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Who This Is For</span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 }}>Best Fit For These Teams</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "24px" }}>
            {whoFor.map((w) => (
              <div key={w.label} style={{ background: "#0f0f0f", border: "1px solid #1e1e1e", padding: "32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                  <div style={{ width: "6px", height: "6px", background: "#FF5500", borderRadius: "50%" }} />
                  <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#fff", margin: 0 }}>{w.label}</h3>
                </div>
                <p style={{ color: "#666", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 32px", background: "#0a0a0a", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Common Questions</span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 }}>Analytics & Growth FAQ</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {faq.map((item, i) => (
              <div key={i} style={{ borderTop: "1px solid #1a1a1a", padding: "32px 0" }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#fff", margin: "0 0 14px" }}>{item.q}</h3>
                <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: 1.75, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 32px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,85,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,85,0,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", margin: "0 0 20px" }}>
            Ready to Actually Understand <span style={{ color: "#FF5500" }}>What&apos;s Driving Growth?</span>
          </h2>
          <p style={{ color: "#666", fontSize: "1rem", lineHeight: 1.7, margin: "0 0 40px" }}>
            Start with a free analytics audit. We&apos;ll review your tracking setup, attribution model, and reporting — and show you what decisions you can&apos;t currently make because of data gaps.
          </p>
          <Link href="/#contact" style={{ background: "#FF5500", color: "white", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "18px 48px", textDecoration: "none", clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))", display: "inline-flex", alignItems: "center", gap: "10px" }}>
            Get Your Free Audit
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
