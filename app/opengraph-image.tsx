import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Echelon Fox — World-Class Digital Marketing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#080808",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse at 80% 20%, rgba(255,85,0,0.18) 0%, transparent 60%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#FF5500",
            }}
          />
          <span style={{ color: "#FF5500", fontSize: "18px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Echelon Fox
          </span>
        </div>
        <div style={{ color: "#ffffff", fontSize: "64px", fontWeight: 800, lineHeight: 1.1, maxWidth: "900px" }}>
          We Make Brands Impossible to Ignore.
        </div>
        <div style={{ color: "#888888", fontSize: "24px", marginTop: "24px" }}>
          echelonfox.com
        </div>
      </div>
    ),
    { ...size }
  );
}
