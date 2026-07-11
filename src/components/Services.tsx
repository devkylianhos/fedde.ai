import { Reveal } from "./Reveal";
import { services, BOOKING_URL } from "@/lib/site";
import {
  PenLine,
  LayoutDashboard,
  RotateCcw,
  Palette,
  Receipt,
  Star,
  Search,
  ArrowRight,
} from "lucide-react";

const icons = [PenLine, LayoutDashboard, RotateCcw, Palette, Receipt, Star, Search];

export function Services() {
  return (
    <section id="diensten" className="py-20 sm:py-28">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
          {/* linkerkant: blijft hangen tijdens scrollen */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <span className="eyebrow">Wat Fedde doet</span>
              <h2 className="display-2 mt-5">
                Eén agent, een compleet ecommerce team.
              </h2>
              <p className="lead mt-5 max-w-[420px]">
                Zeven diensten die normaal bij losse mensen, bureaus en tools
                liggen. Bij Fedde zitten ze in één agent, voor één bedrag.
              </p>
              <a
                href={BOOKING_URL}
                className="mt-7 inline-flex items-center gap-2 font-display text-[17px] font-600 text-accent transition-colors hover:text-accent-dark"
                style={{ fontWeight: 600 }}
              >
                Plan een kennismaking
                <ArrowRight size={17} />
              </a>
            </Reveal>
          </div>

          {/* rechterkant: genummerde lijst */}
          <div>
            {services.map((s, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={s.title} delay={Math.min(i * 0.04, 0.2)}>
                  <div className="group flex gap-5 rounded-[24px] border-b border-border px-4 py-7 transition-colors last:border-b-0 hover:bg-white sm:gap-7 sm:px-6">
                    <span
                      className="font-display text-[15px] font-600 text-muted-fg/60 pt-1.5"
                      style={{ fontWeight: 600 }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <Icon size={21} />
                    </span>
                    <div>
                      <h3 className="font-display text-[21px]" style={{ fontWeight: 700 }}>
                        {s.title}
                      </h3>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-muted-fg">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}

            <Reveal delay={0.1}>
              <div
                className="mt-6 rounded-[24px] px-6 py-6 text-[15px] leading-relaxed"
                style={{ background: "var(--amber-soft)", color: "#7a4a0e" }}
              >
                <span className="font-600" style={{ fontWeight: 600 }}>
                  En alles wat we hierna nog bouwen.
                </span>{" "}
                Je agent groeit mee: nieuwe skills die elders werken, komen ook
                bij jou binnen.
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
