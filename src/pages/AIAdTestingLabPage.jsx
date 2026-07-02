import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AIAdTestingLabPage() {
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
        <h1 style={headingStyle}>AI Ad Testing Lab</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Simulate ad performance before launch: hooks, angles, thumbnails, and predicted CTR.
        </p>
      </section>

      {/* INPUTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Ad Inputs
        </h2>

        <div style={panelStyle(theme)}>
          <label>Ad Platform</label>
          <select style={inputStyle}>
            <option>Facebook / Instagram</option>
            <option>TikTok</option>
            <option>YouTube</option>
            <option>Twitter / X</option>
            <option>Mixed platforms</option>
          </select>

          <label>Primary Objective</label>
          <select style={inputStyle}>
            <option>Traffic</option>
            <option>Leads</option>
            <option>Sales</option>
            <option>App installs</option>
            <option>Awareness</option>
          </select>

          <label>Ad Hook / Headline</label>
          <input
            type="text"
            placeholder="Launch full campaigns in minutes with AdCreator‑AI..."
            style={inputStyle}
          />

          <label>Ad Body Copy</label>
          <textarea
            placeholder="Write or paste your ad copy here..."
            style={{ ...inputStyle, minHeight: 120, resize: "vertical" }}
          />

          <label>Creative Type</label>
          <select style={inputStyle}>
            <option>UGC video</option>
            <option>Polished video ad</option>
            <option>Static image</option>
            <option>Carousel</option>
          </select>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Run Ad Simulation
          </button>
        </div>
      </section>

      {/* HOOK & ANGLE SCORING */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Hook & Angle Scoring
        </h2>

        <div style={cardStyle}>
          <h3>Hook Strength</h3>
          <p style={{ opacity: 0.85 }}>
            Predicted performance based on clarity, curiosity, and relevance.
          </p>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Clarity — does the viewer instantly get the value?</li>
            <li>Curiosity — does it make them want to see more?</li>
            <li>Relevance — is it aligned with the audience’s pain?</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Angle Suggestions</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Speed angle — “Create campaigns in minutes.”</li>
            <li>Proof angle — “Here’s how creators use it.”</li>
            <li>Cost angle — “Replace expensive agencies.”</li>
            <li>Control angle — “Own your entire creative stack.”</li>
          </ul>
        </div>
      </section>

      {/* THUMBNAIL / CREATIVE CHECK */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Thumbnail & Creative Diagnostics
        </h2>

        <div style={cardStyle}>
          <h3>Thumbnail Checklist</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>High contrast and clear focal point.</li>
            <li>Readable text at small sizes.</li>
            <li>Emotion or motion implied.</li>
            <li>Aligned with brand but optimized for click.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Creative Notes</h3>
          <p style={{ opacity: 0.85 }}>
            Use UGC‑style for cold audiences, polished creative for retargeting and launches.
          </p>
        </div>
      </section>

      {/* PREDICTED PERFORMANCE */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Predicted Performance
        </h2>

        <div style={cardStyle}>
          <h3>CTR & Engagement</h3>
          <p style={{ opacity: 0.85 }}>
            Estimated click‑through and engagement based on hook, angle, and creative type.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Risk & Opportunity</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Risk — weak hook, unclear offer, generic visuals.</li>
            <li>Opportunity — strong angle, clear CTA, tight targeting.</li>
          </ul>
        </div>
      </section>

      {/* EXPORT & INTEGRATIONS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Export & Integrations
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            Export your tested ad set or send it directly to the Campaign Builder or Ad Variations Engine.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            Export Tested Ad Set
          </button>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Send to Ad Variations Engine
          </button>
        </div>
      </section>
    </div>
  );
}
