import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AICreativeQAComplianceEnginePage() {
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
        <h1 style={headingStyle}>AI Creative QA & Compliance Engine</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Automated creative quality checks, brand consistency validation, tone enforcement, and compliance scanning across all assets.
        </p>
      </section>

      {/* INPUTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Creative Inputs
        </h2>

        <div style={panelStyle(theme)}>
          <label>Creative Type</label>
          <select style={inputStyle}>
            <option>Ad Copy</option>
            <option>Video Script</option>
            <option>Social Post</option>
            <option>Landing Page Section</option>
            <option>Email</option>
          </select>

          <label>Brand Guidelines</label>
          <textarea
            placeholder="Paste tone, style, voice, compliance rules..."
            style={{ ...inputStyle, minHeight: 120 }}
          />

          <label>Creative Content</label>
          <textarea
            placeholder="Paste the creative asset here..."
            style={{ ...inputStyle, minHeight: 160 }}
          />

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Run QA & Compliance Scan
          </button>
        </div>
      </section>

      {/* BRAND CONSISTENCY */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Brand Consistency Check
        </h2>

        <div style={cardStyle}>
          <h3>Voice & Tone Alignment</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Matches brand tone guidelines.</li>
            <li>Consistent emotional delivery.</li>
            <li>Clear brand personality.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Visual & Structural Consistency</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Correct formatting and layout.</li>
            <li>Consistent CTA placement.</li>
            <li>Brand keywords present.</li>
          </ul>
        </div>
      </section>

      {/* COMPLIANCE CHECK */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Compliance Scan
        </h2>

        <div style={cardStyle}>
          <h3>Compliance Flags</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Potential misleading claims.</li>
            <li>Missing disclaimers.</li>
            <li>Risky phrasing or promises.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Required Fixes</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Add legal disclaimers.</li>
            <li>Clarify transformation claims.</li>
            <li>Remove unverifiable statements.</li>
          </ul>
        </div>
      </section>

      {/* CREATIVE QUALITY SCORE */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Creative Quality Score
        </h2>

        <div style={cardStyle}>
          <h3>Score Breakdown</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Clarity — 92%</li>
            <li>Brand Fit — 88%</li>
            <li>Compliance — 94%</li>
            <li>Emotional Impact — 79%</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>AI Summary</h3>
          <p style={{ opacity: 0.85 }}>
            Overall creative quality is strong, with minor compliance adjustments recommended.
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
            Export QA report or send it to the Creative Strategy OS.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            Export QA Report
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
