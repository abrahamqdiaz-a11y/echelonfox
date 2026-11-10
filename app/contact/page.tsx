import PageShell from "@/components/site/PageShell";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Contact — Discuss Your AI Opportunities",
  "Discuss AI strategy, workflow automation or an AI assistant. Start with your business challenge and explore a practical next step.",
  "/contact",
);
export default function Contact() {
  return (
    <PageShell>
      <section className="page-hero contact-page">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Let’s talk</p>
            <h1 className="h1">What could work better with AI?</h1>
            <p className="lead">
              Whether you have a specific AI idea or need help finding the right
              starting point, tell us about the work you want to improve.
            </p>
            <div className="contact-expectations">
              <p className="label">What happens next</p>
              <ol>
                <li>
                  <strong>We read your enquiry.</strong>
                  <span>A person reviews the challenge you describe.</span>
                </li>
                <li>
                  <strong>We start with a conversation.</strong>
                  <span>
                    We explore your goals, workflows and where AI might be
                    useful.
                  </span>
                </li>
                <li>
                  <strong>We discuss a useful next step.</strong>
                  <span>
                    The scope follows the business and whether we are the right
                    fit.
                  </span>
                </li>
              </ol>
            </div>
            <div className="contact-options">
              <p>
                Prefer to pick a time?
                <br />
                <a
                  className="text-link"
                  href={SITE.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a conversation
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </p>
              <p>
                Or email directly
                <br />
                <a className="text-link" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </p>
            </div>
          </div>
          <div className="contact-panel">
            <h2 className="h3">Start with the challenge.</h2>
            <p className="small muted">
              No need to choose a service. Fields marked required must be
              completed.
            </p>
            <ContactForm visibleLabels submitLabel="Send Your Enquiry" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
