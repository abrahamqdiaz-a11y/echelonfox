import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Echelon Fox.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://echelonfox.com/terms" },
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing or using the Echelon Fox website (echelonfox.com), you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use the site. These terms apply to your use of this website only; separate engagement agreements govern any services you procure from Echelon Fox.`,
  },
  {
    title: "2. Use of the Site",
    body: `You may use this site for lawful purposes only. You agree not to use the site in any way that violates applicable local, national, or international laws or regulations; that is harmful, fraudulent, or misleading; that infringes on the intellectual property rights of others; or that interferes with the security or proper functioning of the site.`,
  },
  {
    title: "3. Intellectual Property",
    body: `All content on this website — including text, graphics, logos, images, and code — is the property of Echelon Fox or its licensors and is protected by copyright, trade mark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our prior written consent. Limited use for personal, non-commercial reference is permitted provided you credit Echelon Fox and do not alter the content.`,
  },
  {
    title: "4. No Professional or Legal Advice",
    body: `Content on this site is provided for general informational and marketing purposes only. Nothing on this site constitutes legal, financial, or professional advice. You should seek independent professional advice before acting on any information presented here.`,
  },
  {
    title: "5. Disclaimer of Warranties",
    body: `This site is provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. Echelon Fox does not warrant that the site will be uninterrupted, error-free, or free of viruses or other harmful components. We do not warrant the accuracy, completeness, or usefulness of any information on the site.`,
  },
  {
    title: "6. Limitation of Liability",
    body: `To the fullest extent permitted by applicable law, Echelon Fox and its directors, employees, or agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, arising from your use of or inability to use the site.`,
  },
  {
    title: "7. Third-Party Links",
    body: `This site may contain links to third-party websites or services. Echelon Fox is not responsible for the content, privacy practices, or availability of those sites. The inclusion of any link does not imply endorsement. You access third-party sites at your own risk.`,
  },
  {
    title: "8. Privacy",
    body: `Your use of this site is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices.`,
  },
  {
    title: "9. Governing Law and Jurisdiction",
    body: `These Terms shall be governed by and construed in accordance with the laws of the State of Texas, United States, without regard to its conflict of law provisions. Any disputes arising from or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Texas.`,
  },
  {
    title: "10. Changes to Terms",
    body: `We reserve the right to modify these Terms at any time. Changes are effective immediately upon posting. Your continued use of the site after any changes constitutes your acceptance of the revised Terms. We encourage you to review this page periodically.`,
  },
  {
    title: "11. Contact",
    body: `For questions about these Terms, contact us at abe.quinn@echelonfox.com.`,
  },
];

export default function TermsPage() {
  return (
    <div style={{ background: "#080808", minHeight: "100vh", color: "#fff" }}>
      <Nav />
      <main style={{ padding: "140px 32px 80px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, marginBottom: "8px" }}>
          Terms of Service
        </h1>
        <p style={{ color: "#555", marginBottom: "48px", fontSize: "0.9rem" }}>
          Last updated: June 15, 2026
        </p>

        {sections.map((section) => (
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
      <Footer />
    </div>
  );
}
