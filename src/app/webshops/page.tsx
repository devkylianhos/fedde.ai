import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { WebshopAgents } from "@/components/WebshopAgents";
import { Pricing } from "@/components/Pricing";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { BOOKING_URL } from "@/lib/site";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Fedde voor webshops — je AI-team voor de hele achterkant",
  description:
    "Site Agent, Lead Agent, Review Agent, Creative Agent en Service Agent. Gespecialiseerde agents die je live site, verlaten winkelwagens, reviews, creatives en klantenservice draaien. Altijd met jouw goedkeuring.",
};

const proof = [
  "0 acties zonder jouw goedkeuring",
  "24/7 op je eigen afgeschermde machine",
  "Maandelijks opzegbaar, je data gaat mee",
];

export default function WebshopsPage() {
  return (
    <main>
      <Navbar />

      {/* hero */}
      <section className="px-3 pt-20 sm:px-4 sm:pt-[88px]">
        <div className="sky-panel mx-auto max-w-[1400px] rounded-[28px]">
          <div className="container-x relative py-16 sm:py-24">
            <div className="mx-auto max-w-[820px] text-center">
              <Reveal>
                <span
                  className="inline-flex items-center gap-2 rounded-[10px] px-3.5 py-1.5 text-[13px] font-600 text-white"
                  style={{ fontWeight: 600, background: "rgba(255,255,255,0.16)" }}
                >
                  Voor webshops
                </span>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="display-1 mt-7 text-white">
                  Je shop groeit. Je team niet.
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="lead mx-auto mt-6 max-w-[560px] text-white/85">
                  Fedde is een AI-team voor de hele achterkant van je webshop.
                  Gespecialiseerde agents voor je site, je winkelwagens, je
                  reviews, je creatives en je klantenservice. Jij keurt goed wat
                  telt.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a href={BOOKING_URL} className="btn-inverse">
                    Plan een kennismaking
                  </a>
                  <a href="#agents" className="btn-ghost-light">
                    Bekijk de agents
                  </a>
                </div>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13.5px] text-white/80">
                  {proof.map((p) => (
                    <span key={p} className="flex items-center gap-2">
                      <Check size={14} />
                      {p}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <WebshopAgents />
      <Pricing />
      <CtaBand />
      <Footer />
    </main>
  );
}
