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
  return (
    <>
      <form name="unsubscribe" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="hidden" name="form-name" value="unsubscribe" />
        <input type="email" name="email" />
        <input name="bot-field" />
      </form>
      <UnsubscribeClient />
    </>
  );
}
