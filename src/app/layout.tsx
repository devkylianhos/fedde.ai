import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    <html lang="nl" className={`${instrument.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
