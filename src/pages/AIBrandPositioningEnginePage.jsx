import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AIBrandPositioningEnginePage() {
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
        <h1 style={headingStyle}>AI Brand Positioning Engine</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Define your category, differentiate your brand, craft your narrative, and build a market‑ready positioning system.
        </p>
      </section>

      {/* INPUTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Positioning Inputs
        </h2>

        <div style={panelStyle(theme)}>
          <label>Brand Name</label>
          <input
            type="text"
            placeholder="AdCreator‑AI"
            style={inputStyle}
          />

          <label>Target Audience</label>
          <input
            type="text"
            placeholder="Creators, marketers, small businesses..."
            style={inputStyle}
          />

          <label>Primary Competitors</label>
          <input
            type="text"
            placeholder="List competitors or alternatives..."
            style={inputStyle}
          />

          <label>Core Strengths</label>
          <textarea
            placeholder="Speed, automation, quality, simplicity..."
            style={{ ...inputStyle, minHeight: 120 }}
          />

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Generate Brand Positioning
          </button>
        </div>
      </section>

      {/* CATEGORY CREATION */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Category Creation
        </h2>

        <div style={cardStyle}>
          <h3>Your Category</h3>
          <p style={{ opacity: 0.85 }}>
            Define a category you can own — not one you compete inside.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Category Examples</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>AI Creative Operating System</li>
            <li>AI Marketing Department</li>
            <li>AI Campaign Automation Suite</li>
            <li>AI Content Production Engine</li>
          </ul>
        </div>
      </section>

      {/* DIFFERENTIATION */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Differentiation Framework
        </h2>

        <div style={cardStyle}>
          <h3>Core Differentiators</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Speed — create campaigns in minutes.</li>
            <li>Depth — full creative suite, not just one tool.</li>
            <li>Consistency — brand‑aligned outputs every time.</li>
            <li>Automation — workflows, pipelines, approvals.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Positioning Angles</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Empowerment — “You don’t need a team.”</li>
            <li>Cost — “Replace expensive agencies.”</li>
            <li>Control — “Own your entire creative stack.”</li>
            <li>Innovation — “AI‑powered creative intelligence.”</li>
          </ul>
        </div>
      </section>

      {/* BRAND NARRATIVE */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Brand Narrative
        </h2>

        <div style={cardStyle}>
          <h3>Story Framework</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>The problem your audience faces.</li>
            <li>The shift happening in the industry.</li>
            <li>Your unique solution.</li>
            <li>The transformation your product creates.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Example Narrative</h3>
          <p style={{ opacity: 0.85 }}>
            “Creators and marketers are drowning in content demands.  
            AdCreator‑AI gives them a full creative department in one platform.”
          </p>
        </div>
      </section>

      {/* MESSAGING PILLARS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Messaging Pillars
        </h2>

        <div style={cardStyle}>
          <h3>Pillars</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Speed & Efficiency</li>
            <li>Creative Quality</li>
            <li>Brand Consistency</li>
            <li>AI‑Powered Intelligence</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Voice & Tone</h3>
          <p style={{ opacity: 0.85 }}>
            Confident, modern, empowering, creator‑focused.
          </p>
        </div>
      </section>

      {/* EXPORT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Export & Integrations
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            Export your brand positioning or send it to the Creative Strategy OS.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            Export Brand Positioning
          </button>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Send to Creative Strategy OS
          </button>
        </div>
      </section>
    </div>
  );
}
