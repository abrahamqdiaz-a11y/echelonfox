import type { Metadata } from "next";
import PageShell from "@/components/site/PageShell";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Contact — Start a conversation | EchelonFox" },
  description:
    "Tell us what the business does and where growth feels stuck. Send a message or book a call. Every enquiry gets a reply within one business day.",
  alternates: { canonical: "https://echelonfox.com/contact" },
  openGraph: {
    title: "Contact EchelonFox — Start a conversation",
    description:
      "Send a message or book a call. You'll get an honest answer on whether EchelonFox is the right fit.",
    url: "https://echelonfox.com/contact",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Contact EchelonFox" }],
  },
};

const expectations = [
  {
    title: "A reply from a person, not a bot",
    desc: "Every enquiry is read by the team that would do the work. You'll hear back within one business day.",
  },
  {
    title: "A working call, not a pitch",
    desc: "You'll talk through how the business wins customers today, what you've tried, and where the constraint might be.",
  },
  {
    title: "An honest answer on fit",
    desc: "If EchelonFox isn't what you need right now, we'll say so and point you somewhere useful.",
  },
];

export default function ContactPage() {
  return (
    <PageShell>
      <section className="page-hero" aria-labelledby="contact-title" style={{ paddingBottom: "var(--section)" }}>
        <div className="container split" style={{ alignItems: "start" }}>
          <div>
            <p className="eyebrow">Contact</p>
            <h1 id="contact-title" className="h1">
              Start a conversation.
            </h1>
            <p className="lead" style={{ marginTop: "1.75rem" }}>
              Tell us what the business does, where growth feels stuck, and what you&apos;ve already tried.
            </p>

            <ol className="ruled-list" style={{ marginTop: "2.5rem", borderTopColor: "var(--ink)" }}>
              {expectations.map((item, i) => (
                <li key={item.title} style={{ display: "grid", gridTemplateColumns: "2.5rem 1fr", gap: "0.5rem" }}>
                  <span className="label" style={{ paddingTop: "0.3rem" }} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="serif" style={{ fontSize: "1.35rem", lineHeight: 1.25, margin: 0 }}>
                      {item.title}
                    </h2>
                    <p className="small muted" style={{ margin: "0.3rem 0 0" }}>
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="stack small" style={{ marginTop: "2rem", ["--stack" as string]: "0.5rem" }}>
              <p style={{ margin: 0 }}>
                <span className="muted">Prefer to pick a time? </span>
                <a className="text-link" href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
                  Book a call directly
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </p>
              <p style={{ margin: 0 }}>
                <span className="muted">Or email </span>
                <a className="text-link" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </p>
            </div>
          </div>

          <div className="panel">
            <h2 className="h3" style={{ marginBottom: "0.5rem" }}>
              Send a message
            </h2>
            <p className="small muted" style={{ margin: "0 0 1.75rem" }}>
              Fields marked required must be completed. We only use these details to reply to you.
            </p>
            <ContactForm visibleLabels submitLabel="Start the conversation" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
