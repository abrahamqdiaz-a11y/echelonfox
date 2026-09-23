import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import FinalCta from "@/components/site/FinalCta";
import Arrow from "@/components/site/Arrow";
import Icon from "@/components/site/illustrations/Icon";
import { capabilities } from "@/lib/capabilities";

const TITLE = "Services — Four capabilities beneath the strategy";
const DESCRIPTION =
  "Commercial diagnosis and positioning; customer acquisition and conversion; sales process, CRM, and follow-up; and practical AI and automation — used in whatever combination the diagnosis calls for.";

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | EchelonFox` },
  description: DESCRIPTION,
  alternates: { canonical: "https://echelonfox.com/services" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://echelonfox.com/services",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Services — EchelonFox" }],
  },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="Four capabilities, in service of the diagnosis."
        lead="The work is organised in four groups. They sit beneath the strategy: the diagnosis decides which ones a company needs, and in what order. Most engagements use two or three."
      />

      <section className="section section--card" aria-label="Capabilities">
        <div className="container">
          <div className="case-rows">
            {capabilities.map((c, i) => (
              <article key={c.slug} className="case-row" aria-labelledby={`cap-${c.slug}`}>
                <div className="case-row__head">
                  <Icon name={c.slug} size="lg" />
                  <span className="label">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="split split--even" style={{ gap: "1.5rem 3rem" }}>
                  <div className="stack" style={{ ["--stack" as string]: "1rem" }}>
                    <h2 id={`cap-${c.slug}`} className="h3" style={{ fontSize: "clamp(1.6rem, 1.3rem + 1vw, 2.2rem)" }}>
                      <Link href={`/services/${c.slug}`} style={{ textDecoration: "none" }}>
                        {c.name}
                      </Link>
                    </h2>
                    <p className="muted" style={{ margin: 0 }}>
                      {c.summary}
                    </p>
                    <p style={{ margin: 0 }}>
                      <Link href={`/services/${c.slug}`} className="arrow-link">
                        Read more <span className="sr-only">about {c.name.toLowerCase()}</span>
                        <Arrow />
                      </Link>
                    </p>
                  </div>
                  <div>
                    <p className="label" style={{ marginBottom: "0.75rem" }}>
                      Usually the constraint when
                    </p>
                    <ul className="check-list small">
                      {c.signs.slice(0, 3).map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
