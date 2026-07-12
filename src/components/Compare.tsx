import { Reveal } from "./Reveal";
import { Check, Minus } from "lucide-react";

const rows = [
  {
    label: "SEO-blogs die scoren",
    los: "tekstbureau of freelancer, per stuk betalen",
  },
  {
    label: "Retouren bijhouden en afhandelen",
    los: "eigen uren of een medewerker",
  },
  {
    label: "Design in je huisstijl",
    los: "designer inhuren, wachten op oplevering",
  },
  {
    label: "Factuurherinneringen",
    los: "zelf achteraan zitten, of het blijft liggen",
  },
  {
    label: "Reviews verzamelen",
    los: "losse review-tool met eigen abonnement",
  },
  {
    label: "Product research",
    los: "zelf uitzoeken tussen de bedrijven door",
  },
  {
    label: "Live dashboard",
    los: "losse rapportages uit losse tools",
  },
];

export function Compare() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-[620px] text-center">
          <span className="eyebrow">Reken het na</span>
          <h2 className="display-2 mt-5">Wat je nu los regelt, zit bij Fedde in één agent.</h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mx-auto mt-12 max-w-[900px] overflow-hidden rounded-[28px] border border-border bg-white">
            {/* kopregel */}
            <div className="hidden grid-cols-[1.1fr_1fr_0.9fr] items-center border-b border-border bg-sand px-6 py-4 sm:grid sm:px-8">
              <span className="text-[13px] font-600 uppercase tracking-[0.06em] text-muted-fg" style={{ fontWeight: 600 }}>
                Het werk
              </span>
              <span className="text-[13px] font-600 uppercase tracking-[0.06em] text-muted-fg" style={{ fontWeight: 600 }}>
                Los geregeld
              </span>
              <span className="text-[13px] font-600 uppercase tracking-[0.06em] text-accent" style={{ fontWeight: 600 }}>
                Met Fedde
              </span>
            </div>

            {rows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 gap-1.5 border-b border-border px-6 py-4 last:border-b-0 sm:grid-cols-[1.1fr_1fr_0.9fr] sm:items-center sm:gap-0 sm:px-8"
              >
                <span className="pr-4 text-[15px] font-600" style={{ fontWeight: 600 }}>
                  {row.label}
                </span>
                <span className="flex items-start gap-2 pr-4 text-[13.5px] leading-snug text-muted-fg">
                  <Minus size={14} className="mt-0.5 flex-none opacity-50" />
                  {row.los}
                </span>
                <span className="flex items-center gap-2 text-[14px] font-600 text-accent" style={{ fontWeight: 600 }}>
                  <span className="grid h-5 w-5 flex-none place-items-center rounded-full bg-accent-soft">
                    <Check size={13} />
                  </span>
                  zit erin
                </span>
              </div>
            ))}

            {/* slotregel */}
            <div className="grid grid-cols-1 gap-1.5 bg-sand px-6 py-5 sm:grid-cols-[1.1fr_1fr_0.9fr] sm:items-center sm:gap-0 sm:px-8">
              <span className="text-[15px] font-600" style={{ fontWeight: 600 }}>
                Wat het kost
              </span>
              <span className="pr-4 text-[13.5px] leading-snug text-muted-fg">
                losse facturen, per uur en per tool
              </span>
              <span className="font-display text-[17px] text-accent" style={{ fontWeight: 700 }}>
                € 500 per maand
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-5 max-w-[600px] text-center text-[13px] text-muted-fg">
            En één aanspreekpunt in plaats van vijf. Jij keurt goed wat telt.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
