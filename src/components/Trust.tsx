import { Reveal } from "./Reveal";
import { trust } from "@/lib/site";
import { Plug, ShieldCheck, Eye } from "lucide-react";

const icons = [Plug, ShieldCheck, Eye];

export function Trust() {
  return (
    <section id="vertrouwen" className="py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-[620px] text-center">
          <span className="eyebrow">Techniek en vertrouwen</span>
          <h2 className="display-2 mt-5">Jij houdt de regie.</h2>
          <p className="lead mx-auto mt-5 max-w-[480px]">
            Fedde doet het werk, jij zet de laatste stap. Zo is dat geregeld.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {trust.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.title} delay={i * 0.07}>
                <div className="card h-full">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-soft text-accent">
                    <Icon size={21} />
                  </span>
                  <div
                    className="mt-5 text-[13px] font-600 uppercase tracking-[0.08em] text-muted-fg"
                    style={{ fontWeight: 600 }}
                  >
                    {item.eyebrow}
                  </div>
                  <h3 className="mt-2 font-display text-[21px] leading-snug" style={{ fontWeight: 700 }}>
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-muted-fg">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
