import type { Metadata } from "next";
import ServiceNav from "@/components/ServiceNav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Email & CRM Marketing — Klaviyo, HubSpot & Automation",
  description:
    "Echelon Fox builds email and CRM programs that turn subscribers into customers and customers into repeat buyers. Klaviyo, HubSpot, automations, segmentation, and campaign strategy.",
  alternates: {
    canonical: "https://echelonfox.com/services/email-crm",
  },
  openGraph: {
    title: "Email & CRM Marketing — Echelon Fox",
    description: "Turn your list into a revenue engine. Automated flows, segmentation, and campaigns that convert.",
    url: "https://echelonfox.com/services/email-crm",
    type: "website",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Email & CRM Marketing — Echelon Fox",
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
  name: "Email & CRM Marketing",
  serviceType: "Digital Marketing",
  provider: { "@type": "Organization", name: "Echelon Fox", url: "https://echelonfox.com" },
  url: "https://echelonfox.com/services/email-crm",
  description:
    "Klaviyo, HubSpot, automations, segmentation, and campaign strategy that turns subscribers into customers and customers into repeat buyers.",
  areaServed: { "@type": "AdministrativeArea", name: "Worldwide" },
};

const process = [
  {
    step: "01",
    title: "CRM Audit & Data Hygiene",
    desc: "We start by auditing your current email list and CRM setup: deliverability health, list quality, existing segmentation, active automations, and historical campaign performance. Poor data quality is the most common reason email programs underperform — we fix it before building on it.",
  },
  {
    step: "02",
    title: "Customer Journey Mapping",
    desc: "We map every stage of your customer lifecycle — from first opt-in to loyal repeat buyer — and identify the automation opportunities at each transition. Where do buyers stall? Where do customers churn? Email should address every friction point in the journey.",
  },
  {
    step: "03",
    title: "Segmentation Architecture",
    desc: "One-size-fits-all email is a revenue leak. We build segmentation logic based on purchase history, browse behavior, engagement level, lifecycle stage, and demographic data. The right message to the right segment at the right time converts dramatically better than broadcast.",
  },
  {
    step: "04",
    title: "Automation Flow Build",
    desc: "We build and configure every automation your business needs: welcome series, abandon cart and browse flows, post-purchase sequences, win-back campaigns, and lead nurture tracks for B2B. Each flow has clear entry conditions, branching logic, and exit criteria.",
  },
  {
    step: "05",
    title: "Campaign Strategy & Execution",
    desc: "Beyond automations, we plan and execute your ongoing campaign calendar — promotional sends, newsletters, product announcements, and seasonal campaigns. Each send is planned against your list health, segment targeting, and deliverability constraints.",
  },
  {
    step: "06",
    title: "Testing, Optimization & Reporting",
    desc: "Subject lines, send times, content blocks, CTAs, and offers are all subject to structured A/B testing. We report on revenue attributed, open rate, click rate, conversion rate, and list growth — and use that data to continuously improve every component of the program.",
  },
];

const platforms = [
  { name: "Klaviyo", detail: "The leading email and SMS platform for e-commerce brands. We build complete Klaviyo programs: flows, campaigns, segmentation, SMS integration, and reporting dashboards." },
  { name: "HubSpot", detail: "End-to-end CRM, marketing automation, and email for B2B and service businesses. We set up HubSpot workflows, lead scoring, lifecycle stages, and reporting that connects marketing to sales pipeline." },
  { name: "ActiveCampaign", detail: "Powerful automation and CRM for SMBs and mid-market. We build ActiveCampaign programs with advanced conditional logic, contact scoring, and sales CRM integration." },
  { name: "Mailchimp / Mailchimp Pro", detail: "For brands already on Mailchimp, we optimize existing setups, migrate to advanced features, and build proper automation and segmentation architecture." },
  { name: "Salesforce Marketing Cloud", detail: "Enterprise-grade email, journey builder, and data management for larger organizations with complex data structures and multi-brand requirements." },
  { name: "Attentive / Postscript", detail: "SMS marketing platforms for e-commerce brands. We build SMS programs that complement email — with compliance-first list building, segmentation, and campaign execution." },
];

const included = [
  { category: "Strategy & Setup", items: ["Email deliverability audit", "List cleaning and hygiene", "CRM architecture design", "Segmentation logic build", "Customer lifecycle mapping", "Platform configuration and QA"] },
  { category: "Automation Flows", items: ["Welcome series", "Abandon cart flow", "Browse abandonment flow", "Post-purchase sequence", "Win-back / re-engagement", "B2B lead nurture tracks", "VIP / loyalty flows", "Sunset / unsubscribe flow"] },
  { category: "Campaign Management", items: ["Monthly campaign calendar", "Campaign copywriting", "Email design and coding", "Segmented send strategy", "A/B test setup and analysis", "Promotional campaign execution"] },
  { category: "Analytics & Growth", items: ["Revenue attribution reporting", "Deliverability monitoring", "List growth tracking", "A/B test reporting", "Benchmark analysis", "Monthly performance review"] },
];

const whoFor = [
  { label: "E-commerce & DTC Brands", desc: "Email is consistently the highest-ROI channel for e-commerce. Welcome flows, cart abandonment, and post-purchase sequences recover lost revenue and extend customer LTV." },
  { label: "B2B & SaaS Companies", desc: "Lead nurture tracks, trial conversion sequences, and onboarding email programs for companies with longer sales cycles and multiple stakeholders in the buying process." },
  { label: "Subscription & Membership Businesses", desc: "Retention-focused email programs that reduce churn, re-engage at-risk subscribers, and maximize LTV through upsell and cross-sell sequences." },
  { label: "Service Businesses & Coaches", desc: "Lead magnet nurture sequences, consultation booking flows, and client onboarding emails for service providers who need email to do the selling and the onboarding." },
];

const faq = [
  { q: "What is email automation and how does it work?", a: "Email automation refers to email sequences triggered by a specific user action or event — rather than being manually sent by a person. Examples: a welcome series triggered when someone joins your list, an abandon cart email triggered when someone leaves without purchasing, or a win-back sequence triggered when a customer hasn't bought in 90 days. Automation runs continuously and generates revenue passively once built." },
  { q: "How do you improve email deliverability?", a: "Deliverability is a function of sender reputation, list quality, and content quality. We improve it by: cleaning inactive subscribers, authenticating your sending domain (SPF, DKIM, DMARC), warming new sending infrastructure, segmenting sends to your most engaged contacts first, and avoiding content patterns that trigger spam filters. Deliverability is a technical discipline — poor inbox placement kills an otherwise strong program." },
  { q: "How often should we be emailing our list?", a: "Frequency should be calibrated to your audience and content quality. E-commerce brands can typically send 3–5 times per week to engaged segments without degrading deliverability. B2B brands generally operate at 2–4 sends per month. The right answer is: as often as you have something genuinely valuable to say. Emailing for the sake of hitting a frequency target is a deliverability problem waiting to happen." },
  { q: "What is the difference between email marketing and CRM?", a: "Email marketing is the channel — how you communicate with contacts via email. CRM (Customer Relationship Management) is the underlying system that stores contact data, tracks interactions, scores leads, and manages the relationship across touchpoints. Good email marketing requires good CRM data: segmentation, personalization, and lifecycle automation all depend on accurate, well-organized contact records." },
  { q: "How do you measure email marketing ROI?", a: "The primary metrics are revenue attributed (either direct click or assisted), revenue per subscriber per month, and list growth rate. Below those we track open rate, click-through rate, conversion rate, and unsubscribe rate by segment and flow. We connect email data to your e-commerce platform or CRM to tie sends directly to order and pipeline value." },
  { q: "Can email marketing work for B2B lead generation?", a: "Yes — email is one of the most effective B2B channels when used correctly. The mechanism is different from e-commerce: B2B email marketing nurtures leads over longer cycles, builds trust through educational content, and moves prospects through defined lifecycle stages toward a sales conversation. The key is building a permission-based list through content offers, events, and partnerships rather than cold outreach." },
];

export default function EmailCrmPage() {
  return (
    <div className="service-page" style={{ background: "#080808", minHeight: "100vh", color: "#fff" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServiceNav />

      <section style={{ padding: "160px 32px 100px", position: "relative", overflow: "hidden", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,85,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,85,0,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "10%", right: "-5%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(255,85,0,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
            <Link href="/#services" style={{ color: "#555", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>Services</Link>
            <span style={{ color: "#333" }}>/</span>
            <span style={{ color: "#FF5500", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Email & CRM</span>
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
            <div style={{ width: "8px", height: "8px", background: "#FF5500", borderRadius: "50%", boxShadow: "0 0 12px #FF5500" }} />
            <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Email & CRM Marketing</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.03em", margin: "0 0 28px", maxWidth: "900px" }}>
            Email & CRM That Turns Your List Into a{" "}
            <span style={{ color: "#FF5500" }}>Revenue Engine</span>
          </h1>
          <p style={{ color: "#888", fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.7, maxWidth: "620px", margin: "0 0 48px" }}>
            Automated flows, lifecycle segmentation, and campaign strategy across Klaviyo, HubSpot, and every major email platform. We build programs that generate revenue while you sleep.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/#contact" style={{ background: "#FF5500", color: "white", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "16px 36px", textDecoration: "none", clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              Get an Email Audit
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
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 }}>How We Build Email Programs</h2>
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
              <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Platform Expertise</span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 }}>Platforms We Work With</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))", gap: "24px" }}>
            {platforms.map((p) => (
              <div key={p.name} style={{ background: "#0f0f0f", border: "1px solid #1e1e1e", padding: "32px", display: "flex", gap: "20px" }}>
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
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 }}>Best Fit For These Businesses</h2>
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
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 }}>Email & CRM FAQ</h2>
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
            Ready to Make Your Email List <span style={{ color: "#FF5500" }}>Work Harder?</span>
          </h2>
          <p style={{ color: "#666", fontSize: "1rem", lineHeight: 1.7, margin: "0 0 40px" }}>
            Get a free email program audit. We&apos;ll review your current flows, list health, and deliverability — and show you exactly where revenue is being left on the table.
          </p>
          <Link href="/#contact" style={{ background: "#FF5500", color: "white", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "18px 48px", textDecoration: "none", clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))", display: "inline-flex", alignItems: "center", gap: "10px" }}>
            Request a Free Audit
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
