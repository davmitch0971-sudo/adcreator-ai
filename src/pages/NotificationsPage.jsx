import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function NotificationsPage() {
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

  const notificationCard = {
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
        <h1 style={headingStyle}>Notifications</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Stay updated with alerts, project activity, billing notices, and team actions.
        </p>

        <button
          style={{
            ...buttonStyle(theme),
            padding: "12px 20px",
            fontSize: 16,
            marginTop: 20,
          }}
        >
          Mark All as Read
        </button>
      </section>

      {/* SYSTEM ALERTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          System Alerts
        </h2>

        <div style={notificationCard}>
          <h3>Billing Renewal Successful</h3>
          <p style={{ opacity: 0.85 }}>Your Pro plan renewed successfully.</p>
        </div>

        <div style={notificationCard}>
          <h3>New Feature Released</h3>
          <p style={{ opacity: 0.85 }}>AI Video Editor now supports transitions.</p>
        </div>
      </section>

      {/* PROJECT UPDATES */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Project Updates
        </h2>

        <div style={notificationCard}>
          <h3>Summer Promo Campaign</h3>
          <p style={{ opacity: 0.85 }}>Your video export is ready for download.</p>
        </div>

        <div style={notificationCard}>
          <h3>Product Launch</h3>
          <p style={{ opacity: 0.85 }}>AI generated 3 new caption variations.</p>
        </div>
      </section>

      {/* TEAM ACTIVITY */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Team Activity
        </h2>

        <div style={notificationCard}>
          <h3>Sarah Johnson</h3>
          <p style={{ opacity: 0.85 }}>Edited the Product Spotlight Template.</p>
        </div>

        <div style={notificationCard}>
          <h3>Michael Lee</h3>
          <p style={{ opacity: 0.85 }}>Uploaded 4 new product photos.</p>
        </div>
      </section>
    </div>
  );
}
