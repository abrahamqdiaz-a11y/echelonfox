import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Articles were consolidated under /insights — keep old /blog URLs working.
      { source: "/blog", destination: "/insights", permanent: true },
      { source: "/blog/:slug*", destination: "/insights/:slug*", permanent: true },
    ];
  },
};

export default nextConfig;
