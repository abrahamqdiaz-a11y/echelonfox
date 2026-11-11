import Link from "next/link";
import Image from "next/image";
import PageShell from "@/components/site/PageShell";
import Arrow from "@/components/site/Arrow";
import FinalCta from "@/components/site/FinalCta";
import Process from "@/components/site/Process";
import PeoplePanels from "@/components/site/PeoplePanels";
import SectionIntro from "@/components/site/SectionIntro";
import { coreCapabilities } from "@/lib/capabilities";
import { publishedCases } from "@/lib/work-data";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "AI Strategy & Implementation Consultancy",
  SITE.description,
  "",
);
const applications = [
  {
    area: "Sales & customer service",
    title: "Give every enquiry a useful next step.",
    body: "Summarise an enquiry, prepare a response and route it to the right person, with review before anything is sent.",
    steps: ["Enquiry", "AI-assisted draft", "Human review"],
  },
  {
    area: "Knowledge & internal work",
    title: "Find the answer. Keep the source.",
    body: "Help people find approved information across business documents, with source references and a clear fallback when an answer is uncertain.",
    steps: ["Question", "Approved knowledge", "Source-backed answer"],
  },
  {
    area: "Operations & administration",
    title: "Move information without the repeated admin.",
    body: "Extract details from documents, prepare records and connect tools, with checks and approval at the points that need judgement.",
    steps: ["Document", "Extract & check", "Approved update"],
  },
];
export default function Home() {
  return (
    <PageShell>
      <form
        name="contact"
        data-netlify="true"
        netlify-honeypot="bot-field"
        method="POST"
        hidden
      >
        <input type="hidden" name="form-name" value="contact" />
        <input name="bot-field" type="text" />
        <input name="name" type="text" />
        <input name="email" type="email" />
        <input name="company" type="text" />
        <input name="website" type="text" />
        <textarea name="message" />
        <input name="consent" type="checkbox" />
      </form>
      <section className="home-hero ai-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">AI Strategy &amp; Implementation</p>
            <h1 className="display">
              Practical AI.
              <br />
              <span>
                Built around
                <br />
                your business.
              </span>
            </h1>
            <p className="lead">{SITE.description}</p>
            <div className="actions">
              <Link className="btn" href="/contact">
                Discuss Your AI Opportunities
                <Arrow />
              </Link>
              <Link className="arrow-link" href="/services">
                Explore AI Services
                <Arrow />
              </Link>
            </div>
          </div>
          <PeoplePanels />
        </div>
        <div className="container hero-foot">
          <span>AI consultancy. Strategy through implementation.</span>
          <span>Diagnose / Design / Build / Improve</span>
        </div>
      </section>
      <section className="section section--white">
        <div className="container split">
          <div>
            <p className="eyebrow">The business comes first</p>
            <h2 className="h2">
              AI is an opportunity.
              <br />A useful application is a decision.
            </h2>
          </div>
          <div className="statement-copy">
            <p className="lead">
              Start with the work that needs to improve. Then decide where AI
              belongs.
            </p>
            <p className="muted">
              We look at your goals, workflows, people and existing systems
              before recommending a tool. That commercial picture helps identify
              where an assistant, an integration or an automated workflow could
              be useful.
            </p>
            <p className="muted">
              Sometimes a simpler process is the better answer. Where AI makes
              sense, we connect the strategy with practical implementation.
            </p>
          </div>
        </div>
      </section>
      <section className="section capabilities-section">
        <div className="container">
          <div className="split section-head">
            <div>
              <p className="eyebrow">AI services</p>
              <h2 className="h2">
                From the right question
                <br />
                to a working solution.
              </h2>
            </div>
            <p className="lead muted">
              One connected approach: establish the opportunity, build with
              purpose and help people put it to use.
            </p>
          </div>
          <div className="capability-rows">
            {coreCapabilities.map((c, i) => (
              <Link key={c.slug} href={`/services/${c.slug}`}>
                <span className="index">0{i + 1}</span>
                <h3>{c.name}</h3>
                <p>{c.summary}</p>
                <Arrow />
              </Link>
            ))}
          </div>
          <Link className="arrow-link" href="/services">
            Explore our AI capabilities
            <Arrow />
          </Link>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Where AI can help"
            title="Real tasks. A clear role for AI."
            body="Illustrative applications across the business. We assess suitability, data access and oversight before defining the solution."
          />
          <div className="application-list">
            {applications.map((a, i) => (
              <article key={a.area}>
                <div>
                  <span className="index">0{i + 1}</span>
                  <p className="label">{a.area}</p>
                  <h3>{a.title}</h3>
                </div>
                <div>
                  <p className="muted">{a.body}</p>
                  <ol className="application-flow">
                    {a.steps.map((step, j) => (
                      <li key={step}>
                        <span>{step}</span>
                        {j < 2 && <Arrow size={14} />}
                      </li>
                    ))}
                  </ol>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--white">
        <div className="container">
          <SectionIntro
            eyebrow="Our approach"
            title="Understand. Build. Put it to work."
            body="We connect commercial priorities with the data, systems and people involved in implementation. The scope follows the problem."
          />
          <Process compact />
          <Link href="/our-approach" className="arrow-link">
            How we work
            <Arrow />
          </Link>
        </div>
      </section>
      <section className="section human-section">
        <div className="container human-split">
          <div className="editorial-photo">
            <Image
              src="/images/consultancy/business-conversation.webp"
              alt="Illustrative photograph of two people discussing work across a table"
              width={1100}
              height={733}
              sizes="(max-width: 760px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="eyebrow">A consultancy that implements</p>
            <h2 className="h2">
              Commercial judgement.
              <br />
              Technical execution.
              <br />
              People in the loop.
            </h2>
            <p className="lead">
              AI strategy, technical delivery and adoption, connected in one
              considered approach.
            </p>
            <p className="muted">
              We bring business understanding to AI decisions, define the work
              clearly and stay close to how the solution is used. Ownership,
              handoff and human review are part of the design.
            </p>
            <Link href="/about" className="arrow-link">
              About EchelonFox
              <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <section className="section section--white">
        <div className="container">
          <div className="work-heading">
            <SectionIntro
              eyebrow="Selected business systems work"
              title="The business thinking behind the build."
              body="Existing work in commercial analysis, websites and enquiry systems. These projects show our approach to business problems; they are not presented as AI implementations."
            />
            <Link className="arrow-link" href="/work">
              View selected work
              <Arrow />
            </Link>
          </div>
          <div className="work-grid">
            {publishedCases.map((c, i) => (
              <article className="work-preview" key={c.slug}>
                <Link href={`/work/${c.slug}`}>
                  <div
                    className={`case-visual case-visual--${i + 1}`}
                    aria-hidden="true"
                  >
                    <span className="case-visual__number">0{i + 1}</span>
                    <div className="case-visual__lines">
                      <span>Business systems work</span>
                      <b>{["Understand", "Enquire", "Connect"][i]}</b>
                      <span>Strategy into practice</span>
                    </div>
                  </div>
                  <p className="label">{c.descriptor}</p>
                  <h3>{c.title}</h3>
                  <span className="arrow-link">
                    Explore the work
                    <Arrow />
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FinalCta title="Where could AI make a difference in your business?" />
    </PageShell>
  );
}
