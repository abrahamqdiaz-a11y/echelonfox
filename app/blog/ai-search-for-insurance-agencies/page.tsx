import type { Metadata } from "next";
import Link from "next/link";
import ServiceNav from "@/components/ServiceNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Search for Insurance Agencies: How to Get Found in ChatGPT & Google AI",
  description:
    "Insurance agencies are losing leads to AI search without knowing it. Learn the EEAT framework and 7-step strategy to get cited by ChatGPT, Perplexity, and Google AI Overviews.",
  alternates: {
    canonical: "https://echelonfox.com/blog/ai-search-for-insurance-agencies",
  },
  openGraph: {
    title: "AI Search for Insurance Agencies — Echelon Fox",
    description:
      "How insurance agencies can show up in ChatGPT, Perplexity, and Google AI Overviews. A complete EEAT strategy guide from Echelon Fox.",
    url: "https://echelonfox.com/blog/ai-search-for-insurance-agencies",
    type: "article",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "AI Search for Insurance Agencies — Echelon Fox",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-default.png"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "AI Search for Insurance Agencies: How to Get Found in ChatGPT, Perplexity, and Google AI",
  description:
    "Insurance agencies are losing leads to AI search without knowing it. Learn the EEAT framework and 7-step strategy to get cited by ChatGPT, Perplexity, and Google AI Overviews.",
  image: "https://echelonfox.com/og-default.png",
  datePublished: "2025-06-12",
  dateModified: "2025-06-12",
  author: {
    "@type": "Person",
    name: "Abraham Diaz",
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
    "@id": "https://echelonfox.com/blog/ai-search-for-insurance-agencies",
  },
  keywords: [
    "AI search insurance agencies",
    "insurance agency SEO",
    "EEAT insurance",
    "ChatGPT insurance recommendations",
    "Google AI Overviews insurance",
    "insurance agency digital marketing",
    "generative engine optimization insurance",
  ],
  articleSection: "Insurance Agency Marketing",
  wordCount: 3800,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does AI search show insurance agency recommendations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Google AI Overviews, ChatGPT Search, and Perplexity regularly generate responses to insurance-related queries that include specific agency recommendations, coverage explanations, and company comparisons. Local queries like 'best independent insurance agent near me' often trigger AI-generated answers that pull from Google Business Profile data, review signals, and authoritative local content.",
      },
    },
    {
      "@type": "Question",
      name: "What is EEAT and why does it matter for insurance agencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EEAT stands for Experience, Expertise, Authoritativeness, and Trustworthiness — Google's framework for evaluating content quality. Insurance falls into the YMYL (Your Money or Your Life) category, meaning Google and AI systems apply their highest EEAT scrutiny to insurance content. Agencies that demonstrate licensed expertise, real client experience, authoritative industry citations, and transparent business practices are significantly more likely to be recommended by AI systems.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take for an insurance agency to appear in AI search results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timeline depends on your current digital footprint. Agencies with strong Google Business Profiles and consistent reviews can see local AI search improvements within 4–8 weeks of optimization. Building the content infrastructure and earning industry citations takes 3–6 months before you consistently appear in non-local AI-generated answers. Competitive markets take longer.",
      },
    },
    {
      "@type": "Question",
      name: "What schema markup should insurance agencies use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Insurance agencies should implement LocalBusiness schema (or the more specific InsuranceAgency type), FAQPage schema for educational content pages, BreadcrumbList schema for navigation, and Review/AggregateRating schema. For individual agent pages, use Person schema with credentials listed under hasCredential. Every location should have its own LocalBusiness schema with full NAP data.",
      },
    },
    {
      "@type": "Question",
      name: "Do online reviews affect AI search recommendations for insurance agencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — significantly. Review signals (quantity, recency, rating, and response rate) on Google, Facebook, and platforms like Trustpilot are factored into local AI search. Agencies with 50+ verified Google reviews at 4.5+ stars consistently outperform competitors in AI-generated local recommendations. The quality of responses to negative reviews also signals trustworthiness to AI evaluation systems.",
      },
    },
    {
      "@type": "Question",
      name: "How should insurance agencies structure content for AI search?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI models prefer content that directly answers specific questions, uses clear hierarchical structure (H1→H2→H3), includes data and concrete examples, and covers a topic comprehensively. For insurance agencies, the highest-performing content formats are educational guides explaining coverage types, comparison content (term vs whole life, etc.), location-specific pages, and detailed FAQ sections with schema markup.",
      },
    },
  ],
};

const faq = [
  {
    q: "Does AI search show insurance agency recommendations?",
    a: 'Yes. Google AI Overviews, ChatGPT Search, and Perplexity regularly generate responses to insurance-related queries that include specific agency recommendations, coverage explanations, and company comparisons. Local queries like "best independent insurance agent near me" often trigger AI-generated answers that pull from Google Business Profile data, review signals, and authoritative local content.',
  },
  {
    q: "What is EEAT and why does it matter for insurance agencies?",
    a: "EEAT stands for Experience, Expertise, Authoritativeness, and Trustworthiness — Google's framework for evaluating content quality. Insurance falls into the YMYL (Your Money or Your Life) category, meaning Google and AI systems apply their highest EEAT scrutiny to insurance content. Agencies that demonstrate licensed expertise, real client experience, authoritative industry citations, and transparent business practices are significantly more likely to be recommended by AI systems.",
  },
  {
    q: "How long does it take for an insurance agency to appear in AI search results?",
    a: "Timeline depends on your current digital footprint. Agencies with strong Google Business Profiles and consistent reviews can see local AI search improvements within 4–8 weeks of optimization. Building the content infrastructure and earning industry citations takes 3–6 months before you consistently appear in non-local AI-generated answers. Competitive markets take longer.",
  },
  {
    q: "What schema markup should insurance agencies use?",
    a: "Insurance agencies should implement LocalBusiness schema (or the more specific InsuranceAgency type), FAQPage schema for educational content pages, BreadcrumbList schema for navigation, and Review/AggregateRating schema. For individual agent pages, use Person schema with credentials listed under hasCredential. Every location should have its own LocalBusiness schema with full NAP data.",
  },
  {
    q: "Do online reviews affect AI search recommendations for insurance agencies?",
    a: "Yes — significantly. Review signals (quantity, recency, rating, and response rate) on Google, Facebook, and platforms like Trustpilot are factored into local AI search. Agencies with 50+ verified Google reviews at 4.5+ stars consistently outperform competitors in AI-generated local recommendations. The quality of responses to negative reviews also signals trustworthiness to AI evaluation systems.",
  },
  {
    q: "How should insurance agencies structure content for AI search?",
    a: "AI models prefer content that directly answers specific questions, uses clear hierarchical structure (H1→H2→H3), includes data and concrete examples, and covers a topic comprehensively. For insurance agencies, the highest-performing content formats are educational guides explaining coverage types, comparison content (term vs whole life, etc.), location-specific pages, and detailed FAQ sections with schema markup.",
  },
];

const steps = [
  {
    num: "01",
    title: "Audit and Optimize Your Google Business Profile",
    body: "Your Google Business Profile (GBP) is the single most important AI search asset a local insurance agency owns. Google AI Overviews and ChatGPT Search both pull heavily from GBP data when generating local recommendations. Verify your listing is claimed and fully completed — business name, address, phone number, category (Insurance Agency), service areas, hours, photos, and services. Set your primary category as \"Insurance Agency\" and add secondary categories that reflect your specialties (Life Insurance Agency, Auto Insurance Agency, etc.). Upload at minimum 20 high-quality photos: your office exterior, team headshots, and branded images. Publish Google Posts consistently — even bi-weekly updates signal an active, trustworthy business to AI systems.",
  },
  {
    num: "02",
    title: "Build Credential-Rich Agent Bio Pages",
    body: "Every licensed agent at your agency needs a dedicated bio page that establishes them as a credentialed expert. Include their full name, state licensing number, years of experience, carrier appointments, and professional designations — CPCU (Chartered Property Casualty Underwriter), CLU (Chartered Life Underwriter), ChFC (Chartered Financial Consultant), CIC (Certified Insurance Counselor), and others carry significant EEAT weight in AI evaluation. Headshot photography, professional background, specialties, and client-facing philosophy all contribute. AI models processing insurance queries specifically look for evidence that humans with real credentials and professional accountability stand behind the advice — not anonymous content farms. Link agent pages to your state's Department of Insurance verification portal to create a verifiable trust chain.",
  },
  {
    num: "03",
    title: "Create Educational Content That AI Models Cite",
    body: "The insurance queries people ask AI tools are almost always educational: \"What is the difference between term and whole life insurance?\" \"Does homeowners insurance cover flood damage?\" \"How much liability coverage does a small business need?\" Agencies that answer these questions thoroughly, accurately, and in structured formats get cited by AI systems — agencies that only publish promotional content do not. Build a content library organized around coverage-type pillars: auto, home, life, business, health, umbrella. Under each pillar, create comprehensive guides targeting specific questions. Use H2 and H3 headers that mirror the exact language of conversational queries. Include concrete examples, state-specific regulatory context where relevant, and clear definitions. 1,500–3,000 word guides consistently outperform short articles for AI citation.",
  },
  {
    num: "04",
    title: "Implement Insurance-Specific Schema Markup",
    body: "Schema markup is the direct communication channel between your website and AI parsing systems. At minimum, every insurance agency website needs: InsuranceAgency (LocalBusiness subtype) schema on every location page with full NAP, geo-coordinates, opening hours, and priceRange; FAQPage schema on every educational content page; BreadcrumbList schema on all pages; Person schema on every agent bio page with licenses listed under hasCredential; and AggregateRating schema if your site displays review scores. If you serve multiple locations, each location needs its own schema block. Use Google's Rich Results Test to validate implementation. AI systems weight structured data heavily when assembling recommendation responses because it reduces ambiguity about who and what they are recommending.",
  },
  {
    num: "05",
    title: "Build Industry Citations and Authoritative Backlinks",
    body: "AI models determine authority in part by examining what other authoritative sources say about you — not just what you say about yourself. For insurance agencies, the highest-value citations come from: state insurance department agency directories; national and state insurance association member directories (IIABA, NAIFA, PIA, NAHU); Better Business Bureau profile; Chamber of Commerce listings; and local business directories with editorial editorial standards. Beyond directories, pursue editorial mentions by contributing to local news coverage (business openings, community events, charity partnerships), guest authoring educational pieces for local business publications, and participating in insurance industry media. A single citation from your state's Department of Insurance website carries more AI authority weight than dozens of generic directory listings.",
  },
  {
    num: "06",
    title: "Engineer Your Review Strategy",
    body: "Review volume, recency, rating, and diversity are among the most concrete EEAT trust signals AI systems can evaluate. A systematic review strategy is not optional. At the point of policy completion or renewal, implement a direct outreach sequence: SMS or email asking clients to share their experience, with a direct link to your Google Business Profile review page. Aim for a minimum of 4.5 stars across 50+ reviews before expecting consistent AI visibility. Respond to every review — including negative ones — promptly and professionally. How you handle a negative review is itself a trust signal. Diversify beyond Google: Facebook, Trustpilot, and Yelp reviews all contribute to the web-wide entity reputation that AI models assess. Agencies with thin review profiles — even excellent agencies — are consistently overlooked in AI-generated recommendations.",
  },
  {
    num: "07",
    title: "Optimize for Conversational Insurance Queries",
    body: "AI search is fundamentally conversational. People ask questions in natural language, not keyword strings. Shift your content optimization from keyword-centric thinking to question-centric thinking. Map every piece of content to a specific question your ideal client would ask at each stage of their insurance buying journey — awareness (\"do I need life insurance?\"), consideration (\"how much life insurance do I need?\"), decision (\"how to find a good life insurance agent\"). Create dedicated FAQ sections on every major service page. Use your blog to answer long-tail conversational queries in depth. When possible, provide direct one-sentence answers at the top of each section before expanding with detail — this mirrors how AI systems extract and present information in their responses. Pages structured this way are significantly more likely to be quoted directly in AI-generated answers.",
  },
];

const eeatPillars = [
  {
    letter: "E",
    label: "Experience",
    color: "#FF5500",
    desc: "Demonstrated first-hand experience with insurance products and client outcomes. This includes published case studies showing how coverage protected real clients, testimonials with specific outcome details, documented claims advocacy stories, and agent bios with years of hands-on practice. AI systems look for evidence that advice comes from people who have actually navigated insurance complexity — not content written by generalists who researched the topic for 30 minutes.",
    signals: [
      "Client case studies with specific outcomes",
      "Before/after claims advocacy stories",
      "Agent tenure and policy volume data",
      "Community involvement and local presence",
      "Years in business and legacy documentation",
    ],
  },
  {
    letter: "E",
    label: "Expertise",
    color: "#FF7733",
    desc: "Professional credentials and subject matter depth that only a trained insurance professional possesses. Licensing is the floor — the EEAT ceiling includes advanced designations, carrier specializations, and demonstrated mastery of complex coverage scenarios. Content that reflects genuine expertise answers questions with nuance: explaining coverage exclusions, state-specific regulatory context, underwriting considerations, and risk management strategy. Generalist content that could have been written by anyone signals low expertise.",
    signals: [
      "State insurance license numbers and verification links",
      "Professional designations (CPCU, CLU, CIC, ChFC)",
      "Carrier appointment disclosures",
      "Specialty coverage certifications",
      "Continuing education and association memberships",
    ],
  },
  {
    letter: "A",
    label: "Authoritativeness",
    color: "#FF5500",
    desc: "The degree to which your agency is recognized as a trustworthy source by other authoritative entities — regulators, associations, media, and industry bodies. Authoritativeness is not self-declared; it is conferred by external recognition. An agency mentioned in the local newspaper, listed in the state DOI directory, and quoted in industry publications carries far more AI authority than an agency with a well-optimized website but zero external recognition. Building authority requires deliberate outreach and community positioning over time.",
    signals: [
      "State DOI agency directory listings",
      "Insurance association memberships (IIABA, NAIFA, PIA)",
      "Local media coverage and press mentions",
      "Industry publication features or contributions",
      "BBB accreditation and rating",
    ],
  },
  {
    letter: "T",
    label: "Trustworthiness",
    color: "#FF7733",
    desc: "The technical and behavioral signals that confirm your agency operates with integrity and transparency. Trustworthiness is evaluated at the domain level (HTTPS, privacy policy, terms of service, clear contact information) and the entity level (consistent NAP data, review response behavior, transparent pricing, disclosed licensing). For insurance agencies specifically, displaying license numbers, providing accurate coverage information without misleading omissions, and making it easy for prospects to verify credentials are fundamental trust-building actions.",
    signals: [
      "HTTPS security and core technical standards",
      "Consistent NAP across all directories",
      "Active review response strategy",
      "Clear licensing and credentials disclosure",
      "Privacy policy and contact transparency",
    ],
  },
];

const mistakes = [
  {
    title: "Publishing Generic \"Insurance 101\" Content",
    desc: "Content that could have been written by anyone — vague definitions of deductibles and premiums, general advice to \"talk to an agent\" — fails to establish the expertise AI systems require. Every piece of content should be specific enough that a layperson would recognize the author as a professional, not a content marketing writer working from a brief.",
  },
  {
    title: "Neglecting the Google Business Profile After Setup",
    desc: "A GBP created at agency launch and never updated is one of the most common and costly AI search failures for insurance agencies. Reviews accumulate without responses. Information goes stale. Photos show a five-year-old office interior. AI systems treat an abandoned GBP as a signal of business inactivity — and route prospects to competitors whose profiles show recent engagement.",
  },
  {
    title: "Treating Reviews as a One-Time Effort",
    desc: "A burst of review requests at launch followed by years of inactivity creates a suspicious recency gap in the review profile. AI systems evaluate review recency alongside volume. A steady flow of 2–4 new reviews per month consistently outperforms 50 reviews collected in one quarter and nothing since.",
  },
  {
    title: "Using Keyword-Stuffed Service Pages Instead of Answering Real Questions",
    desc: "Pages titled \"Best Homeowners Insurance Agency [City] [State]\" that repeat location-keyword variations instead of actually helping the prospect understand coverage are penalized by both Google's quality evaluators and AI content parsers. Structure service pages around what the prospect needs to know to make a confident coverage decision — the location optimization follows naturally.",
  },
  {
    title: "Ignoring Schema Markup Entirely",
    desc: "Schema markup is the single highest-ROI technical investment for AI search visibility, yet the majority of small and mid-size insurance agency websites have none. AI systems can infer some entity information without schema, but explicit structured data removes ambiguity and dramatically improves the probability that your agency is cited accurately in AI-generated responses.",
  },
  {
    title: "No Individual Agent Pages",
    desc: "Insurance is a relationship-driven business. Prospects choosing an agency in 2025 want to verify they are working with a real, credentialed, accountable professional — not an anonymous entity. Agencies that present themselves only as a brand with no identifiable individuals behind it fail the experience and expertise dimensions of EEAT in ways that directly suppress AI search visibility.",
  },
];

const takeaways = [
  "AI search (Google AI Overviews, ChatGPT, Perplexity) now shapes how many insurance prospects first encounter agency options — agencies without AI search visibility are losing warm leads before they ever appear in a browser.",
  "Insurance is YMYL content: Google and AI systems apply maximum EEAT scrutiny to insurance queries, making credential visibility and content quality non-negotiable.",
  "Google Business Profile optimization is the fastest single-impact AI search action for local insurance agencies — start there before anything else.",
  "Credential-rich agent bio pages are the most direct way to satisfy the Experience and Expertise dimensions of EEAT that AI systems evaluate.",
  "Educational content structured around conversational questions — not keyword-stuffed service pages — is what AI models actually cite in their responses.",
  "Schema markup (InsuranceAgency, FAQPage, Person, AggregateRating) is the highest-ROI technical investment for AI search visibility.",
  "Review volume, recency, and quality are concrete AI trust signals: prioritize a steady monthly review acquisition strategy over one-time bursts.",
  "Industry citations from state DOI directories, insurance associations, and local press are external authority signals that AI models weight heavily.",
];

export default function AISearchInsuranceBlogPage() {
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
            <span style={{ color: "#FF5500", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>AI Search for Insurance</span>
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
            <span style={{ color: "#444", fontSize: "0.78rem", fontWeight: 500 }}>14 min read</span>
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
            AI Search for Insurance Agencies:{" "}
            <span style={{ color: "#FF5500" }}>How to Get Found</span> in ChatGPT, Perplexity &amp; Google AI
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
            Insurance agencies are losing warm leads to AI search without knowing it. This is the complete framework for building the Experience, Expertise, Authoritativeness, and Trustworthiness signals that get your agency cited — and recommended — by every major AI platform.
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
              AD
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 700, fontSize: "0.9rem", color: "#eee" }}>Abraham Diaz</p>
              <p style={{ margin: 0, fontSize: "0.78rem", color: "#555" }}>Founder &amp; CEO, Echelon Fox</p>
            </div>
            <div style={{ marginLeft: "auto", display: "flex", gap: "24px", alignItems: "center" }}>
              <div style={{ textAlign: "right" }}>
                <p style={{ margin: 0, fontSize: "0.78rem", color: "#555", fontWeight: 500 }}>Published</p>
                <p style={{ margin: 0, fontSize: "0.82rem", color: "#888", fontWeight: 600 }}>June 12, 2025</p>
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
                ["The AI Search Wake-Up Call", "#intro"],
                ["What AI Search Actually Is", "#what-is-ai-search"],
                ["Why Insurance Is Uniquely Affected", "#insurance-unique"],
                ["The EEAT Framework for Insurance Agencies", "#eeat-framework"],
                ["The 7-Step AI Search Optimization Plan", "#seven-steps"],
                ["Schema Markup Quick Reference", "#schema-markup"],
                ["Mistakes Most Agencies Make", "#common-mistakes"],
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
              <span style={{ color: "#FF5500", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>The Wake-Up Call</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 900, letterSpacing: "-0.025em", lineHeight: 1.1, margin: "0 0 24px" }}>
              The AI Search Wake-Up Call
            </h2>
            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: "0 0 20px" }}>
              When a small business owner in your city types &ldquo;best commercial insurance agency near me&rdquo; into ChatGPT, something has fundamentally changed about what happens next. Instead of a list of ten blue links where your agency might appear at position seven, an AI system generates a curated answer — often recommending two or three specific agencies by name, explaining their specialties, and synthesizing review data into a confident recommendation.
            </p>
            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: "0 0 20px" }}>
              If your agency isn&apos;t one of those recommendations, the prospect may never encounter you at all.
            </p>
            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: "0 0 28px" }}>
              This isn&apos;t a future problem. Google AI Overviews are now appearing for the majority of insurance-related searches. ChatGPT Search, Perplexity, and Microsoft Copilot together serve millions of insurance research queries every month. The agencies that get cited in these responses didn&apos;t get there by accident — they built the specific digital infrastructure that AI systems use to evaluate credibility, expertise, and trustworthiness.
            </p>

            {/* Pull quote */}
            <blockquote
              style={{
                borderLeft: "3px solid #FF5500",
                margin: "40px 0",
                padding: "20px 28px",
                background: "#0d0d0d",
              }}
            >
              <p style={{ color: "#ddd", fontSize: "1.1rem", fontStyle: "italic", lineHeight: 1.7, margin: 0, fontWeight: 600 }}>
                &ldquo;The agencies winning AI search aren&apos;t just optimizing for keywords. They&apos;re building verifiable credibility signals that AI models can evaluate — credentials, citations, reviews, and structured data that prove expertise and trustworthiness.&rdquo;
              </p>
            </blockquote>

            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: 0 }}>
              This guide breaks down exactly how AI search evaluates insurance agencies, the EEAT framework that governs those evaluations, and the seven-step optimization strategy that gets your agency into the conversation — and keeps it there.
            </p>
          </section>

          {/* ── Section: What Is AI Search ── */}
          <section id="what-is-ai-search" style={{ marginBottom: "72px", paddingTop: "48px", borderTop: "1px solid #111" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>The New Landscape</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 900, letterSpacing: "-0.025em", lineHeight: 1.1, margin: "0 0 24px" }}>
              What AI Search Actually Is
            </h2>
            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: "0 0 20px" }}>
              AI search refers to search and discovery systems that use large language models to generate synthesized answers — rather than returning a list of links for users to evaluate themselves. There are several distinct platforms your agency needs to understand:
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#1a1a1a", border: "1px solid #1a1a1a", marginBottom: "28px" }}>
              {[
                {
                  platform: "Google AI Overviews",
                  desc: "Appears directly in Google search results above organic rankings for many queries. Synthesizes information from multiple web sources and attributes them. The most impactful AI search surface for insurance agencies because it intercepts existing Google search volume.",
                },
                {
                  platform: "ChatGPT Search",
                  desc: "OpenAI&apos;s web-connected search mode. Used by millions of consumers for research including insurance comparisons, agent recommendations, and coverage questions. Pulls from the live web and cites sources it considers authoritative.",
                },
                {
                  platform: "Perplexity AI",
                  desc: "An AI answer engine with heavy citation culture — it shows users exactly which sources it used, making source selection highly visible. Insurance agencies cited by Perplexity get direct referral traffic. Often used by detail-oriented researchers.",
                },
                {
                  platform: "Microsoft Copilot",
                  desc: "Powered by GPT-4 and integrated into Bing search and Windows. Serves a large professional and enterprise audience — relevant for commercial lines insurance agencies targeting business clients.",
                },
              ].map((item) => (
                <div key={item.platform} style={{ background: "#0a0a0a", padding: "24px 28px", display: "grid", gridTemplateColumns: "200px 1fr", gap: "20px", alignItems: "start" }}>
                  <p style={{ margin: 0, fontWeight: 800, fontSize: "0.9rem", color: "#FF5500", letterSpacing: "0.02em" }}>{item.platform}</p>
                  <p style={{ margin: 0, color: "#777", fontSize: "0.9rem", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: item.desc }} />
                </div>
              ))}
            </div>

            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: "0 0 20px" }}>
              The critical distinction between AI search and traditional search: in traditional search, your agency competes for a ranked list position and the user decides whether to click. In AI search, the AI system makes a recommendation on your behalf — or doesn&apos;t. You either make the cut when the AI assembles its answer, or you are invisible to that prospect entirely.
            </p>
            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: 0 }}>
              This shifts the optimization target from &ldquo;rank high enough for users to click&rdquo; to &ldquo;build enough credibility signals that AI systems select and cite you.&rdquo; Those are related but meaningfully different objectives.
            </p>
          </section>

          {/* ── Section: Why Insurance Is Unique ── */}
          <section id="insurance-unique" style={{ marginBottom: "72px", paddingTop: "48px", borderTop: "1px solid #111" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>High Stakes</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 900, letterSpacing: "-0.025em", lineHeight: 1.1, margin: "0 0 24px" }}>
              Why Insurance Is Uniquely Affected
            </h2>
            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: "0 0 20px" }}>
              Insurance occupies a special position in how AI systems evaluate content quality. Google classifies insurance as YMYL — Your Money or Your Life — content. This category includes financial advice, medical information, legal guidance, and insurance products: topics where bad information can cause serious real-world harm to consumers.
            </p>
            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: "0 0 28px" }}>
              For YMYL content, both Google&apos;s quality rater guidelines and the AI systems trained on web data apply the highest level of EEAT scrutiny. An AI system recommending a specific insurance agency is making an implicit endorsement of a financial professional — it will not recommend an agency it cannot verify as credible, licensed, and trustworthy. This is both the challenge and the opportunity for agencies that commit to building robust EEAT signals.
            </p>

            {/* Stat callout */}
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
                { stat: "YMYL", label: "Classification for all insurance content — Google's highest scrutiny tier" },
                { stat: "4 Layers", label: "Of EEAT evaluation applied to every insurance agency recommendation" },
                { stat: "Local + Broad", label: "Dual AI search exposure: local agency queries and coverage education queries" },
              ].map((item) => (
                <div key={item.stat} style={{ background: "#0a0a0a", padding: "28px 24px", textAlign: "center" }}>
                  <p style={{ margin: "0 0 8px", fontSize: "1.8rem", fontWeight: 900, color: "#FF5500", letterSpacing: "-0.02em" }}>{item.stat}</p>
                  <p style={{ margin: 0, fontSize: "0.82rem", color: "#666", lineHeight: 1.5 }}>{item.label}</p>
                </div>
              ))}
            </div>

            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: "0 0 20px" }}>
              Insurance agencies also benefit from two distinct AI search exposure opportunities that many other local businesses don&apos;t have:
            </p>
            <ul style={{ listStyle: "none", margin: "0 0 20px", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                "Local discovery queries: \"independent insurance agent in [city],\" \"best home insurance agency near me\" — where Google Business Profile and review data dominate AI responses",
                "Educational content queries: \"what does umbrella liability cover,\" \"how much life insurance does a 40-year-old need\" — where your content library can position you as the authoritative source",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: "12px", color: "#888", fontSize: "0.95rem", lineHeight: 1.7 }}>
                  <span style={{ color: "#FF5500", flexShrink: 0, marginTop: "3px" }}>→</span>
                  {item}
                </li>
              ))}
            </ul>
            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: 0 }}>
              A comprehensive AI search strategy addresses both surfaces — the local entity signals that drive discovery, and the content quality signals that drive educational citation.
            </p>
          </section>

          {/* ── Section: EEAT Framework ── */}
          <section id="eeat-framework" style={{ marginBottom: "72px", paddingTop: "48px", borderTop: "1px solid #111" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>The Evaluation Framework</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 900, letterSpacing: "-0.025em", lineHeight: 1.1, margin: "0 0 16px" }}>
              The EEAT Framework for Insurance Agencies
            </h2>
            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: "0 0 40px" }}>
              EEAT — Experience, Expertise, Authoritativeness, Trustworthiness — is Google&apos;s documented framework for evaluating content quality. AI systems use these same dimensions, because they were largely trained on Google-indexed content and share underlying assumptions about what makes a source credible. Here is what each dimension means in concrete terms for insurance agencies.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {eeatPillars.map((pillar) => (
                <div
                  key={pillar.label}
                  style={{
                    background: "#0f0f0f",
                    border: "1px solid #1e1e1e",
                    padding: "36px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-8px",
                      right: "20px",
                      fontSize: "6rem",
                      fontWeight: 900,
                      color: "#141414",
                      lineHeight: 1,
                      userSelect: "none",
                      pointerEvents: "none",
                      letterSpacing: "-0.05em",
                    }}
                  >
                    {pillar.letter}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        background: "rgba(255,85,0,0.1)",
                        border: `1px solid ${pillar.color}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 900,
                        fontSize: "1.1rem",
                        color: pillar.color,
                        flexShrink: 0,
                      }}
                    >
                      {pillar.letter}
                    </div>
                    <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.01em" }}>
                      {pillar.label}
                    </h3>
                  </div>
                  <p style={{ color: "#888", fontSize: "0.92rem", lineHeight: 1.8, margin: "0 0 20px" }}>{pillar.desc}</p>
                  <div>
                    <p style={{ margin: "0 0 10px", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF5500" }}>Key Signals</p>
                    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "7px" }}>
                      {pillar.signals.map((signal) => (
                        <li key={signal} style={{ display: "flex", gap: "10px", color: "#666", fontSize: "0.85rem" }}>
                          <span style={{ color: "#FF5500", flexShrink: 0 }}>→</span>
                          {signal}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section: 7-Step Strategy ── */}
          <section id="seven-steps" style={{ marginBottom: "72px", paddingTop: "48px", borderTop: "1px solid #111" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>The Playbook</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 900, letterSpacing: "-0.025em", lineHeight: 1.1, margin: "0 0 16px" }}>
              The 7-Step AI Search Optimization Framework
            </h2>
            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: "0 0 40px" }}>
              These steps are ordered by impact-to-effort ratio for agencies starting from a typical baseline. Implement them sequentially — each step builds on the foundation of the last.
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

          {/* ── Section: Schema Markup ── */}
          <section id="schema-markup" style={{ marginBottom: "72px", paddingTop: "48px", borderTop: "1px solid #111" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Technical Foundation</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 900, letterSpacing: "-0.025em", lineHeight: 1.1, margin: "0 0 16px" }}>
              Schema Markup Quick Reference
            </h2>
            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: "0 0 32px" }}>
              Schema markup tells AI systems and search engines exactly what your agency is, who works there, what services you offer, where you operate, and how clients rate you — without ambiguity. Here is a practical reference for the schema types every insurance agency website should implement.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: "1px", background: "#1a1a1a", border: "1px solid #1a1a1a", marginBottom: "28px" }}>
              {[
                {
                  type: "InsuranceAgency",
                  where: "Every location page",
                  purpose: "Identifies your business as a licensed insurance agency to AI parsers. Includes NAP data, geo-coordinates, service hours, service areas, and price range.",
                  priority: "Critical",
                },
                {
                  type: "Person",
                  where: "Every agent bio page",
                  purpose: "Establishes individual agents as credentialed professionals. List licenses under hasCredential, include jobTitle, and link to the organization.",
                  priority: "Critical",
                },
                {
                  type: "FAQPage",
                  where: "Educational content pages",
                  purpose: "Enables AI systems and Google to extract Q&A pairs for direct inclusion in AI Overviews and featured snippets. Highest-ROI content schema for educational articles.",
                  priority: "High",
                },
                {
                  type: "BreadcrumbList",
                  where: "All pages",
                  purpose: "Communicates site structure and page hierarchy to AI crawlers. Improves contextual understanding of where content fits within your agency's information architecture.",
                  priority: "High",
                },
                {
                  type: "AggregateRating",
                  where: "Homepage or location pages",
                  purpose: "Provides structured review score data. AI systems use this to compare agency reputations and include rating data in local recommendations.",
                  priority: "Medium",
                },
                {
                  type: "Service",
                  where: "Product/service pages",
                  purpose: "Describes specific coverage lines (auto, home, life, commercial) as distinct service offerings, helping AI understand your agency's specialization.",
                  priority: "Medium",
                },
              ].map((row) => (
                <div key={row.type} style={{ background: "#0a0a0a", padding: "24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px", gap: "8px", flexWrap: "wrap" }}>
                    <p style={{ margin: 0, fontWeight: 800, fontSize: "0.88rem", color: "#FF5500", fontFamily: "monospace" }}>{row.type}</p>
                    <span
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        padding: "3px 8px",
                        background: row.priority === "Critical" ? "rgba(255,85,0,0.15)" : row.priority === "High" ? "rgba(255,85,0,0.08)" : "rgba(255,255,255,0.05)",
                        color: row.priority === "Critical" ? "#FF5500" : row.priority === "High" ? "#FF7733" : "#666",
                        border: `1px solid ${row.priority === "Critical" ? "rgba(255,85,0,0.3)" : row.priority === "High" ? "rgba(255,85,0,0.15)" : "#222"}`,
                      }}
                    >
                      {row.priority}
                    </span>
                  </div>
                  <p style={{ margin: "0 0 6px", fontSize: "0.75rem", color: "#444", fontWeight: 600 }}>Used on: {row.where}</p>
                  <p style={{ margin: 0, color: "#666", fontSize: "0.84rem", lineHeight: 1.65 }}>{row.purpose}</p>
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
                <strong style={{ color: "#eee" }}>Validation:</strong> After implementing schema, use Google&apos;s Rich Results Test (search.google.com/test/rich-results) and Schema Markup Validator (validator.schema.org) to verify correct implementation. Errors in schema markup can actively mislead AI parsers — validate before deploying.
              </p>
            </div>
          </section>

          {/* ── Section: Common Mistakes ── */}
          <section id="common-mistakes" style={{ marginBottom: "72px", paddingTop: "48px", borderTop: "1px solid #111" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>What Not to Do</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 900, letterSpacing: "-0.025em", lineHeight: 1.1, margin: "0 0 16px" }}>
              Mistakes Most Insurance Agencies Make in AI Search
            </h2>
            <p style={{ color: "#999", fontSize: "1rem", lineHeight: 1.85, margin: "0 0 36px" }}>
              These are the patterns we see consistently in agencies that are invisible in AI search — agencies that may have strong offline reputations but have not translated that credibility into the digital signals AI systems can evaluate.
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
              AD
            </div>
            <div>
              <p style={{ margin: "0 0 2px", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF5500" }}>About the Author</p>
              <h3 style={{ margin: "0 0 4px", fontSize: "1.1rem", fontWeight: 900, color: "#fff" }}>Abraham Diaz</h3>
              <p style={{ margin: "0 0 14px", fontSize: "0.8rem", color: "#555", fontWeight: 600 }}>Founder &amp; CEO, Echelon Fox</p>
              <p style={{ margin: 0, color: "#777", fontSize: "0.88rem", lineHeight: 1.75 }}>
                Abraham founded Echelon Fox to build performance marketing programs for service businesses and e-commerce brands that want measurable, compounding growth. He has worked directly with insurance agencies on digital strategy, SEO, and AI search positioning — helping them translate offline expertise into the digital credibility signals that modern search requires. Echelon Fox&apos;s approach to EEAT-driven content and AI search optimization is built on first-hand campaign data, not theory.
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
            <span style={{ color: "#FF5500", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Ready to Dominate AI Search?</span>
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
            <span style={{ color: "#FF5500" }}>AI Search Presence</span>
          </h2>
          <p style={{ color: "#666", fontSize: "1rem", lineHeight: 1.7, margin: "0 0 40px" }}>
            We audit insurance agency digital footprints, identify the specific EEAT gaps suppressing AI visibility, and build the content and technical infrastructure to fix them. Start with a free audit.
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
