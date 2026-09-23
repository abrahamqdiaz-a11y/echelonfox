export type Insight = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};

export const insights: Insight[] = [
  {
    slug: "local-seo-for-insurance-agents",
    category: "Local SEO",
    title: "Local SEO for Insurance Agents: The Complete Guide to Dominating Your Market",
    excerpt:
      "The eight-pillar local SEO framework built specifically for independent insurance agents — GBP, citations, reviews, location pages, schema, and the content strategy that builds long-term authority.",
    date: "July 15, 2025",
    readTime: "16 min read",
  },
  {
    slug: "ai-search-for-insurance-agencies",
    category: "AI Search",
    title: "AI Search for Insurance Agencies: How to Get Found in ChatGPT & Google AI",
    excerpt:
      "Most insurance agencies are invisible in ChatGPT, Perplexity & Google AI Overviews — losing warm leads before they ever appear in a browser. Here's the EEAT framework to get cited and recommended.",
    date: "June 12, 2025",
    readTime: "14 min read",
  },
];
