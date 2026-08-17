import { Reveal } from "./Reveal";
import { webshopAgents } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Check, Tag, ShoppingCart, Star, Sparkles, MessageCircle } from "lucide-react";

const roleIcon = {
  "Site Agent": Tag,
  "Lead Agent": ShoppingCart,
  "Review Agent": Star,
  "Creative Agent": Sparkles,
  "Service Agent": MessageCircle,
} as const;

export function WebshopAgents() {
  return (
    <section id="agents" className="py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-[640px] text-center">
          <span className="eyebrow">De agents</span>
          <h2 className="display-2 mt-5">Elke taak krijgt zijn eigen agent.</h2>
          <p className="lead mx-auto mt-5 max-w-[520px]">
            Onder je Fedde werken gespecialiseerde agents samen. Elk goed in één
            ding, allemaal in jouw stem, en altijd met jouw goedkeuring.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-16 sm:gap-24">
          {webshopAgents.map((agent, i) => {
            const Icon = roleIcon[agent.role as keyof typeof roleIcon];
            const flipped = i % 2 === 1;
            return (
              <div
                key={agent.role}
                className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16"
              >
                <Reveal className={cn(flipped && "lg:order-2")}>
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3.5 py-1.5 text-[13px] font-600 text-accent" style={{ fontWeight: 600 }}>
                    <Icon size={15} />
                    {agent.role}
                  </span>
                  <h3 className="display-3 mt-4">{agent.title}</h3>
                  <p className="lead mt-4 max-w-[440px]">{agent.body}</p>
                </Reveal>

                <Reveal delay={0.1} y={26} className={cn(flipped && "lg:order-1")}>
                  <AgentVisual type={agent.visual} />
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[24px] border border-border bg-white p-5 shadow-[var(--shadow-floating)] sm:p-6">
      {children}
    </div>
  );
}

function AgentVisual({ type }: { type: string }) {
  if (type === "site") {
    return (
      <Frame>
        <div className="text-[12px] font-600 uppercase tracking-[0.1em] text-muted-fg" style={{ fontWeight: 600 }}>
          Wijziging klaar voor jou
        </div>
        <div className="mt-4 rounded-2xl border border-border bg-background/60 p-4">
          <div className="text-[13px] font-600" style={{ fontWeight: 600 }}>Zomerjas — productpagina</div>
          <div className="mt-3 flex items-center gap-3">
            <span className="text-[15px] text-muted-fg line-through">€ 129,00</span>
            <span className="text-[18px] font-700 text-accent" style={{ fontWeight: 700 }}>€ 99,00</span>
            <span className="rounded-full bg-amber-soft px-2.5 py-1 text-[11px] font-600 text-[#92580a]" style={{ fontWeight: 600 }}>-23%</span>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <span className="flex-1 rounded-xl bg-accent px-4 py-2.5 text-center text-[13px] font-600 text-white" style={{ fontWeight: 600 }}>Zet live</span>
          <span className="rounded-xl border border-border px-4 py-2.5 text-[13px] font-600 text-muted-fg" style={{ fontWeight: 600 }}>Nog even niet</span>
        </div>
      </Frame>
    );
  }

  if (type === "cart") {
    return (
      <Frame>
        <div className="flex items-center gap-2 text-[12px] font-600 text-muted-fg" style={{ fontWeight: 600 }}>
          <span className="h-2 w-2 rounded-full bg-[#25D366]" />
          WhatsApp · 20 min na verlaten mandje
        </div>
        <div className="mt-4 max-w-[86%] rounded-2xl rounded-tl-md bg-background/70 p-3.5 text-[14px] leading-relaxed">
          Hoi Sanne, je hebt je sneakers nog in je mandje staan. Hij is bijna
          uitverkocht in maat 39. Met <span className="font-700 text-accent" style={{ fontWeight: 700 }}>WELKOM10</span> krijg je 10% korting, alleen voor jou.
        </div>
        <div className="mt-3 ml-auto max-w-[70%] rounded-2xl rounded-tr-md bg-accent p-3.5 text-[14px] leading-relaxed text-white">
          Oh top, doe maar!
        </div>
      </Frame>
    );
  }

  if (type === "review") {
    return (
      <Frame>
        <div className="text-[12px] font-600 uppercase tracking-[0.1em] text-muted-fg" style={{ fontWeight: 600 }}>
          Reviewverzoek · 2 dagen na levering
        </div>
        <div className="mt-4 rounded-2xl border border-border bg-background/60 p-4">
          <div className="text-[14px] leading-relaxed">Hoe bevalt je bestelling? Eén tik en je bent klaar.</div>
          <div className="mt-3 flex gap-1.5 text-accent">
            {[0, 1, 2, 3, 4].map((s) => (
              <Star key={s} size={22} fill="currentColor" />
            ))}
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-xl bg-amber-soft px-3.5 py-2.5 text-[12.5px] text-[#7a4a0e]">
          <span className="font-600" style={{ fontWeight: 600 }}>1 review van 2 sterren gezien.</span> Eerst naar jou, niet naar de webshop.
        </div>
      </Frame>
    );
  }

  if (type === "creative") {
    return (
      <Frame>
        <div className="text-[12px] font-600 uppercase tracking-[0.1em] text-muted-fg" style={{ fontWeight: 600 }}>
          Uit je catalogus, 4 varianten
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {[
            { label: "Vierkant", ratio: "aspect-square" },
            { label: "Story", ratio: "aspect-[9/16]" },
            { label: "Banner", ratio: "aspect-[16/9]" },
            { label: "Video", ratio: "aspect-square" },
          ].map((v, i) => (
            <div key={v.label} className={cn("relative overflow-hidden rounded-xl", v.ratio)}
              style={{ background: i % 2 ? "linear-gradient(135deg,#2f6fe8,#1e4fd6)" : "linear-gradient(135deg,#93b4f5,#2563eb)" }}>
              <span className="absolute bottom-2 left-2.5 text-[11px] font-600 text-white/95" style={{ fontWeight: 600 }}>{v.label}</span>
              {v.label === "Video" && (
                <span className="absolute right-2 top-2 grid h-6 w-6 place-items-center rounded-full bg-white/90 text-accent text-[10px]">▶</span>
              )}
            </div>
          ))}
        </div>
      </Frame>
    );
  }

  // service
  return (
    <Frame>
      <div className="flex items-center gap-2 text-[12px] font-600 text-muted-fg" style={{ fontWeight: 600 }}>
        <span className="h-2 w-2 rounded-full bg-[#25D366]" />
        Klantenservice · WhatsApp
      </div>
      <div className="mt-4 max-w-[82%] rounded-2xl rounded-tl-md bg-background/70 p-3 text-[14px] leading-relaxed">
        Kan ik mijn broek nog ruilen? Zit een maatje te klein.
      </div>
      <div className="mt-3 ml-auto max-w-[82%] rounded-2xl rounded-tr-md bg-accent p-3 text-[14px] leading-relaxed text-white">
        Natuurlijk, ik heb een gratis retourlabel voor je klaargezet en maat L
        alvast gereserveerd. Je hebt hem uiterlijk woensdag.
      </div>
      <div className="mt-3 flex items-center gap-2 text-[12px] text-muted-fg">
        <Check size={13} className="text-accent" />
        Zelf afgehandeld. Jij zag het alleen terug in het dashboard.
      </div>
    </Frame>
  );
}
