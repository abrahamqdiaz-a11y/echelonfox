/**
 * Case-study illustration for the beauty supply retailer: sales concentrated on
 * a few days, staffing flat across the week, Sunday marked in red pen. It shows
 * the shape of the finding only; the client's figures are not published.
 */
const days = [
  { d: "Mon", h: 64 },
  { d: "Tue", h: 72 },
  { d: "Wed", h: 88 },
  { d: "Thu", h: 112 },
  { d: "Fri", h: 146 },
  { d: "Sat", h: 132 },
  { d: "Sun", h: 34 },
];

export default function WeekPattern() {
  const base = 220;
  const staffY = base - 104;
  return (
    <figure className="illo-figure">
      <svg className="illo" viewBox="0 56 480 200" role="img" aria-labelledby="week-title" focusable="false">
        <title id="week-title">
          Illustrative chart: sales rise through the week and peak on Friday and Saturday, while staffing stays
          flat every day. Sunday, with the lowest sales, is circled in red.
        </title>
        <line x1="24" y1={base} x2="456" y2={base} className="illo-axis" />
        {days.map((b, i) => {
          const x = 36 + i * 60;
          return (
            <g key={b.d}>
              <rect
                x={x}
                y={base - b.h}
                width="40"
                height={b.h}
                rx="6"
                className={i === 6 ? "illo-bar illo-bar--soft" : "illo-bar"}
                style={{ animationDelay: `${i * 0.05}s` }}
              />
              <text x={x + 20} y={base + 24} textAnchor="middle" className="illo-tick">
                {b.d}
              </text>
            </g>
          );
        })}
        <line x1="24" y1={staffY} x2="456" y2={staffY} className="illo-dash" />
        <text x="24" y={staffY - 10} className="illo-small">
          Staffing
        </text>
        <path
          pathLength={1}
          className="illo-pen illo-pen--now"
          d="M392 162c12-14 46-12 54 12 10 30 4 80-30 82-32 2-44-28-40-56 2-12 8-22 20-28"
        />
      </svg>
      <figcaption className="caption">Illustrative: the shape of the finding, not the client&apos;s figures</figcaption>
    </figure>
  );
}
