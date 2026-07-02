import { useTheme } from "../context/ThemeContext";
import { panelStyle } from "../styles/GlobalStyles";

export default function StatusPage() {
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

  const statusCard = {
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
        <h1 style={headingStyle}>System Status</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Live operational status for all AdCreator‑AI services.
        </p>
      </section>

      {/* LIVE STATUS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Live Service Status
        </h2>

        <div style={statusCard}>
          <h3>API</h3>
          <p style={{ opacity: 0.85 }}>Operational — 99.99% uptime</p>
        </div>

        <div style={statusCard}>
          <h3>Video Rendering</h3>
          <p style={{ opacity: 0.85 }}>Operational — Average latency: 1.2s</p>
        </div>

        <div style={statusCard}>
          <h3>Asset Storage</h3>
          <p style={{ opacity: 0.85 }}>Operational — No issues detected</p>
        </div>

        <div style={statusCard}>
          <h3>Billing</h3>
          <p style={{ opacity: 0.85 }}>Operational — Stripe connection stable</p>
        </div>
      </section>

      {/* MAINTENANCE */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Scheduled Maintenance
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85 }}>
            No maintenance scheduled at this time.
          </p>
        </div>
      </section>

      {/* INCIDENT HISTORY */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Recent Incidents
        </h2>

        <div style={panelStyle(theme)}>
          <ul style={{ lineHeight: 1.8 }}>
            <li>June 12 — Temporary slowdown in video rendering (resolved)</li>
            <li>May 28 — Asset upload latency increased (resolved)</li>
            <li>May 10 — Billing webhook delay (resolved)</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
