import { useTheme } from "../context/ThemeContext";
import { buttonStyle, panelStyle } from "../styles/GlobalStyles";
import { Link } from "react-router-dom";

export default function DashboardHomePage() {
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

  return (
    <div style={{ padding: 20 }}>
      {/* HEADER */}
      <section style={sectionStyle}>
        <h1 style={headingStyle}>Dashboard</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Welcome back! Choose a tool to get started.
        </p>
      </section>

      {/* QUICK ACTIONS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Quick Actions
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          <div style={panelStyle(theme)}>
            <h3>Create Video Ad</h3>
            <p style={{ opacity: 0.85 }}>Generate a full AI‑powered video ad.</p>
            <Link to="/videos">
              <button
                style={{
                  ...buttonStyle(theme),
                  width: "100%",
                  marginTop: 20,
                  padding: "12px 20px",
                  fontSize: 16,
                }}
              >
                Open Video Generator
              </button>
            </Link>
          </div>

          <div style={panelStyle(theme)}>
            <h3>Create Script</h3>
            <p style={{ opacity: 0.85 }}>Generate ad scripts instantly.</p>
            <Link to="/scripts">
              <button
                style={{
                  ...buttonStyle(theme),
                  width: "100%",
                  marginTop: 20,
                  padding: "12px 20px",
                  fontSize: 16,
                }}
              >
                Open Script Generator
              </button>
            </Link>
          </div>

          <div style={panelStyle(theme)}>
            <h3>Create Caption</h3>
            <p style={{ opacity: 0.85 }}>Generate captions for social media.</p>
            <Link to="/captions">
              <button
                style={{
                  ...buttonStyle(theme),
                  width: "100%",
                  marginTop: 20,
                  padding: "12px 20px",
                  fontSize: 16,
                }}
              >
                Open Caption Generator
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Your Projects
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85 }}>
            View and manage your active ad campaigns and content projects.
          </p>

          <Link to="/projects">
            <button
              style={{
                ...buttonStyle(theme),
                padding: "12px 20px",
                fontSize: 16,
                marginTop: 20,
              }}
            >
              Open Projects
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
