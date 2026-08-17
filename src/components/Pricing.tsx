import { Reveal } from "./Reveal";
import { Countdown } from "./Countdown";
import { BrandMark } from "./BrandMark";
import {
  BOOKING_URL,
  BETA_SEATS_TOTAL,
  BETA_SEATS_TAKEN,
  LAUNCH_DATE,
} from "@/lib/site";
import { Check, BadgeEuro } from "lucide-react";

const betaIncluded = [
  "Je eigen Tibbe, 24/7 in een afgeschermde omgeving",
  "Persoonlijke onboarding, koppelingen met je samen gezet",
  "Dashboard, alle zeven diensten en alles wat we hierna bouwen",
  "Nieuwe skills die elders werken, komen ook bij jou binnen",
  "Maandelijks opzegbaar. Je data gaat met je mee.",
];

function remaining(targetIso: string) {
  const diff = Math.max(0, new Date(targetIso).getTime() - Date.now());
  return {
    d: Math.floor(diff / 86_400_000),
    h: Math.floor(diff / 3_600_000) % 24,
    m: Math.floor(diff / 60_000) % 60,
    s: Math.floor(diff / 1_000) % 60,
    done: diff === 0,
  };
}

export function Pricing() {
  const seatsLeft = BETA_SEATS_TOTAL - BETA_SEATS_TAKEN;
  const left = remaining(LAUNCH_DATE);
  const launchDay = new Date(LAUNCH_DATE).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
  });

  return (
    <section id="prijzen" className="py-20 sm:py-28">
      <div className="container-x">
        {/* launch-blok */}
        <Reveal className="mx-auto max-w-[620px] text-center">
          <BrandMark size={34} />
          <p className="mt-4 text-[13px] font-600 uppercase tracking-[0.16em] text-muted-fg" style={{ fontWeight: 600 }}>
            Volledige launch
          </p>
          <h2 className="display-2 mt-3">Binnenkort live.</h2>
          <p className="mt-3 text-[15px] text-muted-fg">
            <span className="font-600 text-foreground" style={{ fontWeight: 600 }}>
              € 500
            </span>{" "}
            per maand vanaf {launchDay}. Wie nu instapt, houdt de betaprijs.
          </p>
          {!left.done && (
            <div className="mt-7 flex justify-center">
              <Countdown targetIso={LAUNCH_DATE} initial={left} />
            </div>
          )}
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-[1040px] grid-cols-1 gap-4 lg:grid-cols-[1.25fr_1fr]">
          {/* betakaart, uitgelicht */}
          <Reveal>
            <div
              className="relative h-full rounded-[3px] border-2 bg-white p-7 sm:p-8"
              style={{ borderColor: "var(--accent)" }}
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="eyebrow">Beta · {BETA_SEATS_TOTAL} plekken · alles erin</span>
              </div>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-[56px] leading-none" style={{ fontWeight: 700 }}>
                  € 250
                </span>
                <span className="text-[15px] text-muted-fg">/ maand</span>
              </div>
              <div className="mt-1.5 text-[13px] text-muted-fg">
                excl. btw · excl. token usage en Claude-abonnement ·{" "}
                <span className="font-600 text-foreground" style={{ fontWeight: 600 }}>
                  deze prijs blijft staan zolang je blijft
                </span>
              </div>

              <ul className="mt-7 space-y-3">
                {betaIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-accent-soft text-accent">
                      <Check size={13} />
                    </span>
                    <span className="text-[15px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href={BOOKING_URL} className="btn-primary">
                  Meld je aan voor een betaplek
                </a>
                <a
                  href={BOOKING_URL}
                  className="text-center text-[15px] font-600 text-accent hover:text-accent-dark sm:text-left"
                  style={{ fontWeight: 600 }}
                >
                  Liever eerst praten? Plan een call
                </a>
              </div>

              <div className="mt-6 border-t border-border pt-5">
                <div className="flex items-center justify-between text-[13px] font-600 text-muted-fg" style={{ fontWeight: 600 }}>
                  <span>{BETA_SEATS_TAKEN} van {BETA_SEATS_TOTAL} plekken bezet</span>
                  <span className="text-accent">nog {seatsLeft} vrij</span>
                </div>
                <div className="mt-2 flex h-2 flex-1 overflow-hidden rounded-full bg-sand">
                  <div
                    className="rounded-full bg-accent transition-[width]"
                    style={{ width: `${(BETA_SEATS_TAKEN / BETA_SEATS_TOTAL) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* rechterkolom: prijs na de beta + maatwerk */}
          <div className="flex flex-col gap-4">
            <Reveal delay={0.08}>
              <div className="card">
                <div className="text-[14px] font-600 text-muted-fg" style={{ fontWeight: 600 }}>
                  Na de beta
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-display text-[34px] leading-none" style={{ fontWeight: 700 }}>
                    € 500
                  </span>
                  <span className="text-[14px] text-muted-fg">/ maand</span>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-fg">
                  Dezelfde agent, dezelfde diensten. Wie in de beta instapt, houdt
                  de betaprijs.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="flex flex-1 flex-col rounded-[3px] bg-sand p-7">
                <span className="grid h-11 w-11 place-items-center rounded-[3px] bg-white text-accent">
                  <BadgeEuro size={20} />
                </span>
                <h3 className="mt-4 font-display text-[19px]" style={{ fontWeight: 700 }}>
                  Werk op maat
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-fg">
                  Custom dashboards en maatwerk bovenop je agent.
                </p>
                <div className="mt-auto pt-4">
                  <span className="font-display text-[24px] leading-none" style={{ fontWeight: 700 }}>
                    vanaf € 1.500
                  </span>
                  <div className="mt-1 text-[13px] text-muted-fg">excl. btw, eenmalig</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* garantiebanner */}
        {/* TODO: alleen tonen als je dit kunt waarmaken */}
        <Reveal delay={0.18}>
          <div
            className="mx-auto mt-4 flex max-w-[1040px] flex-col items-start gap-3 rounded-[3px] px-7 py-6 sm:flex-row sm:items-center"
            style={{ background: "var(--amber-soft)" }}
          >
            <span
              className="grid h-11 w-11 flex-none place-items-center rounded-[3px] bg-white font-display text-[17px] text-[#a05e12]"
              style={{ fontWeight: 700 }}
            >
              14
            </span>
            <p className="text-[15px] leading-relaxed text-[#7a4a0e]">
              <span className="font-600" style={{ fontWeight: 600 }}>
                14 dagen garantie.
              </span>{" "}
              Levert Tibbe in de eerste twee weken niet meer op dan je betaalt,
              dan krijg je je geld terug.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
