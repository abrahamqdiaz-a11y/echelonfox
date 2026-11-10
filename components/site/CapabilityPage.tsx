import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "./PageShell";
import FinalCta from "./FinalCta";
import Arrow from "./Arrow";
import { coreCapabilities, getCapability } from "@/lib/capabilities";
import { getCase } from "@/lib/work-data";
import { SITE } from "@/lib/site";

export default function CapabilityPage({ slug }: { slug: string }) {
  const c = getCapability(slug);
  if (!c) notFound();
  const related = c.cases.map(getCase).filter((x) => x !== undefined);
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: c.name,
            description: c.metaDescription,
            url: `${SITE.url}/services/${c.slug}`,
            provider: {
              "@type": "Organization",
              name: SITE.name,
              url: SITE.url,
            },
            areaServed: { "@type": "Country", name: "United States" },
          }),
        }}
      />
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/services">What We Do</Link>
              </li>
              <li aria-current="page">{c.short}</li>
            </ol>
          </nav>
          <div className="capability-hero">
            <div>
              <p className="eyebrow">{c.name}</p>
              <h1 className="h1">{c.headline}</h1>
            </div>
            <div className="capability-hero__aside">
              <p className="lead">{c.summary}</p>
              <Link href="/contact" className="arrow-link">
                {c.cta}
                <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--white">
        <div className="container split">
          <div>
            <p className="eyebrow">The business challenge</p>
            <h2 className="h2">Start with what needs to work better.</h2>
            <p className="body muted">{c.intro}</p>
          </div>
          <div>
            <p className="label">You might recognise this</p>
            <ul className="symptoms">
              {c.signs.map((sign, i) => (
                <li key={sign}>
                  <span className="index">0{i + 1}</span>
                  <span>{sign}</span>
                </li>
              ))}
            </ul>
            <p className="small muted">
              These are possible signals. Understanding the cause comes first.
            </p>
          </div>
        </div>
      </section>
      {slug === "sales-process-crm" && (
        <section className="section">
          <div className="container">
            <p className="eyebrow">The journey after contact</p>
            <h2 className="h2">A clear next step at every stage.</h2>
            <ol className="enquiry-flow">
              {[
                "Enquiry",
                "Capture",
                "Assign",
                "Respond",
                "Follow up",
                "Customer",
              ].map((s, i) => (
                <li key={s}>
                  <span className="label">0{i + 1}</span>
                  <strong>{s}</strong>
                  <Arrow />
                </li>
              ))}
            </ol>
            <p className="small muted">
              An illustrative journey. Stages and responsibilities are adapted
              to your business.
            </p>
          </div>
        </section>
      )}
      {slug === "websites-digital-infrastructure" && (
        <section className="website-band">
          <div className="container split">
            <div>
              <p className="eyebrow">From first impression to next step</p>
              <h2 className="h2">
                Designed for the customer.
                <br />
                Connected to the business.
              </h2>
            </div>
            <div className="website-blueprint">
              <div className="browser-chrome" aria-hidden="true">
                <i />
                <i />
                <i />
                <span>Your digital infrastructure</span>
              </div>
              <ol>
                <li>
                  <span>01 / Experience</span>
                  <strong>Understand the offer</strong>
                </li>
                <li>
                  <span>02 / Action</span>
                  <strong>Enquire, book or buy</strong>
                </li>
                <li>
                  <span>03 / Connection</span>
                  <strong>Reach the right system</strong>
                </li>
              </ol>
            </div>
          </div>
        </section>
      )}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What the work can include</p>
            <h2 className="h2">
              Practical capabilities.
              <br />A considered scope.
            </h2>
          </div>
          <div className="scope-grid">
            {c.includes.map((group, i) => (
              <div key={group.heading}>
                <span className="index">0{i + 1}</span>
                <h3>{group.heading}</h3>
                <ul className="check-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--white">
        <div className="container split">
          <div>
            <p className="eyebrow">How it connects</p>
            <h2 className="h2">Part of a wider picture.</h2>
          </div>
          <div>
            <p className="lead">{c.connects}</p>
            <Link href="/our-approach" className="arrow-link">
              Explore our approach
              <Arrow />
            </Link>
          </div>
        </div>
        {slug === "technology-operations" && (
          <div className="container infrastructure-links">
            {["ai-automation", "websites-digital-infrastructure"].map((s) => {
              const child = getCapability(s)!;
              return (
                <Link key={s} href={`/services/${s}`}>
                  <span className="label">Explore the capability</span>
                  <h3>{child.name}</h3>
                  <p>{child.summary}</p>
                  <span className="arrow-link">
                    Explore
                    <Arrow />
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </section>
      {slug === "ai-automation" && (
        <section className="section">
          <div className="container split">
            <div>
              <p className="eyebrow">Keep judgement in the loop</p>
              <h2 className="h2">Useful automation needs clear boundaries.</h2>
            </div>
            <ul className="ruled-list">
              <li>
                <h3>A process worth repeating</h3>
                <p className="muted">
                  Clarify inputs, ownership and the desired outcome before
                  connecting tools.
                </p>
              </li>
              <li>
                <h3>A person to hand over to</h3>
                <p className="muted">
                  Define where automation stops and a team member takes
                  responsibility.
                </p>
              </li>
              <li>
                <h3>A way to review the work</h3>
                <p className="muted">
                  Make exceptions visible and check that the workflow continues
                  to serve the business.
                </p>
              </li>
            </ul>
          </div>
        </section>
      )}
      {related.length > 0 && (
        <section className="section section--white">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">In practice</p>
              <h2 className="h2">Connected thinking, applied.</h2>
            </div>
            <div className="related-work">
              {related.map((item) => (
                <Link href={`/work/${item.slug}`} key={item.slug}>
                  <span className="label">{item.descriptor}</span>
                  <h3>{item.title}</h3>
                  <span className="arrow-link">
                    Read the case study
                    <Arrow />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="section section--tight">
        <div className="container">
          <p className="label">Connected capabilities</p>
          <div className="tag-list">
            {coreCapabilities
              .filter((other) => other.slug !== slug)
              .map((other) => (
                <Link key={other.slug} href={`/services/${other.slug}`}>
                  {other.name}
                  <Arrow size={14} />
                </Link>
              ))}
          </div>
        </div>
      </section>
      <FinalCta label={c.cta} />
    </PageShell>
  );
}
