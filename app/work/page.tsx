import Link from "next/link";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import FinalCta from "@/components/site/FinalCta";
import Arrow from "@/components/site/Arrow";
import { publishedCases } from "@/lib/work-data";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Selected Work — The Revenue Problems We Found",
  "Three documented projects, each described by what the client asked for and the revenue problem we found: spend, quote requests and lost enquiries.",
  "/work",
);
export default function Work() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Selected Work"
        title="What they asked for. The revenue problem we found."
        lead="Three projects, described by category. In each one, the request was a familiar fix. The real problem was revenue being lost somewhere else."
      />
      <section className="section section--white">
        <div className="container work-list">
          {publishedCases.map((c, i) => (
            <article key={c.slug}>
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
              <div>
                <p className="label">{c.descriptor}</p>
                <h2>
                  <Link href={`/work/${c.slug}`}>{c.revenueProblem}</Link>
                </h2>
                <p>{c.revenueSummary}</p>
                <Link className="arrow-link" href={`/work/${c.slug}`}>
                  Read the case study
                  <Arrow />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section section--tight">
        <div className="container split">
          <h2 className="h3">The work, described accurately.</h2>
          <p className="muted small">
            Clients are described by category. Outcomes are included where
            documented; completed work is distinguished from performance
            results. We do not publish client names or performance figures
            without the relevant permission and evidence.
          </p>
        </div>
      </section>
      <FinalCta />
    </PageShell>
  );
}
