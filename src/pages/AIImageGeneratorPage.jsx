import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AIImageGeneratorPage() {
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

  const imageCard = {
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
        <h1 style={headingStyle}>AI Image Generator</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Generate product photos, ad creatives, and concept art using AI.
        </p>
      </section>

      {/* PROMPT INPUT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Image Prompt
        </h2>

        <div style={panelStyle(theme)}>
          <label>Describe the Image</label>
          <textarea
            placeholder="A modern product photo with dramatic lighting and bold colors..."
            style={{ ...inputStyle, height: 140 }}
          />

          <label>Style</label>
          <select style={inputStyle}>
            <option>Photorealistic</option>
            <option>3D Render</option>
            <option>Minimalist</option>
            <option>Bold & Colorful</option>
            <option>Cinematic</option>
          </select>

          <label>Aspect Ratio</label>
          <select style={inputStyle}>
            <option>1:1 (Square)</option>
            <option>16:9 (Wide)</option>
            <option>9:16 (Vertical)</option>
            <option>4:5 (Portrait)</option>
          </select>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Generate Image
          </button>
        </div>
      </section>

      {/* GENERATED IMAGES */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Generated Images
        </h2>

        <div style={imageCard}>
          <h3>Image Sample 1</h3>
          <div
            style={{
              height: 180,
              background: theme === "dark" ? "#1f2937" : "#e5e7eb",
              borderRadius: 10,
              marginTop: 10,
            }}
          ></div>
          <button style={{ ...buttonStyle(theme), padding: "8px 14px", marginTop: 10 }}>
            Download Image
          </button>
        </div>

        <div style={imageCard}>
          <h3>Image Sample 2</h3>
          <div
            style={{
              height: 180,
              background: theme === "dark" ? "#1f2937" : "#e5e7eb",
              borderRadius: 10,
              marginTop: 10,
            }}
          ></div>
          <button style={{ ...buttonStyle(theme), padding: "8px 14px", marginTop: 10 }}>
            Download Image
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
            Export your generated images for use in ads, thumbnails, or social posts.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Export All Images
          </button>
        </div>
      </section>
    </div>
  );
}
