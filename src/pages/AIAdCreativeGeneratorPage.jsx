import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AIAdCreativeGeneratorPage() {
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

  const creativeCard = {
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
        <h1 style={headingStyle}>AI Ad Creative Generator</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Generate full ad concepts, hooks, CTAs, and multi‑platform variations.
        </p>
      </section>

      {/* PROMPT INPUT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Creative Brief
        </h2>

        <div style={panelStyle(theme)}>
          <label>Product / Offer</label>
          <input
            type="text"
            placeholder="AI-powered marketing platform that builds campaigns automatically..."
            style={inputStyle}
          />

          <label>Target Audience</label>
          <input
            type="text"
            placeholder="Small business owners, creators, marketers..."
            style={inputStyle}
          />

          <label>Ad Goal</label>
          <select style={inputStyle}>
            <option>Drive Sales</option>
            <option>Generate Leads</option>
            <option>Build Awareness</option>
            <option>Promote Event</option>
          </select>

          <label>Ad Style</label>
          <select style={inputStyle}>
            <option>Bold & Energetic</option>
            <option>Clean & Minimal</option>
            <option>Cinematic</option>
            <option>High Contrast</option>
          </select>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Generate Ad Concepts
          </button>
        </div>
      </section>

      {/* GENERATED AD CONCEPTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Generated Ad Concepts
        </h2>

        <div style={creativeCard}>
          <h3>Concept 1 — “Build Ads in Minutes”</h3>
          <p style={{ opacity: 0.85 }}>
            Fast-paced visuals showing the product auto‑building campaigns.  
            Hook: “Stop wasting hours — build ads in minutes.”  
            CTA: “Start your free trial.”
          </p>
        </div>

        <div style={creativeCard}>
          <h3>Concept 2 — “Your AI Creative Partner”</h3>
          <p style={{ opacity: 0.85 }}>
            Calm, modern visuals showing AI assisting the user.  
            Hook: “Create stunning ads without lifting a finger.”  
            CTA: “Try AdCreator‑AI.”
          </p>
        </div>

        <div style={creativeCard}>
          <h3>Concept 3 — “From Idea to Ad Instantly”</h3>
          <p style={{ opacity: 0.85 }}>
            Idea → Script → Storyboard → Thumbnail → Final ad.  
            Hook: “Your entire creative pipeline — automated.”  
            CTA: “Build your next campaign.”
          </p>
        </div>
      </section>

      {/* PLATFORM VARIATIONS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Platform Variations
        </h2>

        <div style={panelStyle(theme)}>
          <ul style={{ lineHeight: 1.8 }}>
            <li>YouTube — 15s, 30s, 60s versions</li>
            <li>TikTok — fast-paced vertical edits</li>
            <li>Instagram Reels — bold text overlays</li>
            <li>Facebook — benefit-driven messaging</li>
          </ul>
        </div>
      </section>

      {/* EXPORT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Export Options
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            Export your ad concepts as a creative brief or send them to the storyboard generator.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Export Creative Brief
          </button>
        </div>
      </section>
    </div>
  );
}
