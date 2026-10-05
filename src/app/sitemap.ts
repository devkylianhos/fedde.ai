import type { MetadataRoute } from "next";
import { posts, blogUrl, postUrl } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tibbe.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: blogUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: postUrl(post),
      lastModified: new Date(post.updated ?? post.published),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: "https://tibbe.app/webshops",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { url: "https://tibbe.app/privacy", changeFrequency: "yearly", priority: 0.3 },
    { url: "https://tibbe.app/voorwaarden", changeFrequency: "yearly", priority: 0.3 },
    { url: "https://tibbe.app/cookies", changeFrequency: "yearly", priority: 0.3 },
  ];
}
