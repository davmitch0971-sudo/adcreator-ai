import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AIThumbnailGeneratorPage() {
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

  const inputStyle = {
    width: "100%",
    padding: 10,
    borderRadius: 8,
    border: theme === "dark" ? "1px solid #374151" : "1px solid #d1d5db",
    background: theme === "dark" ? "#020617" : "#ffffff",
    color: theme === "dark" ? "#e5e7eb" : "#111827",
    marginBottom: 12,
  };

  const thumbCard = {
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
        <h1 style={headingStyle}>AI Thumbnail Generator</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Generate high‑CTR thumbnails for YouTube, TikTok, and social media.
        </p>
      </section>

      {/* PROMPT INPUT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Thumbnail Prompt
        </h2>

        <div style={panelStyle(theme)}>
          <label>Video / Content Title</label>
          <input
            type="text"
            placeholder="How AdCreator‑AI Builds Your Campaigns in Minutes"
            style={inputStyle}
          />

          <label>Platform</label>
          <select style={inputStyle}>
            <option>YouTube</option>
            <option>TikTok</option>
            <option>Instagram Reels</option>
            <option>Facebook Video</option>
          </select>

          <label>Thumbnail Style</label>
          <select style={inputStyle}>
            <option>Bold & Colorful</option>
            <option>Clean & Minimal</option>
            <option>Cinematic</option>
            <option>High Contrast</option>
          </select>

          <label>Primary Text</label>
          <input
            type="text"
            placeholder="Build Ads in Minutes"
            style={inputStyle}
          />

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Generate Thumbnails
          </button>
        </div>
      </section>

      {/* GENERATED THUMBNAILS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Generated Thumbnails
        </h2>

        <div style={thumbCard}>
          <h3>Thumbnail Option 1</h3>
          <div
            style={{
              height: 160,
              background: theme === "dark" ? "#1f2937" : "#e5e7eb",
              borderRadius: 10,
              marginTop: 10,
            }}
          ></div>
          <button
            style={{ ...buttonStyle(theme), padding: "8px 14px", marginTop: 10 }}
          >
            Download Thumbnail
          </button>
        </div>

        <div style={thumbCard}>
          <h3>Thumbnail Option 2</h3>
          <div
            style={{
              height: 160,
              background: theme === "dark" ? "#1f2937" : "#e5e7eb",
              borderRadius: 10,
              marginTop: 10,
            }}
          ></div>
          <button
            style={{ ...buttonStyle(theme), padding: "8px 14px", marginTop: 10 }}
          >
            Download Thumbnail
          </button>
        </div>
      </section>

      {/* EXPORT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Export Options
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            Export thumbnails optimized for each platform.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Export All Thumbnails
          </button>
        </div>
      </section>
    </div>
  );
}
