import { Reveal } from "./Reveal";
import { ScrollSpine } from "./ScrollSpine";
import {
  RotateCcw,
  PenLine,
  LayoutDashboard,
  Receipt,
  Star,
  AlertTriangle,
  Palette,
} from "lucide-react";

/* Voorbeeld van een doorsnee dag — geen echte klantdata.
   TODO: vervang door echte voorbeelden zodra er een klantcase is. */
const feed = [
  {
    time: "03:12",
    icon: RotateCcw,
    text: "De administratie van gisteren verwerkt en klaargezet voor vandaag.",
    badge: null,
  },
  {
    time: "06:58",
    icon: PenLine,
    text: "Blog geschreven en klaargezet, in jouw toon en op jouw onderwerp.",
    badge: { label: "wacht op jouw goedkeuring", tone: "amber" as const },
  },
  {
    time: "08:30",
    icon: LayoutDashboard,
    text: "Dashboard bijgewerkt met de omzet en cijfers van gisteren.",
    badge: null,
  },
  {
    time: "09:15",
    icon: Receipt,
    text: "Factuurherinnering verstuurd, persoonlijk en op tijd.",
    badge: { label: "door jou goedgekeurd", tone: "blue" as const },
  },
  {
    time: "11:40",
    icon: Star,
    text: "Veertien klantmails beantwoord in jouw toon. Twee gevoelige liggen voor jou klaar.",
    badge: null,
  },
  {
    time: "14:05",
    icon: AlertTriangle,
    text: "Signaal: één klacht komt deze week vaker terug. Fedde legt je uit waarom.",
    badge: { label: "signaal naar jou", tone: "amber" as const },
  },
  {
    time: "16:20",
    icon: Palette,
    text: "Social-post en banner in je huisstijl klaargezet voor volgende week.",
    badge: { label: "wacht op jouw goedkeuring", tone: "amber" as const },
  },
];

export function DayFeed() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
          {/* kop links, blijft hangen */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <span className="eyebrow warm">Terwijl jij wat anders doet</span>
              <h2 className="display-2 mt-5">Zo ziet een dinsdag met Fedde eruit.</h2>
              <p className="lead mt-5 max-w-[420px]">
                Fedde werkt door als je bedrijf dicht is en jij slaapt. Alles
                wat naar buiten gaat en telt, komt eerst langs jou.
              </p>
              <p className="mt-6 text-[13px] text-muted-fg">
                Voorbeeld van een doorsnee dag.
              </p>
            </Reveal>
          </div>

          {/* feed rechts */}
          <div className="relative">
            <ScrollSpine className="absolute bottom-8 left-[26px] top-8" />
            <div className="flex flex-col gap-4">
              {feed.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.time} delay={Math.min(i * 0.05, 0.25)}>
                    <div className="relative flex items-start gap-5 rounded-[22px] border border-border bg-white p-5">
                      <span className="relative z-10 grid h-11 w-11 flex-none place-items-center rounded-2xl bg-accent-soft text-accent">
                        <Icon size={19} />
                      </span>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <span
                            className="font-display text-[14px] tabular-nums text-muted-fg"
                            style={{ fontWeight: 600 }}
                          >
                            {item.time}
                          </span>
                          {item.badge && (
                            <span
                              className="rounded-full px-2.5 py-1 text-[11px] font-600"
                              style={{
                                fontWeight: 600,
                                background:
                                  item.badge.tone === "amber"
                                    ? "var(--amber-soft)"
                                    : "var(--accent-soft)",
                                color:
                                  item.badge.tone === "amber" ? "#a05e12" : "var(--accent)",
                              }}
                            >
                              {item.badge.label}
                            </span>
                          )}
                        </div>
                        <p className="mt-1.5 text-[15px] leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
