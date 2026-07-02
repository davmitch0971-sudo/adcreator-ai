import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AIAdVariationsEnginePage() {
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
        <h1 style={headingStyle}>AI Ad Variations Engine</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Generate 20–50 ad variations instantly: hooks, angles, CTAs, formats, and creative directions.
        </p>
      </section>

      {/* INPUTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Variation Inputs
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

          <label>Desired Style</label>
          <select style={inputStyle}>
            <option>Direct Response</option>
            <option>UGC</option>
            <option>Founder POV</option>
            <option>Story‑Driven</option>
            <option>Problem → Solution</option>
          </select>

          <label>Number of Variations</label>
          <select style={inputStyle}>
            <option>20 Variations</option>
            <option>30 Variations</option>
            <option>40 Variations</option>
            <option>50 Variations</option>
          </select>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Generate Ad Variations
          </button>
        </div>
      </section>

      {/* HOOKS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Hooks
        </h2>

        <div style={cardStyle}>
          <h3>Hook Variations</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>“Stop wasting hours creating ads.”</li>
            <li>“This tool replaced my entire creative team.”</li>
            <li>“Creators… you’re gonna love this.”</li>
            <li>“I built a full campaign in 3 minutes.”</li>
          </ul>
        </div>
      </section>

      {/* ANGLES */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Angles
        </h2>

        <div style={cardStyle}>
          <h3>Angle Variations</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Speed angle — “Create campaigns instantly.”</li>
            <li>Cost angle — “Save thousands on agency fees.”</li>
            <li>Quality angle — “Consistent high‑performing ads.”</li>
            <li>Creator empowerment — “You don’t need a team.”</li>
          </ul>
        </div>
      </section>

      {/* CTA VARIATIONS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          CTA Variations
        </h2>

        <div style={cardStyle}>
          <h3>CTA Options</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>“Start creating smarter today.”</li>
            <li>“Try AdCreator‑AI now.”</li>
            <li>“Launch your next campaign in minutes.”</li>
            <li>“Stop scrolling — start creating.”</li>
          </ul>
        </div>
      </section>

      {/* EXPORT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Export Variations
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            Export all variations or send them to the AI Ad Creative Generator.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            Export All Variations
          </button>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Send to AI Ad Creative Generator
          </button>
        </div>
      </section>
    </div>
  );
}
