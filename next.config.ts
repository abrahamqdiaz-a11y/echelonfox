import type { NextConfig } from "next";

/**
 * Permanent (301) redirects.
 *
 * Next.js answers `permanent: true` with 308, which search engines treat the same
 * as a 301 but which some checkers report differently. `statusCode: 301` sends a
 * literal 301, as specified for the September 2026 restructure.
 */
const moved = (source: string, destination: string) => ({ source, destination, statusCode: 301 as const });

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

      // Sep 2026: single-channel service pages → the four capability groups.
      moved("/services/analytics-growth", "/services/commercial-diagnosis"),
      moved("/services/brand-identity", "/services/commercial-diagnosis"),
      moved("/services/seo-content", "/services/customer-acquisition"),
      moved("/services/paid-media", "/services/customer-acquisition"),
      moved("/services/social-media", "/services/customer-acquisition"),
      moved("/websites", "/services/customer-acquisition"),
      moved("/services/email-crm", "/services/sales-process-crm"),
      moved("/ai-agents", "/services/ai-automation"),

      // Pricing retired: engagements are scoped after the diagnosis.
      moved("/pricing", "/contact"),

      // Industry landing pages retired: EchelonFox isn't defined by one industry.
      moved("/ecommerce", "/services"),
      moved("/saas", "/services"),
    ];
  },
};

export default nextConfig;
