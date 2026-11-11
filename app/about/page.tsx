import Link from "next/link";
import Image from "next/image";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import FinalCta from "@/components/site/FinalCta";
import Arrow from "@/components/site/Arrow";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "About — Business Strategy, Technology & Execution",
  "EchelonFox Consulting connects business strategy, technology and execution to address commercial constraints and implement practical improvements.",
  "/about",
);
const deliveryPrinciples = [
  [
    "Commercial priorities",
    "We assess the business objective, the workflow and the potential value before recommending an AI application. Clear priorities guide the scope.",
  ],
  [
    "Connected implementation",
    "We design around the systems and information the business uses, with clear responsibilities, integration requirements and human oversight.",
  ],
  [
    "Practical adoption",
    "We test representative tasks, document how the solution works and help establish the ownership and review needed for day-to-day use.",
  ],
];

export default function About() {
  return (
    <PageShell>
      <PageHero
        eyebrow="EchelonFox Consulting"
        title="Business Strategy. Technology. Execution."
        lead="A boutique business and technology consultancy that identifies commercial constraints and implements practical improvements across marketing, technology and operations."
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
              We connect commercial understanding with strategy and
              implementation. Our approach starts with the business, identifies
              the priorities and carries the work through to practical delivery.
            </p>
            <p className="muted">
              The work starts with how the company makes money: which customers
              matter, what they buy, how they find you and what happens next.
              That picture helps establish where AI may be valuable and where a
              simpler process change is the better answer.
            </p>
            <p className="muted">
              We define scope, responsibilities and success criteria before
              implementation. From solution design through testing and handover,
              we keep the work connected to the business objective.
            </p>
            <p className="delivery-note">Clear scope. Accountable delivery.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">How we deliver</p>
            <h2 className="h2">
              Commercial understanding.
              <br />
              Disciplined implementation.
            </h2>
          </div>
          <div className="background-list">
            {deliveryPrinciples.map(([title, body], i) => (
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
        <div className="container human-split">
          <div className="editorial-photo">
            <Image
              src="/images/consultancy/collaborative-learning.webp"
              alt="Illustrative photograph of a small group sharing ideas around laptops"
              width={1100}
              height={733}
              sizes="(max-width: 760px) 100vw, 45vw"
            />
          </div>
          <div>
            <h2 className="h2">
              Strategy is useful when it changes what happens next.
            </h2>
            <p className="lead">
              Recommendations need to survive contact with the working day.
            </p>
            <p>
              That means considering the people, capacity and systems involved
              in delivery, alongside the commercial objective. For AI, it also
              means defining what a person reviews, where information comes from
              and who owns the system after launch.
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
