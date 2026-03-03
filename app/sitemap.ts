import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://jugleey.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/en`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${SITE_URL}/en`,
          fr: `${SITE_URL}/fr`,
        },
      },
    },
    {
      url: `${SITE_URL}/fr`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${SITE_URL}/en`,
          fr: `${SITE_URL}/fr`,
        },
      },
    },
  ];
}
