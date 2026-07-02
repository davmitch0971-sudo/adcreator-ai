import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AIVoiceoverGeneratorPage() {
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

  const audioCard = {
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
        <h1 style={headingStyle}>AI Voiceover Generator</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Generate natural‑sounding voiceovers for your video ads.
        </p>
      </section>

      {/* VOICEOVER PROMPT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Voiceover Script
        </h2>

        <div style={panelStyle(theme)}>
          <label>Script Text</label>
          <textarea
            placeholder="Write your voiceover script here..."
            style={{ ...inputStyle, height: 140 }}
          />

          <label>Voice Style</label>
          <select style={inputStyle}>
            <option>Warm & Friendly</option>
            <option>Professional</option>
            <option>Bold & Energetic</option>
            <option>Calm & Relaxed</option>
          </select>

          <label>Voice Gender</label>
          <select style={inputStyle}>
            <option>Female</option>
            <option>Male</option>
            <option>Neutral</option>
          </select>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Generate Voiceover
          </button>
        </div>
      </section>

      {/* GENERATED AUDIO */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Generated Voiceovers
        </h2>

        <div style={audioCard}>
          <h3>Voiceover Sample 1</h3>
          <p style={{ opacity: 0.85 }}>Warm & Friendly — Female</p>
          <div
            style={{
              height: 60,
              background: theme === "dark" ? "#1f2937" : "#e5e7eb",
              borderRadius: 10,
              marginTop: 10,
            }}
          ></div>
          <button style={{ ...buttonStyle(theme), padding: "8px 14px", marginTop: 10 }}>
            Download Audio
          </button>
        </div>

        <div style={audioCard}>
          <h3>Voiceover Sample 2</h3>
          <p style={{ opacity: 0.85 }}>Bold & Energetic — Male</p>
          <div
            style={{
              height: 60,
              background: theme === "dark" ? "#1f2937" : "#e5e7eb",
              borderRadius: 10,
              marginTop: 10,
            }}
          ></div>
          <button style={{ ...buttonStyle(theme), padding: "8px 14px", marginTop: 10 }}>
            Download Audio
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
            Export your generated voiceovers for use in video editing.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Export All Voiceovers
          </button>
        </div>
      </section>
    </div>
  );
}
