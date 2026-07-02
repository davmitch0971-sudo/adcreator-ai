import { useTheme } from "../context/ThemeContext";
import { panelStyle, inputStyle } from "../styles/GlobalStyles";

export default function AiCrm() {
  const { theme } = useTheme();

  const users = [
    {
      id: 1,
      name: "Sample User",
      email: "user@example.com",
      plan: "AdCreator‑AI Pro",
      status: "Active",
      lastActive: "2026‑07‑02",
      notes: "Loves Auto‑Storyboard and Auto‑Edit."
    }
  ];

  const tickets = [
    {
      id: 101,
      user: "Sample User",
      email: "user@example.com",
      subject: "Question about Auto‑Music",
      status: "Open",
      priority: "Normal",
      createdAt: "2026‑07‑01",
      lastUpdate: "2026‑07‑01",
      summary: "Wants help matching music intensity to scene pacing."
    }
  ];

  const cannedReply =
    "Thanks for reaching out! For best results with Auto‑Music, describe your scenes, emotional beats, and where you want the music to rise or fall. AdCreator‑AI will build a music plan that matches your pacing and brand.";

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>AI CRM</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 12,
          marginBottom: 16
        }}
      >
        <div style={panelStyle(theme)}>
          <h2 style={{ marginTop: 0 }}>Users</h2>
          {users.map((u) => (
            <div
              key={u.id}
              style={{
                marginBottom: 10,
                padding: 8,
                borderRadius: 8,
                background: theme === "dark" ? "#0f172a" : "#ffffff",
                border: "1px solid rgba(148,163,184,0.35)"
              }}
            >
              <p style={{ margin: 0 }}>
                <strong>{u.name}</strong> ({u.email})
              </p>
              <p style={{ margin: 0, fontSize: 13 }}>
                Plan: {u.plan} — Status: {u.status}
              </p>
              <p style={{ margin: 0, fontSize: 12, opacity: 0.7 }}>
                Last active: {u.lastActive}
              </p>
              <p style={{ marginTop: 4, fontSize: 13 }}>{u.notes}</p>
            </div>
          ))}
        </div>

        <div style={panelStyle(theme)}>
          <h2 style={{ marginTop: 0 }}>Support Tickets</h2>
          {tickets.map((t) => (
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
                <strong>#{t.id}</strong> — {t.subject}
              </p>
              <p style={{ margin: 0, fontSize: 13 }}>
                User: {t.user} ({t.email})
              </p>
              <p style={{ margin: 0, fontSize: 12 }}>
                Status: {t.status} — Priority: {t.priority}
              </p>
              <p style={{ margin: 0, fontSize: 12, opacity: 0.7 }}>
                Created: {t.createdAt} — Last update: {t.lastUpdate}
              </p>
              <p style={{ marginTop: 4, fontSize: 13 }}>{t.summary}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={panelStyle(theme)}>
        <h2 style={{ marginTop: 0 }}>AI Reply Template</h2>
        <p style={{ marginBottom: 6, fontSize: 13 }}>
          Example AI‑generated reply you can use when users ask about Auto‑Music
          or scene‑matched audio.
        </p>
        <textarea
          value={cannedReply}
          readOnly
          style={{
            ...inputStyle(theme),
            minHeight: 120,
            resize: "vertical"
          }}
        />
        <p style={{ marginTop: 8, fontSize: 12, opacity: 0.7 }}>
          Later, you can wire this to a backend that generates dynamic replies
          per ticket.
        </p>
      </div>
    </div>
  );
}
