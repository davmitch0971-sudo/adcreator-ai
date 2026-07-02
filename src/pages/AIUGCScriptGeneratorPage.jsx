import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AIUGCScriptGeneratorPage() {
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
        <h1 style={headingStyle}>AI UGC Script Generator</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Generate TikTok, Reels, and Shorts‑style creator scripts with hooks, scenes, and CTAs.
        </p>
      </section>

      {/* INPUTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Script Inputs
        </h2>

        <div style={panelStyle(theme)}>
          <label>Product / Offer</label>
          <input
            type="text"
            placeholder="AdCreator‑AI — full AI creative suite..."
            style={inputStyle}
          />

          <label>Audience</label>
          <input
            type="text"
            placeholder="Creators, marketers, agencies..."
            style={inputStyle}
          />

          <label>Desired Tone</label>
          <select style={inputStyle}>
            <option>Authentic</option>
            <option>Funny</option>
            <option>High‑energy</option>
            <option>Serious / Professional</option>
          </select>

          <label>Video Length</label>
          <select style={inputStyle}>
            <option>15 seconds</option>
            <option>30 seconds</option>
            <option>45 seconds</option>
          </select>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Generate UGC Script
          </button>
        </div>
      </section>

      {/* HOOKS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Hooks
        </h2>

        <div style={cardStyle}>
          <h3>Top Hooks</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>“You’re not gonna believe this…”</li>
            <li>“This changed my workflow forever.”</li>
            <li>“If you create content, you need this.”</li>
            <li>“I wish I knew this sooner.”</li>
          </ul>
        </div>
      </section>

      {/* SCRIPT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          UGC Script
        </h2>

        <div style={cardStyle}>
          <h3>Scene Breakdown</h3>
          <p style={{ opacity: 0.85 }}>
            Creator introduces the problem, shows the product, demonstrates results, and ends with a CTA.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Full Script</h3>
          <p style={{ opacity: 0.85 }}>
            “Okay, creators — if you’re tired of spending hours making ads, watch this. I just used AdCreator‑AI and it literally built my entire campaign in minutes…”
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          CTA Options
        </h2>

        <div style={cardStyle}>
          <ul style={{ lineHeight: 1.8 }}>
            <li>“Try it today — you’ll thank me later.”</li>
            <li>“Link in bio — go create smarter.”</li>
            <li>“Stop scrolling and start creating.”</li>
          </ul>
        </div>
      </section>

      {/* EXPORT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Export Script
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            Export your UGC script or send it to the Video Ad Generator.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            Export UGC Script
          </button>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Send to AI Video Ad Generator
          </button>
        </div>
      </section>
    </div>
  );
}
