/* Pure HTML/CSS reproduction of the Fedde dashboard — the hero visual.
   Built as real UI (not a placeholder image) so it stays crisp at any size.
   TODO: vervang de voorbeeldcijfers door een echte screenshot of live data. */

import { TrendingUp, Mail, CircleCheck, FileText } from "lucide-react";
import { CountUp, GrowBars } from "./DashboardBits";

function Stat({
  icon,
  label,
  value,
  delta,
  positive = true,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
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
    <div className="overflow-hidden rounded-[28px] border border-border bg-white shadow-[0_34px_70px_-28px_rgba(35,32,27,0.28)]">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#eee5d8]" />
        <span className="h-3 w-3 rounded-full bg-[#eee5d8]" />
        <span className="h-3 w-3 rounded-full bg-[#eee5d8]" />
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
          <Stat
            icon={<TrendingUp size={15} />}
            label="Omzet vandaag"
            value={<CountUp to={4812} prefix="€ " />}
            delta="+12,4%"
          />
          <Stat icon={<Mail size={15} />} label="Mails afgehandeld" value="32" delta="+14 vandaag" />
          <Stat icon={<CircleCheck size={15} />} label="Taken afgerond" value="23" delta="3 wachten op jou" />
          <Stat icon={<FileText size={15} />} label="Content live" value="6" delta="+2 blogs" />
        </div>

        {/* mini chart */}
        <div className="mt-4 rounded-2xl border border-border bg-background/60 p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[12px] font-500 text-muted-fg">Omzet · 7 dagen</span>
            <span className="text-[12px] font-500 text-accent">+21%</span>
          </div>
          <GrowBars values={[42, 58, 49, 66, 61, 78, 92]} />
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
          <span className="nudge rounded-full bg-accent px-3 py-1.5 text-[12px] font-600 text-white">Keur goed</span>
        </div>
      </div>
    </div>
  );
}
