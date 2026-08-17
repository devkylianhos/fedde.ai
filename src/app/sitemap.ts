import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://fedde.ai",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://fedde.ai/webshops",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { url: "https://fedde.ai/privacy", changeFrequency: "yearly", priority: 0.3 },
    { url: "https://fedde.ai/voorwaarden", changeFrequency: "yearly", priority: 0.3 },
    { url: "https://fedde.ai/cookies", changeFrequency: "yearly", priority: 0.3 },
  ];
}
