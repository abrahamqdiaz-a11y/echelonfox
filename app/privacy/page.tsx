// TODO: Review and replace this placeholder Privacy Policy with your actual legal copy
// before publishing. This is a generic placeholder only.

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Echelon Fox.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
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
          TODO: Replace this placeholder with your actual Privacy Policy before publishing.
        </div>

        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, marginBottom: "8px" }}>
          Privacy Policy
        </h1>
        <p style={{ color: "#555", marginBottom: "48px", fontSize: "0.9rem" }}>
          Last updated: [TODO — insert date]
        </p>

        {[
          {
            title: "1. Information We Collect",
            body: "We collect information you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or communicate with us by email. This may include your name, email address, company name, and message content.",
          },
          {
            title: "2. How We Use Your Information",
            body: "We use the information we collect to respond to your inquiries, send you marketing communications (where you have opted in), and improve our services. We do not sell your personal information to third parties.",
          },
          {
            title: "3. Cookies and Tracking",
            body: "Our website may use cookies and similar tracking technologies to analyze traffic and improve your browsing experience. You can control cookies through your browser settings.",
          },
          {
            title: "4. Third-Party Services",
            body: "We may use third-party services such as analytics providers and email platforms. These services have their own privacy policies governing the use of your information.",
          },
          {
            title: "5. Data Retention",
            body: "We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, or as required by law.",
          },
          {
            title: "6. Your Rights",
            body: "Depending on your jurisdiction, you may have rights to access, correct, or delete your personal data. To exercise these rights, contact us at hello@echelonfox.com.",
          },
          {
            title: "7. Contact",
            body: "For privacy-related questions, email us at hello@echelonfox.com.",
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
