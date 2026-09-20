import { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

export const dynamic = "force-static";

const baseUrl = "https://wehightech.com";
const paths = ["", "/mentions-legales", "/confidentialite", "/cgv"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return paths.flatMap((path) =>
    locales.map((lang) => ({
      url: `${baseUrl}/${lang}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.3,
      alternates: {
        languages: {
          ...Object.fromEntries(locales.map((l) => [l, `${baseUrl}/${l}${path}`])),
          "x-default": `${baseUrl}/fr${path}`,
        },
      },
    }))
  );
}
