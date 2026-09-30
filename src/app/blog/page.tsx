import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/website/Navigation";
import { BlogFooter } from "@/components/website/BlogFooter";
import { posts, blogMetadata } from "@/content/blog";
import "@/styles/blog.css";

export const metadata: Metadata = {
  ...blogMetadata(),
  title: "Blog — Tibbe | Praktische kennis over AI-medewerkers",
};

export default function BlogIndex() {
  return (
    <main className="tibbe-web blog-site">
      <Navigation anchorPrefix="/" />
      <section className="web-section blog-hero">
        <div className="web-container">
          <p className="web-label">Tibbe Blog</p>
          <h1 className="blog-h1">
            Praktische kennis <span className="blog-dim">.</span>
            <br />
            Geen verkooppraat <span className="blog-dim">.</span>
          </h1>
          <p className="blog-hero-sub">
            Hoe AI-medewerkers écht werken, wat ze opleveren en waar je op moet
            letten. Geschreven met AI. Concrete uitleg, met voorbeelden als voorbeeld.
          </p>
        </div>
      </section>

      <section className="web-container blog-posts">
        {posts.map((post, i) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
            <p className="web-label">
              {String(i + 1).padStart(2, "0")} / {post.category}
            </p>
            <h2 className="blog-card-title">{post.title}</h2>
            <p>{post.teaser}</p>
            <div className="blog-card__meta">
              <span>
                Door de Tibbe-agent ·{" "}
                <time dateTime={post.published}>{post.date}</time>
              </span>
              <span className="web-label blog-card-min">{post.minutes} min</span>
            </div>
          </Link>
        ))}
      </section>

      <section className="blog-note">
        <div className="web-container">
          <p className="web-label">Deze blogs schrijft de Tibbe-agent zelf</p>
          <p>
            Elke blog is een voorbeeld van het werk: geschreven in de stijl van
            het merk, met aandacht voor bronnen, grenzen en controle.
            Voorbeelden zijn illustratief, geen klantresultaten.
          </p>
        </div>
      </section>

      <BlogFooter />
    </main>
  );
}
