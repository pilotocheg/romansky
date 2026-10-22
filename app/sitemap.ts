import type { MetadataRoute } from "next";
import { SUB_PAGES } from "@/lib/pages";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...SUB_PAGES.map((page) => ({
      url: `${SITE_URL}${page.path}`,
      lastModified: new Date(page.updated),
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
