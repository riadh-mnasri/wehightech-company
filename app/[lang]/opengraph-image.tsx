import { ImageResponse } from "next/og";
import { isLang, type Lang } from "@/lib/i18n";

export const alt = "WeHighTech";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const copy: Record<Lang, { title: string; subtitle: string }> = {
  fr: {
    title: "Excellence Technologique & IA",
    subtitle: "Développement logiciel, transformation digitale, data & cybersécurité.",
  },
  en: {
    title: "Technology Excellence & AI",
    subtitle: "Software development, digital transformation, data & cybersecurity.",
  },
};

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang: Lang = isLang(rawLang) ? rawLang : "fr";
  const { title, subtitle } = copy[lang];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          background: "#050508",
          backgroundImage:
            "radial-gradient(circle at 78% 22%, rgba(190,255,71,0.22) 0%, rgba(190,255,71,0) 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 40,
          }}
        >
          <div style={{ width: 28, height: 3, background: "#BEFF47", display: "flex" }} />
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#BEFF47",
              display: "flex",
            }}
          >
            WeHighTech
          </div>
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            lineHeight: 1.08,
            letterSpacing: -2,
            color: "#EEEEF5",
            display: "flex",
            maxWidth: 950,
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 28,
            fontWeight: 300,
            color: "#8A8AA0",
            display: "flex",
            maxWidth: 820,
          }}
        >
          {subtitle}
        </div>
      </div>
    ),
    { ...size }
  );
}
