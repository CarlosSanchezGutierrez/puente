import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Puente Impacto";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background:
            "radial-gradient(circle at top left, rgba(215,231,246,0.38), transparent 34%), linear-gradient(135deg, #f7f4ed 0%, #f3efe6 100%)",
          color: "#10233f",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: 72,
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              gap: 18,
            }}
          >
            <div
              style={{
                alignItems: "center",
                background: "#10233f",
                borderRadius: 999,
                color: "white",
                display: "flex",
                fontSize: 34,
                fontWeight: 700,
                height: 72,
                justifyContent: "center",
                width: 72,
              }}
            >
              P
            </div>
            <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: 7 }}>
              PUENTE IMPACTO
            </div>
          </div>

          <div
            style={{
              border: "1px solid rgba(16,35,63,0.18)",
              borderRadius: 999,
              fontSize: 23,
              padding: "14px 24px",
            }}
          >
            puenteimpacto.org
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 82,
              fontWeight: 800,
              letterSpacing: -4,
              lineHeight: 0.95,
              maxWidth: 1000,
            }}
          >
            Conocimiento, comunidad y accion social.
          </div>

          <div
            style={{
              color: "#425875",
              fontSize: 32,
              lineHeight: 1.35,
              maxWidth: 940,
            }}
          >
            Biblioteca comunitaria, voluntariado, recursos abiertos y software para organizaciones sociales.
          </div>
        </div>

        <div
          style={{
            color: "#60738c",
            display: "flex",
            fontSize: 24,
            gap: 28,
          }}
        >
          <span>Biblioteca</span>
          <span>Voluntariado</span>
          <span>ONG</span>
          <span>Recursos</span>
        </div>
      </div>
    ),
    size,
  );
}