import Link from "next/link";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import FinalCta from "@/components/site/FinalCta";
import Arrow from "@/components/site/Arrow";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "About — Business Thinking, Practical Execution",
  "A founder-led consultancy connecting commercial strategy, sales, marketing, technology and hands-on implementation.",
  "/about",
);
const background = [
  [
    "Enterprise B2B sales",
    "Experience of how buying decisions get made inside companies, and how much depends on what happens after the first conversation.",
  ],
  [
    "Building a company to acquisition",
    "I founded a startup that was acquired by Staples. Building a company through to an acquisition means treating sales, product and operations as one system.",
  ],
  [
    "Hands-on operations",
    "My operational experience includes professional kitchens, where a process has to work under pressure. That perspective carries into how I approach systems and implementation.",
  ],
];
export default function About() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About EchelonFox"
        title="Business thinking. Practical execution."
        lead="A founder-led consultancy for businesses that need a clearer view of what to improve — and someone who can help put it into practice."
      />
      <section className="section section--white">
        <div className="container split">
          <div>
            <p className="eyebrow">The perspective behind the work</p>
            <h2 className="h2">
              Understand the business.
              <br />
              Stay close to the work.
            </h2>
          </div>
          <div>
            <p className="lead">
              I work across commercial strategy, sales, marketing and technology
              because a business challenge rarely stays inside one discipline.
            </p>
            <p className="muted">
              The work starts with how the company makes money: which customers
              matter, what they buy, how they find you and what happens next.
              That picture helps separate an urgent symptom from the underlying
              constraint.
            </p>
            <p className="muted">
              I lead the implementation as well as the thinking. Where a
              specific job needs a specialist, I bring in people I’ve worked
              with and remain accountable for how the work fits together.
            </p>
            <p className="founder-signature">Founder-led. Directly involved.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Experience that shapes the approach</p>
            <h2 className="h2">
              Commercial context.
              <br />
              First-hand understanding.
            </h2>
          </div>
          <div className="background-list">
            {background.map(([title, body], i) => (
              <article key={title}>
                <span className="index">0{i + 1}</span>
                <h3>{title}</h3>
                <p className="muted">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="band">
        <div className="container split">
          <h2 className="h2">
            Strategy is useful when it changes what happens next.
          </h2>
          <div>
            <p className="lead">
              Recommendations need to survive contact with the working day.
            </p>
            <p>
              That means considering the people, capacity and systems involved
              in delivery, alongside the commercial objective. The aim is a
              practical improvement the business can use and build on.
            </p>
            <Link className="arrow-link" href="/our-approach">
              Explore our approach
              <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <FinalCta label="Work With EchelonFox" />
    </PageShell>
  );
}
