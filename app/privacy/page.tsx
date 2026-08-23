import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Echelon Fox — how we collect, use, and protect your personal data.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://echelonfox.com/privacy" },
};

const sections = [
  {
    title: "1. Who We Are",
    body: `Echelon Fox ("we", "us", "our") is a founder-led marketing and growth agency. We are the data controller responsible for your personal data collected through this website (echelonfox.com). You can contact us at abe.quinn@echelonfox.com for any privacy-related queries.`,
  },
  {
    title: "2. What Personal Data We Collect",
    body: `We collect personal data only when you actively provide it to us. Through our contact form, we collect your name, email address, company or business name, and any message content you choose to include. If you subscribe to one of our email sequences, we collect your email address and first name. Through our unsubscribe process, we use your email address solely to record your removal from our mailing list. We do not run analytics, advertising, or tracking scripts on this website, so we do not build a profile of your browsing. We do not collect any special category data (as defined under Article 9 of the UK/EU GDPR).`,
  },
  {
    title: "3. Legal Basis for Processing",
    body: `We process your contact form data on the basis of legitimate interests (Article 6(1)(f) GDPR) — specifically, our legitimate interest in responding to business enquiries and potential clients. The contact form also asks you to tick a consent box before submitting. We process email subscription data on the basis of your consent, given when you sign up. We process unsubscribe requests on the basis of legal obligation and our commitment to honour opt-out requests. You may withdraw consent at any time by using the unsubscribe link in any email or by emailing us.`,
  },
  {
    title: "4. How We Use Your Data",
    body: `We use your contact form data to respond to your enquiry and, where relevant, to follow up about services you asked about. We use email subscription data to send the email sequence you signed up for. We use your email address from the unsubscribe process to record your opt-out. Our emails do not contain open-tracking pixels or click-tracking links. We do not use your data for automated decision-making or profiling, and we do not sell, rent, or trade your personal data to third parties for their own marketing purposes.`,
  },
  {
    title: "5. Data Processors and Third Parties",
    body: `We use three processors, each acting on our instructions under a Data Processing Agreement. Netlify (Netlify, Inc., San Francisco, CA, USA) hosts this website and processes and stores contact form submissions — see netlify.com/privacy. Supabase (Supabase, Inc., USA) provides the database that stores email subscription records — see supabase.com/privacy. Resend (Resend, Inc., USA) delivers our emails — see resend.com/legal/privacy-policy. Our web fonts are served from this website's own domain rather than from a third-party font service, so loading a page does not send your IP address to a font provider. We do not currently use any analytics, advertising, heat-mapping, or tracking third parties, and there is no Google Analytics, Meta Pixel, or equivalent tag on this site. If that changes, we will update this policy and obtain consent where required before any non-essential tracking is set.`,
  },
  {
    title: "6. Cookies and Local Storage",
    body: `This website sets no advertising, analytics, or cross-site tracking cookies. The only cookies that may be set are strictly necessary ones — for example, the session cookie used when an Echelon Fox administrator signs in to the private admin area, which is never set for ordinary visitors. Our cookie notice stores your dismissal of that notice in your browser's local storage (under the key "echelonfox-cookie-consent") so that it does not reappear on every page; that value stays in your browser and is never transmitted to us. If we introduce non-essential cookies or any analytics in the future, we will update this policy and ask for your consent before setting them.`,
  },
  {
    title: "7. Data Retention",
    body: `Contact form submissions are retained in our Netlify account, and we review and purge submissions at least every two years. Email subscription records are retained in our Supabase database for as long as you remain subscribed. If you request deletion of your data before that time, we will action that request promptly. Records of unsubscribe requests are retained indefinitely, because we need them to keep honouring your opt-out.`,
  },
  {
    title: "8. International Data Transfers",
    body: `Our processors — Netlify, Supabase, and Resend — store data on servers in the United States. Transfers of your personal data to the US are covered by each provider's Standard Contractual Clauses (SCCs) and, where applicable, their participation in the EU-US Data Privacy Framework. Details are in each provider's Data Processing Agreement, linked from their privacy pages.`,
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
    <div style={{ background: "#080808", minHeight: "100vh", color: "#fff" }}>
      <Nav />
      <main style={{ padding: "140px 32px 80px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, marginBottom: "8px" }}>
          Privacy Policy
        </h1>
        <p style={{ color: "#555", marginBottom: "48px", fontSize: "0.9rem" }}>
          Last updated: August 23, 2026
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
