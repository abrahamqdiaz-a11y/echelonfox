/** 
 * A purpose-built RevOps illustration, not a product screenshot or customer data.
 * Pure CSS animation; the static design remains legible without JavaScript.
 */
export default function PeoplePanels() {
  return (
    <figure className="signal-system">
      <div
        className="signal-system__stage"
        role="img"
        aria-label="Marketing, sales and customer retention connected through one revenue operations system"
      >
        <div className="signal-system__mesh" aria-hidden="true" />
        <svg
          className="signal-system__paths"
          viewBox="0 0 600 510"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M300 270 C248 198 199 160 132 139" />
          <path d="M300 270 C375 198 423 177 486 144" />
          <path d="M300 270 C300 330 300 372 300 428" />
        </svg>

        <div className="signal-system__core" aria-hidden="true">
          <span className="signal-system__core-label">ECHELONFOX</span>
          <strong>Revenue operations</strong>
          <span className="signal-system__core-meta">One connected system</span>
        </div>

        <div className="signal-system__node signal-system__node--one" aria-hidden="true">
          <span className="signal-system__node-kicker">01 / Marketing</span>
          <strong>Demand captured</strong>
          <span>Every enquiry has a next step.</span>
        </div>
        <div className="signal-system__node signal-system__node--two" aria-hidden="true">
          <span className="signal-system__node-kicker">02 / Sales</span>
          <strong>Quotes followed up</strong>
          <span>Every open opportunity has an owner.</span>
        </div>
        <div className="signal-system__node signal-system__node--three" aria-hidden="true">
          <span className="signal-system__node-kicker">03 / Retention</span>
          <strong>Customers monitored</strong>
          <span>Changes in buying behaviour get noticed.</span>
        </div>

        <span className="signal-system__annotation signal-system__annotation--left" aria-hidden="true">Identify the leak</span>
        <span className="signal-system__annotation signal-system__annotation--right" aria-hidden="true">Keep it fixed</span>
      </div>
      <figcaption>
        Marketing, sales and customer retention working as one system.
      </figcaption>
    </figure>
  );
}
