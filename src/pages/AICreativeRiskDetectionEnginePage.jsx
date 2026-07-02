import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AICreativeRiskDetectionEnginePage() {
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
        <h1 style={headingStyle}>AI Creative Risk Detection Engine</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Detect compliance risks, misleading claims, platform violations, and brand‑damaging language before publishing any creative asset.
        </p>
      </section>

      {/* INPUTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Creative Input
        </h2>

        <div style={panelStyle(theme)}>
          <label>Creative Type</label>
          <select style={inputStyle}>
            <option>Ad Copy</option>
            <option>Video Script</option>
            <option>Social Post</option>
            <option>Email</option>
            <option>Landing Page Section</option>
          </select>

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
            Run Risk Detection Scan
          </button>
        </div>
      </section>

      {/* RISK FLAGS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Risk Flags
        </h2>

        <div style={cardStyle}>
          <h3>Compliance Risks</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Potentially misleading transformation claims.</li>
            <li>Missing required disclaimers.</li>
            <li>Unverified performance statements.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Platform Violations</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Restricted phrasing for Meta Ads.</li>
            <li>Potential Google Ads policy conflicts.</li>
            <li>High‑risk emotional triggers.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Brand Safety Risks</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Off‑brand tone or messaging.</li>
            <li>Negative sentiment indicators.</li>
            <li>High‑friction or aggressive language.</li>
          </ul>
        </div>
      </section>

      {/* RECOMMENDATIONS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          AI Recommendations
        </h2>

        <div style={cardStyle}>
          <h3>Fixes & Improvements</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Clarify transformation claims.</li>
            <li>Add platform‑specific disclaimers.</li>
            <li>Replace risky phrasing with compliant alternatives.</li>
            <li>Strengthen brand alignment.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Safe Alternatives</h3>
          <p style={{ opacity: 0.85 }}>
            AI generates compliant, platform‑safe versions of your creative while preserving intent and impact.
          </p>
        </div>
      </section>

      {/* SCORES */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Risk Scores
        </h2>

        <div style={cardStyle}>
          <h3>Score Breakdown</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Compliance Risk — 62%</li>
            <li>Platform Violation Risk — 48%</li>
            <li>Brand Safety Risk — 71%</li>
            <li>Overall Risk Level — Medium</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>AI Summary</h3>
          <p style={{ opacity: 0.85 }}>
            Creative contains moderate risk indicators. Recommended adjustments will reduce compliance exposure and improve brand safety.
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
            Export risk report or send it directly to the Creative QA Engine or Campaign Analytics OS.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            Export Risk Report
          </button>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Send to Creative QA Engine
          </button>
        </div>
      </section>
    </div>
  );
}
