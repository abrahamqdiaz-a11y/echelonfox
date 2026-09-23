import type { Metadata } from "next";
import PageShell from "@/components/site/PageShell";
import FinalCta from "@/components/site/FinalCta";
import { ArticleHeader, Faq, NextLinks, NumberedList, Toc } from "@/components/site/Article";

/*
 * Merged in Sep 2026 from two guides that covered overlapping ground:
 * "Local SEO for Insurance Agents" (2025-07-15) and "AI Search for Insurance
 * Agencies" (2025-06-12). Both old URLs 301 here (see next.config.ts).
 */

const URL = "https://echelonfox.com/insights/search-visibility-for-insurance-agencies";
const TITLE = "Search Visibility for Insurance Agencies: Local SEO and AI Search in One Plan";
const DESCRIPTION =
  "How independent insurance agencies get found in the map pack, organic results, and AI answers from ChatGPT, Perplexity, and Google AI Overviews: one ten-step plan covering GBP, citations, reviews, agent pages, schema, and content.";

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | EchelonFox` },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: "Search Visibility for Insurance Agencies — EchelonFox",
    description: DESCRIPTION,
    url: URL,
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Search Visibility for Insurance Agencies — EchelonFox" }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

const plan = [
  {
    "title": "Google Business Profile — Your Most Powerful Local Asset",
    "body": "Your Google Business Profile is the single most important local SEO lever an insurance agent controls. It drives map pack placement, populates Google AI Overviews for local queries, and provides the structured data Google uses to recommend agencies in conversational search. Start here before anything else. Claim and verify your listing if you haven't. Set your primary category to \"Insurance Agency\" and add every relevant secondary category that reflects your specialties — \"Life Insurance Agency,\" \"Auto Insurance Agency,\" \"Home Insurance Agency.\" Complete every field: business description (750 characters, use them), service areas, hours, phone number, and website URL. Upload a minimum of 20 photos — exterior, interior, team headshots, and branded imagery. Publish Google Posts at least twice a month; consistent posting signals business activity to Google's ranking algorithm. In the Products/Services section, list each coverage line you offer as a separate service entry with its own description. Respond to every Q&A submitted to your profile. An actively maintained profile with a steady flow of reviews is consistently better placed than an abandoned one — often regardless of how big the office is or what it spends on advertising."
  },
  {
    "title": "NAP Consistency — The Citation Foundation",
    "body": "NAP stands for Name, Address, Phone number — the three data points that define your business identity across the web. Every mention of your agency across directories, association listings, social profiles, and review platforms must use the exact same NAP format. A single inconsistency (\"Suite 100\" vs \"Ste. 100\" vs no suite number at all) creates conflicting signals that suppress local rankings. Before building any new citations, run a citation audit using a tool like BrightLocal or Moz Local to identify every existing listing and the exact format used on each. Establish a single canonical NAP format — decide on one and document it — then systematically correct every variation across the web. This cleanup work often produces faster ranking improvements than adding new citations, because Google can finally reconcile all existing mentions into a confident entity match. For agencies with multiple locations, each location needs its own distinct NAP. Never list a different location's phone number on another location's listings — each location is a separate local entity."
  },
  {
    "title": "Citations and Authoritative Mentions",
    "body": "Citations — mentions of your agency's NAP on other websites — are a foundational local ranking signal. For insurance agents specifically, citations from high-authority, industry-relevant sources carry disproportionate weight. Prioritize these tiers in order. Tier 1 (highest authority): Your state Department of Insurance agency directory. This is the single most authoritative citation a licensed insurance agent can have — it's a government source verifying your credentials. Most state DOI websites have free agent search directories; ensure your listing is current. Tier 2 (industry associations): IIABA (Independent Insurance Agents & Brokers of America), NAIFA (National Association of Insurance and Financial Advisors), PIA (Professional Insurance Agents), and state-level chapters of each. Member directory listings from these organizations send powerful authority signals. Tier 3 (major data aggregators): Data Axle, Foursquare, and Localeze feed citation data to hundreds of downstream directories. Getting accurate listings here propagates your NAP across the web automatically. Tier 4 (general local): Google Business Profile (already covered), Yelp, Facebook Business Page, Apple Maps, Bing Places, BBB, and your Chamber of Commerce. After these tiers, diminishing returns set in quickly — 50 authoritative citations outperform 500 low-quality directory submissions. Beyond directories, pursue editorial mentions by contributing to local news coverage (business openings, community events, charity partnerships), guest authoring educational pieces for local business publications, and participating in insurance industry media."
  },
  {
    "title": "Review Strategy — Volume, Velocity, and Response",
    "body": "Reviews are among the most concrete trust signals available for local ranking, and the most direct proxy for reputation an AI system can evaluate. As a rule of thumb, a deep body of strong reviews tends to beat a small number of perfect ones — an agent with 80 reviews at 4.7 stars is usually in a better position than one with 12 at 5.0, all else being equal. Volume and velocity matter more than perfection. Build a systematic review acquisition process around two trigger points: policy completion and annual renewal. At each moment, send a personal SMS or email to the client with a direct link to your Google review page — not a third-party form, not a multi-step redirect. The friction between intent and action is where reviews are lost. Aim for 2–4 new reviews per month as a steady state. A burst of 30 reviews collected during a one-week campaign followed by months of inactivity creates a recency gap that Google weights negatively. Respond to every review within 48 hours — positive and negative. Your response to a 1-star review is visible to every future prospect evaluating your agency. Handle it with professionalism, acknowledge the client's concern, and offer resolution offline. This response behavior is itself a trust signal. Diversify your review footprint beyond Google: Facebook, Trustpilot, and Yelp all feed into the web-wide entity reputation that AI systems evaluate when generating insurance recommendations."
  },
  {
    "title": "Credential-Rich Agent Bio Pages",
    "body": "Every licensed agent at your agency needs a dedicated bio page that establishes them as a credentialed expert. Include their full name, state licensing number, years of experience, carrier appointments, and professional designations — CPCU (Chartered Property Casualty Underwriter), CLU (Chartered Life Underwriter), ChFC (Chartered Financial Consultant), CIC (Certified Insurance Counselor), and others carry significant EEAT weight in AI evaluation. Headshot photography, professional background, specialties, and client-facing philosophy all contribute. AI models processing insurance queries specifically look for evidence that humans with real credentials and professional accountability stand behind the advice — not anonymous content farms. Link agent pages to your state's Department of Insurance verification portal to create a verifiable trust chain."
  },
  {
    "title": "On-Page Local SEO — Service Pages That Actually Convert",
    "body": "Your website's service pages are the bridge between local search traffic and a quote request. Most insurance agency websites get this wrong in the same predictable way: generic service descriptions that could belong to any agency, keyword-stuffed titles with no genuine information value, and no local context whatsoever. Build each service page around a specific coverage line and a specific local context. A home insurance page for an agent in Tampa, Florida should address Florida's specific homeowner insurance market — the Citizens Insurance situation, sinkhole coverage questions, wind mitigation inspections. That specificity is what separates content that ranks from content that doesn't. Each service page should include: a clear H1 with your primary service and location (\"Home Insurance in Tampa, FL\"), an explanatory intro paragraph that answers the core question a prospect arrives with, coverage details specific to your offered products, local regulatory or market context where relevant, a prominent FAQ section using H3 headers (structured for AI extraction), your agency's specific differentiators, and a strong CTA with a phone number, contact form, or quote link. Page length for service pages should be 800–1,500 words. Longer educational content belongs on your blog or insights hub — service pages should be thorough but conversion-focused."
  },
  {
    "title": "Location Pages for Multi-Market Coverage",
    "body": "If you're a single-office agent serving clients in multiple surrounding cities or counties, dedicated location landing pages can significantly expand your local search footprint beyond your immediate area. Each location page must be genuinely unique — not a template with only the city name swapped. Unique content elements for each location page: local market context (housing market, specific risk factors, common coverage questions for that community), any local employer or industry connections relevant to coverage needs, community involvement or clients in that area, local regulatory notes, and embedded Google Maps showing the service area relationship to your office. Include your InsuranceAgency schema on each location page with the service area specified. If you have zero connection to a city — no clients, no community ties — don't create a location page for it. Thin location pages created purely for keyword targeting are flagged by Google's quality systems and can suppress your overall domain authority. Build pages for markets where you have real reasons to serve clients."
  },
  {
    "title": "Schema Markup for Insurance Agents",
    "body": "Schema markup is structured data embedded in your website's HTML that communicates directly with search engines and AI systems — removing ambiguity about who you are, what you offer, where you operate, and how clients rate you. For insurance agents, four schema types are non-negotiable. InsuranceAgency schema (a subtype of LocalBusiness) belongs on every location page. Include: name, address, telephone, geo-coordinates, openingHoursSpecification, areaServed, and priceRange. Person schema belongs on every agent bio page. Include: name, jobTitle, worksFor, hasCredential (list each license number with its issuing authority), sameAs (link to your LinkedIn, state DOI profile, and association directory listings). FAQPage schema belongs on every service page and educational article with a FAQ section. This schema enables Google and AI systems to extract your Q&A pairs for direct inclusion in AI Overviews and featured snippets. AggregateRating schema belongs on your homepage or location pages if your site displays review data. Use Google's Rich Results Test to validate every schema implementation before publishing. Errors in schema markup actively mislead AI parsers — an invalid schema block is worse than no schema at all."
  },
  {
    "title": "Educational Content That Search Engines and AI Models Cite",
    "body": "The insurance questions people search locally are almost entirely educational: \"Does my homeowners insurance cover my fence?\" \"What is the minimum auto insurance required in Texas?\" \"How much life insurance does a 35-year-old with kids need?\" Agents who publish thorough, accurate answers to these questions consistently are building a compounding SEO asset. Educational content drives three distinct benefits: direct organic traffic from informational queries, AI search citations when your content is chosen as a source for an AI-generated answer, and topical authority signals that improve rankings across your entire domain. Structure each article around a specific question your ideal prospect would actually ask. Use H2 and H3 headers that mirror the language of conversational search queries. Include state-specific context wherever relevant. Add a FAQ section at the end with five to eight additional related questions and concise answers — each FAQ answer is a candidate for AI Overview extraction. Publish minimum one article per month to maintain crawl frequency signals. Two per month sustains meaningful compounding. Your content library does not need to be enormous — ten thorough, locally-relevant articles outperform a hundred thin, generic posts. Build a content library organized around coverage-type pillars: auto, home, life, business, health, umbrella. Under each pillar, create comprehensive guides targeting specific questions."
  },
  {
    "title": "Optimize for Conversational Insurance Queries",
    "body": "AI search is fundamentally conversational. People ask questions in natural language, not keyword strings. Shift your content optimization from keyword-centric thinking to question-centric thinking. Map every piece of content to a specific question your ideal client would ask at each stage of their insurance buying journey — awareness (\"do I need life insurance?\"), consideration (\"how much life insurance do I need?\"), decision (\"how to find a good life insurance agent\"). Create dedicated FAQ sections on every major service page. Use your blog to answer long-tail conversational queries in depth. When possible, provide direct one-sentence answers at the top of each section before expanding with detail — this mirrors how AI systems extract and present information in their responses. Pages structured this way are significantly more likely to be quoted directly in AI-generated answers."
  }
];
const mistakes = [
  {
    "title": "Inconsistent NAP Across Directories",
    "desc": "The most common and most damaging local SEO error for insurance agents. A business name spelled differently on Yelp than on your website, or an old phone number still appearing on a legacy directory listing, creates conflicting entity signals that suppress local rankings across all platforms. Audit and standardize before building new citations."
  },
  {
    "title": "An Abandoned Google Business Profile",
    "desc": "Creating a GBP at agency launch and never returning is an extremely common mistake. No new photos, no Google Posts, reviews accumulating without responses, and service information going stale. Google treats GBP engagement signals — post frequency, review response rate, photo freshness — as indirect quality signals. An abandoned profile signals an inactive or low-quality business."
  },
  {
    "title": "Generic Service Pages With No Local Context",
    "desc": "A home insurance page that reads identically to any national carrier's description — with no mention of your city, your specific market knowledge, or any local context — fails both users and local search algorithms. Google's local ranking systems favor pages that demonstrably serve a specific geographic market, not pages that could belong to any agency anywhere."
  },
  {
    "title": "Chasing Citation Volume Over Citation Quality",
    "desc": "Submitting to 200 low-quality directories does less for local rankings than 20 high-authority citations from state regulators, insurance associations, and credible local business sources. Citation quality is weighted by domain authority and topical relevance. A single listing in your state's DOI directory carries more weight than a hundred generic local business listings."
  },
  {
    "title": "No Review Acquisition System",
    "desc": "Hoping clients will leave reviews without a proactive request is not a strategy. The agencies that dominate local map packs in every market have systematic, repeatable review acquisition processes — triggered at policy completion and renewal, delivered via direct message with a single-click link. Reviews don't accumulate passively for insurance agents; they require active cultivation."
  },
  {
    "title": "Missing or Invalid Schema Markup",
    "desc": "In the agency sites we audit, schema markup is usually either missing entirely or copied from a template with placeholder data still in it. Schema is one of the highest-return technical SEO tasks available to a local insurance agent — it tells Google and AI systems exactly what your agency is, who works there, and how clients rate you. Missing it means competing with both hands tied."
  },
  {
    "title": "Publishing Generic \"Insurance 101\" Content",
    "desc": "Content that could have been written by anyone — vague definitions of deductibles and premiums, general advice to \"talk to an agent\" — fails to establish the expertise AI systems require. Every piece of content should be specific enough that a layperson would recognize the author as a professional, not a content marketing writer working from a brief."
  },
  {
    "title": "No Individual Agent Pages",
    "desc": "Insurance is a relationship-driven business. Prospects choosing an agency in 2025 want to verify they are working with a real, credentialed, accountable professional — not an anonymous entity. Agencies that present themselves only as a brand with no identifiable individuals behind it fail the experience and expertise dimensions of EEAT in ways that directly suppress AI search visibility."
  }
];
const takeaways = [
  "AI search (Google AI Overviews, ChatGPT, Perplexity) now shapes how many insurance prospects first encounter agency options — agencies without AI search visibility are losing warm leads before they ever appear in a browser.",
  "Insurance is YMYL content: Google and AI systems apply maximum EEAT scrutiny to insurance queries, making credential visibility and content quality non-negotiable.",
  "Google Business Profile is the single highest-impact local SEO lever for insurance agents — optimize it fully and manage it actively, not just at setup.",
  "NAP consistency across every directory and citation source is foundational. Audit and fix inconsistencies before building new citations.",
  "Review velocity matters more than a one-time review burst. Aim for 2–4 new Google reviews per month as a sustainable baseline.",
  "Citation authority beats citation volume — state DOI directories, insurance association member listings, and major data aggregators outweigh hundreds of generic directory submissions.",
  "Credential-rich agent bio pages are the most direct way to satisfy the Experience and Expertise dimensions of EEAT that AI systems evaluate.",
  "Service pages need local context to rank locally. Generic coverage descriptions without market-specific relevance compete with national carriers and lose.",
  "Location pages for multi-market coverage only work if each page contains genuinely unique, locally relevant content — not swapped city names on a template.",
  "Schema markup (InsuranceAgency, Person, FAQPage, AggregateRating) removes ambiguity for search engines and AI systems — implement and validate it.",
  "Educational content structured around conversational questions — not keyword-stuffed service pages — is what AI models actually cite in their responses.",
  "Educational content targeting local insurance questions builds compounding topical authority and positions your agency as the cited source in AI-generated answers."
];
const faq = [
  {
    "q": "How long does local SEO take for an insurance agent?",
    "a": "Google Business Profile improvements can produce local map pack visibility within 4–8 weeks of thorough optimization. Citation building and review accumulation create compounding gains over 3–6 months. Competitive markets take longer. Local SEO is a compounding asset — the work done in month one pays off increasingly in months six, twelve, and beyond."
  },
  {
    "q": "What is the most important local SEO factor for insurance agents?",
    "a": "Google Business Profile is the single highest-impact starting point for local insurance agent SEO. A fully optimized, actively managed GBP with strong review velocity directly drives map pack placement and local AI search citations. After GBP, NAP citation consistency and review volume are the next most impactful levers."
  },
  {
    "q": "Do insurance agents need separate location pages for each city they serve?",
    "a": "If you have physical offices in multiple cities, yes — each location needs its own page with unique content and LocalBusiness schema. If you serve surrounding cities from a single office, city-specific landing pages can drive local visibility for those markets, but each page must contain genuinely unique, location-relevant content — not the same text with the city name swapped in."
  },
  {
    "q": "How many Google reviews does an insurance agent need to rank locally?",
    "a": "There is no threshold Google publishes, and it varies by market. The practical approach is to look at what the agencies currently ranking in your map pack have, and aim to match or beat it — in metro markets that is often well into three figures, in smaller markets far less. Steady accumulation matters more than a target number: a regular trickle of new reviews reads as an active business in a way that a one-off burst followed by silence does not."
  },
  {
    "q": "What local citations matter most for insurance agents?",
    "a": "The highest-authority citations for insurance agents come from: your state's Department of Insurance agency directory, IIABA and NAIFA member directories, Better Business Bureau, Chamber of Commerce, and the major data aggregators (Data Axle, Foursquare, Localeze). Beyond those, Yelp, Facebook Business, Apple Maps, and Bing Places round out the essential citation profile."
  },
  {
    "q": "Should insurance agents blog for local SEO?",
    "a": "Yes — educational blog content targeting local and coverage-specific queries is one of the most durable local SEO investments an insurance agent can make. The best-performing content answers specific questions prospects ask at each stage of the buying journey: awareness (do I need renters insurance?), consideration (how much liability coverage does a homeowner need?), and decision (how to choose a local insurance agent). Content structured this way drives organic traffic and AI search citations."
  },
  {
    "q": "Does AI search show insurance agency recommendations?",
    "a": "Yes. Google AI Overviews, ChatGPT Search, and Perplexity regularly generate responses to insurance-related queries that include specific agency recommendations, coverage explanations, and company comparisons. Local queries like \"best independent insurance agent near me\" often trigger AI-generated answers that pull from Google Business Profile data, review signals, and authoritative local content."
  },
  {
    "q": "What is EEAT and why does it matter for insurance agencies?",
    "a": "EEAT stands for Experience, Expertise, Authoritativeness, and Trustworthiness — Google's framework for evaluating content quality. Insurance falls into the YMYL (Your Money or Your Life) category, meaning Google and AI systems apply their highest EEAT scrutiny to insurance content. Agencies that demonstrate licensed expertise, real client experience, authoritative industry citations, and transparent business practices are significantly more likely to be recommended by AI systems."
  },
  {
    "q": "How long does it take for an insurance agency to appear in AI search results?",
    "a": "Timeline depends on your current digital footprint. Agencies with strong Google Business Profiles and consistent reviews can see local AI search improvements within 4–8 weeks of optimization. Building the content infrastructure and earning industry citations takes 3–6 months before you consistently appear in non-local AI-generated answers. Competitive markets take longer."
  },
  {
    "q": "What schema markup should insurance agencies use?",
    "a": "Insurance agencies should implement LocalBusiness schema (or the more specific InsuranceAgency type), FAQPage schema for educational content pages, BreadcrumbList schema for navigation, and Review/AggregateRating schema. For individual agent pages, use Person schema with credentials listed under hasCredential. Every location should have its own LocalBusiness schema with full NAP data."
  },
  {
    "q": "Do online reviews affect AI search recommendations for insurance agencies?",
    "a": "Yes — significantly. Review signals (quantity, recency, rating, and response rate) on Google, Facebook, and platforms like Trustpilot are factored into local AI search. Agencies with 50+ verified Google reviews at 4.5+ stars consistently outperform competitors in AI-generated local recommendations. The quality of responses to negative reviews also signals trustworthiness to AI evaluation systems."
  },
  {
    "q": "How should insurance agencies structure content for AI search?",
    "a": "AI models prefer content that directly answers specific questions, uses clear hierarchical structure (H1→H2→H3), includes data and concrete examples, and covers a topic comprehensively. For insurance agencies, the highest-performing content formats are educational guides explaining coverage types, comparison content (term vs whole life, etc.), location-specific pages, and detailed FAQ sections with schema markup."
  }
];
const factors = [
  {
    "factor": "Relevance",
    "desc": "How closely your business profile and website match what the searcher is looking for. Controlled by: GBP category selections, service listings, website content, and keyword signals across your online presence."
  },
  {
    "factor": "Distance",
    "desc": "How far your business is from the searcher's location (or the location specified in the query). Partially outside your control — but service area settings and location page content extend your proximity footprint."
  },
  {
    "factor": "Prominence",
    "desc": "How well-known and reputable your business is, as determined by Google's systems. Driven by: review volume and rating, citation count and quality, backlink authority, and overall web presence depth."
  }
];
const queryTypes = [
  {
    "type": "Intent-to-Hire Queries",
    "examples": "\"insurance agent near me,\" \"independent insurance agent [city],\" \"home insurance agency [zip]\"",
    "strategy": "GBP optimization, review velocity, and NAP citation consistency drive map pack placement for these high-commercial-intent queries."
  },
  {
    "type": "Educational Queries",
    "examples": "\"how much home insurance do I need in [state],\" \"what does renters insurance cover,\" \"auto insurance requirements [state]\"",
    "strategy": "On-site educational content targeting these informational queries builds topical authority and positions your agency as the trusted expert before the prospect is ready to buy."
  }
];
const auditSteps = [
  {
    "title": "Map the current map pack",
    "body": "Search your primary local keywords (\"{coverage type} insurance agent {your city}\") from a device located in your market area. Note the three businesses in the map pack: their review count, review rating, GBP completeness (photos, posts, Q&A), and how long they've been established. This sets your competitive baseline."
  },
  {
    "title": "Analyze their citation profiles",
    "body": "Use a free tool like Moz Local or BrightLocal's citation tracker to see where your top competitors are listed. Note which high-authority sources (state DOI, insurance associations, BBB) they have that you don't. These are your priority citation gaps."
  },
  {
    "title": "Review their on-site content",
    "body": "Visit the websites of the top two or three local competitors. Note their service page structure, content depth, presence of location-specific content, and whether they have a blog or educational content hub. Look for obvious gaps — thin service pages, no FAQ sections, no schema markup — that you can exploit with better content."
  }
];
const localFacts = [
  {
    "stat": "8",
    "label": "Pillars in the framework below — work them in order rather than picking favourites"
  },
  {
    "stat": "4–8 wks",
    "label": "Typical window before GBP work shows movement, in our experience — competitive markets take longer"
  },
  {
    "stat": "2–4",
    "label": "New Google reviews per month is a more useful target than a one-off review push"
  },
  {
    "stat": "3",
    "label": "Places you can appear on a local query: the map pack, organic results, and AI answers"
  }
];
const platforms = [
  {
    "platform": "Google AI Overviews",
    "desc": "Appears directly in Google search results above organic rankings for many queries. Synthesizes information from multiple web sources and attributes them. The most impactful AI search surface for insurance agencies because it intercepts existing Google search volume."
  },
  {
    "platform": "ChatGPT Search",
    "desc": "OpenAI's web-connected search mode. Used by millions of consumers for research including insurance comparisons, agent recommendations, and coverage questions. Pulls from the live web and cites sources it considers authoritative."
  },
  {
    "platform": "Perplexity AI",
    "desc": "An AI answer engine with heavy citation culture — it shows users exactly which sources it used, making source selection highly visible. Insurance agencies cited by Perplexity get direct referral traffic. Often used by detail-oriented researchers."
  },
  {
    "platform": "Microsoft Copilot",
    "desc": "Powered by GPT-4 and integrated into Bing search and Windows. Serves a large professional and enterprise audience — relevant for commercial lines insurance agencies targeting business clients."
  }
];
const aiFacts = [
  {
    "stat": "YMYL",
    "label": "Classification for all insurance content — Google's highest scrutiny tier"
  },
  {
    "stat": "4 Layers",
    "label": "Of EEAT evaluation applied to every insurance agency recommendation"
  },
  {
    "stat": "Local + Broad",
    "label": "Dual AI search exposure: local agency queries and coverage education queries"
  }
];
const exposure = [
  "Local discovery queries: \"independent insurance agent in [city],\" \"best home insurance agency near me\" — where Google Business Profile and review data dominate AI responses",
  "Educational content queries: \"what does umbrella liability cover,\" \"how much life insurance does a 40-year-old need\" — where your content library can position you as the authoritative source"
];
const schemaTypes = [
  {
    "type": "InsuranceAgency",
    "where": "Every location page",
    "purpose": "Identifies your business as a licensed insurance agency to AI parsers. Includes NAP data, geo-coordinates, service hours, service areas, and price range.",
    "priority": "Critical"
  },
  {
    "type": "Person",
    "where": "Every agent bio page",
    "purpose": "Establishes individual agents as credentialed professionals. List licenses under hasCredential, include jobTitle, and link to the organization.",
    "priority": "Critical"
  },
  {
    "type": "FAQPage",
    "where": "Educational content pages",
    "purpose": "Enables AI systems and Google to extract Q&A pairs for direct inclusion in AI Overviews and featured snippets. Highest-ROI content schema for educational articles.",
    "priority": "High"
  },
  {
    "type": "BreadcrumbList",
    "where": "All pages",
    "purpose": "Communicates site structure and page hierarchy to AI crawlers. Improves contextual understanding of where content fits within your agency's information architecture.",
    "priority": "High"
  },
  {
    "type": "AggregateRating",
    "where": "Homepage or location pages",
    "purpose": "Provides structured review score data. AI systems use this to compare agency reputations and include rating data in local recommendations.",
    "priority": "Medium"
  },
  {
    "type": "Service",
    "where": "Product/service pages",
    "purpose": "Describes specific coverage lines (auto, home, life, commercial) as distinct service offerings, helping AI understand your agency's specialization.",
    "priority": "Medium"
  }
];
const eeatPillars = [
  {
    "letter": "E",
    "label": "Experience",
    "desc": "Demonstrated first-hand experience with insurance products and client outcomes. This includes published case studies showing how coverage protected real clients, testimonials with specific outcome details, documented claims advocacy stories, and agent bios with years of hands-on practice. AI systems look for evidence that advice comes from people who have actually navigated insurance complexity — not content written by generalists who researched the topic for 30 minutes.",
    "signals": [
      "Client case studies with specific outcomes",
      "Before/after claims advocacy stories",
      "Agent tenure and policy volume data",
      "Community involvement and local presence",
      "Years in business and legacy documentation"
    ]
  },
  {
    "letter": "E",
    "label": "Expertise",
    "desc": "Professional credentials and subject matter depth that only a trained insurance professional possesses. Licensing is the floor — the EEAT ceiling includes advanced designations, carrier specializations, and demonstrated mastery of complex coverage scenarios. Content that reflects genuine expertise answers questions with nuance: explaining coverage exclusions, state-specific regulatory context, underwriting considerations, and risk management strategy. Generalist content that could have been written by anyone signals low expertise.",
    "signals": [
      "State insurance license numbers and verification links",
      "Professional designations (CPCU, CLU, CIC, ChFC)",
      "Carrier appointment disclosures",
      "Specialty coverage certifications",
      "Continuing education and association memberships"
    ]
  },
  {
    "letter": "A",
    "label": "Authoritativeness",
    "desc": "The degree to which your agency is recognized as a trustworthy source by other authoritative entities — regulators, associations, media, and industry bodies. Authoritativeness is not self-declared; it is conferred by external recognition. An agency mentioned in the local newspaper, listed in the state DOI directory, and quoted in industry publications carries far more AI authority than an agency with a well-optimized website but zero external recognition. Building authority requires deliberate outreach and community positioning over time.",
    "signals": [
      "State DOI agency directory listings",
      "Insurance association memberships (IIABA, NAIFA, PIA)",
      "Local media coverage and press mentions",
      "Industry publication features or contributions",
      "BBB accreditation and rating"
    ]
  },
  {
    "letter": "T",
    "label": "Trustworthiness",
    "desc": "The technical and behavioral signals that confirm your agency operates with integrity and transparency. Trustworthiness is evaluated at the domain level (HTTPS, privacy policy, terms of service, clear contact information) and the entity level (consistent NAP data, review response behavior, transparent pricing, disclosed licensing). For insurance agencies specifically, displaying license numbers, providing accurate coverage information without misleading omissions, and making it easy for prospects to verify credentials are fundamental trust-building actions.",
    "signals": [
      "HTTPS security and core technical standards",
      "Consistent NAP across all directories",
      "Active review response strategy",
      "Clear licensing and credentials disclosure",
      "Privacy policy and contact transparency"
    ]
  }
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: TITLE,
  description: DESCRIPTION,
  image: "https://echelonfox.com/opengraph-image",
  datePublished: "2025-06-12",
  dateModified: "2026-09-23",
  author: { "@type": "Organization", name: "EchelonFox", url: "https://echelonfox.com" },
  publisher: {
    "@type": "Organization",
    name: "EchelonFox",
    url: "https://echelonfox.com",
    logo: { "@type": "ImageObject", url: "https://echelonfox.com/eflogo.logo.png" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  keywords: [
    "local SEO for insurance agents",
    "AI search for insurance agencies",
    "insurance agent Google Business Profile",
    "insurance agency citations",
    "EEAT insurance",
    "insurance agency schema markup",
    "ChatGPT insurance agency recommendations",
  ],
  articleSection: "Insurance Agency Marketing",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

function Facts({ items }: { items: { stat: string; label: string }[] }) {
  return (
    <div className="fact-row" style={{ margin: "2rem 0" }}>
      {items.map((f) => (
        <div key={f.stat}>
          <p className="fact">{f.stat}</p>
          <p>{f.label}</p>
        </div>
      ))}
    </div>
  );
}

export default function SearchVisibilityPage() {
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article>
        <ArticleHeader
          crumb="Search Visibility for Insurance Agencies"
          category="Insurance Agency Marketing"
          readTime="24 min read"
          title="Search Visibility for Insurance Agencies: Local SEO and AI Search in One Plan"
          standfirst="When a prospect in your city looks for an insurance agent, you're competing in the map pack, organic results, and AI-generated answers at the same time. This guide combines the local SEO framework and the EEAT approach AI systems use into one plan built specifically for independent agencies."
          date="Updated September 23, 2026"
          dateTime="2026-09-23"
        />

        <div className="section section--card" style={{ paddingTop: "clamp(3rem, 2rem + 3vw, 4.5rem)" }}>
          <div className="container container--narrow article-body">
            <Toc
              items={[
                ["Why Search Is the Highest-ROI Channel for Independent Agents", "#intro"],
                ["How Local Search Works", "#how-local-search-works"],
                ["What AI Search Is, and Why Insurance Is Different", "#ai-search"],
                ["The EEAT Framework for Insurance Agencies", "#eeat-framework"],
                ["The 10-Step Plan", "#plan"],
                ["Auditing Your Local Market", "#competitive-audit"],
                ["Schema Markup Quick Reference", "#schema-markup"],
                ["Common Mistakes", "#common-mistakes"],
                ["Key Takeaways", "#takeaways"],
                ["FAQ", "#faq"],
              ]}
            />

            <section id="intro" className="article-section">
              <p className="eyebrow">The Opportunity</p>
              <h2>Why Search Is the Highest-ROI Channel for Independent Agents</h2>
              <p>
                Independent insurance agents sell on trust and relationships — and search is the first place that trust either gets established or handed to a competitor. When someone moves to a new city, gets their first home, or decides their current agent isn&apos;t cutting it, their search starts with a local query: &ldquo;independent insurance agent near me,&rdquo; &ldquo;home insurance agent in [city],&rdquo; &ldquo;best auto insurance agent [zip code].&rdquo;
              </p>
              <p>
                Those queries produce three places where agents can appear: the Google map pack (the three local business listings that appear above organic results), organic web results, and increasingly, AI-generated answer panels that synthesize a recommendation from GBP data, review signals, and content. Showing up credibly in all three is the goal.
              </p>
              <p>
                The third is changing fastest. When a small business owner types &ldquo;best commercial insurance agency near me&rdquo; into ChatGPT, an AI system generates a curated answer — often recommending two or three specific agencies by name, explaining their specialties, and synthesizing review data into a confident recommendation. If your agency isn&apos;t one of those recommendations, the prospect may never encounter you at all.
              </p>
              <p>
                These clicks tend to be worth more than most other traffic an agency buys, because the prospect chose to search rather than being interrupted — they&apos;re actively looking for what you offer. How much more is worth measuring in your own accounts rather than assuming from an industry average. What is structurally true: unlike paid ads, visibility you build keeps sending visitors without a cost-per-click attached to each one.
              </p>
              <blockquote className="callout">
                <p className="serif" style={{ fontSize: "1.45rem", lineHeight: 1.35, margin: 0 }}>
                  &ldquo;Local SEO is the only marketing channel where a single agent with one office can consistently outrank national carriers in their own backyard — if they do the work.&rdquo;
                </p>
              </blockquote>
              <p>
                Most independent agents are leaving this on the table. Their Google Business Profiles are incomplete or abandoned. Their websites have no local content. Their citation profiles are inconsistent, and nothing on the site proves who the licensed people behind it are. The same work fixes both problems: the signals that win local rankings are largely the signals AI systems use to decide who to recommend.
              </p>
            </section>

            <section id="how-local-search-works" className="article-section">
              <p className="eyebrow">The Mechanics</p>
              <h2>How Local Search Works for Insurance Agents</h2>
              <p>
                Google&apos;s local algorithm uses three primary ranking factors. Understanding them is prerequisite to prioritizing the right work:
              </p>
              <dl className="def-list">
                {factors.map((f) => (
                  <div key={f.factor}>
                    <dt>{f.factor}</dt>
                    <dd>{f.desc}</dd>
                  </div>
                ))}
              </dl>
              <p>
                The landscape operates across two distinct query types, each requiring a different approach:
              </p>
              <dl className="def-list">
                {queryTypes.map((q) => (
                  <div key={q.type}>
                    <dt>{q.type}</dt>
                    <dd>
                      <em>e.g. {q.examples}</em>
                      <br />
                      {q.strategy}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            <section id="ai-search" className="article-section">
              <p className="eyebrow">The New Landscape</p>
              <h2>What AI Search Is, and Why Insurance Is Different</h2>
              <p>
                AI search refers to search and discovery systems that use large language models to generate synthesized answers — rather than returning a list of links for users to evaluate themselves. There are several distinct platforms your agency needs to understand:
              </p>
              <dl className="def-list">
                {platforms.map((p) => (
                  <div key={p.platform}>
                    <dt>{p.platform}</dt>
                    <dd>{p.desc}</dd>
                  </div>
                ))}
              </dl>
              <p>
                The critical distinction: in traditional search, your agency competes for a ranked list position and the user decides whether to click. In AI search, the AI system makes a recommendation on your behalf — or doesn&apos;t. That shifts the target from &ldquo;rank high enough for users to click&rdquo; to &ldquo;build enough credibility signals that AI systems select and cite you.&rdquo;
              </p>
              <p>
                Insurance raises the bar further. Google classifies insurance as YMYL — Your Money or Your Life — content: topics where bad information can cause serious real-world harm. For YMYL content, both Google&apos;s quality rater guidelines and the AI systems trained on web data apply the highest level of EEAT scrutiny. An AI system recommending a specific agency is making an implicit endorsement of a financial professional, so it will not recommend an agency it cannot verify as credible, licensed, and trustworthy.
              </p>
              <Facts items={aiFacts} />
              <p>Insurance agencies also benefit from two distinct exposure opportunities that many other local businesses don&apos;t have:</p>
              <ul>
                {exposure.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </section>

            <section id="eeat-framework" className="article-section">
              <p className="eyebrow">The Evaluation Framework</p>
              <h2>The EEAT Framework for Insurance Agencies</h2>
              <p>
                EEAT — Experience, Expertise, Authoritativeness, Trustworthiness — is Google&apos;s documented framework for evaluating content quality. AI systems use these same dimensions, because they were largely trained on Google-indexed content and share underlying assumptions about what makes a source credible. Here is what each dimension means in concrete terms for insurance agencies.
              </p>
              {eeatPillars.map((pillar) => (
                <div key={pillar.label} style={{ borderTop: "1px solid var(--ink)", padding: "1.5rem 0 0.5rem", marginTop: "1.5rem" }}>
                  <h3 style={{ marginTop: 0 }}>
                    <span className="label" style={{ marginRight: "0.75rem" }} aria-hidden="true">
                      {pillar.letter}
                    </span>
                    {pillar.label}
                  </h3>
                  <p className="muted">{pillar.desc}</p>
                  <p className="label" style={{ marginBottom: "0.5rem" }}>
                    Key signals
                  </p>
                  <ul className="check-list small" style={{ paddingLeft: 0, listStyle: "none" }}>
                    {pillar.signals.map((signal) => (
                      <li key={signal}>{signal}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section id="plan" className="article-section">
              <p className="eyebrow">The Plan</p>
              <h2>The 10-Step Plan for Local and AI Search</h2>
              <p>
                These steps are ordered by impact-to-effort ratio for agencies starting from a typical baseline. Work through them in order — each builds on the foundation of the last, and each one counts for both map-pack rankings and AI citations.
              </p>
              <NumberedList items={plan} />
              <Facts items={localFacts.map((f) => (f.stat === "8" ? { stat: "10", label: "Steps in the plan above — work them in order rather than picking favourites" } : f))} />
            </section>

            <section id="competitive-audit" className="article-section">
              <p className="eyebrow">Know Your Competition</p>
              <h2>Auditing Your Local Market</h2>
              <p>
                Before investing, audit who is currently winning in your market and why. This tells you what level of effort is required to compete — and where the fastest gaps exist to close. Run the audit in three steps:
              </p>
              <NumberedList items={auditSteps} />
              <p className="callout small">
                Then run the same check in AI search: ask ChatGPT, Perplexity, and Google for the best agency in your city for each coverage line you sell, and note which agencies are named and which sources are cited.
              </p>
            </section>

            <section id="schema-markup" className="article-section">
              <p className="eyebrow">Technical Foundation</p>
              <h2>Schema Markup Quick Reference</h2>
              <p>
                Schema markup tells search engines and AI systems exactly what your agency is, who works there, what services you offer, where you operate, and how clients rate you — without ambiguity. Here is a practical reference for the schema types every insurance agency website should implement.
              </p>
              <div className="table-scroll" tabIndex={0} role="region" aria-label="Schema types reference (scrolls horizontally)">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Schema type</th>
                      <th scope="col">Used on</th>
                      <th scope="col">Purpose</th>
                      <th scope="col">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schemaTypes.map((row) => (
                      <tr key={row.type}>
                        <th scope="row" style={{ fontFamily: "var(--font-mono)", fontWeight: 400, fontSize: "0.85rem" }}>
                          {row.type}
                        </th>
                        <td>{row.where}</td>
                        <td className="muted">{row.purpose}</td>
                        <td>{row.priority}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="callout small">
                <strong style={{ fontWeight: 500 }}>Validation:</strong> After implementing schema, use Google&apos;s Rich Results Test (search.google.com/test/rich-results) and Schema Markup Validator (validator.schema.org) to verify correct implementation. Errors in schema markup can actively mislead AI parsers — validate before deploying.
              </p>
            </section>

            <section id="common-mistakes" className="article-section">
              <p className="eyebrow">What Not to Do</p>
              <h2>Common Mistakes That Cost Agencies Visibility</h2>
              <p>
                These patterns appear in nearly every insurance agency search audit — agencies that may have strong offline reputations but haven&apos;t translated that credibility into the signals search engines and AI systems can evaluate.
              </p>
              <NumberedList items={mistakes.map((m) => ({ title: m.title, body: m.desc }))} />
            </section>

            <section id="takeaways" className="article-section">
              <p className="eyebrow">Key Takeaways</p>
              <h2>Key Takeaways</h2>
              <ol>
                {takeaways.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ol>
            </section>

            <section id="faq" className="article-section">
              <p className="eyebrow">Common Questions</p>
              <h2>Frequently Asked Questions</h2>
              <Faq items={faq} />
            </section>

            <NextLinks
              items={[
                { href: "/services/customer-acquisition", label: "Customer acquisition and conversion", desc: "Where the profile, service pages, and location pages in this guide get built." },
                { href: "/work/independent-insurance-agency", label: "Case study: independent insurance agency", desc: "A website rebuild that turned out to be about how prospects ask for a quote." },
                { href: "/services/commercial-diagnosis", label: "Commercial diagnosis", desc: "When visibility isn't the real constraint, this is where we find out what is." },
              ]}
            />
          </div>
        </div>
      </article>

      <FinalCta
        eyebrow="Where do you appear today?"
        title="Find out what's keeping your agency out of the results."
        body="Tell us about your agency and your market. We'll look at your profile, citations, pages, and where you appear in AI answers, and tell you what to fix first."
      />
    </PageShell>
  );
}
