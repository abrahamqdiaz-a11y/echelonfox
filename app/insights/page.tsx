import type { Metadata } from "next";
import Link from "next/link";
import ServiceNav from "@/components/ServiceNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Insights — Insurance Agency & Service Business Marketing | Echelon Fox",
  description:
    "Practical marketing intelligence for insurance agents and service businesses. Local SEO, AI search, paid media, and growth strategy — from the team at Echelon Fox.",
  alternates: {
    canonical: "https://echelonfox.com/insights",
  },
  openGraph: {
    title: "Insights — Echelon Fox",
    description:
      "Practical marketing intelligence for insurance agents and service businesses. Local SEO, AI search, paid media, and growth strategy.",
    url: "https://echelonfox.com/insights",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Echelon Fox Insights" }],
  },
};

const articles = [
  {
    slug: "local-seo-for-insurance-agents",
    section: "insights",
    category: "Local SEO",
    title: "Local SEO for Insurance Agents: The Complete Guide to Dominating Your Market",
    excerpt:
      "The eight-pillar local SEO framework built specifically for independent insurance agents — GBP, citations, reviews, location pages, schema, and the content strategy that builds long-term authority.",
    date: "July 15, 2025",
    readTime: "16 min read",
  },
  {
    slug: "ai-search-for-insurance-agencies",
    section: "blog",
    category: "AI Search",
    title: "AI Search for Insurance Agencies: How to Get Found in ChatGPT & Google AI",
    excerpt:
      "Most insurance agencies are invisible in ChatGPT, Perplexity & Google AI Overviews — losing warm leads before they ever appear in a browser. Here's the EEAT framework to get cited and recommended.",
    date: "June 12, 2025",
    readTime: "14 min read",
  },
];

export default function InsightsPage() {
  return (
    <div style={{ background: "#080808", minHeight: "100vh", color: "#fff" }}>
      <ServiceNav />

      {/* ── Header ── */}
      <section
        style={{
          padding: "140px 32px 72px",
          borderBottom: "1px solid #1a1a1a",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,85,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,85,0,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "0%",
            left: "-5%",
            width: "700px",
            height: "700px",
            background: "radial-gradient(circle, rgba(255,85,0,0.05) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1080px", margin: "0 auto", position: "relative" }}>
          <nav aria-label="Breadcrumb" style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "28px" }}>
            <Link href="/" style={{ color: "#555", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "#333" }}>/</span>
            <span style={{ color: "#FF5500", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Insights</span>
          </nav>

          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
            <div style={{ width: "8px", height: "8px", background: "#FF5500", borderRadius: "50%", boxShadow: "0 0 10px #FF5500" }} />
            <span style={{ color: "#FF5500", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Marketing Intelligence</span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2.2rem, 6vw, 4rem)",
              fontWeight: 900,
              lineHeight: 1.04,
              letterSpacing: "-0.035em",
              margin: "0 0 20px",
              maxWidth: "700px",
            }}
          >
            Insights
          </h1>
          <p
            style={{
              color: "#666",
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              lineHeight: 1.75,
              maxWidth: "560px",
              margin: 0,
            }}
          >
            Practical marketing intelligence for insurance agents and service businesses. Strategy, SEO, and growth frameworks built from first-hand campaign data — not recycled best practices.
          </p>
        </div>
      </section>

      {/* ── Articles Grid ── */}
      <section style={{ padding: "80px 32px 120px" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#1a1a1a", border: "1px solid #1a1a1a" }}>
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/${article.section}/${article.slug}`}
                style={{ textDecoration: "none", display: "block" }}
              >
                <article
                  style={{
                    background: "#080808",
                    padding: "48px",
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: "40px",
                    alignItems: "center",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#0d0d0d")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#080808")}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px", flexWrap: "wrap" }}>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          background: "rgba(255,85,0,0.1)",
                          border: "1px solid rgba(255,85,0,0.2)",
                          color: "#FF5500",
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          padding: "4px 10px",
                        }}
                      >
                        <span style={{ width: "5px", height: "5px", background: "#FF5500", borderRadius: "50%", flexShrink: 0 }} />
                        {article.category}
                      </span>
                      <span style={{ color: "#333", fontSize: "0.78rem" }}>{article.date}</span>
                      <span style={{ color: "#333", fontSize: "0.78rem" }}>{article.readTime}</span>
                    </div>
                    <h2
                      style={{
                        fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                        fontWeight: 900,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.2,
                        margin: "0 0 12px",
                        color: "#fff",
                      }}
                    >
                      {article.title}
                    </h2>
                    <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: 1.75, margin: 0, maxWidth: "640px" }}>
                      {article.excerpt}
                    </p>
                  </div>
                  <div style={{ flexShrink: 0 }}>
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        border: "1px solid #222",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="#FF5500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
