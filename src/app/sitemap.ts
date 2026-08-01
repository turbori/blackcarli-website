import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url;
  const now = new Date();

  const citySlugs = [
    "manhattan",
    "brooklyn",
    "queens",
    "bronx",
    "staten-island",
    "garden-city",
    "great-neck",
    "melville",
    "huntington",
    "greenwich",
    "stamford",
    "jersey-city",
    "hoboken",
  ];

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/corporate`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/quote`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...citySlugs.map((slug) => ({
      url: `${baseUrl}/locations/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  ];
}
