import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Trust } from "@/components/Trust";
import { IntegrationsStats } from "@/components/IntegrationsStats";
import { Services } from "@/components/Services";
import { Showcase } from "@/components/Showcase";
import { Week } from "@/components/Week";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <IntegrationsStats />
      <Services />
      <Week />
      <Showcase />
      <Trust />
      <Pricing />
      <Faq />
      <CtaBand />
      <Footer />
    </main>
  );
}
