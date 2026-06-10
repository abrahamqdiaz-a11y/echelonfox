"use client";

export interface WorkCardData {
  name: string;
  category: string;
  description: string;
  /** Set to a real URL string once client permission is obtained */
  link?: string;
  /** Set to a real image src string once screenshot is available */
  image?: string;
  /** Used for TODO banners shown in development */
  nameTodo?: boolean;
  linkTodo?: boolean;
  imageTodo?: boolean;
}

interface WorkCardProps {
  card: WorkCardData;
  compact?: boolean;
}

export default function WorkCard({ card, compact = false }: WorkCardProps) {
  const imageHeight = compact ? "140px" : "220px";

  return (
    <div
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
      {/* Image slot */}
      <div
        style={{
          height: imageHeight,
          background: "#141414",
          borderBottom: "1px solid #1e1e1e",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        {card.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={card.image}
            alt={`${card.name} screenshot`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div style={{ textAlign: "center" }}>
            <div style={{ color: "#333", fontSize: "2rem", marginBottom: "8px" }}>⬜</div>
            <div style={{ color: "#333", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              {/* TODO: Replace with real screenshot */}
              Screenshot — TODO
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: compact ? "20px" : "28px", display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
        {/* Category label */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "4px", height: "4px", background: "#FF5500", borderRadius: "50%", flexShrink: 0 }} />
          <span style={{ color: "#FF5500", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            {card.category}
          </span>
        </div>

        {/* Name */}
        <h3
          style={{
            fontSize: compact ? "1rem" : "1.2rem",
            fontWeight: 800,
            margin: 0,
            color: card.nameTodo ? "#666" : "#fff",
            fontStyle: card.nameTodo ? "italic" : "normal",
          }}
        >
          {card.name}
        </h3>

        {/* Description */}
        <p style={{ color: "#666", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>
          {card.description}
        </p>

        {/* Link */}
        {card.link && !card.linkTodo && (
          <a
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: "auto",
              paddingTop: "12px",
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
            View Live Site
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="#FF5500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        )}
        {/* TODO: Uncomment and set link once client permission is obtained */}
        {card.linkTodo && (
          <div style={{ marginTop: "auto", paddingTop: "12px", color: "#333", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", fontStyle: "italic" }}>
            Link — TODO (pending client permission)
          </div>
        )}
      </div>
    </div>
  );
}
