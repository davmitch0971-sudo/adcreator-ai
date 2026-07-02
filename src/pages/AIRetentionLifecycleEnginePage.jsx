import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AIRetentionLifecycleEnginePage() {
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
        <h1 style={headingStyle}>AI Retention & Lifecycle Engine</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Diagnose churn risk, design lifecycle journeys, and deploy retention strategies that increase customer lifetime value.
        </p>
      </section>

      {/* INPUTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Lifecycle Inputs
        </h2>

        <div style={panelStyle(theme)}>
          <label>Audience Segment</label>
          <input
            type="text"
            placeholder="New users, trial users, power users, at-risk users..."
            style={inputStyle}
          />

          <label>Lifecycle Stage</label>
          <select style={inputStyle}>
            <option>Onboarding</option>
            <option>Activation</option>
            <option>Engagement</option>
            <option>Retention</option>
            <option>Reactivation</option>
            <option>Churn Prevention</option>
          </select>

          <label>Behavioral Data (JSON or CSV)</label>
          <textarea
            placeholder='{"logins": 3, "feature_usage": ["editor","templates"], "days_inactive": 5}'
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
            Run Retention & Lifecycle Analysis
          </button>
        </div>
      </section>

      {/* DIAGNOSIS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Retention Diagnosis
        </h2>

        <div style={cardStyle}>
          <h3>Risk Indicators</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Declining login frequency.</li>
            <li>Low feature adoption.</li>
            <li>High friction in key workflows.</li>
            <li>Inactive after onboarding.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Lifecycle Stage Assessment</h3>
          <p style={{ opacity: 0.85 }}>
            Users are in a fragile activation/engagement phase and require targeted nudges to reach stable retention.
          </p>
        </div>
      </section>

      {/* PRESCRIPTIONS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          AI Retention Prescriptions
        </h2>

        <div style={cardStyle}>
          <h3>Onboarding & Activation</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Guided first‑success experience.</li>
            <li>Contextual tooltips and micro‑tutorials.</li>
            <li>Activation milestone tracking.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Engagement & Habit Building</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Weekly value recap emails.</li>
            <li>Usage‑based prompts and nudges.</li>
            <li>Feature discovery campaigns.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Churn Prevention & Reactivation</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Trigger reactivation sequences for inactive users.</li>
            <li>Offer personalized incentives based on usage.</li>
            <li>Survey friction points and remove blockers.</li>
          </ul>
        </div>
      </section>

      {/* SCORES */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Retention & Lifecycle Scores
        </h2>

        <div style={cardStyle}>
          <h3>Score Breakdown</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Activation Health — 78%</li>
            <li>Engagement Depth — 72%</li>
            <li>Churn Risk — Medium</li>
            <li>Upsell Potential — High</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>AI Summary</h3>
          <p style={{ opacity: 0.85 }}>
            Users show strong potential but require structured lifecycle journeys and targeted reactivation campaigns to maximize LTV.
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
            Export retention strategy or send it directly to the Email Sequence Generator and Campaign Analytics OS.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            Export Retention Strategy
          </button>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Send to Email Sequence Generator
          </button>
        </div>
      </section>
    </div>
  );
}
