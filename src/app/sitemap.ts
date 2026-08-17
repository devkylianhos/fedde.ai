import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tibbe.nl",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://tibbe.nl/webshops",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { url: "https://tibbe.nl/privacy", changeFrequency: "yearly", priority: 0.3 },
    { url: "https://tibbe.nl/voorwaarden", changeFrequency: "yearly", priority: 0.3 },
    { url: "https://tibbe.nl/cookies", changeFrequency: "yearly", priority: 0.3 },
  ];
}
