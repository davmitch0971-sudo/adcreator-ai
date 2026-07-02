import { useTheme } from "../context/ThemeContext";
import { panelStyle } from "../styles/GlobalStyles";

export default function AnalyticsDashboardPage() {
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

  const statCard = {
    padding: 20,
    borderRadius: 12,
    background: theme === "dark" ? "#111827" : "#f3f4f6",
    border: theme === "dark" ? "1px solid #1f2937" : "1px solid #e5e7eb",
    textAlign: "center",
  };

  return (
    <div style={{ padding: 20 }}>
      {/* HEADER */}
      <section style={sectionStyle}>
        <h1 style={headingStyle}>Analytics Dashboard</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Track performance, engagement, conversions, and campaign insights.
        </p>
      </section>

      {/* TOP STATS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20 }}>
          Key Metrics
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
          }}
        >
          <div style={statCard}>
            <h3>Total Views</h3>
            <p style={{ fontSize: 32, fontWeight: 700 }}>128,492</p>
          </div>

          <div style={statCard}>
            <h3>Clicks</h3>
            <p style={{ fontSize: 32, fontWeight: 700 }}>9,341</p>
          </div>

          <div style={statCard}>
            <h3>Conversions</h3>
            <p style={{ fontSize: 32, fontWeight: 700 }}>1,284</p>
          </div>

          <div style={statCard}>
            <h3>CTR</h3>
            <p style={{ fontSize: 32, fontWeight: 700 }}>7.2%</p>
          </div>
        </div>
      </section>

      {/* CHART PLACEHOLDERS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20 }}>
          Performance Charts
        </h2>

        <div style={panelStyle(theme)}>
          <div
            style={{
              height: 240,
              background: theme === "dark" ? "#1f2937" : "#e5e7eb",
              borderRadius: 10,
              marginBottom: 20,
            }}
          ></div>
          <p style={{ opacity: 0.85 }}>Views Over Time (Chart Placeholder)</p>
        </div>

        <div style={{ ...panelStyle(theme), marginTop: 20 }}>
          <div
            style={{
              height: 240,
              background: theme === "dark" ? "#1f2937" : "#e5e7eb",
              borderRadius: 10,
              marginBottom: 20,
            }}
          ></div>
          <p style={{ opacity: 0.85 }}>Conversions Over Time (Chart Placeholder)</p>
        </div>
      </section>

      {/* CAMPAIGN BREAKDOWN */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20 }}>
          Campaign Breakdown
        </h2>

        <div style={panelStyle(theme)}>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Summer Promo — 42,000 views — 3.8% CTR</li>
            <li>Holiday Ads — 58,000 views — 8.1% CTR</li>
            <li>Product Launch — 28,000 views — 6.4% CTR</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
