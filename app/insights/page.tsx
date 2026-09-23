import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import FinalCta from "@/components/site/FinalCta";
import Arrow from "@/components/site/Arrow";
import { insights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights — Guides on growth, search, and the commercial system",
  description:
    "Practical guides for established companies on search, customer acquisition, follow-up, and growth strategy from EchelonFox.",
  alternates: {
    canonical: "https://echelonfox.com/insights",
  },
  openGraph: {
    title: "Insights — EchelonFox",
    description: "Practical guides on search, customer acquisition, follow-up, and growth strategy.",
    url: "https://echelonfox.com/insights",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "EchelonFox Insights" }],
  },
};

export default function InsightsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Insights"
        title="Notes from the work."
        lead="Practical guides on search, content, and growth for businesses that want marketing to work as part of a system. Some are written for a specific industry; the thinking applies more broadly."
      />

      <section className="section section--card" aria-label="Articles">
        <div className="container">
          <ol className="case-rows" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {insights.map((a) => (
              <li key={a.slug} className="case-row">
                <div className="case-row__head">
                  <span className="label">{a.category}</span>
                  <span className="small muted">
                    <time dateTime={new Date(a.date).toISOString().slice(0, 10)}>{a.date}</time> · {a.readTime}
                  </span>
                </div>
                <div className="stack" style={{ ["--stack" as string]: "0.9rem" }}>
                  <h2 className="h3" style={{ fontSize: "clamp(1.5rem, 1.25rem + 1vw, 2.1rem)" }}>
                    <Link href={`/insights/${a.slug}`} style={{ textDecoration: "none" }}>
                      {a.title}
                    </Link>
                  </h2>
                  <p className="muted" style={{ margin: 0, maxWidth: "44rem" }}>
                    {a.excerpt}
                  </p>
                  <p style={{ margin: 0 }}>
                    <Link href={`/insights/${a.slug}`} className="arrow-link">
                      Read the guide <span className="sr-only">: {a.title}</span>
                      <Arrow />
                    </Link>
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
