"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";

const STORAGE_KEY = "echelonfox-cookie-consent";

/** localStorage is an external store, so read it through useSyncExternalStore. */
const subscribe = () => () => {};

function getStoredValue() {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? "";
  } catch {
    // Storage unavailable (private mode, blocked site data) — treat as dismissed.
    return "dismissed";
  }
}

/** On the server, and during hydration, render nothing. */
const getServerValue = () => "dismissed";

/**
 * This site sets no analytics, advertising, or cross-site tracking cookies, so
 * there is nothing to consent to — this is an informational notice, not a
 * consent gate. If tracking is ever added, this must become a real consent
 * mechanism that blocks those scripts until the visitor opts in.
 */
export default function CookieConsent() {
  const stored = useSyncExternalStore(subscribe, getStoredValue, getServerValue);
  const [dismissedNow, setDismissedNow] = useState(false);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "dismissed");
    } catch {
      // Ignore — hiding it for this session is still better than nothing.
    }
    setDismissedNow(true);
  };

  if (stored || dismissedNow) return null;

  return (
    <div
      role="region"
      aria-label="Cookie notice"
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
      <p style={{ color: "#999", fontSize: "0.85rem", lineHeight: 1.6, margin: 0, flex: 1, minWidth: "200px" }}>
        We don&apos;t use analytics, advertising, or tracking cookies on this site — only what&apos;s
        needed to make it work. Details are in our{" "}
        <Link href="/privacy" style={{ color: "#FF5500", textDecoration: "underline" }}>
          Privacy Policy
        </Link>
        .
      </p>
      <button
        onClick={dismiss}
        style={{
          background: "#FF5500",
          border: "none",
          color: "#fff",
          padding: "12px 24px",
          fontSize: "0.8rem",
          cursor: "pointer",
          fontWeight: 700,
          letterSpacing: "0.05em",
          fontFamily: "inherit",
          flexShrink: 0,
          minHeight: "44px",
        }}
      >
        Got it
      </button>
    </div>
  );
}
