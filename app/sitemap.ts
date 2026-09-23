import type { MetadataRoute } from "next";
import { capabilities } from "@/lib/capabilities";
import { publishedCases } from "@/lib/work-data";

const BASE = "https://echelonfox.com";
const REDESIGN = "2026-09-23";

type Entry = {
  path: string;
  lastModified: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const entries: Entry[] = [
  { path: "", lastModified: REDESIGN, changeFrequency: "monthly", priority: 1 },
  { path: "/contact", lastModified: REDESIGN, changeFrequency: "monthly", priority: 0.9 },
  { path: "/pricing", lastModified: REDESIGN, changeFrequency: "monthly", priority: 0.9 },
  { path: "/about", lastModified: REDESIGN, changeFrequency: "monthly", priority: 0.8 },

  // Services: the four capability groups (old single-channel pages 301 here)
  { path: "/services", lastModified: REDESIGN, changeFrequency: "monthly", priority: 0.8 },
  ...capabilities.map((c) => ({
    path: `/services/${c.slug}`,
    lastModified: REDESIGN,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  })),

  // Work
  { path: "/work", lastModified: REDESIGN, changeFrequency: "monthly", priority: 0.8 },
  ...publishedCases.map((c) => ({
    path: `/work/${c.slug}`,
    lastModified: REDESIGN,
    changeFrequency: "yearly" as const,
    priority: 0.7,
  })),

  // Insights
  { path: "/insights", lastModified: REDESIGN, changeFrequency: "monthly", priority: 0.7 },
  { path: "/insights/local-seo-for-insurance-agents", lastModified: "2025-07-15", changeFrequency: "yearly", priority: 0.6 },
  { path: "/insights/ai-search-for-insurance-agencies", lastModified: "2025-06-12", changeFrequency: "yearly", priority: 0.6 },

  // Legal
  { path: "/privacy", lastModified: "2026-08-23", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", lastModified: "2026-06-15", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return entries.map((entry) => ({
    url: `${BASE}${entry.path}`,
    lastModified: new Date(entry.lastModified),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
