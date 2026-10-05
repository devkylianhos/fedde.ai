import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";
import ts from "typescript";

const source = ts.transpileModule(readFileSync(new URL("../src/lib/analytics.ts", import.meta.url), "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2017 },
}).outputText;

function setup({ blocked = false, stored = null } = {}) {
  const scripts = [];
  const removed = [];
  const storage = new Map(stored ? [["tibbe-analytics-consent-v1", stored]] : []);
  const document = {
    createElement: () => ({}),
    head: { appendChild: (script) => scripts.push(script) },
    get cookie() { return "_ga=123; _ga_FKRY4F52YP=456; tibbe_uid=keep"; },
    set cookie(value) { removed.push(value); },
  };
  const context = vm.createContext({
    exports: {}, window: {}, document, location: { hostname: "www.tibbe.app" },
    localStorage: {
      getItem: (key) => { if (blocked) throw Error("blocked"); return storage.get(key) ?? null; },
      setItem: (key, value) => { if (blocked) throw Error("blocked"); storage.set(key, value); },
    },
  });
  vm.runInContext(source, context);
  return { api: context.exports, window: context.window, scripts, removed, storage };
}

test("unknown, invalid and refused consent never loads Google", () => {
  for (const stored of [null, "dismissed", "denied"]) {
    const { api, scripts, window } = setup({ stored });
    api.applyAnalyticsConsent(api.readAnalyticsConsent());
    assert.equal(scripts.length, 0);
    assert.equal(window["ga-disable-G-FKRY4F52YP"], true);
    assert.equal(window.dataLayer, undefined);
  }
});

test("acceptance persists, sets consent before configuration and loads exactly once", () => {
  const { api, scripts, window, storage } = setup();
  api.saveAnalyticsConsent("granted");
  api.applyAnalyticsConsent(api.readAnalyticsConsent());
  assert.equal(storage.get(api.CONSENT_KEY), "granted");
  assert.equal(scripts.length, 1);
  assert.equal(scripts[0].src, "https://www.googletagmanager.com/gtag/js?id=G-FKRY4F52YP");
  const commands = window.dataLayer.map((args) => Array.from(args));
  assert.equal(commands[0][0], "consent");
  assert.equal(commands[0][2].ad_storage, "denied");
  assert.equal(commands[1][2].analytics_storage, "granted");
  assert.equal(commands.filter(([command]) => command === "config").length, 1);
  assert.equal(window["ga-disable-G-FKRY4F52YP"], false);
});

test("revoking consent disables analytics and clears only GA cookies across domains", () => {
  const { api, window, removed, scripts } = setup();
  api.saveAnalyticsConsent("granted");
  api.saveAnalyticsConsent("denied");
  assert.equal(window["ga-disable-G-FKRY4F52YP"], true);
  assert.equal(api.readAnalyticsConsent(), "denied");
  assert.ok(removed.some((cookie) => cookie.includes("domain=tibbe.app")));
  assert.ok(removed.every((cookie) => cookie.startsWith("_ga")));
  api.saveAnalyticsConsent("granted");
  assert.equal(window["ga-disable-G-FKRY4F52YP"], false);
  assert.equal(scripts.length, 1);
});

test("blocked browser storage defaults to no tracking but allows explicit consent for this visit", () => {
  const { api, scripts } = setup({ blocked: true });
  assert.equal(api.readAnalyticsConsent(), null);
  api.applyAnalyticsConsent(null);
  assert.equal(scripts.length, 0);
  api.saveAnalyticsConsent("granted");
  assert.equal(scripts.length, 1);
});
