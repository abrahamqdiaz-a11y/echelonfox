// TODO: Review and replace this placeholder Terms of Service with your actual legal copy
// before publishing. This is a generic placeholder only.

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Echelon Fox.",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <main style={{ background: "#080808", minHeight: "100vh", color: "#fff", padding: "120px 32px 80px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div
          style={{
            background: "#FF550022",
            border: "1px solid #FF5500",
            padding: "12px 20px",
            marginBottom: "40px",
            fontSize: "0.85rem",
            color: "#FF5500",
            fontWeight: 700,
          }}
        >
          TODO: Replace this placeholder with your actual Terms of Service before publishing.
        </div>

        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, marginBottom: "8px" }}>
          Terms of Service
        </h1>
        <p style={{ color: "#555", marginBottom: "48px", fontSize: "0.9rem" }}>
          Last updated: [TODO — insert date]
        </p>

        {[
          {
            title: "1. Acceptance of Terms",
            body: "By accessing or using the Echelon Fox website (echelonfox.com), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the site.",
          },
          {
            title: "2. Use of the Site",
            body: "You may use this site for lawful purposes only. You agree not to use the site in any way that violates applicable laws or regulations, or that harms other users or third parties.",
          },
          {
            title: "3. Intellectual Property",
            body: "All content on this site — including text, graphics, logos, and code — is the property of Echelon Fox or its licensors and is protected by copyright and other intellectual property laws. You may not reproduce or distribute any content without our prior written consent.",
          },
          {
            title: "4. Disclaimer of Warranties",
            body: "This site is provided on an \"as is\" basis without warranties of any kind. Echelon Fox does not warrant that the site will be uninterrupted, error-free, or free of viruses or other harmful components.",
          },
          {
            title: "5. Limitation of Liability",
            body: "To the fullest extent permitted by law, Echelon Fox shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the site.",
          },
          {
            title: "6. Third-Party Links",
            body: "This site may contain links to third-party websites. Echelon Fox is not responsible for the content or practices of those sites.",
          },
          {
            title: "7. Changes to Terms",
            body: "We reserve the right to modify these terms at any time. Continued use of the site after changes are posted constitutes your acceptance of the revised terms.",
          },
          {
            title: "8. Contact",
            body: "For questions about these terms, contact us at hello@echelonfox.com.",
          },
        ].map((section) => (
          <section key={section.title} style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "12px", color: "#fff" }}>
              {section.title}
            </h2>
            <p style={{ color: "#666", lineHeight: 1.8, fontSize: "0.95rem" }}>{section.body}</p>
          </section>
        ))}

        <div style={{ marginTop: "60px", paddingTop: "32px", borderTop: "1px solid #1a1a1a" }}>
          <Link
            href="/"
            style={{ color: "#FF5500", fontWeight: 700, fontSize: "0.85rem", textDecoration: "none", letterSpacing: "0.05em" }}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
