import { Reveal } from "./Reveal";
import { audiences } from "@/lib/site";
import {
  ShoppingBag,
  Briefcase,
  UserRound,
  Stethoscope,
  UtensilsCrossed,
  User,
} from "lucide-react";

const icons = [ShoppingBag, Briefcase, UserRound, Stethoscope, UtensilsCrossed, User];

export function Audiences() {
  return (
    <section id="voor-wie" className="py-20 sm:py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-[640px] text-center">
          <span className="eyebrow">Voor wie</span>
          <h2 className="display-2 mt-5">Elk bedrijf heeft terugkerend werk. Fedde neemt het over.</h2>
          <p className="lead mx-auto mt-5 max-w-[520px]">
            Of je nu producten verkoopt, klanten begeleidt of een praktijk runt,
            het geregel is overal hetzelfde. En dat is precies wat Fedde doet.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={audience.label} delay={Math.min((i % 3) * 0.06, 0.18)}>
                <div className="card h-full">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent-soft text-accent">
                    <Icon size={19} />
                  </span>
                  <h3 className="mt-4 font-display text-[21px]">{audience.label}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-muted-fg">
                    {audience.body}
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
