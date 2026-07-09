/* Pure HTML/CSS reproduction of the Fedde dashboard — the hero visual.
   Built as real UI (not a placeholder image) so it stays crisp at any size.
   TODO: vervang de voorbeeldcijfers door een echte screenshot of live data. */

import { TrendingUp, RotateCcw, Star, FileText } from "lucide-react";

function Stat({
  icon,
  label,
  value,
  delta,
  positive = true,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  delta: string;
  positive?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-border bg-background/60 p-4">
      <div className="flex items-center gap-2 text-[12px] font-500 text-muted-fg">
        <span className="text-accent">{icon}</span>
        {label}
      </div>
      <div className="mt-2 font-display text-[26px] leading-none" style={{ fontWeight: 500 }}>
        {value}
      </div>
      <div
        className="mt-1.5 text-[12px] font-500"
        style={{ color: positive ? "#0a8f4e" : "#c2410c" }}
      >
        {delta}
      </div>
    </div>
  );
}

export function DashboardMock() {
  return (
    <div className="overflow-hidden rounded-[24px] border border-border bg-white shadow-[0_30px_80px_-30px_rgba(8,11,18,0.25)]">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#e5e9f2]" />
        <span className="h-3 w-3 rounded-full bg-[#e5e9f2]" />
        <span className="h-3 w-3 rounded-full bg-[#e5e9f2]" />
        <span className="ml-3 text-[12px] font-500 text-muted-fg">
          Fedde · dashboard
        </span>
        <span className="ml-auto flex items-center gap-1.5 text-[12px] font-500 text-accent">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          live
        </span>
      </div>

      <div className="p-4 sm:p-6">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <Stat icon={<TrendingUp size={15} />} label="Omzet vandaag" value="€ 4.812" delta="+12,4%" />
          <Stat icon={<RotateCcw size={15} />} label="Retouren" value="3,1%" delta="-0,6%" />
          <Stat icon={<Star size={15} />} label="Reviews" value="4,8" delta="+18 deze week" />
          <Stat icon={<FileText size={15} />} label="Content live" value="6" delta="+2 blogs" />
        </div>

        {/* mini chart */}
        <div className="mt-4 rounded-2xl border border-border bg-background/60 p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[12px] font-500 text-muted-fg">Omzet · 7 dagen</span>
            <span className="text-[12px] font-500 text-accent">+21%</span>
          </div>
          <div className="flex h-24 items-end gap-2">
            {[42, 58, 49, 66, 61, 78, 92].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-md" style={{ height: `${h}%`, background: i === 6 ? "#0088ff" : "rgba(0,136,255,0.22)" }} />
            ))}
          </div>
        </div>

        {/* approval row */}
        <div className="mt-4 flex items-center gap-3 rounded-2xl border border-border bg-background/60 p-3.5">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-accent-soft text-accent">
            <FileText size={15} />
          </span>
          <div className="min-w-0 flex-1">
            <div className="truncate text-[13px] font-600">Nieuwe SEO-blog klaar: &ldquo;Hardloopschoenen voor de winter&rdquo;</div>
            <div className="text-[12px] text-muted-fg">Wacht op jouw goedkeuring</div>
          </div>
          <span className="rounded-full bg-accent px-3 py-1.5 text-[12px] font-600 text-white">Keur goed</span>
        </div>
      </div>
    </div>
  );
}
