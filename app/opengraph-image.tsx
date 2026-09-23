import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "EchelonFox — Find what's holding growth back. Build what comes next.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generated once at build time. Fonts are bundled locally (SIL Open Font License).
export default async function OgImage() {
  const [serif, mono, fox] = await Promise.all([
    readFile(join(process.cwd(), "app/_og/Newsreader-Regular.ttf")),
    readFile(join(process.cwd(), "app/_og/IBMPlexMono-Regular.ttf")),
    readFile(join(process.cwd(), "public/images/fox-mark.png")),
  ]);
  const foxSrc = `data:image/png;base64,${fox.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F4F0E8",
          color: "#17181C",
          padding: "64px 72px",
          fontFamily: "Newsreader",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <img src={foxSrc} width={96} height={38} alt="" />
            <div style={{ fontSize: 36, display: "flex" }}>EchelonFox</div>
          </div>
          <div
            style={{
              fontFamily: "IBM Plex Mono",
              fontSize: 18,
              letterSpacing: 2.5,
              textTransform: "uppercase",
              color: "#5E5A53",
              display: "flex",
            }}
          >
            Commercial growth strategy &amp; implementation
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontSize: 84, lineHeight: 1.04, letterSpacing: -1.8 }}>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <span>Find what&apos;s&nbsp;</span>
            <span style={{ borderBottom: "5px solid #B0351E", paddingBottom: 2 }}>holding growth back</span>
            <span>.</span>
          </div>
          <div style={{ display: "flex", marginTop: 8 }}>Build what comes next.</div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #D8D0C2",
            paddingTop: 22,
            fontFamily: "IBM Plex Mono",
            fontSize: 18,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#5E5A53",
          }}
        >
          <span>Diagnose · Design · Build · Improve</span>
          <span>echelonfox.com</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Newsreader", data: serif, weight: 400, style: "normal" },
        { name: "IBM Plex Mono", data: mono, weight: 400, style: "normal" },
      ],
    }
  );
}
