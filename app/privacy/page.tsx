import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Echelon Fox — how we collect, use, and protect your personal data.",
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "1. Who We Are",
    body: `Echelon Fox ("we", "us", "our") is a performance marketing studio. We are the data controller responsible for your personal data collected through this website (echelonfox.com). You can contact us at abe.quinn@echelonfox.com for any privacy-related queries.`,
  },
  {
    title: "2. What Personal Data We Collect",
    body: `We collect personal data only when you actively provide it to us. Through our contact form, we collect your name, email address, company or brand name, and any message content you choose to include. Through our unsubscribe form, we collect your email address solely to process your removal from our mailing list. We do not collect any special category data (as defined under Article 9 of the UK/EU GDPR).`,
  },
  {
    title: "3. Legal Basis for Processing",
    body: `We process your contact form data on the basis of legitimate interests (Article 6(1)(f) GDPR) — specifically, our legitimate interest in responding to business inquiries and potential clients. We process unsubscribe requests on the basis of legal obligation and our commitment to honour opt-out requests. Where we send you marketing communications, we do so only with your prior consent or under the soft opt-in exemption for existing business contacts, and you may withdraw consent at any time.`,
  },
  {
    title: "4. How We Use Your Data",
    body: `We use your contact form data to respond to your inquiry and, where relevant, to follow up on potential services. We use your email address from the unsubscribe form to remove you from our mailing list. We do not use your data for automated decision-making or profiling. We do not sell, rent, or trade your personal data to third parties for their own marketing purposes.`,
  },
  {
    title: "5. Data Processors and Third Parties",
    body: `We use Netlify (Netlify, Inc., 44 Montgomery Street, San Francisco, CA 94104, USA) to process and store form submissions on our behalf. Netlify acts as a data processor under a Data Processing Agreement. Form data is transmitted to and stored on Netlify's infrastructure. You can review Netlify's privacy policy at netlify.com/privacy. We use Google Fonts to serve the Inter typeface; Google may log your IP address when fetching font files. We do not currently use any analytics, advertising, or tracking third parties. If this changes, this policy will be updated and consent obtained where required.`,
  },
  {
    title: "6. Cookies",
    body: `This website uses only strictly necessary cookies that are essential for the site to function (for example, cookies set by Next.js for routing). These cookies do not track you across other websites and do not require your consent under the ePrivacy Directive. We do not set advertising or analytics cookies. If we introduce non-essential cookies in the future, we will update this policy and obtain your consent via our cookie consent banner before setting them.`,
  },
  {
    title: "7. Data Retention",
    body: `Contact form submissions are retained by Netlify Forms for as long as the form data is stored in our Netlify account, subject to our account settings, and we review and purge submissions at least every two years. If you request deletion of your data before that time, we will action that request promptly. Email unsubscribe records are retained indefinitely so we can honour your opt-out preference.`,
  },
  {
    title: "8. International Data Transfers",
    body: `Netlify stores data on servers in the United States. Transfers of your personal data to the US are covered by Netlify's Standard Contractual Clauses (SCCs) and participation in the EU-US Data Privacy Framework where applicable. You can find more details in Netlify's Data Processing Agreement.`,
  },
  {
    title: "9. Your Rights",
    body: `Under UK and EU data protection law you have the following rights: the right to access the personal data we hold about you; the right to rectification of inaccurate or incomplete data; the right to erasure ("right to be forgotten") where there is no legitimate reason for us to continue processing; the right to restriction of processing in certain circumstances; the right to data portability in a machine-readable format; the right to object to processing based on legitimate interests; and the right not to be subject to solely automated decision-making. To exercise any of these rights, email us at abe.quinn@echelonfox.com. We will respond within one month of your request. There is no charge for exercising your rights, unless requests are manifestly unfounded or excessive.`,
  },
  {
    title: "10. Right to Complain",
    body: `If you believe we have handled your data unlawfully, you have the right to lodge a complaint with a supervisory authority. In the UK this is the Information Commissioner's Office (ico.org.uk). In the EU, you may contact the data protection authority in your country of residence. We would, however, appreciate the chance to address your concerns before you approach a regulator — please contact us first at abe.quinn@echelonfox.com.`,
  },
  {
    title: "11. Children's Privacy",
    body: `Our website and services are directed at businesses and professionals and are not intended for individuals under the age of 18. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact us so we can delete it.`,
  },
  {
    title: "12. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. When we make material changes, we will update the "Last updated" date below and, where appropriate, notify you. Continued use of the site after changes are posted constitutes acceptance of the revised policy.`,
  },
  {
    title: "13. Contact",
    body: `For any privacy-related questions, data subject requests, or concerns, please email us at abe.quinn@echelonfox.com. We aim to respond to all privacy enquiries within 5 business days.`,
  },
];

export default function PrivacyPage() {
  return (
    <main style={{ background: "#080808", minHeight: "100vh", color: "#fff", padding: "120px 32px 80px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, marginBottom: "8px" }}>
          Privacy Policy
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
  );
}
