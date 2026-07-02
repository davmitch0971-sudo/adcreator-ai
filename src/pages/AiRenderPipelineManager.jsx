import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { panelStyle, inputStyle, buttonStyle } from "../styles/GlobalStyles";
import SaveProjectButton from "../components/SaveProjectButton";

export default function AiRenderPipelineManager() {
  const { theme } = useTheme();

  const [pipelineName, setPipelineName] = useState("Standard Render");
  const [priority, setPriority] = useState("normal");
  const [gpuTier, setGpuTier] = useState("shared");
  const [manager, setManager] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateManager = () => {
    if (!pipelineName.trim()) {
      return alert("Enter a pipeline name (e.g., 'YT Longform v1', 'Shorts Fast Render').");
    }

    setLoading(true);

    const stages = [
      {
        id: 1,
        name: "Pre‑Process",
        description: "Prepare assets and metadata before heavy rendering.",
        steps: [
          "Validate project structure",
          "Check asset availability",
          "Lock project state for render",
          "Generate render manifest"
        ]
      },
      {
        id: 2,
        name: "Scene Render",
        description: "Render individual scenes or segments.",
        steps: [
          "Queue scene tasks to render workers",
          "Track per‑scene progress",
          "Handle scene‑level retries",
          "Store intermediate outputs"
        ]
      },
      {
        id: 3,
        name: "Assembly & Mixdown",
        description: "Combine scenes, audio, and effects into final output.",
        steps: [
          "Stitch scenes in order",
          "Apply transitions and overlays",
          "Mix audio stems and music",
          "Apply final color and sound pass"
        ]
      },
      {
        id: 4,
        name: "Export & Delivery",
        description: "Export final file and deliver to destination.",
        steps: [
          "Encode to target format(s)",
          "Upload to storage / CDN",
          "Trigger webhooks or notifications",
          "Update project status to ‘Rendered’"
        ]
      }
    ];

    const queues = [
      {
        id: 1,
        name: "render-gpu",
        purpose: "GPU‑heavy tasks (video, complex effects).",
        examples: [
          "4K video renders",
          "Heavy motion graphics",
          "Complex color grading"
        ]
      },
      {
        id: 2,
        name: "render-cpu",
        purpose: "CPU‑bound tasks (encoding, audio mixdown).",
        examples: [
          "Final export encoding",
          "Audio processing",
          "Thumbnail generation"
        ]
      },
      {
        id: 3,
        name: "render-control",
        purpose: "Control plane tasks for orchestration.",
        examples: [
          "Pipeline state updates",
          "Retry scheduling",
          "Webhook triggers"
        ]
      }
    ];

    const priorities = [
      {
        id: 1,
        level: "low",
        description: "Background renders; non‑urgent, can wait.",
        useCases: [
          "Internal previews",
          "Non‑deadline content",
          "Batch backfills"
        ]
      },
      {
        id: 2,
        level: "normal",
        description: "Standard renders; typical turnaround.",
        useCases: [
          "Regular content pipeline",
          "Scheduled uploads",
          "Client deliverables with buffer"
        ]
      },
      {
        id: 3,
        level: "high",
        description: "Time‑sensitive renders; prioritized in queues.",
        useCases: [
          "Launch‑day content",
          "Live event recaps",
          "Urgent client revisions"
        ]
      }
    ];

    const gpuConfig = {
      gpuTier,
      options: [
        "Shared GPU pool for most work.",
        "Dedicated GPU for high‑priority pipelines.",
        "Tiered GPU allocation based on plan.",
        "Fallback to CPU for light tasks when GPU is saturated."
      ],
      notes:
        "GPU tier determines how aggressively heavy tasks are scheduled and how much isolation high‑priority pipelines receive."
    };

    const retries = {
      rules: [
        "Scene‑level retries for transient render errors.",
        "Limit retries for full‑pipeline failures; prefer partial re‑runs.",
        "Mark failed scenes clearly and allow manual re‑queue.",
        "Separate ‘technical failure’ from ‘content failure’ (bad assets)."
      ],
      visibility: [
        "Show per‑scene status (pending, rendering, completed, failed).",
        "Expose pipeline‑level health overview.",
        "Log error messages with context (stage, worker, asset)."
      ]
    };

    const progressTracking = {
      views: [
        "Pipeline progress bar (0–100%).",
        "Scene list with individual progress.",
        "Estimated time remaining based on historical data.",
        "Per‑stage timing breakdown (pre‑process, render, mixdown, export)."
      ],
      notifications: [
        "Start of render pipeline.",
        "Stage transitions (e.g., ‘Scene Render → Mixdown’).",
        "Completion of pipeline.",
        "Failure with clear reason and suggested actions."
      ]
    };

    const webhooks = {
      events: [
        "Pipeline started",
        "Pipeline completed",
        "Pipeline failed",
        "Scene completed",
        "Export uploaded"
      ],
      destinations: [
        "Client systems (if white‑labelled).",
        "Internal dashboards.",
        "Notification services (email, Slack, etc.)."
      ],
      notes:
        "Webhooks allow external systems to react to render lifecycle events without polling."
    };

    const logging = {
      layers: [
        "Per‑task logs (scene, export, mixdown).",
        "Per‑pipeline logs (overall state, transitions).",
        "Infrastructure logs (worker health, queue depth)."
      ],
      queries: [
        "Find all failed scenes for a pipeline.",
        "See render history for a project.",
        "Inspect performance per worker or GPU tier."
      ]
    };

    setManager({
      pipelineName,
      priority,
      gpuTier,
      stages,
      queues,
      priorities,
      gpuConfig,
      retries,
      progressTracking,
      webhooks,
      logging
    });

    setLoading(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>AI Render Pipeline Manager</h1>

      <div style={{ ...panelStyle(theme), marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>Pipeline Settings</h2>

        <input
          value={pipelineName}
          onChange={(e) => setPipelineName(e.target.value)}
          placeholder="Pipeline name (e.g., 'YT Longform v1', 'Shorts Fast Render')."
          style={{ ...inputStyle(theme), marginBottom: 8 }}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          style={{ ...inputStyle(theme), marginBottom: 8 }}
        >
          <option value="low">Low priority</option>
          <option value="normal">Normal priority</option>
          <option value="high">High priority</option>
        </select>

        <select
          value={gpuTier}
          onChange={(e) => setGpuTier(e.target.value)}
          style={{ ...inputStyle(theme), marginBottom: 8 }}
        >
          <option value="shared">Shared GPU pool</option>
          <option value="dedicated">Dedicated GPU</option>
          <option value="hybrid">Hybrid (GPU + CPU)</option>
        </select>

        <button
          onClick={generateManager}
          style={buttonStyle(theme)}
        >
          {loading ? "Building Render Pipeline Manager..." : "Generate Render Pipeline Manager"}
        </button>
      </div>

      {manager && (
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
              <h2 style={{ marginTop: 0 }}>Pipeline Stages</h2>
              <p style={{ margin: 0 }}>
                <strong>Pipeline:</strong> {manager.pipelineName}
              </p>
              {manager.stages.map((s) => (
                <div
                  key={s.id}
                  style={{
                    marginTop: 8,
                    padding: 8,
                    borderRadius: 8,
                    background: theme === "dark" ? "#0f172a" : "#ffffff",
                    border: "1px solid rgba(148,163,184,0.35)"
                  }}
                >
                  <p style={{ margin: 0 }}>
                    <strong>{s.name}</strong>
                  </p>
                  <p style={{ marginTop: 2, fontSize: 13 }}>{s.description}</p>
                  <p style={{ marginTop: 4, fontSize: 13 }}>
                    <strong>Steps:</strong>
                  </p>
                  <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                    {s.steps.map((st, idx) => (
                      <li key={idx}>{st}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Render Queues</h2>
              {manager.queues.map((q) => (
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
              <h2 style={{ marginTop: 0 }}>Priority & GPU Tier</h2>
              <p style={{ margin: 0 }}>
                <strong>Priority:</strong> {manager.priority}
              </p>
              <p style={{ marginTop: 2 }}>
                <strong>GPU Tier:</strong> {manager.gpuTier}
              </p>
              <p style={{ marginTop: 6, fontSize: 13 }}>
                <strong>Priority Levels:</strong>
              </p>
              {manager.priorities.map((p) => (
                <div
                  key={p.id}
                  style={{
                    marginTop: 6,
                    padding: 8,
                    borderRadius: 8,
                    background: theme === "dark" ? "#0f172a" : "#ffffff",
                    border: "1px solid rgba(148,163,184,0.35)"
                  }}
                >
                  <p style={{ margin: 0 }}>
                    <strong>{p.level}</strong>
                  </p>
                  <p style={{ marginTop: 2, fontSize: 13 }}>{p.description}</p>
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
              <p style={{ marginTop: 8, fontSize: 13 }}>
                <strong>GPU Config Notes:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {manager.gpuConfig.options.map((o, idx) => (
                  <li key={idx}>{o}</li>
                ))}
              </ul>
              <p style={{ marginTop: 6, fontSize: 12, opacity: 0.7 }}>
                {manager.gpuConfig.notes}
              </p>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Retries & Failure Handling</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Rules:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {manager.retries.rules.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Visibility:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {manager.retries.visibility.map((v, idx) => (
                  <li key={idx}>{v}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Progress Tracking</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Views:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {manager.progressTracking.views.map((v, idx) => (
                  <li key={idx}>{v}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Notifications:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {manager.progressTracking.notifications.map((n, idx) => (
                  <li key={idx}>{n}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Webhooks & Events</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Events:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {manager.webhooks.events.map((e, idx) => (
                  <li key={idx}>{e}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Destinations:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {manager.webhooks.destinations.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
              <p style={{ marginTop: 6, fontSize: 12, opacity: 0.7 }}>
                {manager.webhooks.notes}
              </p>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Logging & Observability</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Layers:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {manager.logging.layers.map((l, idx) => (
                  <li key={idx}>{l}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Key Queries:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {manager.logging.queries.map((q, idx) => (
                  <li key={idx}>{q}</li>
                ))}
              </ul>
            </div>
          </div>

          <div style={panelStyle(theme)}>
            <h2 style={{ marginTop: 0 }}>Save Render Pipeline Manager</h2>
            <SaveProjectButton
              brand={null}
              generator="AI Render Pipeline Manager"
              data={manager}
            />
          </div>
        </>
      )}
    </div>
  );
}
