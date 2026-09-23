/**
 * The four capability groups. They sit beneath the strategy: the diagnosis
 * decides which of them a company needs, and in what order. Old single-channel
 * service URLs 301 to the group that now covers them (see next.config.ts).
 */
export type Capability = {
  slug: "commercial-diagnosis" | "customer-acquisition" | "sales-process-crm" | "ai-automation";
  name: string;
  short: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  /** Signs that this is where the constraint is. */
  signs: string[];
  /** What the work can include, grouped. */
  includes: { heading: string; items: string[] }[];
  /** How this group connects to the rest of the commercial system. */
  connects: string;
  /** Case study slugs that used this capability. */
  cases: string[];
};

export const capabilities: Capability[] = [
  {
    slug: "commercial-diagnosis",
    name: "Commercial diagnosis and positioning",
    short: "Diagnosis and positioning",
    summary:
      "Understand how the business makes money, find the constraint that matters most, and make sure the company describes itself in a way its best customers recognise.",
    metaTitle: "Commercial Diagnosis and Positioning",
    metaDescription:
      "Sales, customer, and operations analysis, segmentation, and positioning for established companies. Find the constraint holding growth back and decide what to fix first.",
    signs: [
      "Revenue is growing unevenly, or not at all, and nobody can say exactly why.",
      "Marketing spend and staffing are set by habit rather than by where sales come from.",
      "Different people in the company describe what you do in different ways.",
      "The team is busy, but in the wrong places: effort and scheduling don't match when customers actually buy.",
      "You're about to invest in a new website, agency, or CRM and want to be sure it solves the right problem.",
    ],
    includes: [
      {
        heading: "Diagnosis",
        items: [
          "Analysis of the sales, POS, and CRM data you already have",
          "Customer segmentation, including your highest-value buyer groups",
          "Timing patterns: which days, weeks, and seasons carry the business",
          "A review of the path from first contact to first purchase to repeat business",
          "A review of operations: staffing, scheduling, and the handoffs between sales, marketing, and delivery",
          "A review of current spend, tools, and vendors",
          "A written read on where growth is stuck and what to fix first",
        ],
      },
      {
        heading: "Positioning",
        items: [
          "Positioning and messaging built around the customers who matter most",
          "The offer, and how it's described across the website, sales conversations, and campaigns",
          "Brand identity, design, and copy where the current version gets in the way",
        ],
      },
      {
        heading: "Measurement",
        items: [
          "Analytics set up so decisions rest on real numbers (GA4 and your own sales data)",
          "Reporting tied to leads, sales, and pipeline rather than impressions",
        ],
      },
    ],
    connects:
      "Everything else follows from this. The diagnosis decides whether the next job is acquisition, follow-up, automation, or something outside marketing altogether, such as pricing, staffing, or the calendar.",
    cases: ["beauty-supply-retailer-maryland"],
  },
  {
    slug: "customer-acquisition",
    name: "Customer acquisition and conversion",
    short: "Acquisition and conversion",
    summary:
      "Get in front of the right buyers and turn their interest into enquiries and sales, through the channels the diagnosis shows are worth the money.",
    metaTitle: "Customer Acquisition and Conversion",
    metaDescription:
      "Websites, search, local visibility, Google Shopping, and paid media, chosen after the commercial problem is diagnosed and built around the buyers who matter most.",
    signs: [
      "The business is hard to find in search, on maps, or in Google Shopping.",
      "Visitors arrive but don't turn into enquiries, quote requests, or orders.",
      "Ad spend is running without a clear picture of who it's for.",
      "The website is dated, slow, or hard to use on a phone.",
    ],
    includes: [
      {
        heading: "Website and pages",
        items: [
          "Website design and build, mobile-first, around what your customers are looking for — done in weeks, not months, with local SEO basics included",
          "Landing pages for a specific buyer group or offer",
          "Conversion work on forms, quote requests, and booking",
          "Launch and handoff: you own everything, handed over working with simple instructions — no hostage hosting",
        ],
      },
      {
        heading: "Search and local visibility",
        items: [
          "Technical SEO, on-page work, and content that earns search visibility",
          "Local search: Google Business Profile, local schema markup, and location structure",
          "Google Merchant Center connected for Shopping visibility",
        ],
      },
      {
        heading: "Paid media and social",
        items: [
          "Campaigns on Google, Meta, TikTok, and YouTube, built per buyer group",
          "Promotions timed to when customers actually buy",
          "Social media strategy, content, and scheduling where it fits the plan",
          "Ad spend paid directly to the platforms, so you keep ownership of the accounts and see exactly what was spent",
        ],
      },
    ],
    connects:
      "Acquisition only pays off if what happens next is ready. It's planned together with the sales process and follow-up, so the enquiries it produces are answered and the customers it wins come back.",
    cases: ["beauty-supply-retailer-maryland", "independent-insurance-agency", "premium-pet-care"],
  },
  {
    slug: "sales-process-crm",
    name: "Sales process, CRM, and follow-up",
    short: "Sales process and CRM",
    summary:
      "Make sure the interest you've already paid for gets followed up, and that the customers you already have come back.",
    metaTitle: "Sales Process, CRM, and Follow-Up",
    metaDescription:
      "CRM setup, pipeline design, and lifecycle email and SMS — welcome, win-back, replenishment, and loyalty — so follow-up doesn't depend on memory.",
    signs: [
      "Enquiries land in several inboxes and some are never answered.",
      "Nobody can say which good customers haven't bought in a while.",
      "The CRM exists, but the team works around it.",
      "Repeat purchases happen by luck rather than by design.",
    ],
    includes: [
      {
        heading: "Pipeline and CRM",
        items: [
          "CRM setup and clean-up on the platform you use: HubSpot, Klaviyo, ActiveCampaign, Mailchimp, and others",
          "Pipeline stages, routing, and clear ownership of every enquiry",
          "Enquiry and quote forms that capture what the first call needs",
        ],
      },
      {
        heading: "Lifecycle email and SMS",
        items: [
          "Automations for welcome, win-back, replenishment, and loyalty",
          "Segmentation by purchase history, value, and buyer group",
          "A campaign calendar planned around real buying patterns",
        ],
      },
      {
        heading: "Process",
        items: [
          "Follow-up rules and handoffs between marketing, sales, and delivery",
          "Reporting on pipeline and repeat purchase that the team actually uses",
        ],
      },
    ],
    connects:
      "This is where acquisition spend is either kept or wasted. It's also where practical automation usually earns its place, once the process it supports is clear.",
    cases: ["beauty-supply-retailer-maryland", "independent-insurance-agency", "premium-pet-care"],
  },
  {
    slug: "ai-automation",
    name: "Practical AI and automation",
    short: "AI and automation",
    summary:
      "Use AI and automation where it removes a real bottleneck — lead response, scheduling, follow-up, and admin — built inside the tools you already use, with a person to hand over to.",
    metaTitle: "Practical AI and Automation",
    metaDescription:
      "Practical AI automation for established companies: lead response, appointment scheduling, CRM workflows, follow-up, and internal admin — built inside the tools you already use.",
    signs: [
      "New enquiries wait until the next working morning for a first reply.",
      "Staff spend hours on scheduling, data entry, and chasing missing information.",
      "Follow-up on quiet enquiries and old records never gets done.",
      "The process is clear, but there aren't enough hands to run it consistently.",
    ],
    includes: [],
    connects:
      "Automation comes last in the diagnosis for a reason: it makes a clear process faster and a messy one worse. It's recommended only where it improves the system.",
    cases: [],
  },
];

export const getCapability = (slug: string) => capabilities.find((c) => c.slug === slug);
