import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/site/PageShell";
import FinalCta from "@/components/site/FinalCta";
import Arrow from "@/components/site/Arrow";
import OfferLadder from "@/components/site/OfferLadder";
import SectionIntro from "@/components/site/SectionIntro";
import ServiceSchema from "@/components/site/ServiceSchema";
import { getIndustry, industries } from "@/lib/industries";
import { getCase } from "@/lib/work-data";
import { offerList } from "@/lib/offers";
import { pageMetadata } from "@/lib/metadata";

type Params = { slug: string };
export const dynamicParams = false;
export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  return ind
    ? pageMetadata(ind.metaTitle, ind.metaDescription, `/industries/${slug}`)
    : {};
}

/**
 * Reusable industry page. Content lives in lib/industries.ts; the offers and
 * prices are the same on every industry page.
 */
export default async function IndustryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) notFound();
  const related = ind.caseSlug ? getCase(ind.caseSlug) : undefined;
  return (
    <PageShell>
      <ServiceSchema
        name={`Revenue operations for ${ind.name.toLowerCase()}`}
        description={ind.metaDescription}
        path={`/industries/${slug}`}
        offers={offerList}
      />
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li aria-current="page">Industries</li>
            </ol>
          </nav>
          <p className="eyebrow">{ind.name}</p>
          <h1 className="h1" style={{ maxWidth: "22ch" }}>
            {ind.heroTitle}
          </h1>
          <p className="lead">{ind.heroLead}</p>
        </div>
      </section>
      <section className="section section--white">
        <div className="container">
          <SectionIntro
            eyebrow="The most expensive leaks"
            title="Three places the revenue goes."
          />
          <div className="scope-grid">
            {ind.leaks.map((l, i) => (
              <div key={l.title}>
                <span className="index">0{i + 1}</span>
                <h3>{l.title}</h3>
                <p className="muted">{l.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">What the Diagnostic measures</p>
            <h2 className="h2">Each leak, in dollars.</h2>
            <p className="body muted">{ind.diagnosticIntro}</p>
          </div>
          <ul className="ruled-list">
            {ind.measures.map((m) => (
              <li key={m.title}>
                <h3>{m.title}</h3>
                <p className="muted">{m.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section section--white">
        <div className="container split">
          <div>
            <p className="eyebrow">What a typical Build includes</p>
            <h2 className="h2">Fix the top one or two.</h2>
            <p className="body muted">
              The Diagnostic ranks the leaks. The Build fixes the top one or two
              in six to eight weeks, for a fixed scope. These are the pieces it
              usually involves.
            </p>
          </div>
          <ul className="check-list">
            {ind.build.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="What it costs"
            title="The same offers and prices, whatever your industry."
          />
          <OfferLadder />
        </div>
      </section>
      {related && (
        <section className="section section--white">
          <div className="container">
            <SectionIntro eyebrow="In practice" title="A related case study." />
            <div className="related-work">
              <Link href={`/work/${related.slug}`}>
                <span className="label">{related.descriptor}</span>
                <h3>{related.revenueProblem}</h3>
                <span className="arrow-link">
                  Read the case study
                  <Arrow />
                </span>
              </Link>
            </div>
          </div>
        </section>
      )}
      <FinalCta />
    </PageShell>
  );
}
