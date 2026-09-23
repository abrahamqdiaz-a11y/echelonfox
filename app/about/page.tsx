import type { Metadata } from "next";
import Image from "next/image";
import PageShell from "@/components/site/PageShell";
import FinalCta from "@/components/site/FinalCta";

const TITLE = "About Abe Quinn and EchelonFox";
const DESCRIPTION =
  "Abe Quinn reads how a business makes money, finds the commercial constraint holding growth back, and leads the work to fix it. Enterprise B2B sales, a startup acquired by Staples, and operations experience behind the approach.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "https://echelonfox.com/about" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://echelonfox.com/about",
    type: "profile",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: TITLE }],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abe Quinn",
  jobTitle: "Founder",
  image: "https://echelonfox.com/images/abe-quinn.jpg",
  worksFor: { "@type": "Organization", name: "EchelonFox", url: "https://echelonfox.com" },
  nationality: { "@type": "Country", name: "United States" },
  homeLocation: { "@type": "Country", name: "Finland" },
};

const approach = [
  {
    num: "01",
    title: "Reading the business",
    body: "Every engagement starts with how the company makes money: which customers matter most, what they buy and when, how they find you, and what happens after they do. Abe looks at the numbers you already have, such as sales records, POS exports, and CRM history, before forming an opinion.",
  },
  {
    num: "02",
    title: "Finding the constraint",
    body: "Most growing companies have more than one problem, but usually one that holds the others in place. Naming it clearly, and saying plainly what can wait, is the most useful thing a diagnosis does.",
  },
  {
    num: "03",
    title: "Leading the build",
    body: "Abe doesn't hand over a deck and leave. He leads the implementation, from positioning and acquisition to sales follow-up and the tools underneath, and stays accountable for it. Where a job needs a specialist, such as a developer, a designer, or a video editor, he brings in someone he's worked with.",
  },
];

const background = [
  {
    label: "Enterprise B2B sales",
    body: "How buying decisions get made inside companies, and how much depends on what happens after the first conversation.",
  },
  {
    label: "Founder",
    body: "Founded a startup that was acquired by Staples. Building a company through to an acquisition means treating sales, product, and operations as one system.",
  },
  {
    label: "Operations and kitchens",
    body: "A respect for process under pressure. A system is only as good as what happens on the busiest day of the week.",
  },
  {
    label: "Based in Finland",
    body: "An American working from Finland with U.S. businesses.",
  },
];

const principles = [
  {
    title: "You work with the person doing the work.",
    body: "No account-manager layer, no handoffs to someone new each quarter, and no re-explaining your strategy.",
  },
  {
    title: "Numbers you can trace.",
    body: "Reporting is tied to leads, sales, and pipeline rather than impressions. Results are only claimed where the client's own data supports them.",
  },
  {
    title: "Small by design.",
    body: "You get a senior read on your business, not a template. Specialists are brought in for specific jobs, and Abe stays accountable for the result.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      <section className="page-hero" aria-labelledby="about-title">
        <div className="container split split--hero" style={{ alignItems: "end" }}>
          <div>
            <p className="eyebrow">About</p>
            <h1 id="about-title" className="h1">
              Understand how the business makes money. Then change what&apos;s in the way.
            </h1>
            <p className="lead" style={{ marginTop: "1.75rem" }}>
              EchelonFox is Abe Quinn&apos;s practice. He works with established companies to find the commercial
              constraint holding growth back, design a better system around it, and lead the work to build it.
            </p>
          </div>
          <figure style={{ margin: 0, maxWidth: "440px", width: "100%", justifySelf: "end" }}>
            <div className="portrait">
              <Image
                src="/images/abe-quinn.jpg"
                alt="Abe Quinn, founder of EchelonFox, in a blue hoodie against a white brick wall"
                fill
                sizes="(min-width: 900px) 440px, 100vw"
                priority
              />
            </div>
            <figcaption className="caption">Abe Quinn, founder</figcaption>
          </figure>
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

      <section className="band" aria-label="On channels">
        <div className="container">
          <blockquote style={{ margin: 0, maxWidth: "56rem" }}>
            <p className="pull">
              Most businesses don&apos;t need every channel at once. They need the two or three that matter, run
              properly, with everything else ready when the business is.
            </p>
          </blockquote>
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
              Abe&apos;s background is in selling, building, and running businesses, which is why the work starts with how a company earns its revenue rather than with a
              channel.
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
            <p className="eyebrow">Working together</p>
            <h2 id="principles-title" className="h2">
              What you can expect.
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
        title="Want Abe's read on your business?"
        body="Tell him what the business does and where growth feels stuck. You'll hear back within one business day, with an honest answer on whether EchelonFox is the right fit."
      />
    </PageShell>
  );
}
