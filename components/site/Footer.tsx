import Link from "next/link";
import { SITE } from "@/lib/site";
import { capabilities } from "@/lib/capabilities";

const company = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div style={{ maxWidth: "24rem" }}>
            <p className="serif" style={{ fontSize: "1.65rem", lineHeight: 1.2, margin: 0 }}>
              Find what&apos;s holding growth back. Build what comes next.
            </p>
            <p className="small muted" style={{ marginTop: "1rem" }}>
              Commercial growth strategy and implementation for established companies.
            </p>
          </div>

          <div>
            <h2 className="label">Services</h2>
            <ul>
              {capabilities.map((c) => (
                <li key={c.slug}>
                  <Link href={`/services/${c.slug}`}>{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="label">Company</h2>
            <ul>
              {company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="label">Contact</h2>
            <ul>
              <li>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
                  Book a call<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__base">
          <p style={{ margin: 0 }}>© {new Date().getFullYear()} Echelon Fox. All rights reserved.</p>
          <p style={{ margin: 0, display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
