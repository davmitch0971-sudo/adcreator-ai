import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { panelStyle, inputStyle, buttonStyle } from "../styles/GlobalStyles";
import SaveProjectButton from "../components/SaveProjectButton";

export default function AiEnterpriseSuite() {
  const { theme } = useTheme();

  const [orgName, setOrgName] = useState("");
  const [teamSize, setTeamSize] = useState("1-5");
  const [securityLevel, setSecurityLevel] = useState("standard");
  const [suite, setSuite] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateSuite = () => {
    if (!orgName.trim()) {
      return alert("Enter an organization or company name.");
    }

    setLoading(true);

    const adminConsole = {
      sections: [
        {
          id: 1,
          name: "Workspace Overview",
          items: [
            "Active projects",
            "Active users",
            "Usage by module (creation, production, distribution, etc.)"
          ]
        },
        {
          id: 2,
          name: "Access & Roles",
          items: [
            "Invite / remove users",
            "Assign roles (Admin, Producer, Editor, Viewer)",
            "Manage teams / departments"
          ]
        },
        {
          id: 3,
          name: "Billing & Plans",
          items: [
            "Plan type and limits",
            "Invoices and payment history",
            "Upgrade / downgrade options"
          ]
        }
      ]
    };

    const roles = [
      {
        id: 1,
        name: "Admin",
        permissions: [
          "Manage billing and plans",
          "Invite / remove users",
          "Set workspace‑wide settings",
          "Access all projects and modules"
        ]
      },
      {
        id: 2,
        name: "Producer",
        permissions: [
          "Create and manage projects",
          "Use all creation and production modules",
          "Assign tasks to editors",
          "View analytics for their projects"
        ]
      },
      {
        id: 3,
        name: "Editor",
        permissions: [
          "Access assigned projects",
          "Use editing and post‑production modules",
          "Upload and export assets"
        ]
      },
      {
        id: 4,
        name: "Viewer",
        permissions: [
          "View projects and analytics",
          "Comment and give feedback",
          "No editing or billing access"
        ]
      }
    ];

    const billingWorkspace = {
      models: [
        {
          id: 1,
          name: "Per‑Seat",
          description:
            "Charge per active user with role‑based pricing (Admin/Producer higher, Editor/Viewer lower)."
        },
        {
          id: 2,
          name: "Usage‑Based",
          description:
            "Charge based on render minutes, storage, or number of projects."
        },
        {
          id: 3,
          name: "Hybrid",
          description:
            "Base per‑seat fee plus usage overages for heavy production teams."
        }
      ],
      controls: [
        "Set workspace‑level limits",
        "Lock modules behind plan tiers",
        "Export billing reports for finance"
      ]
    };

    const auditLogs = {
      securityLevel,
      events: [
        "User invites and removals",
        "Role changes",
        "Project creation, deletion, and exports",
        "Billing changes and plan updates",
        "Login attempts and SSO events"
      ],
      views: [
        "Timeline view of events",
        "Filter by user, project, or module",
        "Export logs for compliance"
      ]
    };

    const complianceMode = {
      securityLevel,
      options: [
        "Strict asset deletion rules",
        "Region‑aware storage preferences (e.g., US/EU)",
        "Limited external sharing",
        "Mandatory audit logging for key actions"
      ],
      notes:
        "Compliance mode is for teams that need predictable behavior, clear logs, and restricted access to sensitive actions."
    };

    const sso = {
      providers: [
        "Google Workspace",
        "Microsoft 365",
        "Custom SSO (SAML / OAuth)"
      ],
      benefits: [
        "Centralized identity management",
        "Faster onboarding and offboarding",
        "Reduced password management",
        "Aligns with existing IT policies"
      ]
    };

    const workspaces = {
      teamSize,
      patterns: [
        {
          id: 1,
          name: "Single Brand Workspace",
          description:
            "One workspace per brand or company, with teams for production, marketing, and analytics."
        },
        {
          id: 2,
          name: "Agency / Studio Workspace",
          description:
            "One workspace with multiple client projects, role‑based access per client."
        },
        {
          id: 3,
          name: "Enterprise Multi‑Workspace",
          description:
            "Multiple workspaces under one org, each mapped to a region, department, or brand line."
        }
      ]
    };

    const enterpriseAnalytics = {
      views: [
        "Usage by team and role",
        "Module adoption (which tools are used most)",
        "Project throughput (created → produced → shipped)",
        "Revenue impact (if connected to business metrics)"
      ],
      questions: [
        "Which teams are shipping the most content?",
        "Which modules drive the most output?",
        "Where are projects getting stuck?",
        "Which brands or departments are under‑utilizing the platform?"
      ]
    };

    setSuite({
      orgName,
      teamSize,
      securityLevel,
      adminConsole,
      roles,
      billingWorkspace,
      auditLogs,
      complianceMode,
      sso,
      workspaces,
      enterpriseAnalytics
    });

    setLoading(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>AI Enterprise Suite</h1>

      <div style={{ ...panelStyle(theme), marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>Organization & Settings</h2>

        <input
          value={orgName}
          onChange={(e) => setOrgName(e.target.value)}
          placeholder="Organization / company name (e.g., 'AdCreator‑AI Studios', 'Client Media Group')."
          style={{ ...inputStyle(theme), marginBottom: 8 }}
        />

        <select
          value={teamSize}
          onChange={(e) => setTeamSize(e.target.value)}
          style={{ ...inputStyle(theme), marginBottom: 8 }}
        >
          <option value="1-5">1–5 (small team)</option>
          <option value="6-20">6–20 (studio / agency)</option>
          <option value="21-100">21–100 (department)</option>
          <option value="100+">100+ (enterprise)</option>
        </select>

        <select
          value={securityLevel}
          onChange={(e) => setSecurityLevel(e.target.value)}
          style={{ ...inputStyle(theme), marginBottom: 8 }}
        >
          <option value="standard">Standard</option>
          <option value="elevated">Elevated</option>
          <option value="strict">Strict / compliance‑heavy</option>
        </select>

        <button
          onClick={generateSuite}
          style={buttonStyle(theme)}
        >
          {loading ? "Building Enterprise Suite..." : "Generate Enterprise Suite"}
        </button>
      </div>

      {suite && (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 12,
              marginBottom: 16
            }}
          >
            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Admin Console</h2>
              {suite.adminConsole.sections.map((s) => (
                <div
                  key={s.id}
                  style={{
                    marginBottom: 8,
                    padding: 8,
                    borderRadius: 8,
                    background: theme === "dark" ? "#0f172a" : "#ffffff",
                    border: "1px solid rgba(148,163,184,0.35)"
                  }}
                >
                  <p style={{ margin: 0 }}>
                    <strong>{s.name}</strong>
                  </p>
                  <ul style={{ marginTop: 4, paddingLeft: 18 }}>
                    {s.items.map((i, idx) => (
                      <li key={idx}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Roles & Permissions</h2>
              {suite.roles.map((r) => (
                <div
                  key={r.id}
                  style={{
                    marginBottom: 8,
                    padding: 8,
                    borderRadius: 8,
                    background: theme === "dark" ? "#0f172a" : "#ffffff",
                    border: "1px solid rgba(148,163,184,0.35)"
                  }}
                >
                  <p style={{ margin: 0 }}>
                    <strong>{r.name}</strong>
                  </p>
                  <ul style={{ marginTop: 4, paddingLeft: 18 }}>
                    {r.permissions.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Workspace Billing Models</h2>
              {suite.billingWorkspace.models.map((m) => (
                <div
                  key={m.id}
                  style={{
                    marginBottom: 8,
                    padding: 8,
                    borderRadius: 8,
                    background: theme === "dark" ? "#0f172a" : "#ffffff",
                    border: "1px solid rgba(148,163,184,0.35)"
                  }}
                >
                  <p style={{ margin: 0 }}>
                    <strong>{m.name}</strong>
                  </p>
                  <p style={{ marginTop: 2, fontSize: 13 }}>{m.description}</p>
                </div>
              ))}
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Controls:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {suite.billingWorkspace.controls.map((c, idx) => (
                  <li key={idx}>{c}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Audit Logs & Compliance</h2>
              <p style={{ margin: 0 }}>
                <strong>Security Level:</strong> {suite.auditLogs.securityLevel}
              </p>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Tracked Events:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {suite.auditLogs.events.map((e, idx) => (
                  <li key={idx}>{e}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Views:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {suite.auditLogs.views.map((v, idx) => (
                  <li key={idx}>{v}</li>
                ))}
              </ul>
              <p style={{ marginTop: 8, fontSize: 13 }}>
                <strong>Compliance Mode Options:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {suite.complianceMode.options.map((o, idx) => (
                  <li key={idx}>{o}</li>
                ))}
              </ul>
              <p style={{ marginTop: 6, fontSize: 12, opacity: 0.7 }}>
                {suite.complianceMode.notes}
              </p>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>SSO & Identity</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Providers:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {suite.sso.providers.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Benefits:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {suite.sso.benefits.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Team Workspaces</h2>
              <p style={{ margin: 0 }}>
                <strong>Team Size:</strong> {suite.workspaces.teamSize}
              </p>
              {suite.workspaces.patterns.map((w) => (
                <div
                  key={w.id}
                  style={{
                    marginTop: 8,
                    padding: 8,
                    borderRadius: 8,
                    background: theme === "dark" ? "#0f172a" : "#ffffff",
                    border: "1px solid rgba(148,163,184,0.35)"
                  }}
                >
                  <p style={{ margin: 0 }}>
                    <strong>{w.name}</strong>
                  </p>
                  <p style={{ marginTop: 2, fontSize: 13 }}>{w.description}</p>
                </div>
              ))}
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Enterprise Analytics</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Views:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {suite.enterpriseAnalytics.views.map((v, idx) => (
                  <li key={idx}>{v}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Key Questions:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {suite.enterpriseAnalytics.questions.map((q, idx) => (
                  <li key={idx}>{q}</li>
                ))}
              </ul>
            </div>
          </div>

          <div style={panelStyle(theme)}>
            <h2 style={{ marginTop: 0 }}>Save Enterprise Suite</h2>
            <SaveProjectButton
              brand={suite.orgName}
              generator="AI Enterprise Suite"
              data={suite}
            />
          </div>
        </>
      )}
    </div>
  );
}
