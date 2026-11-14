/**
 * Industry pages, rendered by app/industries/[slug]/page.tsx.
 *
 * To add an industry, add an entry here with content supplied by EchelonFox.
 * It appears in the navigation, the homepage industry row and the sitemap.
 *
 * Rules:
 * - Describe the leaks; do not claim experience in the industry unless a
 *   published case study shows it.
 * - Set `caseSlug` only when a published case study is genuinely from that
 *   industry. Otherwise leave it out and the section is not shown.
 */
export type Industry = {
  slug: string;
  /** Used in navigation and cards. */
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroLead: string;
  /** One line for the homepage card. */
  cardSummary: string;
  leaks: { title: string; body: string }[];
  /** Introduces the Diagnostic measures for this industry. */
  diagnosticIntro: string;
  measures: { title: string; body: string }[];
  build: string[];
  caseSlug?: string;
};

export const industries: Industry[] = [
  {
    slug: "industrial-manufacturers-distributors",
    name: "Industrial manufacturers & distributors",
    metaTitle: "Revenue Operations for Manufacturers & Distributors",
    metaDescription:
      "For US manufacturers and distributors with 20 to 100 staff. We measure what slow quotes, unfollowed quotes and lapsed accounts cost in dollars, then fix them.",
    heroTitle:
      "For manufacturers and distributors, the lost revenue is in the quotes.",
    heroLead:
      "For US manufacturers and distributors with 20 to 100 staff, usually family-owned, with a sales team under 20. We measure what slow quotes, unfollowed quotes and lapsed accounts cost you in dollars, fix the biggest leaks and keep them fixed.",
    cardSummary:
      "Slow quotes, quotes never followed up, and accounts that stopped reordering.",
    leaks: [
      {
        title: "Slow or missing quote responses.",
        body: "A request for a quote arrives by email, phone or web form. It waits in an inbox while the buyer gets prices elsewhere. Some requests are never quoted at all.",
      },
      {
        title: "Quotes sent and never followed up.",
        body: "The quote goes out and nobody checks back. The buyer was comparing, had a question or simply forgot. The order goes to whoever called.",
      },
      {
        title: "Accounts that stopped reordering.",
        body: "A regular customer orders less, then stops. Nobody notices until the year-end numbers. By then they are buying from someone else.",
      },
    ],
    diagnosticIntro:
      "Over two weeks we review your quote requests, quotes, order history and CRM. Each measure comes back as a dollar figure, ranked, so you know which leak to fix first.",
    measures: [
      {
        title: "Quote response time",
        body: "How long requests wait before a quote goes out, and the dollar value of the ones that waited too long.",
      },
      {
        title: "Quote win rate",
        body: "How many quotes become orders, and the dollar value of the ones that did not.",
      },
      {
        title: "Requests never quoted",
        body: "Requests that never got a price, counted and valued in dollars.",
      },
      {
        title: "Lapsed accounts",
        body: "Customers whose ordering has stopped or dropped, and the revenue they used to bring in.",
      },
    ],
    build: [
      "One place for every quote request, from email, phone and web forms, with an owner and a response target.",
      "Quote follow-up steps in the CRM, with reminders and follow-up emails your team reviews before they go out.",
      "An early warning for accounts whose ordering slows, with a win-back campaign the account owner approves.",
      "A weekly report on quote response time, win rate and lapsed-account revenue against the Diagnostic baseline.",
      "Training for your sales team, and 30 days of fixes.",
    ],
  },
];

export const getIndustry = (slug: string) =>
  industries.find((i) => i.slug === slug);
