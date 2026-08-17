import type { Metadata } from "next";
import { Source_Serif_4, Instrument_Sans } from "next/font/google";
import { Providers } from "@/components/Providers";
import { CookieBanner } from "@/components/CookieBanner";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["600"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tibbe.nl"),
  title: "Tibbe — de AI-medewerker die 24/7 doorwerkt",
  description:
    "Tibbe is een AI-operator voor het Nederlandse MKB. Neemt het terugkerende werk over: klantcontact, planning, facturen, offertes en administratie. Binnen een week aan het werk. Jij keurt goed wat telt.",
  icons: { icon: "/brand/favicon.svg" },
  openGraph: {
    title: "Tibbe — de AI-medewerker die 24/7 doorwerkt",
    description:
      "Een betrouwbare AI-medewerker voor je bedrijf. Binnen een week aan het werk. Jij keurt goed wat telt.",
    url: "https://tibbe.nl",
    siteName: "Tibbe",
    locale: "nl_NL",
    type: "website",
    images: ["/brand/tibbe-mark-512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${sourceSerif.variable} ${instrumentSans.variable}`}>
      <body className="min-h-screen antialiased">
        <Providers>{children}</Providers>
        <CookieBanner />
      </body>
    </html>
  );
}
