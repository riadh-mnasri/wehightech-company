import type { Metadata } from "next";
import { locales, type Lang } from "@/lib/i18n";

export const baseUrl = "https://wehightech.com";

export function legalMetadata(lang: Lang, path: string, title: string, description: string): Metadata {
  const url = `${baseUrl}/${lang}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, `${baseUrl}/${l}${path}`])),
        "x-default": `${baseUrl}/fr${path}`,
      },
    },
    openGraph: { url, title, description, siteName: "WeHighTech" },
    robots: { index: true, follow: true },
  };
}
