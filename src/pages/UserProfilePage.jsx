import { useTheme } from "../context/ThemeContext";
import { buttonStyle, panelStyle } from "../styles/GlobalStyles";

export default function UserProfilePage() {
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
      {/* HEADER */}
      <section style={sectionStyle}>
        <h1 style={headingStyle}>Your Profile</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          View and update your personal information.
        </p>
      </section>

      {/* AVATAR */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Profile Photo
        </h2>

        <div style={panelStyle(theme)}>
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              background: theme === "dark" ? "#1f2937" : "#e5e7eb",
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
            Upload New Photo
          </button>
        </div>
      </section>

      {/* PERSONAL INFO */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Personal Information
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
            Save Changes
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          About You
        </h2>

        <div style={panelStyle(theme)}>
          <textarea
            placeholder="Tell us about yourself..."
            style={{
              ...inputStyle,
              height: 120,
              resize: "none",
            }}
          ></textarea>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Update Bio
          </button>
        </div>
      </section>
    </div>
  );
}
