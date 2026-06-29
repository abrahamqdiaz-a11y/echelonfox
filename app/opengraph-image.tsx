import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Echelon Fox — Performance Marketing for E-Commerce Brands";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const logoData = await fetch(
    new URL("../public/eflogo.logo.png", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const logoSrc = `data:image/png;base64,${Buffer.from(logoData).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#080808",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Orange glow top-right */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(255,85,0,0.22)",
            filter: "blur(80px)",
            display: "flex",
          }}
        />
        {/* Subtle bottom-left glow */}
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "rgba(255,85,0,0.10)",
            filter: "blur(60px)",
            display: "flex",
          }}
        />

        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          width={120}
          height={120}
          style={{ marginBottom: "28px", borderRadius: "16px" }}
          alt=""
        />

        {/* Brand name */}
        <div
          style={{
            color: "#FF5500",
            fontSize: "22px",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          Echelon Fox
        </div>

        {/* Headline */}
        <div
          style={{
            color: "#ffffff",
            fontSize: "52px",
            fontWeight: 800,
            lineHeight: 1.15,
            textAlign: "center",
            maxWidth: "820px",
            padding: "0 40px",
          }}
        >
          We Make Brands Impossible to Ignore.
        </div>

        {/* Divider */}
        <div
          style={{
            width: "60px",
            height: "3px",
            background: "#FF5500",
            marginTop: "32px",
            marginBottom: "24px",
            borderRadius: "2px",
            display: "flex",
          }}
        />

        {/* URL */}
        <div style={{ color: "#666666", fontSize: "20px", letterSpacing: "0.05em" }}>
          echelonfox.com
        </div>
      </div>
    ),
    { ...size }
  );
}
