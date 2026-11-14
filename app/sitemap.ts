import type { MetadataRoute } from "next";
import { industries } from "@/lib/industries";
import { publishedCases } from "@/lib/work-data";

const BASE = "https://echelonfox.com";
const REPOSITION = "2026-11-14";
const REDESIGN = "2026-11-11";

type Entry = {
  path: string;
  lastModified: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const entries: Entry[] = [
  { path: "", lastModified: REPOSITION, changeFrequency: "monthly", priority: 1 },
  {
    path: "/contact",
    lastModified: REPOSITION,
    changeFrequency: "monthly",
    priority: 0.9,
  },

  // Offers
  {
    path: "/what-we-do",
    lastModified: REPOSITION,
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/embedded-growth-team",
    lastModified: REPOSITION,
    changeFrequency: "monthly",
    priority: 0.8,
  },

  // Industries
  ...industries.map((i) => ({
    path: `/industries/${i.slug}`,
    lastModified: REPOSITION,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  })),

  {
    path: "/our-approach",
    lastModified: REPOSITION,
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/about",
    lastModified: REPOSITION,
    changeFrequency: "monthly",
    priority: 0.7,
  },

  // Work
  {
    path: "/work",
    lastModified: REPOSITION,
    changeFrequency: "monthly",
    priority: 0.7,
  },
  ...publishedCases.map((c) => ({
    path: `/work/${c.slug}`,
    lastModified: REPOSITION,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  })),

  // Insights
  {
    path: "/insights",
    lastModified: REPOSITION,
    changeFrequency: "monthly",
    priority: 0.5,
  },
  {
    path: "/insights/search-visibility-for-insurance-agencies",
    lastModified: REPOSITION,
    changeFrequency: "yearly",
    priority: 0.5,
  },

  // Legal
  {
    path: "/privacy",
    lastModified: REDESIGN,
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    path: "/terms",
    lastModified: "2026-06-15",
    changeFrequency: "yearly",
    priority: 0.3,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return entries.map((entry) => ({
    url: `${BASE}${entry.path}`,
    lastModified: new Date(entry.lastModified),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
