import Link from "next/link";
import { coreCapabilities } from "@/lib/capabilities";
import { SITE } from "@/lib/site";
import Arrow from "./Arrow";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <Link className="brand" href="/">
            EchelonFox
            <span className="brand-dot" aria-hidden="true">
              .
            </span>
          </Link>
          <p>
            AI strategy. Implementation.
            <br />
            Practical execution.
          </p>
          <a className="arrow-link" href={`mailto:${SITE.email}`}>
            Start a conversation <Arrow />
          </a>
        </div>
        <div className="site-footer__grid">
          <div>
            <p className="footer-statement">
              Practical AI.
              <br />
              Commercial understanding.
              <br />
              People in the loop.
            </p>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>
          <div>
            <h2 className="label">AI Services</h2>
            <ul>
              {coreCapabilities.map((c) => (
                <li key={c.slug}>
                  <Link href={`/services/${c.slug}`}>{c.name}</Link>
                </li>
              ))}
              <li>
                <Link href="/services#business-systems">
                  Supporting business systems
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="label">Explore</h2>
            <ul>
              {[
                ["AI Services", "/services"],
                ["Our Approach", "/our-approach"],
                ["Selected Work", "/work"],
                ["About", "/about"],
                ["Insights", "/insights"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="label">Connect</h2>
            <ul>
              <li>
                <a
                  href={SITE.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a conversation
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="site-footer__base">
          <p>© {new Date().getFullYear()} EchelonFox. All rights reserved.</p>
          <div>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
