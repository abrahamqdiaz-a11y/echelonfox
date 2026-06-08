import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Echelon Fox — World-Class Digital Marketing",
  description: "Echelon Fox is the world's premier digital marketing media company. We build brands that dominate.",
  metadataBase: new URL("https://echelonfox.com"),
  openGraph: {
    title: "Echelon Fox — World-Class Digital Marketing",
    description: "We build brands that dominate.",
    url: "https://echelonfox.com",
    siteName: "Echelon Fox",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Echelon Fox",
    description: "World-Class Digital Marketing Media Company",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
