import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
export const alt =
  "EchelonFox — Find the revenue your business already earned and lost.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default async function OgImage() {
  const font = await readFile(
    join(process.cwd(), "app/_og/Manrope-Regular.ttf"),
  );
  const logo = await readFile(
    join(process.cwd(), "public/brand/echelonfox-white.svg"),
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
        color: "#FFFFFF",
        padding: "58px 70px",
        fontFamily: "Manrope",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={`data:image/svg+xml;base64,${logo.toString("base64")}`}
          width={229}
          height={40}
          alt="EchelonFox"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 64,
          lineHeight: 1.2,
          letterSpacing: -1.5,
        }}
      >
        <span>Find the revenue</span>
        <span>your business already</span>
        <span>earned and lost.</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #45505A",
          paddingTop: 22,
          fontSize: 16,
          color: "#BEC5CA",
        }}
      >
        <span>Revenue operations for established B2B companies</span>
        <span>echelonfox.com</span>
      </div>
    </div>,
    {
      ...size,
      fonts: [{ name: "Manrope", data: font, weight: 400, style: "normal" }],
    },
  );
}
