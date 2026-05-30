import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WeHighTech — Excellence Technologique & IA",
  description: "WeHighTech développe des solutions technologiques d'excellence propulsées par l'intelligence artificielle. Fondé en 2017 à Paris.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${geist.variable} antialiased`}>
      <body className="bg-[#050508] text-[#EEEEF5]">{children}</body>
    </html>
  );
}
