"use client";
import Link from "next/link";
import WorkCard from "@/components/WorkCard";
import { projects } from "@/lib/work-data";

export default function WorkPreview() {
  return (
    <section
      id="selected-work"
      style={{
        padding: "120px 32px",
        background: "#0a0a0a",
        borderTop: "1px solid #1a1a1a",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "56px",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <div style={{ width: "24px", height: "2px", background: "#FF5500" }} />
              <span style={{ color: "#FF5500", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                Selected Work
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              What We&apos;ve{" "}
              <span style={{ color: "#FF5500" }}>Built</span>
            </h2>
          </div>
          <Link
            href="/work"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "#FF5500",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.75")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            View All Work
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="#FF5500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <div
          className="work-preview-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}
        >
          {projects.map((card) => (
            <WorkCard key={card.name} card={card} compact />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .work-preview-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .work-preview-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
