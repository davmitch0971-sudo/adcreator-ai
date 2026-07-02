import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AIBrandStyleGeneratorPage() {
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

  const cardStyle = {
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
        <h1 style={headingStyle}>AI Brand Style Generator</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Generate complete brand identity systems — colors, fonts, tone, and visual direction.
        </p>
      </section>

      {/* BRAND INPUT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Brand Details
        </h2>

        <div style={panelStyle(theme)}>
          <label>Brand Name</label>
          <input
            type="text"
            placeholder="AdCreator‑AI"
            style={inputStyle}
          />

          <label>Brand Personality</label>
          <select style={inputStyle}>
            <option>Bold & Energetic</option>
            <option>Clean & Minimal</option>
            <option>Friendly & Approachable</option>
            <option>Premium & Elegant</option>
          </select>

          <label>Industry</label>
          <input
            type="text"
            placeholder="AI, Marketing, SaaS, Creative Tools..."
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
            Generate Brand Style
          </button>
        </div>
      </section>

      {/* GENERATED BRAND KIT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Brand Identity Kit
        </h2>

        {/* COLORS */}
        <div style={cardStyle}>
          <h3>Color Palette</h3>
          <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
            <div style={{ width: 60, height: 60, background: "#4f46e5", borderRadius: 8 }}></div>
            <div style={{ width: 60, height: 60, background: "#6366f1", borderRadius: 8 }}></div>
            <div style={{ width: 60, height: 60, background: "#a5b4fc", borderRadius: 8 }}></div>
            <div style={{ width: 60, height: 60, background: "#eef2ff", borderRadius: 8 }}></div>
          </div>
        </div>

        {/* TYPOGRAPHY */}
        <div style={cardStyle}>
          <h3>Typography</h3>
          <p style={{ opacity: 0.85 }}>
            Headings: Inter ExtraBold  
            Body: Inter Regular  
            Accent: Space Grotesk Medium
          </p>
        </div>

        {/* BRAND VOICE */}
        <div style={cardStyle}>
          <h3>Brand Voice & Tone</h3>
          <p style={{ opacity: 0.85 }}>
            Confident, modern, helpful, and energetic.  
            Messaging focuses on speed, clarity, and empowerment.
          </p>
        </div>

        {/* LOGO STYLE */}
        <div style={cardStyle}>
          <h3>Logo Style Suggestions</h3>
          <p style={{ opacity: 0.85 }}>
            Geometric shapes, bold sans-serif typography, subtle gradients, and clean iconography.
          </p>
        </div>
      </section>

      {/* EXPORT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Export Brand Kit
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            Export your brand identity kit for use in design tools and marketing assets.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Export Brand Kit
          </button>
        </div>
      </section>
    </div>
  );
}
