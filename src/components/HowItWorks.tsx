import { Reveal } from "./Reveal";
import { ScrollSpine } from "./ScrollSpine";
import { howSteps } from "@/lib/site";
import { MessageSquare, Zap, ShieldCheck, Repeat } from "lucide-react";

const icons = [MessageSquare, Zap, ShieldCheck, Repeat];

export function HowItWorks() {
  return (
    <section id="hoe-het-werkt" className="py-20 sm:py-28">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          {/* kop links, blijft hangen */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <span className="eyebrow">Zo werkt het</span>
              <h2 className="display-2 mt-5">Je zegt wat er moet gebeuren. Fedde regelt het.</h2>
              <p className="lead mt-5 max-w-[420px]">
                Geen software die je zelf moet bedienen. Je vertelt Fedde in
                gewone taal wat er moet lopen, en hij automatiseert het werk dat
                elke dag terugkomt.
              </p>

              {/* mini automatiseringsvoorbeeld */}
              <div className="mt-8 max-w-[380px] rounded-[20px] border border-border bg-white p-5 shadow-[var(--shadow-surface)]">
                <div className="text-[12px] font-600 uppercase tracking-[0.1em] text-muted-fg" style={{ fontWeight: 600 }}>
                  Voorbeeld
                </div>
                <div className="mt-3 flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-lg bg-accent-soft text-accent text-[12px] font-700" style={{ fontWeight: 700 }}>
                    Jij
                  </span>
                  <p className="text-[14px] leading-relaxed">
                    &ldquo;Stuur klanten twee dagen na hun aankoop een bedankje.&rdquo;
                  </p>
                </div>
                <div className="my-3 ml-3 h-4 w-px bg-border" />
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-lg bg-accent text-white text-[12px] font-700" style={{ fontWeight: 700 }}>
                    F
                  </span>
                  <p className="text-[14px] leading-relaxed text-muted-fg">
                    Fedde doet dit voortaan vanzelf, in jouw toon, voor elke nieuwe
                    klant.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* genummerde stappen met scroll-spine */}
          <div className="relative">
            <ScrollSpine className="absolute bottom-8 left-[27px] top-8" />
            <div className="flex flex-col gap-4">
              {howSteps.map((step, i) => {
                const Icon = icons[i];
                return (
                  <Reveal key={step.title} delay={Math.min(i * 0.06, 0.24)}>
                    <div className="relative flex gap-6 rounded-[22px] border border-border bg-white p-6 shadow-[var(--shadow-surface)]">
                      <div className="relative z-10 flex flex-col items-center gap-2">
                        <span
                          className="grid h-14 w-14 flex-none place-items-center rounded-2xl text-white"
                          style={{ background: i === howSteps.length - 1 ? "var(--amber)" : "var(--accent)" }}
                        >
                          <Icon size={20} />
                        </span>
                      </div>
                      <div>
                        <div className="text-[12px] font-600 uppercase tracking-[0.1em] text-muted-fg" style={{ fontWeight: 600 }}>
                          Stap {i + 1}
                        </div>
                        <h3 className="mt-1 font-display text-[22px]">{step.title}</h3>
                        <p className="mt-1.5 text-[15px] leading-relaxed text-muted-fg">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
