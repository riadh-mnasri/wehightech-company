import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

const baseUrl = "https://wehightech.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "WeHighTech — Excellence Technologique & IA",
  description: "WeHighTech développe des solutions technologiques d'excellence propulsées par l'intelligence artificielle. Fondé en 2017 à Paris.",
  openGraph: {
    type: "website",
    url: baseUrl,
    siteName: "WeHighTech",
    title: "WeHighTech — Excellence Technologique & IA",
    description: "Solutions technologiques d'excellence propulsées par l'IA. Développement logiciel, transformation digitale, data & cybersécurité.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "WeHighTech" }],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "WeHighTech — Excellence Technologique & IA",
    description: "Solutions technologiques d'excellence propulsées par l'IA.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: baseUrl },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${geist.variable} antialiased`}>
      <body className="bg-[#050508] text-[#EEEEF5]">{children}<Analytics /></body>
    </html>
  );
}
