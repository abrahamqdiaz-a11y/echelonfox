import type { Metadata } from "next";
import ServiceNav from "@/components/ServiceNav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Paid Media Management — Meta, Google & TikTok Ads",
  description:
    "Echelon Fox manages paid media campaigns across Meta, Google, TikTok, and YouTube. Strategy-first, full-funnel ad management that scales revenue — not just impressions.",
  alternates: {
    canonical: "https://echelonfox.com/services/paid-media",
  },
  openGraph: {
    title: "Paid Media Management — Echelon Fox",
    description: "High-ROAS paid media strategy and execution across every major ad platform.",
    url: "https://echelonfox.com/services/paid-media",
    type: "website",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Paid Media Management — Echelon Fox",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-default.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Paid Media Management",
  serviceType: "Digital Marketing",
  provider: { "@type": "Organization", name: "Echelon Fox", url: "https://echelonfox.com" },
  url: "https://echelonfox.com/services/paid-media",
  description:
    "Full-funnel paid media campaigns across Meta, Google, TikTok, and YouTube — strategy-first, ROI-focused ad management that scales revenue.",
  areaServed: { "@type": "AdministrativeArea", name: "Worldwide" },
};

const process = [
  {
    step: "01",
    title: "Account & Competitive Audit",
    desc: "Before spending a dollar, we audit your existing accounts, ad history, audience data, and top competitors. We identify what's been wasted, what's working, and where the real opportunity is — across every platform you run or plan to run.",
  },
  {
    step: "02",
    title: "Full-Funnel Strategy Build",
    desc: "We map your customer journey from cold awareness to repeat purchase. Each campaign is architected around a specific funnel stage — prospecting, retargeting, or retention — with clear KPIs, bid strategies, and creative direction defined before launch.",
  },
  {
    step: "03",
    title: "Creative Strategy & Production Brief",
    desc: "Ad creative is the single biggest performance lever in paid media. We build a rigorous creative testing framework: hooks, formats, messaging angles, and calls-to-action are all treated as variables in a continuous experiment.",
  },
  {
    step: "04",
    title: "Campaign Launch & Structured Testing",
    desc: "Campaigns go live with built-in A/B structures. We test audiences, placements, creatives, and landing pages in controlled phases so we always know what variable is driving a change in performance.",
  },
  {
    step: "05",
    title: "Ongoing Optimization & Scaling",
    desc: "We analyze performance daily and make optimizations weekly. Budget is shifted toward what's working, underperforming ad sets are paused or restructured, and winning creatives are iterated on. Scaling is methodical — not reckless.",
  },
  {
    step: "06",
    title: "Reporting & Transparent Attribution",
    desc: "You receive a weekly performance brief and a live dashboard showing spend, ROAS, CPL, CAC, and pipeline contribution. We connect platform data with your CRM or analytics stack for true revenue attribution — not just last-click.",
  },
];

const platforms = [
  { name: "Meta Ads", detail: "Facebook & Instagram campaigns — prospecting, retargeting, and retention flows across feed, Stories, Reels, and Messenger." },
  { name: "Google Ads", detail: "Search, Performance Max, Shopping, Display, and YouTube — capturing high-intent demand and staying top-of-mind across the Google network." },
  { name: "TikTok Ads", detail: "In-Feed, TopView, and Spark Ads built around native creative formats that stop the scroll and drive action with younger, high-intent audiences." },
  { name: "YouTube Ads", detail: "Skippable and non-skippable pre-roll, bumper ads, and connected TV placements — video strategy that builds brand and drives direct response." },
  { name: "LinkedIn Ads", detail: "Sponsored content, Lead Gen Forms, and Conversation Ads for B2B companies targeting decision-makers by title, company size, and industry." },
  { name: "Pinterest & Snapchat", detail: "Platform-native placements for consumer brands in fashion, beauty, home, and lifestyle categories with strong visual product stories." },
];

const included = [
  { category: "Strategy & Planning", items: ["Full account audit", "Competitor ad analysis", "Audience research & mapping", "Funnel architecture", "Budget allocation framework", "KPI and ROAS target setting"] },
  { category: "Campaign Management", items: ["Campaign build-out and QA", "Bid strategy management", "Audience segmentation", "Placement and device optimization", "Frequency management", "Pixel and conversion event setup"] },
  { category: "Creative Strategy", items: ["Creative brief development", "Hook and messaging angle testing", "Format recommendations (static, video, carousel)", "Creative performance analysis", "Iteration direction and feedback", "UGC and influencer content briefs"] },
  { category: "Reporting & Analytics", items: ["Live performance dashboard", "Weekly performance brief", "Monthly strategy review", "Attribution modeling", "CRM & GA4 integration", "Incrementality analysis"] },
];

const whoFor = [
  { label: "E-commerce Brands", desc: "Direct-to-consumer brands scaling from 6 to 8 figures who need structured paid acquisition and retention systems, not one-off campaigns." },
  { label: "B2B & SaaS Companies", desc: "Technology and professional services companies building pipeline through LinkedIn, Google Search, and retargeting across the buying committee." },
  { label: "Lead Generation Businesses", desc: "Service businesses, agencies, and professional firms who need qualified inbound leads — not just traffic — at a sustainable cost per acquisition." },
  { label: "Growth-Stage Startups", desc: "Venture-backed startups with a proven product and initial traction who need to scale paid acquisition efficiently before Series A/B milestones." },
];

const faq = [
  { q: "How much should I spend on paid advertising?", a: "There is no universal minimum, but meaningful testing requires enough volume to gather statistical significance. For most brands, we recommend a minimum of $5,000/month in ad spend to begin structured testing. As channels are validated and ROAS targets are hit, budgets are scaled deliberately. We always deploy capital in proportion to your current unit economics — not arbitrarily." },
  { q: "How long does it take to see results from paid ads?", a: "Paid media can show signal quickly — often within the first 4–6 weeks — but sustainable, scalable results typically emerge over a 90-day period. The first month is audit and infrastructure. The second month is structured testing. By month three, you have data-backed clarity on what scales. Agencies promising immediate results are selling you vanity metrics." },
  { q: "What platforms should my business be advertising on?", a: "Platform selection is a function of your customer profile, AOV, and product type. E-commerce brands typically start with Meta and Google. B2B companies often prioritize LinkedIn and Google Search. Consumer apps lean into TikTok and Meta. We don't recommend platforms speculatively — we map channels to where your specific buyer actually spends time and makes decisions." },
  { q: "Do you handle ad creative, or do we need to provide it?", a: "We provide full creative strategy: briefs, format recommendations, hook frameworks, and iteration direction. For production, we work with your internal team or our network of vetted creative partners. We can also manage UGC sourcing and influencer content briefs. What we won't do is run campaigns with unstrategized creative — it's too significant a performance variable." },
  { q: "How is paid media ROI actually measured?", a: "We measure ROAS (revenue per dollar spent), CAC (cost to acquire a customer), CPL (cost per qualified lead), and contribution margin where possible. We integrate platform data with your CRM and GA4 for multi-touch attribution. We're explicit about where attribution models break down — such as view-through or cross-device — and apply appropriate skepticism to platform-reported numbers." },
  { q: "What makes your paid media management different from other agencies?", a: "Most agencies optimize inside the ad platform and call it strategy. We optimize the entire system — creative, landing page, offer, and audience in concert. We treat creative as a performance variable, not a design exercise. And we report on business outcomes — revenue, pipeline, and margin — not impressions and click-through rates." },
];

export default function PaidMediaPage() {
  return (
    <div style={{ background: "#080808", minHeight: "100vh", color: "#fff" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServiceNav />

      {/* Hero */}
      <section
        style={{
          padding: "160px 32px 100px",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid #1a1a1a",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,85,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,85,0,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "10%", right: "-5%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(255,85,0,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
            <Link href="/#services" style={{ color: "#555", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>Services</Link>
            <span style={{ color: "#333" }}>/</span>
            <span style={{ color: "#FF5500", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Paid Media</span>
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
            <div style={{ width: "8px", height: "8px", background: "#FF5500", borderRadius: "50%", boxShadow: "0 0 12px #FF5500" }} />
            <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Paid Media & Advertising</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.03em", margin: "0 0 28px", maxWidth: "900px" }}>
            Paid Media Management That Scales{" "}
            <span style={{ color: "#FF5500" }}>Revenue</span>,<br />Not Just Ad Spend
          </h1>
          <p style={{ color: "#888", fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.7, maxWidth: "620px", margin: "0 0 48px" }}>
            We manage paid media campaigns across Meta, Google, TikTok, YouTube, and LinkedIn. Every campaign is built around your unit economics — ROAS targets, CAC limits, and margin goals — not platform vanity metrics.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link
              href="/#contact"
              style={{ background: "#FF5500", color: "white", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "16px 36px", textDecoration: "none", clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))", display: "inline-flex", alignItems: "center", gap: "8px" }}
            >
              Get a Free Audit
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <Link
              href="/#services"
              style={{ background: "transparent", color: "white", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "15px 35px", textDecoration: "none", border: "1px solid #333", clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
            >
              All Services
            </Link>
          </div>
        </div>
      </section>

      {/* What is paid media */}
      <section style={{ padding: "100px 32px", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }} className="service-two-col">
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>What It Is</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.02em", margin: "0 0 24px" }}>
              What Is Paid Media Management — and Why Does It Matter?
            </h2>
          </div>
          <div>
            <p style={{ color: "#888", fontSize: "1rem", lineHeight: 1.8, margin: "0 0 20px" }}>
              Paid media management is the strategic planning, execution, and optimization of advertising campaigns on platforms where you pay for placements — Meta, Google, TikTok, YouTube, LinkedIn, and others. Done right, it is the most controllable and scalable growth channel available to a business.
            </p>
            <p style={{ color: "#888", fontSize: "1rem", lineHeight: 1.8, margin: "0 0 20px" }}>
              The critical distinction is between <strong style={{ color: "#ccc" }}>running ads</strong> and <strong style={{ color: "#ccc" }}>managing a paid media program</strong>. Running ads means boosting posts, setting a budget, and hoping for results. Managing a program means building a system: structured campaigns, creative testing protocols, audience segmentation logic, attribution setup, and optimization cadences that compound over time.
            </p>
            <p style={{ color: "#888", fontSize: "1rem", lineHeight: 1.8 }}>
              Most brands that struggle with paid media aren&apos;t failing because the channel doesn&apos;t work — they&apos;re failing because they&apos;re treating it as a tap to turn on and off rather than a machine to engineer. Our job is to build that machine.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: "100px 32px", background: "#0a0a0a", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Our Methodology</span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0, maxWidth: "600px" }}>
              How We Run Paid Media
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1px", background: "#1a1a1a", border: "1px solid #1a1a1a" }}>
            {process.map((p) => (
              <div key={p.step} style={{ background: "#0a0a0a", padding: "40px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "-10px", right: "16px", fontSize: "5rem", fontWeight: 900, color: "#141414", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>{p.step}</div>
                <div style={{ color: "#FF5500", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px" }}>Step {p.step}</div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, margin: "0 0 14px", letterSpacing: "-0.01em" }}>{p.title}</h3>
                <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section style={{ padding: "100px 32px", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Scope of Work</span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 }}>
              What&apos;s Included
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {included.map((block) => (
              <div key={block.category} style={{ background: "#0f0f0f", border: "1px solid #1e1e1e", padding: "32px" }}>
                <h3 style={{ fontSize: "0.85rem", fontWeight: 800, color: "#FF5500", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 20px" }}>{block.category}</h3>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {block.items.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "#888", fontSize: "0.9rem" }}>
                      <span style={{ color: "#FF5500", flexShrink: 0, marginTop: "2px" }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section style={{ padding: "100px 32px", background: "#0a0a0a", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Platform Expertise</span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 }}>
              Platforms We Manage
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "24px" }}>
            {platforms.map((p) => (
              <div key={p.name} style={{ background: "#111", border: "1px solid #1e1e1e", padding: "32px", display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <div style={{ width: "8px", height: "8px", background: "#FF5500", borderRadius: "50%", flexShrink: 0, marginTop: "6px" }} />
                <div>
                  <div style={{ fontWeight: 800, fontSize: "1rem", color: "#fff", marginBottom: "8px" }}>{p.name}</div>
                  <p style={{ color: "#666", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{p.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section style={{ padding: "100px 32px", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Who This Is For</span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 }}>
              Built For Brands Serious About Growth
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
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

      {/* FAQ */}
      <section style={{ padding: "100px 32px", background: "#0a0a0a", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Common Questions</span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 }}>
              Paid Media FAQ
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {faq.map((item, i) => (
              <div key={i} style={{ borderTop: "1px solid #1a1a1a", padding: "32px 0" }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#fff", margin: "0 0 14px", letterSpacing: "-0.01em" }}>{item.q}</h3>
                <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: 1.75, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 32px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,85,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,85,0,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", margin: "0 0 20px" }}>
            Ready to Build a Paid Media Program That <span style={{ color: "#FF5500" }}>Actually Works?</span>
          </h2>
          <p style={{ color: "#666", fontSize: "1rem", lineHeight: 1.7, margin: "0 0 40px" }}>
            Get a free audit of your current ad accounts. We&apos;ll identify the biggest waste and opportunity in your current setup — no commitment required.
          </p>
          <Link
            href="/#contact"
            style={{ background: "#FF5500", color: "white", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "18px 48px", textDecoration: "none", clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))", display: "inline-flex", alignItems: "center", gap: "10px" }}
          >
            Request a Free Audit
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </section>

      <Footer />
      <style>{`.service-two-col { @media (max-width: 768px) { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
    </div>
  );
}
