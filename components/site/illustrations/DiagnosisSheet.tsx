/**
 * Homepage hero illustration: a diagnosis working sheet. Sales by day, revenue by
 * customer group, and a "fix this first" card, with one red-pen loop around the
 * constraint. Shapes only; no figures, so nothing here reads as a client result.
 */
const days = [
  { d: "M", h: 70 },
  { d: "T", h: 84 },
  { d: "W", h: 98 },
  { d: "T", h: 120 },
  { d: "F", h: 150 },
  { d: "S", h: 134 },
  { d: "S", h: 36 },
];

const groups = [
  { label: "Top buyers", w: 262 },
  { label: "Regulars", w: 138 },
  { label: "Occasional", w: 88 },
  { label: "One-time", w: 52 },
];

export default function DiagnosisSheet() {
  return (
    <svg
      className="illo"
      viewBox="0 0 560 540"
      role="img"
      aria-labelledby="diag-sheet-title"
      focusable="false"
    >
      <title id="diag-sheet-title">
        Illustration of a diagnosis sheet: sales by day of the week and revenue by customer group, with the
        weakest day circled in red as the constraint to fix first.
      </title>
      <defs>
        <filter id="diag-shadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#17181c" floodOpacity="0.10" />
          <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#17181c" floodOpacity="0.08" />
        </filter>
        <pattern id="diag-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0V24" fill="none" className="illo-gridline" />
        </pattern>
      </defs>

      {/* Sheet */}
      <rect x="20" y="20" width="440" height="440" rx="18" className="illo-surface" filter="url(#diag-shadow)" />
      <rect x="20" y="20" width="440" height="440" rx="18" fill="url(#diag-grid)" opacity="0.55" />

      <text x="48" y="60" className="illo-label">Diagnosis · working sheet</text>
      <g className="illo-dots">
        <circle cx="412" cy="56" r="4" />
        <circle cx="424" cy="56" r="4" />
        <circle cx="436" cy="56" r="4" />
      </g>
      <line x1="48" y1="78" x2="432" y2="78" className="illo-rule" />

      {/* Sales by day */}
      <text x="48" y="108" className="illo-label">Sales by day</text>
      <line x1="48" y1="250" x2="432" y2="250" className="illo-axis" />
      {days.map((b, i) => {
        const x = 56 + i * 54;
        return (
          <g key={i}>
            <rect
              x={x}
              y={250 - b.h}
              width="34"
              height={b.h}
              rx="5"
              className={i === 6 ? "illo-bar illo-bar--soft" : "illo-bar"}
              style={{ animationDelay: `${0.15 + i * 0.06}s` }}
            />
            <text x={x + 17} y="272" textAnchor="middle" className="illo-tick">
              {b.d}
            </text>
          </g>
        );
      })}

      {/* Revenue by customer group */}
      <line x1="48" y1="304" x2="432" y2="304" className="illo-rule" />
      <text x="48" y="334" className="illo-label">Revenue by customer group</text>
      {groups.map((g, i) => {
        const y = 352 + i * 24;
        return (
          <g key={g.label}>
            <text x="48" y={y + 10} className="illo-small">
              {g.label}
            </text>
            <rect x="146" y={y} width="270" height="12" rx="6" className="illo-track" />
            <rect
              x="146"
              y={y}
              width={g.w}
              height="12"
              rx="6"
              className={i === 0 ? "illo-hbar" : "illo-hbar illo-hbar--soft"}
              style={{ animationDelay: `${0.5 + i * 0.08}s` }}
            />
          </g>
        );
      })}

      {/* Red pen: the constraint */}
      <path
        pathLength={1}
        className="illo-pen"
        d="M376 204c10-16 40-18 52 4 13 26 5 72-28 76-30 3-42-24-38-50 2-14 10-26 24-32"
      />
      <path pathLength={1} className="illo-pen illo-pen--late" d="M474 186c-14 6-28 14-40 26m0 0 12-2m-12 2 2-12" />
      <text x="476" y="166" className="illo-note">the</text>
      <text x="476" y="186" className="illo-note">constraint</text>

      {/* Priority card */}
      <g className="illo-float">
        <rect x="296" y="398" width="244" height="124" rx="16" className="illo-surface" filter="url(#diag-shadow)" />
        <text x="320" y="428" className="illo-label">Priority 01</text>
        <text x="320" y="458" className="illo-heading">Fix this first.</text>
        <text x="320" y="482" className="illo-small">Then design, build, measure.</text>
        <rect x="320" y="498" width="196" height="5" rx="2.5" className="illo-track" />
        <rect x="320" y="498" width="49" height="5" rx="2.5" className="illo-hbar" />
      </g>
    </svg>
  );
}
