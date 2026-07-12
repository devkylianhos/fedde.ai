import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
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
    <html lang="nl" className={`${bricolage.variable} ${dmSans.variable}`}>
      <body className="min-h-screen antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
