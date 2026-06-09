import type { Metadata } from "next";
import UnsubscribeClient from "./UnsubscribeClient";

export const metadata: Metadata = {
  title: "Unsubscribe",
  description: "Unsubscribe from Echelon Fox marketing emails.",
  alternates: {
    canonical: "https://echelonfox.com/unsubscribe",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function UnsubscribePage() {
  return <UnsubscribeClient />;
}
