import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import FinalCta from "@/components/site/FinalCta";
import Arrow from "@/components/site/Arrow";

/*
 * Every price, inclusion, and term on this page is a business commitment carried
 * over from the previous pricing page. Reframe freely; change the numbers and
 * terms only when the offer itself changes.
 */

const TITLE = "Pricing";
const DESCRIPTION =
  "Flat-rate monthly plans from $1,500/mo. Every engagement starts with a diagnosis of where growth is stuck. Weekly sprints, live reporting, and 60 days' notice to cancel. Ad spend billed separately.";

export const metadata: Metadata = {
  title: { absolute: "Pricing — EchelonFox" },
  description: DESCRIPTION,
  alternates: { canonical: "https://echelonfox.com/pricing" },
  openGraph: {
    title: "Pricing — EchelonFox",
    description: "Flat-rate monthly plans. Diagnosis first, then weekly sprints, live reporting, and 60 days' notice to cancel.",
    url: "https://echelonfox.com/pricing",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${TITLE} — EchelonFox` }],
  },
};

const start = [
  {
    when: "Week 1",
    name: "Diagnose",
    title: "Deep-dive kickoff",
    desc: "We review your business goals, sales data, current marketing, analytics, competitive landscape, and the channels you've tried — and identify what's working, what's wasted, and where the constraint is.",
  },
  {
    when: "Week 2",
    name: "Design",
    title: "Roadmap delivery",
    desc: "You get a clear, prioritized plan: what to fix first, which actions, in which order, and what each is worth. No 40-page strategy deck — a working document we execute against starting week three.",
  },
  {
    when: "Week 3+",
    name: "Build & improve",
    title: "Sprint one kicks off",
    desc: "Defined actions, defined outputs, shipped weekly, with a monthly strategy review of what's working, what's being cut, and what the next sprint prioritizes.",
  },
];

const tiers = [
  {
    name: "Starter",
    tagline: "One priority, done properly.",
    price: "$1,500",
    description:
      "For businesses that need to fix one part of the system properly before adding more. One primary channel, weekly output, and a plan you can see progress against.",
    teamNote: null as string | null,
    includes: [
      "1 primary channel (your choice)",
      "Weekly sprint delivery",
      "Live reporting dashboard",
      "Monthly strategy review",
      "Direct Slack or email access to your strategy lead",
    ],
    cta: "Start with Starter",
  },
  {
    name: "Growth",
    tagline: "The parts that matter, working together.",
    price: "$3,500",
    description:
      "For businesses with steady demand that need several parts of the system working at once — search, ads, and follow-up feeding each other rather than running in isolation.",
    teamNote:
      "Your strategy lead stays your point of contact and runs the strategy. Where a sprint needs a specialist — an editor, a designer, a developer — we bring in a vetted freelancer and stay accountable for the output.",
    includes: [
      "Up to 3 channels",
      "Weekly sprint delivery",
      "Live reporting dashboard",
      "Monthly strategy review",
      "Direct Slack or email access",
      "Quarterly competitive review",
    ],
    cta: "Start with Growth",
  },
  {
    name: "Fractional",
    tagline: "Commercial leadership without the hire.",
    price: "$6,500",
    description:
      "For companies that want every active channel covered plus someone senior accountable for the growth number — at a fraction of the cost of building the function in-house.",
    teamNote:
      "The fractional equivalent of a marketing lead: strategy, prioritisation, and reporting from a senior strategy lead, with specialist help brought in per sprint as the work requires.",
    includes: [
      "All active channels",
      "Weekly sprint delivery",
      "Live reporting dashboard",
      "Weekly strategy sync (30 min)",
      "Direct Slack or email access",
      "Monthly competitive review",
      "Board-level reporting on request",
    ],
    cta: "Enquire About Fractional",
  },
];

const everyPlan = [
  {
    title: "One point of contact",
    desc: "The same strategy lead runs your account start to finish and knows your market, your numbers, and your goals. No handoffs to someone new each quarter.",
  },
  {
    title: "Weekly sprint delivery",
    desc: "Every week has defined actions and defined outputs. Work ships every week, not once a quarter.",
  },
  {
    title: "Live reporting dashboard",
    desc: "Reporting tied to leads, sales, and pipeline rather than impressions — available whenever you want to look, not just at review time.",
  },
  {
    title: "Monthly strategy review",
    desc: "A structured 60-minute review of what's working, what's being cut, and what the next sprint prioritizes.",
  },
  {
    title: "Direct access",
    desc: "You talk to the people doing the work. No account-manager buffer, no ticketing system.",
  },
  {
    title: "60 days' notice to cancel",
    desc: "Month to month with a 60-day notice period — no annual contract and no auto-renewal lock-in, but the notice window is real and worth knowing before you start.",
  },
];

const terms = [
  ["Fee", "Flat monthly subscription — same fee every month, no change orders, no surprise invoices."],
  ["Billing", "Billed monthly. Prices shown are starting points for each plan."],
  ["Commitment", "No annual contract — month to month with 60 days' notice."],
  ["Ad spend", "Separate from all fees on this page, paid directly to the ad platforms."],
];

const fixedScope = [
  {
    name: "Website project",
    price: "From $1,000",
    detail: "Flat-rate design and build. One price, agreed up front, before work starts. Local SEO basics included.",
    href: "/services/customer-acquisition",
  },
  {
    name: "AI Opportunity Audit",
    price: "$750–$1,500",
    detail: "Flat fee, about a week, credited toward a build if you go ahead.",
    href: "/services/ai-automation#pricing",
  },
  {
    name: "AI agent setup",
    price: "From $1,500",
    detail: "Per agent, one-time, typically 2–4 weeks.",
    href: "/services/ai-automation#pricing",
  },
  {
    name: "AI agent management",
    price: "From $500/mo",
    detail: "Single Agent $500/mo · Multi-Agent $1,200/mo · Embedded from $2,500/mo. Platform usage billed separately at cost.",
    href: "/services/ai-automation#pricing",
  },
];

const addOns = [
  {
    group: "Diagnosis and positioning",
    items: [
      { label: "Brand & Creative", note: "Ad creative, landing pages, copy" },
      { label: "Analytics & CRO", note: "GA4, dashboards, conversion rate work" },
    ],
  },
  {
    group: "Acquisition and conversion",
    items: [
      { label: "Website & Landing Pages", note: "Design, build, and ongoing page work" },
      { label: "SEO & Content", note: "Technical, on-page, content production" },
      { label: "Paid Media", note: "Meta, Google, TikTok, YouTube — ad spend separate" },
      { label: "Social Media", note: "Strategy, content, scheduling, community" },
    ],
  },
  {
    group: "Sales process and CRM",
    items: [{ label: "Email & CRM", note: "Klaviyo, HubSpot, lifecycle flows" }],
  },
  {
    group: "AI and automation",
    items: [{ label: "AI & Automation", note: "Lead response, scheduling, CRM workflows" }],
  },
];

export default function PricingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Pricing"
        title="Diagnosis first. Then a plan sized to the work."
        lead="Every engagement starts by finding the constraint. The plan sets how much can be built at once: one priority, several parts working together, or senior leadership across all of it. Fees are flat and monthly; advertising spend is separate and paid directly to the ad platforms."
      />

      {/* How an engagement starts */}
      <section className="section section--card" aria-labelledby="start-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">How every plan starts</p>
            <h2 id="start-title" className="h2">
              The first two weeks are the diagnosis.
            </h2>
            <p className="lead muted">
              Before anything is built or bought, we learn how the business makes money. Every engagement starts
              the same way.
            </p>
          </div>
          <ol className="path path--3">
            {start.map((s, i) => (
              <li key={s.title} className={`path-step${i === 0 ? " path-step--active" : ""}`}>
                <span className="path-step__num">
                  {String(i + 1).padStart(2, "0")} · {s.when}
                </span>
                <h3 className="path-step__name">{s.name}</h3>
                <p className="path-step__sub">{s.title}</p>
                <p className="small muted" style={{ margin: 0 }}>
                  {s.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Plans */}
      <section className="section" aria-labelledby="plans-title" id="plans">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Monthly plans</p>
            <h2 id="plans-title" className="h2">
              Three plans, sized by how much can move at once.
            </h2>
          </div>

          <div className="plans">
            {tiers.map((tier) => (
              <article key={tier.name} className="plan" aria-labelledby={`plan-${tier.name}`}>
                <div>
                  <h3 id={`plan-${tier.name}`} className="h3" style={{ fontSize: "1.9rem" }}>
                    {tier.name}
                  </h3>
                  <p className="muted small" style={{ margin: "0.3rem 0 0" }}>
                    {tier.tagline}
                  </p>
                </div>
                <div>
                  <p className="label" style={{ marginBottom: "0.5rem" }}>
                    Starting at
                  </p>
                  <p className="plan__price" style={{ margin: 0 }}>
                    {tier.price}
                    <span>/mo</span>
                  </p>
                  <p className="plan__terms" style={{ marginTop: "0.75rem" }}>
                    Billed monthly · 60 days&apos; notice to cancel · advertising spend billed separately by the
                    ad platforms
                  </p>
                </div>
                <p className="small" style={{ margin: 0 }}>
                  {tier.description}
                </p>
                {tier.teamNote && <p className="plan__note muted">{tier.teamNote}</p>}
                <ul className="check-list small">
                  {tier.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link href="/contact" className="btn btn--ghost btn--block">
                  {tier.cta}
                  <Arrow />
                </Link>
              </article>
            ))}
          </div>

          <dl className="grid-4" style={{ marginTop: "2rem" }}>
            {terms.map(([k, v]) => (
              <div key={k}>
                <dt className="label">{k}</dt>
                <dd className="small" style={{ margin: "0.5rem 0 0" }}>
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Every plan includes */}
      <section className="section section--card" aria-labelledby="includes-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Every plan includes</p>
            <h2 id="includes-title" className="h2">
              The same way of working, whatever the size.
            </h2>
          </div>
          <div className="grid-3">
            {everyPlan.map((item) => (
              <div key={item.title}>
                <h3 className="cell-title" style={{ marginTop: 0 }}>
                  {item.title}
                </h3>
                <p className="small muted" style={{ margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channels and scope */}
      <section className="section" aria-labelledby="scope-title">
        <div className="container split">
          <div className="stack">
            <p className="eyebrow">What a channel can be</p>
            <h2 id="scope-title" className="h2">
              Channels are chosen by the diagnosis.
            </h2>
            <p className="body muted">
              Starter runs on one primary channel and Growth on up to three. Any of the channels here can be the
              one you start with, and additional channels are quoted against the scope you need — volume of
              output, not a flat surcharge. We&apos;ll price it before you commit.
            </p>
            <p className="body muted small">
              Advertising budget is separate from all fees on this page. You pay Google, Meta, or whichever
              platform you advertise on directly, so you keep ownership of the accounts and can see exactly what
              was spent.
            </p>
          </div>
          <div className="stack" style={{ ["--stack" as string]: "2rem" }}>
            {addOns.map((g) => (
              <div key={g.group}>
                <h3 className="label" style={{ marginBottom: "0.75rem" }}>
                  {g.group}
                </h3>
                <ul className="ruled-list" style={{ borderTopColor: "var(--ink)" }}>
                  {g.items.map((a) => (
                    <li key={a.label} style={{ padding: "0.9rem 0", display: "flex", flexWrap: "wrap", gap: "4px 16px", justifyContent: "space-between" }}>
                      <span style={{ fontWeight: 500 }}>{a.label}</span>
                      <span className="small muted">{a.note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fixed-scope work */}
      <section className="section section--card" aria-labelledby="fixed-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Fixed-scope work</p>
            <h2 id="fixed-title" className="h2">
              Projects outside a monthly plan.
            </h2>
          </div>
          <div className="table-scroll" tabIndex={0} role="region" aria-label="Fixed-scope prices">
            <table className="price-table">
              <thead>
                <tr>
                  <th scope="col">Work</th>
                  <th scope="col">Price</th>
                  <th scope="col">Details</th>
                  <th scope="col">
                    <span className="sr-only">Link</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {fixedScope.map((f) => (
                  <tr key={f.name}>
                    <th scope="row" style={{ fontWeight: 500 }}>
                      {f.name}
                    </th>
                    <td className="price">{f.price}</td>
                    <td className="muted">{f.detail}</td>
                    <td style={{ whiteSpace: "nowrap" }}>
                      <Link href={f.href} className="text-link">
                        Details<span className="sr-only"> about {f.name}</span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FinalCta
        eyebrow="Not sure where to start?"
        title="Start with a free conversation."
        body="No pitch, no pressure. We'll look at where you are today, where growth seems to be stuck, and which plan would actually move the needle — or whether we're even the right fit."
        label="Book a free conversation"
      />
    </PageShell>
  );
}
