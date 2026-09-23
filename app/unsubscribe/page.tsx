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

const headingStyle: CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontWeight: 400,
  fontSize: "2rem",
  lineHeight: 1.15,
  margin: "0 0 0.75rem",
};

const bodyStyle: CSSProperties = {
  color: "var(--graphite)",
  lineHeight: 1.6,
};

function CheckIcon() {
  return (
    <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ marginBottom: "1.25rem" }}>
      <path d="M5 13l4 4L19 7" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ marginBottom: "1.25rem" }}>
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="var(--ink)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Card({ status, contactId }: { status?: string; contactId?: string }) {
  if (status === "success") {
    return (
      <div className="utility-card">
        <CheckIcon />
        <h1 style={headingStyle}>You&apos;ve been unsubscribed</h1>
        <p style={{ ...bodyStyle, marginBottom: "32px" }}>
          You won&apos;t receive any more emails from us. Sorry to see you go!
        </p>
        <Link href="/" className="btn">
          Back to Echelon Fox
        </Link>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="utility-card">
        <h1 style={headingStyle}>Something went wrong</h1>
        <p style={{ ...bodyStyle, marginBottom: "32px" }}>
          We couldn&apos;t process your request just now, and you are still
          subscribed. Please try again, or email us at{" "}
          <a href="mailto:hello@echelonfox.com" className="text-link">
            hello@echelonfox.com
          </a>{" "}
          and we&apos;ll remove you manually.
        </p>
        <Link href="/unsubscribe" className="btn">
          Try again
        </Link>
      </div>
    );
  }

  if (status === "not_found") {
    return (
      <div className="utility-card">
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
      <div className="utility-card">
        <MailIcon />
        <h1 style={headingStyle}>Unsubscribe</h1>
        <p style={{ ...bodyStyle, marginBottom: "28px" }}>
          Confirm below and we&apos;ll stop sending you email.
        </p>
        <form method="POST" action="/api/unsubscribe">
          <input type="hidden" name="contact_id" value={contactId} />
          <button type="submit" className="btn btn--block">
            Unsubscribe me
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="utility-card">
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
    <form method="POST" action="/api/unsubscribe" className="form">
      <div className="field">
        <label htmlFor="email">Email address</label>
        <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" />
      </div>
      <button type="submit" className="btn btn--block">
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
    <main className="utility-page">
      <Link href="/" className="brand" style={{ marginBottom: "2.5rem" }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- 6 KB mark, sized by CSS */}
        <img src="/images/fox-mark.png" alt="" width={192} height={76} />
        <span>EchelonFox</span>
      </Link>
      <Card status={status} contactId={contactId} />
      <p className="small muted" style={{ marginTop: "2rem", textAlign: "center" }}>
        © {new Date().getFullYear()} Echelon Fox. All rights reserved.
      </p>
    </main>
  );
}
