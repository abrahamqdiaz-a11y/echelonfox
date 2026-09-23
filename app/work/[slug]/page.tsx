import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/site/PageShell";
import FinalCta from "@/components/site/FinalCta";
import Marked from "@/components/site/Marked";
import Arrow from "@/components/site/Arrow";
import { getCase, publishedCases } from "@/lib/work-data";
import { getCapability } from "@/lib/capabilities";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return publishedCases.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

const plain = (s: string) => s.replace(/==/g, "");

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return {};
  const url = `https://echelonfox.com/work/${c.slug}`;
  const description = `${c.descriptor}. Asked for: ${c.askedFor} Found: ${plain(c.found[0])}`;
  return {
    title: { absolute: `${c.descriptor} — Case study | EchelonFox` },
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${c.descriptor}: ${c.title}`,
      description,
      url,
      type: "article",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: c.title }],
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();

  const index = publishedCases.findIndex((x) => x.slug === c.slug);
  const next = publishedCases[(index + 1) % publishedCases.length];

  const rows: { label: string; content: React.ReactNode }[] = [
    { label: "What they asked for", content: <p style={{ margin: 0 }}>{c.askedFor}</p> },
    {
      label: "What was found",
      content: (
        <ul className="check-list">
          {c.found.map((f) => (
            <li key={f}>
              <Marked text={f} />
            </li>
          ))}
        </ul>
      ),
    },
    {
      label: "What was built",
      content: (
        <ul className="check-list">
          {c.built.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ),
    },
  ];
  if (c.outcome) rows.push({ label: "Outcome", content: <p style={{ margin: 0 }}>{c.outcome}</p> });

  return (
    <PageShell>
      <section className="page-hero" aria-labelledby="case-title">
        <div className="container">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <ol>
              <li>
                <Link href="/work">Work</Link>
              </li>
              <li aria-current="page">Case study</li>
            </ol>
          </nav>
          <p className="label" style={{ marginBottom: "1.25rem" }}>
            {c.descriptor}
          </p>
          <h1 id="case-title" className="h1" style={{ maxWidth: "22ch" }}>
            {c.title}
          </h1>
        </div>
      </section>

      <section className="section section--card" aria-label="The case">
        <div className="container">
          <div className="case-rows">
            {rows.map((r, i) => (
              <div key={r.label} className="case-row">
                <div className="case-row__head">
                  <span className="label">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="case-row__title">{r.label}</h2>
                </div>
                <div style={{ maxWidth: "44rem", fontSize: "1.1rem" }}>{r.content}</div>
              </div>
            ))}
          </div>
          {!c.outcome && (
            <p className="small muted" style={{ marginTop: "1.5rem", maxWidth: "44rem" }}>
              No outcome figures are published for this project. EchelonFox only publishes results that come
              from a client&apos;s own data, with their agreement.
            </p>
          )}
        </div>
      </section>

      {c.takeaway && (
        <section className="band" aria-label="Takeaway">
          <div className="container">
            <p className="label" style={{ marginBottom: "1.25rem" }}>
              The takeaway
            </p>
            <p className="pull" style={{ maxWidth: "56rem" }}>
              {c.takeaway}
            </p>
          </div>
        </section>
      )}

      <section className="section section--tight" aria-labelledby="capabilities-title">
        <div className="container split" style={{ alignItems: "start" }}>
          <div>
            <h2 id="capabilities-title" className="label" style={{ marginBottom: "1rem" }}>
              Capabilities used
            </h2>
            <ul className="tag-list">
              {c.capabilities.map((slug) => {
                const cap = getCapability(slug)!;
                return (
                  <li key={slug}>
                    <Link href={`/services/${slug}`}>{cap.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {next && next.slug !== c.slug && (
            <div>
              <p className="label" style={{ marginBottom: "1rem" }}>
                Next case
              </p>
              <Link href={`/work/${next.slug}`} className="cell-link">
                <span className="small muted">{next.descriptor}</span>
                <span className="serif" style={{ display: "block", fontSize: "1.5rem", lineHeight: 1.25, margin: "0.4rem 0 0.75rem" }}>
                  {next.title}
                </span>
                <span className="arrow-link small">
                  Read it
                  <Arrow size={14} />
                </span>
              </Link>
            </div>
          )}
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
