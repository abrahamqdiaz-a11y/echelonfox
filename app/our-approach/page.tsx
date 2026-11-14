import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import Process, { stages } from "@/components/site/Process";
import FinalCta from "@/components/site/FinalCta";
import Arrow from "@/components/site/Arrow";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Our Approach — Diagnose, Design, Build, Improve",
  "How EchelonFox measures where revenue is leaking, agrees the fix, builds it and keeps it fixed. Four steps, mapped to the Diagnostic, Build, Run and Embedded Growth Team.",
  "/our-approach",
);
const details = [
  "Over two weeks we review your enquiries, quotes, order history and CRM, and how marketing spend is tracked. Each leak gets a dollar figure. You receive a ranked list and a recommended next step.",
  "We take the top one or two leaks and agree the fix: the workflow, who owns each step, what the CRM needs to do and what gets reported. We agree the starting baseline and the one number we will report against it.",
  "We build and test the workflow, CRM setup, follow-up and reporting with the people who will use them. Training is included, and we fix anything that breaks in the first 30 days.",
  "We run the system, make a fixed number of changes each month and report one revenue number every week against the baseline. When the number shows a new problem, it becomes the next priority.",
];
export default function Approach() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Approach"
        title="Measure the leak. Fix it. Keep it fixed."
        lead="Diagnose, Design, Build, Improve. The same four steps, whichever path you take after the Diagnostic."
      />
      <section className="section section--white">
        <div className="container">
          <Process />
        </div>
      </section>
      <section className="section">
        <div className="container approach-detail">
          {stages.map((stage, i) => (
            <article key={stage.name}>
              <span className="approach-number">0{i + 1}</span>
              <div>
                <p className="eyebrow">{stage.name}</p>
                <h2 className="h3">{stage.title}</h2>
                <p className="label">{stage.offer}</p>
              </div>
              <p className="lead muted">{details[i]}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section section--white">
        <div className="container human-split">
          <div className="editorial-photo">
            <Image
              src="/images/consultancy/workflow-review.webp"
              alt="Illustrative close-up of people reviewing a laptop screen together"
              width={1100}
              height={733}
              sizes="(max-width: 760px) 100vw, 45vw"
            />
          </div>
          <div>
            <p className="eyebrow">People in the loop</p>
            <h2 className="h2">
              The people using it are part of the system.
            </h2>
            <p className="lead">
              A system has to fit the working day, not just look good in a
              demonstration.
            </p>
            <p className="muted">
              Every step has a named owner. Anything that reaches a customer is
              reviewed by a person first. We use AI to build and run systems
              faster, but a person decides what goes out.
            </p>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="container split">
          <h2 className="h2">
            A fixed starting point.
            <br />
            Public prices.
          </h2>
          <div>
            <p className="lead">
              Every engagement starts with the Revenue Leak Diagnostic: two
              weeks, from $2,000.
            </p>
            <p>
              The fee is credited to a Build signed within 30 days. After that,
              you choose Build, then Run, or the Embedded Growth Team.
            </p>
            <Link className="arrow-link" href="/what-we-do">
              See the offers and prices
              <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <FinalCta />
    </PageShell>
  );
}
