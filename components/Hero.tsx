"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    setTimeout(() => {
      el.style.transition = "opacity 1s ease, transform 1s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "120px 32px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,85,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,85,0,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Orange glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(255,85,0,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(255,85,0,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1400px", margin: "0 auto", width: "100%", position: "relative" }}>
        {/* Label */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "32px",
            opacity: 0,
            animation: "fadeUp 0.6s ease 0.2s forwards",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              background: "#FF5500",
              borderRadius: "50%",
              boxShadow: "0 0 12px #FF5500",
            }}
          />
          <span
            style={{
              color: "#FF5500",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            World-Class Digital Marketing
          </span>
        </div>

        {/* Main headline */}
        <h1
          ref={headlineRef}
          style={{
            fontSize: "clamp(3rem, 9vw, 8rem)",
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            margin: "0 0 32px",
            maxWidth: "900px",
          }}
        >
          We Make{" "}
          <span
            style={{
              color: "#FF5500",
              display: "inline-block",
              position: "relative",
            }}
          >
            Brands
            <svg
              style={{
                position: "absolute",
                bottom: "-8px",
                left: 0,
                width: "100%",
              }}
              viewBox="0 0 200 12"
              fill="none"
            >
              <path
                d="M2 10 C50 2, 150 2, 198 10"
                stroke="#FF5500"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                opacity="0.5"
              />
            </svg>
          </span>
          <br />
          Impossible{" "}
          <span style={{ color: "#333" }}>to</span>
          <br />
          Ignore.
        </h1>

        {/* Sub copy */}
        <p
          style={{
            color: "#888",
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            lineHeight: 1.7,
            maxWidth: "560px",
            margin: "0 0 48px",
            opacity: 0,
            animation: "fadeUp 0.6s ease 0.5s forwards",
          }}
        >
          Echelon Fox is the premier digital marketing powerhouse. We craft campaigns,
          content, and strategies that don&apos;t just compete — they dominate.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            opacity: 0,
            animation: "fadeUp 0.6s ease 0.7s forwards",
          }}
        >
          <a
            href="#work"
            style={{
              background: "#FF5500",
              color: "white",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "16px 36px",
              textDecoration: "none",
              clipPath:
                "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
              transition: "background 0.2s, transform 0.2s",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#FF7733";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#FF5500";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            See Our Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#contact"
            style={{
              background: "transparent",
              color: "white",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "15px 35px",
              textDecoration: "none",
              border: "1px solid #333",
              clipPath:
                "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
              transition: "border-color 0.2s, color 0.2s",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#FF5500";
              (e.currentTarget as HTMLElement).style.color = "#FF5500";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#333";
              (e.currentTarget as HTMLElement).style.color = "white";
            }}
          >
            Start a Project
          </a>
        </div>

        {/* Scrolling stats row */}
        <div
          style={{
            display: "flex",
            gap: "48px",
            marginTop: "80px",
            paddingTop: "40px",
            borderTop: "1px solid #1a1a1a",
            flexWrap: "wrap",
            opacity: 0,
            animation: "fadeUp 0.6s ease 0.9s forwards",
          }}
        >
          {[
            { num: "500+", label: "Campaigns Launched" },
            { num: "$2.4B", label: "Revenue Generated" },
            { num: "98%", label: "Client Retention" },
            { num: "#1", label: "Rated Media Co." },
          ].map((s) => (
            <div key={s.num}>
              <div
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 900,
                  color: "#FF5500",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  marginBottom: "4px",
                }}
              >
                {s.num}
              </div>
              <div style={{ fontSize: "0.8rem", color: "#666", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
