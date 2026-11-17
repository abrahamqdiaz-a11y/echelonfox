/**
 * The offer ladder. Names, terms and scopes must match everywhere, so every page
 * reads them from here. Prices are not published: each offer points to the
 * booking step instead (SCOPE_STEP).
 *
 * Every engagement starts with the Diagnostic. After it, a client takes one of two
 * paths: Build, then Run (path A), or the Embedded Growth Team (path B).
 */
export type OfferId = "diagnostic" | "build" | "run" | "embedded-growth-team";

export type Offer = {
  id: OfferId;
  name: string;
  /** Short terms shown beside the booking step. */
  terms: string[];
  summary: string;
  includes: string[];
  excludes: string[];
  duration: string;
  moves: string;
};

/** Shown wherever a price used to appear. */
export const SCOPE_STEP = "Book a call to scope your project";

export const offers: Record<OfferId, Offer> = {
  diagnostic: {
    id: "diagnostic",
    name: "Revenue Leak Diagnostic",
    terms: ["Fixed scope", "Two weeks"],
    summary:
      "We review your enquiries, quotes, order history and CRM. You get a costed, ranked list of where revenue is being lost.",
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
    moves:
      "Your starting baseline. Every leak gets a dollar figure, so you know what fixing it is worth.",
  },
  build: {
    id: "build",
    name: "Build",
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
    moves:
      "The dollar value of the leaks it fixes, measured against the Diagnostic baseline.",
  },
  run: {
    id: "run",
    name: "Run",
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
    moves: "One revenue number, reported weekly against the starting baseline.",
  },
  "embedded-growth-team": {
    id: "embedded-growth-team",
    name: "Embedded Growth Team",
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
