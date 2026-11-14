import Link from "next/link";
import Arrow from "./Arrow";
import { PRIMARY_CTA } from "@/lib/offers";

/**
 * The single closing call to action. Every page ends with this block, unchanged,
 * so it takes no props.
 */
export default function FinalCta() {
  return (
    <section className="final-cta">
      <div className="container split">
        <div>
          <p className="eyebrow">The next step</p>
          <h2 className="h2">Find out what the leak is worth.</h2>
          <p className="lead">
            Two weeks and a fixed fee from $2,000. You get a costed, ranked list
            of where your business is losing revenue, and the fee is credited to
            a Build signed within 30 days.
          </p>
        </div>
        <div className="final-cta__actions">
          <Link className="btn btn--copper" href={PRIMARY_CTA.href}>
            {PRIMARY_CTA.label}
            <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
