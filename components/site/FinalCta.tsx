import Link from "next/link";
import Arrow from "./Arrow";
import { SITE } from "@/lib/site";

/**
 * The closing call to action. Its button is the one accent-coloured control on
 * the page, so every other button above it stays ink.
 */
export default function FinalCta({
  eyebrow = "Start a conversation",
  title = "Tell Abe where growth feels stuck.",
  body = "Send a short note about the business and what you've tried. Every enquiry goes straight to Abe, and you'll hear back within one business day.",
  label = "Start a conversation",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  label?: string;
}) {
  return (
    <section className="section" aria-labelledby="final-cta-title">
      <div className="container">
        <div className="split split--wide-left" style={{ alignItems: "end" }}>
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 id="final-cta-title" className="h2">
              {title}
            </h2>
            <p className="lead muted" style={{ marginTop: "1.5rem" }}>
              {body}
            </p>
          </div>
          <div className="stack" style={{ ["--stack" as string]: "1.25rem" }}>
            <Link href="/contact" className="btn btn--final">
              {label}
              <Arrow />
            </Link>
            <p className="small muted" style={{ margin: 0 }}>
              Prefer to pick a time?{" "}
              <a className="text-link" href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
                Book a call with Abe directly
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
