import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AIMarketPositioningForecasterPage() {
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
        <h1 style={headingStyle}>AI Market Positioning Forecaster</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Predict winning angles, emerging trends, competitive shifts, and high‑impact positioning opportunities.
        </p>
      </section>

      {/* INPUTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Positioning Inputs
        </h2>

        <div style={panelStyle(theme)}>
          <label>Product Description</label>
          <textarea
            placeholder="Describe your product, offer, or service..."
            style={{ ...inputStyle, minHeight: 120 }}
          />

          <label>Target Audience</label>
          <input
            type="text"
            placeholder="Entrepreneurs, agencies, SaaS founders..."
            style={inputStyle}
          />

          <label>Competitors</label>
          <textarea
            placeholder="List competitors or alternatives..."
            style={{ ...inputStyle, minHeight: 100 }}
          />

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Run Positioning Forecast
          </button>
        </div>
      </section>

      {/* TRENDS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Emerging Trends
        </h2>

        <div style={cardStyle}>
          <h3>Category Trends</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Shift toward automation‑first workflows.</li>
            <li>Demand for AI‑powered creative intelligence.</li>
            <li>Rise of micro‑personalization in marketing.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Audience Trends</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Preference for fast, guided experiences.</li>
            <li>Growing distrust of generic marketing claims.</li>
            <li>Higher value placed on brand authenticity.</li>
          </ul>
        </div>
      </section>

      {/* COMPETITIVE POSITIONING */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Competitive Positioning
        </h2>

        <div style={cardStyle}>
          <h3>Strengths</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Unique AI creative intelligence stack.</li>
            <li>Deep multi‑module ecosystem.</li>
            <li>High perceived value from automation.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Weaknesses</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Requires onboarding to understand full value.</li>
            <li>Large feature set may overwhelm new users.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Opportunity Angles</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Position as the “Creative Intelligence OS.”</li>
            <li>Focus on outcome‑based messaging.</li>
            <li>Highlight risk reduction + growth acceleration.</li>
          </ul>
        </div>
      </section>

      {/* FORECAST */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Positioning Forecast
        </h2>

        <div style={cardStyle}>
          <h3>Predicted Winning Angles</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>“Your AI‑powered creative strategist.”</li>
            <li>“Predict, optimize, and scale your marketing.”</li>
            <li>“Creative intelligence that multiplies revenue.”</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>AI Summary</h3>
          <p style={{ opacity: 0.85 }}>
            Market signals indicate strong demand for AI‑driven positioning frameworks, predictive insights, and creative intelligence systems.
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
            Export positioning forecast or send it directly to the Creative Strategy OS.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            Export Positioning Forecast
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
