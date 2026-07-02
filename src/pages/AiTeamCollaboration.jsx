import { useTheme } from "../context/ThemeContext";
import { panelStyle, inputStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AiTeamCollaboration() {
  const { theme } = useTheme();

  const teams = [
    {
      id: 1,
      name: "Sample Studio",
      role: "Admin",
      members: 3,
      projects: 12,
      billing: "Covered by Admin (PayPal)"
    }
  ];

  const members = [
    {
      id: 1,
      name: "Sample User",
      email: "user@example.com",
      role: "Editor",
      lastActive: "2026‑07‑02"
    },
    {
      id: 2,
      name: "Second User",
      email: "second@example.com",
      role: "Viewer",
      lastActive: "2026‑07‑01"
    }
  ];

  const activity = [
    {
      id: 201,
      team: "Sample Studio",
      user: "Sample User",
      action: "Generated Auto‑Storyboard",
      when: "2026‑07‑02 03:14"
    },
    {
      id: 202,
      team: "Sample Studio",
      user: "Second User",
      action: "Viewed project timeline",
      when: "2026‑07‑02 03:20"
    }
  ];

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>AI Team Collaboration</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 12,
          marginBottom: 16
        }}
      >
        <div style={panelStyle(theme)}>
          <h2 style={{ marginTop: 0 }}>Workspaces</h2>
          {teams.map((t) => (
            <div
              key={t.id}
              style={{
                marginBottom: 10,
                padding: 8,
                borderRadius: 8,
                background: theme === "dark" ? "#0f172a" : "#ffffff",
                border: "1px solid rgba(148,163,184,0.35)"
              }}
            >
              <p style={{ margin: 0 }}>
                <strong>{t.name}</strong>
              </p>
              <p style={{ margin: 0, fontSize: 13 }}>
                Role: {t.role} — Members: {t.members}
              </p>
              <p style={{ margin: 0, fontSize: 13 }}>
                Projects: {t.projects}
              </p>
              <p style={{ marginTop: 4, fontSize: 12, opacity: 0.7 }}>
                Billing: {t.billing}
              </p>
            </div>
          ))}
        </div>

        <div style={panelStyle(theme)}>
          <h2 style={{ marginTop: 0 }}>Team Members</h2>
          {members.map((m) => (
            <div
              key={m.id}
              style={{
                marginBottom: 10,
                padding: 8,
                borderRadius: 8,
                background: theme === "dark" ? "#0f172a" : "#ffffff",
                border: "1px solid rgba(148,163,184,0.35)"
              }}
            >
              <p style={{ margin: 0 }}>
                <strong>{m.name}</strong> ({m.email})
              </p>
              <p style={{ margin: 0, fontSize: 13 }}>
                Role: {m.role}
              </p>
              <p style={{ margin: 0, fontSize: 12, opacity: 0.7 }}>
                Last active: {m.lastActive}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ ...panelStyle(theme), marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>Invite Member</h2>
        <p style={{ fontSize: 13, marginBottom: 6 }}>
          This is a placeholder UI. Later you can wire it to a backend that
          sends real email invites.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 8,
            marginBottom: 8
          }}
        >
          <input
            placeholder="Email"
            style={inputStyle(theme)}
          />
          <select style={inputStyle(theme)}>
            <option>Editor</option>
            <option>Viewer</option>
            <option>Admin</option>
          </select>
        </div>

        <button
          style={buttonStyle(theme)}
          type="button"
          onClick={() =>
            alert(
              "Invite flow is placeholder. Later, connect this to your backend to send real invites."
            )
          }
        >
          Send Invite
        </button>
      </div>

      <div style={panelStyle(theme)}>
        <h2 style={{ marginTop: 0 }}>Team Activity</h2>

        {activity.map((a) => (
          <div
            key={a.id}
            style={{
              marginBottom: 8,
              padding: 8,
              borderRadius: 8,
              background: theme === "dark" ? "#0f172a" : "#ffffff",
              border: "1px solid rgba(148,163,184,0.35)"
            }}
          >
            <p style={{ margin: 0 }}>
              <strong>{a.team}</strong> — {a.user}
            </p>
            <p style={{ margin: 0, fontSize: 13 }}>{a.action}</p>
            <p style={{ margin: 0, fontSize: 12, opacity: 0.7 }}>{a.when}</p>
          </div>
        ))}

        <p style={{ marginTop: 8, fontSize: 12, opacity: 0.7 }}>
          Activity log is sample data. Later, you can connect it to real events
          from your backend.
        </p>
      </div>
    </div>
  );
}
