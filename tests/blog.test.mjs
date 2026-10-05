import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import ts from "typescript";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const code = ts.transpileModule(read("src/content/blog.ts"), {
  compilerOptions: { module: ts.ModuleKind.ESNext },
}).outputText;
const { posts, getPost, postUrl } = await import(`data:text/javascript;base64,${Buffer.from(code).toString("base64")}`);
const completed = ["wat-kost-ai-medewerker", "mail-automatiseren-mkb", "automatisering-zzp", "ai-in-huisstijl", "controle-bij-ai"];
const words = (p) => p.body.flatMap((b) => b.type === "ul" ? b.items : [b.text]).join(" ").split(/\s+/).length;

test("preserves all six existing slugs and completes the five short articles", () => {
  assert.equal(posts.length, 6);
  assert.equal(new Set(posts.map((p) => p.slug)).size, 6);
  for (const slug of completed) {
    const p = getPost(slug);
    assert.ok(p, slug);
    assert.ok(words(p) >= 500, `${slug}: substantive body`);
    assert.ok(p.body.filter((b) => b.type === "h2").length >= 4, slug);
    assert.match(JSON.stringify(p.body), /fictief|fictieve|verzonnen/i);
    assert.match(p.body.at(-1).text, /Tibbe/);
    assert.doesNotMatch(JSON.stringify(p), /—|betaalt de eerste terugkerende taak zichzelf terug|alleen nog afkeurt/);
  }
  assert.equal(getPost("unknown"), undefined);
});

test("metadata is complete, dates are valid and not future, reading times match content", () => {
  const today = new Date().toISOString().slice(0, 10);
  for (const p of posts) {
    assert.ok(p.title && p.category && p.teaser && p.date);
    for (const date of [p.published, p.updated]) {
      assert.match(date, /^\d{4}-\d{2}-\d{2}$/);
      assert.equal(new Date(date).toISOString().slice(0, 10), date);
      assert.ok(date <= today);
    }
    assert.ok(p.updated >= p.published);
    assert.equal(p.minutes, Math.ceil(words(p) / 200));
    assert.equal(postUrl(p), `https://tibbe.app/blog/${p.slug}`);
  }
});

test("ChatGPT comparison uses current qualified wording and primary sources", () => {
  const p = getPost("chatgpt-vs-ai-medewerker");
  assert.match(JSON.stringify(p.body), /ChatGPT biedt ook geheugen, apps en geplande taken/);
  assert.equal(p.sources.length, 3);
  for (const source of p.sources) assert.equal(new URL(source.url).hostname, "help.openai.com");
  assert.doesNotMatch(JSON.stringify(p.body), /onthoudt niets|ten minuten af|alleen een chatvenster/);
});

test("blog routes have usable navigation, modified metadata, sources and safe JSON-LD", () => {
  const article = read("src/app/blog/[slug]/page.tsx");
  const index = read("src/app/blog/page.tsx");
  assert.match(article, /dateModified: post.updated/);
  assert.match(article, /post.sources/);
  assert.match(article, /replace\(/);
  for (const page of [article, index]) {
    assert.match(page, /className="tibbe-web blog-site"/);
    assert.match(page, /<Navigation anchorPrefix="\/"/);
  }
  assert.doesNotMatch(index, /export function BlogFooter/);
  assert.match(read("src/app/sitemap.ts"), /post.updated \?\? post.published/);
});

test("AI authorship label has a scoped high-contrast color", () => {
  assert.match(read("src/styles/blog.css"), /\.blog-site \.blog-note \.web-label\s*\{\s*color: var\(--color-lightwater\);\s*\}/);
});

test("fictitious cost example balances without claiming cash profit", () => {
  const p = getPost("wat-kost-ai-medewerker");
  assert.equal((20 - 5 - 2) * 60 - 300, 480);
  assert.equal(900 / 480, 1.875);
  assert.match(JSON.stringify(p.body), /Vrije tijd is niet automatisch extra omzet/);
});
