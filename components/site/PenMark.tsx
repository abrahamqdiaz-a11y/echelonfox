/**
 * The red-pen underline beneath the constraint phrase in the homepage headline.
 * A single slightly uneven stroke, drawn in once on load (skipped for visitors
 * who prefer reduced motion). The phrase itself stays ink.
 */
export default function PenMark({ children }: { children: React.ReactNode }) {
  return (
    <span className="pen-mark">
      {children}
      <svg viewBox="0 0 300 14" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path
          pathLength={1}
          d="M2 9.5c22-2.6 48-4.1 79-4.6 34-.6 61 .9 95-.2 33-1 64-3.3 90-2.7 11 .3 20 1.3 31 2.8-26-.4-55 .4-86 2.1-24 1.3-44 3-69 3.5"
        />
      </svg>
    </span>
  );
}
