import type { Metadata } from "next";
import ServiceNav from "@/components/ServiceNav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO & Content Strategy — Organic Growth That Compounds",
  description:
    "Echelon Fox builds SEO and content programs that drive sustained organic traffic, domain authority, and inbound leads. Technical SEO, content marketing, and link building built to last.",
  alternates: {
    canonical: "https://echelonfox.com/services/seo-content",
  },
  openGraph: {
    title: "SEO & Content Strategy — Echelon Fox",
    description: "Organic growth that compounds. Technical SEO, content marketing, and authority building for ambitious brands.",
    url: "https://echelonfox.com/services/seo-content",
    type: "website",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "SEO & Content Strategy — Echelon Fox",
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
  name: "SEO & Content Strategy",
  serviceType: "Digital Marketing",
  provider: { "@type": "Organization", name: "Echelon Fox", url: "https://echelonfox.com" },
  url: "https://echelonfox.com/services/seo-content",
  description:
    "Technical SEO, content marketing, and link building programs that drive sustained organic traffic, domain authority, and inbound leads.",
  areaServed: { "@type": "AdministrativeArea", name: "Worldwide" },
};

const process = [
  {
    step: "01",
    title: "Technical SEO Audit",
    desc: "We crawl your entire site to surface crawlability issues, indexation gaps, Core Web Vitals problems, duplicate content, and structural weaknesses. This is the foundation — every other SEO investment is wasted if the technical layer is broken.",
  },
  {
    step: "02",
    title: "Keyword & Search Intent Research",
    desc: "We map every keyword your ideal customer uses — segmented by funnel stage and intent type: informational, navigational, commercial, and transactional. Volume matters less than intent alignment. We target queries that convert, not just ones that get clicks.",
  },
  {
    step: "03",
    title: "Competitive Gap Analysis",
    desc: "We reverse-engineer your top competitors' organic footprints: what they rank for, what links they've earned, what content is driving their traffic. This tells us exactly where the realistic opportunities are and how much effort each one requires.",
  },
  {
    step: "04",
    title: "Content Architecture & Strategy",
    desc: "We build a structured content plan organized around topic clusters — pillar pages supported by supporting content, all interlinking to concentrate authority. Every piece of content serves a defined role in the customer journey and targets a specific search query.",
  },
  {
    step: "05",
    title: "Content Production & Optimization",
    desc: "We write, edit, and optimize content that satisfies search intent better than any competing result. That means comprehensive coverage, proper structure, original insight, and natural use of semantic keywords — not keyword stuffing or AI-spun filler.",
  },
  {
    step: "06",
    title: "Authority Building & Link Acquisition",
    desc: "Backlinks remain the strongest ranking signal Google uses. We build editorial links through digital PR, expert contributions, original research, and strategic outreach — not link schemes or private blog networks that risk manual penalties.",
  },
];

const included = [
  { category: "Technical SEO", items: ["Site crawl and technical audit", "Core Web Vitals optimization", "Schema markup implementation", "XML sitemap and robots.txt", "Crawl budget management", "Site architecture recommendations", "Redirect chain resolution", "Hreflang for international sites"] },
  { category: "Content Strategy", items: ["Keyword and intent research", "Topic cluster architecture", "Editorial content calendar", "Content briefs with SEO specs", "Existing content optimization", "Content gap analysis", "On-page SEO optimization", "Internal linking strategy"] },
  { category: "Authority & Links", items: ["Digital PR campaigns", "Expert contribution outreach", "Original research & data studies", "Broken link building", "Competitor backlink analysis", "Link profile audit and disavow", "Brand mention monitoring", "Resource page outreach"] },
  { category: "Reporting", items: ["Rank tracking dashboard", "Organic traffic reporting", "Keyword position movement", "Backlink acquisition tracking", "Core Web Vitals monitoring", "Conversion attribution", "Monthly SEO review", "Search Console integration"] },
];

const pillars = [
  { title: "Intent Before Volume", desc: "A keyword with 200 monthly searches from buyers ready to purchase is worth more than 20,000 searches from people who will never buy. We build keyword strategies around conversion intent, not traffic vanity." },
  { title: "Content Depth Over Output", desc: "Google rewards content that genuinely helps the searcher better than anything else on the page. We don't publish for publishing's sake — every piece is designed to be the definitive resource on its topic." },
  { title: "Authority Is Earned, Not Bought", desc: "We build backlinks through editorial relevance and genuine value — original data, expert commentary, and resource creation that other sites want to link to. We don't sell links and we don't buy them." },
  { title: "SEO and Paid Work Together", desc: "The brands that win in search combine organic authority with paid visibility. We identify which keywords deserve paid protection, which are ripe for organic capture, and how both channels support conversion." },
];

const whoFor = [
  { label: "B2B & SaaS Companies", desc: "Companies selling complex products where buyers research heavily before purchasing. Organic content captures that research phase and pre-sells your solution before a prospect ever talks to sales." },
  { label: "E-commerce Brands", desc: "DTC brands who want a sustainable traffic channel that isn't dependent on ad spend. Strong category and product-level SEO compounds into a significant revenue stream with zero per-click cost." },
  { label: "Service Businesses & Agencies", desc: "Professional services firms who compete on expertise. Authoritative content marketing is the most effective way to demonstrate thought leadership and attract high-quality inbound inquiries." },
  { label: "Media & Content Businesses", desc: "Publishers, newsletters, and content-first brands building audience at scale. Technical excellence and structured content strategy are the difference between 10K and 100K monthly visitors." },
];

const faq = [
  { q: "How long does SEO take to show results?", a: "SEO is a compounding investment, not an immediate one. Technical fixes can show results within weeks. New content typically takes 3–6 months to rank meaningfully as Google indexes, evaluates, and tests it. Competitive keywords in high-authority niches can take 12+ months. The brands that win in organic search start early and treat SEO as a long-term asset — not a quick-win tactic." },
  { q: "What is the difference between on-page SEO and technical SEO?", a: "Technical SEO covers the infrastructure of your site: crawlability, indexation, speed, site structure, and schema. On-page SEO covers what's on each individual page: content quality, keyword usage, header structure, meta tags, and internal links. Both are necessary — technical issues prevent ranking, while on-page determines whether content ranks for the right queries and satisfies search intent." },
  { q: "Do you write the content, or do we?", a: "We can operate either way. For most clients, we handle end-to-end content production: research, writing, editing, and optimization. Where you have subject matter experts or existing writers, we provide detailed briefs and SEO specifications so your team produces content that ranks. Some clients use a hybrid model — we write cornerstone content while their team handles supporting pieces." },
  { q: "How important are backlinks in 2024–2025?", a: "Backlinks remain one of Google's strongest ranking signals. High-quality editorial links from relevant, authoritative domains are still a primary driver of competitive rankings. However, link quality has never mattered more — a handful of genuine editorial links outperforms hundreds of directory or paid links. Google's spam policies have made low-quality link building actively harmful." },
  { q: "What is a topic cluster and why does it matter for SEO?", a: "A topic cluster is a group of content pages organized around a central pillar topic, all interlinking to concentrate topical authority. Instead of publishing disconnected blog posts, a cluster strategy tells Google that your site is the authoritative source on a specific subject. This structure improves rankings for every page in the cluster — not just individual posts." },
  { q: "Can SEO work alongside paid advertising?", a: "Yes — and the combination is more powerful than either alone. Paid ads give you immediate visibility while organic builds. Organic data reveals which keywords convert, informing your paid strategy. Ranking organically for a keyword reduces the cost pressure of bidding for it. And high organic rankings create a trust signal that improves paid click-through rates." },
];

export default function SeoContentPage() {
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
            <span style={{ color: "#FF5500", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>SEO & Content</span>
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
            <div style={{ width: "8px", height: "8px", background: "#FF5500", borderRadius: "50%", boxShadow: "0 0 12px #FF5500" }} />
            <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>SEO & Content Strategy</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.03em", margin: "0 0 28px", maxWidth: "900px" }}>
            SEO & Content That Builds{" "}
            <span style={{ color: "#FF5500" }}>Lasting</span>
            <br />Organic Growth
          </h1>
          <p style={{ color: "#888", fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.7, maxWidth: "620px", margin: "0 0 48px" }}>
            We build SEO and content programs that compound over time — technical foundations that Google trusts, content that searchers actually want to read, and authority signals that move rankings for competitive terms.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/#contact" style={{ background: "#FF5500", color: "white", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "16px 36px", textDecoration: "none", clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              Get an SEO Audit
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <Link href="/#services" style={{ background: "transparent", color: "white", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "15px 35px", textDecoration: "none", border: "1px solid #333", clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}>All Services</Link>
          </div>
        </div>
      </section>

      {/* Philosophy pillars */}
      <section style={{ padding: "100px 32px", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Our Philosophy</span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 }}>How We Think About SEO</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "24px" }}>
            {pillars.map((p, i) => (
              <div key={i} style={{ background: "#0f0f0f", border: "1px solid #1e1e1e", padding: "36px" }}>
                <div style={{ color: "#FF5500", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "14px" }}>0{i + 1}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", margin: "0 0 12px" }}>{p.title}</h3>
                <p style={{ color: "#666", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: "100px 32px", background: "#0a0a0a", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Methodology</span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 }}>Our SEO Process</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))", gap: "1px", background: "#1a1a1a", border: "1px solid #1a1a1a" }}>
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
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 }}>What&apos;s Included</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "24px" }}>
            {included.map((block) => (
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

      {/* Who it's for */}
      <section style={{ padding: "100px 32px", background: "#0a0a0a", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Who This Is For</span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 }}>Best Fit for These Brands</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "24px" }}>
            {whoFor.map((w) => (
              <div key={w.label} style={{ background: "#111", border: "1px solid #1e1e1e", padding: "32px" }}>
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
      <section style={{ padding: "100px 32px", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Common Questions</span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 }}>SEO FAQ</h2>
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
            Ready to Build an Organic Channel That <span style={{ color: "#FF5500" }}>Never Stops Working?</span>
          </h2>
          <p style={{ color: "#666", fontSize: "1rem", lineHeight: 1.7, margin: "0 0 40px" }}>
            Start with a free technical SEO audit. We&apos;ll show you exactly what&apos;s holding your rankings back and what the path to growth looks like.
          </p>
          <Link href="/#contact" style={{ background: "#FF5500", color: "white", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "18px 48px", textDecoration: "none", clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))", display: "inline-flex", alignItems: "center", gap: "10px" }}>
            Get Your Free Audit
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
          <Link href="/ai-agents" style={{ background: "transparent", color: "#888", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", padding: "17px 32px", textDecoration: "none", border: "1px solid #222", clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))", display: "inline-flex", alignItems: "center", gap: "8px" }}>
            See AI Teammates →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
