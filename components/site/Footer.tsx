import Link from "next/link";
import { offerList, PRIMARY_CTA } from "@/lib/offers";
import { industries } from "@/lib/industries";
import { SITE } from "@/lib/site";
import Arrow from "./Arrow";
import Wordmark from "./Wordmark";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <Link className="brand" href="/" aria-label="EchelonFox, home">
            <Wordmark />
          </Link>
          <p>{SITE.tagline}</p>
          <Link className="arrow-link" href={PRIMARY_CTA.href}>
            {PRIMARY_CTA.label} <Arrow />
          </Link>
        </div>
        <div className="site-footer__grid">
          <div>
            <p className="footer-statement">
              Marketing, sales
              <br />
              and customer retention,
              <br />
              run as one system.
            </p>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>
          <div>
            <h2 className="label">What we do</h2>
            <ul>
              {offerList.map((o) => (
                <li key={o.id}>
                  <Link
                    href={
                      o.id === "embedded-growth-team"
                        ? "/embedded-growth-team"
                        : `/what-we-do#${o.id}`
                    }
                  >
                    {o.name}
                  </Link>
                </li>
              ))}
              {industries.map((i) => (
                <li key={i.slug}>
                  <Link href={`/industries/${i.slug}`}>{i.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="label">Explore</h2>
            <ul>
              {[
                ["How It Works", "/what-we-do"],
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
                  Book a call
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
