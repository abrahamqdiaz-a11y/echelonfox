import Link from "next/link";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import FinalCta from "@/components/site/FinalCta";
import Arrow from "@/components/site/Arrow";
import { publishedCases } from "@/lib/work-data";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Selected Work — Business Challenges & Practical Solutions",
  "Explore documented work across commercial diagnosis, website development, customer acquisition and enquiry systems.",
  "/work",
);
export default function Work() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Selected Work"
        title="Real business challenges. Practical solutions."
        lead="A closer look at the context, the diagnosis and the work put into practice. Each business called for a different response."
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
                  <span>
                    {
                      [
                        "Commercial diagnosis",
                        "Customer journey",
                        "Connected enquiries",
                      ][i]
                    }
                  </span>
                  <b>{["Understand", "Enquire", "Connect"][i]}</b>
                  <span>Strategy into practice</span>
                </div>
              </div>
              <div>
                <p className="label">{c.descriptor}</p>
                <h2>
                  <Link href={`/work/${c.slug}`}>{c.title}</Link>
                </h2>
                <p>{c.context}</p>
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
      <FinalCta label="Discuss a Similar Challenge" />
    </PageShell>
  );
}
