import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AIVideoAdGeneratorPage() {
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
        <h1 style={headingStyle}>AI Video Ad Generator</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Full video ad production pipeline — script, scenes, shots, voiceover, visuals, thumbnail, and export.
        </p>
      </section>

      {/* INPUTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Video Ad Inputs
        </h2>

        <div style={panelStyle(theme)}>
          <label>Product / Offer</label>
          <input
            type="text"
            placeholder="AdCreator‑AI — full AI creative suite..."
            style={inputStyle}
          />

          <label>Target Audience</label>
          <input
            type="text"
            placeholder="Creators, marketers, agencies..."
            style={inputStyle}
          />

          <label>Primary Goal</label>
          <select style={inputStyle}>
            <option>Sales</option>
            <option>Leads</option>
            <option>Awareness</option>
            <option>Traffic</option>
          </select>

          <label>Video Length</label>
          <select style={inputStyle}>
            <option>15 seconds</option>
            <option>30 seconds</option>
            <option>45 seconds</option>
            <option>60 seconds</option>
          </select>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Generate Video Ad Pipeline
          </button>
        </div>
      </section>

      {/* SCRIPT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Script
        </h2>

        <div style={cardStyle}>
          <h3>Generated Script</h3>
          <p style={{ opacity: 0.85 }}>
            “Stop wasting hours creating ads. With AdCreator‑AI, you build full campaigns in minutes — scripts, storyboards, thumbnails, and more.”
          </p>
        </div>
      </section>

      {/* SCENE BREAKDOWN */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Scene Breakdown
        </h2>

        <div style={cardStyle}>
          <h3>Scene 1 — Problem</h3>
          <p style={{ opacity: 0.85 }}>
            Creator struggling with complex tools and slow workflows.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Scene 2 — Solution</h3>
          <p style={{ opacity: 0.85 }}>
            AdCreator‑AI instantly generates scripts, visuals, and full campaigns.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Scene 3 — Proof</h3>
          <p style={{ opacity: 0.85 }}>
            Show real examples of ads created in seconds.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Scene 4 — CTA</h3>
          <p style={{ opacity: 0.85 }}>
            “Start creating smarter today.”
          </p>
        </div>
      </section>

      {/* SHOT LIST */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Shot List
        </h2>

        <div style={cardStyle}>
          <h3>Shot 1 — Close-up</h3>
          <p style={{ opacity: 0.85 }}>
            Frustrated creator at desk with multiple tools open.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Shot 2 — Screen Capture</h3>
          <p style={{ opacity: 0.85 }}>
            AdCreator‑AI generating a full campaign instantly.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Shot 3 — Montage</h3>
          <p style={{ opacity: 0.85 }}>
            Multiple ads created by the platform.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Shot 4 — CTA</h3>
          <p style={{ opacity: 0.85 }}>
            Bold text overlay: “Create smarter. Create faster.”
          </p>
        </div>
      </section>

      {/* VOICEOVER */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Voiceover
        </h2>

        <div style={cardStyle}>
          <h3>Generated Voiceover Script</h3>
          <p style={{ opacity: 0.85 }}>
            “Introducing AdCreator‑AI — the fastest way to build high-performing ads. No stress. No complexity. Just results.”
          </p>
        </div>
      </section>

      {/* VISUALS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Visuals
        </h2>

        <div style={cardStyle}>
          <h3>Generated Visual Concepts</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Clean UI screens</li>
            <li>Creator workspace shots</li>
            <li>Bold typography overlays</li>
            <li>Fast-paced transitions</li>
          </ul>
        </div>
      </section>

      {/* THUMBNAIL */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Thumbnail
        </h2>

        <div style={cardStyle}>
          <h3>Generated Thumbnail Concept</h3>
          <p style={{ opacity: 0.85 }}>
            Bold text: “Create Ads in Minutes” with a creator reacting excitedly.
          </p>
        </div>
      </section>

      {/* EXPORT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Export & Send to Editor
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            Export your full video ad pipeline or send it directly to the AI Video Editor.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            Export Video Ad Plan
          </button>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Send to AI Video Editor
          </button>
        </div>
      </section>
    </div>
  );
}
