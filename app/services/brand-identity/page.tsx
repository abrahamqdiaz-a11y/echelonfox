import type { Metadata } from "next";
import ServiceNav from "@/components/ServiceNav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brand Identity & Creative — Design, Video & Copywriting",
  description:
    "Echelon Fox builds brand identities that demand attention and creative assets that make people stop. Strategy-led branding, design systems, video production, and copywriting for ambitious brands.",
  alternates: {
    canonical: "https://echelonfox.com/services/brand-identity",
  },
  openGraph: {
    title: "Brand Identity & Creative — Echelon Fox",
    description: "Your brand is your first impression. We build identities that are impossible to ignore.",
    url: "https://echelonfox.com/services/brand-identity",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Brand Identity & Creative — Echelon Fox",
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
  name: "Brand Identity & Creative",
  serviceType: "Digital Marketing",
  provider: { "@type": "Organization", name: "Echelon Fox", url: "https://echelonfox.com" },
  url: "https://echelonfox.com/services/brand-identity",
  description:
    "Strategy-led branding, design systems, video production, and copywriting for brands that demand attention and make people stop.",
  areaServed: { "@type": "AdministrativeArea", name: "Worldwide" },
};

const process = [
  {
    step: "01",
    title: "Brand Discovery & Positioning",
    desc: "We start with strategy, not aesthetics. We run a structured discovery process: competitive landscape analysis, audience perception mapping, positioning workshop, and articulation of your unique value. This produces a clear brand position — the foundation everything visual is built on.",
  },
  {
    step: "02",
    title: "Brand Architecture & Naming",
    desc: "For new brands or rebrands, we define the architecture: what the brand stands for, what it competes on, and how it relates to any sub-brands or product lines. If naming is in scope, we develop options grounded in strategic rationale — not just what sounds cool.",
  },
  {
    step: "03",
    title: "Visual Identity System",
    desc: "Logo mark, wordmark, color palette, typography hierarchy, iconography, and photography style — developed as a cohesive system with clear usage rules. Every visual decision is justified by strategy, not personal preference. The result is a brand that looks intentional at every scale.",
  },
  {
    step: "04",
    title: "Brand Voice & Messaging",
    desc: "Visual identity is only half the story. We develop your brand voice: tone principles, messaging hierarchy, tagline, and copy examples across key touchpoints. Brands that communicate consistently across channels build trust faster than those that don't.",
  },
  {
    step: "05",
    title: "Creative Production",
    desc: "With the brand system defined, we produce: ad creatives, landing page design, social templates, video scripts and production, pitch decks, packaging concepts, and any other touchpoint that needs to reflect the new identity. Everything is built to the system.",
  },
  {
    step: "06",
    title: "Brand Guidelines & Handover",
    desc: "We deliver a comprehensive brand guidelines document — digital and print-ready — that covers every component of the system with usage rules, do's and don'ts, and application examples. Your team and any future partners can maintain brand consistency without us in the room.",
  },
];

const deliverables = [
  { category: "Brand Strategy", items: ["Competitive positioning analysis", "Audience perception research", "Brand positioning statement", "Value proposition hierarchy", "Brand architecture definition", "Naming and tagline development"] },
  { category: "Visual Identity", items: ["Primary and secondary logo suite", "Color palette (primary, secondary, neutral)", "Typography system (display, body, UI)", "Iconography and illustration style", "Photography and art direction style", "Pattern and texture library"] },
  { category: "Brand Voice", items: ["Tone of voice principles", "Messaging hierarchy", "Tagline and sub-taglines", "Copy examples by channel", "Vocabulary and language guidelines", "Writing do's and don'ts"] },
  { category: "Creative Production", items: ["Ad creative (static, video, carousel)", "Social media templates", "Website design and UI components", "Email template design", "Presentation and pitch deck design", "Print and packaging concepts"] },
];

const brandMistakes = [
  { title: "Starting with aesthetics, not strategy", desc: "A logo that looks beautiful but doesn't communicate your positioning is decoration, not branding. Every visual decision should answer to a strategic rationale." },
  { title: "Treating brand as a one-time project", desc: "Brand is a living system. Logos that never evolve, voice guidelines that are never followed, and visual systems that break in practice are symptoms of treating brand as a launch deliverable rather than an ongoing asset." },
  { title: "Inconsistency across channels", desc: "When your website looks nothing like your ads, and your social looks nothing like your packaging, buyers struggle to build a coherent mental image of your brand. Consistency is trust at scale." },
  { title: "Copying category conventions", desc: "The fastest way to be forgettable is to look like everyone else in your category. The brands that win their space have a distinctive point of view — visually and verbally — that makes imitation impossible." },
];

const faq = [
  { q: "What is brand identity, and how is it different from a logo?", a: "A logo is one element of a brand identity — the mark that represents the brand. Brand identity is the complete visual and verbal system: logo, color palette, typography, photography style, tone of voice, messaging, and all the guidelines that govern how these elements work together. A logo without a system is a symbol without meaning." },
  { q: "How long does a brand identity project take?", a: "A full brand identity project — including strategy, visual identity, voice, and guidelines — typically takes 8–12 weeks from kickoff to delivery. Expedited timelines are possible for brands with clear positioning and existing research. Partial projects (logo refresh, voice development only, creative production) have shorter timelines depending on scope." },
  { q: "We already have a brand. Can you help with a refresh rather than a rebuild?", a: "Yes — a brand refresh is often the right choice. We audit your existing identity, identify what's working and what's broken, and evolve the system rather than starting over. This preserves brand equity you've already built while solving the gaps that are limiting you. Not every brand problem requires a full rebrand." },
  { q: "What is a brand guidelines document and why do we need one?", a: "Brand guidelines are the rulebook for your identity — how to use every element of the system correctly and consistently. Without them, every new designer, vendor, or team member makes independent decisions that slowly erode your brand coherence. A strong guidelines document is what turns a one-time branding project into a durable, scalable system." },
  { q: "Do you produce video content as part of brand creative?", a: "Yes. Video production — brand films, ad creative, social shorts, product videos, and testimonials — is part of our creative production offering. We handle concept, scripting, production direction, editing, and final delivery. For brands that need ongoing video content, we can operate as a retained creative production partner." },
  { q: "How do you approach brand positioning for a new market category?", a: "Category creation is one of the most complex and rewarding brand challenges. We start by defining the problem the category solves, why existing solutions fail, and what the new category name and frame should be. Then we build a brand designed to own that frame — including language that shapes how the market talks about the problem. Category design and brand strategy are inseparable." },
];

export default function BrandIdentityPage() {
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
            <span style={{ color: "#FF5500", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Brand Identity</span>
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
            <div style={{ width: "8px", height: "8px", background: "#FF5500", borderRadius: "50%", boxShadow: "0 0 12px #FF5500" }} />
            <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Brand Identity & Creative</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.03em", margin: "0 0 28px", maxWidth: "900px" }}>
            Brand Identity That Makes You{" "}
            <span style={{ color: "#FF5500" }}>Impossible</span>
            <br />to Ignore
          </h1>
          <p style={{ color: "#888", fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.7, maxWidth: "620px", margin: "0 0 48px" }}>
            We build brand identities from strategy to execution — positioning, visual systems, voice, and creative production that makes your brand the one people remember, trust, and choose.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/#contact" style={{ background: "#FF5500", color: "white", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "16px 36px", textDecoration: "none", clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              Start a Brand Project
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
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 }}>Our Brand Process</h2>
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
              <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Scope of Work</span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 }}>What&apos;s Included</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "24px" }}>
            {deliverables.map((block) => (
              <div key={block.category} style={{ background: "#0f0f0f", border: "1px solid #1e1e1e", padding: "32px" }}>
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

      <section style={{ padding: "100px 32px", background: "#0a0a0a", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>What We See</span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 }}>The Most Common Brand Mistakes</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "24px" }}>
            {brandMistakes.map((m, i) => (
              <div key={i} style={{ background: "#111", border: "1px solid #1e1e1e", padding: "32px" }}>
                <div style={{ color: "#FF5500", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px" }}>Mistake 0{i + 1}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#fff", margin: "0 0 12px" }}>{m.title}</h3>
                <p style={{ color: "#666", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 32px", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Common Questions</span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 }}>Brand Identity FAQ</h2>
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
            Ready to Build a Brand That <span style={{ color: "#FF5500" }}>Demands Attention?</span>
          </h2>
          <p style={{ color: "#666", fontSize: "1rem", lineHeight: 1.7, margin: "0 0 40px" }}>
            Tell us about your brand challenge — new identity, refresh, or creative production. We&apos;ll respond with a clear perspective on what the project should look like.
          </p>
          <Link href="/#contact" style={{ background: "#FF5500", color: "white", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "18px 48px", textDecoration: "none", clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))", display: "inline-flex", alignItems: "center", gap: "10px" }}>
            Start a Brand Project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
