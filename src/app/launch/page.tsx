import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Check } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { Countdown } from "@/components/Countdown";
import {
  BOOKING_URL,
  LAUNCH_DATE,
  BETA_SEATS_TOTAL,
  BETA_SEATS_TAKEN,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Fedde launch — sta vooraan",
  description:
    "Bij de launch gaat de instap van 250 naar 500 euro per maand. Wie er in de beta bij is, houdt de betaprijs zolang die blijft.",
};

export const dynamic = "force-dynamic";

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

async function waitlistSignup(formData: FormData) {
  "use server";
  const email = String(formData.get("email") ?? "").trim();
  if (!email.includes("@")) redirect("/launch?fout=email");

  const key = process.env.RESEND_API_KEY;
  if (key) {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.WAITLIST_FROM ?? "Fedde <onboarding@resend.dev>",
        to: [process.env.WAITLIST_TO ?? "hallo@fedde.ai"],
        subject: "Nieuwe aanmelding launchlijst",
        text: `Launchlijst-aanmelding: ${email}`,
      }),
    }).catch(() => {});
  }
  redirect("/launch?ok=1");
}

export default async function LaunchPage({
  searchParams,
}: {
  searchParams: Promise<{ ok?: string; fout?: string }>;
}) {
  const params = await searchParams;
  const seatsLeft = BETA_SEATS_TOTAL - BETA_SEATS_TAKEN;
  const betaOpen = seatsLeft > 0;
  const left = remaining(LAUNCH_DATE);
  const canStoreSignups = Boolean(process.env.RESEND_API_KEY);

  const launchDay = new Date(LAUNCH_DATE).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
  });

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-8%] h-[480px] w-[480px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(232,155,60,0.14), transparent 65%)" }}
      />

      <div className="container-x relative py-10">
        <a href="/" className="inline-flex items-center gap-2.5">
          <BrandMark />
          <span className="font-display text-[20px]" style={{ fontWeight: 700 }}>
            fedde
          </span>
        </a>

        <div className="mt-14 grid grid-cols-1 items-start gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          {/* verhaalkant */}
          <div>
            <span className="eyebrow">Fedde launch · {launchDay}</span>

            <div className="mt-4">
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-600"
                style={{
                  fontWeight: 600,
                  background: betaOpen ? "var(--accent-soft)" : "var(--amber-soft)",
                  color: betaOpen ? "var(--accent)" : "#a05e12",
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: betaOpen ? "var(--accent)" : "var(--amber)" }}
                />
                {betaOpen
                  ? `beta open · nog ${seatsLeft} van ${BETA_SEATS_TOTAL} plekken`
                  : `beta vol · ${BETA_SEATS_TOTAL} van ${BETA_SEATS_TOTAL} plekken bezet`}
              </span>
            </div>

            <h1 className="display-1 mt-6">
              {left.done
                ? "We zijn live."
                : betaOpen
                  ? "De beta is open. Daarna gaat de prijs omhoog."
                  : "De beta zit vol. Sta vooraan bij de launch."}
            </h1>

            <p className="lead mt-6 max-w-[520px]">
              {betaOpen
                ? `Tot de launch stap je in voor 250 euro per maand, en die prijs blijft staan zolang je blijft. Vanaf ${launchDay} wordt de instap 500 euro.`
                : `Op ${launchDay} gaat Fedde open voor iedereen, voor 500 euro per maand. Laat je e-mailadres achter en je hoort het als eerste.`}
            </p>

            <div className="mt-9">
              <Countdown targetIso={LAUNCH_DATE} initial={left} />
            </div>

            <ul className="mt-9 space-y-2.5">
              {[
                "Beta-instappers houden de betaprijs zolang ze blijven",
                "Vandaag geen betaling, eerst een kennismaking",
                "Maandelijks opzegbaar, je data gaat met je mee",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[14px] text-muted-fg">
                  <Check size={15} className="flex-none text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* actiekant */}
          <div className="rounded-[28px] border-2 border-accent bg-white p-7 sm:p-8">
            {betaOpen ? (
              <>
                <p className="eyebrow">Nu instappen</p>
                <h2 className="mt-3 font-display text-[26px] leading-[1.1]" style={{ fontWeight: 700 }}>
                  Claim een betaplek voor de prijs omhoog gaat.
                </h2>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-display text-[44px] leading-none" style={{ fontWeight: 700 }}>
                    € 250
                  </span>
                  <span className="text-[14px] text-muted-fg">/ maand · vast zolang je blijft</span>
                </div>
                <div className="mt-1.5 text-[13px] text-muted-fg">
                  excl. btw · excl. token usage en Claude-abonnement
                </div>

                {/* plekkenmeter */}
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-sand">
                    <div
                      className="rounded-full bg-accent"
                      style={{ width: `${(BETA_SEATS_TAKEN / BETA_SEATS_TOTAL) * 100}%` }}
                    />
                  </div>
                  <span className="text-[13px] font-600 text-muted-fg" style={{ fontWeight: 600 }}>
                    {seatsLeft} vrij
                  </span>
                </div>

                <a href={BOOKING_URL} className="btn-primary mt-7 w-full">
                  Plan een kennismaking
                </a>
                <a
                  href="/#diensten"
                  className="mt-4 block text-center text-[14px] font-600 text-accent hover:text-accent-dark"
                  style={{ fontWeight: 600 }}
                >
                  Eerst kijken wat Fedde doet
                </a>
              </>
            ) : params.ok ? (
              <div className="py-6 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent-soft text-accent">
                  <Check size={26} />
                </span>
                <h2 className="mt-5 font-display text-[24px]" style={{ fontWeight: 700 }}>
                  Je staat op de lijst.
                </h2>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-fg">
                  Zodra Fedde opengaat, hoor je het als eerste. Liever nu al
                  praten?{" "}
                  <a href={BOOKING_URL} className="font-600 text-accent" style={{ fontWeight: 600 }}>
                    Plan een call
                  </a>
                  .
                </p>
              </div>
            ) : (
              <>
                <p className="eyebrow">Launchlijst</p>
                <h2 className="mt-3 font-display text-[26px] leading-[1.1]" style={{ fontWeight: 700 }}>
                  Hoor het als eerste zodra Fedde opengaat.
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-fg">
                  Alleen je e-mailadres, meer vragen we niet. Geen nieuwsbrief,
                  alleen bericht bij de launch.
                </p>
                {canStoreSignups ? (
                  <form action={waitlistSignup} className="mt-6 flex flex-col gap-3">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jij@jouwbedrijf.nl"
                      className="w-full rounded-full border border-border bg-background px-5 py-3.5 text-[15px] outline-none transition-colors focus:border-accent"
                    />
                    <button type="submit" className="btn-primary w-full">
                      Zet me op de lijst
                    </button>
                    {params.fout && (
                      <p className="text-center text-[13px] text-[#c2410c]">
                        Dat lijkt geen geldig e-mailadres. Probeer het even opnieuw.
                      </p>
                    )}
                  </form>
                ) : (
                  <a
                    href="mailto:hallo@fedde.ai?subject=Zet%20mij%20op%20de%20launchlijst"
                    className="btn-primary mt-6 w-full"
                  >
                    Zet me op de lijst
                  </a>
                )}
                <a
                  href={BOOKING_URL}
                  className="mt-4 block text-center text-[14px] font-600 text-accent hover:text-accent-dark"
                  style={{ fontWeight: 600 }}
                >
                  Liever eerst praten? Plan een call
                </a>
              </>
            )}
          </div>
        </div>

        <p className="mt-16 text-[13px] text-muted-fg">
          Geen tracking, geen cookiebanner. Zo doen we dat hier.
        </p>
      </div>
    </main>
  );
}
