import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import FinalCta from "@/components/site/FinalCta";
import Arrow from "@/components/site/Arrow";
import { publishedCases } from "@/lib/work-data";

const TITLE = "Work — What clients asked for, and what the business needed";
const DESCRIPTION =
  "Case studies from EchelonFox: what each company asked for, the broader commercial issue found, what was built, and the outcome where evidence exists.";

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | EchelonFox` },
  description: DESCRIPTION,
  alternates: { canonical: "https://echelonfox.com/work" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://echelonfox.com/work",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Work — EchelonFox" }],
  },
};

export default function WorkPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Work"
        title="What clients asked for, and what the business needed."
        lead="Each case follows the same shape: the request, the broader issue the diagnosis found, what was built, and the outcome where there's evidence for one."
      />

      <section className="section section--card" aria-label="Case studies">
        <div className="container">
          <ol className="case-rows" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {publishedCases.map((c, i) => (
              <li key={c.slug} className="case-row">
                <div className="case-row__head">
                  <span className="label">{String(i + 1).padStart(2, "0")}</span>
                  <span className="label">{c.descriptor}</span>
                </div>
                <div className="stack" style={{ ["--stack" as string]: "1rem" }}>
                  <h2 className="h3" style={{ fontSize: "clamp(1.5rem, 1.25rem + 1vw, 2.1rem)" }}>
                    <Link href={`/work/${c.slug}`} style={{ textDecoration: "none" }}>
                      {c.title}
                    </Link>
                  </h2>
                  <p className="muted" style={{ margin: 0 }}>
                    <span className="label" style={{ marginRight: 10 }}>
                      Asked for
                    </span>
                    {c.askedFor}
                  </p>
                  <p style={{ margin: 0 }}>
                    <Link href={`/work/${c.slug}`} className="arrow-link">
                      Read the case study <span className="sr-only">: {c.descriptor}</span>
                      <Arrow />
                    </Link>
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="numbers-title">
        <div className="container split">
          <h2 id="numbers-title" className="h3">
            Why there are no percentages on this page
          </h2>
          <p className="body muted">
            Clients are described by category until they&apos;ve given written permission to be named. Figures
            are only published when they come from a client&apos;s own analytics or accounts and the client has
            agreed to share them. On a call, we can walk you through the work in more detail and say which parts
            of a result the work can fairly claim.
          </p>
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
