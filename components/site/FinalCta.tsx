import Link from "next/link";
import Arrow from "./Arrow";
import { SITE } from "@/lib/site";
export default function FinalCta({
  eyebrow = "The next step",
  title = "Find the right way forward.",
  body = "Tell us what your business needs to improve. We’ll explore the commercial challenge and the practical steps worth taking.",
  label = "Discuss Your Business",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  label?: string;
}) {
  return (
    <section className="final-cta">
      <div className="container split">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="h2">{title}</h2>
          <p className="lead">{body}</p>
        </div>
        <div className="final-cta__actions">
          <Link className="btn btn--copper" href="/contact">
            {label}
            <Arrow />
          </Link>
          <a
            className="text-link small"
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Or book a conversation
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
