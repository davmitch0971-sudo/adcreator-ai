import { useTheme } from "../context/ThemeContext";
import { buttonStyle, panelStyle } from "../styles/GlobalStyles";
import { Link } from "react-router-dom";

export default function ProjectManagerPage() {
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

  const projectCard = {
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
        <h1 style={headingStyle}>Project Manager</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Manage your ad campaigns, content projects, and creative workflows.
        </p>

        <Link to="/projects/new">
          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 20,
            }}
          >
            + New Project
          </button>
        </Link>
      </section>

      {/* ACTIVE PROJECTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Active Projects
        </h2>

        <div style={projectCard}>
          <h3 style={{ marginBottom: 6 }}>Summer Promo Campaign</h3>
          <p style={{ opacity: 0.85, marginBottom: 10 }}>
            Status: In Progress — 8 assets generated
          </p>
          <Link to="/projects/1">
            <button style={{ ...buttonStyle(theme), padding: "8px 14px" }}>
              Open Project
            </button>
          </Link>
        </div>

        <div style={projectCard}>
          <h3 style={{ marginBottom: 6 }}>New Product Launch</h3>
          <p style={{ opacity: 0.85, marginBottom: 10 }}>
            Status: Planning — 3 scripts drafted
          </p>
          <Link to="/projects/2">
            <button style={{ ...buttonStyle(theme), padding: "8px 14px" }}>
              Open Project
            </button>
          </Link>
        </div>
      </section>

      {/* COMPLETED PROJECTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Completed Projects
        </h2>

        <div style={projectCard}>
          <h3 style={{ marginBottom: 6 }}>Holiday Ads 2025</h3>
          <p style={{ opacity: 0.85, marginBottom: 10 }}>
            Status: Completed — 12 assets delivered
          </p>
          <Link to="/projects/3">
            <button style={{ ...buttonStyle(theme), padding: "8px 14px" }}>
              View Summary
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
