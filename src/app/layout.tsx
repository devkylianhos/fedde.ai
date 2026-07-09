import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Fedde — de AI-agent die je webshop runt",
  description:
    "Fedde is geen chatbot maar een compleet ecommerce team in één agent. SEO-blogs, dashboard, retouren, design, facturen, reviews en research. Binnen een week live.",
  openGraph: {
    title: "Fedde — de AI-agent die je webshop runt",
    description:
      "Een compleet ecommerce team in één agent. Binnen een week live. Jij keurt goed wat telt.",
    url: "https://fedde.ai",
    siteName: "Fedde",
    locale: "nl_NL",
    type: "website",
    /* IMAGE NEEDED: OG-deelplaatje 1200x630 -> /images/og.png */
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${geist.variable} ${fraunces.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
