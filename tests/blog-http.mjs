import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import ts from "typescript";

const base = process.env.BLOG_TEST_BASE ?? "http://127.0.0.1:3197";
const source = readFileSync(new URL("../src/content/blog.ts", import.meta.url), "utf8");
const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
const { posts } = await import(`data:text/javascript;base64,${Buffer.from(code).toString("base64")}`);
const sitemap = await fetch(`${base}/sitemap.xml`);
assert.equal(sitemap.status, 200);
const xml = await sitemap.text();
const results = [];
for (const post of posts) {
  const url = `${base}/blog/${post.slug}`;
  const response = await fetch(url);
  assert.equal(response.status, 200, url);
  const html = await response.text();
  const json = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)?.[1];
  assert.ok(json, `JSON-LD ${post.slug}`);
  const ld = JSON.parse(json);
  assert.equal(ld.headline, post.title);
  assert.equal(ld.datePublished, post.published);
  assert.equal(ld.dateModified, post.updated);
  assert.equal(ld.mainEntityOfPage, `https://tibbe.app/blog/${post.slug}`);
  assert.ok(html.includes(`<link rel="canonical" href="https://tibbe.app/blog/${post.slug}"`));
  assert.ok(html.includes('name="description"'));
  assert.equal((html.match(/<h1[ >]/g) ?? []).length, 1);
  assert.equal((html.match(/<h2[ >]/g) ?? []).length, post.body.filter((b) => b.type === "h2").length + (post.sources ? 1 : 0));
  for (const block of post.body) {
    for (const text of block.type === "ul" ? block.items : [block.text]) {
      const escaped = text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#x27;');
      assert.ok(html.includes(escaped), `missing rendered body in ${post.slug}: ${text.slice(0, 40)}`);
    }
  }
  assert.ok(html.includes('class="blog-cta"'));
  assert.ok(html.includes('href="/#contact"'));
  const entry = xml.split('<url>').find((entry) => entry.includes(`<loc>https://tibbe.app/blog/${post.slug}</loc>`));
  assert.ok(entry?.includes(`${post.updated}T`), `sitemap ${post.slug}`);
  results.push({ slug: post.slug, status: response.status, blocks: post.body.length, canonical: true, jsonLd: true, sitemap: true });
}
for (const path of ['/', '/blog']) assert.equal((await fetch(base + path)).status, 200, path);
assert.equal((await fetch(base + '/blog/not-a-real-post')).status, 404);
console.log(JSON.stringify({ results, total: results.length, homepage: 200, index: 200, unknownSlug: 404 }, null, 2));
