import type { Metadata } from "next";
import Link from "next/link";
import ServiceNav from "@/components/ServiceNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Local SEO for Insurance Agents: The Playbook to Dominate Your Market",
  description:
    "Most insurance agents lose local search to carriers and aggregators. Here's the exact local SEO strategy — GBP, citations, reviews, and content — to rank where your buyers actually look.",
  alternates: {
    canonical: "https://echelonfox.com/blog/local-seo-for-insurance-agents",
  },
  openGraph: {
    title: "Local SEO for Insurance Agents — Echelon Fox",
    description:
      "The complete local SEO playbook for independent insurance agents: Google Business Profile, citations, reviews, location pages, and content strategy.",
    url: "https://echelonfox.com/blog/local-seo-for-insurance-agents",
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
    "Local SEO for Insurance Agents: The Exact Playbook to Dominate Your Market",
  description:
    "Most insurance agents lose local search to carriers and aggregators. Here's the exact local SEO strategy — GBP, citations, reviews, and location pages — to rank where your buyers actually look.",
  image: "https://echelonfox.com/opengraph-image",
  datePublished: "2025-06-29",
  dateModified: "2025-06-29",
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
    "@id": "https://echelonfox.com/blog/local-seo-for-insurance-agents",
  },
  keywords: [
    "local SEO insurance agents",
    "insurance agent Google Business Profile",
    "insurance agency local search",
    "insurance agent SEO strategy",
    "local SEO for independent insurance",
    "insurance citations SEO",
    "insurance agent reviews SEO",
  ],
  articleSection: "Insurance Agency Marketing",
  wordCount: 1600,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does local SEO take for an insurance agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For Google Business Profile improvements — better map pack visibility, more calls from search — most agencies see measurable movement within 60 to 90 days of fixing foundational issues: complete GBP, active review acquisition, and accurate citations. Ranking service pages in organic local results typically takes 4 to 6 months of consistent work. Competitive markets like major metro areas take longer. The compounding nature of local SEO means the investment made in month one pays dividends 18 months later — the agencies that treat it as a long-term asset win.",
      },
    },
    {
      "@type": "Question",
      name: "What is the most important local ranking factor for insurance agents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your Google Business Profile is the single highest-leverage local ranking asset you control. Completeness, category accuracy, review velocity, and activity signals (posts, Q&A responses, photo uploads) all directly affect map pack placement. After GBP, review quantity and recency are the most actionable signals — agencies with consistent monthly review volume outperform competitors with larger but stagnant review counts. NAP consistency across directories is the third foundational pillar.",
      },
    },
    {
      "@type": "Question",
      name: "Should an insurance agent have separate pages for each city they serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, with an important caveat: only create location pages with genuinely unique content. A page that says 'We serve auto insurance in [City Name]' with nothing else is a thin page that will not rank and may hurt your site's quality signals. Real location pages include local context: state-specific coverage requirements, area-specific risks (coastal flooding, hail zones, high-theft corridors), community involvement, and agent bios for staff who serve that area. Done properly, location pages are among the strongest local ranking assets an agency can build.",
      },
    },
    {
      "@type": "Question",
      name: "How many Google reviews does an insurance agency need to rank locally?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no hard threshold, but 50+ reviews at 4.5 stars or above is where agencies consistently begin appearing in map pack results for competitive local queries. More important than total count is recency: two to four new reviews per month signals an actively operating, client-facing business. Review velocity matters more than a burst of reviews collected once — an agency with 80 reviews that stopped getting new ones two years ago will often lose map pack placement to a competitor with 30 reviews that averages three new ones per month.",
      },
    },
    {
      "@type": "Question",
      name: "Does an insurance agent need a physical office address to rank in local search?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A physical address gives you the strongest local ranking signal for the specific city where your office is located. However, Google allows service-area businesses — agencies without a public storefront — to list their service areas and rank within them. The trade-off is that a service-area configuration generally produces weaker map pack placement than a verified physical location. If you serve clients in a market where you don't have an office, your best path to local visibility there is through organic content — location-specific service pages — rather than GBP map pack.",
      },
    },
    {
      "@type": "Question",
      name: "What local citations matter most for insurance agents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Industry-specific citations carry far more weight than generic directories. Priority one: your state's Department of Insurance agency finder. Priority two: national and state insurance association directories — IIABA's Trusted Choice portal, NAIFA member directory, PIA directory, NAHU if you write health lines. Priority three: Better Business Bureau. After those, local citations — Chamber of Commerce, local business journals, regional directories with editorial standards — matter more than bulk submissions to generic citation aggregators. One citation from your state DOI is worth more than 40 generic directory listings.",
      },
    },
  ],
};

const faq = [
  {
    q: "How long does local SEO take for an insurance agency?",
    a: "For Google Business Profile improvements — better map pack visibility, more calls from search — most agencies see measurable movement within 60 to 90 days of fixing foundational issues: complete GBP, active review acquisition, and accurate citations. Ranking service pages in organic local results typically takes 4 to 6 months of consistent work. Competitive markets like major metro areas take longer. The compounding nature of local SEO means the investment made in month one pays dividends 18 months later — the agencies that treat it as a long-term asset win.",
  },
  {
    q: "What is the most important local ranking factor for insurance agents?",
    a: "Your Google Business Profile is the single highest-leverage local ranking asset you control. Completeness, category accuracy, review velocity, and activity signals (posts, Q&A responses, photo uploads) all directly affect map pack placement. After GBP, review quantity and recency are the most actionable signals — agencies with consistent monthly review volume outperform competitors with larger but stagnant review counts. NAP consistency across directories is the third foundational pillar.",
  },
  {
    q: "Should an insurance agent have separate pages for each city they serve?",
    a: "Yes, with an important caveat: only create location pages with genuinely unique content. A page that says 'We serve auto insurance in [City Name]' with nothing else is a thin page that will not rank and may hurt your site's quality signals. Real location pages include local context: state-specific coverage requirements, area-specific risks (coastal flooding, hail zones, high-theft corridors), community involvement, and agent bios for staff who serve that area. Done properly, location pages are among the strongest local ranking assets an agency can build.",
  },
  {
    q: "How many Google reviews does an insurance agency need to rank locally?",
    a: "There is no hard threshold, but 50+ reviews at 4.5 stars or above is where agencies consistently begin appearing in map pack results for competitive local queries. More important than total count is recency: two to four new reviews per month signals an actively operating, client-facing business. Review velocity matters more than a burst of reviews collected once — an agency with 80 reviews that stopped getting new ones two years ago will often lose map pack placement to a competitor with 30 reviews that averages three new ones per month.",
  },
  {
    q: "Does an insurance agent need a physical office address to rank in local search?",
    a: "A physical address gives you the strongest local ranking signal for the specific city where your office is located. However, Google allows service-area businesses — agencies without a public storefront — to list their service areas and rank within them. The trade-off is that a service-area configuration generally produces weaker map pack placement than a verified physical location. If you serve clients in a market where you don't have an office, your best path to local visibility there is through organic content — location-specific service pages — rather than GBP map pack.",
  },
  {
    q: "What local citations matter most for insurance agents?",
    a: "Industry-specific citations carry far more weight than generic directories. Priority one: your state's Department of Insurance agency finder. Priority two: national and state insurance association directories — IIABA's Trusted Choice portal, NAIFA member directory, PIA directory, NAHU if you write health lines. Priority three: Better Business Bureau. After those, local citations — Chamber of Commerce, local business journals, regional directories with editorial standards — matter more than bulk submissions to generic citation aggregators. One citation from your state DOI is worth more than 40 generic directory listings.",
  },
];

const steps = [
  {
    num: "01",
    title: "Build a Google Business Profile That Actually Works",
    body: "Most insurance agency GBP listings are set up once and forgotten. That's a problem, because Google uses activity signals — recency of photos, frequency of posts, Q&A engagement, review response rate — as part of how it evaluates local business credibility. Start with completeness: your primary category should be Insurance Agency, not a generic financial services option. Add every relevant secondary category: Auto Insurance Agency, Life Insurance Agency, Home Insurance Agency, Commercial Insurance Agency. Fill in your full service area list, every coverage line under Services, your hours (including whether you take after-hours calls), and your website. Upload at least 20 photos — exterior, interior, team headshots, any community event participation. Then treat your GBP as a publishing platform: post at minimum twice a month. Policy tips, coverage reminders, community involvement, seasonal risk alerts. It signals to Google that this is an active, operating business with regular client engagement, not a dormant listing from five years ago.",
  },
  {
    num: "02",
    title: "Lock Down Your NAP and Citation Consistency",
    body: "NAP — Name, Address, Phone — consistency sounds simple, but it is one of the most common local SEO failures for insurance agencies, especially those that have moved offices, changed phone numbers, or been acquired. Google cross-references your business information across hundreds of data sources. Discrepancies — Suite 200 on your website, Ste. 200 on Yelp, no suite number on your GBP — create ambiguity that suppresses local rankings. Start by auditing your current citation profile using a tool like BrightLocal or Whitespark to surface everywhere your agency appears online. Correct inconsistencies systematically, starting with the highest-authority sources: GBP, Bing Places, Apple Maps, Yelp, Facebook, BBB. Then work through industry directories and local sources. This is not glamorous work, but agencies that clean up citation inconsistencies often see meaningful map pack ranking improvements within 60 days — with no other changes.",
  },
  {
    num: "03",
    title: "Create Location-Specific Service Pages With Real Depth",
    body: "If you serve clients across multiple cities or counties, you need a dedicated page for each meaningful market — but the content has to earn its place. A page that swaps city names into a template is not a location page; it's a thin page that tells Google nothing useful and tells prospects even less. Real location pages are built around local specificity: What are the state-required minimum coverage limits for that area? What regional risks should residents account for — wildfire zones, flood plains, high-theft corridors, coastal hurricane exposure? Are there local employers, HOAs, or business districts that create common coverage scenarios? Who on your team serves that market, and what's their background? This depth is exactly what AI search systems and Google's quality evaluators look for when deciding whether to surface your page for a local coverage query. One well-built location page for a secondary market you serve can outrank competitors who have a physical office there but have never invested in content.",
  },
  {
    num: "04",
    title: "Build a Review Engine That Runs Consistently",
    body: "A systematic, repeatable review acquisition process is not optional for local SEO — it is a foundational ranking mechanism. The agencies that dominate map pack results in their market are almost universally running a consistent, low-friction review request process. The mechanics are straightforward: at the moment of policy completion, renewal confirmation, or successful claims resolution, send a direct text or email with a personalized note and a one-tap link to your Google Business Profile review page. Make it easy. The message should be brief, personal, and specific to the interaction — not a generic 'please review us' blast. Set a target of two to four new reviews per month as your baseline. Respond to every review within 48 hours — positive and negative. Your response to a one-star review is itself a trust signal to both Google and the prospects who will read it before calling you. The tone, professionalism, and speed of your response tells them exactly how you handle difficult situations with clients.",
  },
  {
    num: "05",
    title: "Earn Citations From Sources That Carry Real Authority",
    body: "Not all citations are equal. A listing on a low-traffic generic directory adds almost no local authority. A listing in your state's Department of Insurance agency directory is a citation from a government regulatory body — that carries real weight with both Google and AI search systems evaluating your trustworthiness as a licensed insurance professional. Work through these in priority order: state DOI agency finder (required for full compliance in most states anyway), Trusted Choice via IIABA if you're an independent agent, NAIFA member directory, PIA or NAHU if applicable, Better Business Bureau accreditation, your local Chamber of Commerce, and any regional business association directories with real editorial standards. After these industry and local authority citations, your next targets are local press. Sponsor a community event and get coverage in the local paper. Participate in a local business story. Donate to a school fundraiser that earns a mention on the school's website. These are real community signals that translate into local SEO authority.",
  },
  {
    num: "06",
    title: "Publish Content That Reflects Local Insurance Reality",
    body: "The gap between a local insurance agent's knowledge and what they publish online is remarkable. Agents who have navigated hundreds of claims, explained coverage exclusions to confused clients, and helped families recover after disasters hold expertise that would be genuinely valuable if it were actually published. That expertise is also exactly what Google and AI systems reward. Start with coverage questions specific to your state: Does Texas homeowners insurance cover hail damage? What's the right amount of UM/UIM coverage for a Florida driver? What do California independent contractors actually need for a business owners policy? Then build content around local risk contexts: if you're in a coastal market, flood and windstorm content. If you're in a Midwest market, tornado season preparedness and farm coverage. If you serve small businesses in your city, write the guide to commercial coverage that every local business owner should read before renewing their policy. This content positions you as the local expert — not just another agency — and earns the search visibility that matches.",
  },
];

const mistakes = [
  {
    title: "Treating Your GBP as a One-Time Setup Task",
    desc: "The agency that set up their GBP in 2019 and hasn't touched it since is losing ground every month to competitors who are actively posting, responding to reviews, and keeping their business information current. Google interprets GBP inactivity as a signal of a less engaged, potentially less reliable business. A 30-minute monthly GBP maintenance routine — two posts, photo upload, Q&A check, review responses — consistently outperforms a perfectly optimized but static profile.",
  },
  {
    title: "Keyword-Stuffing the Business Name Field",
    desc: "Adding 'Best Auto Insurance | Home | Life | Business Coverage' to your GBP business name to game local rankings is against Google's guidelines and actively gets listings suspended. The agencies doing this are borrowing time, not building advantage. Your GBP business name should match your legal business name, exactly as it appears on your signage and state registration. Keyword context comes from your categories, services, description, and posts — not a stuffed name field.",
  },
  {
    title: "Ignoring Duplicate Listings",
    desc: "Duplicate GBP listings — common after agency acquisitions, address changes, or multiple agents claiming profiles for the same location — split review equity, create NAP confusion, and can get both listings suppressed. If you find duplicates when auditing your presence, request removal of the invalid listings through Google's support process. Do not leave them live assuming they're harmless. Duplicate listings actively undermine your primary profile's ranking signals.",
  },
  {
    title: "Building Thin Location Pages With Swapped City Names",
    desc: "Template-generated location pages that simply replace the city name across identical content are identified and discounted by Google's quality systems. Worse, they consume crawl budget without delivering ranking value. If you don't have the time or resources to build genuinely differentiated location pages, you are better off with a well-optimized single service page and strong GBP than a sprawl of thin location pages that dilute your site's content quality signals.",
  },
  {
    title: "Skipping the Community Angle Entirely",
    desc: "Independent insurance agents have a trust advantage over carriers and aggregators: they are genuinely local. They live in the community, know the local risks, and have relationships. Most agents fail to translate that authentic local presence into digital signals. Participating in community events, sponsoring local organizations, contributing to local media, and publishing content that reflects neighborhood-specific knowledge are exactly the activities that build the local authority signals Google uses to rank local businesses. They're also the activities that differentiate you from an 800-number carrier in a way a prospect actually cares about.",
  },
];

const takeaways = [
  "Your Google Business Profile is the single highest-leverage local ranking asset you control — treat it as a living publication, not a one-time setup.",
  "NAP consistency across every directory, platform, and citation source is foundational. Audit and correct inconsistencies before investing in any other local SEO activity.",
  "Review velocity matters more than total count: two to four new reviews per month consistently beats a large, stagnant review history.",
  "Location pages only earn rankings when they contain genuinely local, differentiated content — state regulations, regional risks, community context, and local team bios.",
  "Industry citations from your state DOI, IIABA, NAIFA, and BBB carry more authority weight than dozens of generic directory listings.",
  "Local SEO compounds over time — the agency that starts today and maintains consistency will be nearly impossible to displace in 24 months.",
  "Authentic community participation (events, press, sponsorships) builds the local authority signals that no technical optimization alone can replicate.",
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
            <Link href="/blog" style={{ color: "#555", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>Blog</Link>
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
            <span style={{ color: "#444", fontSize: "0.78rem", fontWeight: 500 }}>7 min read</span>
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
            <span style={{ color: "#FF5500" }}>The Exact Playbook</span> to Dominate Your Market
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
            Independent insurance agents have a real competitive advantage over carriers and national aggregators — they&apos;re genuinely local. Most never translate that advantage into the digital signals that actually drive local search rankings. This is the playbook that closes that gap.
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
                <p style={{ margin: 0, fontSize: "0.82rem", color: "#888", fontWeight: 600 }}>June 29, 2025</p>
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
                ["Why Local Search Is the Independent Agent's Biggest Opportunity", "#intro"],
                ["The Local Search Landscape Insurance Agents Are Competing In", "#landscape"],
                ["The 6-Step Local SEO Playbook", "#six-steps"],
                ["Mistakes That Keep Insurance Agents Off the Map", "#mistakes"],
                ["Key Takeaways", "#takeaways"],
                ["Frequently Asked Questions", "#faq"],
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
              Why Local Search Is the Independent Agent&apos;s Biggest Opportunity
            </h2>
            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: "0 0 20px" }}>
              When someone in your city decides they need a new insurance agent — after a bad claims experience, a move, a life change, a rate increase that felt wrong — they are not calling State Farm&apos;s national line. They are opening Google and searching for someone local. Someone they can actually talk to. Someone who knows the area.
            </p>
            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: "0 0 20px" }}>
              That search behavior creates a window that independent agents should be winning more often than they are. The problem is most agencies are competing for that local visibility with a digital presence that looks like it was built by someone who wasn&apos;t sure the internet was going to stick around. An unclaimed GBP, a website that hasn&apos;t been updated since a previous employee left, no reviews in two years, and citations scattered across a dozen directories with four different phone numbers.
            </p>
            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: "0 0 28px" }}>
              Local SEO for insurance agents is not complicated. It is, however, specific — and it requires consistent execution over time rather than a one-week sprint. The agencies that get this right build a compounding local presence that becomes genuinely difficult for competitors to displace.
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
                &ldquo;The agencies winning local search aren&apos;t doing anything exotic. They&apos;re doing the fundamentals better and more consistently than their competitors — and the fundamentals compound.&rdquo;
              </p>
            </blockquote>

            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: 0 }}>
              This guide covers the six-step local SEO playbook that gets independent agents into the map pack and the top organic results for the searches that matter most — and the five mistakes that keep most agencies invisible despite having real expertise and a genuine local presence.
            </p>
          </section>

          {/* ── Section: Landscape ── */}
          <section id="landscape" style={{ marginBottom: "72px", paddingTop: "48px", borderTop: "1px solid #111" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>The Playing Field</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 900, letterSpacing: "-0.025em", lineHeight: 1.1, margin: "0 0 24px" }}>
              The Local Search Landscape Insurance Agents Are Competing In
            </h2>
            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: "0 0 20px" }}>
              A local insurance query in Google returns three distinct result types that agents need to be aware of. The map pack — the three-listing block with a map that appears near the top of the page — is driven primarily by Google Business Profile signals, review data, and proximity. Below that, organic results are governed by traditional SEO factors: content quality, backlink authority, on-page optimization, and site structure. And increasingly, AI Overviews appear above both, synthesizing answers from sources Google considers credible.
            </p>
            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: "0 0 28px" }}>
              Independent agents are competing against a challenging mix: direct carriers with massive domain authority, lead aggregators (Zebra, EverQuote, Policygenius) that have invested heavily in SEO infrastructure, and other local agencies. The good news is the map pack — where purchase intent is highest — is the one surface where a well-optimized independent agency can consistently beat national players. A carrier&apos;s national website cannot rank in the map pack for your city. You can.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))",
                gap: "1px",
                background: "#1a1a1a",
                border: "1px solid #1a1a1a",
                marginBottom: "28px",
              }}
            >
              {[
                { stat: "Map Pack", label: "The highest-intent local surface — only local businesses with verified GBP listings can rank here" },
                { stat: "\"Near Me\"", label: "Query modifier that triggers map pack results — and is growing year over year in insurance searches" },
                { stat: "46%", label: "Of all Google searches have local intent — the majority of which are conducted on mobile devices" },
              ].map((item) => (
                <div key={item.stat} style={{ background: "#0a0a0a", padding: "28px 24px", textAlign: "center" }}>
                  <p style={{ margin: "0 0 8px", fontSize: "1.8rem", fontWeight: 900, color: "#FF5500", letterSpacing: "-0.02em" }}>{item.stat}</p>
                  <p style={{ margin: 0, fontSize: "0.82rem", color: "#666", lineHeight: 1.5 }}>{item.label}</p>
                </div>
              ))}
            </div>

            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: 0 }}>
              The practical implication: your local SEO strategy should prioritize map pack visibility first (GBP, reviews, citations), then organic rankings for location-specific and coverage-specific queries (location pages, educational content), then AI search credibility (schema markup, EEAT signals). These are not separate projects — the work that improves GBP rankings also builds the entity credibility that AI systems evaluate.
            </p>
          </section>

          {/* ── Section: 6-Step Strategy ── */}
          <section id="six-steps" style={{ marginBottom: "72px", paddingTop: "48px", borderTop: "1px solid #111" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>The Playbook</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 900, letterSpacing: "-0.025em", lineHeight: 1.1, margin: "0 0 16px" }}>
              The 6-Step Local SEO Playbook for Insurance Agents
            </h2>
            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: "0 0 40px" }}>
              These steps are sequenced by impact and dependency — each one builds the foundation the next step requires. Do them in order the first time through.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#1a1a1a", border: "1px solid #1a1a1a" }}>
              {steps.map((step) => (
                <div
                  key={step.num}
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
                    {step.num}
                  </div>
                  <div style={{ color: "#FF5500", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "10px" }}>
                    Step {step.num}
                  </div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 800, margin: "0 0 16px", letterSpacing: "-0.01em", maxWidth: "600px" }}>
                    {step.title}
                  </h3>
                  <p style={{ color: "#777", fontSize: "0.92rem", lineHeight: 1.8, margin: 0, maxWidth: "680px" }}>
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section: Mistakes ── */}
          <section id="mistakes" style={{ marginBottom: "72px", paddingTop: "48px", borderTop: "1px solid #111" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>What Not to Do</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 900, letterSpacing: "-0.025em", lineHeight: 1.1, margin: "0 0 16px" }}>
              Mistakes That Keep Insurance Agents Off the Map
            </h2>
            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: "0 0 36px" }}>
              These are patterns we see repeatedly across agencies that have strong offline reputations but weak local search presence. None of them are permanent — they&apos;re fixable. But they need to be fixed deliberately, not left to sort themselves out.
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
                Abe founded Echelon Fox to build performance marketing programs for service businesses and e-commerce brands that want measurable, compounding growth. He has worked directly with insurance agencies on local SEO, Google Business Profile strategy, and digital authority building — helping independent agents translate genuine community expertise into the search visibility their businesses deserve. Echelon Fox&apos;s approach is built on first-hand campaign data across local markets, not generic best-practice lists.
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
            <span style={{ color: "#FF5500" }}>Local Search Presence</span>
          </h2>
          <p style={{ color: "#666", fontSize: "1rem", lineHeight: 1.7, margin: "0 0 40px" }}>
            We audit insurance agency digital footprints, identify the specific gaps suppressing local visibility, and build the GBP, citation, content, and review infrastructure to fix them. Start with a free audit.
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
