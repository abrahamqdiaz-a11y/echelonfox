import type { WorkCardData } from "@/components/WorkCard";

/**
 * Client projects.
 *
 * Ground rules for anything added here:
 * - Clients are described by category until written permission to name them is on file.
 *   When permission exists, replace `name` and add `link` to the live site.
 * - `outcome` describes work that shipped and what changed as a result. Do not add
 *   performance numbers unless they come from the client's own analytics or ad accounts
 *   and the client has agreed to them being published.
 */
export const projects: WorkCardData[] = [
  {
    name: "Independent Insurance Agency",
    category: "Website Design & Build",
    challenge:
      "An established agency whose site was dated and hard to use on a phone. Prospects who found the agency through search or referral had no clear way to request a quote, so enquiries came in by phone during office hours or not at all.",
    services: ["Website Design & Build", "Local SEO Setup", "Conversion Copy"],
    implementation:
      "Rebuilt the site mobile-first around the coverage lines the agency actually sells, each with its own service page. Added a short quote request flow that captures what the agent needs before the first call, set up the Google Business Profile and local schema markup, and shipped a structure the agency can add locations to later.",
    outcome:
      "Live, with quote requests arriving through the site outside office hours instead of only by phone during them.",
  },
  {
    name: "Beauty & Barber Supply Wholesaler",
    category: "E-Commerce SEO",
    challenge:
      "A wholesale supplier selling to stylists and barbers across the US. Category pages weren't ranking for the commercial terms buyers actually search, and technical issues were holding back the pages that had the best chance of competing.",
    services: ["Technical SEO", "Category Page Optimisation", "Content Strategy"],
    implementation:
      "Ongoing engagement: fixed crawl and indexation issues, restructured and rewrote category pages around commercial-intent search terms, and built a content plan targeting the questions buyers ask before ordering in volume.",
    outcome:
      "Ongoing programme. Technical fixes and page work shipped in weekly sprints; performance is reported to the client from their own Search Console and analytics data.",
  },
  {
    name: "Premium Pet Care Company",
    category: "Website Design & Build",
    challenge:
      "A pet care business relying on word of mouth and social media, with no site that explained services clearly or made it obvious how to book. Enquiries arrived as DMs that were easy to lose.",
    services: ["Website Design & Build", "Local SEO Setup", "Enquiry Flow"],
    implementation:
      "Designed and built a site structured around each service and the areas served, wrote booking and pricing information in plain language, and put a single enquiry form in front of visitors on every page so requests land in one place.",
    outcome:
      "Live, with service and booking information structured for local search and enquiries collected in one place rather than across social inboxes.",
  },
];
