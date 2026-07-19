import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://echelonfox.com";

  const services = [
    "seo-content",
    "paid-media",
    "brand-identity",
    "social-media",
    "analytics-growth",
    "email-crm",
  ];

  return [
    {
      url: base,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/work`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/pricing`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/ecommerce`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/saas`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/websites`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...services.map((slug) => ({
      url: `${base}/services/${slug}`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${base}/ai-agents`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${base}/blog/ai-search-for-insurance-agencies`,
      lastModified: new Date("2025-06-12"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${base}/insights`,
      lastModified: new Date("2025-07-15"),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${base}/insights/local-seo-for-insurance-agents`,
      lastModified: new Date("2025-07-15"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];
}
