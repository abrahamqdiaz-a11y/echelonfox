"use client";
import { Fragment } from "react";

const rows = [
  {
    bad: "Rotating account managers who re-learn your business every quarter",
    good: "One person who knows your market, your competitors, and your numbers — start to finish",
  },
  {
    bad: "Monthly PDF reports filled with impressions and click counts",
    good: "Live reporting tied to leads, revenue, and pipeline rather than impressions",
  },
  {
    bad: "File a ticket and wait for the next sprint cycle",
    good: "Weekly sprints with defined output — you see work ship every week",
  },
  {
    bad: "Scope creep, change orders, and surprise invoices",
    good: "Flat monthly subscription — same fee every month, no change orders, ad spend billed separately",
  },
  {
    bad: "Strategy and execution live in different departments",
    good: "The person planning the work is the person doing it — no telephone game",
  },
  {
    bad: "Annual contracts with auto-renewal traps",
    good: "No annual contract — month to month with 60 days' notice, so you stay because it works",
  },
];

export default function OldVsNew() {
  return (
    <section
      style={{
        padding: "100px 32px",
        background: "#0f0d0c",
        borderTop: "1px solid #1a1a1a",
        borderBottom: "1px solid #1a1a1a",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Section label */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "48px" }}>
          <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
          <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            The Difference
          </span>
        </div>

        {/* Column headers */}
        <div
          className="old-vs-new-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1px",
            background: "#1a1a1a",
            border: "1px solid #1a1a1a",
          }}
        >
          {/* Header row */}
          <div style={{ background: "#110a08", padding: "20px 28px", borderBottom: "1px solid #1a1a1a" }}>
            <span style={{ color: "#cc4444", fontSize: "0.85rem", fontWeight: 800, letterSpacing: "0.05em" }}>
              The Old Agency Way ❌
            </span>
          </div>
          <div style={{ background: "#08110a", padding: "20px 28px", borderBottom: "1px solid #1a1a1a" }}>
            <span style={{ color: "#FF5500", fontSize: "0.85rem", fontWeight: 800, letterSpacing: "0.05em" }}>
              The Echelon Fox Way ✅
            </span>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <Fragment key={row.bad}>
              <div
                style={{
                  background: i % 2 === 0 ? "#0c0a09" : "#0a0808",
                  padding: "20px 28px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  borderBottom: i < rows.length - 1 ? "1px solid #1a1a1a" : "none",
                }}
              >
                <span style={{ color: "#cc4444", flexShrink: 0, marginTop: "2px", fontSize: "0.9rem" }}>✗</span>
                <p style={{ color: "#888", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>{row.bad}</p>
              </div>
              <div
                style={{
                  background: i % 2 === 0 ? "#09100b" : "#080d09",
                  padding: "20px 28px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  borderBottom: i < rows.length - 1 ? "1px solid #1a1a1a" : "none",
                }}
              >
                <span style={{ color: "#FF5500", flexShrink: 0, marginTop: "2px", fontSize: "0.9rem" }}>→</span>
                <p style={{ color: "#c8c8c8", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>{row.good}</p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .old-vs-new-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
