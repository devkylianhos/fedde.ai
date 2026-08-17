import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { IntegrationsStats } from "@/components/IntegrationsStats";
import { Audiences } from "@/components/Audiences";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { DayFeed } from "@/components/DayFeed";
import { WhyTrust } from "@/components/WhyTrust";
import { Compare } from "@/components/Compare";
import { FounderNote } from "@/components/FounderNote";
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

/* Verhaallijn in 10 secties, elk één boodschap:
   wie (hero) -> waarmee (koppelingen) -> voor wie -> wat -> hoe -> een dag
   -> waarom vertrouwen -> wat het scheelt -> wie erachter zit -> prijs -> vragen */
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
      <Audiences />
      <Services />
      <HowItWorks />
      <DayFeed />
      <WhyTrust />
      <Compare />
      <FounderNote />
      <Pricing />
      <Faq />
      <CtaBand />
      <Footer />
    </main>
  );
}
