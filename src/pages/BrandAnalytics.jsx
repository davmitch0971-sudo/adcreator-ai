import { useTheme } from "../context/ThemeContext";
import { panelStyle } from "../styles/GlobalStyles";

export default function BrandAnalytics() {
  const { theme } = useTheme();

  const projects = JSON.parse(localStorage.getItem("projects") || "[]");

  const grouped = projects.reduce((acc, p) => {
    if (!acc[p.brand]) acc[p.brand] = [];
    acc[p.brand].push(p);
    return acc;
  }, {});

  const brandStats = Object.keys(grouped).map((brand) => {
    const items = grouped[brand];
    const total = items.length;

    const byType = items.reduce((acc, p) => {
      acc[p.generator] = (acc[p.generator] || 0) + 1;
      return acc;
    }, {});

    const sorted = [...items].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );

    const first = sorted[0]?.createdAt;
    const latest = sorted[sorted.length - 1]?.createdAt;

    return {
      brand,
      total,
      byType,
      first,
      latest
    };
  });

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>Brand Analytics</h1>

      {brandStats.length === 0 && (
        <p style={{ opacity: 0.7 }}>No brand data available yet.</p>
      )}

      {brandStats.map((stat) => (
        <div
          key={stat.brand}
          style={{
            marginBottom: 20,
            ...panelStyle(theme)
          }}
        >
          <h2 style={{ marginTop: 0 }}>{stat.brand}</h2>

          <p>Total Projects: <strong>{stat.total}</strong></p>

          <div style={{ marginTop: 10 }}>
            <h3 style={{ marginBottom: 6 }}>Breakdown</h3>
            {Object.keys(stat.byType).map((type) => (
              <p key={type} style={{ margin: 0 }}>
                {type}: {stat.byType[type]}
              </p>
            ))}
          </div>

          <div style={{ marginTop: 10 }}>
            <h3 style={{ marginBottom: 6 }}>Timeline</h3>
            <p style={{ margin: 0 }}>
              First Project: {stat.first && new Date(stat.first).toLocaleString()}
            </p>
            <p style={{ margin: 0 }}>
              Latest Project: {stat.latest && new Date(stat.latest).toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
