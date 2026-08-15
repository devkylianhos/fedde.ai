import { DashboardMock } from "./DashboardMock";
import { Reveal } from "./Reveal";
import { BOOKING_URL } from "@/lib/site";
import { Check } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="px-3 pt-20 sm:px-4 sm:pt-[88px]">
      <div className="sky-panel mx-auto max-w-[1400px] rounded-[28px]">
        <div className="container-x relative pb-16 pt-16 sm:pb-20 sm:pt-24">
          <div className="mx-auto max-w-[840px] text-center">
            <Reveal>
              <span
                className="inline-flex items-center gap-2 rounded-[10px] px-3.5 py-1.5 text-[13px] font-600 text-white"
                style={{ fontWeight: 600, background: "rgba(255,255,255,0.16)" }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                Binnen een week live
              </span>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="display-1 mt-7 text-white">
                Fedde runt de achterkant van je webshop.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="lead mx-auto mt-6 max-w-[560px] text-white/85">
                Geen chatbot maar een compleet ecommerce team in één agent.
                Fedde doet het werk waar je nu losse mensen, bureaus en tools
                voor betaalt. Jij keurt goed wat telt.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href={BOOKING_URL} className="btn-inverse">
                  Plan een kennismaking
                </a>
                <a href="#diensten" className="btn-ghost-light">
                  Bekijk wat Fedde doet
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13.5px] text-white/75">
                <span className="flex items-center gap-2">
                  <Check size={14} />
                  Alles gelogd en omkeerbaar
                </span>
                <span className="flex items-center gap-2">
                  <Check size={14} />
                  Eigen afgeschermde omgeving
                </span>
              </div>
            </Reveal>
          </div>

          {/* IMAGE NEEDED (optioneel): MacBook met Fedde-dashboard. Voor nu echte HTML-mockup. */}
          <Reveal delay={0.28} y={30}>
            <div className="mx-auto mt-14 max-w-[920px]">
              <DashboardMock />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
