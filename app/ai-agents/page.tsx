import type { Metadata } from "next";
import AiAgentsClient from "./AiAgentsClient";

export const metadata: Metadata = {
  title: "AI Agents for Local Service Businesses | EchelonFox",
  description:
    "EchelonFox deploys AI teammates that answer every lead, book appointments, and recover lost revenue — 24/7, alongside your existing team. Built for 5–30-person service firms.",
  alternates: {
    canonical: "https://echelonfox.com/ai-agents",
  },
  openGraph: {
    title: "AI Agents for Local Service Businesses | EchelonFox",
    description:
      "AI teammates that never miss a lead. Speed-to-lead, front desk coverage, and reactivation — built for insurance, legal, med spa, dental, HVAC, and financial advisory firms.",
    url: "https://echelonfox.com/ai-agents",
    type: "website",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "AI Agents — EchelonFox" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-default.png"] },
};

export default function AiAgentsPage() {
  return <AiAgentsClient />;
}
