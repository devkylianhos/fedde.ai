import { Reveal } from "./Reveal";
import { audiences } from "@/lib/site";
import { cn } from "@/lib/utils";
import {
  ShoppingBag,
  Briefcase,
  UserRound,
  Stethoscope,
  UtensilsCrossed,
  User,
  ArrowRight,
} from "lucide-react";

const icons = [ShoppingBag, Briefcase, UserRound, Stethoscope, UtensilsCrossed, User];

export function Audiences() {
  return (
    <section id="voor-wie" className="py-20 sm:py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-[640px] text-center">
          <h2 className="display-2">Elk bedrijf heeft terugkerend werk. Tibbe neemt het over.</h2>
          <p className="lead mx-auto mt-5 max-w-[520px]">
            Of je nu producten verkoopt, klanten begeleidt of een praktijk runt,
            het geregel is overal hetzelfde. En dat is precies wat Tibbe doet.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience, i) => {
            const Icon = icons[i];
            const href = audience.label === "Webshops" ? "/webshops" : undefined;
            const inner = (
              <div className={cn("card h-full", href && "transition-colors hover:border-accent/40")}>
                <span className="grid h-11 w-11 place-items-center rounded-[3px] bg-accent-soft text-accent">
                  <Icon size={19} />
                </span>
                <h3 className="mt-4 font-display text-[21px]">{audience.label}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-muted-fg">
                  {audience.body}
                </p>
                {href && (
                  <span className="mt-3 inline-flex items-center gap-1 text-[14px] font-600 text-accent" style={{ fontWeight: 600 }}>
                    Bekijk de webshop-agents
                    <ArrowRight size={15} />
                  </span>
                )}
              </div>
            );
            return (
              <Reveal key={audience.label} delay={Math.min((i % 3) * 0.06, 0.18)}>
                {href ? <a href={href}>{inner}</a> : inner}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
