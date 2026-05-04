import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        background: "#0a0807",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 6,
      }}
    >
      <span
        style={{
          fontFamily: "serif",
          fontSize: 88,
          fontWeight: 900,
          color: "#c9a13a",
          lineHeight: 1,
        }}
      >
        A
      </span>
      <div
        style={{
          width: 36,
          height: 2.5,
          background: "#c9a13a",
          borderRadius: 2,
        }}
      />
    </div>
  );
}
