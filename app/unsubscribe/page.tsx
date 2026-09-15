import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "Unsubscribe",
  description: "Unsubscribe from Echelon Fox marketing emails.",
  alternates: {
    canonical: "https://echelonfox.com/unsubscribe",
  },
  robots: {
    index: false,
    follow: false,
  },
};

const cardStyle: CSSProperties = {
  width: "100%",
  maxWidth: "480px",
  background: "var(--card-bg)",
  border: "1px solid var(--border)",
  borderRadius: "16px",
  padding: "48px 40px",
  textAlign: "center",
};

const iconWrap: CSSProperties = {
  width: "56px",
  height: "56px",
  borderRadius: "50%",
  background: "rgba(255,85,0,0.12)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 24px",
};

const headingStyle: CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: 700,
  color: "var(--white)",
  marginBottom: "12px",
};

const bodyStyle: CSSProperties = {
  color: "var(--gray)",
  lineHeight: 1.6,
};

const buttonStyle: CSSProperties = {
  display: "inline-block",
  width: "100%",
  padding: "12px 28px",
  background: "var(--orange)",
  color: "var(--white)",
  border: "none",
  borderRadius: "8px",
  fontWeight: 600,
  fontSize: "0.95rem",
  textDecoration: "none",
  cursor: "pointer",
};

const inputStyle: CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  marginBottom: "12px",
  background: "var(--black)",
  border: "1px solid var(--border)",
  borderRadius: "8px",
  color: "var(--white)",
  fontSize: "0.95rem",
};

function CheckIcon() {
  return (
    <div style={iconWrap}>
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M5 13l4 4L19 7" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function MailIcon() {
  return (
    <div style={iconWrap}>
      <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function Card({ status, contactId }: { status?: string; contactId?: string }) {
  if (status === "success") {
    return (
      <div style={cardStyle}>
        <CheckIcon />
        <h1 style={headingStyle}>You&apos;ve been unsubscribed</h1>
        <p style={{ ...bodyStyle, marginBottom: "32px" }}>
          You won&apos;t receive any more emails from us. Sorry to see you go!
        </p>
        <Link href="/" style={{ ...buttonStyle, width: "auto" }}>
          Back to Echelon Fox
        </Link>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div style={cardStyle}>
        <h1 style={headingStyle}>Something went wrong</h1>
        <p style={{ ...bodyStyle, marginBottom: "32px" }}>
          We couldn&apos;t process your request just now, and you are still
          subscribed. Please try again, or email us at{" "}
          <a href="mailto:hello@echelonfox.com" style={{ color: "var(--orange)" }}>
            hello@echelonfox.com
          </a>{" "}
          and we&apos;ll remove you manually.
        </p>
        <Link href="/unsubscribe" style={{ ...buttonStyle, width: "auto" }}>
          Try again
        </Link>
      </div>
    );
  }

  if (status === "not_found") {
    return (
      <div style={cardStyle}>
        <h1 style={headingStyle}>Link not found</h1>
        <p style={{ ...bodyStyle, marginBottom: "32px" }}>
          This unsubscribe link is invalid. Enter your email address below and
          we&apos;ll remove you from every list.
        </p>
        <EmailForm />
      </div>
    );
  }

  // Arrived from an email link: confirm before acting, so that link scanners
  // and prefetchers can't unsubscribe someone on their behalf.
  if (contactId) {
    return (
      <div style={cardStyle}>
        <MailIcon />
        <h1 style={headingStyle}>Unsubscribe</h1>
        <p style={{ ...bodyStyle, marginBottom: "28px" }}>
          Confirm below and we&apos;ll stop sending you email.
        </p>
        <form method="POST" action="/api/unsubscribe">
          <input type="hidden" name="contact_id" value={contactId} />
          <button type="submit" style={buttonStyle}>
            Unsubscribe me
          </button>
        </form>
      </div>
    );
  }

  return (
    <div style={cardStyle}>
      <MailIcon />
      <h1 style={headingStyle}>Unsubscribe</h1>
      <p style={{ ...bodyStyle, marginBottom: "28px" }}>
        Enter the email address you receive our emails at and we&apos;ll remove
        you from every list.
      </p>
      <EmailForm />
    </div>
  );
}

function EmailForm() {
  return (
    <form method="POST" action="/api/unsubscribe">
      <label htmlFor="email" style={{ display: "block", textAlign: "left", fontSize: "0.85rem", color: "var(--gray)", marginBottom: "8px" }}>
        Email address
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="you@company.com"
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>
        Unsubscribe me
      </button>
    </form>
  );
}

export default async function UnsubscribePage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; contact_id?: string }>;
}) {
  const { status, contact_id: contactId } = await searchParams;

  return (
    <div style={{ minHeight: "100vh", background: "var(--black)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 24px", fontFamily: "var(--font-inter), sans-serif" }}>
      <Link href="/" style={{ display: "inline-block", marginBottom: "48px" }}>
        <span style={{ fontWeight: 800, fontSize: "1.5rem", letterSpacing: "-0.02em", color: "var(--white)" }}>
          Echelon<span style={{ color: "var(--orange)" }}>Fox</span>
        </span>
      </Link>
      <Card status={status} contactId={contactId} />
      <p style={{ marginTop: "32px", fontSize: "0.8rem", color: "#444", textAlign: "center" }}>
        © {new Date().getFullYear()} Echelon Fox. All rights reserved.
      </p>
    </div>
  );
}
