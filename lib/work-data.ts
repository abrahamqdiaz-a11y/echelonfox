/**
 * Case studies.
 *
 * Ground rules for anything added here:
 * - Clients are described by category until written permission to name them is on file.
 *   When permission exists, add `clientName` and a link to the live site.
 * - Every case follows the same shape: what they asked for → the broader issue found →
 *   what was built → outcome. `outcome` is optional and only filled in where evidence
 *   exists. Do not add performance numbers unless they come from the client's own
 *   analytics or accounts and the client has agreed to them being published.
 * - Wrap key findings in ==double equals== to emphasise them on the page.
 * - A case without a clear broader issue stays `published: false` until one is
 *   documented. Don't write one to fill the gap.
 */
export type CaseStudy = {
  slug: string;
  published: boolean;
  /** Anonymised descriptor, e.g. "Beauty supply retailer, Maryland". */
  descriptor: string;
  /** One-line headline: the request versus the real constraint. */
  title: string;
  context: string;
  strategy: string;
  askedFor: string;
  found: string[];
  built: string[];
  /** Only where evidence exists. */
  outcome?: string;
  takeaway?: string;
  /** The revenue problem found, in one line. A reframing of `found`, not a new fact. */
  revenueProblem: string;
  /** Short card copy: what they asked for and what was found. Facts only. */
  revenueSummary: string;
  /** Why an unpublished case is on hold. */
  holdReason?: string;
};

export const cases: CaseStudy[] = [
  {
    slug: "beauty-supply-retailer-maryland",
    published: true,
    descriptor: "Beauty supply retailer, Maryland",
    title:
      "They asked for ads. The constraint was knowing their customers and their calendar.",
    context:
      "A beauty supply retailer in Maryland wanted to invest in customer acquisition.",
    strategy:
      "Use the existing sales data to understand valuable customer groups and buying patterns, then align acquisition, repeat-purchase activity and staffing recommendations with that picture.",
    askedFor: "Google Ads.",
    found: [
      "The store treated every customer the same, but its sales data showed ==a small group of buyers driving a large share of revenue==.",
      "Buying was ==concentrated on predictable days==, and ==Sundays sold far less than staffing assumed==.",
      "The store was barely visible in search, and its products weren't in Google Shopping.",
    ],
    built: [
      "Sales data analysis from the store's POS.",
      "Distinct buyer groups, including highest-value buyers and salon professionals, each with its own campaigns.",
      "Promotions timed for the day before peak buying days.",
      "Google Merchant Center connected for Shopping visibility.",
      "Local search fixes.",
      "Email and SMS automations: win-back, replenishment, and loyalty.",
      "A recommendation to staff Sundays lighter, based on actual sales patterns.",
    ],
    takeaway:
      "The request was “run ads.” The opportunity was putting marketing spend and payroll where sales actually happen.",
    revenueProblem:
      "Marketing spend and staffing weren’t matched to where sales actually happened.",
    revenueSummary:
      "They asked for Google Ads. A small group of buyers drove a large share of revenue, and buying clustered on predictable days.",
  },
  {
    slug: "independent-insurance-agency",
    published: true,
    descriptor: "Independent insurance agency",
    title:
      "They needed a new website. The gap was how a prospect asks for a quote.",
    context:
      "An independent insurance agency needed a website that served prospects arriving through search and referral.",
    strategy:
      "Structure the website around the coverage lines the agency sells and make requesting a quote a clear next step, supported by local search foundations.",
    askedFor:
      "A new website to replace one that was dated and hard to use on a phone.",
    found: [
      "Prospects who found the agency through search or referral ==had no clear way to request a quote==.",
      "Enquiries came in by phone during office hours, or not at all.",
    ],
    built: [
      "A mobile-first site rebuilt around the coverage lines the agency actually sells, each with its own service page.",
      "A short quote request flow that captures what the agent needs before the first call.",
      "Google Business Profile and local schema markup set up.",
      "A site structure the agency can add locations to later.",
    ],
    outcome:
      "Live, with quote requests arriving through the site outside office hours instead of only by phone during them.",
    revenueProblem: "Prospects had no clear way to ask for a quote.",
    revenueSummary:
      "They asked for a new website. Enquiries came by phone during office hours, or not at all.",
  },
  {
    slug: "premium-pet-care",
    published: true,
    descriptor: "Premium pet care company",
    title:
      "They needed a website. The leak was enquiries scattered across social inboxes.",
    context:
      "A premium pet care business relied on word of mouth and social media, with enquiries spread across direct messages.",
    strategy:
      "Create one clear place to understand the services, find booking information and submit an enquiry, with a structure relevant to the areas served.",
    askedFor: "A website that explained the services and made booking obvious.",
    found: [
      "The business relied on word of mouth and social media, with no site that explained services clearly or showed how to book.",
      "==Enquiries arrived as DMs that were easy to lose==.",
    ],
    built: [
      "A site structured around each service and the areas served.",
      "Booking and pricing information written in plain language.",
      "A single enquiry form on every page, so requests land in one place.",
    ],
    outcome:
      "Live, with service and booking information structured for local search and enquiries collected in one place rather than across social inboxes.",
    revenueProblem: "Enquiries were getting lost in social inboxes.",
    revenueSummary:
      "They asked for a website. Requests arrived as DMs that were easy to lose.",
  },
  {
    slug: "beauty-barber-supply-wholesaler",
    published: false,
    descriptor: "Beauty and barber supply wholesaler",
    title: "E-commerce SEO for a wholesale supplier to stylists and barbers.",
    context:
      "A beauty and barber supply wholesaler needed better organic visibility for commercial categories.",
    strategy:
      "Address documented crawl and category-page issues; the broader commercial case remains unpublished.",
    askedFor: "E-commerce SEO.",
    found: [
      "Category pages weren't ranking for the commercial terms buyers actually search, and technical issues were holding back the pages with the best chance of competing.",
    ],
    built: [
      "Fixed crawl and indexation issues.",
      "Restructured and rewrote category pages around commercial-intent search terms.",
      "A content plan targeting the questions buyers ask before ordering in volume.",
    ],
    outcome:
      "Ongoing programme. Performance is reported to the client from their own Search Console and analytics data.",
    revenueProblem: "",
    revenueSummary: "",
    holdReason:
      "The existing write-up describes the SEO work itself but no broader commercial issue beyond it.",
  },
];

export const publishedCases = cases.filter((c) => c.published);
export const getCase = (slug: string) =>
  publishedCases.find((c) => c.slug === slug);
