import { useTheme } from "../context/ThemeContext";
import { buttonStyle, panelStyle } from "../styles/GlobalStyles";

export default function AssetLibraryPage() {
  const { theme } = useTheme();

  const sectionStyle = {
    marginBottom: 40,
    padding: 20,
    borderRadius: 12,
    background: theme === "dark" ? "#0b0d14" : "#ffffff",
    boxShadow:
      theme === "dark"
        ? "0 0 0 1px rgba(255,255,255,0.05)"
        : "0 0 0 1px rgba(0,0,0,0.08)",
  };

  const headingStyle = {
    fontSize: 32,
    fontWeight: 800,
    marginBottom: 12,
  };

  const assetCard = {
    padding: 16,
    borderRadius: 10,
    background: theme === "dark" ? "#111827" : "#f3f4f6",
    border: theme === "dark" ? "1px solid #1f2937" : "1px solid #e5e7eb",
    marginBottom: 16,
  };

  return (
    <div style={{ padding: 20 }}>
      {/* HEADER */}
      <section style={sectionStyle}>
        <h1 style={headingStyle}>Asset Library</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Upload and manage all your brand assets used by AdCreator‑AI.
        </p>

        <button
          style={{
            ...buttonStyle(theme),
            padding: "12px 20px",
            fontSize: 16,
            marginTop: 20,
          }}
        >
          + Upload New Asset
        </button>
      </section>

      {/* LOGOS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Logos
        </h2>

        <div style={assetCard}>
          <h3>Main Logo</h3>
          <p style={{ opacity: 0.85, marginBottom: 10 }}>
            PNG, SVG, or transparent background recommended.
          </p>
          <button style={{ ...buttonStyle(theme), padding: "8px 14px" }}>
            Upload Logo
          </button>
        </div>
      </section>

      {/* PRODUCT PHOTOS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Product Photos
        </h2>

        <div style={assetCard}>
          <h3>Upload Product Images</h3>
          <p style={{ opacity: 0.85, marginBottom: 10 }}>
            High‑quality product photos improve AI ad output.
          </p>
          <button style={{ ...buttonStyle(theme), padding: "8px 14px" }}>
            Upload Images
          </button>
        </div>
      </section>

      {/* VIDEO FOOTAGE */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Raw Video Footage
        </h2>

        <div style={assetCard}>
          <h3>Upload Video Clips</h3>
          <p style={{ opacity: 0.85, marginBottom: 10 }}>
            MP4, MOV, and WebM supported.
          </p>
          <button style={{ ...buttonStyle(theme), padding: "8px 14px" }}>
            Upload Videos
          </button>
        </div>
      </section>

      {/* AUDIO */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Audio & Voiceovers
        </h2>

        <div style={assetCard}>
          <h3>Upload Audio Files</h3>
          <p style={{ opacity: 0.85, marginBottom: 10 }}>
            MP3, WAV, and voiceover recordings.
          </p>
          <button style={{ ...buttonStyle(theme), padding: "8px 14px" }}>
            Upload Audio
          </button>
        </div>
      </section>

      {/* STOCK MEDIA */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Stock Media
        </h2>

        <div style={assetCard}>
          <h3>Upload Stock Assets</h3>
          <p style={{ opacity: 0.85, marginBottom: 10 }}>
            Add stock photos, videos, or graphics for AI use.
          </p>
          <button style={{ ...buttonStyle(theme), padding: "8px 14px" }}>
            Upload Stock Media
          </button>
        </div>
      </section>
    </div>
  );
}
