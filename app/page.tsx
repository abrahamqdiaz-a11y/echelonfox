import Link from "next/link";
import PageShell from "@/components/site/PageShell";
import Arrow from "@/components/site/Arrow";
import FinalCta from "@/components/site/FinalCta";
import Process from "@/components/site/Process";
import SystemDiagram from "@/components/site/SystemDiagram";
import SectionIntro from "@/components/site/SectionIntro";
import { coreCapabilities } from "@/lib/capabilities";
import { publishedCases } from "@/lib/work-data";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Growth Strategy & Business Systems Consultancy",
  SITE.description,
  "",
);
const challenges = [
  [
    "Visibility & demand",
    "The right customers aren’t finding you.",
    "Look at positioning, market visibility and the channels that can create relevant demand.",
  ],
  [
    "Sales & conversion",
    "Interest isn’t becoming business.",
    "Understand what happens between first contact, follow-up and a customer’s decision.",
  ],
  [
    "Operations & capacity",
    "Growth is creating more friction.",
    "Review handoffs, manual work and the capacity needed to deliver consistently.",
  ],
  [
    "Direction & priorities",
    "There are too many possible next steps.",
    "Identify the constraint and choose the improvements worth prioritising now.",
  ],
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
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Growth Strategy &amp; Business Systems</p>
            <h1 className="display">
              Find what’s holding your business back.
              <br />
              <span>Build what moves it forward.</span>
            </h1>
            <p className="lead">{SITE.description}</p>
            <div className="actions">
              <Link className="btn" href="/contact">
                Discuss Your Business
                <Arrow />
              </Link>
              <Link className="arrow-link" href="/our-approach">
                Explore Our Approach
                <Arrow />
              </Link>
            </div>
          </div>
          <SystemDiagram />
        </div>
        <div className="container hero-foot">
          <span>Commercial thinking. Hands-on execution.</span>
          <span>Diagnose / Design / Build / Improve</span>
        </div>
      </section>
      <section className="section section--white">
        <div className="container split">
          <div>
            <p className="eyebrow">Why growth stalls</p>
            <h2 className="h2">
              A business is connected.
              <br />
              Its problems are too.
            </h2>
          </div>
          <div className="statement-copy">
            <p className="lead">
              A visibility problem can look like a sales problem. A capacity
              constraint can limit the value of more demand.
            </p>
            <p className="muted">
              Marketing, sales, technology and operations affect one another.
              Improving one part without understanding the others can leave the
              real constraint untouched.
            </p>
            <p className="muted">
              Some businesses need stronger acquisition. Others need clearer
              positioning, a better conversion process or more effective
              operations. We start by finding out which.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="The problems we solve"
            title="Find the point where progress gets stuck."
            body="Different symptoms call for different responses. These are starting points for a conversation, not a diagnosis."
          />
          <div className="challenge-grid">
            {challenges.map(([label, title, body], i) => (
              <article key={label}>
                <div className="challenge-top">
                  <span className="index">0{i + 1}</span>
                  <span className="label">{label}</span>
                </div>
                <h3>{title}</h3>
                <p className="muted">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section capabilities-section">
        <div className="container">
          <div className="split section-head">
            <div>
              <p className="eyebrow">Our connected capabilities</p>
              <h2 className="h2">
                The right combination.
                <br />
                For the right challenge.
              </h2>
            </div>
            <p className="lead muted">
              Strategy sets the priorities. Marketing, sales systems and
              technology help put them into practice.
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
            Explore what we do
            <Arrow />
          </Link>
        </div>
      </section>
      <section className="section section--white">
        <div className="container">
          <SectionIntro
            eyebrow="Our approach"
            title="Understand first. Then move forward."
            body="Four stages connect a clearer commercial picture with practical improvements. The scope follows the business, not a fixed set of services."
          />
          <Process compact />
          <Link href="/our-approach" className="arrow-link">
            How we work
            <Arrow />
          </Link>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="work-heading">
            <SectionIntro
              eyebrow="Selected work"
              title="Business challenges. Practical solutions."
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
                      {i === 0 ? (
                        <>
                          <span>Customer patterns</span>
                          <b>Understand</b>
                          <span>Commercial priorities</span>
                        </>
                      ) : i === 1 ? (
                        <>
                          <span>Search &amp; referral</span>
                          <b>Enquire</b>
                          <span>A clear quote request</span>
                        </>
                      ) : (
                        <>
                          <span>Scattered enquiries</span>
                          <b>Connect</b>
                          <span>One place to respond</span>
                        </>
                      )}
                    </div>
                    <span className="label">Strategy into practice</span>
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
      <section className="section section--white">
        <div className="container split">
          <div>
            <p className="eyebrow">Why EchelonFox</p>
            <h2 className="h2">
              Business thinking.
              <br />
              Practical execution.
            </h2>
            <Link href="/about" className="arrow-link">
              Meet the approach behind the work
              <Arrow />
            </Link>
          </div>
          <div className="principles-list">
            {[
              [
                "Diagnose before prescribing.",
                "Understand the business before recommending a channel, system or service.",
              ],
              [
                "Prioritise commercial impact.",
                "Focus effort on the constraints and opportunities that matter most.",
              ],
              [
                "Connect strategy with execution.",
                "Carry the thinking through into practical implementation.",
              ],
              [
                "Build for sustainable improvement.",
                "Create processes and systems that can support the business over time.",
              ],
            ].map(([title, body]) => (
              <div key={title}>
                <h3>{title}</h3>
                <p className="muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FinalCta title="What’s holding your business back?" />
    </PageShell>
  );
}
