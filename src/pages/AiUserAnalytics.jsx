import { useTheme } from "../context/ThemeContext";
import { panelStyle } from "../styles/GlobalStyles";

export default function AiUserAnalytics() {
  const { theme } = useTheme();

  const metrics = {
    dailyActiveUsers: 42,
    monthlyActiveUsers: 180,
    newUsersThisMonth: 25,
    churnRate: "3.2%",
    avgSessionLength: "14 min",
    topFeatures: [
      "Super Generator",
      "AI Auto‑Edit",
      "AI Auto‑Storyboard",
      "AI Auto‑Music"
    ],
    revenue: {
      mrr: "$5.99",
      arr: "$71.88",
      activeSubscriptions: 1
    }
  };

  const usageByModule = [
    { name: "Super Generator", count: 120 },
    { name: "AI Auto‑Storyboard", count: 80 },
    { name: "AI Auto‑Edit", count: 65 },
    { name: "AI Auto‑Color‑Grade", count: 40 },
    { name: "AI Auto‑Music", count: 35 }
  ];

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>AI User Analytics</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 12,
          marginBottom: 16
        }}
      >
        <div style={panelStyle(theme)}>
          <h2 style={{ marginTop: 0 }}>Users</h2>
          <p><strong>Daily Active:</strong> {metrics.dailyActiveUsers}</p>
          <p><strong>Monthly Active:</strong> {metrics.monthlyActiveUsers}</p>
          <p><strong>New This Month:</strong> {metrics.newUsersThisMonth}</p>
          <p><strong>Churn Rate:</strong> {metrics.churnRate}</p>
        </div>

        <div style={panelStyle(theme)}>
          <h2 style={{ marginTop: 0 }}>Engagement</h2>
          <p><strong>Avg Session Length:</strong> {metrics.avgSessionLength}</p>
          <strong>Top Features</strong>
          <ul style={{ marginTop: 6, paddingLeft: 18 }}>
            {metrics.topFeatures.map((f, idx) => (
              <li key={idx}>{f}</li>
            ))}
          </ul>
        </div>

        <div style={panelStyle(theme)}>
          <h2 style={{ marginTop: 0 }}>Revenue</h2>
          <p><strong>MRR:</strong> {metrics.revenue.mrr}</p>
          <p><strong>ARR:</strong> {metrics.revenue.arr}</p>
          <p>
            <strong>Active Subscriptions:</strong>{" "}
            {metrics.revenue.activeSubscriptions}
          </p>
          <p style={{ fontSize: 12, opacity: 0.7 }}>
            Values are illustrative. Real data can be wired from your backend
            later.
          </p>
        </div>
      </div>

      <div style={panelStyle(theme)}>
        <h2 style={{ marginTop: 0 }}>Usage by Module</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 10
          }}
        >
          {usageByModule.map((m) => (
            <div
              key={m.name}
              style={{
                padding: 8,
                borderRadius: 8,
                background: theme === "dark" ? "#0f172a" : "#ffffff",
                border: "1px solid rgba(148,163,184,0.35)"
              }}
            >
              <p style={{ margin: 0 }}>
                <strong>{m.name}</strong>
              </p>
              <p style={{ margin: 0, fontSize: 13 }}>
                Uses: {m.count} (sample data)
              </p>
            </div>
          ))}
        </div>

        <p style={{ marginTop: 10, fontSize: 12, opacity: 0.7 }}>
          This dashboard is wired with placeholder analytics. You can later
          connect it to real tracking events from your backend.
        </p>
      </div>
    </div>
  );
}
