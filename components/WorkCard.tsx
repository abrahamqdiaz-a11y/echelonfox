"use client";

export interface WorkCardData {
  /** Client category, or the client's real name once permission to publish it is on file. */
  name: string;
  category: string;
  /** What the client was up against before the work started. */
  challenge: string;
  /** The services delivered on this project. */
  services: string[];
  /** What was actually built or run. */
  implementation: string;
  /** What shipped and what changed. Never add metrics that aren't verified and cleared. */
  outcome: string;
  /** Live URL — only once the client has agreed to be linked. */
  link?: string;
  /** Screenshot — only once the client has agreed to it being shown. */
  image?: string;
}

interface WorkCardProps {
  card: WorkCardData;
  /** Compact cards show the challenge only; full cards show the whole case study. */
  compact?: boolean;
}

const sectionLabel: React.CSSProperties = {
  color: "#FF5500",
  fontSize: "0.65rem",
  fontWeight: 700,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  margin: "0 0 6px",
};

const bodyText: React.CSSProperties = {
  color: "#8a8a8a",
  fontSize: "0.875rem",
  lineHeight: 1.7,
  margin: 0,
};

export default function WorkCard({ card, compact = false }: WorkCardProps) {
  return (
    <article
      style={{
        background: "#0f0f0f",
        border: "1px solid #1e1e1e",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.2s, transform 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#FF5500";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#1e1e1e";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {card.image && (
        <div
          style={{
            height: compact ? "140px" : "220px",
            background: "#141414",
            borderBottom: "1px solid #1e1e1e",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={card.image}
            alt={`Screenshot of the ${card.name} website built by Echelon Fox`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      )}

      <div
        style={{
          padding: compact ? "28px 24px" : "36px 32px",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          flex: 1,
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
            <div style={{ width: "4px", height: "4px", background: "#FF5500", borderRadius: "50%", flexShrink: 0 }} />
            <span style={{ color: "#FF5500", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              {card.category}
            </span>
          </div>
          <h3
            style={{
              fontSize: compact ? "1.05rem" : "1.25rem",
              fontWeight: 800,
              margin: 0,
              color: "#fff",
              letterSpacing: "-0.01em",
            }}
          >
            {card.name}
          </h3>
        </div>

        <div>
          <p style={sectionLabel}>The Challenge</p>
          <p style={bodyText}>{card.challenge}</p>
        </div>

        {!compact && (
          <>
            <div>
              <p style={sectionLabel}>What We Did</p>
              <p style={bodyText}>{card.implementation}</p>
            </div>

            <div>
              <p style={sectionLabel}>Where It Landed</p>
              <p style={bodyText}>{card.outcome}</p>
            </div>
          </>
        )}

        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "auto", paddingTop: "4px" }}>
          {card.services.map((service) => (
            <span
              key={service}
              style={{
                background: "#141414",
                border: "1px solid #222",
                color: "#888",
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "5px 10px",
              }}
            >
              {service}
            </span>
          ))}
        </div>

        {card.link && (
          <a
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              color: "#FF5500",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            View live site
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="#FF5500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}
