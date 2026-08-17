"use client";

import { useEffect, useState } from "react";

const KEY = "tibbe-cookie-consent"; // "essential" | "all"

function readConsent(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

function setConsent(value: "essential" | "all") {
  try {
    window.localStorage.setItem(KEY, value);
  } catch {
    /* localStorage geblokkeerd: dan tonen we de banner elke keer, geen tracking */
  }
  window.dispatchEvent(new Event("tibbe-consent-change"));
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sync = () => setVisible(readConsent() === null);
    sync();
    window.addEventListener("tibbe-consent-change", sync);
    return () => window.removeEventListener("tibbe-consent-change", sync);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="mx-auto flex max-w-[720px] flex-col gap-4 rounded-[3px] border border-border bg-white p-5 shadow-[var(--shadow-floating)] sm:flex-row sm:items-center sm:gap-6">
        <p className="flex-1 text-[14px] leading-relaxed text-muted-fg">
          We gebruiken alleen noodzakelijke cookies, plus optioneel een cookie om
          te meten hoe de site gebruikt wordt. Jij kiest.{" "}
          <a href="/cookies" className="font-600 text-accent underline" style={{ fontWeight: 600 }}>
            Meer lezen
          </a>
        </p>
        <div className="flex flex-none gap-2.5">
          <button onClick={() => setConsent("essential")} className="btn-secondary sm">
            Alleen noodzakelijk
          </button>
          <button onClick={() => setConsent("all")} className="btn-primary sm">
            Alles accepteren
          </button>
        </div>
      </div>
    </div>
  );
}

export function CookieSettingsButton() {
  return (
    <button
      onClick={() => {
        try {
          window.localStorage.removeItem(KEY);
        } catch {
          /* ignore */
        }
        window.dispatchEvent(new Event("tibbe-consent-change"));
      }}
      className="btn-secondary sm"
    >
      Cookievoorkeur opnieuw instellen
    </button>
  );
}
