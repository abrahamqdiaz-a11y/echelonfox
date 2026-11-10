export const stages = [
  {
    name: "Diagnose",
    title: "Find a useful opportunity.",
    body: "Understand goals, workflows, data and readiness. Identify where AI could make a practical contribution.",
  },
  {
    name: "Design",
    title: "Design the right approach.",
    body: "Define the workflow, integrations and human oversight. Agree what to build and how to evaluate it.",
  },
  {
    name: "Build",
    title: "Build and test the solution.",
    body: "Implement the agreed AI solution, connect the relevant systems and test it with representative work.",
  },
  {
    name: "Improve",
    title: "Help people put it to use.",
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
