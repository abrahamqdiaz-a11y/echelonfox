import type { Metadata } from "next";
import ServiceNav from "@/components/ServiceNav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Agents & Business Automation | Echelon Fox",
  description:
    "Echelon Fox builds practical AI automation for growing businesses: instant lead response, appointment scheduling, CRM workflows, customer follow-up, and internal process automation.",
  alternates: {
    canonical: "https://echelonfox.com/ai-agents",
  },
  openGraph: {
    title: "AI Agents & Business Automation | Echelon Fox",
    description:
      "Lead response, appointment scheduling, CRM workflows, follow-up, and internal automation — configured inside the tools your business already uses.",
    url: "https://echelonfox.com/ai-agents",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "AI Agents — Echelon Fox" }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Agents & Business Automation",
  serviceType: "Business Process Automation",
  provider: { "@type": "Organization", name: "Echelon Fox", url: "https://echelonfox.com" },
  url: "https://echelonfox.com/ai-agents",
  description:
    "Echelon Fox configures and manages AI agents and automations for lead response, appointment scheduling, CRM workflows, customer follow-up, review requests, and internal admin — built inside the tools a business already uses, with human handoff rules.",
  areaServed: { "@type": "AdministrativeArea", name: "United States" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What exactly is an AI agent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI agent is a configured, managed assistant that handles one specific job in your business — replying to new enquiries, booking appointments, chasing a follow-up, or moving records through your CRM. It runs inside the tools you already use (your CRM, calendar, phone, inbox, or forms) and hands the conversation to a person when judgment is needed.",
      },
    },
    {
      "@type": "Question",
      name: "What can it actually do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common builds are: instant reply to inbound enquiries from forms, calls, or chat; qualifying questions and appointment booking against a live calendar; CRM workflows such as creating records, tagging, and routing to the right person; follow-up sequences by email and SMS for enquiries that went quiet; review requests after a completed job; and internal admin like intake forms, document collection, and summarising conversations for your team.",
      },
    },
    {
      "@type": "Question",
      name: "Will it sound robotic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We configure each agent on your services, your common questions, and the tone you want, and we test it against real scenarios before launch. It should read like a well-briefed member of staff. You review and approve the wording before it goes live.",
      },
    },
    {
      "@type": "Question",
      name: "What happens when it can't handle something?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every agent has escalation rules you approve. When a conversation falls outside its scope, it routes to the right person on your team with the transcript, the contact's details, and a summary — so nobody starts from scratch.",
      },
    },
    {
      "@type": "Question",
      name: "What about consent, recording, and data protection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build the standard safeguards into the setup: SMS opt-in and opt-out handling, call-recording disclosure where you record, and sensible limits on what data the agent collects and stores. We are not lawyers and we do not certify your compliance — your obligations under TCPA, state recording laws, and any industry regulation remain yours, and we recommend having your counsel review the flows before launch.",
      },
    },
    {
      "@type": "Question",
      name: "Do you need to replace our current systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We build on top of what you already run. If your CRM, calendar, or phone system has an API or a supported integration, we work with it. If something genuinely can't connect, we'll tell you that during the audit rather than after you've paid for a build.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can we launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The audit takes about a week. A straightforward build is usually two to four weeks depending on how many systems have to talk to each other.",
      },
    },
    {
      "@type": "Question",
      name: "What does it cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The AI Opportunity Audit is $750–$1,500 flat and is credited toward a build. Builds start at $1,500 per agent. Ongoing management starts at $500/month. Any usage costs charged by the underlying platforms — telephony minutes, SMS, or model usage — are billed separately at cost.",
      },
    },
  ],
};

const agents = [
  {
    name: "Lead Response",
    job: "Replies to new enquiries within seconds, asks qualifying questions, and books the appointment.",
    outcome: "Most enquiries go to whoever answers first. This agent replies to web forms, calls, and chat around the clock so a lead never waits until the next working morning for a first response.",
    icon: "⚡",
    tags: ["Web Forms", "Qualification", "Booking"],
  },
  {
    name: "Appointment Scheduling",
    job: "Books, confirms, reschedules, and reminds — against your live calendar.",
    outcome: "Handles the back-and-forth of finding a time, writes the booking to your calendar, and sends confirmations and reminders so fewer appointments are missed.",
    icon: "📅",
    tags: ["Calendar Sync", "Reminders", "Rescheduling"],
  },
  {
    name: "Call & Front Desk Coverage",
    job: "Answers calls outside office hours, captures details, and routes with context.",
    outcome: "Covers evenings, weekends, and the hours your team is on other calls. Available in English and Spanish. Anything it can't resolve is passed to a person with a summary.",
    icon: "📞",
    tags: ["Call Handling", "Bilingual EN/ES", "Routing"],
  },
  {
    name: "Follow-Up & Reactivation",
    job: "Works through quiet enquiries and old CRM records with a structured sequence.",
    outcome: "Runs the follow-up nobody has time for — a sequence of email and SMS touches across your existing contacts, surfacing the people who respond so your team only handles live conversations.",
    icon: "🔁",
    tags: ["Email & SMS", "CRM Lists", "Sequences"],
  },
  {
    name: "CRM & Internal Workflows",
    job: "Creates records, tags, routes, and keeps your pipeline tidy without manual entry.",
    outcome: "The unglamorous work: writing enquiries into the CRM with the right fields, assigning owners, chasing missing information, and summarising conversations so your team's notes stay usable.",
    icon: "🗂️",
    tags: ["Data Entry", "Routing", "Summaries"],
  },
  {
    name: "Reviews & Reputation",
    job: "Asks for a review at the right moment and drafts replies for your approval.",
    outcome: "Sends a review request after a completed job or renewal and drafts responses to new reviews. You approve anything that gets posted publicly.",
    icon: "⭐",
    tags: ["Review Requests", "Draft Replies", "Local SEO"],
  },
];

const steps = [
  {
    step: "01",
    phase: "Discover",
    title: "AI Opportunity Audit",
    desc: "We map how enquiries reach you today, where they stall, and which repetitive tasks are eating staff hours. You get a written recommendation of which workflows are worth automating, which aren't, and what each would take to build. Fixed fee, credited toward a build.",
    detail: "$750–$1,500 · ~1 week",
  },
  {
    step: "02",
    phase: "Build",
    title: "Setup & Configuration",
    desc: "We configure the agent end to end — connected to your CRM, calendar, phone, or inbox, briefed on your services, and tested against real scenarios you approve. Escalation rules and human handoff are defined before launch, not after.",
    detail: "From $1,500/agent · 2–4 weeks",
  },
  {
    step: "03",
    phase: "Run",
    title: "Ongoing Management",
    desc: "We keep it working: reviewing transcripts, tuning responses, updating it when your services or hours change, fixing integrations when a connected tool changes, and sending you a monthly summary of what it handled.",
    detail: "From $500/mo · ongoing",
  },
];

const pricingTiers = [
  {
    name: "Single Agent",
    price: "$500",
    period: "/mo",
    recommended: false,
    desc: "One agent in production, reviewed and maintained, with a monthly summary of what it handled. The right starting point for one workflow.",
    includes: [
      "1 AI agent in production",
      "Transcript review & response tuning",
      "Monthly performance summary",
      "Updates when your services or hours change",
      "Human-handoff configuration",
      "Direct email or Slack access",
    ],
    cta: "Book a Growth Audit",
  },
  {
    name: "Multi-Agent",
    price: "$1,200",
    period: "/mo",
    recommended: true,
    desc: "Up to three agents working together, with integration support as your stack changes. For businesses covering several workflows at once.",
    includes: [
      "Up to 3 AI agents in production",
      "Priority response on issues",
      "CRM & calendar integration support",
      "Monthly performance summary",
      "Fortnightly optimisation review",
      "Direct email or Slack access",
    ],
    cta: "Book a Growth Audit",
  },
  {
    name: "Embedded",
    price: "From $2,500",
    period: "/mo",
    recommended: false,
    desc: "Automation across your workflows, bundled with an Echelon Fox marketing plan — so the automation and the campaigns feeding it are handled together.",
    includes: [
      "Agents across your active workflows",
      "Workflow design & orchestration",
      "Bundled marketing plan",
      "Monthly strategy review",
      "Priority response on issues",
      "Reporting tailored to your leadership",
    ],
    cta: "Enquire About Embedded",
  },
];

const comparisonRows = [
  {
    metric: "Monthly cost",
    teammate: "$500–$1,200 management, plus build",
    hire: "Salary, payroll tax, and benefits for the role",
    voicemail: "$0 — plus whatever the missed enquiries were worth",
  },
  {
    metric: "Hours covered",
    teammate: "Outside office hours, including nights and weekends",
    hire: "Contracted hours, business days",
    voicemail: "None — the caller leaves a message or doesn't",
  },
  {
    metric: "First response",
    teammate: "Seconds, consistently",
    hire: "Depends on what else is in the queue",
    voicemail: "Whenever someone checks the messages",
  },
  {
    metric: "Judgment & relationships",
    teammate: "Escalates anything outside its defined scope",
    hire: "Handles nuance, exceptions, and difficult conversations",
    voicemail: "None",
  },
  {
    metric: "Ramp time",
    teammate: "2–4 weeks to build and launch",
    hire: "Recruitment plus onboarding",
    voicemail: "Immediate — and immediately limited",
  },
  {
    metric: "Best used for",
    teammate: "High-volume, repeatable steps",
    hire: "Work that needs a person",
    voicemail: "A fallback, not a system",
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

const whoWeWorkWith = [
  { label: "Insurance Agencies", desc: "Quote requests answered immediately, intake details collected before the first call, and renewal follow-up that doesn't depend on someone remembering." },
  { label: "Beauty, Wellness & Clinics", desc: "Bookings, confirmations, and reminders handled automatically, so fewer slots go empty and the front desk isn't on the phone all day." },
  { label: "Pet & Home Services", desc: "After-hours calls captured with the details you need to quote, plus follow-up on the enquiries that went quiet mid-season." },
  { label: "E-Commerce & Retail", desc: "Order and shipping questions answered instantly, with anything unusual routed to a person who can actually resolve it." },
  { label: "Professional & B2B Firms", desc: "Enquiry qualification, scheduling, and CRM hygiene so fee-earners spend their time on the work rather than on admin." },
];

export default function AiAgentsPage() {
  return (
    <div className="service-page" style={{ background: "#080808", minHeight: "100vh", color: "#fff" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiceNav />

      {/* ─── 1. Hero ─────────────────────────────────────────────── */}
      <section
        style={{
          padding: "160px 32px 100px",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid #1a1a1a",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,85,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,85,0,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "-5%",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(255,85,0,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
            <Link
              href="/#services"
              style={{
                color: "#555",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Services
            </Link>
            <span style={{ color: "#333" }}>/</span>
            <span
              style={{
                color: "#FF5500",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              AI Agents & Automation
            </span>
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                background: "#FF5500",
                borderRadius: "50%",
                boxShadow: "0 0 12px #FF5500",
              }}
            />
            <span
              style={{
                color: "#FF5500",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              AI Agents & Automation
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2.5rem, 7vw, 6rem)",
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              margin: "0 0 28px",
              maxWidth: "900px",
            }}
          >
            Automate the follow-up{" "}
            <span style={{ color: "#FF5500" }}>that never happens.</span>
          </h1>

          <p
            style={{
              color: "#888",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              lineHeight: 1.7,
              maxWidth: "620px",
              margin: "0 0 48px",
            }}
          >
            AI agents that reply to enquiries in seconds, book appointments, keep your CRM tidy,
            and chase the follow-ups your team never gets to — configured inside the tools you
            already use, with clear rules for when a person takes over.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{
                background: "#FF5500",
                color: "white",
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "16px 36px",
                textDecoration: "none",
                clipPath:
                  "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              Book an AI Opportunity Audit
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <a
              href="#how-it-works"
              style={{
                background: "transparent",
                color: "white",
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "15px 35px",
                textDecoration: "none",
                border: "1px solid #333",
                clipPath:
                  "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
              }}
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* ─── 2. Cost of missing leads ────────────────────────────── */}
      <section
        style={{
          padding: "100px 32px",
          background: "#0a0a0a",
          borderBottom: "1px solid #1a1a1a",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
            <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
            <span
              style={{
                color: "#FF5500",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              The Real Question
            </span>
          </div>

          <div
            className="cost-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}
          >
            <div>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 900,
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  margin: "0 0 24px",
                }}
              >
                The enquiries you never{" "}
                <span style={{ color: "#FF5500" }}>get back to.</span>
              </h2>
              <p
                style={{
                  color: "#888",
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  margin: "0 0 24px",
                }}
              >
                Most businesses don&apos;t lose enquiries to a competitor with a better pitch. They
                lose them to nobody — a phone ringing at 6 PM, a web form sitting in an inbox over
                the weekend, a follow-up that never happened because the team was already at
                capacity.
              </p>
              <p
                style={{
                  color: "#888",
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  margin: "0 0 32px",
                }}
              >
                Whether that&apos;s worth fixing depends entirely on your numbers — how many
                enquiries you get, how many you currently reach in time, what one closed job is
                worth, and how much staff time the chasing eats. Those four figures decide whether
                automation pays for itself or isn&apos;t worth the build. Working them out is the
                first thing we do together, using your data rather than an industry average.
              </p>
              <div
                style={{
                  background: "#141414",
                  border: "1px solid #222",
                  borderLeft: "3px solid #FF5500",
                  padding: "20px 24px",
                }}
              >
                <p
                  style={{
                    color: "#aaa",
                    fontSize: "0.9rem",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  <strong style={{ color: "#fff" }}>If the numbers don&apos;t justify it, we&apos;ll
                  tell you.</strong>{" "}
                  Plenty of businesses are better served by fixing their intake process or their
                  website before adding automation on top of it.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { stat: "01", label: "How many enquiries reach you each month — across calls, forms, chat, and referrals?" },
                { stat: "02", label: "How many get a reply within the hour, and how many wait until the next working day?" },
                { stat: "03", label: "What is one closed job worth to you, and how many hours a week go on chasing?" },
              ].map((item) => (
                <div
                  key={item.stat}
                  style={{
                    background: "#111",
                    border: "1px solid #1e1e1e",
                    padding: "28px 32px",
                    display: "flex",
                    alignItems: "center",
                    gap: "24px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: 900,
                      color: "#FF5500",
                      letterSpacing: "-0.03em",
                      flexShrink: 0,
                      minWidth: "80px",
                    }}
                  >
                    {item.stat}
                  </div>
                  <p style={{ color: "#888", fontSize: "0.9rem", lineHeight: 1.5, margin: 0 }}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) { .cost-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
          .agent-card:hover { background: #0f0f0f !important; }
        `}</style>
      </section>

      {/* ─── 3. How It Works ─────────────────────────────────────── */}
      <section id="how-it-works" style={{ padding: "100px 32px", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <div
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}
            >
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span
                style={{
                  color: "#FF5500",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                The Process
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                margin: "0 0 16px",
              }}
            >
              Discover → Build → Run
            </h2>
            <p style={{ color: "#666", fontSize: "1rem", lineHeight: 1.7, maxWidth: "560px", margin: 0 }}>
              Every engagement follows the same three steps. The audit exists so nobody pays to
              build something that won&apos;t pay for itself, and the ongoing management exists
              because an automation nobody checks quietly drifts out of date.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
              gap: "1px",
              background: "#1a1a1a",
              border: "1px solid #1a1a1a",
            }}
          >
            {steps.map((s) => (
              <div
                key={s.step}
                style={{
                  background: "#080808",
                  padding: "48px 40px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-10px",
                    right: "16px",
                    fontSize: "5rem",
                    fontWeight: 900,
                    color: "#141414",
                    lineHeight: 1,
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  {s.step}
                </div>
                <div
                  style={{
                    color: "#FF5500",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    marginBottom: "6px",
                  }}
                >
                  {s.phase}
                </div>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 800,
                    margin: "0 0 16px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: 1.75, margin: "0 0 20px" }}>
                  {s.desc}
                </p>
                <div
                  style={{
                    display: "inline-block",
                    background: "#141414",
                    border: "1px solid #222",
                    color: "#888",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    padding: "5px 12px",
                  }}
                >
                  {s.detail}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "32px",
              background: "#141414",
              border: "1px solid #222",
              borderLeft: "3px solid #FF5500",
              padding: "20px 28px",
            }}
          >
            <p style={{ color: "#aaa", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>
              <strong style={{ color: "#fff" }}>
                An automation nobody reviews will eventually get something wrong quietly.
              </strong>{" "}
              That&apos;s what the ongoing plan covers: we read transcripts, tune the responses,
              update the agent when your services, prices, or hours change, and repair integrations
              when a connected tool changes on us.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 4. What we build ────────────────────────────────────── */}
      <section
        style={{
          padding: "100px 32px",
          background: "#0a0a0a",
          borderBottom: "1px solid #1a1a1a",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <div
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}
            >
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span
                style={{
                  color: "#FF5500",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                What We Build
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                margin: "0 0 16px",
              }}
            >
              What an agent can take off your team
            </h2>
            <p style={{ color: "#666", fontSize: "1rem", lineHeight: 1.7, maxWidth: "560px", margin: 0 }}>
              Each agent is built for one specific job in your business. Most clients start with a
              single workflow and add more once the first one has proved itself.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))",
              gap: "1px",
              background: "#1a1a1a",
              border: "1px solid #1a1a1a",
            }}
          >
            {agents.map((t) => (
              <div
                key={t.name}
                className="agent-card"
                style={{
                  background: "#0a0a0a",
                  padding: "40px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  transition: "background 0.2s",
                }}
              >
                <div style={{ fontSize: "1.75rem", lineHeight: 1 }}>{t.icon}</div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 800,
                      color: "#fff",
                      margin: "0 0 6px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {t.name}
                  </h3>
                  <p
                    style={{
                      color: "#FF5500",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {t.job}
                  </p>
                </div>
                <p style={{ color: "#666", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>
                  {t.outcome}
                </p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "auto" }}>
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: "#141414",
                        border: "1px solid #222",
                        color: "#888",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        padding: "5px 12px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. Built with humans in the loop ───────────────────── */}
      <section style={{ padding: "100px 32px", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <div
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}
            >
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span
                style={{
                  color: "#FF5500",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                Control & Compliance
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                margin: "0 0 16px",
              }}
            >
              Built with humans in the loop.
            </h2>
            <p style={{ color: "#666", fontSize: "1rem", lineHeight: 1.7, maxWidth: "620px", margin: 0 }}>
              Agents handle volume and repetition. Your people handle judgment, relationships, and
              anything that needs a human answer. The boundary between the two is something you
              define and can change.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
              gap: "24px",
            }}
          >
            {[
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
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#0f0f0f",
                  border: "1px solid #1e1e1e",
                  padding: "36px",
                }}
              >
                <div
                  style={{
                    color: "#FF5500",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    marginBottom: "14px",
                  }}
                >
                  0{i + 1}
                </div>
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 800,
                    color: "#fff",
                    margin: "0 0 12px",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "#666", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. Pricing ──────────────────────────────────────────── */}
      <section
        style={{
          padding: "100px 32px",
          background: "#0a0a0a",
          borderBottom: "1px solid #1a1a1a",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <div
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}
            >
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span
                style={{
                  color: "#FF5500",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                Pricing
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                margin: "0 0 8px",
              }}
            >
              Audit, build, then manage
            </h2>
            <p style={{ color: "#666", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>
              Start with the audit — its fee is credited against a build if you go ahead. Platform
              usage costs (telephony, SMS, model usage) are billed separately at cost.
            </p>
          </div>

          {/* Discover + Build one-time cards */}
          <div
            className="onetime-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1px",
              background: "#1a1a1a",
              border: "1px solid #1a1a1a",
              marginBottom: "48px",
            }}
          >
            {[
              {
                phase: "Discover",
                name: "AI Opportunity Audit",
                price: "$750–$1,500",
                note: "flat fee · credited toward build",
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
                note: "per agent · one-time",
                desc: "End-to-end configuration: connected to your CRM, calendar, phone, or inbox, briefed on your services, tested against scenarios you approve, and launched.",
                includes: [
                  "CRM & calendar integration",
                  "Phone / SMS configuration",
                  "Configuration on your services & tone",
                  "Human-handoff rules",
                  "Launch testing & QA",
                ],
              },
            ].map((item) => (
              <div
                key={item.phase}
                style={{ background: "#0a0a0a", padding: "48px 40px", display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <div>
                  <div
                    style={{
                      color: "#FF5500",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      marginBottom: "6px",
                    }}
                  >
                    {item.phase}
                  </div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 900, color: "#fff", margin: "0 0 4px" }}>
                    {item.name}
                  </h3>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                    <span style={{ fontSize: "1.75rem", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>
                      {item.price}
                    </span>
                    <span style={{ color: "#555", fontSize: "0.8rem" }}>{item.note}</span>
                  </div>
                </div>
                <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {item.includes.map((inc) => (
                    <li key={inc} style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "#b0b0b0", fontSize: "0.875rem" }}>
                      <span style={{ color: "#FF5500", flexShrink: 0 }}>→</span>
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Run: monthly tiers */}
          <div style={{ marginBottom: "16px" }}>
            <span
              style={{
                color: "#FF5500",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Run — Monthly Management
            </span>
          </div>
          <div
            className="pricing-tiers"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1px",
              background: "#1a1a1a",
              border: "1px solid #1a1a1a",
              marginBottom: "64px",
            }}
          >
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={tier.recommended ? "pricing-card pricing-card-recommended" : "pricing-card"}
                style={{
                  background: tier.recommended ? "#0d0d0b" : "#080808",
                  padding: "48px 36px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  transition: "background 0.2s",
                }}
              >
                {tier.recommended && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      background: "#FF5500",
                    }}
                  />
                )}
                {tier.recommended && (
                  <div
                    style={{
                      display: "inline-block",
                      background: "rgba(255,85,0,0.12)",
                      border: "1px solid rgba(255,85,0,0.3)",
                      color: "#FF5500",
                      fontSize: "0.65rem",
                      fontWeight: 800,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      padding: "4px 10px",
                      marginBottom: "20px",
                      alignSelf: "flex-start",
                    }}
                  >
                    Most Popular
                  </div>
                )}
                <h3 style={{ fontSize: "1.25rem", fontWeight: 900, margin: "0 0 4px", color: "#fff" }}>
                  {tier.name}
                </h3>
                <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "8px" }}>
                  <span style={{ fontSize: "2rem", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>
                    {tier.price}
                  </span>
                  <span style={{ color: "#555", fontSize: "0.9rem" }}>{tier.period}</span>
                </div>
                <p style={{ color: "#999", fontSize: "0.875rem", lineHeight: 1.7, margin: "0 0 24px" }}>
                  {tier.desc}
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    margin: "0 0 auto",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {tier.includes.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        color: "#b0b0b0",
                        fontSize: "0.875rem",
                      }}
                    >
                      <span style={{ color: "#FF5500", flexShrink: 0, marginTop: "1px" }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  style={{
                    marginTop: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    background: tier.recommended ? "#FF5500" : "transparent",
                    color: tier.recommended ? "white" : "#FF5500",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "14px 24px",
                    textDecoration: "none",
                    border: tier.recommended ? "none" : "1px solid #FF5500",
                    clipPath:
                      "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                    transition: "background 0.2s",
                  }}
                >
                  {tier.cta}
                  <svg aria-hidden="true" width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div style={{ marginBottom: "16px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span
                style={{
                  color: "#FF5500",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                Where Each One Fits
              </span>
            </div>
          </div>
          <div
            className="comparison-table"
            style={{
              border: "1px solid #1a1a1a",
              overflowX: "auto",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#111" }}>
                  <th
                    style={{
                      padding: "16px 20px",
                      textAlign: "left",
                      color: "#555",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      borderBottom: "1px solid #1a1a1a",
                      borderRight: "1px solid #1a1a1a",
                    }}
                  >
                    &nbsp;
                  </th>
                  {["AI Agent", "Full-Time Hire", "Voicemail"].map((col, i) => (
                    <th
                      key={col}
                      style={{
                        padding: "16px 20px",
                        textAlign: "left",
                        color: i === 0 ? "#FF5500" : "#888",
                        fontSize: "0.8rem",
                        fontWeight: 800,
                        letterSpacing: "0.05em",
                        borderBottom: "1px solid #1a1a1a",
                        borderRight: i < 2 ? "1px solid #1a1a1a" : "none",
                      }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.metric}
                    style={{ background: i % 2 === 0 ? "#080808" : "#0a0a0a" }}
                  >
                    <td
                      style={{
                        padding: "16px 20px",
                        color: "#888",
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        borderRight: "1px solid #1a1a1a",
                        borderBottom: i < comparisonRows.length - 1 ? "1px solid #1a1a1a" : "none",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {row.metric}
                    </td>
                    <td
                      style={{
                        padding: "16px 20px",
                        color: "#e0e0e0",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        borderRight: "1px solid #1a1a1a",
                        borderBottom: i < comparisonRows.length - 1 ? "1px solid #1a1a1a" : "none",
                      }}
                    >
                      {row.teammate}
                    </td>
                    <td
                      style={{
                        padding: "16px 20px",
                        color: "#666",
                        fontSize: "0.875rem",
                        borderRight: "1px solid #1a1a1a",
                        borderBottom: i < comparisonRows.length - 1 ? "1px solid #1a1a1a" : "none",
                      }}
                    >
                      {row.hire}
                    </td>
                    <td
                      style={{
                        padding: "16px 20px",
                        color: "#444",
                        fontSize: "0.875rem",
                        borderBottom: i < comparisonRows.length - 1 ? "1px solid #1a1a1a" : "none",
                      }}
                    >
                      {row.voicemail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .pricing-tiers { grid-template-columns: 1fr !important; max-width: 520px; margin-left: auto; margin-right: auto; }
            .onetime-grid  { grid-template-columns: 1fr !important; }
          }
          .pricing-card:hover { background: #0d0d0d !important; }
          .pricing-card-recommended:hover { background: #121210 !important; }
        `}</style>
      </section>

      {/* ─── 7. Who We Work With ─────────────────────────────────── */}
      <section style={{ padding: "100px 32px", background: "#0a0a0a", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <div
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}
            >
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span
                style={{
                  color: "#FF5500",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                Where This Fits
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                margin: "0 0 16px",
              }}
            >
              Common places this pays off.
            </h2>
            <p style={{ color: "#666", fontSize: "1rem", lineHeight: 1.7, maxWidth: "620px", margin: 0 }}>
              The pattern is the same across industries: enquiries arrive faster than a small team
              can answer them, and the follow-up is the first thing to slip. These are the setups we
              build most often — the specific workflows depend on how your business actually runs.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
              gap: "24px",
            }}
          >
            {whoWeWorkWith.map((w) => (
              <div
                key={w.label}
                style={{
                  background: "#111",
                  border: "1px solid #1e1e1e",
                  padding: "32px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "14px",
                  }}
                >
                  <div style={{ width: "6px", height: "6px", background: "#FF5500", borderRadius: "50%" }} />
                  <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#fff", margin: 0 }}>
                    {w.label}
                  </h3>
                </div>
                <p style={{ color: "#666", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. FAQ ──────────────────────────────────────────────── */}
      <section style={{ padding: "100px 32px", borderBottom: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <div
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}
            >
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span
                style={{
                  color: "#FF5500",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                Common Questions
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              FAQ
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {faq.map((item, i) => (
              <div
                key={i}
                style={{ borderTop: "1px solid #1a1a1a", padding: "32px 0" }}
              >
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#fff", margin: "0 0 14px" }}>
                  {item.q}
                </h3>
                <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: 1.75, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ───────────────────────────────────────────── */}
      <section
        style={{
          padding: "100px 32px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,85,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,85,0,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", maxWidth: "700px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              margin: "0 0 20px",
            }}
          >
            Find out what&apos;s worth automating —{" "}
            <span style={{ color: "#FF5500" }}>and what isn&apos;t.</span>
          </h2>
          <p style={{ color: "#666", fontSize: "1rem", lineHeight: 1.7, margin: "0 0 16px" }}>
            The AI Opportunity Audit maps how enquiries reach you, where they stall, and what each
            automation would cost to build against what it would save. Fixed fee, credited toward a
            build if you move forward.
          </p>
          <p style={{ color: "#444", fontSize: "0.85rem", margin: "0 0 40px" }}>
            A working session, not a sales call. If automation isn&apos;t the right next step for
            your business, the audit will say so.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{
                background: "#FF5500",
                color: "white",
                fontWeight: 700,
                fontSize: "0.9rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "18px 48px",
                textDecoration: "none",
                clipPath:
                  "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              Book an AI Opportunity Audit
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="/services/seo-content"
              style={{
                background: "transparent",
                color: "#888",
                fontWeight: 600,
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "17px 35px",
                textDecoration: "none",
                border: "1px solid #222",
                clipPath:
                  "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
              }}
            >
              See Our SEO Service →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
