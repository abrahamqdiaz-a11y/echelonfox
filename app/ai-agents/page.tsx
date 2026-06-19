import type { Metadata } from "next";
import ServiceNav from "@/components/ServiceNav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Agents for Local Service Businesses | EchelonFox",
  description:
    "EchelonFox deploys AI teammates that answer every lead, book appointments, and recover lost revenue — 24/7, alongside your existing team. Built for 5–30-person service firms.",
  alternates: {
    canonical: "https://echelonfox.com/ai-agents",
  },
  openGraph: {
    title: "AI Agents for Local Service Businesses | EchelonFox",
    description:
      "AI teammates that never miss a lead. Speed-to-lead, front desk coverage, and reactivation — built for insurance, legal, med spa, dental, HVAC, and financial advisory firms.",
    url: "https://echelonfox.com/ai-agents",
    type: "website",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "AI Agents — EchelonFox" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-default.png"] },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Teammates for Local Service Businesses",
  serviceType: "AI Automation & Marketing",
  provider: { "@type": "Organization", name: "EchelonFox", url: "https://echelonfox.com" },
  url: "https://echelonfox.com/ai-agents",
  description:
    "EchelonFox deploys managed AI teammates — lead response, front desk, reactivation, reputation, and intake — that work alongside your human team 24/7.",
  areaServed: { "@type": "AdministrativeArea", name: "United States" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an AI teammate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI teammate is a configured, managed agent that handles a specific job in your business — answering leads, booking appointments, or re-engaging cold contacts. It works inside your existing tools (CRM, phone, calendar) and hands off to your staff when human judgment is needed.",
      },
    },
    {
      "@type": "Question",
      name: "Will it sound robotic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We train each teammate on your business — your tone, your services, your common questions. Interactions are conversational and on-brand. We test extensively before launch.",
      },
    },
    {
      "@type": "Question",
      name: "What happens when it can't handle something?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every teammate has defined escalation rules. When a conversation falls outside its scope, it routes to the right person on your team with full context — the transcript, the lead's details, and a summary — so your staff never starts from scratch.",
      },
    },
    {
      "@type": "Question",
      name: "Is it compliant with TCPA and call-recording laws?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build compliance into the setup: SMS consent flows, call-recording disclosures, and PII handling appropriate for regulated industries like insurance and legal. We are not your attorney, but we take compliance seriously and design accordingly.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can we launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Opportunity Audit takes about one week. A standard Build takes two to four weeks depending on integration complexity. Most clients go live within a month of starting.",
      },
    },
    {
      "@type": "Question",
      name: "What does it cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Opportunity Audit is $750–$1,500 flat, credited toward your build. Build starts at $1,500 per teammate. Ongoing managed service starts at $500/month for a single teammate.",
      },
    },
  ],
};

const teammates = [
  {
    name: "Lead Response Teammate",
    job: "Replies to every inbound lead in seconds, qualifies, and books.",
    outcome: "Kills speed-to-lead drop-off. Most leads go cold within 5 minutes of not hearing back — this teammate answers in under 60 seconds, every time.",
    icon: "⚡",
    tags: ["Speed-to-Lead", "Qualification", "Booking"],
  },
  {
    name: "Front Desk Teammate",
    job: "Answers calls 24/7, books appointments, routes everything else with context.",
    outcome: "Bilingual EN/ES. Covers nights, weekends, and lunch hours your staff can't. Every call gets answered — none go to voicemail.",
    icon: "📞",
    tags: ["Call Handling", "Scheduling", "Bilingual EN/ES"],
  },
  {
    name: "Reactivation Teammate",
    job: "Works your cold CRM, re-engages dead leads, surfaces lost revenue.",
    outcome: "The money in your CRM isn't gone — it's dormant. This teammate runs re-engagement sequences across SMS and email and resurfaces warm prospects your team never had time to follow up with.",
    icon: "🔁",
    tags: ["CRM Reactivation", "SMS", "Email"],
  },
  {
    name: "Reputation Teammate",
    job: "Requests reviews at the right moment and drafts responses.",
    outcome: "More reviews, posted faster, with replies that sound human. Review velocity is one of the top local ranking factors — this teammate builds it on autopilot.",
    icon: "⭐",
    tags: ["Review Requests", "Responses", "Local SEO"],
  },
  {
    name: "Intake & Admin Teammate",
    job: "Handles new-client intake, scheduling, and routine admin for high-volume practices.",
    outcome: "Designed for insurance agencies, legal offices, dental and med spa practices — anywhere intake paperwork, scheduling, and follow-ups eat staff time that should go to clients.",
    icon: "📋",
    tags: ["Intake", "Scheduling", "Document Collection"],
  },
];

const steps = [
  {
    step: "01",
    phase: "Discover",
    title: "AI Opportunity Audit",
    desc: "We map where your team is losing revenue to missed calls, slow follow-up, and unworked leads. We identify which workflows a teammate can own and model the projected return before you commit to a build. Fixed fee — credited toward your Build.",
    detail: "$750–$1,500 · ~1 week",
  },
  {
    step: "02",
    phase: "Build",
    title: "Setup & Configuration",
    desc: "We configure your teammate end-to-end: integrated with your CRM, calendar, and phone system, trained on your business, and tested against real scenarios. Human-handoff rules are baked in from day one.",
    detail: "From $1,500/teammate · 2–4 weeks",
  },
  {
    step: "03",
    phase: "Run",
    title: "Managed Service",
    desc: "Your teammates go live and we keep them running — monitoring performance, tuning responses, pushing model updates, and delivering a monthly report. An unwatched agent that breaks quietly is a liability. We own the watching.",
    detail: "From $500/mo · ongoing",
  },
];

const pricingTiers = [
  {
    name: "Single Teammate",
    price: "$500",
    period: "/mo",
    recommended: false,
    desc: "One production agent, fully monitored, with a monthly performance report. Right for firms starting with one workflow.",
    includes: [
      "1 AI teammate in production",
      "24/7 uptime monitoring",
      "Monthly performance report",
      "Response tuning & model updates",
      "Human-handoff configuration",
      "Direct Slack or email access",
    ],
    cta: "Get Started",
  },
  {
    name: "Team",
    price: "$1,200",
    period: "/mo",
    recommended: true,
    desc: "Up to three agents working together, with priority monitoring and integration support. Best for firms ready to cover multiple workflows at once.",
    includes: [
      "Up to 3 AI teammates in production",
      "Priority 24/7 monitoring",
      "CRM & calendar integration support",
      "Monthly performance report",
      "Bi-weekly optimization review",
      "Direct Slack or email access",
    ],
    cta: "Build Your Team",
  },
  {
    name: "Embedded",
    price: "From $2,500",
    period: "/mo",
    recommended: false,
    desc: "Full orchestration across all your workflows, bundled with an EchelonFox marketing retainer. For firms that want their AI teammates and their growth team under one roof.",
    includes: [
      "Unlimited AI teammates in production",
      "Full workflow orchestration",
      "Bundled marketing retainer",
      "Weekly strategy review",
      "Priority monitoring & SLA",
      "Board-level reporting on request",
    ],
    cta: "Enquire About Embedded",
  },
];

const comparisonRows = [
  {
    metric: "Monthly cost",
    teammate: "$500–$1,200",
    hire: "~$3,000–$4,500",
    voicemail: "$0 — plus every missed lead",
  },
  {
    metric: "Hours covered",
    teammate: "24/7, including nights & weekends",
    hire: "~40 hrs/week, business hours",
    voicemail: "Passive — no active coverage",
  },
  {
    metric: "Speed to lead",
    teammate: "Under 60 seconds",
    hire: "Minutes to hours depending on workload",
    voicemail: "Zero — lead self-serves or moves on",
  },
  {
    metric: "Leads captured",
    teammate: "Every inbound, every time",
    hire: "Depends on capacity and multitasking",
    voicemail: "Near zero — most callers don't leave messages",
  },
  {
    metric: "Ramp time",
    teammate: "2–4 weeks to go live",
    hire: "30–90 days to full productivity",
    voicemail: "Immediate — and immediately ineffective",
  },
  {
    metric: "Sick days / turnover",
    teammate: "None",
    hire: "Industry average: 3–5 sick days/yr + turnover risk",
    voicemail: "N/A",
  },
];

const faq = [
  {
    q: "What is an AI teammate?",
    a: "An AI teammate is a configured, managed agent that handles a specific job in your business — answering leads, booking appointments, or re-engaging cold contacts. It works inside your existing tools (CRM, phone, calendar) and hands off to your staff when human judgment is needed.",
  },
  {
    q: "Will it sound robotic?",
    a: "No. We train each teammate on your business — your tone, your services, your common questions. Interactions are conversational and on-brand. We test extensively before launch.",
  },
  {
    q: "What happens when it can't handle something?",
    a: "Every teammate has defined escalation rules. When a conversation falls outside its scope, it routes to the right person on your team with full context — the transcript, the lead's details, and a summary — so your staff never starts from scratch.",
  },
  {
    q: "Is it compliant with TCPA and call-recording laws?",
    a: "Yes. We build compliance into the setup: SMS consent flows, call-recording disclosures, and PII handling appropriate for regulated industries like insurance and legal. We are not your attorney, but we take compliance seriously and design accordingly.",
  },
  {
    q: "How fast can we launch?",
    a: "The Opportunity Audit takes about one week. A standard Build takes two to four weeks depending on integration complexity. Most clients go live within a month of starting.",
  },
  {
    q: "What does it cost?",
    a: "The Opportunity Audit is $750–$1,500 flat, credited toward your build. Build starts at $1,500 per teammate. Ongoing managed service starts at $500/month for a single teammate.",
  },
];

const whoWeWorkWith = [
  { label: "Insurance Agencies", desc: "Lead response and intake for high-inbound agencies. We already run teammates for insurance clients — including Lamb." },
  { label: "Bilingual Legal Offices", desc: "Front desk and intake coverage in English and Spanish. No missed consultations, no lost referrals." },
  { label: "Med Spas & Cosmetic Dental", desc: "Appointment booking and reactivation for high-value services where a single no-show costs real money." },
  { label: "HVAC & Home Services", desc: "24/7 call handling during peak season when your office is overwhelmed and leads go cold fast." },
  { label: "Financial Advisory Firms", desc: "Compliant lead qualification and intake for AUM-driven practices where every qualified prospect matters." },
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
              AI Teammates
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
              AI Teammates — Now Available
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
            AI teammates that{" "}
            <span style={{ color: "#FF5500" }}>never miss</span>
            <br />a lead.
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
            They work alongside your team — 24/7 — capturing the revenue you currently lose to
            voicemail and slow follow-up. Built for established service businesses that are tired of
            stretched staff and missed opportunities.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link
              href="EDITABLE_BOOKING_LINK"
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
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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
              The Real Cost
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
                You&apos;re losing six figures a year{" "}
                <span style={{ color: "#FF5500" }}>to voicemail.</span>
              </h2>
              <p
                style={{
                  color: "#888",
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  margin: "0 0 24px",
                }}
              >
                Most small businesses aren&apos;t losing leads to competitors. They&apos;re losing
                them to nobody — a ringing phone at 6 PM, a web form that sat in an inbox over the
                weekend, a follow-up that never happened because your team was already at capacity.
              </p>
              <p
                style={{
                  color: "#888",
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  margin: "0 0 32px",
                }}
              >
                The math compounds fast. A{" "}
                <span style={{ color: "#fff", fontWeight: 700 }}>home service company</span> that
                misses{" "}
                <span style={{ color: "#fff", fontWeight: 700 }}>10</span> calls a week at
                a{" "}
                <span style={{ color: "#fff", fontWeight: 700 }}>30%</span> close rate and{" "}
                <span style={{ color: "#fff", fontWeight: 700 }}>$1,800</span> average value
                loses roughly{" "}
                <span style={{ color: "#FF5500", fontWeight: 800 }}>$280,000 a year</span> — to
                voicemail.
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
                  Studies show <strong style={{ color: "#fff" }}>78% of customers buy from the first business that responds.</strong>{" "}
                  Speed-to-lead isn&apos;t a nice-to-have — it&apos;s a close rate multiplier.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { stat: "78%", label: "of customers buy from the first business that responds" },
                { stat: "5 min", label: "is how long before a lead's probability of converting drops by 80%" },
                { stat: "EDITABLE", label: "average annual revenue lost per missed call in your vertical" },
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
          .teammate-card:hover { background: #0f0f0f !important; }
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
              Every engagement follows the same spine. No skipping steps — the audit prevents bad
              builds, and the managed service prevents silent failures.
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
                An unwatched agent that breaks quietly is a liability — we own the watching.
              </strong>{" "}
              Run is where the value compounds: continuous tuning, model updates, and a performance
              loop that keeps your teammates improving month over month.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 4. Meet the teammates ───────────────────────────────── */}
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
                The Roster
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
              Meet Your Teammates
            </h2>
            <p style={{ color: "#666", fontSize: "1rem", lineHeight: 1.7, maxWidth: "560px", margin: 0 }}>
              Each teammate is built for a specific job. Most clients start with one and add more as
              the first proves its return.
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
            {teammates.map((t) => (
              <div
                key={t.name}
                className="teammate-card"
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
              Your teammates handle volume. Your people handle judgment. We design the boundary
              between the two with care.
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
                desc: "Every teammate has hard limits. When a conversation exceeds its scope, it routes to the right person on your team — with the full transcript, lead context, and a summary. Your staff never starts cold.",
              },
              {
                title: "Full transcripts, always",
                desc: "Every interaction is logged. You can review any conversation at any time. No black box — you see exactly what your teammate said and when.",
              },
              {
                title: "Compliance-aware by default",
                desc: "TCPA-compliant SMS consent flows, call-recording disclosures, and PII handling appropriate for regulated industries. Built in from day one — not bolted on after launch.",
              },
              {
                title: "You stay in control",
                desc: "You approve the escalation rules. You set the tone. You define the scope. We configure and operate — but the decisions about what your teammate can and can't do belong to you.",
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
              Three ways to engage
            </h2>
            <p style={{ color: "#666", fontSize: "1rem", lineHeight: 1.7, margin: 0 }}>
              Start with the Audit. Every dollar you spend on it comes back if you build.
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
                desc: "We map your revenue leaks, identify which workflows a teammate can own, and model projected ROI before you commit to anything.",
                includes: [
                  "Revenue & workflow audit",
                  "Competitor analysis",
                  "Teammate recommendations",
                  "Projected ROI model",
                  "Full audit report",
                ],
              },
              {
                phase: "Build",
                name: "Teammate Setup",
                price: "From $1,500",
                note: "per teammate · one-time",
                desc: "End-to-end configuration: integrated with your CRM, calendar, and phone, trained on your business, tested, and launched.",
                includes: [
                  "CRM & calendar integration",
                  "Phone / SMS configuration",
                  "Custom training on your business",
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
              Run — Monthly Managed Service
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
                  href="EDITABLE_BOOKING_LINK"
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
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
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
                How It Stacks Up
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
                  {["AI Teammate", "Full-Time Hire", "Voicemail"].map((col, i) => (
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
                Who We Work With
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
              Already running for real clients.
            </h2>
            <p style={{ color: "#666", fontSize: "1rem", lineHeight: 1.7, maxWidth: "620px", margin: 0 }}>
              These teammates are in production — not prototypes. EchelonFox runs AI agents for
              clients across insurance, legal, and service businesses today. EDITABLE_STAT_1.
              EDITABLE_STAT_2.
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
            Find out exactly what your team is losing —{" "}
            <span style={{ color: "#FF5500" }}>before another lead goes to voicemail.</span>
          </h2>
          <p style={{ color: "#666", fontSize: "1rem", lineHeight: 1.7, margin: "0 0 16px" }}>
            The Opportunity Audit maps your revenue leaks and shows you the ROI before you spend a
            dollar on a build. Fixed fee, credited back if you move forward.
          </p>
          <p style={{ color: "#444", fontSize: "0.85rem", margin: "0 0 40px" }}>
            Built for 5–30-person service businesses. Not a sales call — a working audit.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="EDITABLE_BOOKING_LINK"
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
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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
