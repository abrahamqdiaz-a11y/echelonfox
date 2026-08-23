import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api", "/unsubscribe"],
    },
    sitemap: "https://echelonfox.com/sitemap.xml",
    host: "https://echelonfox.com",
  };
}
