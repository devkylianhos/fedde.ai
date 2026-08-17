import { Reveal } from "./Reveal";
import { FOUNDER, BOOKING_URL } from "@/lib/site";

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "F";
  return (parts[0][0] + (parts[parts.length - 1][0] ?? "")).toUpperCase();
}

export function FounderNote() {
  const name = FOUNDER.name || "Naam nog invullen";

  return (
    <section className="py-16 sm:py-20">
      <div className="container-x">
        <Reveal className="mx-auto max-w-[720px]">
          <div className="rounded-[28px] border border-border bg-white p-8 shadow-[var(--shadow-surface)] sm:p-10">
            <p className="eyebrow">Even voorstellen</p>
            <blockquote className="mt-6 font-display text-[24px] leading-[1.32] text-foreground sm:text-[28px]">
              &ldquo;Ik run zelf een bedrijf, dus ik weet hoe het geregel je
              avonden opeet. Fedde is de werknemer die ik zelf wilde hebben. In de
              beta zit ik bij elke kennismaking, en ik bouw hem samen met de
              eerste tien klanten. Bel me gerust met je rommeligste proces.&rdquo;
            </blockquote>

            <div className="mt-8 flex items-center gap-4">
              {FOUNDER.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={FOUNDER.photo}
                  alt={name}
                  className="h-12 w-12 rounded-full object-cover"
                />
              ) : (
                <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-[16px] font-700 text-white" style={{ fontWeight: 700 }}>
                  {initials(FOUNDER.name)}
                </span>
              )}
              <div>
                <div className="font-600 text-foreground" style={{ fontWeight: 600 }}>
                  {name}
                </div>
                <div className="text-[14px] text-muted-fg">{FOUNDER.role}</div>
              </div>
              <a href={BOOKING_URL} className="btn-secondary sm ml-auto hidden sm:inline-flex">
                Plan een kennismaking
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
