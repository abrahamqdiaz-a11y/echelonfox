import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
export const alt =
  "EchelonFox — Find what’s holding your business back. Build what moves it forward.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default async function OgImage() {
  const font = await readFile(
    join(process.cwd(), "app/_og/Manrope-Medium.ttf"),
  );
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#101C2B",
        color: "#F7F5F0",
        padding: "58px 70px",
        fontFamily: "Manrope",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 27,
        }}
      >
        <span>EchelonFox</span>
        <span style={{ fontSize: 15, color: "#BEC5CA" }}>
          Growth Strategy &amp; Business Systems
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 63,
          lineHeight: 1.16,
          letterSpacing: -2,
        }}
      >
        <span>Find what’s holding</span>
        <span>your business back.</span>
        <span style={{ color: "#C99979", marginTop: 15 }}>
          Build what moves it forward.
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #45505A",
          paddingTop: 22,
          fontSize: 17,
          color: "#BEC5CA",
        }}
      >
        <span>Diagnose / Design / Build / Improve</span>
        <span>echelonfox.com</span>
      </div>
    </div>,
    {
      ...size,
      fonts: [{ name: "Manrope", data: font, weight: 500, style: "normal" }],
    },
  );
}
