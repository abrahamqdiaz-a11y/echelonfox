export default function Marquee() {
  const items = [
    "Website Design & Build",
    "SEO & Content",
    "Paid Media",
    "Email & CRM",
    "Analytics & Attribution",
    "Brand & Creative",
    "Social Media",
    "Conversion Optimization",
    "AI & Automation",
  ];

  return (
    <div
      style={{
        background: "#FF5500",
        padding: "16px 0",
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          gap: "48px",
          animation: "marquee 30s linear infinite",
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            style={{
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "white",
              display: "inline-flex",
              alignItems: "center",
              gap: "48px",
            }}
          >
            {item}
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.2rem" }}>✦</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
