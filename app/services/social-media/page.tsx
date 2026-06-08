import type { Metadata } from "next";
import ServiceNav from "@/components/ServiceNav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Social Media Management — Strategy, Content & Community",
  description:
    "Echelon Fox manages social media for brands that want to dominate their category. Instagram, LinkedIn, TikTok, and X — strategy, content creation, scheduling, and community management.",
  alternates: {
    canonical: "https://echelonfox.com/services/social-media",
  },
  openGraph: {
    title: "Social Media Management — Echelon Fox",
    description: "We run your social presence like a media brand. Consistent, creative, and built to grow.",
    url: "https://echelonfox.com/services/social-media",
    type: "website",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Social Media Management — Echelon Fox",
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
  name: "Social Media Management",
  serviceType: "Digital Marketing",
  provider: { "@type": "Organization", name: "Echelon Fox", url: "https://echelonfox.com" },
  url: "https://echelonfox.com/services/social-media",
  description:
    "Instagram, LinkedIn, TikTok, and X — strategy, content creation, scheduling, and community management for brands that want to dominate their category.",
  areaServed: { "@type": "AdministrativeArea", name: "Worldwide" },
};

const process = [
  {
    step: "01",
    title: "Brand & Audience Deep Dive",
    desc: "We start by understanding your brand voice, your competitive landscape, and your audience in forensic detail — demographics, psychographics, content consumption habits, and what's already resonating in your category. This prevents generic content from day one.",
  },
  {
    step: "02",
    title: "Channel Strategy & Platform Prioritization",
    desc: "Not every brand should be on every platform. We evaluate where your audience actually is, where your content format advantage lies, and which channels have the best return for your goals — then build a focused strategy instead of spreading thin across all of them.",
  },
  {
    step: "03",
    title: "Content Pillars & Editorial System",
    desc: "We define 3–5 core content pillars that balance brand, value, and conversion content. These pillars create a sustainable editorial system — your audience knows what to expect, and your team knows what to produce. Consistency is built into the process.",
  },
  {
    step: "04",
    title: "Content Production & Scheduling",
    desc: "We produce, write, design, and schedule content across all active platforms on a forward-looking calendar. Every post has a defined purpose: awareness, engagement, education, or conversion. Nothing is published without strategic intent.",
  },
  {
    step: "05",
    title: "Community Management & Engagement",
    desc: "Social media is a two-way channel. We manage inbound comments, DMs, mentions, and brand conversations — responding in your brand voice, building relationships with your community, and escalating anything that requires your input.",
  },
  {
    step: "06",
    title: "Performance Analysis & Iteration",
    desc: "Monthly, we review what performed and what didn't — reach, engagement, follower growth, link clicks, and conversion contribution. Content formats, topics, and timing are adjusted based on data, not intuition. What works gets doubled down on.",
  },
];

const platforms = [
  { name: "Instagram", detail: "Feed posts, Reels, Stories, and carousels — managed as a cohesive visual brand channel with a consistent aesthetic, strong hooks, and growth-oriented posting cadence." },
  { name: "LinkedIn", detail: "Professional thought leadership, company updates, and B2B content strategy. Ideal for building authority, recruiting, and generating qualified inbound leads from decision-makers." },
  { name: "TikTok", detail: "Short-form video strategy built around TikTok-native formats and trends. We script, direct, and manage TikTok content that fits the platform's algorithm and your brand's voice." },
  { name: "X / Twitter", detail: "Real-time brand voice, community building, and industry conversations. X rewards brands with sharp, opinionated, consistent publishing — we manage that cadence." },
  { name: "YouTube", detail: "Long-form video content strategy and channel management. YouTube is the second-largest search engine — we treat it as an SEO and content asset, not just a video host." },
  { name: "Pinterest", detail: "Visual discovery and evergreen content strategy for consumer brands in lifestyle, fashion, home, food, and beauty categories with long purchase consideration cycles." },
];

const included = [
  { category: "Strategy", items: ["Platform audit and competitive analysis", "Audience persona development", "Content pillar definition", "Platform prioritization strategy", "Tone of voice and brand guidelines", "Monthly editorial calendar"] },
  { category: "Content Production", items: ["Copywriting for all platforms", "Graphic design (static and carousel)", "Reel/short-form video scripting", "Content scheduling and publishing", "Hashtag research and strategy", "Caption optimization per platform"] },
  { category: "Community Management", items: ["Comment monitoring and responses", "DM management", "Brand mention monitoring", "Influencer and creator engagement", "Reputation management", "Escalation protocols"] },
  { category: "Analytics", items: ["Follower growth tracking", "Reach and engagement reporting", "Top content performance analysis", "Platform algorithm updates", "Competitor benchmarking", "Monthly strategy review"] },
];

const whoFor = [
  { label: "Consumer Brands & DTC", desc: "Product brands that need a social presence as strong as their product. Social media is often your largest touchpoint — it should reflect the quality and personality of what you sell." },
  { label: "B2B Companies & SaaS", desc: "LinkedIn-first strategy for companies selling to other businesses. Social content that positions your leadership team as category experts and generates inbound interest from the right titles and companies." },
  { label: "Founders & Personal Brands", desc: "Executives and entrepreneurs who want to build a professional audience but don't have time to manage their own content. We develop your voice, produce your content, and manage the channel on your behalf." },
  { label: "Hospitality, Retail & Local Brands", desc: "Businesses where visual social presence directly drives foot traffic, reservations, and purchases. We build a social identity that makes people want to show up." },
];

const faq = [
  { q: "How many posts per week do you publish?", a: "Publishing frequency is calibrated to each platform and your content goals — not an arbitrary number. Instagram may be 4–5 posts/week, LinkedIn 3–4, TikTok 3–5 short videos. What matters more than frequency is consistency and quality. We'd rather publish four exceptional pieces than seven average ones." },
  { q: "How do you maintain our brand voice if you're writing the content?", a: "We run a voice and tone onboarding process at the start of every engagement — reviewing existing content, interviewing your team, and documenting a brand voice guide. Every piece of content is written against that guide. Before publishing begins, you review and approve content batches so you're comfortable with how your brand is represented." },
  { q: "Do you handle video content and Reels?", a: "Yes — video scripting, concept development, and publishing are included. For brands where we're producing the video itself, we work with a network of videographers and editors. For brands with in-house production, we provide scripts, shot lists, and direction to make the content platform-ready." },
  { q: "How is social media success measured?", a: "Success metrics depend on your business goals. Awareness-stage brands care about reach, impressions, and follower growth. Mid-funnel brands track engagement rate, saves, and shares. Direct-response brands measure link clicks, landing page traffic, and conversion contribution. We align on the right KPIs for your stage before we start — and we report against them." },
  { q: "Can social media directly drive revenue?", a: "Yes — but the mechanism depends on your business model. E-commerce brands with strong product content and Instagram Shop integration see direct purchase attribution. Service businesses generate DM inquiries and consultation bookings. B2B companies generate LinkedIn connections that turn into pipeline conversations. Social rarely works in isolation — it amplifies every other channel." },
  { q: "What's the difference between organic social and paid social?", a: "Organic social is the content you publish without paying for distribution — it reaches your existing followers and anyone the algorithm serves it to. Paid social uses advertising spend to reach people who don't follow you yet. Both have distinct roles: organic builds brand, community, and trust. Paid drives acquisition and retargeting at scale. Many of our clients do both — we manage them as a unified strategy." },
];

export default function SocialMediaPage() {
  return (
    <div style={{ background: "#080808", minHeight: "100vh", color: "#fff" }}>
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
            <span style={{ color: "#FF5500", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Social Media</span>
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
            <div style={{ width: "8px", height: "8px", background: "#FF5500", borderRadius: "50%", boxShadow: "0 0 12px #FF5500" }} />
            <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Social Media Management</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.03em", margin: "0 0 28px", maxWidth: "900px" }}>
            Social Media That Turns{" "}
            <span style={{ color: "#FF5500" }}>Followers</span>
            <br />Into Customers
          </h1>
          <p style={{ color: "#888", fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.7, maxWidth: "620px", margin: "0 0 48px" }}>
            We manage your social presence like a media brand — strategy, content production, scheduling, and community management across every platform that matters to your audience.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/#contact" style={{ background: "#FF5500", color: "white", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "16px 36px", textDecoration: "none", clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              Start a Conversation
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
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 }}>How We Manage Social</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1px", background: "#1a1a1a", border: "1px solid #1a1a1a" }}>
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
              <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Platforms</span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 }}>Platforms We Manage</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "24px" }}>
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
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
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 }}>Best Fit For These Brands</h2>
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

      <section style={{ padding: "100px 32px", background: "#0a0a0a", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Common Questions</span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 }}>Social Media FAQ</h2>
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
            Ready to Run Social Like a <span style={{ color: "#FF5500" }}>Media Brand?</span>
          </h2>
          <p style={{ color: "#666", fontSize: "1rem", lineHeight: 1.7, margin: "0 0 40px" }}>
            Let&apos;s talk about your channels, your goals, and what a strong social presence could mean for your business.
          </p>
          <Link href="/#contact" style={{ background: "#FF5500", color: "white", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "18px 48px", textDecoration: "none", clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))", display: "inline-flex", alignItems: "center", gap: "10px" }}>
            Start the Conversation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
