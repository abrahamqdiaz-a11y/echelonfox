/**
 * The offer ladder. Names, prices and terms are public and must match everywhere,
 * so every page reads them from here. Change a price here and nowhere else.
 *
 * Every engagement starts with the Diagnostic. After it, a client takes one of two
 * paths: Build, then Run (path A), or the Embedded Growth Team (path B).
 */
export type OfferId = "diagnostic" | "build" | "run" | "embedded-growth-team";

export type Offer = {
  id: OfferId;
  name: string;
  /** Display price, e.g. "From $2,000". */
  price: string;
  /** Starting price in USD, for structured data. */
  priceValue: number;
  /** Set for monthly offers. */
  monthly?: boolean;
  /** Short terms shown beside the price. */
  terms: string[];
  summary: string;
  /** A condition attached to the price. */
  note?: string;
  includes: string[];
  excludes: string[];
  duration: string;
  cost: string;
  moves: string;
};

export const offers: Record<OfferId, Offer> = {
  diagnostic: {
    id: "diagnostic",
    name: "Revenue Leak Diagnostic",
    price: "From $2,000",
    priceValue: 2000,
    terms: ["Fixed fee", "Two weeks"],
    summary:
      "We review your enquiries, quotes, order history and CRM. You get a costed, ranked list of where revenue is being lost.",
    note: "The fee is credited to a Build signed within 30 days.",
    includes: [
      "How enquiries and quote requests arrive, who picks them up and how fast.",
      "Quotes sent, and what happened to each one afterwards.",
      "Order history, to find customers who have slowed down or stopped ordering.",
      "Your CRM, or wherever the pipeline lives today.",
      "How marketing spend is tracked against revenue.",
      "A costed, ranked list of leaks, each with a dollar figure.",
      "A walkthrough of the findings and a recommended next step.",
    ],
    excludes: [
      "Changes to your systems. The Diagnostic measures; the Build fixes.",
      "New software or data clean-up.",
    ],
    duration: "Two weeks.",
    cost: "From $2,000, fixed. The fee is credited to a Build signed within 30 days.",
    moves:
      "Your starting baseline. Every leak gets a dollar figure, so you know what fixing it is worth.",
  },
  build: {
    id: "build",
    name: "Build",
    price: "From $6,000",
    priceValue: 6000,
    terms: ["Fixed scope", "Six to eight weeks"],
    summary:
      "We fix the top one or two leaks: the workflow, the CRM setup, the follow-up and the reporting. Includes training and 30 days of fixes.",
    includes: [
      "The workflow for the top one or two leaks, from first contact to follow-up.",
      "CRM setup for that workflow: stages, owners and reminders.",
      "Follow-up and nurture emails, and win-back campaigns for lapsed customers where that is a leak.",
      "Tracking of which sources produce revenue.",
      "Reporting against the baseline from the Diagnostic.",
      "Training for the people who will use it.",
      "30 days of fixes after handover.",
    ],
    excludes: [
      "New software licences.",
      "Data clean-up beyond an agreed record count.",
      "Custom applications.",
    ],
    duration: "Six to eight weeks, fixed scope.",
    cost: "From $6,000.",
    moves:
      "The dollar value of the leaks it fixes, measured against the Diagnostic baseline.",
  },
  run: {
    id: "run",
    name: "Run",
    price: "From $1,000 a month",
    priceValue: 1000,
    monthly: true,
    terms: ["Three-month minimum", "Then monthly"],
    summary:
      "We operate what we built, make a fixed number of changes each month, and report one revenue number every week against your starting baseline.",
    includes: [
      "Day-to-day operation of the workflow, CRM and follow-up we built.",
      "A fixed number of changes each month, agreed up front.",
      "Checks for enquiries, quotes and accounts that slip through.",
      "One revenue number, reported every week against the starting baseline.",
      "A monthly review of what changed and what to change next.",
    ],
    excludes: [
      "New workflows.",
      "New integrations.",
      "Running advertising or SEO.",
    ],
    duration: "Three-month minimum, then monthly.",
    cost: "From $1,000 a month.",
    moves: "One revenue number, reported weekly against the starting baseline.",
  },
  "embedded-growth-team": {
    id: "embedded-growth-team",
    name: "Embedded Growth Team",
    price: "From $4,200 a month",
    priceValue: 4200,
    monthly: true,
    terms: ["Six-month minimum"],
    summary:
      "A part-time head of growth plus our technical team, working inside your business. We own the plan, the CRM and automation, the reporting, and the management of any outside marketing vendors.",
    includes: [
      "A part-time head of growth who owns the plan.",
      "A weekly pipeline review with your sales lead.",
      "Our technical team for the CRM, automation and reporting.",
      "Management of any outside marketing vendors.",
      "One revenue number, reported every week.",
    ],
    excludes: ["Ad spend.", "Vendor fees.", "Creative production."],
    duration: "Six-month minimum.",
    cost: "From $4,200 a month.",
    moves:
      "One revenue number, reported weekly, and the pipeline that produces it.",
  },
};

export const offerList: Offer[] = [
  offers.diagnostic,
  offers.build,
  offers.run,
  offers["embedded-growth-team"],
];

export const PRIMARY_CTA = {
  label: "Book a Revenue Leak Diagnostic",
  href: "/contact",
} as const;
