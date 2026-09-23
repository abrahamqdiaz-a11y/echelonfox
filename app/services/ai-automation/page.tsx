import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/site/PageShell";
import FinalCta from "@/components/site/FinalCta";
import Arrow from "@/components/site/Arrow";
import { getCapability, capabilities } from "@/lib/capabilities";

/*
 * Prices, inclusions, and FAQ answers on this page were carried over verbatim
 * from the former /ai-agents page (which now 301s here). Change them only when
 * the offer itself changes.
 */

const URL = "https://echelonfox.com/services/ai-automation";
const TITLE = "Practical AI and Automation";
const DESCRIPTION =
  "Practical AI automation for established companies: instant lead response, appointment scheduling, CRM workflows, follow-up, and internal admin — built inside the tools you already use, with human handoff.";

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | EchelonFox` },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: `${TITLE} — EchelonFox`,
    description: DESCRIPTION,
    url: URL,
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${TITLE} — EchelonFox` }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Practical AI and automation",
  serviceType: "Business Process Automation",
  provider: { "@type": "Organization", name: "EchelonFox", url: "https://echelonfox.com" },
  url: URL,
  description:
    "EchelonFox configures and manages AI agents and automations for lead response, appointment scheduling, CRM workflows, customer follow-up, review requests, and internal admin — built inside the tools a business already uses, with human handoff rules.",
  areaServed: { "@type": "Country", name: "United States" },
};

const questions = [
  "How many enquiries reach you each month — across calls, forms, chat, and referrals?",
  "How many get a reply within the hour, and how many wait until the next working day?",
  "What is one closed job worth to you, and how many hours a week go on chasing?",
];

const agents = [
  {
    name: "Lead Response",
    job: "Replies to new enquiries within seconds, asks qualifying questions, and books the appointment.",
    detail:
      "Replies to web forms, calls, and chat around the clock so a lead never waits until the next working morning for a first response.",
  },
  {
    name: "Appointment Scheduling",
    job: "Books, confirms, reschedules, and reminds — against your live calendar.",
    detail:
      "Handles the back-and-forth of finding a time, writes the booking to your calendar, and sends confirmations and reminders so fewer appointments are missed.",
  },
  {
    name: "Call & Front Desk Coverage",
    job: "Answers calls outside office hours, captures details, and routes with context.",
    detail:
      "Covers evenings, weekends, and the hours your team is on other calls. Available in English and Spanish. Anything it can't resolve is passed to a person with a summary.",
  },
  {
    name: "Follow-Up & Reactivation",
    job: "Works through quiet enquiries and old CRM records with a structured sequence.",
    detail:
      "Runs the follow-up nobody has time for — a sequence of email and SMS touches across your existing contacts, surfacing the people who respond so your team only handles live conversations.",
  },
  {
    name: "CRM & Internal Workflows",
    job: "Creates records, tags, routes, and keeps your pipeline tidy without manual entry.",
    detail:
      "Writing enquiries into the CRM with the right fields, assigning owners, chasing missing information, and summarising conversations so your team's notes stay usable.",
  },
  {
    name: "Reviews & Reputation",
    job: "Asks for a review at the right moment and drafts replies for your approval.",
    detail:
      "Sends a review request after a completed job or renewal and drafts responses to new reviews. You approve anything that gets posted publicly.",
  },
];

const safeguards = [
  {
    title: "Defined escalation rules",
    desc: "Every agent has hard limits. When a conversation exceeds its scope, it routes to the right person on your team — with the full transcript, the contact's details, and a summary. Your staff never starts cold.",
  },
  {
    title: "Full transcripts, always",
    desc: "Every interaction is logged. You can review any conversation at any time. No black box — you see exactly what the agent said and when.",
  },
  {
    title: "Consent and disclosure built in",
    desc: "SMS opt-in and opt-out handling, call-recording disclosure where you record, and limits on what personal data the agent collects. We build these in from the start — but we don't certify your compliance, and we'd expect your counsel to review the flows before launch.",
  },
  {
    title: "You stay in control",
    desc: "You approve the escalation rules. You set the tone. You define the scope. We configure and operate — but the decisions about what an agent can and can't do belong to you, and you can switch it off at any time.",
  },
];

const oneTime = [
  {
    phase: "Discover",
    name: "AI Opportunity Audit",
    price: "$750–$1,500",
    note: "flat fee · credited toward build · ~1 week",
    desc: "We map how enquiries reach you, where they stall, and which repetitive tasks cost the most staff time — then recommend what's worth automating and what isn't.",
    includes: [
      "Enquiry & workflow mapping",
      "Systems and integration review",
      "Recommended workflows to automate",
      "Cost and effort estimate per workflow",
      "Written audit report",
    ],
  },
  {
    phase: "Build",
    name: "Agent Setup",
    price: "From $1,500",
    note: "per agent · one-time · 2–4 weeks",
    desc: "End-to-end configuration: connected to your CRM, calendar, phone, or inbox, briefed on your services, tested against scenarios you approve, and launched.",
    includes: [
      "CRM & calendar integration",
      "Phone / SMS configuration",
      "Configuration on your services & tone",
      "Human-handoff rules",
      "Launch testing & QA",
    ],
  },
];

const tiers = [
  {
    name: "Single Agent",
    price: "$500",
    period: "/mo",
    desc: "One agent in production, reviewed and maintained, with a monthly summary of what it handled. The right starting point for one workflow.",
    includes: [
      "1 AI agent in production",
      "Transcript review & response tuning",
      "Monthly performance summary",
      "Updates when your services or hours change",
      "Human-handoff configuration",
      "Direct email or Slack access",
    ],
  },
  {
    name: "Multi-Agent",
    price: "$1,200",
    period: "/mo",
    desc: "Up to three agents working together, with integration support as your stack changes. For businesses covering several workflows at once.",
    includes: [
      "Up to 3 AI agents in production",
      "Priority response on issues",
      "CRM & calendar integration support",
      "Monthly performance summary",
      "Fortnightly optimisation review",
      "Direct email or Slack access",
    ],
  },
  {
    name: "Embedded",
    price: "From $2,500",
    period: "/mo",
    desc: "Automation across your workflows, bundled with an Echelon Fox marketing plan — so the automation and the campaigns feeding it are handled together.",
    includes: [
      "Agents across your active workflows",
      "Workflow design & orchestration",
      "Bundled marketing plan",
      "Monthly strategy review",
      "Priority response on issues",
      "Reporting tailored to your leadership",
    ],
  },
];

const faq = [
  {
    q: "What exactly is an AI agent?",
    a: "An AI agent is a configured, managed assistant that handles one specific job in your business — replying to new enquiries, booking appointments, chasing a follow-up, or moving records through your CRM. It runs inside the tools you already use (your CRM, calendar, phone, inbox, or forms) and hands the conversation to a person when judgment is needed.",
  },
  {
    q: "What can it actually do?",
    a: "The most common builds are: instant reply to inbound enquiries from forms, calls, or chat; qualifying questions and appointment booking against a live calendar; CRM workflows such as creating records, tagging, and routing to the right person; follow-up sequences by email and SMS for enquiries that went quiet; review requests after a completed job; and internal admin like intake forms, document collection, and summarising conversations for your team.",
  },
  {
    q: "Will it sound robotic?",
    a: "We configure each agent on your services, your common questions, and the tone you want, and we test it against real scenarios before launch. It should read like a well-briefed member of staff. You review and approve the wording before it goes live.",
  },
  {
    q: "What happens when it can't handle something?",
    a: "Every agent has escalation rules you approve. When a conversation falls outside its scope, it routes to the right person on your team with the transcript, the contact's details, and a summary — so nobody starts from scratch.",
  },
  {
    q: "What about consent, recording, and data protection?",
    a: "We build the standard safeguards into the setup: SMS opt-in and opt-out handling, call-recording disclosure where you record, and sensible limits on what data the agent collects and stores. We are not lawyers and we do not certify your compliance — your obligations under TCPA, state recording laws, and any industry regulation remain yours, and we recommend having your counsel review the flows before launch.",
  },
  {
    q: "Do you need to replace our current systems?",
    a: "No. We build on top of what you already run. If your CRM, calendar, or phone system has an API or a supported integration, we work with it. If something genuinely can't connect, we'll tell you that during the audit rather than after you've paid for a build.",
  },
  {
    q: "How fast can we launch?",
    a: "The audit takes about a week. A straightforward build is usually two to four weeks depending on how many systems have to talk to each other.",
  },
  {
    q: "What does it cost?",
    a: "The AI Opportunity Audit is $750–$1,500 flat and is credited toward a build. Builds start at $1,500 per agent. Ongoing management starts at $500/month. Any usage costs charged by the underlying platforms — telephony minutes, SMS, or model usage — are billed separately at cost.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function AiAutomationPage() {
  const cap = getCapability("ai-automation")!;
  const others = capabilities.filter((c) => c.slug !== cap.slug);

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="page-hero" aria-labelledby="ai-title">
        <div className="container">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <ol>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li aria-current="page">{cap.short}</li>
            </ol>
          </nav>
          <h1 id="ai-title" className="h1" style={{ maxWidth: "18ch" }}>
            {cap.name}
          </h1>
          <p className="lead" style={{ marginTop: "1.75rem" }}>
            AI agents that reply to enquiries in seconds, book appointments, keep your CRM tidy, and chase the
            follow-ups your team never gets to — configured inside the tools you already use, with clear rules
            for when a person takes over.
          </p>
          <p className="body muted" style={{ marginTop: "1.25rem" }}>
            {cap.connects}
          </p>
        </div>
      </section>

      <section className="section section--card" aria-labelledby="numbers-title">
        <div className="container split">
          <div className="stack">
            <p className="eyebrow">Start with the numbers</p>
            <h2 id="numbers-title" className="h2">
              Most enquiries aren&apos;t lost to a competitor. They&apos;re lost to nobody.
            </h2>
            <div className="prose muted">
              <p>
                A phone ringing at 6 PM, a web form sitting in an inbox over the weekend, a follow-up that never
                happened because the team was already at capacity.
              </p>
              <p>
                Whether that&apos;s worth fixing depends entirely on your numbers. Those figures decide whether
                automation pays for itself or isn&apos;t worth the build. Working them out is the first thing we
                do together, using your data rather than an industry average.
              </p>
            </div>
          </div>
          <div>
            <ul className="symptoms" style={{ gridTemplateColumns: "1fr" }}>
              {questions.map((q, i) => (
                <li key={q}>
                  <span className="label" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
            <p className="plan__note" style={{ marginTop: "1.75rem" }}>
              <strong style={{ fontWeight: 500 }}>If the numbers don&apos;t justify it, we&apos;ll tell you.</strong>{" "}
              Plenty of businesses are better served by fixing their intake process or their website before adding
              automation on top of it.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="agents-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What an agent can take off your team</p>
            <h2 id="agents-title" className="h2">
              One agent, one job.
            </h2>
            <p className="lead muted">
              Each agent is built for one specific job in your business. Most clients start with a single workflow
              and add more once the first one has proved itself.
            </p>
          </div>
          <div className="grid-3">
            {agents.map((a) => (
              <div key={a.name}>
                <h3 className="cell-title" style={{ marginTop: 0 }}>
                  {a.name}
                </h3>
                <p style={{ margin: "0 0 0.75rem", fontWeight: 500 }} className="small">
                  {a.job}
                </p>
                <p className="small muted" style={{ margin: 0 }}>
                  {a.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--card" aria-labelledby="safeguards-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Safeguards</p>
            <h2 id="safeguards-title" className="h2">
              Built with humans in the loop.
            </h2>
            <p className="lead muted">
              Agents handle volume and repetition. Your people handle judgment, relationships, and anything that
              needs a human answer. The boundary between the two is something you define and can change.
            </p>
          </div>
          <div className="grid-2">
            {safeguards.map((s) => (
              <div key={s.title}>
                <h3 className="cell-title" style={{ marginTop: 0 }}>
                  {s.title}
                </h3>
                <p className="small muted" style={{ margin: 0 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="ai-pricing-title" id="pricing">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Pricing</p>
            <h2 id="ai-pricing-title" className="h2">
              Audit, build, then manage.
            </h2>
            <p className="lead muted">
              Start with the audit — its fee is credited against a build if you go ahead. Platform usage costs
              (telephony, SMS, model usage) are billed separately at cost.
            </p>
          </div>

          <div className="grid-2">
            {oneTime.map((o) => (
              <div key={o.name} className="stack" style={{ ["--stack" as string]: "1rem" }}>
                <p className="label">{o.phase}</p>
                <h3 className="h3">{o.name}</h3>
                <p className="plan__price" style={{ margin: 0 }}>
                  {o.price}
                </p>
                <p className="plan__terms">{o.note}</p>
                <p className="small muted" style={{ margin: 0 }}>
                  {o.desc}
                </p>
                <ul className="check-list small">
                  {o.includes.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="label" style={{ margin: "3rem 0 1rem" }}>
            Run — monthly management
          </h3>
          <div className="plans">
            {tiers.map((t) => (
              <div key={t.name} className="plan">
                <h4 className="h3">{t.name}</h4>
                <p className="plan__price" style={{ margin: 0 }}>
                  {t.price}
                  <span>{t.period}</span>
                </p>
                <p className="small muted" style={{ margin: 0 }}>
                  {t.desc}
                </p>
                <ul className="check-list small">
                  {t.includes.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--card" aria-labelledby="faq-title">
        <div className="container split">
          <div className="stack">
            <p className="eyebrow">Questions</p>
            <h2 id="faq-title" className="h2">
              Before you ask.
            </h2>
          </div>
          <div className="faq">
            {faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <div>
                  <p style={{ margin: 0 }}>{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-label="Other capabilities">
        <div className="container split">
          <p className="label">Other capabilities</p>
          <ul className="ruled-list" style={{ borderTopColor: "var(--ink)" }}>
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/services/${o.slug}`} className="arrow-link" style={{ borderBottom: 0 }}>
                  {o.name}
                  <Arrow size={14} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta
        eyebrow="AI Opportunity Audit"
        title="Find out what's worth automating, and what isn't."
        body="The AI Opportunity Audit maps how enquiries reach you, where they stall, and what each automation would cost to build against what it would save. Fixed fee, credited toward a build if you move forward. If automation isn't the right next step for your business, the audit will say so."
        label="Book an AI Opportunity Audit"
      />
    </PageShell>
  );
}
