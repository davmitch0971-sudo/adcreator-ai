import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AIAudienceResearchEnginePage() {
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
        <h1 style={headingStyle}>AI Audience Research Engine</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Deep psychographics, segmentation, pain points, desires, motivations, and behavioral insights — all generated automatically.
        </p>
      </section>

      {/* INPUTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Audience Inputs
        </h2>

        <div style={panelStyle(theme)}>
          <label>Product / Brand</label>
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

          <label>Industry / Niche</label>
          <input
            type="text"
            placeholder="AI tools, marketing, content creation..."
            style={inputStyle}
          />

          <label>Audience Level</label>
          <select style={inputStyle}>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
            <option>Mixed</option>
          </select>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Generate Audience Insights
          </button>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Pain Points & Frustrations
        </h2>

        <div style={cardStyle}>
          <h3>Primary Pain Points</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Overwhelmed by content demands.</li>
            <li>Inconsistent creative quality.</li>
            <li>Slow production cycles.</li>
            <li>High cost of agencies or freelancers.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Hidden Pain Points</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Fear of falling behind competitors.</li>
            <li>Lack of confidence in creative direction.</li>
            <li>Difficulty staying consistent across platforms.</li>
          </ul>
        </div>
      </section>

      {/* DESIRES & MOTIVATIONS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Desires & Motivations
        </h2>

        <div style={cardStyle}>
          <h3>Core Desires</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Grow their audience.</li>
            <li>Increase revenue.</li>
            <li>Build a recognizable brand.</li>
            <li>Produce content faster.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Emotional Drivers</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Freedom — more time, less stress.</li>
            <li>Confidence — knowing their content works.</li>
            <li>Identity — becoming a known creator or brand.</li>
          </ul>
        </div>
      </section>

      {/* SEGMENTATION */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Audience Segmentation
        </h2>

        <div style={cardStyle}>
          <h3>Segments</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Beginner creators — need guidance and templates.</li>
            <li>Intermediate creators — need speed and consistency.</li>
            <li>Advanced creators — need automation and scale.</li>
            <li>Businesses — need full campaign systems.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Behavioral Traits</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>High consumption of short‑form content.</li>
            <li>Preference for fast, actionable tools.</li>
            <li>Strong interest in automation.</li>
          </ul>
        </div>
      </section>

      {/* BUYER JOURNEY */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Buyer Journey Insights
        </h2>

        <div style={cardStyle}>
          <h3>Stages</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Awareness — discovering the problem.</li>
            <li>Consideration — comparing tools.</li>
            <li>Decision — choosing the fastest, most complete solution.</li>
            <li>Retention — staying for automation and consistency.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Conversion Triggers</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Proof — case studies, demos, testimonials.</li>
            <li>Speed — “Create campaigns in minutes.”</li>
            <li>Value — replacing agencies or freelancers.</li>
          </ul>
        </div>
      </section>

      {/* EXPORT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Export & Integrations
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            Export audience insights or send them to the Brand Positioning Engine.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            Export Audience Insights
          </button>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Send to Brand Positioning Engine
          </button>
        </div>
      </section>
    </div>
  );
}
