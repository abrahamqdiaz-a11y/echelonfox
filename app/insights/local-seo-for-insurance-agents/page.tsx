import type { Metadata } from "next";
import Link from "next/link";
import ServiceNav from "@/components/ServiceNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Local SEO for Insurance Agents: The Complete Guide to Dominating Your Market",
  description:
    "Insurance agents who dominate local search follow a specific playbook. Here's the complete local SEO framework — GBP, citations, content, and schema — built for independent agents.",
  alternates: {
    canonical: "https://echelonfox.com/insights/local-seo-for-insurance-agents",
  },
  openGraph: {
    title: "Local SEO for Insurance Agents — Echelon Fox",
    description:
      "The complete local SEO playbook for independent insurance agents: Google Business Profile, citations, location content, and schema markup that drives calls and quote requests.",
    url: "https://echelonfox.com/insights/local-seo-for-insurance-agents",
    type: "article",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Local SEO for Insurance Agents — Echelon Fox",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Local SEO for Insurance Agents: The Complete Guide to Dominating Your Market",
  description:
    "Insurance agents who dominate local search follow a specific playbook. Here's the complete local SEO framework — GBP, citations, content, and schema — built for independent agents.",
  image: "https://echelonfox.com/opengraph-image",
  datePublished: "2025-07-15",
  dateModified: "2025-07-15",
  author: {
    "@type": "Person",
    name: "Abe Quinn",
    jobTitle: "Founder & CEO",
    worksFor: {
      "@type": "Organization",
      name: "Echelon Fox",
      url: "https://echelonfox.com",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "Echelon Fox",
    url: "https://echelonfox.com",
    logo: {
      "@type": "ImageObject",
      url: "https://echelonfox.com/eflogo.logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://echelonfox.com/insights/local-seo-for-insurance-agents",
  },
  keywords: [
    "local SEO for insurance agents",
    "insurance agent Google Business Profile",
    "insurance agency local search",
    "insurance agent SEO strategy",
    "local SEO insurance",
    "insurance agency citations",
    "insurance agent online visibility",
  ],
  articleSection: "Insurance Agency Marketing",
  wordCount: 4200,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does local SEO take for an insurance agent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Business Profile improvements can produce local map pack visibility within 4–8 weeks of thorough optimization. Citation building and review accumulation create compounding gains over 3–6 months. Competitive markets take longer. Local SEO is a compounding asset — the work done in month one pays off increasingly in months six, twelve, and beyond.",
      },
    },
    {
      "@type": "Question",
      name: "What is the most important local SEO factor for insurance agents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Business Profile is the single highest-impact starting point for local insurance agent SEO. A fully optimized, actively managed GBP with strong review velocity directly drives map pack placement and local AI search citations. After GBP, NAP citation consistency and review volume are the next most impactful levers.",
      },
    },
    {
      "@type": "Question",
      name: "Do insurance agents need separate location pages for each city they serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you have physical offices in multiple cities, yes — each location needs its own page with unique content and LocalBusiness schema. If you serve surrounding cities from a single office, city-specific landing pages can drive local visibility for those markets, but each page must contain genuinely unique, location-relevant content — not the same text with the city name swapped in.",
      },
    },
    {
      "@type": "Question",
      name: "How many Google reviews does an insurance agent need to rank locally?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The competitive floor varies by market, but 25–50 Google reviews at 4.5+ stars is a reasonable minimum target before expecting consistent map pack visibility. In major metro markets, top-ranked agencies typically have 100+ reviews. More important than hitting a specific number is maintaining a steady review velocity — 2–4 new reviews per month outperforms a one-time burst followed by inactivity.",
      },
    },
    {
      "@type": "Question",
      name: "What local citations matter most for insurance agents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The highest-authority citations for insurance agents come from: your state's Department of Insurance agency directory, IIABA and NAIFA member directories, Better Business Bureau, Chamber of Commerce, and the major data aggregators (Data Axle, Foursquare, Localeze). Beyond those, Yelp, Facebook Business, Apple Maps, and Bing Places round out the essential citation profile.",
      },
    },
    {
      "@type": "Question",
      name: "Should insurance agents blog for local SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — educational blog content targeting local and coverage-specific queries is one of the most durable local SEO investments an insurance agent can make. The best-performing content answers specific questions prospects ask at each stage of the buying journey: awareness (do I need renters insurance?), consideration (how much liability coverage does a homeowner need?), and decision (how to choose a local insurance agent). Content structured this way drives organic traffic and AI search citations.",
      },
    },
  ],
};

const faq = [
  {
    q: "How long does local SEO take for an insurance agent?",
    a: "Google Business Profile improvements can produce local map pack visibility within 4–8 weeks of thorough optimization. Citation building and review accumulation create compounding gains over 3–6 months. Competitive markets take longer. Local SEO is a compounding asset — the work done in month one pays off increasingly in months six, twelve, and beyond.",
  },
  {
    q: "What is the most important local SEO factor for insurance agents?",
    a: "Google Business Profile is the single highest-impact starting point for local insurance agent SEO. A fully optimized, actively managed GBP with strong review velocity directly drives map pack placement and local AI search citations. After GBP, NAP citation consistency and review volume are the next most impactful levers.",
  },
  {
    q: "Do insurance agents need separate location pages for each city they serve?",
    a: "If you have physical offices in multiple cities, yes — each location needs its own page with unique content and LocalBusiness schema. If you serve surrounding cities from a single office, city-specific landing pages can drive local visibility for those markets, but each page must contain genuinely unique, location-relevant content — not the same text with the city name swapped in.",
  },
  {
    q: "How many Google reviews does an insurance agent need to rank locally?",
    a: "The competitive floor varies by market, but 25–50 Google reviews at 4.5+ stars is a reasonable minimum target before expecting consistent map pack visibility. In major metro markets, top-ranked agencies typically have 100+ reviews. More important than hitting a specific number is maintaining a steady review velocity — 2–4 new reviews per month outperforms a one-time burst followed by inactivity.",
  },
  {
    q: "What local citations matter most for insurance agents?",
    a: "The highest-authority citations for insurance agents come from: your state's Department of Insurance agency directory, IIABA and NAIFA member directories, Better Business Bureau, Chamber of Commerce, and the major data aggregators (Data Axle, Foursquare, Localeze). Beyond those, Yelp, Facebook Business, Apple Maps, and Bing Places round out the essential citation profile.",
  },
  {
    q: "Should insurance agents blog for local SEO?",
    a: "Yes — educational blog content targeting local and coverage-specific queries is one of the most durable local SEO investments an insurance agent can make. The best-performing content answers specific questions prospects ask at each stage of the buying journey: awareness (do I need renters insurance?), consideration (how much liability coverage does a homeowner need?), and decision (how to choose a local insurance agent). Content structured this way drives organic traffic and AI search citations.",
  },
];

const pillars = [
  {
    num: "01",
    title: "Google Business Profile — Your Most Powerful Local Asset",
    body: "Your Google Business Profile is the single most important local SEO lever an insurance agent controls. It drives map pack placement, populates Google AI Overviews for local queries, and provides the structured data Google uses to recommend agencies in conversational search. Start here before anything else. Claim and verify your listing if you haven't. Set your primary category to \"Insurance Agency\" and add every relevant secondary category that reflects your specialties — \"Life Insurance Agency,\" \"Auto Insurance Agency,\" \"Home Insurance Agency.\" Complete every field: business description (750 characters, use them), service areas, hours, phone number, and website URL. Upload a minimum of 20 photos — exterior, interior, team headshots, and branded imagery. Publish Google Posts at least twice a month; consistent posting signals business activity to Google's ranking algorithm. In the Products/Services section, list each coverage line you offer as a separate service entry with its own description. Respond to every Q&A submitted to your profile. An actively maintained GBP with strong review velocity consistently outranks abandoned profiles, regardless of office size or advertising spend.",
  },
  {
    num: "02",
    title: "NAP Consistency — The Citation Foundation",
    body: "NAP stands for Name, Address, Phone number — the three data points that define your business identity across the web. Every mention of your agency across directories, association listings, social profiles, and review platforms must use the exact same NAP format. A single inconsistency (\"Suite 100\" vs \"Ste. 100\" vs no suite number at all) creates conflicting signals that suppress local rankings. Before building any new citations, run a citation audit using a tool like BrightLocal or Moz Local to identify every existing listing and the exact format used on each. Establish a single canonical NAP format — decide on one and document it — then systematically correct every variation across the web. This cleanup work often produces faster ranking improvements than adding new citations, because Google can finally reconcile all existing mentions into a confident entity match. For agencies with multiple locations, each location needs its own distinct NAP. Never list a different location's phone number on another location's listings — each location is a separate local entity.",
  },
  {
    num: "03",
    title: "Building the Right Citation Profile",
    body: "Citations — mentions of your agency's NAP on other websites — are a foundational local ranking signal. For insurance agents specifically, citations from high-authority, industry-relevant sources carry disproportionate weight. Prioritize these tiers in order. Tier 1 (highest authority): Your state Department of Insurance agency directory. This is the single most authoritative citation a licensed insurance agent can have — it's a government source verifying your credentials. Most state DOI websites have free agent search directories; ensure your listing is current. Tier 2 (industry associations): IIABA (Independent Insurance Agents & Brokers of America), NAIFA (National Association of Insurance and Financial Advisors), PIA (Professional Insurance Agents), and state-level chapters of each. Member directory listings from these organizations send powerful authority signals. Tier 3 (major data aggregators): Data Axle, Foursquare, and Localeze feed citation data to hundreds of downstream directories. Getting accurate listings here propagates your NAP across the web automatically. Tier 4 (general local): Google Business Profile (already covered), Yelp, Facebook Business Page, Apple Maps, Bing Places, BBB, and your Chamber of Commerce. After these tiers, diminishing returns set in quickly — 50 authoritative citations outperform 500 low-quality directory submissions.",
  },
  {
    num: "04",
    title: "Review Strategy — Volume, Velocity, and Response",
    body: "Reviews are among the most concrete trust signals Google uses for local ranking — and the most direct proxy for reputation that AI systems can evaluate. An insurance agent with 80 Google reviews at 4.7 stars consistently outranks an agent with 12 reviews at 5.0 stars, all else being equal. Volume and velocity matter more than perfection. Build a systematic review acquisition process around two trigger points: policy completion and annual renewal. At each moment, send a personal SMS or email to the client with a direct link to your Google review page — not a third-party form, not a multi-step redirect. The friction between intent and action is where reviews are lost. Aim for 2–4 new reviews per month as a steady state. A burst of 30 reviews collected during a one-week campaign followed by months of inactivity creates a recency gap that Google weights negatively. Respond to every review within 48 hours — positive and negative. Your response to a 1-star review is visible to every future prospect evaluating your agency. Handle it with professionalism, acknowledge the client's concern, and offer resolution offline. This response behavior is itself a trust signal. Diversify your review footprint beyond Google: Facebook, Trustpilot, and Yelp all feed into the web-wide entity reputation that AI systems evaluate when generating insurance recommendations.",
  },
  {
    num: "05",
    title: "On-Page Local SEO — Service Pages That Actually Convert",
    body: "Your website's service pages are the bridge between local search traffic and a quote request. Most insurance agency websites get this wrong in the same predictable way: generic service descriptions that could belong to any agency, keyword-stuffed titles with no genuine information value, and no local context whatsoever. Build each service page around a specific coverage line and a specific local context. A home insurance page for an agent in Tampa, Florida should address Florida's specific homeowner insurance market — the Citizens Insurance situation, sinkhole coverage questions, wind mitigation inspections. That specificity is what separates content that ranks from content that doesn't. Each service page should include: a clear H1 with your primary service and location (\"Home Insurance in Tampa, FL\"), an explanatory intro paragraph that answers the core question a prospect arrives with, coverage details specific to your offered products, local regulatory or market context where relevant, a prominent FAQ section using H3 headers (structured for AI extraction), your agency's specific differentiators, and a strong CTA with a phone number, contact form, or quote link. Page length for service pages should be 800–1,500 words. Longer educational content belongs on your blog or insights hub — service pages should be thorough but conversion-focused.",
  },
  {
    num: "06",
    title: "Location Pages for Multi-Market Coverage",
    body: "If you're a single-office agent serving clients in multiple surrounding cities or counties, dedicated location landing pages can significantly expand your local search footprint beyond your immediate area. Each location page must be genuinely unique — not a template with only the city name swapped. Unique content elements for each location page: local market context (housing market, specific risk factors, common coverage questions for that community), any local employer or industry connections relevant to coverage needs, community involvement or clients in that area, local regulatory notes, and embedded Google Maps showing the service area relationship to your office. Include your InsuranceAgency schema on each location page with the service area specified. If you have zero connection to a city — no clients, no community ties — don't create a location page for it. Thin location pages created purely for keyword targeting are flagged by Google's quality systems and can suppress your overall domain authority. Build pages for markets where you have real reasons to serve clients.",
  },
  {
    num: "07",
    title: "Schema Markup for Insurance Agents",
    body: "Schema markup is structured data embedded in your website's HTML that communicates directly with search engines and AI systems — removing ambiguity about who you are, what you offer, where you operate, and how clients rate you. For insurance agents, four schema types are non-negotiable. InsuranceAgency schema (a subtype of LocalBusiness) belongs on every location page. Include: name, address, telephone, geo-coordinates, openingHoursSpecification, areaServed, and priceRange. Person schema belongs on every agent bio page. Include: name, jobTitle, worksFor, hasCredential (list each license number with its issuing authority), sameAs (link to your LinkedIn, state DOI profile, and association directory listings). FAQPage schema belongs on every service page and educational article with a FAQ section. This schema enables Google and AI systems to extract your Q&A pairs for direct inclusion in AI Overviews and featured snippets. AggregateRating schema belongs on your homepage or location pages if your site displays review data. Use Google's Rich Results Test to validate every schema implementation before publishing. Errors in schema markup actively mislead AI parsers — an invalid schema block is worse than no schema at all.",
  },
  {
    num: "08",
    title: "Educational Content That Earns Local Authority",
    body: "The insurance questions people search locally are almost entirely educational: \"Does my homeowners insurance cover my fence?\" \"What is the minimum auto insurance required in Texas?\" \"How much life insurance does a 35-year-old with kids need?\" Agents who publish thorough, accurate answers to these questions consistently are building a compounding SEO asset. Educational content drives three distinct benefits: direct organic traffic from informational queries, AI search citations when your content is chosen as a source for an AI-generated answer, and topical authority signals that improve rankings across your entire domain. Structure each article around a specific question your ideal prospect would actually ask. Use H2 and H3 headers that mirror the language of conversational search queries. Include state-specific context wherever relevant. Add a FAQ section at the end with five to eight additional related questions and concise answers — each FAQ answer is a candidate for AI Overview extraction. Publish minimum one article per month to maintain crawl frequency signals. Two per month sustains meaningful compounding. Your content library does not need to be enormous — ten thorough, locally-relevant articles outperform a hundred thin, generic posts.",
  },
];

const mistakes = [
  {
    title: "Inconsistent NAP Across Directories",
    desc: "The most common and most damaging local SEO error for insurance agents. A business name spelled differently on Yelp than on your website, or an old phone number still appearing on a legacy directory listing, creates conflicting entity signals that suppress local rankings across all platforms. Audit and standardize before building new citations.",
  },
  {
    title: "An Abandoned Google Business Profile",
    desc: "Creating a GBP at agency launch and never returning is an extremely common mistake. No new photos, no Google Posts, reviews accumulating without responses, and service information going stale. Google treats GBP engagement signals — post frequency, review response rate, photo freshness — as indirect quality signals. An abandoned profile signals an inactive or low-quality business.",
  },
  {
    title: "Generic Service Pages With No Local Context",
    desc: "A home insurance page that reads identically to any national carrier's description — with no mention of your city, your specific market knowledge, or any local context — fails both users and local search algorithms. Google's local ranking systems favor pages that demonstrably serve a specific geographic market, not pages that could belong to any agency anywhere.",
  },
  {
    title: "Chasing Citation Volume Over Citation Quality",
    desc: "Submitting to 200 low-quality directories does less for local rankings than 20 high-authority citations from state regulators, insurance associations, and credible local business sources. Citation quality is weighted by domain authority and topical relevance. A single listing in your state's DOI directory carries more weight than a hundred generic local business listings.",
  },
  {
    title: "No Review Acquisition System",
    desc: "Hoping clients will leave reviews without a proactive request is not a strategy. The agencies that dominate local map packs in every market have systematic, repeatable review acquisition processes — triggered at policy completion and renewal, delivered via direct message with a single-click link. Reviews don't accumulate passively for insurance agents; they require active cultivation.",
  },
  {
    title: "Missing or Invalid Schema Markup",
    desc: "The majority of independent insurance agency websites have no schema markup at all, or have schema copied from a template with placeholder data still intact. Schema is the highest-ROI technical SEO investment for local insurance agents — it tells Google and AI systems exactly what your agency is, who works there, and how clients rate you. Missing it means competing with both hands tied.",
  },
];

const takeaways = [
  "Google Business Profile is the single highest-impact local SEO lever for insurance agents — optimize it fully and manage it actively, not just at setup.",
  "NAP consistency across every directory and citation source is foundational. Audit and fix inconsistencies before building new citations.",
  "Review velocity matters more than a one-time review burst. Aim for 2–4 new Google reviews per month as a sustainable baseline.",
  "Citation authority beats citation volume — state DOI directories, insurance association member listings, and major data aggregators outweigh hundreds of generic directory submissions.",
  "Service pages need local context to rank locally. Generic coverage descriptions without market-specific relevance compete with national carriers and lose.",
  "Location pages for multi-market coverage only work if each page contains genuinely unique, locally relevant content — not swapped city names on a template.",
  "Schema markup (InsuranceAgency, Person, FAQPage, AggregateRating) removes ambiguity for search engines and AI systems — implement and validate it.",
  "Educational content targeting local insurance questions builds compounding topical authority and positions your agency as the cited source in AI-generated answers.",
];

export default function LocalSEOInsuranceAgentsPage() {
  return (
    <div style={{ background: "#080808", minHeight: "100vh", color: "#fff" }}>
      <style>{`.toc-link:hover { color: #FF5500 !important; }`}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ServiceNav />

      {/* ── Article Header ── */}
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
            top: "5%",
            right: "-10%",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(255,85,0,0.07) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative" }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "28px" }}>
            <Link href="/" style={{ color: "#555", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "#333" }}>/</span>
            <Link href="/insights" style={{ color: "#555", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>Insights</Link>
            <span style={{ color: "#333" }}>/</span>
            <span style={{ color: "#FF5500", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Local SEO for Insurance Agents</span>
          </nav>

          {/* Category + read time */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px", flexWrap: "wrap" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(255,85,0,0.1)",
                border: "1px solid rgba(255,85,0,0.25)",
                color: "#FF5500",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "5px 12px",
              }}
            >
              <span style={{ width: "6px", height: "6px", background: "#FF5500", borderRadius: "50%", flexShrink: 0 }} />
              Insurance Agency Marketing
            </span>
            <span style={{ color: "#444", fontSize: "0.78rem", fontWeight: 500 }}>16 min read</span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "clamp(2rem, 5.5vw, 3.6rem)",
              fontWeight: 900,
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
              margin: "0 0 24px",
              maxWidth: "820px",
            }}
          >
            Local SEO for Insurance Agents:{" "}
            <span style={{ color: "#FF5500" }}>The Complete Guide</span> to Dominating Your Market
          </h1>

          {/* Subtitle */}
          <p
            style={{
              color: "#888",
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              lineHeight: 1.75,
              maxWidth: "680px",
              margin: "0 0 40px",
            }}
          >
            When a prospect in your city searches for an insurance agent, you&apos;re competing in the map pack, organic results, and AI-generated answers simultaneously. This is the eight-pillar local SEO framework built specifically for independent insurance agents who want to own their market.
          </p>

          {/* Author bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              paddingTop: "28px",
              borderTop: "1px solid #1a1a1a",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                background: "linear-gradient(135deg, #FF5500, #FF7733)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                fontWeight: 900,
                fontSize: "1rem",
                color: "white",
              }}
            >
              AQ
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 700, fontSize: "0.9rem", color: "#eee" }}>Abe Quinn</p>
              <p style={{ margin: 0, fontSize: "0.78rem", color: "#555" }}>Founder &amp; CEO, Echelon Fox</p>
            </div>
            <div style={{ marginLeft: "auto", display: "flex", gap: "24px", alignItems: "center" }}>
              <div style={{ textAlign: "right" }}>
                <p style={{ margin: 0, fontSize: "0.78rem", color: "#555", fontWeight: 500 }}>Published</p>
                <p style={{ margin: 0, fontSize: "0.82rem", color: "#888", fontWeight: 600 }}>July 15, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Article Body ── */}
      <article style={{ padding: "72px 32px 0" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>

          {/* Table of Contents */}
          <div
            style={{
              background: "#0f0f0f",
              border: "1px solid #1e1e1e",
              borderLeft: "3px solid #FF5500",
              padding: "28px 32px",
              marginBottom: "64px",
            }}
          >
            <p style={{ margin: "0 0 16px", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF5500" }}>In This Article</p>
            <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                ["Why Local SEO Is the Highest-ROI Channel for Independent Agents", "#intro"],
                ["How Local Search Works for Insurance Agents", "#how-local-search-works"],
                ["The 8-Pillar Local SEO Framework", "#eight-pillars"],
                ["Competitive Intelligence: How to Audit Your Local Market", "#competitive-audit"],
                ["Common Mistakes That Kill Local Rankings", "#common-mistakes"],
                ["Key Takeaways", "#takeaways"],
                ["FAQ", "#faq"],
              ].map(([label, href], i) => (
                <li key={href} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ color: "#FF5500", fontSize: "0.7rem", fontWeight: 700, flexShrink: 0, width: "18px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <a href={href} className="toc-link" style={{ color: "#888", fontSize: "0.88rem", textDecoration: "none", transition: "color 0.15s" }}>
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* ── Section: Intro ── */}
          <section id="intro" style={{ marginBottom: "72px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>The Opportunity</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 900, letterSpacing: "-0.025em", lineHeight: 1.1, margin: "0 0 24px" }}>
              Why Local SEO Is the Highest-ROI Channel for Independent Agents
            </h2>
            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: "0 0 20px" }}>
              Independent insurance agents sell on trust and relationships — and local search is the first place that trust either gets established or handed to a competitor. When someone moves to a new city, gets their first home, or decides their current agent isn&apos;t cutting it, their search starts with a local query: &ldquo;independent insurance agent near me,&rdquo; &ldquo;home insurance agent in [city],&rdquo; &ldquo;best auto insurance agent [zip code].&rdquo;
            </p>
            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: "0 0 20px" }}>
              Those queries produce three places where agents can appear: the Google map pack (the three local business listings that appear above organic results), organic web results, and increasingly, AI-generated answer panels that synthesize a recommendation from GBP data, review signals, and content. Dominating local search means showing up credibly in all three.
            </p>
            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: "0 0 28px" }}>
              The commercial value of these clicks is exceptional. Insurance leads from local organic search convert at 3–5x the rate of paid leads, because the prospect has already chosen to search rather than be interrupted. They&apos;re actively looking for what you offer. Local SEO captures that intent at its peak — and unlike paid ads, the rankings you build compound over time without a cost-per-click attached to each visitor.
            </p>

            <blockquote
              style={{
                borderLeft: "3px solid #FF5500",
                margin: "40px 0",
                padding: "20px 28px",
                background: "#0d0d0d",
              }}
            >
              <p style={{ color: "#ddd", fontSize: "1.1rem", fontStyle: "italic", lineHeight: 1.7, margin: 0, fontWeight: 600 }}>
                &ldquo;Local SEO is the only marketing channel where a single agent with one office can consistently outrank national carriers in their own backyard — if they do the work.&rdquo;
              </p>
            </blockquote>

            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: 0 }}>
              Most independent agents are leaving this opportunity on the table. Their Google Business Profiles are incomplete or abandoned. Their websites have no local content. Their citation profiles are inconsistent. This guide walks through the complete framework for fixing that — from the foundational work most agents skip to the content strategy that builds long-term authority.
            </p>
          </section>

          {/* ── Section: How Local Search Works ── */}
          <section id="how-local-search-works" style={{ marginBottom: "72px", paddingTop: "48px", borderTop: "1px solid #111" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>The Mechanics</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 900, letterSpacing: "-0.025em", lineHeight: 1.1, margin: "0 0 24px" }}>
              How Local Search Works for Insurance Agents
            </h2>
            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: "0 0 20px" }}>
              Google&apos;s local algorithm uses three primary ranking factors. Understanding them is prerequisite to prioritizing the right work:
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#1a1a1a", border: "1px solid #1a1a1a", marginBottom: "32px" }}>
              {[
                {
                  factor: "Relevance",
                  desc: "How closely your business profile and website match what the searcher is looking for. Controlled by: GBP category selections, service listings, website content, and keyword signals across your online presence.",
                },
                {
                  factor: "Distance",
                  desc: "How far your business is from the searcher's location (or the location specified in the query). Partially outside your control — but service area settings and location page content extend your proximity footprint.",
                },
                {
                  factor: "Prominence",
                  desc: "How well-known and reputable your business is, as determined by Google's systems. Driven by: review volume and rating, citation count and quality, backlink authority, and overall web presence depth.",
                },
              ].map((item) => (
                <div key={item.factor} style={{ background: "#0a0a0a", padding: "24px 28px", display: "grid", gridTemplateColumns: "160px 1fr", gap: "20px", alignItems: "start" }}>
                  <p style={{ margin: 0, fontWeight: 800, fontSize: "0.9rem", color: "#FF5500", letterSpacing: "0.02em" }}>{item.factor}</p>
                  <p style={{ margin: 0, color: "#777", fontSize: "0.9rem", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: "0 0 20px" }}>
              The local search landscape for insurance agents operates across two distinct query types, each requiring different optimization strategies:
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "1px", background: "#1a1a1a", border: "1px solid #1a1a1a", marginBottom: "28px" }}>
              {[
                {
                  type: "Intent-to-Hire Queries",
                  examples: "\"insurance agent near me,\" \"independent insurance agent [city],\" \"home insurance agency [zip]\"",
                  strategy: "GBP optimization, review velocity, and NAP citation consistency drive map pack placement for these high-commercial-intent queries.",
                },
                {
                  type: "Educational Queries",
                  examples: "\"how much home insurance do I need in [state],\" \"what does renters insurance cover,\" \"auto insurance requirements [state]\"",
                  strategy: "On-site educational content targeting these informational queries builds topical authority and positions your agency as the trusted expert before the prospect is ready to buy.",
                },
              ].map((item) => (
                <div key={item.type} style={{ background: "#0a0a0a", padding: "28px" }}>
                  <p style={{ margin: "0 0 10px", fontWeight: 800, fontSize: "0.9rem", color: "#FF5500" }}>{item.type}</p>
                  <p style={{ margin: "0 0 8px", fontSize: "0.8rem", color: "#555", fontStyle: "italic" }}>e.g. {item.examples}</p>
                  <p style={{ margin: 0, color: "#666", fontSize: "0.85rem", lineHeight: 1.7 }}>{item.strategy}</p>
                </div>
              ))}
            </div>

            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: 0 }}>
              A complete local SEO strategy for insurance agents addresses both query types — the transactional visibility that drives immediate calls and the educational content that builds the authority and trust signals that sustain rankings long-term. The eight pillars below cover both.
            </p>
          </section>

          {/* ── Section: 8 Pillars ── */}
          <section id="eight-pillars" style={{ marginBottom: "72px", paddingTop: "48px", borderTop: "1px solid #111" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>The Framework</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 900, letterSpacing: "-0.025em", lineHeight: 1.1, margin: "0 0 16px" }}>
              The 8-Pillar Local SEO Framework for Insurance Agents
            </h2>
            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: "0 0 40px" }}>
              These eight pillars are ordered by impact-to-effort ratio for agents starting from a typical baseline. Work through them sequentially — each builds on the foundation of the last.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#1a1a1a", border: "1px solid #1a1a1a" }}>
              {pillars.map((pillar) => (
                <div
                  key={pillar.num}
                  style={{
                    background: "#080808",
                    padding: "40px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-12px",
                      right: "20px",
                      fontSize: "5.5rem",
                      fontWeight: 900,
                      color: "#111",
                      lineHeight: 1,
                      userSelect: "none",
                      pointerEvents: "none",
                    }}
                  >
                    {pillar.num}
                  </div>
                  <div style={{ color: "#FF5500", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "10px" }}>
                    Pillar {pillar.num}
                  </div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 800, margin: "0 0 16px", letterSpacing: "-0.01em", maxWidth: "600px" }}>
                    {pillar.title}
                  </h3>
                  <p style={{ color: "#777", fontSize: "0.92rem", lineHeight: 1.8, margin: 0, maxWidth: "680px" }}>
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section: Competitive Audit ── */}
          <section id="competitive-audit" style={{ marginBottom: "72px", paddingTop: "48px", borderTop: "1px solid #111" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Know Your Competition</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 900, letterSpacing: "-0.025em", lineHeight: 1.1, margin: "0 0 24px" }}>
              Competitive Intelligence: How to Audit Your Local Market
            </h2>
            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: "0 0 20px" }}>
              Before investing in local SEO, audit who is currently winning in your market and why. This tells you exactly what level of effort is required to compete — and where the fastest gaps exist to close.
            </p>
            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: "0 0 28px" }}>
              Run a local audit in three steps:
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "36px" }}>
              {[
                {
                  step: "01",
                  title: "Map the current map pack",
                  body: "Search your primary local keywords (\"{coverage type} insurance agent {your city}\") from a device located in your market area. Note the three businesses in the map pack: their review count, review rating, GBP completeness (photos, posts, Q&A), and how long they've been established. This sets your competitive baseline.",
                },
                {
                  step: "02",
                  title: "Analyze their citation profiles",
                  body: "Use a free tool like Moz Local or BrightLocal's citation tracker to see where your top competitors are listed. Note which high-authority sources (state DOI, insurance associations, BBB) they have that you don't. These are your priority citation gaps.",
                },
                {
                  step: "03",
                  title: "Review their on-site content",
                  body: "Visit the websites of the top two or three local competitors. Note their service page structure, content depth, presence of location-specific content, and whether they have a blog or educational content hub. Look for obvious gaps — thin service pages, no FAQ sections, no schema markup — that you can exploit with better content.",
                },
              ].map((item) => (
                <div key={item.step} style={{ background: "#0f0f0f", border: "1px solid #1e1e1e", padding: "28px", display: "grid", gridTemplateColumns: "auto 1fr", gap: "20px", alignItems: "start" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      background: "rgba(255,85,0,0.1)",
                      border: "1px solid rgba(255,85,0,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 900,
                      fontSize: "0.75rem",
                      color: "#FF5500",
                      flexShrink: 0,
                    }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <h3 style={{ margin: "0 0 8px", fontSize: "0.95rem", fontWeight: 800, color: "#eee" }}>{item.title}</h3>
                    <p style={{ margin: 0, color: "#666", fontSize: "0.88rem", lineHeight: 1.75 }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                background: "#0d0d0d",
                border: "1px solid #1e1e1e",
                borderLeft: "3px solid #FF5500",
                padding: "20px 24px",
              }}
            >
              <p style={{ margin: 0, color: "#888", fontSize: "0.88rem", lineHeight: 1.7 }}>
                <strong style={{ color: "#eee" }}>Also read:</strong> If your market includes significant competition for AI search visibility, see our companion guide on{" "}
                <Link href="/blog/ai-search-for-insurance-agencies" style={{ color: "#FF5500", textDecoration: "none" }}>
                  AI Search for Insurance Agencies
                </Link>{" "}
                — the EEAT framework that gets agencies cited in ChatGPT, Perplexity, and Google AI Overviews.
              </p>
            </div>
          </section>

          {/* ── Section: Stats ── */}
          <section style={{ marginBottom: "72px", paddingTop: "48px", borderTop: "1px solid #111" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))",
                gap: "1px",
                background: "#1a1a1a",
                border: "1px solid #1a1a1a",
              }}
            >
              {[
                { stat: "3–5×", label: "Higher conversion rate for local organic leads vs. paid insurance leads" },
                { stat: "4–8 wks", label: "Typical time to first map pack movement after GBP optimization" },
                { stat: "46%", label: "Of all Google searches have local intent — insurance queries skew higher" },
                { stat: "78%", label: "Of local mobile searches result in an offline purchase or contact within 24 hours" },
              ].map((item) => (
                <div key={item.stat} style={{ background: "#0a0a0a", padding: "28px 24px", textAlign: "center" }}>
                  <p style={{ margin: "0 0 8px", fontSize: "1.8rem", fontWeight: 900, color: "#FF5500", letterSpacing: "-0.02em" }}>{item.stat}</p>
                  <p style={{ margin: 0, fontSize: "0.82rem", color: "#666", lineHeight: 1.5 }}>{item.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section: Common Mistakes ── */}
          <section id="common-mistakes" style={{ marginBottom: "72px", paddingTop: "48px", borderTop: "1px solid #111" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>What Not to Do</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 900, letterSpacing: "-0.025em", lineHeight: 1.1, margin: "0 0 16px" }}>
              Common Mistakes That Kill Local Rankings
            </h2>
            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: "0 0 36px" }}>
              These patterns appear in nearly every insurance agent&apos;s local SEO audit. Fixing them often produces faster ranking improvements than adding new content or citations.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#1a1a1a", border: "1px solid #1a1a1a" }}>
              {mistakes.map((item, i) => (
                <div key={i} style={{ background: "#080808", padding: "28px 32px", display: "grid", gridTemplateColumns: "auto 1fr", gap: "20px", alignItems: "start" }}>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      background: "rgba(255,85,0,0.1)",
                      border: "1px solid rgba(255,85,0,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: "0.7rem",
                      fontWeight: 900,
                      color: "#FF5500",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 style={{ margin: "0 0 8px", fontSize: "0.95rem", fontWeight: 800, color: "#eee" }}>{item.title}</h3>
                    <p style={{ margin: 0, color: "#666", fontSize: "0.88rem", lineHeight: 1.75 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Key Takeaways ── */}
          <section id="takeaways" style={{ marginBottom: "72px", paddingTop: "48px", borderTop: "1px solid #111" }}>
            <div
              style={{
                background: "#0d0d0d",
                border: "1px solid #1e1e1e",
                borderTop: "3px solid #FF5500",
                padding: "40px",
              }}
            >
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "28px" }}>
                <div style={{ width: "8px", height: "8px", background: "#FF5500", borderRadius: "50%", boxShadow: "0 0 10px #FF5500" }} />
                <span style={{ color: "#FF5500", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Key Takeaways</span>
              </div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                {takeaways.map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "22px",
                        height: "22px",
                        background: "#FF5500",
                        flexShrink: 0,
                        fontSize: "0.65rem",
                        fontWeight: 900,
                        color: "white",
                        marginTop: "2px",
                      }}
                    >
                      {i + 1}
                    </span>
                    <p style={{ margin: 0, color: "#aaa", fontSize: "0.92rem", lineHeight: 1.75 }}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

        </div>
      </article>

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: "72px 32px", borderTop: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ marginBottom: "48px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Common Questions</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 900, letterSpacing: "-0.025em", lineHeight: 1.1, margin: 0 }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {faq.map((item, i) => (
              <div key={i} style={{ borderTop: "1px solid #1a1a1a", padding: "28px 0" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#eee", margin: "0 0 12px" }}>{item.q}</h3>
                <p style={{ color: "#777", fontSize: "0.9rem", lineHeight: 1.8, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Author Bio ── */}
      <section style={{ padding: "56px 32px", borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div
            style={{
              background: "#0f0f0f",
              border: "1px solid #1e1e1e",
              padding: "36px",
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "28px",
              alignItems: "start",
            }}
          >
            <div
              style={{
                width: "72px",
                height: "72px",
                background: "linear-gradient(135deg, #FF5500, #FF7733)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                fontWeight: 900,
                fontSize: "1.4rem",
                color: "white",
              }}
            >
              AQ
            </div>
            <div>
              <p style={{ margin: "0 0 2px", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF5500" }}>About the Author</p>
              <h3 style={{ margin: "0 0 4px", fontSize: "1.1rem", fontWeight: 900, color: "#fff" }}>Abe Quinn</h3>
              <p style={{ margin: "0 0 14px", fontSize: "0.8rem", color: "#555", fontWeight: 600 }}>Founder &amp; CEO, Echelon Fox</p>
              <p style={{ margin: 0, color: "#777", fontSize: "0.88rem", lineHeight: 1.75 }}>
                Abe founded Echelon Fox to build performance marketing programs for service businesses and e-commerce brands that want measurable, compounding growth. He has worked directly with insurance agencies on local SEO, digital strategy, and AI search positioning — helping independent agents translate offline expertise into the digital credibility that modern search requires. Echelon Fox&apos;s local SEO frameworks are built on first-hand campaign data, not templates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "100px 32px", textAlign: "center", position: "relative", overflow: "hidden" }}>
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
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(255,85,0,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: "680px", margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
            <div style={{ width: "8px", height: "8px", background: "#FF5500", borderRadius: "50%", boxShadow: "0 0 12px #FF5500" }} />
            <span style={{ color: "#FF5500", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Ready to Own Your Local Market?</span>
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 900,
              lineHeight: 1.06,
              letterSpacing: "-0.025em",
              margin: "0 0 20px",
            }}
          >
            Let&apos;s Build Your Agency&apos;s{" "}
            <span style={{ color: "#FF5500" }}>Local Search Dominance</span>
          </h2>
          <p style={{ color: "#666", fontSize: "1rem", lineHeight: 1.7, margin: "0 0 40px" }}>
            We audit insurance agent digital footprints, identify the specific gaps suppressing local visibility, and build the GBP, citation, content, and schema infrastructure to fix them. Start with a free audit.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
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
              Get a Free Audit
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/services/seo-content"
              style={{
                background: "transparent",
                color: "white",
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "15px 39px",
                textDecoration: "none",
                border: "1px solid #333",
                clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              Our SEO Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
