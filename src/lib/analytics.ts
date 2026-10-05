export const ANALYTICS_ID = "G-FKRY4F52YP";
export const CONSENT_KEY = "tibbe-analytics-consent-v1";
export type AnalyticsConsent = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    "ga-disable-G-FKRY4F52YP"?: boolean;
  }
}

let initialized = false;

export function readAnalyticsConsent(): AnalyticsConsent | null {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

function clearAnalyticsCookies() {
  const parts = location.hostname.split(".");
  const domains = ["", ...parts.map((_, i) => `; domain=${parts.slice(i).join(".")}`)];
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.trim().split("=")[0];
    if (name !== "_ga" && !name.startsWith("_ga_")) continue;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain}`;
    }
  }
}

export function applyAnalyticsConsent(consent: AnalyticsConsent | null) {
  const granted = consent === "granted";
  window["ga-disable-G-FKRY4F52YP"] = !granted;
  if (!granted) {
    window.gtag?.("consent", "update", { analytics_storage: "denied" });
    clearAnalyticsCookies();
    return;
  }

  if (initialized) {
    window.gtag?.("consent", "update", { analytics_storage: "granted" });
    return;
  }
  initialized = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    // gtag expects Arguments objects, as in Google's installation snippet.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("consent", "update", { analytics_storage: "granted" });
  window.gtag("js", new Date());
  window.gtag("config", ANALYTICS_ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`;
  document.head.appendChild(script);
}

export function saveAnalyticsConsent(consent: AnalyticsConsent) {
  try { localStorage.setItem(CONSENT_KEY, consent); } catch { /* Apply for this visit. */ }
  applyAnalyticsConsent(consent);
}
