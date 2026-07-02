import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AIScriptGeneratorPage() {
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

  const scriptCard = {
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
        <h1 style={headingStyle}>AI Script Generator</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Generate video scripts, ad copy, hooks, and scene breakdowns with AI.
        </p>
      </section>

      {/* PROMPT INPUT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Script Prompt
        </h2>

        <div style={panelStyle(theme)}>
          <label>Project / Campaign</label>
          <input
            type="text"
            placeholder="Summer launch campaign for new product..."
            style={inputStyle}
          />

          <label>Tone</label>
          <select style={inputStyle}>
            <option>Friendly</option>
            <option>Professional</option>
            <option>Bold</option>
            <option>Playful</option>
          </select>

          <label>Goal</label>
          <select style={inputStyle}>
            <option>Drive sales</option>
            <option>Build awareness</option>
            <option>Educate audience</option>
            <option>Promote event</option>
          </select>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Generate Script
          </button>
        </div>
      </section>

      {/* GENERATED SCRIPTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Generated Scripts
        </h2>

        <div style={scriptCard}>
          <h3>Hook + Intro</h3>
          <p style={{ opacity: 0.85 }}>
            "Stop scrolling—this might be the most important upgrade your brand makes this year..."
          </p>
        </div>

        <div style={scriptCard}>
          <h3>Main Story</h3>
          <p style={{ opacity: 0.85 }}>
            Walk through the problem, introduce the product, and show how it transforms the viewer’s day.
          </p>
        </div>

        <div style={scriptCard}>
          <h3>Call to Action</h3>
          <p style={{ opacity: 0.85 }}>
            "Tap the link, start your free trial, and let AdCreator‑AI build your next campaign in minutes."
          </p>
        </div>
      </section>

      {/* SCENE BREAKDOWN */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Scene Breakdown
        </h2>

        <div style={panelStyle(theme)}>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Scene 1 — Hook shot with bold overlay text.</li>
            <li>Scene 2 — Product close‑ups with benefits on screen.</li>
            <li>Scene 3 — Social proof and testimonials.</li>
            <li>Scene 4 — Strong CTA with logo and URL.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
