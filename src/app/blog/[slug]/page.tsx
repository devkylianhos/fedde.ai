import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/website/Navigation";
import { getPost, postUrl, posts } from "@/content/blog";
import { waLink } from "@/lib/site";
import { BlogFooter } from "@/components/website/BlogFooter";
import "@/styles/blog.css";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = postUrl(post);
  return {
    title: `${post.title} — Tibbe Blog`,
    description: post.teaser,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.teaser,
      type: "article",
      url,
      publishedTime: post.published,
      modifiedTime: post.updated ?? post.published,
      authors: ["Tibbe.ai"],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const post = p;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.published,
    dateModified: post.updated ?? post.published,
    author: { "@type": "Organization", name: "Tibbe.ai" },
    publisher: { "@type": "Organization", name: "Tibbe.ai", url: "https://tibbe.app" },
    mainEntityOfPage: postUrl(post),
  };

  const other = posts.filter((o) => o.slug !== post.slug).slice(0, 2);

  return (
    <main className="tibbe-web blog-site">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Navigation anchorPrefix="/" />
      <article>
        <section className="web-section blog-hero" style={{ padding: "140px 0 24px" }}>
          <div className="web-container">
            <Link
              href="/blog"
              className="blog-back"
              style={{ fontSize: 14.5 }}
            >
              ← Terug naar blog
            </Link>
            <p className="web-label" style={{ marginTop: 20 }}>
              {post.category} ·{" "}
              <time dateTime={post.published}>{post.date}</time>
            </p>
            <h1 className="blog-h1" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
              {post.title}
            </h1>
            <p className="blog-hero-sub" style={{ fontSize: 14.5 }}>
              Door de Tibbe-agent · {post.minutes} min lezen
              {post.updated && (
                <> · Bijgewerkt <time dateTime={post.updated}>{new Intl.DateTimeFormat("nl-NL", { dateStyle: "long", timeZone: "UTC" }).format(new Date(post.updated))}</time></>
              )}
            </p>
          </div>
        </section>

        <section className="web-container">
          <div className="blog-article">
            {post.body.map((block, i) => {
              if (block.type === "h2")
                return <h2 key={i}>{block.text}</h2>;
              if (block.type === "ul")
                return (
                  <ul key={i}>
                    {block.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                );
              return <p key={i}>{block.text}</p>;
            })}
            {post.sources && (
              <aside aria-label="Bronnen" className="blog-sources">
                <h2>Bronnen</h2>
                <ul>
                  {post.sources.map((source) => (
                    <li key={source.url}><a href={source.url} rel="noopener noreferrer" target="_blank">{source.label}</a></li>
                  ))}
                </ul>
              </aside>
            )}
            <a
              href={waLink("Hoi, ik heb net je blog gelezen en wil graag kennismaken.")}
              target="_blank"
              rel="noopener"
              className="blog-cta"
              style={{
                background: "var(--color-ink)",
                color: "var(--color-paper)",
                padding: "14px 26px",
                borderRadius: 4,
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              Plan een kennismaking ↗
            </a>
          </div>
        </section>

        <section className="web-container blog-more">
          <p className="web-label">Verder lezen</p>
          <div className="blog-more__grid" style={{ marginTop: 16 }}>
            {other.map((o) => (
              <Link key={o.slug} href={`/blog/${o.slug}`} className="blog-card">
                <p className="web-label">{o.category}</p>
                <h3 className="blog-card-title" style={{ fontSize: 18 }}>
                  {o.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      </article>

      <BlogFooter />
    </main>
  );
}
