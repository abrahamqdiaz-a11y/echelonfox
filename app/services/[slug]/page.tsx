import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/site/illustrations/Icon";
import { notFound } from "next/navigation";
import PageShell from "@/components/site/PageShell";
import FinalCta from "@/components/site/FinalCta";
import Arrow from "@/components/site/Arrow";
import { capabilities, getCapability } from "@/lib/capabilities";
import { getCase } from "@/lib/work-data";

type Params = { slug: string };

// "ai-automation" has its own page (app/services/ai-automation), because it carries an FAQ and its own process.
export function generateStaticParams(): Params[] {
  return capabilities.filter((c) => c.slug !== "ai-automation").map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCapability(slug);
  if (!c) return {};
  const url = `https://echelonfox.com/services/${c.slug}`;
  return {
    title: { absolute: `${c.metaTitle} | EchelonFox` },
    description: c.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${c.metaTitle} — EchelonFox`,
      description: c.metaDescription,
      url,
      type: "website",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${c.name} — EchelonFox` }],
    },
  };
}

export default async function CapabilityPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const c = getCapability(slug);
  if (!c || c.slug === "ai-automation") notFound();

  const related = c.cases.map(getCase).filter((x) => x !== undefined);
  const others = capabilities.filter((x) => x.slug !== c.slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: c.name,
    provider: { "@type": "Organization", name: "EchelonFox", url: "https://echelonfox.com" },
    url: `https://echelonfox.com/services/${c.slug}`,
    description: c.metaDescription,
    areaServed: { "@type": "Country", name: "United States" },
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="page-hero" aria-labelledby="cap-title">
        <div className="container">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <ol>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li aria-current="page">{c.short}</li>
            </ol>
          </nav>
          <Icon name={c.slug} size="lg" />
          <h1 id="cap-title" className="h1" style={{ maxWidth: "18ch" }}>
            {c.name}
          </h1>
          <p className="lead" style={{ marginTop: "1.75rem" }}>
            {c.summary}
          </p>
        </div>
      </section>

      <section className="section section--card" aria-labelledby="signs-title">
        <div className="container split">
          <div className="stack">
            <p className="eyebrow">When this is the constraint</p>
            <h2 id="signs-title" className="h2">
              Signs this is where growth is stuck.
            </h2>
            <p className="body muted">
              These are symptoms, not a diagnosis. The same symptom can come from different causes, which is why
              the work starts by reading the business as a whole.
            </p>
          </div>
          <ul className="symptoms" style={{ gridTemplateColumns: "1fr" }}>
            {c.signs.map((s, i) => (
              <li key={s}>
                <span className="label" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="includes-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What the work can include</p>
            <h2 id="includes-title" className="h2">
              Chosen to fit the diagnosis, not sold as a bundle.
            </h2>
          </div>
          <div className="grid-3">
            {c.includes.map((group) => (
              <div key={group.heading}>
                <h3 className="cell-title" style={{ marginTop: 0, marginBottom: "1.1rem" }}>
                  {group.heading}
                </h3>
                <ul className="check-list small">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="section section--card" aria-labelledby="connects-title">
        <div className="container split">
          <div className="stack">
            <p className="eyebrow">How it connects</p>
            <h2 id="connects-title" className="h3" style={{ fontSize: "clamp(1.5rem, 1.25rem + 1vw, 2.1rem)", lineHeight: 1.25 }}>
              {c.connects}
            </h2>
          </div>
          <ul className="ruled-list" style={{ borderTopColor: "var(--ink)" }}>
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/services/${o.slug}`} className="arrow-link" style={{ borderBottom: 0 }}>
                  {o.name}
                  <Arrow size={14} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section" aria-labelledby="related-title">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">In practice</p>
              <h2 id="related-title" className="h2">
                Where this was part of the answer.
              </h2>
            </div>
            <div className={related.length > 1 ? "grid-3" : "grid-2"}>
              {related.map((r) => (
                <Link key={r.slug} href={`/work/${r.slug}`} className="cell-link">
                  <p className="label">{r.descriptor}</p>
                  <h3 className="cell-title">{r.title}</h3>
                  <span className="arrow-link small">
                    Read the case study <span className="sr-only">: {r.descriptor}</span>
                    <Arrow size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCta />
    </PageShell>
  );
}
