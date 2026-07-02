import { useTheme } from "../context/ThemeContext";
import { buttonStyle, panelStyle } from "../styles/GlobalStyles";

export default function TeamCollaborationPage() {
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

  const memberCard = {
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
        <h1 style={headingStyle}>Team Collaboration</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Invite teammates, assign roles, and collaborate on projects.
        </p>

        <button
          style={{
            ...buttonStyle(theme),
            padding: "12px 20px",
            fontSize: 16,
            marginTop: 20,
          }}
        >
          + Invite Member
        </button>
      </section>

      {/* INVITE FORM */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Invite a Team Member
        </h2>

        <div style={panelStyle(theme)}>
          <label>Email Address</label>
          <input type="email" placeholder="teammate@example.com" style={inputStyle} />

          <label>Role</label>
          <select style={inputStyle}>
            <option>Viewer</option>
            <option>Editor</option>
            <option>Admin</option>
          </select>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Send Invite
          </button>
        </div>
      </section>

      {/* TEAM MEMBERS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Team Members
        </h2>

        <div style={memberCard}>
          <h3>Sarah Johnson</h3>
          <p style={{ opacity: 0.85 }}>Role: Editor</p>
          <button style={{ ...buttonStyle(theme), padding: "8px 14px", marginTop: 10 }}>
            Manage Permissions
          </button>
        </div>

        <div style={memberCard}>
          <h3>Michael Lee</h3>
          <p style={{ opacity: 0.85 }}>Role: Viewer</p>
          <button style={{ ...buttonStyle(theme), padding: "8px 14px", marginTop: 10 }}>
            Manage Permissions
          </button>
        </div>

        <div style={memberCard}>
          <h3>Jessica Adams</h3>
          <p style={{ opacity: 0.85 }}>Role: Admin</p>
          <button style={{ ...buttonStyle(theme), padding: "8px 14px", marginTop: 10 }}>
            Manage Permissions
          </button>
        </div>
      </section>

      {/* PERMISSIONS OVERVIEW */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Permissions Overview
        </h2>

        <div style={panelStyle(theme)}>
          <ul style={{ lineHeight: 1.8 }}>
            <li><strong>Viewer:</strong> Can view projects and assets.</li>
            <li><strong>Editor:</strong> Can edit projects, assets, and templates.</li>
            <li><strong>Admin:</strong> Full access including billing and team management.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
