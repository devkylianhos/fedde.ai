import { Reveal } from "./Reveal";
import { Building2, ShieldCheck, Cpu, Handshake } from "lucide-react";

const points = [
  {
    icon: Building2,
    title: "Een echt bedrijf, geen anonieme tool",
    body: "Tibbe is gebouwd door het team achter Kitchen Royal. Een echte zaak met een naam, een adres en een KvK-nummer. Je weet met wie je te maken hebt.",
  },
  {
    icon: ShieldCheck,
    title: "Je loopt geen risico",
    body: "14 dagen garantie, maandelijks opzegbaar en je data gaat altijd met je mee. Bevalt het niet, dan stop je zonder gedoe.",
  },
  {
    icon: Cpu,
    title: "Gebouwd op Claude van Anthropic",
    body: "Onder de motorkap draait een van de sterkste AI-modellen die er is, in jouw eigen afgeschermde omgeving. Gelogd, omkeerbaar en bewaakt.",
  },
  {
    icon: Handshake,
    title: "We zijn net begonnen, en daar zijn we eerlijk over",
    body: "Daarom nu 10 betaplekken met een vaste prijs en persoonlijke begeleiding van de oprichter zelf. Je bouwt Tibbe mee vanaf het eerste uur.",
  },
];

export function WhyTrust() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-[640px] text-center">
          <span className="eyebrow">Waarom Tibbe</span>
          <h2 className="display-2 mt-5">Waarom je ons nu al kunt vertrouwen.</h2>
          <p className="lead mx-auto mt-5 max-w-[520px]">
            Geen loze beloftes en geen verzonnen reviews. Wel een paar dingen die
            gewoon kloppen.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-[920px] grid-cols-1 gap-4 sm:grid-cols-2">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={Math.min((i % 2) * 0.06, 0.12)}>
                <div className="card h-full">
                  <span className="grid h-11 w-11 place-items-center rounded-[3px] bg-accent-soft text-accent">
                    <Icon size={19} />
                  </span>
                  <h3 className="mt-4 font-display text-[21px]">{p.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-muted-fg">
                    {p.body}
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
