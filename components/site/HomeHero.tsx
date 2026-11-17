import { useId } from "react";

/**
 * Homepage hero. Thin accent lines converge on the centre of the primary
 * button and leave as a single exit line. The SVG sits inside the span that
 * wraps the primary button, so its centre is the button's centre; the hero
 * clips whatever overflows on small screens.
 *
 * Gradient IDs come from useId so each copy of the hero on a page gets its own.
 */

// Start points (left edge) of the converging lines, in viewBox units.
const INPUTS = [24, 92, 152, 200, 248, 308, 376];
const CX = 600;
const CY = 200;

export default function HomeHero() {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const inId = `gp-hero-in-${uid}`;
  const outId = `gp-hero-out-${uid}`;

  return (
    <section className="gp-hero" aria-labelledby={`gp-hero-title-${uid}`}>
      <div className="container gp-hero__inner">
        <p className="gp-hero__eyebrow">
          Go-to-market strategy + revenue operations
        </p>
        <h1 className="gp-hero__title" id={`gp-hero-title-${uid}`}>
          A growth plan that actually gets built.
        </h1>
        <p className="gp-hero__lead">
          We help B2B companies build a growth plan they can rely on: which
          customers to go after, how to win them, and the marketing and sales
          systems that deliver it every month.
        </p>
        <div className="gp-hero__actions">
          <span className="gp-hero__cta">
            <svg
              className="gp-hero__lines"
              viewBox="0 0 1200 400"
              aria-hidden="true"
              focusable="false"
            >
              <defs>
                <linearGradient
                  id={inId}
                  gradientUnits="userSpaceOnUse"
                  x1="0"
                  y1="0"
                  x2={CX}
                  y2="0"
                >
                  <stop offset="0" stopColor="currentColor" stopOpacity="0" />
                  <stop offset="0.65" stopColor="currentColor" stopOpacity="0.45" />
                  <stop offset="1" stopColor="currentColor" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient
                  id={outId}
                  gradientUnits="userSpaceOnUse"
                  x1={CX}
                  y1="0"
                  x2="1200"
                  y2="0"
                >
                  <stop offset="0" stopColor="currentColor" stopOpacity="1" />
                  <stop offset="0.7" stopColor="currentColor" stopOpacity="0.6" />
                  <stop offset="1" stopColor="currentColor" stopOpacity="0" />
                </linearGradient>
              </defs>
              <g fill="none" strokeLinecap="round">
                {INPUTS.map((y) => (
                  <path
                    key={y}
                    d={`M0 ${y} C ${CX * 0.55} ${y} ${CX * 0.7} ${CY} ${CX} ${CY}`}
                    stroke={`url(#${inId})`}
                    strokeWidth="1"
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
                <path
                  className="gp-hero__exit"
                  d={`M${CX} ${CY} H1200`}
                  stroke={`url(#${outId})`}
                  strokeWidth="1.5"
                  vectorEffect="non-scaling-stroke"
                />
              </g>
            </svg>
            <a className="gp-hero__btn gp-hero__btn--primary" href="#contact">
              Book a Revenue Leak Diagnostic
            </a>
          </span>
          <a className="gp-hero__btn gp-hero__btn--secondary" href="#what-we-do">
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
