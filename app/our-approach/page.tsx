import Image from "next/image";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import Process, { stages } from "@/components/site/Process";
import FinalCta from "@/components/site/FinalCta";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Our Approach — From Business Diagnosis to Implementation",
  "Commercial discovery, solution design and practical implementation across marketing, technology, operations and AI. Understand the EchelonFox Consulting approach.",
  "/our-approach",
);
const details = [
  "Explore your goals, customers, workflows and systems. Identify commercial constraints and prioritise the opportunities worth addressing. Agree a practical starting point and what success should mean.",
  "Define the approach, responsibilities and implementation requirements. The work may involve marketing, sales processes, digital infrastructure, AI or operational change, depending on the diagnosis.",
  "Implement the agreed solution, connect the relevant systems and test the work in practice. Where technology or AI is involved, define permissions, review steps and fallback behaviour.",
  "Help the team use the system, establish ownership and review performance against the agreed criteria. Use feedback and exceptions to improve the workflow and supporting information.",
];
export default function Approach() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Approach"
        title="The right solution starts with the right diagnosis."
        lead="Commercial understanding, thoughtful implementation and practical improvement, connected from the first conversation."
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
            <p className="eyebrow">Designed for the working day</p>
            <h2 className="h2">
              The people using it are part of the solution.
            </h2>
            <p className="lead">
              A system needs to fit real tasks, not just perform well in a
              demonstration.
            </p>
            <p className="muted">
              We consider the team’s capacity, the information available and the
              decisions that need human judgement. Clear handoff, useful
              documentation and a way to review the work help make
              implementation practical.
            </p>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="container split">
          <h2 className="h2">
            A focused starting point.
            <br />
            Room to learn.
          </h2>
          <div>
            <p className="lead">
              Not every opportunity calls for a new system.
            </p>
            <p>
              We scope the work around the questions that need answering. That
              may mean an assessment, a pilot or a defined implementation.
              Evidence from the work informs what should happen next.
            </p>
          </div>
        </div>
      </section>
      <FinalCta />
    </PageShell>
  );
}
