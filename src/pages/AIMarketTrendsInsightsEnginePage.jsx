import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AIMarketTrendsInsightsEnginePage() {
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
        <h1 style={headingStyle}>AI Market Trends & Insights Engine</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Real‑time industry trends, competitor shifts, emerging opportunities, and market intelligence — all generated automatically.
        </p>
      </section>

      {/* INPUTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Market Inputs
        </h2>

        <div style={panelStyle(theme)}>
          <label>Industry / Niche</label>
          <input
            type="text"
            placeholder="AI tools, marketing, content creation..."
            style={inputStyle}
          />

          <label>Competitors</label>
          <input
            type="text"
            placeholder="List competitors or alternatives..."
            style={inputStyle}
          />

          <label>Audience Segment</label>
          <input
            type="text"
            placeholder="Creators, marketers, SMBs..."
            style={inputStyle}
          />

          <label>Time Horizon</label>
          <select style={inputStyle}>
            <option>Current Trends</option>
            <option>Next 30 Days</option>
            <option>Next 90 Days</option>
            <option>Next 12 Months</option>
          </select>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Generate Market Insights
          </button>
        </div>
      </section>

      {/* INDUSTRY TRENDS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Industry Trends
        </h2>

        <div style={cardStyle}>
          <h3>Current Trends</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>AI replacing manual creative workflows.</li>
            <li>Short‑form content dominating discovery.</li>
            <li>Creators becoming micro‑brands.</li>
            <li>Automation becoming a competitive advantage.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Emerging Trends</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>AI‑generated video becoming mainstream.</li>
            <li>Personalized content at scale.</li>
            <li>AI‑powered brand consistency systems.</li>
            <li>Creator‑led product launches.</li>
          </ul>
        </div>
      </section>

      {/* COMPETITOR SHIFTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Competitor Shifts
        </h2>

        <div style={cardStyle}>
          <h3>Competitive Landscape</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>New AI tools entering the market weekly.</li>
            <li>Agencies adopting AI to reduce costs.</li>
            <li>Creators building their own AI workflows.</li>
            <li>Platforms pushing automation features.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Threats & Opportunities</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Threat — rapid tool saturation.</li>
            <li>Threat — rising expectations for speed.</li>
            <li>Opportunity — full creative OS positioning.</li>
            <li>Opportunity — automation‑first workflows.</li>
          </ul>
        </div>
      </section>

      {/* EMERGING OPPORTUNITIES */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Emerging Opportunities
        </h2>

        <div style={cardStyle}>
          <h3>High‑Leverage Opportunities</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>AI‑powered content repurposing at scale.</li>
            <li>Creator collaboration and workflow automation.</li>
            <li>Brand positioning engines for SMBs.</li>
            <li>AI‑driven campaign optimization.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Platform Opportunities</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>TikTok — short‑form dominance.</li>
            <li>YouTube — long‑form authority building.</li>
            <li>Instagram — brand identity & storytelling.</li>
            <li>LinkedIn — B2B growth & thought leadership.</li>
          </ul>
        </div>
      </section>

      {/* MARKET FORECAST */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Market Forecast
        </h2>

        <div style={cardStyle}>
          <h3>Predicted Shifts</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>AI‑generated video becomes standard.</li>
            <li>Creators replace agencies for SMBs.</li>
            <li>Automation becomes mandatory for scaling.</li>
            <li>Brand consistency becomes AI‑driven.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Long‑Term Outlook</h3>
          <p style={{ opacity: 0.85 }}>
            The market is shifting toward full creative operating systems —  
            platforms that handle strategy, creation, testing, and optimization.
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
            Export market insights or send them to the Creative Strategy OS.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            Export Market Insights
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
