import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 600,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background:
          "linear-gradient(180deg, #050814 0%, #050818 35%, #020410 100%)",
        color: "#F5F7FF",
        padding: "60px 70px",
        fontFamily: "Arial, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -100,
          right: -60,
          width: 360,
          height: 360,
          borderRadius: 9999,
          background:
            "radial-gradient(circle, rgba(76,194,255,0.4), transparent 65%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -120,
          left: -80,
          width: 400,
          height: 400,
          borderRadius: 9999,
          background:
            "radial-gradient(circle, rgba(155,93,255,0.28), transparent 65%)",
        }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div
          style={{
            width: 74,
            height: 74,
            borderRadius: 22,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              "linear-gradient(135deg, rgba(58,123,255,0.95), rgba(76,194,255,0.95), rgba(155,93,255,0.95))",
            color: "#020410",
            fontWeight: 800,
            fontSize: 32,
          }}
        >
          SD
        </div>
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#8FDBFF",
          }}
        >
          SavonDev Studio
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 18,
          maxWidth: 900,
        }}
      >
        <div
          style={{
            fontSize: 64,
            lineHeight: 1.02,
            fontWeight: 800,
            letterSpacing: "-0.04em",
          }}
        >
          Websites, automation, CRM and AI solutions
        </div>
        <div
          style={{
            fontSize: 28,
            lineHeight: 1.35,
            color: "rgba(245,247,255,0.82)",
          }}
        >
          Premium digital systems for Israeli businesses.
        </div>
      </div>

      <div style={{ fontSize: 22, color: "rgba(245,247,255,0.72)" }}>
        savondev.com
      </div>
    </div>,
    size,
  );
}
