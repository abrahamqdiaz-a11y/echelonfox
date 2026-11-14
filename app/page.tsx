import Link from "next/link";
import Image from "next/image";
import PageShell from "@/components/site/PageShell";
import Arrow from "@/components/site/Arrow";
import FinalCta from "@/components/site/FinalCta";
import Process from "@/components/site/Process";
import PeoplePanels from "@/components/site/PeoplePanels";
import SectionIntro from "@/components/site/SectionIntro";
import OfferLadder from "@/components/site/OfferLadder";
import { publishedCases } from "@/lib/work-data";
import { industries } from "@/lib/industries";
import { PRIMARY_CTA } from "@/lib/offers";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Revenue Operations Consultancy for B2B Companies",
  SITE.description,
  "",
);
const leaks = [
  {
    title: "Enquiries and quote requests that never get followed up.",
    body: "Someone asked for a price. Nobody got back to them, or nobody got back a second time.",
  },
  {
    title: "Customers who stopped ordering and nobody noticed.",
    body: "They didn’t complain. They went quiet, and no report flagged it.",
  },
  {
    title: "A pipeline that lives in inboxes and spreadsheets.",
    body: "Nobody can say what is open, who owns it or what it is worth.",
  },
  {
    title: "Marketing spend with no line to revenue.",
    body: "Money goes out every month. Nobody can say which of it turns into sales.",
  },
];
const applications = [
  {
    area: "Enquiries & quotes",
    title: "Answer every request with a clear next step.",
    body: "We summarise the request, draft a reply and route it to the right salesperson. A person reviews it before it is sent.",
    steps: ["Enquiry", "AI-assisted draft", "Human review"],
  },
  {
    area: "Lapsed customers",
    title: "Spot the accounts that went quiet.",
    body: "We flag customers whose ordering has dropped and draft a win-back message for the account owner to approve.",
    steps: ["Order history", "Flag and draft", "Owner approves"],
  },
  {
    area: "Reporting",
    title: "One number, without the spreadsheet work.",
    body: "We pull figures from the CRM and order records into the weekly report, with checks before it is shared.",
    steps: ["CRM and orders", "Compile and check", "Weekly number"],
  },
];
export default function Home() {
  return (
    <PageShell>
      <form
        name="contact"
        data-netlify="true"
        netlify-honeypot="bot-field"
        method="POST"
        hidden
      >
        <input type="hidden" name="form-name" value="contact" />
        <input name="bot-field" type="text" />
        <input name="name" type="text" />
        <input name="email" type="email" />
        <input name="company" type="text" />
        <input name="website" type="text" />
        <textarea name="message" />
        <input name="consent" type="checkbox" />
      </form>
      <section className="home-hero ai-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              Revenue operations for established B2B companies
            </p>
            <h1 className="display">{SITE.headline}</h1>
            <p className="lead">
              For established B2B companies with a sales team and no one who
              owns the systems. We measure the leak in dollars across marketing,
              sales and existing customers. Then we fix it, and run it so it
              stays fixed.
            </p>
            <div className="actions">
              <Link className="btn" href={PRIMARY_CTA.href}>
                {PRIMARY_CTA.label}
                <Arrow />
              </Link>
              <Link className="arrow-link" href="/what-we-do">
                See how it works
                <Arrow />
              </Link>
            </div>
          </div>
          <PeoplePanels />
        </div>
        <div className="container hero-foot">
          <span>Marketing, sales and customer retention, run as one system.</span>
          <span>Diagnose / Design / Build / Improve</span>
        </div>
      </section>
      <section className="section section--white">
        <div className="container">
          <SectionIntro
            eyebrow="Where the money goes"
            title="The revenue is already there. It is leaking out."
            body="Most established companies don’t need more leads first. They need to stop losing the business they already have. These are the leaks we find most often."
          />
          <div className="challenge-grid">
            {leaks.map((l, i) => (
              <article key={l.title}>
                <div className="challenge-top">
                  <span className="index">0{i + 1}</span>
                </div>
                <h3>{l.title}</h3>
                <p className="muted">{l.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section" id="offers">
        <div className="container">
          <SectionIntro
            eyebrow="What it costs"
            title="One starting point. Two ways forward."
            body="Every engagement starts with the Diagnostic. You see the leaks in dollars before you decide anything else."
          />
          <OfferLadder />
          <Link className="arrow-link offer-more" href="/what-we-do">
            See what each one includes
            <Arrow />
          </Link>
        </div>
      </section>
      <section className="section section--white">
        <div className="container">
          <SectionIntro
            eyebrow="How we work"
            title="Diagnose. Design. Build. Improve."
            body="The same four steps, whichever path you take."
          />
          <Process compact />
          <Link href="/our-approach" className="arrow-link">
            Our approach
            <Arrow />
          </Link>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Where AI fits"
            title="Real tasks. A clear role for AI."
            body="AI helps us build and run these systems faster. It is a tool, not the product. A person reviews everything before it goes out."
          />
          <div className="application-list">
            {applications.map((a, i) => (
              <article key={a.area}>
                <div>
                  <span className="index">0{i + 1}</span>
                  <p className="label">{a.area}</p>
                  <h3>{a.title}</h3>
                </div>
                <div>
                  <p className="muted">{a.body}</p>
                  <ol className="application-flow">
                    {a.steps.map((step, j) => (
                      <li key={step}>
                        <span>{step}</span>
                        {j < 2 && <Arrow size={14} />}
                      </li>
                    ))}
                  </ol>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section human-section">
        <div className="container human-split">
          <div className="editorial-photo">
            <Image
              src="/images/consultancy/business-conversation.webp"
              alt="Illustrative photograph of two people discussing work across a table"
              width={1100}
              height={733}
              sizes="(max-width: 760px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="eyebrow">People in the loop</p>
            <h2 className="h2">
              Commercial judgement.
              <br />
              Technical execution.
              <br />
              People in the loop.
            </h2>
            <p className="lead">
              Every step has an owner. Anything that reaches a customer is
              checked by a person first.
            </p>
            <Link href="/about" className="arrow-link">
              About EchelonFox
              <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <section className="section section--white">
        <div className="container">
          <SectionIntro
            eyebrow="Industries"
            title="The same leaks, in your terms."
            body="Each industry loses revenue in its own way. These pages set out the leaks we look for and what the Diagnostic measures."
          />
          <div className="related-work">
            {industries.map((ind) => (
              <Link href={`/industries/${ind.slug}`} key={ind.slug}>
                <span className="label">Industry</span>
                <h3>{ind.name}</h3>
                <p className="muted">{ind.cardSummary}</p>
                <span className="arrow-link">
                  See the leaks we look for
                  <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="work-heading">
            <SectionIntro
              eyebrow="Selected work"
              title="What they asked for. The revenue problem we found."
              body="Three projects, described by category. We publish only what is documented."
            />
            <Link className="arrow-link" href="/work">
              View selected work
              <Arrow />
            </Link>
          </div>
          <div className="work-grid">
            {publishedCases.map((c, i) => (
              <article className="work-preview" key={c.slug}>
                <Link href={`/work/${c.slug}`}>
                  <div
                    className={`case-visual case-visual--${i + 1}`}
                    aria-hidden="true"
                  >
                    <span className="case-visual__number">0{i + 1}</span>
                    <div className="case-visual__lines">
                      <span>Revenue problem</span>
                      <b>{["Spend", "Quote", "Enquire"][i]}</b>
                      <span>What we found</span>
                    </div>
                  </div>
                  <p className="label">{c.descriptor}</p>
                  <h3>{c.revenueProblem}</h3>
                  <p className="small muted">{c.revenueSummary}</p>
                  <span className="arrow-link">
                    Read the case study
                    <Arrow />
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </PageShell>
  );
}
