import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subscribe",
  description: "Subscribe to an Echelon Fox email sequence.",
  robots: { index: false, follow: false },
};

export default function SubscribeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
