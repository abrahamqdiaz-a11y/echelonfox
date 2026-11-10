import Link from "next/link";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import FinalCta from "@/components/site/FinalCta";
import Arrow from "@/components/site/Arrow";
import { coreCapabilities } from "@/lib/capabilities";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "What We Do — Connected Business Capabilities",
  "Growth strategy, marketing, sales systems and technology brought together to solve commercial challenges and implement practical improvements.",
  "/services",
);
const examples = [
  [
    "An established business has lost momentum.",
    "A commercial assessment may reveal that positioning or capacity needs attention before acquisition spend increases.",
  ],
  [
    "Enquiries arrive, but too many go quiet.",
    "Clear ownership, a useful CRM workflow and consistent follow-up may help the team move opportunities forward.",
  ],
  [
    "The business is growing, and admin is growing faster.",
    "A workflow review may identify a simpler process or an integration between tools the team already uses.",
  ],
];
export default function Services() {
  return (
    <PageShell>
      <PageHero
        eyebrow="What We Do"
        title="Business challenges don’t fit neatly into service categories."
        lead="Neither should the solutions. We bring strategy, marketing, technology and operations together to address the problems that matter most."
      />
      <section className="section section--white">
        <div className="container">
          <div className="capability-editorial">
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
                  {c.includes.map((group) => (
                    <li key={group.heading}>
                      {group.items.slice(0, 2).join(" · ")}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">From challenge to response</p>
            <h2 className="h2">
              Start with the problem.
              <br />
              Keep the possibilities open.
            </h2>
            <p className="muted">
              These examples illustrate possible approaches. The right response
              depends on what the diagnosis reveals.
            </p>
          </div>
          <div className="principles-list">
            {examples.map(([title, body]) => (
              <div key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--white">
        <div className="container split">
          <div>
            <p className="eyebrow">A connected delivery capability</p>
            <h2 className="h2">Build what the business needs.</h2>
          </div>
          <div>
            <p className="lead">
              Technology &amp; Operations includes dedicated expertise in
              websites and automation. Each is a practical capability, chosen
              for the role it needs to play.
            </p>
            <div className="tag-list">
              <Link href="/services/websites-digital-infrastructure">
                Websites &amp; Digital Infrastructure
                <Arrow size={14} />
              </Link>
              <Link href="/services/ai-automation">
                Automation &amp; Operations
                <Arrow size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FinalCta />
    </PageShell>
  );
}
