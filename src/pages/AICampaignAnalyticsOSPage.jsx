import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AICampaignAnalyticsOSPage() {
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

  const cardStyle = {
    padding: 16,
    borderRadius: 10,
    background: theme === "dark" ? "#111827" : "#f3f4f6",
    border: theme === "dark" ? "1px solid #1f2937" : "1px solid #e5e7eb",
    marginBottom: 16,
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

  return (
    <div style={{ padding: 20 }}>
      {/* HEADER */}
      <section style={sectionStyle}>
        <h1 style={headingStyle}>AI Campaign Analytics OS</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Performance insights, creative diagnostics, optimization recommendations, and predictive analytics — all powered by AI.
        </p>
      </section>

      {/* INPUTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Campaign Inputs
        </h2>

        <div style={panelStyle(theme)}>
          <label>Campaign Name</label>
          <input
            type="text"
            placeholder="Summer Promo Campaign"
            style={inputStyle}
          />

          <label>Platform</label>
          <select style={inputStyle}>
            <option>TikTok</option>
            <option>Instagram</option>
            <option>YouTube</option>
            <option>Facebook</option>
            <option>LinkedIn</option>
          </select>

          <label>Metrics (JSON or CSV)</label>
          <textarea
            placeholder='{"views": 12000, "clicks": 450, "ctr": 3.7, "cpc": 0.42}'
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
            Analyze Campaign
          </button>
        </div>
      </section>

      {/* PERFORMANCE SUMMARY */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Performance Summary
        </h2>

        <div style={cardStyle}>
          <h3>Key Metrics</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>CTR — Click‑through rate</li>
            <li>CPC — Cost per click</li>
            <li>CPM — Cost per thousand impressions</li>
            <li>ROAS — Return on ad spend</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>AI Summary</h3>
          <p style={{ opacity: 0.85 }}>
            AI identifies strengths, weaknesses, and anomalies in your campaign performance.
          </p>
        </div>
      </section>

      {/* CREATIVE DIAGNOSTICS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Creative Diagnostics
        </h2>

        <div style={cardStyle}>
          <h3>Creative Strengths</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Strong hook performance.</li>
            <li>High retention in first 3 seconds.</li>
            <li>Clear CTA placement.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Creative Weaknesses</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Mid‑video drop‑off.</li>
            <li>Weak emotional appeal.</li>
            <li>Branding not visible early enough.</li>
          </ul>
        </div>
      </section>

      {/* OPTIMIZATION RECOMMENDATIONS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Optimization Recommendations
        </h2>

        <div style={cardStyle}>
          <h3>AI Recommendations</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Shorten intro to increase retention.</li>
            <li>Increase contrast on text overlays.</li>
            <li>Test alternative CTAs.</li>
            <li>Try a more emotional narrative.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Platform‑Specific Tips</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>TikTok — faster pacing.</li>
            <li>Instagram — stronger visuals.</li>
            <li>YouTube — deeper storytelling.</li>
          </ul>
        </div>
      </section>

      {/* PREDICTIVE ANALYTICS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Predictive Analytics
        </h2>

        <div style={cardStyle}>
          <h3>Forecast</h3>
          <p style={{ opacity: 0.85 }}>
            AI predicts future performance based on historical patterns and platform trends.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Risk Assessment</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Risk of creative fatigue.</li>
            <li>Risk of rising CPC.</li>
            <li>Risk of platform algorithm shifts.</li>
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
            Export analytics or send them to the Creative Strategy OS.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            Export Analytics Report
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
