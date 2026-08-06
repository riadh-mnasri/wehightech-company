import { ImageResponse } from "next/og";

export const alt = "WeHighTech : Excellence Technologique & IA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          Excellence Technologique &amp; IA
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
          Développement logiciel, transformation digitale, data &amp; cybersécurité.
        </div>
      </div>
    ),
    { ...size }
  );
}
