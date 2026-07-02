import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AICreatorCollaborationHubPage() {
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
        <h1 style={headingStyle}>AI Creator Collaboration Hub</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Manage teams, approvals, shared workspaces, versioning, and creative pipelines — all powered by AI.
        </p>
      </section>

      {/* TEAM SETUP */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Team Setup
        </h2>

        <div style={panelStyle(theme)}>
          <label>Team Name</label>
          <input
            type="text"
            placeholder="AdCreator‑AI Team"
            style={inputStyle}
          />

          <label>Invite Members</label>
          <input
            type="email"
            placeholder="Enter email to invite..."
            style={inputStyle}
          />

          <label>Role</label>
          <select style={inputStyle}>
            <option>Creator</option>
            <option>Editor</option>
            <option>Manager</option>
            <option>Client</option>
          </select>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Add Member
          </button>
        </div>
      </section>

      {/* WORKSPACES */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Shared Workspaces
        </h2>

        <div style={cardStyle}>
          <h3>Workspace Types</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Campaign Workspace — shared ads, scripts, funnels.</li>
            <li>Brand Workspace — shared brand assets & guidelines.</li>
            <li>Project Workspace — tasks, deadlines, deliverables.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Permissions</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>View only</li>
            <li>Comment only</li>
            <li>Edit</li>
            <li>Admin</li>
          </ul>
        </div>
      </section>

      {/* APPROVAL PIPELINE */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Approval Pipeline
        </h2>

        <div style={cardStyle}>
          <h3>Stages</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Draft</li>
            <li>Review</li>
            <li>Revisions</li>
            <li>Final Approval</li>
            <li>Published</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>AI Suggestions</h3>
          <p style={{ opacity: 0.85 }}>
            AI reviews drafts and suggests improvements before human approval.
          </p>
        </div>
      </section>

      {/* VERSION CONTROL */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Version Control
        </h2>

        <div style={cardStyle}>
          <h3>Version History</h3>
          <p style={{ opacity: 0.85 }}>
            Track every change, restore older versions, compare revisions.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>AI Diff Viewer</h3>
          <p style={{ opacity: 0.85 }}>
            AI highlights what changed between versions and why it matters.
          </p>
        </div>
      </section>

      {/* TASKS & PIPELINES */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Tasks & Pipelines
        </h2>

        <div style={cardStyle}>
          <h3>Task Types</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Creative tasks</li>
            <li>Review tasks</li>
            <li>Approval tasks</li>
            <li>Publishing tasks</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Pipeline Automation</h3>
          <p style={{ opacity: 0.85 }}>
            AI auto‑assigns tasks based on workload, skill, and deadlines.
          </p>
        </div>
      </section>

      {/* EXPORT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Export & Integrations
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            Export collaboration data or send it to the Campaign Builder.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            Export Collaboration Data
          </button>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Send to Campaign Builder
          </button>
        </div>
      </section>
    </div>
  );
}
