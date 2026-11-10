import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/site/PageShell";
import FinalCta from "@/components/site/FinalCta";
import Marked from "@/components/site/Marked";
import WeekPattern from "@/components/site/illustrations/WeekPattern";
import Arrow from "@/components/site/Arrow";
import { getCase, publishedCases } from "@/lib/work-data";
import { getCapability } from "@/lib/capabilities";
import { pageMetadata } from "@/lib/metadata";
type Params = { slug: string };
export function generateStaticParams() {
  return publishedCases.map((c) => ({ slug: c.slug }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const c = getCase(slug);
  return c
    ? pageMetadata(`${c.descriptor} — Case Study`, c.context, `/work/${c.slug}`)
    : {};
}
export default async function Case({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();
  const next =
    publishedCases[
      (publishedCases.findIndex((x) => x.slug === slug) + 1) %
        publishedCases.length
    ];
  return (
    <PageShell>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/work">Selected Work</Link>
              </li>
              <li aria-current="page">Case study</li>
            </ol>
          </nav>
          <p className="eyebrow">{c.descriptor}</p>
          <h1 className="h1" style={{ maxWidth: "25ch" }}>
            {c.title}
          </h1>
        </div>
      </section>
      <section className="section section--white">
        <div className="container">
          <div className="case-intro">
            <p className="label">Business context</p>
            <p className="lead">{c.context}</p>
          </div>
          <div className="case-narrative">
            <article>
              <h2>The challenge</h2>
              <div>
                <p>{c.askedFor}</p>
              </div>
            </article>
            <article>
              <h2>The diagnosis</h2>
              <div>
                <ul className="check-list">
                  {c.found.map((f) => (
                    <li key={f}>
                      <Marked text={f} />
                    </li>
                  ))}
                </ul>
                {slug === "beauty-supply-retailer-maryland" && <WeekPattern />}
              </div>
            </article>
            <article>
              <h2>The strategy</h2>
              <div>
                <p>{c.strategy}</p>
              </div>
            </article>
            <article>
              <h2>The implementation</h2>
              <div>
                <ul className="check-list">
                  {c.built.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
            <article>
              <h2>
                {c.outcome
                  ? "The documented outcome"
                  : "Completed improvements"}
              </h2>
              <div>
                <p>
                  {c.outcome ??
                    "The work brought customer analysis, acquisition activity and repeat-purchase workflows into a more connected approach. A staffing recommendation was also made from the sales patterns."}
                </p>
                {!c.outcome && (
                  <p className="small muted">
                    No financial or growth outcome is published for this
                    project.
                  </p>
                )}
              </div>
            </article>
          </div>
        </div>
      </section>
      {c.takeaway && (
        <section className="band">
          <div className="container">
            <p className="label">The perspective</p>
            <p className="pull">{c.takeaway}</p>
          </div>
        </section>
      )}
      <section className="section">
        <div className="container split">
          <div>
            <p className="label">Capabilities used</p>
            <ul className="tag-list">
              {c.capabilities.map((s) => (
                <li key={s}>
                  <Link href={`/services/${s}`}>{getCapability(s)!.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label">Next case study</p>
            <Link href={`/work/${next.slug}`} className="cell-link">
              <h2 className="h3">{next.title}</h2>
              <span className="arrow-link">
                Explore the work
                <Arrow />
              </span>
            </Link>
          </div>
        </div>
      </section>
      <FinalCta label="Discuss a Similar Challenge" />
    </PageShell>
  );
}
