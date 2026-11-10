import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import Process, { stages } from "@/components/site/Process";
import FinalCta from "@/components/site/FinalCta";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Our Approach — Diagnose, Design, Build, Improve",
  "Understand the business, prioritise the right work and implement practical improvements through our Diagnose, Design, Build, Improve approach.",
  "/our-approach",
);
const detail = [
  "We explore how the business makes money, where demand comes from, what happens after an enquiry and how the work is delivered. Existing data, systems and team experience help form the picture.",
  "We weigh potential improvements against commercial relevance, effort and the capacity to implement them. The plan makes the sequence clear and connects the work to the business objective.",
  "We carry the plan into execution. That may mean a campaign, website, CRM workflow, integration or a change to an operational process. The solution follows the diagnosis.",
  "We review the available evidence and the experience of the people using the systems. Where useful, we adjust the process, resolve friction and identify the next priority.",
];
export default function Approach() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Approach"
        title="The right solution starts with the right diagnosis."
        lead="A clear understanding of the business connects every decision, from the first conversation to the systems we build."
      />
      <section className="section section--white">
        <div className="container">
          <Process />
        </div>
      </section>
      <section className="section">
        <div className="container approach-detail">
          {stages.map((s, i) => (
            <article key={s.name}>
              <span className="approach-number">0{i + 1}</span>
              <div>
                <p className="eyebrow">{s.name}</p>
                <h2 className="h3">{s.title}</h2>
              </div>
              <p className="lead muted">{detail[i]}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="band">
        <div className="container split">
          <h2 className="h2">
            A consistent approach.
            <br />A different scope for every business.
          </h2>
          <div>
            <p className="lead">Not every client needs every capability.</p>
            <p>
              Some engagements begin with a focused commercial question. Others
              connect several parts of the business. We agree the work around
              the priorities, rather than fitting the business into a fixed
              package.
            </p>
          </div>
        </div>
      </section>
      <FinalCta label="Start a Conversation" />
    </PageShell>
  );
}
