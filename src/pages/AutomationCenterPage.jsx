import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AutomationCenterPage() {
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

  const workflowCard = {
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
        <h1 style={headingStyle}>Automation Center</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Build automated workflows that trigger AI actions, integrations, and publishing.
        </p>

        <button
          style={{
            ...buttonStyle(theme),
            padding: "12px 20px",
            fontSize: 16,
            marginTop: 20,
          }}
        >
          + New Workflow
        </button>
      </section>

      {/* EXISTING WORKFLOWS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Your Workflows
        </h2>

        <div style={workflowCard}>
          <h3>Auto‑Generate Captions</h3>
          <p style={{ opacity: 0.85 }}>Trigger: New video uploaded</p>
          <p style={{ opacity: 0.85 }}>Action: Generate 3 caption variations</p>
          <button style={{ ...buttonStyle(theme), padding: "8px 14px", marginTop: 10 }}>
            Edit Workflow
          </button>
        </div>

        <div style={workflowCard}>
          <h3>Auto‑Publish to Instagram</h3>
          <p style={{ opacity: 0.85 }}>Trigger: Video export completed</p>
          <p style={{ opacity: 0.85 }}>Action: Publish to connected Instagram account</p>
          <button style={{ ...buttonStyle(theme), padding: "8px 14px", marginTop: 10 }}>
            Edit Workflow
          </button>
        </div>
      </section>

      {/* WORKFLOW BUILDER */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Workflow Builder
        </h2>

        <div style={panelStyle(theme)}>
          <label>Trigger</label>
          <select style={inputStyle}>
            <option>New Asset Uploaded</option>
            <option>Video Export Completed</option>
            <option>Project Updated</option>
            <option>Scheduled Time</option>
          </select>

          <label>Action</label>
          <select style={inputStyle}>
            <option>Generate Captions</option>
            <option>Render Video</option>
            <option>Send Webhook</option>
            <option>Publish to Social Media</option>
          </select>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Save Workflow
          </button>
        </div>
      </section>

      {/* AUTOMATION LOGS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Automation Logs
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            View recent automation runs and their results.
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
