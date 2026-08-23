import type { MetadataRoute } from "next";

const BASE = "https://echelonfox.com";

type Entry = {
  path: string;
  lastModified: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const entries: Entry[] = [
  { path: "", lastModified: "2026-08-23", changeFrequency: "weekly", priority: 1 },
  { path: "/pricing", lastModified: "2026-08-23", changeFrequency: "monthly", priority: 0.9 },
  { path: "/contact", lastModified: "2026-08-23", changeFrequency: "monthly", priority: 0.9 },
  { path: "/about", lastModified: "2026-08-23", changeFrequency: "monthly", priority: 0.8 },
  { path: "/work", lastModified: "2026-08-23", changeFrequency: "monthly", priority: 0.8 },

  // Services
  { path: "/services/seo-content", lastModified: "2026-08-23", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/paid-media", lastModified: "2026-08-23", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/email-crm", lastModified: "2026-08-23", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/social-media", lastModified: "2026-08-23", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/brand-identity", lastModified: "2026-08-23", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/analytics-growth", lastModified: "2026-08-23", changeFrequency: "monthly", priority: 0.8 },
  { path: "/ai-agents", lastModified: "2026-08-23", changeFrequency: "monthly", priority: 0.8 },
  { path: "/websites", lastModified: "2026-08-23", changeFrequency: "monthly", priority: 0.8 },

  // Industries
  { path: "/ecommerce", lastModified: "2026-08-23", changeFrequency: "monthly", priority: 0.7 },
  { path: "/saas", lastModified: "2026-08-23", changeFrequency: "monthly", priority: 0.7 },

  // Insights
  { path: "/insights", lastModified: "2026-08-23", changeFrequency: "weekly", priority: 0.8 },
  { path: "/insights/local-seo-for-insurance-agents", lastModified: "2025-07-15", changeFrequency: "yearly", priority: 0.7 },
  { path: "/insights/ai-search-for-insurance-agencies", lastModified: "2025-06-12", changeFrequency: "yearly", priority: 0.7 },

  // Legal
  { path: "/privacy", lastModified: "2026-08-23", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", lastModified: "2026-08-23", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return entries.map((entry) => ({
    url: `${BASE}${entry.path}`,
    lastModified: new Date(entry.lastModified),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
