/**
 * Line icons, drawn on a 24px grid and shown in a rounded tile. Decorative:
 * every use sits beside a visible heading that says the same thing.
 */
export type IconName =
  | "revenue"
  | "customers"
  | "operations"
  | "priority"
  | "commercial-diagnosis"
  | "customer-acquisition"
  | "sales-process-crm"
  | "ai-automation";

const paths: Record<IconName, React.ReactNode> = {
  revenue: (
    <>
      <path d="M4 20h16" />
      <path d="M7 16v-4M11 16V8M15 16v-6M19 16V5" />
    </>
  ),
  customers: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5" />
      <path d="M15 5.3a3 3 0 0 1 0 5.4M17.5 14.4c1.6.7 2.7 2.3 3 4.6" />
    </>
  ),
  operations: (
    <>
      <rect x="3" y="4" width="6" height="5" rx="1.5" />
      <rect x="15" y="4" width="6" height="5" rx="1.5" />
      <rect x="9" y="15" width="6" height="5" rx="1.5" />
      <path d="M9 6.5h6M6 9v3.5h6V15M18 9v3.5h-6" />
    </>
  ),
  priority: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </>
  ),
  "commercial-diagnosis": (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5 20 20" />
      <path d="M7.5 12.5v-2M10.5 12.5v-4M13.5 12.5v-3" />
    </>
  ),
  "customer-acquisition": (
    <>
      <path d="M3.5 5h17l-6.5 7.5V19l-4 1.5v-8L3.5 5Z" />
    </>
  ),
  "sales-process-crm": (
    <>
      <rect x="3" y="4" width="5" height="16" rx="1.5" />
      <rect x="9.5" y="4" width="5" height="11" rx="1.5" />
      <rect x="16" y="4" width="5" height="7" rx="1.5" />
    </>
  ),
  "ai-automation": (
    <>
      <path d="M12 3.5 13.6 8.4 18.5 10l-4.9 1.6L12 16.5l-1.6-4.9L5.5 10l4.9-1.6L12 3.5Z" />
      <path d="M18 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
    </>
  ),
};

export default function Icon({ name, size = "md" }: { name: IconName; size?: "md" | "lg" }) {
  return (
    <span className={`icon-tile${size === "lg" ? " icon-tile--lg" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        {paths[name]}
      </svg>
    </span>
  );
}
