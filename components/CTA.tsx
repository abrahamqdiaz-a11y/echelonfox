"use client";

export default function CTA() {
  return (
    <section
      id="contact"
      style={{
        padding: "120px 32px",
        background: "#0a0a0a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background elements */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,85,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,85,0,0.03) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(255,85,0,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(255,85,0,0.1)",
            border: "1px solid rgba(255,85,0,0.3)",
            borderRadius: "999px",
            padding: "6px 16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              background: "#FF5500",
              borderRadius: "50%",
              boxShadow: "0 0 8px #FF5500",
            }}
          />
          <span
            style={{
              color: "#FF5500",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Now Accepting New Clients
          </span>
        </div>

        <h2
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: "-0.03em",
            margin: "0 0 24px",
          }}
        >
          Ready to{" "}
          <span style={{ color: "#FF5500" }}>Dominate</span>
          <br />
          Your Market?
        </h2>

        <p
          style={{
            color: "#666",
            fontSize: "1.1rem",
            lineHeight: 1.7,
            margin: "0 0 48px",
            maxWidth: "560px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Let&apos;s build something that your competitors will study and your customers will remember.
          One conversation. Zero fluff.
        </p>

        {/* Form */}
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            maxWidth: "560px",
            margin: "0 auto 32px",
          }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <input
              type="text"
              placeholder="Your Name"
              required
              style={{
                background: "#111",
                border: "1px solid #222",
                color: "#fff",
                padding: "14px 18px",
                fontSize: "0.9rem",
                outline: "none",
                transition: "border-color 0.2s",
                width: "100%",
              }}
              onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "#FF5500")}
              onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "#222")}
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              style={{
                background: "#111",
                border: "1px solid #222",
                color: "#fff",
                padding: "14px 18px",
                fontSize: "0.9rem",
                outline: "none",
                transition: "border-color 0.2s",
                width: "100%",
              }}
              onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "#FF5500")}
              onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "#222")}
            />
          </div>
          <input
            type="text"
            placeholder="Company / Brand"
            style={{
              background: "#111",
              border: "1px solid #222",
              color: "#fff",
              padding: "14px 18px",
              fontSize: "0.9rem",
              outline: "none",
              transition: "border-color 0.2s",
              width: "100%",
            }}
            onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "#FF5500")}
            onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "#222")}
          />
          <textarea
            placeholder="Tell us about your goals and what you're trying to achieve..."
            rows={4}
            style={{
              background: "#111",
              border: "1px solid #222",
              color: "#fff",
              padding: "14px 18px",
              fontSize: "0.9rem",
              outline: "none",
              resize: "vertical",
              transition: "border-color 0.2s",
              fontFamily: "inherit",
              width: "100%",
            }}
            onFocus={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = "#FF5500")}
            onBlur={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = "#222")}
          />
          <button
            type="submit"
            style={{
              background: "#FF5500",
              color: "white",
              fontWeight: 700,
              fontSize: "0.9rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "16px 40px",
              border: "none",
              cursor: "pointer",
              clipPath:
                "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
              transition: "background 0.2s, transform 0.2s",
              width: "100%",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#FF7733";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#FF5500";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Send It — Let&apos;s Talk →
          </button>
        </form>

        <p style={{ color: "#444", fontSize: "0.8rem", letterSpacing: "0.05em" }}>
          No spam. No long sales calls. Just real strategy.
        </p>
      </div>
    </section>
  );
}
