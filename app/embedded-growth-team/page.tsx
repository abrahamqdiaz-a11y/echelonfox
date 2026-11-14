import Link from "next/link";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import FinalCta from "@/components/site/FinalCta";
import Arrow from "@/components/site/Arrow";
import SectionIntro from "@/components/site/SectionIntro";
import ServiceSchema from "@/components/site/ServiceSchema";
import { offers } from "@/lib/offers";
import { pageMetadata } from "@/lib/metadata";

const egt = offers["embedded-growth-team"];
const diagnostic = offers.diagnostic;
const TITLE = "Embedded Growth Team — Part-Time Revenue Leadership";
const DESCRIPTION =
  "A part-time head of growth plus our technical team, working inside your business. Planning, pipeline reviews, systems and vendor management. From $4,200 a month.";

export const metadata = pageMetadata(TITLE, DESCRIPTION, "/embedded-growth-team");

const signs = [
  "You have a sales team, but nobody owns the systems behind it.",
  "Marketing is spread across outside vendors, and nobody manages them against revenue.",
  "You want one number you can trust each week.",
];

const monthly = [
  {
    title: "Planning",
    body: "A written plan, reviewed each month, built on the leaks found in the Diagnostic.",
  },
  {
    title: "A weekly pipeline review",
    body: "With your sales lead: what is open, what is stuck and what needs a follow-up.",
  },
  {
    title: "Systems ownership",
    body: "We own the CRM, automation and reporting: the setup, the changes and the upkeep.",
  },
  {
    title: "Vendor management",
    body: "We brief and manage any outside marketing vendors, such as SEO, advertising or content specialists, and hold their work to revenue.",
  },
  {
    title: "One revenue number, weekly",
    body: "Reported every week against the starting baseline from the Diagnostic.",
  },
];

const comparison: [string, string, string, string][] = [
  [
    "Who leads",
    "A part-time head of growth who owns the plan.",
    "One person, full-time.",
    "An account manager, focused on the services the agency sells.",
  ],
  [
    "Technical work",
    "Our technical team runs the CRM, automation and reporting.",
    "Depends on who you hire. Often needs separate technical help.",
    "Usually limited to the channels the agency runs.",
  ],
  [
    "Outside vendors",
    "We manage them for you.",
    "The manager manages them.",
    "The agency is the vendor.",
  ],
  [
    "What gets reported",
    "One revenue number, weekly, against a baseline.",
    "Whatever the role defines.",
    "Usually results for the channels they run.",
  ],
  [
    "How it starts",
    "A two-week Revenue Leak Diagnostic.",
    "Recruitment, then onboarding.",
    "Onboarding to the agency’s process.",
  ],
  [
    "Commitment",
    "Six-month minimum.",
    "An employment contract.",
    "Varies by agency.",
  ],
];

export default function EmbeddedGrowthTeam() {
  return (
    <PageShell>
      <ServiceSchema
        name={egt.name}
        description={DESCRIPTION}
        path="/embedded-growth-team"
        offers={[egt]}
      />
      <PageHero
        eyebrow="What We Do · Embedded Growth Team"
        title="Marketing and revenue leadership, without hiring a department."
        lead={`A part-time head of growth plus our technical team, working inside your business. ${egt.price}, ${egt.terms[0].toLowerCase()}.`}
      />
      <section className="section section--white">
        <div className="container split">
          <div>
            <p className="eyebrow">Who it is for</p>
            <h2 className="h2">
              You need the leadership, not yet the department.
            </h2>
            <p className="body muted">
              For companies that need marketing and revenue leadership but are
              not ready to hire a full-time executive or build a department.
            </p>
          </div>
          <div>
            <p className="label">You might recognise this</p>
            <ul className="symptoms">
              {signs.map((s, i) => (
                <li key={s}>
                  <span className="index">0{i + 1}</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="What you get each month"
            title="We own the plan, the systems and the number."
          />
          <ol className="ruled-list monthly-list">
            {monthly.map((m, i) => (
              <li key={m.title}>
                <span className="index">0{i + 1}</span>
                <h3>{m.title}</h3>
                <p className="muted">{m.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section section--white">
        <div className="container split">
          <div>
            <p className="eyebrow">What it does not include</p>
            <h2 className="h2">Paid for separately.</h2>
          </div>
          <div>
            <ul className="exclude-list exclude-list--large">
              {egt.excludes.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <p className="muted">
              We plan and manage this work. The spend, the vendor fees and the
              creative production sit outside the monthly fee.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="How it compares"
            title="Against hiring a manager, or hiring an agency."
            body="A plain comparison of how each option works. It is not a cost comparison."
          />
          <div className="compare-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th scope="col">
                    <span className="sr-only">Question</span>
                  </th>
                  <th scope="col">Embedded Growth Team</th>
                  <th scope="col">Full-time manager</th>
                  <th scope="col">Agency</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(([q, a, b, c]) => (
                  <tr key={q}>
                    <th scope="row">{q}</th>
                    <td>{a}</td>
                    <td>{b}</td>
                    <td>{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="section section--white">
        <div className="container split">
          <div>
            <p className="eyebrow">How it starts</p>
            <h2 className="h2">With the {diagnostic.name}.</h2>
          </div>
          <div>
            <p className="lead">
              Two weeks, {diagnostic.price.toLowerCase()}. We measure the leaks
              in dollars, and that list becomes the first plan.
            </p>
            <p>
              If the Diagnostic shows you need the leaks fixed rather than an
              ongoing team, Build, then Run may suit you better. You decide
              after you have seen the numbers.
            </p>
            <Link className="arrow-link" href="/what-we-do">
              Compare both paths
              <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <FinalCta />
    </PageShell>
  );
}
