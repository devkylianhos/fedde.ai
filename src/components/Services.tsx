import { Reveal } from "./Reveal";
import { services } from "@/lib/site";
import {
  PenLine,
  LayoutDashboard,
  RotateCcw,
  Palette,
  Receipt,
  Star,
  Search,
} from "lucide-react";

const icons = [PenLine, LayoutDashboard, RotateCcw, Palette, Receipt, Star, Search];

export function Services() {
  return (
    <section id="diensten" className="py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="max-w-[720px]">
          <p className="eyebrow">Wat Fedde doet</p>
          <h2 className="display-2 mt-4">
            Eén agent. Een compleet
            <br className="hidden sm:block" /> ecommerce team.
          </h2>
          <p className="lead mt-5 max-w-[560px]">
            Zeven diensten die normaal bij losse mensen, bureaus en tools liggen.
            Bij Fedde zitten ze in één agent, voor één bedrag.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[i];
            const featured = i === 0; // first card spans wider, like a bento accent
            return (
              <Reveal
                key={s.title}
                delay={(i % 3) * 0.06}
                className={featured ? "lg:col-span-1" : ""}
              >
                <div className="card group h-full transition-colors hover:border-accent/40">
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
                      <Icon size={20} />
                    </span>
                    <span className="text-[11px] font-600 uppercase tracking-[0.12em] text-muted-fg/60">
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-[22px] leading-[1.15]" style={{ fontWeight: 500 }}>
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-[1.55] text-muted-fg">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            );
          })}

          {/* closing accent card */}
          <Reveal delay={0.12}>
            <div
              className="card flex h-full flex-col justify-between text-white"
              style={{ background: "linear-gradient(135deg, var(--accent-dark), var(--accent))" }}
            >
              <p className="font-display text-[22px] leading-[1.15]" style={{ fontWeight: 500 }}>
                En alles wat we hierna nog bouwen.
              </p>
              <p className="mt-4 text-[15px] leading-[1.55] text-white/85">
                Je agent groeit mee. Nieuwe skills die elders werken, komen ook bij
                jou binnen.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
