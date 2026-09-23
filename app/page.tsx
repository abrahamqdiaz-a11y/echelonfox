import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/site/PageShell";
import PenMark from "@/components/site/PenMark";
import StatementMark from "@/components/site/StatementMark";
import Marked from "@/components/site/Marked";
import Arrow from "@/components/site/Arrow";
import ContactForm from "@/components/ContactForm";
import { capabilities } from "@/lib/capabilities";
import { getCase, publishedCases } from "@/lib/work-data";
import { SITE } from "@/lib/site";

const TITLE = `${SITE.name} — Find what's holding growth back. Build what comes next.`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: SITE.description,
  alternates: { canonical: SITE.url },
  openGraph: {
    title: TITLE,
    description: SITE.description,
    url: SITE.url,
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: { title: TITLE, description: SITE.description },
};

const symptoms = [
  "Marketing, sales, and operations each have a plan. Nobody owns how they fit together.",
  "Leads come in, but follow-up depends on who happens to see them first.",
  "You've paid for a CRM, an agency, or a new website, and still can't say which customers are worth the most.",
  "Budget and staffing follow habit rather than where sales actually happen.",
  "The website and the pitch describe the company you were a few years ago.",
  "Every fix is a tactic. Each one helps a little; none of them compound.",
];

const reads = [
  {
    label: "Revenue",
    title: "Where the money comes from",
    body: "Which customers, products, locations, and days carry the business. The sales records usually tell a different story than habit does.",
  },
  {
    label: "Customers",
    title: "How customers are won and kept",
    body: "The path from first contact to first purchase to repeat business, and what the company does, or doesn't do, at each step.",
  },
  {
    label: "Operations",
    title: "Where it slows down",
    body: "Handoffs between marketing, sales, and delivery. Follow-up that depends on memory. Staff stretched in the wrong places. Tools that don't talk to each other.",
  },
  {
    label: "Priority",
    title: "What to fix first",
    body: "The one constraint that matters most right now, what it's worth to address, and what can safely wait.",
  },
];

const path = [
  {
    num: "01",
    name: "Diagnose",
    sub: "Find the constraint.",
    body: "Review sales data, customer patterns, the path to purchase, and the tools already in place.",
    out: "A written read on where growth is stuck and what to fix first.",
  },
  {
    num: "02",
    name: "Design",
    sub: "Design the commercial system.",
    body: "Decide how positioning, acquisition, sales follow-up, and technology should work together to remove that constraint.",
    out: "A plan with priorities, owners, and the numbers that will show whether it worked.",
  },
  {
    num: "03",
    name: "Build",
    sub: "Lead the work.",
    body: "Build what the plan calls for: pages, campaigns, CRM workflows, automations, or process changes. We lead it directly and bring in a specialist where a job needs one.",
    out: "Work shipped in weekly sprints.",
  },
  {
    num: "04",
    name: "Improve",
    sub: "Measure, adjust, move on.",
    body: "Track what changed against the numbers that matter to the business, then turn to the next constraint.",
    out: "A monthly strategy review of what's working and what comes next.",
  },
];

export default function Home() {
  const feature = getCase("beauty-supply-retailer-maryland")!;
  const others = publishedCases.filter((c) => c.slug !== feature.slug);

  return (
    <>
      {/* Static form for Netlify build-time detection — must match all fields in ContactForm.tsx */}
      <form name="contact" data-netlify="true" netlify-honeypot="bot-field" method="POST" hidden>
        <input type="hidden" name="form-name" value="contact" />
        <input name="bot-field" type="text" />
        <input name="name" type="text" />
        <input name="email" type="email" />
        <input name="company" type="text" />
        <textarea name="message" />
        <input name="consent" type="checkbox" />
      </form>

      <PageShell>
        {/* 1 — What commercial problem does EchelonFox solve? */}
        <section className="home-hero" aria-labelledby="hero-title" id="home">
          <div className="container">
            <div>
              <p className="eyebrow">Commercial growth strategy &amp; implementation</p>
              <h1 id="hero-title" className="display">
                Find what&apos;s <span className="nowrap"><PenMark>holding growth back</PenMark>.</span>
                <br />
                Build what comes next.
              </h1>
              <p className="lead">{SITE.description}</p>
              <div className="actions">
                <Link href="/contact" className="btn">
                  Start a conversation
                  <Arrow />
                </Link>
                <a href="#approach" className="arrow-link">
                  How the diagnosis works
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* The problem, stated plainly. No columns or labels: an editorial statement. */}
        <section className="statement" aria-labelledby="statement-title" id="statement">
          <div className="container">
            <h2 id="statement-title" className="statement__title">
              Growth rarely stalls for lack of tactics.
            </h2>
            <p className="statement__body">
              It stalls when a company outgrows the way it was built: sales, marketing, and operations stop pulling
              in the same direction, and too much still runs through the owner. We start by finding{" "}
              <StatementMark>the constraint that matters most</StatementMark>, then design and build the
              fix, and lead the work until it&apos;s running. Websites, campaigns, CRM, and AI are tools we choose
              after that, not before.
            </p>
          </div>
        </section>

        {/* 2 — Who is it for? */}
        <section className="section" aria-labelledby="who-title" id="who">
          <div className="container">
            <div className="split">
              <div className="stack">
                <p className="eyebrow">Who it&apos;s for</p>
                <h2 id="who-title" className="h2">
                  Leaders of proven companies whose growth has outpaced their systems.
                </h2>
                <p className="body muted">
                  You have customers who pay and a business that works. What stopped working is the way growth happens: it&apos;s spread across people, tools, and vendors
                  that don&apos;t add up to one system.
                </p>
              </div>
              <div>
                <h3 className="label" style={{ marginBottom: "1rem" }}>
                  What it usually looks like
                </h3>
                <ul className="symptoms">
                  {symptoms.map((s, i) => (
                    <li key={s}>
                      <span className="label" aria-hidden="true">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                <p className="body" style={{ marginTop: "2rem" }}>
                  If two or three of these sound familiar, the problem usually isn&apos;t effort. It&apos;s that
                  nobody has looked at the system as a whole.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3 — How is the problem diagnosed, and how is the fix decided? */}
        {/* Anchors from the previous homepage (#about, #selected-work, #results, #testimonials) land on
            the closest new section, so old links and bookmarks don't dead-end. */}
        <span id="about" aria-hidden="true" />
        <section className="section section--card" aria-labelledby="approach-title" id="approach">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">How the diagnosis works</p>
              <h2 id="approach-title" className="h2">
                Start with how the business makes money.
              </h2>
              <p className="lead muted">
                Before recommending a channel or a tool, we read the business the way an operator would: where
                revenue comes from, how customers are won and kept, and how the business runs day to day. The aim is
                to find the one constraint that, once fixed, makes the rest of the work easier.
              </p>
            </div>

            <div className="grid-4">
              {reads.map((r) => (
                <div key={r.label}>
                  <p className="label">{r.label}</p>
                  <h3 className="cell-title">{r.title}</h3>
                  <p className="small muted" style={{ margin: 0 }}>
                    {r.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="split" style={{ marginTop: "clamp(2.5rem, 1.5rem + 3vw, 4rem)", alignItems: "start" }}>
              <div className="stack" style={{ ["--stack" as string]: "1rem" }}>
                <p className="label">What you get</p>
                <p className="serif" style={{ fontSize: "clamp(1.4rem, 1.2rem + 0.8vw, 1.85rem)", lineHeight: 1.3, margin: 0 }}>
                  A written diagnosis: a clear read on where growth is stuck, what to fix first, and what can wait.
                  It&apos;s built to be useful on its own, before anything is implemented.
                </p>
              </div>
              <div className="stack" style={{ ["--stack" as string]: "1rem" }}>
                <p className="label">What we look at</p>
                <ul className="check-list small">
                  <li>Sales, POS, and CRM records you already have</li>
                  <li>Which customers, products, and days carry the business</li>
                  <li>The path from first contact to repeat purchase</li>
                  <li>Staffing, scheduling, and the day-to-day processes behind a sale</li>
                  <li>Current spend, tools, and vendors</li>
                </ul>
                <p className="small muted" style={{ margin: 0 }}>
                  <Link href="/about" className="text-link">
                    More about how we work
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* 4 — What happens after the diagnosis? */}
        <section className="section" aria-labelledby="path-title" id="path">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">What happens after the diagnosis</p>
              <h2 id="path-title" className="h2">
                Diagnose. Design. Build. Improve.
              </h2>
              <p className="lead muted">
                Implementation follows the priorities the diagnosis reveals. Every stage has a clear output, and
                the order comes from your business, not from a package.
              </p>
            </div>

            <ol className="path" aria-label="Engagement path">
              {path.map((step, i) => (
                <li key={step.num} className={`path-step${i === 0 ? " path-step--active" : ""}`}>
                  <span className="path-step__num">{step.num}</span>
                  <h3 className="path-step__name">{step.name}</h3>
                  <p className="path-step__sub">{step.sub}</p>
                  <p className="small muted" style={{ margin: 0 }}>
                    {step.body}
                  </p>
                  <p className="path-step__out">
                    <strong>Output: </strong>
                    {step.out}
                  </p>
                </li>
              ))}
            </ol>

            <div id="services" style={{ marginTop: "clamp(3.5rem, 2rem + 4vw, 5.5rem)", scrollMarginTop: "calc(var(--header-h) + 16px)" }}>
              <div className="split" style={{ marginBottom: "2rem", alignItems: "end" }}>
                <h3 className="h3">What gets built</h3>
                <p className="body muted">
                  Four groups of capability sit beneath the strategy. The diagnosis decides which ones a company
                  needs, and in what order.
                </p>
              </div>
              <div className="grid-4">
                {capabilities.map((c) => (
                  <Link key={c.slug} href={`/services/${c.slug}`} className="cell-link">
                    <h4 className="cell-title" style={{ marginTop: 0 }}>
                      {c.name}
                    </h4>
                    <p className="small muted" style={{ margin: 0 }}>
                      {c.summary}
                    </p>
                    <span className="arrow-link small">
                      Read more <span className="sr-only">about {c.name.toLowerCase()}</span>
                      <Arrow size={14} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5 — What relevant work supports the claim? */}
        <span id="selected-work" aria-hidden="true" />
        <span id="results" aria-hidden="true" />
        <span id="testimonials" aria-hidden="true" />
        <section className="section section--card" aria-labelledby="work-title" id="work">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Selected work</p>
              <h2 id="work-title" className="h2">
                What they asked for, and what the business needed.
              </h2>
            </div>

            <article className="case-feature" aria-labelledby="feature-title">
              <div className="case-card">
                <p className="label">{feature.descriptor}</p>
                <h3 id="feature-title" className="h3" style={{ fontSize: "clamp(1.6rem, 1.3rem + 1.2vw, 2.25rem)" }}>
                  {feature.title}
                </h3>
                <p style={{ marginTop: "1rem" }}>
                  <Link href={`/work/${feature.slug}`} className="arrow-link">
                    Read the case study
                    <Arrow />
                  </Link>
                </p>
              </div>

              <div className="case-rows">
                <div className="case-row">
                  <div className="case-row__head">
                    <span className="label">They asked for</span>
                  </div>
                  <p style={{ margin: 0 }}>{feature.askedFor}</p>
                </div>
                <div className="case-row">
                  <div className="case-row__head">
                    <span className="label">What was found</span>
                  </div>
                  <ul className="check-list">
                    {feature.found.map((f) => (
                      <li key={f}>
                        <Marked text={f} />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="case-row">
                  <div className="case-row__head">
                    <span className="label">The takeaway</span>
                  </div>
                  <p className="serif" style={{ fontSize: "1.4rem", lineHeight: 1.35, margin: 0 }}>
                    {feature.takeaway}
                  </p>
                </div>
              </div>
            </article>

            <div className="grid-2" style={{ marginTop: "clamp(2.5rem, 1.5rem + 3vw, 4rem)" }}>
              {others.map((c) => (
                <Link key={c.slug} href={`/work/${c.slug}`} className="cell-link">
                  <p className="label">{c.descriptor}</p>
                  <h3 className="cell-title">{c.title}</h3>
                  <span className="arrow-link small">
                    Read the case study <span className="sr-only">: {c.descriptor}</span>
                    <Arrow size={14} />
                  </span>
                </Link>
              ))}
            </div>

            <p className="small muted" style={{ marginTop: "2rem", maxWidth: "44rem" }}>
              Clients are described, not named, until they&apos;ve given permission. Figures are published only
              when they come from a client&apos;s own data and the client has agreed to share them.
            </p>
          </div>
        </section>

        {/* 6 — How does a prospect start a conversation? */}
        <section className="section" aria-labelledby="contact-title" id="contact">
          <div className="container">
            <div className="split">
              <div className="stack">
                <p className="eyebrow">Start a conversation</p>
                <h2 id="contact-title" className="h2">
                  Tell us where growth feels stuck.
                </h2>
                <p className="body muted">
                  Send a short note about the business and what you&apos;ve tried. We read every enquiry and
                  reply within one business day.
                </p>
                <ul className="ruled-list small" style={{ marginTop: "2rem" }}>
                  <li>
                    <strong style={{ fontWeight: 500 }}>A working call, not a pitch.</strong>{" "}
                    <span className="muted">
                      You&apos;ll talk through how the business wins customers today and where the constraint might
                      be.
                    </span>
                  </li>
                  <li>
                    <strong style={{ fontWeight: 500 }}>An honest answer on fit.</strong>{" "}
                    <span className="muted">If we&apos;re not the right fit right now, we&apos;ll say so.</span>
                  </li>
                  <li>
                    <span className="muted">Prefer to pick a time? </span>
                    <a className="text-link" href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
                      Book a call directly
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="panel">
                <ContactForm submitLabel="Start the conversation" />
              </div>
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
