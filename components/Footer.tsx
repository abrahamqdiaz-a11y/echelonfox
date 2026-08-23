"use client";
import Link from "next/link";

const serviceLinks = [
  { label: "Website Design & Build", href: "/websites" },
  { label: "SEO & Content", href: "/services/seo-content" },
  { label: "Paid Media", href: "/services/paid-media" },
  { label: "Email & CRM", href: "/services/email-crm" },
  { label: "Social Media", href: "/services/social-media" },
  { label: "Brand & Creative", href: "/services/brand-identity" },
  { label: "Analytics & CRO", href: "/services/analytics-growth" },
  { label: "AI Agents & Automation", href: "/ai-agents" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const industryLinks = [
  { label: "E-Commerce & Retail", href: "/ecommerce" },
  { label: "B2B & SaaS", href: "/saas" },
  { label: "Local & Service Businesses", href: "/websites" },
];

const connectLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/echelonfox/" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#080808",
        borderTop: "1px solid #1a1a1a",
        padding: "80px 32px 40px",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
            gap: "48px",
            marginBottom: "64px",
          }}
          className="footer-grid"
        >
          {/* Brand col */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  background: "#FF5500",
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontWeight: 900,
                  fontSize: "1rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#fff",
                }}
              >
                ECHELON<span style={{ color: "#FF5500" }}>FOX</span>
              </span>
            </div>
            <p
              style={{
                color: "#444",
                fontSize: "0.9rem",
                lineHeight: 1.75,
                margin: "0 0 24px",
                maxWidth: "280px",
              }}
            >
              A founder-led marketing and growth partner. Websites, search, paid media, content,
              email, and automation for businesses across industries.
            </p>
            <a
              href="mailto:abe.quinn@echelonfox.com"
              style={{
                color: "#FF5500",
                fontSize: "0.85rem",
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "0.05em",
              }}
            >
              abe.quinn@echelonfox.com
            </a>
          </div>

          {/* Services col */}
          <div>
            <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 20px" }}>Services</h2>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} style={{ color: "#444", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s", letterSpacing: "0.02em" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#FF5500")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#444")}
                  >{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company col */}
          <div>
            <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 20px" }}>Company</h2>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} style={{ color: "#444", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s", letterSpacing: "0.02em" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#FF5500")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#444")}
                  >{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries col */}
          <div>
            <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 20px" }}>Industries</h2>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {industryLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} style={{ color: "#444", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s", letterSpacing: "0.02em" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#FF5500")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#444")}
                  >{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect col */}
          <div>
            <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 20px" }}>Connect</h2>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {connectLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} style={{ color: "#444", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s", letterSpacing: "0.02em" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#FF5500")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#444")}
                  >{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "32px",
            borderTop: "1px solid #1a1a1a",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p style={{ color: "#333", fontSize: "0.8rem", margin: 0, letterSpacing: "0.05em" }}>
            © {new Date().getFullYear()} Echelon Fox. All rights reserved.
          </p>

          <div style={{ display: "flex", gap: "24px" }}>
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  color: "#333",
                  fontSize: "0.8rem",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#FF5500")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#333")}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .footer-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 780px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
