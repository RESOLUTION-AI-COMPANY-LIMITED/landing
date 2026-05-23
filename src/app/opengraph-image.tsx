import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "R.AI — Data & AI First Company";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            marginBottom: "32px",
          }}
        >
          <span style={{ fontSize: "72px", fontWeight: 700, color: "#ffffff" }}>R</span>
          <span style={{ fontSize: "72px", fontWeight: 700, color: "#a78bfa" }}>.</span>
          <span style={{ fontSize: "72px", fontWeight: 700, color: "#ffffff" }}>AI</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "28px",
            color: "#a78bfa",
            fontWeight: 500,
            marginBottom: "24px",
            letterSpacing: "2px",
          }}
        >
          DATA & AI FIRST
        </div>

        {/* Main text */}
        <div
          style={{
            fontSize: "42px",
            fontWeight: 700,
            color: "#ffffff",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.3,
          }}
        >
          Giúp doanh nghiệp nằm trong 2% tạo ra giá trị thực từ AI
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: "18px",
            color: "#64748b",
          }}
        >
          resolutionai.vn
        </div>
      </div>
    ),
    { ...size }
  );
}
