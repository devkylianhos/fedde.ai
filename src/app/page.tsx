import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Trust } from "@/components/Trust";
import { IntegrationsStats } from "@/components/IntegrationsStats";
import { Services } from "@/components/Services";
import { DayFeed } from "@/components/DayFeed";
import { Compare } from "@/components/Compare";
import { Showcase } from "@/components/Showcase";
import { Week } from "@/components/Week";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { faq } from "@/lib/site";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <Hero />
      <IntegrationsStats />
      <Services />
      <DayFeed />
      <Week />
      <Showcase />
      <Trust />
      <Compare />
      <Pricing />
      <Faq />
      <CtaBand />
      <Footer />
    </main>
  );
}
