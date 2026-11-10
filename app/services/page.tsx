import Link from "next/link";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import FinalCta from "@/components/site/FinalCta";
import Arrow from "@/components/site/Arrow";
import { coreCapabilities, supportingCapabilities } from "@/lib/capabilities";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "AI Consulting Services — Strategy, Automation & Implementation",
  "AI strategy, workflow automation, assistants, integrations and adoption support. Practical AI consulting grounded in your business priorities.",
  "/services",
);
export default function Services() {
  return (
    <PageShell>
      <PageHero
        eyebrow="AI Services"
        title="AI strategy. Practical implementation."
        lead="From identifying the right opportunity to building and adopting the solution, we connect AI decisions with the way your business works."
      />
      <section className="section section--white">
        <div className="container capability-editorial">
          {coreCapabilities.map((c, i) => (
            <article key={c.slug}>
              <span className="index">0{i + 1}</span>
              <div>
                <h2 className="h3">
                  <Link href={`/services/${c.slug}`}>{c.name}</Link>
                </h2>
                <p className="lead">{c.summary}</p>
                <Link href={`/services/${c.slug}`} className="arrow-link">
                  Explore this capability
                  <Arrow />
                </Link>
              </div>
              <ul className="check-list small">
                {c.includes.map((g) => (
                  <li key={g.heading}>{g.items.slice(0, 2).join(" · ")}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="band">
        <div className="container split">
          <h2 className="h2">
            Start with a useful application.
            <br />
            Build with clear boundaries.
          </h2>
          <div>
            <p className="lead">
              We assess the task, the data and the people involved before
              choosing the approach.
            </p>
            <p>
              A focused pilot may be the right starting point. In another
              business, readiness work or a connection between existing tools
              may come first. The engagement is scoped around what needs to be
              learned and built.
            </p>
          </div>
        </div>
      </section>
      <section id="business-systems" className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Supporting business capabilities</p>
            <h2 className="h2">AI works within a wider business.</h2>
            <p className="lead muted">
              Commercial strategy, CRM, websites, marketing and operations
              remain part of our delivery capability. We bring them into an
              engagement where the business needs them.
            </p>
          </div>
          <div className="supporting-grid">
            {supportingCapabilities.map((c) => (
              <Link href={`/services/${c.slug}`} key={c.slug}>
                <h3>{c.name}</h3>
                <p className="small muted">{c.summary}</p>
                <span className="arrow-link">
                  Explore
                  <Arrow size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </PageShell>
  );
}
