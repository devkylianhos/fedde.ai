import { Reveal } from "./Reveal";
import { trust } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Trust() {
  return (
    <section id="vertrouwen" className="relative py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-[720px] text-center">
          <p className="eyebrow">Techniek en vertrouwen</p>
          <h2 className="display-2 mt-4">De rest doet Fedde.</h2>
          <p className="lead mx-auto mt-5 max-w-[540px]">
            Eén agent die op je tools zit, in jouw toon werkt en waar jij altijd de
            laatste stap zet.
          </p>
        </Reveal>

        {/* spine */}
        <div className="relative mx-auto mt-20 max-w-[980px]">
          <div
            aria-hidden
            className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-border md:block"
          />

          <div className="flex flex-col gap-16 md:gap-24">
            {trust.map((item, i) => (
              <div
                key={item.title}
                className="relative grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-16"
              >
                {/* node dot */}
                <span
                  aria-hidden
                  className="absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background bg-accent md:block"
                />

                {/* text */}
                <Reveal
                  className={cn(
                    item.align === "right"
                      ? "md:order-2 md:pl-16 md:text-left"
                      : "md:order-1 md:pr-16 md:text-right",
                  )}
                >
                  <p className="eyebrow">{item.eyebrow}</p>
                  <h3 className="display-3 mt-3">{item.title}</h3>
                  <p className="lead mt-4">{item.body}</p>
                </Reveal>

                {/* visual */}
                <Reveal
                  delay={0.1}
                  className={cn(item.align === "right" ? "md:order-1" : "md:order-2")}
                >
                  <TrustVisual variant={i} />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustVisual({ variant }: { variant: number }) {
  const base =
    "aspect-[4/3] w-full rounded-[24px] border border-border bg-white p-5 overflow-hidden";

  if (variant === 0) {
    // connected tools grid
    return (
      <div className={base}>
        <div className="grid h-full grid-cols-3 gap-3">
          {["Shopify", "Woo", "Klaviyo", "Mollie", "Meta", "TikTok", "Insta", "Gmail", "+"].map(
            (t) => (
              <div
                key={t}
                className="flex items-center justify-center rounded-xl border border-border bg-background/60 text-[12px] font-600 text-muted-fg"
              >
                {t}
              </div>
            ),
          )}
        </div>
      </div>
    );
  }

  if (variant === 1) {
    // approve what matters
    return (
      <div className={base}>
        <div className="flex h-full flex-col justify-center gap-2.5">
          {["Blog goedgekeurd", "Factuurherinnering verstuurd", "Retour afgehandeld"].map(
            (t, i) => (
              <div
                key={t}
                className="flex items-center gap-3 rounded-xl border border-border bg-background/60 px-3.5 py-3"
              >
                <span
                  className="grid h-5 w-5 place-items-center rounded-full text-[11px] font-700 text-white"
                  style={{ background: i === 2 ? "#c3cadd" : "#0088ff" }}
                >
                  ✓
                </span>
                <span className="text-[13px] font-500">{t}</span>
                <span className="ml-auto text-[11px] text-muted-fg">
                  {i === 2 ? "wacht op jou" : "gelogd"}
                </span>
              </div>
            ),
          )}
        </div>
      </div>
    );
  }

  // isolated + monitored
  return (
    <div className={base}>
      <div className="flex h-full items-center justify-center">
        <div className="relative">
          <div className="grid h-24 w-24 place-items-center rounded-2xl border border-border bg-background/60">
            <span className="font-display text-[28px]" style={{ fontWeight: 500 }}>
              F
            </span>
          </div>
          <span className="absolute -right-2 -top-2 flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[11px] font-600 text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            24/7
          </span>
        </div>
      </div>
    </div>
  );
}
