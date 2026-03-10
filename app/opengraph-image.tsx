import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, #050814 0%, #050818 35%, #020410 100%)",
        color: "#F5F7FF",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -80,
          width: 420,
          height: 420,
          borderRadius: 9999,
          background:
            "radial-gradient(circle, rgba(76,194,255,0.45), transparent 65%)",
          filter: "blur(16px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -140,
          left: -100,
          width: 460,
          height: 460,
          borderRadius: 9999,
          background:
            "radial-gradient(circle, rgba(58,123,255,0.35), transparent 65%)",
          filter: "blur(20px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.12,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          padding: "70px 76px",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div
            style={{
              width: 78,
              height: 78,
              borderRadius: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "linear-gradient(135deg, rgba(58,123,255,0.95), rgba(76,194,255,0.95), rgba(155,93,255,0.95))",
              boxShadow: "0 0 40px rgba(76,194,255,0.35)",
              color: "#020410",
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            SD
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: 20,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#8FDBFF",
              }}
            >
              SavonDev Studio
            </div>
            <div
              style={{
                fontSize: 18,
                color: "rgba(245,247,255,0.72)",
                marginTop: 8,
              }}
            >
              Websites • Automation • CRM • AI
            </div>
          </div>
        </div>

        <div
          style={{
            maxWidth: 880,
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div
            style={{
              fontSize: 68,
              lineHeight: 1.02,
              fontWeight: 800,
              letterSpacing: "-0.04em",
            }}
          >
            Premium websites and automation for modern businesses in Israel
          </div>

          <div
            style={{
              fontSize: 28,
              lineHeight: 1.35,
              color: "rgba(245,247,255,0.82)",
              maxWidth: 860,
            }}
          >
            High-converting websites, WhatsApp flows, CRM integrations, and
            AI-driven systems.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            color: "rgba(245,247,255,0.72)",
            fontSize: 22,
          }}
        >
          <div>savondev.com</div>
          <div style={{ opacity: 0.45 }}>•</div>
          <div>EN / RU / HE</div>
        </div>
      </div>
    </div>,
    size,
  );
}
