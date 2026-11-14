import Link from "next/link";
import Image from "next/image";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import FinalCta from "@/components/site/FinalCta";
import Arrow from "@/components/site/Arrow";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "About — A Revenue Operations Consultancy",
  "EchelonFox is a revenue operations consultancy. We run marketing, sales and customer retention as one system for established B2B companies.",
  "/about",
);
const deliveryPrinciples = [
  [
    "Measure before we fix",
    "Every engagement starts with the Revenue Leak Diagnostic. You see the leaks in dollars before you commit to anything else.",
  ],
  [
    "Fix what is worth the most",
    "The Build tackles the top one or two leaks, ranked by value. Fixed scope, six to eight weeks.",
  ],
  [
    "Report one number",
    "Once a system is running, we report one revenue number every week against the starting baseline. You can see whether it is working.",
  ],
];

export default function About() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About EchelonFox"
        title="We find the revenue a business already earned and lost."
        lead="EchelonFox is a revenue operations consultancy. We run marketing, sales and customer retention as one system for established B2B companies, so revenue stops leaking out between them."
      />
      <section className="section section--white">
        <div className="container split">
          <div>
            <p className="eyebrow">Why revenue operations</p>
            <h2 className="h2">
              The leaks sit
              <br />
              between the teams.
            </h2>
          </div>
          <div>
            <p className="lead">
              Marketing brings in an enquiry. Sales sends a quote. Someone else
              looks after the account.
            </p>
            <p className="muted">
              When nobody owns the system that connects them, revenue falls
              through the gaps. A quote goes unanswered. A regular customer stops
              ordering. Spend goes out with no line back to sales.
            </p>
            <p className="muted">
              We take ownership of that system. We measure what the gaps cost in
              dollars, fix the biggest ones and keep them fixed.
            </p>
            <p className="delivery-note">
              Public prices. Fixed scope. One number, reported weekly.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">How we deliver</p>
            <h2 className="h2">
              Measure it.
              <br />
              Fix it. Report it.
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
            <h2 className="h2">People in the loop.</h2>
            <p className="lead">
              Systems should help people sell, not replace their judgement.
            </p>
            <p>
              Every workflow has a named owner. Anything that reaches a customer
              is reviewed by a person first. We use AI where it makes the work
              faster, never as a substitute for that review.
            </p>
            <Link className="arrow-link" href="/our-approach">
              Our approach
              <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <FinalCta />
    </PageShell>
  );
}
