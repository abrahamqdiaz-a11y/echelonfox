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
    <div role="region" aria-label="Cookie notice" className="cookie-notice">
      <p>
        We don&apos;t use analytics, advertising, or tracking cookies on this site — only what&apos;s
        needed to make it work. Details are in our <Link href="/privacy">Privacy Policy</Link>.
      </p>
      <button type="button" onClick={dismiss} className="btn">
        Got it
      </button>
    </div>
  );
}
