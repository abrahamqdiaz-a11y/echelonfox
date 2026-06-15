"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("echelonfox-cookie-consent");
    if (!stored) setVisible(true);
  }, []);

  const dismiss = (choice: "accepted" | "declined") => {
    localStorage.setItem("echelonfox-cookie-consent", choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent notice"
      aria-live="polite"
      style={{
        position: "fixed",
        bottom: "24px",
        left: "24px",
        right: "24px",
        maxWidth: "600px",
        background: "#111",
        border: "1px solid #2a2a2a",
        padding: "20px 24px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        flexWrap: "wrap",
        boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
      }}
    >
      <p style={{ color: "#888", fontSize: "0.85rem", lineHeight: 1.6, margin: 0, flex: 1, minWidth: "200px" }}>
        We use essential cookies to operate this site. No tracking or advertising
        cookies are set without your consent. See our{" "}
        <Link
          href="/privacy"
          style={{ color: "#FF5500", textDecoration: "underline" }}
        >
          Privacy Policy
        </Link>{" "}
        for details.
      </p>
      <div style={{ display: "flex", gap: "12px", flexShrink: 0 }}>
        <button
          onClick={() => dismiss("declined")}
          style={{
            background: "transparent",
            border: "1px solid #333",
            color: "#666",
            padding: "8px 16px",
            fontSize: "0.8rem",
            cursor: "pointer",
            fontWeight: 600,
            letterSpacing: "0.05em",
            fontFamily: "inherit",
          }}
        >
          Decline
        </button>
        <button
          onClick={() => dismiss("accepted")}
          style={{
            background: "#FF5500",
            border: "none",
            color: "#fff",
            padding: "8px 20px",
            fontSize: "0.8rem",
            cursor: "pointer",
            fontWeight: 700,
            letterSpacing: "0.05em",
            fontFamily: "inherit",
          }}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
