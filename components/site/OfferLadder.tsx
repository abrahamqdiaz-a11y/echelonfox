import Link from "next/link";
import Arrow from "./Arrow";
import { offers, PRIMARY_CTA, type Offer } from "@/lib/offers";

function Price({ offer }: { offer: Offer }) {
  return (
    <p className="offer-price">
      <strong>{offer.price}</strong>
      {offer.terms.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </p>
  );
}

/**
 * The offer ladder: the Diagnostic first, then the two paths side by side.
 * Prices and terms come from lib/offers.ts.
 */
export default function OfferLadder({
  showButton = true,
  detailLinks = true,
}: {
  /** Hide the Diagnostic button where the page's closing CTA follows closely. */
  showButton?: boolean;
  /** Link each offer to its detail on the How It Works page. */
  detailLinks?: boolean;
}) {
  const d = offers.diagnostic;
  const build = offers.build;
  const run = offers.run;
  const egt = offers["embedded-growth-team"];
  return (
    <div className="offer-ladder">
      <article className="offer-start">
        <div>
          <p className="label">Step 1 · Every engagement starts here</p>
          <h3>{d.name}</h3>
          <Price offer={d} />
        </div>
        <div>
          <p>{d.summary}</p>
          <p className="offer-note">{d.note}</p>
          {showButton && (
            <Link className="btn" href={PRIMARY_CTA.href}>
              {PRIMARY_CTA.label}
              <Arrow />
            </Link>
          )}
        </div>
      </article>
      <p className="offer-then label">Then choose a path</p>
      <div className="offer-paths">
        <article className="offer-path">
          <p className="label">Path A</p>
          <h3 className="offer-path__title">Build, then Run</h3>
          {[build, run].map((o) => (
            <div className="offer-item" key={o.id}>
              <h4>{o.name}</h4>
              <Price offer={o} />
              <p>{o.summary}</p>
            </div>
          ))}
          <p className="offer-fit">
            <span>Suits you if</span> you want the leaks fixed, and kept fixed,
            without handing over the whole function.
          </p>
          {detailLinks && (
            <Link className="arrow-link" href="/what-we-do#build">
              Build and Run in detail
              <Arrow />
            </Link>
          )}
        </article>
        <article className="offer-path">
          <p className="label">Path B</p>
          <h3 className="offer-path__title">{egt.name}</h3>
          <div className="offer-item">
            <Price offer={egt} />
            <p>{egt.summary}</p>
          </div>
          <p className="offer-fit">
            <span>Suits you if</span> you need marketing and revenue leadership
            but aren’t ready to hire a full-time executive or build a
            department.
          </p>
          {detailLinks && (
            <Link className="arrow-link" href="/embedded-growth-team">
              The Embedded Growth Team in detail
              <Arrow />
            </Link>
          )}
        </article>
      </div>
    </div>
  );
}
