import { DashboardMock } from "./DashboardMock";
import { Reveal } from "./Reveal";
import { BOOKING_URL } from "@/lib/site";
import { Check, RotateCcw } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 sm:pt-40 sm:pb-28">
      {/* zachte warme gloed rechtsboven */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(232,155,60,0.14), transparent 65%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-64 left-[-14%] h-[480px] w-[480px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(45,91,255,0.08), transparent 65%)" }}
      />

      <div className="container-x relative">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          {/* tekstkant */}
          <div>
            <Reveal>
              <span className="eyebrow warm">Binnen een week live</span>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="display-1 mt-6">
                Fedde runt de achterkant van je webshop.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="lead mt-6 max-w-[520px]">
                Geen chatbot maar een compleet ecommerce team in één agent.
                Fedde doet het werk waar je nu losse mensen, bureaus en tools
                voor betaalt. Jij keurt goed wat telt.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href={BOOKING_URL} className="btn-primary">
                  Plan een kennismaking
                </a>
                <a href="#diensten" className="btn-secondary">
                  Bekijk wat Fedde doet
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] text-muted-fg">
                <span className="flex items-center gap-2">
                  <Check size={15} className="text-accent" />
                  Alles gelogd en omkeerbaar
                </span>
                <span className="flex items-center gap-2">
                  <Check size={15} className="text-accent" />
                  Eigen afgeschermde omgeving
                </span>
              </div>
            </Reveal>
          </div>

          {/* visuele kant */}
          <Reveal delay={0.2} y={26}>
            <div className="relative">
              {/* IMAGE NEEDED (optioneel): MacBook met Fedde-dashboard. Voor nu echte HTML-mockup. */}
              <div className="rotate-[1.2deg] transition-transform duration-500 hover:rotate-0">
                <DashboardMock />
              </div>

              {/* zwevende notities */}
              <div className="absolute -left-4 -bottom-5 hidden items-center gap-2.5 rounded-2xl border border-border bg-white px-4 py-3 shadow-[0_14px_30px_-12px_rgba(35,32,27,0.18)] sm:flex">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-accent-soft text-accent">
                  <RotateCcw size={15} />
                </span>
                <div>
                  <div className="text-[13px] font-600" style={{ fontWeight: 600 }}>
                    Retour afgehandeld
                  </div>
                  <div className="text-[12px] text-muted-fg">net gebeurd, gelogd</div>
                </div>
              </div>

              <div
                className="absolute -right-3 -top-5 hidden rotate-[2deg] rounded-2xl px-4 py-2.5 text-[13px] font-600 text-[#7a4a0e] sm:block"
                style={{ background: "var(--amber-soft)", fontWeight: 600 }}
              >
                Jij keurt goed wat telt
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
