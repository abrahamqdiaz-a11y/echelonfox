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
        {/* Main headline */}
        <h1
          ref={headlineRef}
          style={{
            fontSize: "clamp(2.5rem, 7vw, 6.5rem)",
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            margin: "0 0 32px",
            maxWidth: "900px",
          }}
        >
          Your Marketing Team.{" "}
          <span style={{ color: "#FF5500" }}>Monthly.</span>
          <br />
          No Hiring.
        </h1>

        {/* Sub copy */}
        <p
          style={{
            color: "#888",
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            lineHeight: 1.7,
            maxWidth: "560px",
            margin: "0 0 20px",
            opacity: 0,
            animation: "fadeUp 0.6s ease 0.5s forwards",
          }}
        >
          We embed inside your business — strategy, execution, and weekly sprints across SEO,
          paid ads, and content. A team that knows your market, not a vendor who learned your
          name last Tuesday.
        </p>

        {/* Trigger-moment positioning line */}
        <p
          style={{
            color: "#666",
            fontSize: "0.9rem",
            lineHeight: 1.65,
            maxWidth: "520px",
            margin: "0 0 48px",
            opacity: 0,
            animation: "fadeUp 0.6s ease 0.6s forwards",
          }}
        >
          We work with companies when founder-led marketing stops scaling — there&apos;s revenue,
          but no one owns growth full-time.
        </p>

        {/* CTAs */}
        <div
          className="hero-ctas"
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            opacity: 0,
            animation: "fadeUp 0.6s ease 0.7s forwards",
          }}
        >
          <a
            href="/pricing"
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
            See Plans &amp; Pricing
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="https://cal.com/abe-quinn/growth-meeting"
            target="_blank"
            rel="noopener noreferrer"
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
            Book a Strategy Call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
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
