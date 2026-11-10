export const stages = [
  {
    name: "Diagnose",
    title: "Understand the real challenge.",
    body: "Explore the business, its goals, customers, commercial constraints and existing systems before recommending a solution.",
  },
  {
    name: "Design",
    title: "Choose what matters most.",
    body: "Prioritise the opportunities and develop a practical plan for the problems with the greatest commercial impact.",
  },
  {
    name: "Build",
    title: "Put the plan into practice.",
    body: "Implement the agreed marketing, technology, sales or operational improvements, connecting the work across the business.",
  },
  {
    name: "Improve",
    title: "Review. Refine. Move forward.",
    body: "Measure what can be measured, review how the changes work in practice and refine the systems as the business evolves.",
  },
];
export default function Process({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`process-diagram${compact ? " process-diagram--compact" : ""}`}
    >
      <ol className="process-track">
        {stages.map((stage, i) => (
          <li key={stage.name}>
            <span className="process-node">
              <span>{String(i + 1).padStart(2, "0")}</span>
            </span>
            <h3>{stage.name}</h3>
            <p className="process-title">{stage.title}</p>
            {!compact && <p className="small muted">{stage.body}</p>}
          </li>
        ))}
      </ol>
      <div className="process-loop">
        <span aria-hidden="true">↶</span> Review findings inform the next
        priorities
      </div>
    </div>
  );
}
