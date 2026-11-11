export const stages = [
  {
    name: "Diagnose",
    title: "Understand the commercial challenge.",
    body: "Understand goals, customers, workflows and systems. Identify the constraints and opportunities that matter.",
  },
  {
    name: "Design",
    title: "Design the right approach.",
    body: "Prioritise the work, define responsibilities and agree how the improvement will be evaluated.",
  },
  {
    name: "Build",
    title: "Build and test the solution.",
    body: "Implement the agreed marketing, technology or operational solution and test how it works in practice.",
  },
  {
    name: "Improve",
    title: "Review, refine and improve.",
    body: "Support adoption, review quality and exceptions, and refine the workflow with feedback from the team.",
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
