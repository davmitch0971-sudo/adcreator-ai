import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function SupportCenterPage() {
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

  const articleCard = {
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
        <h1 style={headingStyle}>Support Center</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Find answers, troubleshoot issues, and get help with AdCreator‑AI.
        </p>

        <button
          style={{
            ...buttonStyle(theme),
            padding: "12px 20px",
            fontSize: 16,
            marginTop: 20,
          }}
        >
          Contact Support
        </button>
      </section>

      {/* HELP ARTICLES */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Help Articles
        </h2>

        <div style={articleCard}>
          <h3>Getting Started with AdCreator‑AI</h3>
          <p style={{ opacity: 0.85 }}>
            Learn how to set up your account, brand, and first project.
          </p>
        </div>

        <div style={articleCard}>
          <h3>Fixing Video Export Issues</h3>
          <p style={{ opacity: 0.85 }}>
            Troubleshoot common problems with rendering and exporting videos.
          </p>
        </div>

        <div style={articleCard}>
          <h3>Managing Your Subscription</h3>
          <p style={{ opacity: 0.85 }}>
            Update billing, change plans, and download invoices.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Frequently Asked Questions
        </h2>

        <div style={panelStyle(theme)}>
          <ul style={{ lineHeight: 1.8 }}>
            <li>How do I upload assets?</li>
            <li>Why is my video taking long to export?</li>
            <li>How do I invite team members?</li>
            <li>Where can I update my billing info?</li>
          </ul>
        </div>
      </section>

      {/* SYSTEM STATUS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          System Status
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            All systems operational.
          </p>

          <div
            style={{
              height: 60,
              background: theme === "dark" ? "#1f2937" : "#e5e7eb",
              borderRadius: 10,
            }}
          ></div>
        </div>
      </section>
    </div>
  );
}
