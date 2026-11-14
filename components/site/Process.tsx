/** Diagnose / Design / Build / Improve, mapped onto the offer ladder. */
export const stages = [
  {
    name: "Diagnose",
    title: "Measure the leak.",
    body: "The Revenue Leak Diagnostic puts a dollar figure on each leak and ranks them.",
    offer: "Revenue Leak Diagnostic",
  },
  {
    name: "Design",
    title: "Agree the fix.",
    body: "Scope the top one or two leaks, agree the starting baseline and choose the number we will report.",
    offer: "End of the Diagnostic, start of the Build",
  },
  {
    name: "Build",
    title: "Fix it.",
    body: "Workflow, CRM, follow-up and reporting, tested with your team and handed over with training.",
    offer: "Build, or the first months of the Embedded Growth Team",
  },
  {
    name: "Improve",
    title: "Keep it fixed.",
    body: "Operate the system, make changes each month and report the number every week.",
    offer: "Run, or the Embedded Growth Team",
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
            <p className="small muted">{stage.body}</p>
          </li>
        ))}
      </ol>
      <div className="process-loop">
        <span aria-hidden="true">↶</span> Each week’s number shows where to look
        next.
      </div>
    </div>
  );
}
