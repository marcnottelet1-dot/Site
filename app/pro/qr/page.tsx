import QRCode from "qrcode";

const APP_URL = "https://archocktail.com/pro";

export default async function QRPage() {
  const svg = await QRCode.toString(APP_URL, {
    type: "svg",
    margin: 2,
    width: 280,
    color: {
      dark: "#c9a13a",
      light: "#0a0807",
    },
    errorCorrectionLevel: "H",
  });

  return (
    <div
      style={{
        minHeight: "100svh",
        background: "#0a0807",
        color: "#f5f0e8",
        fontFamily: "var(--font-inter), system-ui, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        gap: 0,
      }}
    >
      {/* Brand */}
      <p
        style={{
          fontSize: 11,
          letterSpacing: "0.2em",
          color: "#c9a13a",
          fontWeight: 600,
          textTransform: "uppercase",
          marginBottom: 8,
        }}
      >
        Arch&apos;Ocktail
      </p>

      <h1
        style={{
          fontSize: 22,
          fontWeight: 700,
          fontFamily: "var(--font-fraunces), Georgia, serif",
          marginBottom: 6,
          textAlign: "center",
        }}
      >
        Installer l&apos;application
      </h1>

      <p
        style={{
          fontSize: 13,
          color: "#7a6e64",
          marginBottom: 36,
          textAlign: "center",
          maxWidth: 280,
          lineHeight: 1.6,
        }}
      >
        Scannez ce QR code avec votre iPhone pour ouvrir l&apos;app, puis
        appuyez sur{" "}
        <span style={{ color: "#c9a13a" }}>
          Partager → Sur l&apos;écran d&apos;accueil
        </span>
      </p>

      {/* QR Code */}
      <div
        style={{
          background: "#0a0807",
          border: "1px solid rgba(201,161,58,0.25)",
          borderRadius: 24,
          padding: 20,
          boxShadow: "0 0 60px rgba(201,161,58,0.08)",
        }}
        dangerouslySetInnerHTML={{ __html: svg }}
      />

      {/* Steps */}
      <div
        style={{
          marginTop: 36,
          display: "flex",
          flexDirection: "column",
          gap: 12,
          width: "100%",
          maxWidth: 320,
        }}
      >
        {[
          { n: "1", text: "Ouvrez l'app Caméra de votre iPhone" },
          { n: "2", text: "Pointez sur le QR code ci-dessus" },
          { n: "3", text: "Appuyez sur le lien Safari qui apparaît" },
          { n: "4", text: "Partager → Sur l'écran d'accueil → Ajouter" },
        ].map(({ n, text }) => (
          <div key={n} style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                background: "rgba(201,161,58,0.1)",
                border: "1px solid rgba(201,161,58,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                fontSize: 11,
                fontWeight: 700,
                color: "#c9a13a",
              }}
            >
              {n}
            </div>
            <span style={{ fontSize: 13, color: "#c0b8ae", lineHeight: 1.5 }}>
              {text}
            </span>
          </div>
        ))}
      </div>

      {/* URL */}
      <p
        style={{
          marginTop: 32,
          fontSize: 12,
          color: "#42372e",
          letterSpacing: "0.04em",
        }}
      >
        {APP_URL}
      </p>
    </div>
  );
}
