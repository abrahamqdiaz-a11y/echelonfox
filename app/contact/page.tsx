import PageShell from "@/components/site/PageShell";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Book a Revenue Leak Diagnostic",
  "Book a Revenue Leak Diagnostic with EchelonFox. Two weeks, from $2,000: a costed, ranked list of where your business is losing revenue.",
  "/contact",
);
export default function Contact() {
  return (
    <PageShell>
      <section className="page-hero contact-page">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Let’s talk</p>
            <h1 className="h1">Book a Revenue Leak Diagnostic.</h1>
            <p className="lead">
              Tell us a little about your business. We’ll reply to arrange a
              short call, check the Diagnostic is a fit and agree what we will
              review.
            </p>
            <div className="contact-expectations">
              <p className="label">What happens next</p>
              <ol>
                <li>
                  <strong>We read your enquiry.</strong>
                  <span>A person reviews what you send.</span>
                </li>
                <li>
                  <strong>We have a short call.</strong>
                  <span>
                    We check the Diagnostic fits and agree access to your
                    enquiries, quotes, order history and CRM.
                  </span>
                </li>
                <li>
                  <strong>Two weeks later, you get the list.</strong>
                  <span>
                    A costed, ranked list of where revenue is being lost, and a
                    recommended next step. From $2,000, credited to a Build
                    signed within 30 days.
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
                  Book a call
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
            <h2 className="h3">Start with what you know.</h2>
            <p className="small muted">
              Tell us how enquiries and orders reach you today. Fields marked
              required must be completed.
            </p>
            <ContactForm visibleLabels submitLabel="Request a Diagnostic" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
