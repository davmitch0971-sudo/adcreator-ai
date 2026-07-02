import { useTheme } from "../context/ThemeContext";
import { buttonStyle, panelStyle } from "../styles/GlobalStyles";

export default function AccountSettingsPage() {
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

  return (
    <div style={{ padding: 20 }}>
      <section style={sectionStyle}>
        <h1 style={headingStyle}>Account Settings</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Manage your profile, security, and subscription settings.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Profile Information
        </h2>

        <div style={panelStyle(theme)}>
          <label>Name</label>
          <input type="text" placeholder="Your name" style={inputStyle} />

          <label>Email</label>
          <input type="email" placeholder="you@example.com" style={inputStyle} />

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Save Profile
          </button>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Security
        </h2>

        <div style={panelStyle(theme)}>
          <label>New Password</label>
          <input type="password" placeholder="New password" style={inputStyle} />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm password"
            style={inputStyle}
          />

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Update Password
          </button>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Subscription & Billing
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            Manage your subscription, billing history, and payment methods.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Open Billing Portal
          </button>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Danger Zone
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85 }}>
            Permanently delete your account and all associated data.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              background: "#b91c1c",
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Delete Account
          </button>
        </div>
      </section>
    </div>
  );
}
