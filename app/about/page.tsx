import type { Metadata } from "next";
import PageShell from "@/components/site/PageShell";
import FinalCta from "@/components/site/FinalCta";

const TITLE = "About EchelonFox — How I work";
const DESCRIPTION =
  "I find the gaps that hold a growing business back, in how it sells, markets, and operates, then lead the work to fix them. Enterprise B2B sales, founding a startup acquired by Staples, and operations experience sit behind the approach.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "https://echelonfox.com/about" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://echelonfox.com/about",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: TITLE }],
  },
};

const approach = [
  {
    num: "01",
    title: "Reading the business",
    body: "Every engagement starts with how the company makes money: which customers matter most, what they buy and when, how they find you, and what happens after they do. I look at the numbers you already have, such as sales records, POS exports, and CRM history, before forming an opinion.",
  },
  {
    num: "02",
    title: "Finding the constraint",
    body: "Most growing companies have more than one problem, but usually one that holds the others in place. Naming it clearly, and saying plainly what can wait, is the most useful thing a diagnosis does.",
  },
  {
    num: "03",
    title: "Leading the build",
    body: "I don't hand over a deck and leave. I lead the implementation, from positioning and acquisition to sales follow-up and the tools underneath, and I stay accountable for it. Where a job needs a specialist, such as a developer, a designer, or a video editor, I bring in people I've worked with.",
  },
];

const background = [
  {
    label: "Enterprise B2B sales",
    body: "How buying decisions get made inside companies, and how much depends on what happens after the first conversation.",
  },
  {
    label: "Building a company to acquisition",
    body: "I founded a startup that was acquired by Staples. Building a company through to an acquisition means treating sales, product, and operations as one system.",
  },
  {
    label: "Operations",
    body: "Including professional kitchens, which leave you with a respect for process under pressure: a system is only as good as what happens on the busiest day of the week.",
  },
];

const principles = [
  {
    title: "You should work with the person doing the work.",
    body: "No account-manager layer, no handoffs to someone new each quarter, and no re-explaining your strategy.",
  },
  {
    title: "Numbers should be traceable.",
    body: "I tie reporting to leads, sales, and pipeline rather than impressions, and I only claim results the client's own data supports.",
  },
  {
    title: "A business deserves a real read, not a template.",
    body: "Every engagement starts from how that company actually works. I bring in specialists for specific jobs, and I stay accountable for the result.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="page-hero" aria-labelledby="about-title">
        <div className="container split split--hero" style={{ alignItems: "end" }}>
          <div>
            <p className="eyebrow">About</p>
            <h1 id="about-title" className="h1">
              Understand how the business makes money. Then change what&apos;s in the way.
            </h1>
            <p className="lead" style={{ marginTop: "1.75rem" }}>
              I find the gaps that hold a growing business back, in how it sells, markets, and operates, then
              lead the work to fix them with better processes, the right systems, and automation where it actually
              helps.
            </p>
          </div>
          <dl className="margin-note" aria-label="At a glance">
            <div>
              <dt>What I do</dt>
              <dd>Growth strategy and implementation across sales, marketing, and operations.</dd>
            </div>
            <div>
              <dt>Who it&apos;s for</dt>
              <dd>Leaders of proven companies whose growth has outpaced their systems.</dd>
            </div>
            <div>
              <dt>How</dt>
              <dd>Diagnose, design, build, improve — in the order the diagnosis sets.</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section section--card" aria-labelledby="approach-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">The approach</p>
            <h2 id="approach-title" className="h2">
              Read the business. Find the constraint. Lead the build.
            </h2>
          </div>
          <ol className="path path--3">
            {approach.map((a) => (
              <li key={a.num} className="path-step">
                <span className="path-step__num">{a.num}</span>
                <h3 className="path-step__name">{a.title}</h3>
                <p className="small muted" style={{ margin: 0 }}>
                  {a.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band" aria-labelledby="vision-label">
        <div className="container">
          <p id="vision-label" className="label" style={{ marginBottom: "1.25rem" }}>
            What I&apos;m working toward
          </p>
          <p className="pull" style={{ maxWidth: "56rem" }}>
            Companies that grow steadily because their systems work: they know where revenue comes from, their
            teams are stretched in the right places, and growth doesn&apos;t depend on the owner holding everything
            together.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="background-title">
        <div className="container split">
          <div className="stack">
            <p className="eyebrow">Background</p>
            <h2 id="background-title" className="h2">
              Where the approach comes from.
            </h2>
            <p className="body muted">
              My background is in selling, building, and running businesses, which is why the work starts with
              how a company earns its revenue rather than with a channel.
            </p>
          </div>
          <dl className="ruled-list" style={{ borderTopColor: "var(--ink)" }}>
            {background.map((b) => (
              <div key={b.label} style={{ padding: "1.4rem 0", borderBottom: "1px solid var(--rule)" }}>
                <dt className="serif" style={{ fontSize: "1.45rem", lineHeight: 1.25 }}>
                  {b.label}
                </dt>
                <dd className="muted" style={{ margin: "0.4rem 0 0" }}>
                  {b.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section section--card" aria-labelledby="principles-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What I believe</p>
            <h2 id="principles-title" className="h2">
              Three things I hold to.
            </h2>
          </div>
          <div className="grid-3">
            {principles.map((p) => (
              <div key={p.title}>
                <h3 className="cell-title" style={{ marginTop: 0 }}>
                  {p.title}
                </h3>
                <p className="small muted" style={{ margin: 0 }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title="Want my read on your business?"
        body="Tell me what the business does and where growth feels stuck. You'll hear back within one business day, with an honest answer on whether this is the right fit."
      />
    </PageShell>
  );
}
