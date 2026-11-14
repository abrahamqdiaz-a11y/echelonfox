import type { NextConfig } from "next";

/**
 * Permanent (301) redirects.
 *
 * Next.js answers `permanent: true` with 308, which search engines treat the same
 * as a 301 but which some checkers report differently. `statusCode: 301` sends a
 * literal 301, as specified for the September 2026 restructure.
 *
 * Every rule points straight at its final destination, so no URL hops twice.
 */
const moved = (source: string, destination: string) => ({ source, destination, statusCode: 301 as const });

/** Nov 2026: the nine service pages were replaced by one How It Works page. */
const retiredServices = [
  "commercial-diagnosis",
  "customer-acquisition",
  "sales-process-crm",
  "technology-operations",
  "ai-automation",
  "websites-digital-infrastructure",
  "ai-strategy",
  "ai-assistants",
  "ai-adoption",
];

/** Sep 2026: single-channel service pages, retired earlier. */
const olderServices = [
  "analytics-growth",
  "brand-identity",
  "seo-content",
  "paid-media",
  "social-media",
  "email-crm",
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Sep 2026: the local SEO and AI search guides were merged into one.
      // Listed before the /blog rule so old /blog links don't hop twice.
      moved("/insights/local-seo-for-insurance-agents", "/insights/search-visibility-for-insurance-agencies"),
      moved("/insights/ai-search-for-insurance-agencies", "/insights/search-visibility-for-insurance-agencies"),
      moved("/blog/local-seo-for-insurance-agents", "/insights/search-visibility-for-insurance-agencies"),
      moved("/blog/ai-search-for-insurance-agencies", "/insights/search-visibility-for-insurance-agencies"),

      // Articles were consolidated under /insights — keep old /blog URLs working.
      { source: "/blog", destination: "/insights", permanent: true },
      { source: "/blog/:slug*", destination: "/insights/:slug*", permanent: true },

      // Nov 2026: every service URL → What We Do (How It Works).
      moved("/services", "/what-we-do"),
      ...retiredServices.map((s) => moved(`/services/${s}`, "/what-we-do")),
      ...olderServices.map((s) => moved(`/services/${s}`, "/what-we-do")),
      // Anything else under /services that was ever linked.
      moved("/services/:path*", "/what-we-do"),
      moved("/websites", "/what-we-do"),
      moved("/ai-agents", "/what-we-do"),

      // Prices are public again, on How It Works.
      moved("/pricing", "/what-we-do"),

      // Old industry landing pages. /industries itself has no index page yet.
      moved("/ecommerce", "/what-we-do"),
      moved("/saas", "/what-we-do"),
      moved("/industries", "/what-we-do"),
    ];
  },
};

export default nextConfig;
