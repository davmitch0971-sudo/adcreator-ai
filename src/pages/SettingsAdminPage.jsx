import { useTheme } from "../context/ThemeContext";
import { buttonStyle, panelStyle } from "../styles/GlobalStyles";

export default function SettingsAdminPage() {
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
        <h1 style={headingStyle}>Admin Settings</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Manage global system settings, API keys, user permissions, and platform configuration.
        </p>
      </section>

      {/* FEATURE TOGGLES */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Feature Toggles
        </h2>

        <div style={panelStyle(theme)}>
          <label>Enable AI Video Editor</label>
          <select style={inputStyle}>
            <option>Enabled</option>
            <option>Disabled</option>
          </select>

          <label>Enable Template Builder</label>
          <select style={inputStyle}>
            <option>Enabled</option>
            <option>Disabled</option>
          </select>

          <label>Enable Team Collaboration</label>
          <select style={inputStyle}>
            <option>Enabled</option>
            <option>Disabled</option>
          </select>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Save Feature Settings
          </button>
        </div>
      </section>

      {/* API KEYS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          API Keys
        </h2>

        <div style={panelStyle(theme)}>
          <label>OpenAI API Key</label>
          <input type="password" placeholder="••••••••••••••" style={inputStyle} />

          <label>Stripe API Key</label>
          <input type="password" placeholder="••••••••••••••" style={inputStyle} />

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Update API Keys
          </button>
        </div>
      </section>

      {/* USER MANAGEMENT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          User Management
        </h2>

        <div style={cardStyle}>
          <h3>David Mitchell</h3>
          <p style={{ opacity: 0.85 }}>Role: Owner</p>
          <button style={{ ...buttonStyle(theme), padding: "8px 14px", marginTop: 10 }}>
            Manage User
          </button>
        </div>

        <div style={cardStyle}>
          <h3>Sarah Johnson</h3>
          <p style={{ opacity: 0.85 }}>Role: Admin</p>
          <button style={{ ...buttonStyle(theme), padding: "8px 14px", marginTop: 10 }}>
            Manage User
          </button>
        </div>

        <div style={cardStyle}>
          <h3>Michael Lee</h3>
          <p style={{ opacity: 0.85 }}>Role: Editor</p>
          <button style={{ ...buttonStyle(theme), padding: "8px 14px", marginTop: 10 }}>
            Manage User
          </button>
        </div>
      </section>

      {/* SYSTEM LOGS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          System Logs
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            View recent system events, errors, and admin actions.
          </p>

          <div
            style={{
              height: 200,
              background: theme === "dark" ? "#1f2937" : "#e5e7eb",
              borderRadius: 10,
              marginBottom: 20,
            }}
          ></div>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Download Logs
          </button>
        </div>
      </section>
    </div>
  );
}
