import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { panelStyle, inputStyle, buttonStyle } from "../styles/GlobalStyles";
import SaveProjectButton from "../components/SaveProjectButton";

export default function AiTaskOrchestrator() {
  const { theme } = useTheme();

  const [queueName, setQueueName] = useState("default");
  const [taskType, setTaskType] = useState("render");
  const [concurrency, setConcurrency] = useState("3");
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  const generatePlan = () => {
    if (!queueName.trim()) {
      return alert("Enter a queue name or environment label.");
    }

    setLoading(true);

    const queues = [
      {
        id: 1,
        name: "default",
        purpose: "General tasks (small jobs, non‑blocking operations).",
        examples: [
          "Metadata updates",
          "Analytics events",
          "Light transformations"
        ]
      },
      {
        id: 2,
        name: "render",
        purpose: "Heavy tasks (video, audio, image generation).",
        examples: [
          "Video renders",
          "Audio processing",
          "Image generation batches"
        ]
      },
      {
        id: 3,
        name: "critical",
        purpose: "High‑priority tasks that must run quickly.",
        examples: [
          "Billing events",
          "User role changes",
          "Project state transitions"
        ]
      }
    ];

    const workers = [
      {
        id: 1,
        name: "Render Worker",
        handles: [
          "Video render tasks",
          "Audio mixdown tasks",
          "Image generation tasks"
        ],
        notes:
          "Runs on a higher‑power environment; should be monitored for CPU/GPU usage."
      },
      {
        id: 2,
        name: "Background Worker",
        handles: [
          "Analytics aggregation",
          "Project cleanup",
          "Notification sending"
        ],
        notes:
          "Can run with higher concurrency; tasks are less time‑sensitive."
      },
      {
        id: 3,
        name: "Critical Worker",
        handles: [
          "Billing and subscription events",
          "Role and permission changes",
          "Workspace configuration updates"
        ],
        notes:
          "Low concurrency, strict logging, and strong retry rules."
      }
    ];

    const retryPolicy = {
      taskType,
      rules: [
        "Use exponential backoff for transient errors (network, timeouts).",
        "Limit retries for non‑idempotent tasks (billing, external webhooks).",
        "Mark tasks as ‘failed’ with clear reason after max retries.",
        "Provide a way to manually re‑queue failed tasks."
      ],
      visibility: [
        "Show retry count and last error in admin view.",
        "Allow filtering by status (pending, running, completed, failed)."
      ]
    };

    const taskLifecycle = {
      stages: [
        "Queued",
        "Picked up by worker",
        "Running",
        "Completed",
        "Failed / needs attention"
      ],
      metadata: [
        "Task ID",
        "Type (render, analytics, billing, etc.)",
        "Queue name",
        "Created at / updated at",
        "Attempts / retries",
        "Last error (if any)"
      ]
    };

    const monitoring = {
      dashboards: [
        "Queue depth per queue",
        "Task throughput (tasks per minute/hour)",
        "Failure rate per task type",
        "Average processing time per worker"
      ],
      alerts: [
        "Queue depth above threshold",
        "Failure rate spike",
        "Worker offline or not processing tasks",
        "Critical queue blocked"
      ]
    };

    const rateLimiting = {
      concepts: [
        "Per‑user limits (tasks per minute/hour).",
        "Per‑workspace limits (heavy tasks per day).",
        "Global limits to protect infrastructure.",
        "Soft vs. hard limits (warnings vs. blocks)."
      ],
      examples: [
        "Limit concurrent renders per workspace.",
        "Throttle image generation bursts.",
        "Prevent one user from saturating the system."
      ]
    };

    const orchestrationPatterns = [
      {
        id: 1,
        name: "Fan‑Out / Fan‑In",
        description:
          "Split a big job into smaller tasks, then aggregate results.",
        useCases: [
          "Rendering multiple scenes then stitching them.",
          "Processing multiple audio stems.",
          "Generating multiple image variations."
        ]
      },
      {
        id: 2,
        name: "Chained Tasks",
        description:
          "Run tasks in sequence where each depends on the previous.",
        useCases: [
          "Generate script → generate scenes → render video.",
          "Upload assets → process → publish.",
          "Analyze performance → update recommendations."
        ]
      },
      {
        id: 3,
        name: "Scheduled Tasks",
        description:
          "Run tasks on a schedule (cron‑like behavior).",
        useCases: [
          "Daily analytics aggregation.",
          "Nightly cleanup of old assets.",
          "Regular backups of project metadata."
        ]
      }
    ];

    setPlan({
      queueName,
      taskType,
      concurrency,
      queues,
      workers,
      retryPolicy,
      taskLifecycle,
      monitoring,
      rateLimiting,
      orchestrationPatterns
    });

    setLoading(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>AI Task Orchestrator</h1>

      <div style={{ ...panelStyle(theme), marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>Queue & Task Settings</h2>

        <input
          value={queueName}
          onChange={(e) => setQueueName(e.target.value)}
          placeholder="Queue name or environment (e.g., 'render', 'default', 'critical')."
          style={{ ...inputStyle(theme), marginBottom: 8 }}
        />

        <select
          value={taskType}
          onChange={(e) => setTaskType(e.target.value)}
          style={{ ...inputStyle(theme), marginBottom: 8 }}
        >
          <option value="render">Render / heavy compute</option>
          <option value="analytics">Analytics / aggregation</option>
          <option value="billing">Billing / subscriptions</option>
          <option value="notifications">Notifications / messaging</option>
        </select>

        <input
          value={concurrency}
          onChange={(e) => setConcurrency(e.target.value)}
          placeholder="Worker concurrency (e.g., 3, 5, 10)."
          style={{ ...inputStyle(theme), marginBottom: 8 }}
        />

        <button
          onClick={generatePlan}
          style={buttonStyle(theme)}
        >
          {loading ? "Building Task Orchestrator Plan..." : "Generate Task Orchestrator Plan"}
        </button>
      </div>

      {plan && (
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
              <h2 style={{ marginTop: 0 }}>Queues</h2>
              <p style={{ margin: 0 }}>
                <strong>Active Queue:</strong> {plan.queueName}
              </p>
              {plan.queues.map((q) => (
                <div
                  key={q.id}
                  style={{
                    marginTop: 8,
                    padding: 8,
                    borderRadius: 8,
                    background: theme === "dark" ? "#0f172a" : "#ffffff",
                    border: "1px solid rgba(148,163,184,0.35)"
                  }}
                >
                  <p style={{ margin: 0 }}>
                    <strong>{q.name}</strong>
                  </p>
                  <p style={{ marginTop: 2, fontSize: 13 }}>{q.purpose}</p>
                  <p style={{ marginTop: 4, fontSize: 13 }}>
                    <strong>Examples:</strong>
                  </p>
                  <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                    {q.examples.map((e, idx) => (
                      <li key={idx}>{e}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Workers</h2>
              <p style={{ margin: 0 }}>
                <strong>Target Concurrency:</strong> {plan.concurrency}
              </p>
              {plan.workers.map((w) => (
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
                  <p style={{ marginTop: 2, fontSize: 13 }}>
                    <strong>Handles:</strong>
                  </p>
                  <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                    {w.handles.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                  <p style={{ marginTop: 4, fontSize: 12, opacity: 0.7 }}>
                    {w.notes}
                  </p>
                </div>
              ))}
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Retry Policy</h2>
              <p style={{ margin: 0 }}>
                <strong>Task Type:</strong> {plan.retryPolicy.taskType}
              </p>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Rules:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plan.retryPolicy.rules.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Visibility:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plan.retryPolicy.visibility.map((v, idx) => (
                  <li key={idx}>{v}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Task Lifecycle</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Stages:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plan.taskLifecycle.stages.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Metadata:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plan.taskLifecycle.metadata.map((m, idx) => (
                  <li key={idx}>{m}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Monitoring & Alerts</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Dashboards:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plan.monitoring.dashboards.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Alerts:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plan.monitoring.alerts.map((a, idx) => (
                  <li key={idx}>{a}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Rate Limiting</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Concepts:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plan.rateLimiting.concepts.map((c, idx) => (
                  <li key={idx}>{c}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Examples:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plan.rateLimiting.examples.map((e, idx) => (
                  <li key={idx}>{e}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Orchestration Patterns</h2>
              {plan.orchestrationPatterns.map((p) => (
                <div
                  key={p.id}
                  style={{
                    marginBottom: 8,
                    padding: 8,
                    borderRadius: 8,
                    background: theme === "dark" ? "#0f172a" : "#ffffff",
                    border: "1px solid rgba(148,163,184,0.35)"
                  }}
                >
                  <p style={{ margin: 0 }}>
                    <strong>{p.name}</strong>
                  </p>
                  <p style={{ marginTop: 2, fontSize: 13 }}>
                    {p.description}
                  </p>
                  <p style={{ marginTop: 4, fontSize: 13 }}>
                    <strong>Use Cases:</strong>
                  </p>
                  <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                    {p.useCases.map((u, idx) => (
                      <li key={idx}>{u}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div style={panelStyle(theme)}>
            <h2 style={{ marginTop: 0 }}>Save Task Orchestrator Plan</h2>
            <SaveProjectButton
              brand={null}
              generator="AI Task Orchestrator"
              data={plan}
            />
          </div>
        </>
      )}
    </div>
  );
}
