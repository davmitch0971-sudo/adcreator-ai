import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { panelStyle, inputStyle, buttonStyle } from "../styles/GlobalStyles";
import SaveProjectButton from "../components/SaveProjectButton";

export default function AiApiGateway() {
  const { theme } = useTheme();

  const [workspaceName, setWorkspaceName] = useState("");
  const [rateTier, setRateTier] = useState("standard");
  const [authMode, setAuthMode] = useState("api-keys");
  const [gateway, setGateway] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateGateway = () => {
    if (!workspaceName.trim()) {
      return alert("Enter a workspace or tenant name for API planning.");
    }

    setLoading(true);

    const endpoints = [
      {
        id: 1,
        group: "Projects",
        basePath: "/api/projects",
        routes: [
          "GET /api/projects        → list projects",
          "POST /api/projects       → create project",
          "GET /api/projects/:id    → get project",
          "PATCH /api/projects/:id  → update project",
          "DELETE /api/projects/:id → archive/delete project"
        ]
      },
      {
        id: 2,
        group: "Renders",
        basePath: "/api/renders",
        routes: [
          "POST /api/renders        → start render pipeline",
          "GET /api/renders/:id     → get render status",
          "GET /api/renders/:id/logs → fetch render logs",
          "POST /api/renders/:id/retry → retry failed render"
        ]
      },
      {
        id: 3,
        group: "Assets",
        basePath: "/api/assets",
        routes: [
          "POST /api/assets/upload  → request upload URL",
          "GET /api/assets/:id      → get asset metadata",
          "DELETE /api/assets/:id   → delete asset",
          "GET /api/assets/search   → search assets by metadata"
        ]
      },
      {
        id: 4,
        group: "Webhooks",
        basePath: "/api/webhooks",
        routes: [
          "POST /api/webhooks       → register webhook endpoint",
          "GET /api/webhooks        → list webhooks",
          "DELETE /api/webhooks/:id → remove webhook"
        ]
      }
    ];

    const auth = {
      mode: authMode,
      options: [
        "Workspace‑scoped API keys.",
        "Per‑user tokens (for user‑level integrations).",
        "Optional OAuth for external apps.",
        "Signed URLs for asset access."
      ],
      rules: [
        "Rotate keys regularly and allow manual rotation.",
        "Scope keys to workspace and optionally to specific capabilities.",
        "Log all key creation, rotation, and revocation.",
        "Never expose raw secrets in UI; show partial only."
      ]
    };

    const rateLimiting = {
      rateTier,
      policies: [
        "Per‑workspace request limits (per minute/hour/day).",
        "Per‑key limits to prevent abuse.",
        "Burst handling with short‑term higher limits but enforced averages.",
        "Separate limits for heavy endpoints (renders, uploads)."
      ],
      examples: [
        "Starter: lower global limits, strict heavy‑endpoint caps.",
        "Pro: higher limits, more generous burst handling.",
        "Enterprise: custom limits per workspace and integration."
      ]
    };

    const quotas = {
      rules: [
        "API call quotas per billing plan.",
        "Separate quotas for heavy operations (renders, asset uploads).",
        "Soft warnings at 80–90% usage.",
        "Hard caps with clear error responses when exceeded."
      ],
      responses: [
        "Return structured error with code and message.",
        "Include current usage and limit in quota errors.",
        "Suggest upgrade path or cleanup actions."
      ]
    };

    const webhooks = {
      events: [
        "project.created",
        "project.updated",
        "render.started",
        "render.completed",
        "render.failed",
        "asset.uploaded",
        "asset.deleted"
      ],
      delivery: [
        "Signed payloads with secret per webhook.",
        "Retry with backoff on 4xx/5xx responses.",
        "Dead‑letter queue for permanently failing deliveries."
      ],
      management: [
        "Per‑workspace webhook registry.",
        "Test delivery endpoint.",
        "Logs of recent deliveries and failures."
      ]
    };

    const isolation = {
      workspaceName,
      rules: [
        "All API calls scoped to workspace via key or token.",
        "No cross‑workspace data leakage.",
        "Optional multi‑workspace keys for agencies with explicit config."
      ],
      notes:
        "Isolation is critical for multi‑tenant SaaS; every request must be traceable to a tenant."
    };

    const logging = {
      layers: [
        "Per‑request logs (method, path, status, latency).",
        "Per‑key usage logs (counts, endpoints used).",
        "Per‑workspace API usage dashboards."
      ],
      queries: [
        "Find top endpoints by usage.",
        "Detect unusual spikes per key.",
        "Audit calls for a specific workspace or project."
      ]
    };

    const errorHandling = {
      patterns: [
        "Consistent JSON error format with code, message, and details.",
        "Clear distinction between client errors (4xx) and server errors (5xx).",
        "Correlation IDs for tracing across systems.",
        "Graceful degradation when downstream systems are slow."
      ],
      examples: [
        "RATE_LIMIT_EXCEEDED",
        "QUOTA_EXCEEDED",
        "INVALID_API_KEY",
        "WORKSPACE_NOT_FOUND",
        "RENDER_PIPELINE_UNAVAILABLE"
      ]
    };

    setGateway({
      workspaceName,
      rateTier,
      authMode,
      endpoints,
      auth,
      rateLimiting,
      quotas,
      webhooks,
      isolation,
      logging,
      errorHandling
    });

    setLoading(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>AI API Gateway</h1>

      <div style={{ ...panelStyle(theme), marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>Workspace & API Settings</h2>

        <input
          value={workspaceName}
          onChange={(e) => setWorkspaceName(e.target.value)}
          placeholder="Workspace / tenant name (e.g., 'AdCreator‑AI Cloud', 'Client Brand A')."
          style={{ ...inputStyle(theme), marginBottom: 8 }}
        />

        <select
          value={rateTier}
          onChange={(e) => setRateTier(e.target.value)}
          style={{ ...inputStyle(theme), marginBottom: 8 }}
        >
          <option value="standard">Standard rate limits</option>
          <option value="high">High‑throughput (Pro/Enterprise)</option>
          <option value="strict">Strict (sandbox / trial)</option>
        </select>

        <select
          value={authMode}
          onChange={(e) => setAuthMode(e.target.value)}
          style={{ ...inputStyle(theme), marginBottom: 8 }}
        >
          <option value="api-keys">API keys</option>
          <option value="tokens">User tokens</option>
          <option value="hybrid">Hybrid (keys + tokens)</option>
        </select>

        <button
          onClick={generateGateway}
          style={buttonStyle(theme)}
        >
          {loading ? "Building API Gateway Plan..." : "Generate API Gateway Plan"}
        </button>
      </div>

      {gateway && (
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
              <h2 style={{ marginTop: 0 }}>Endpoints</h2>
              <p style={{ margin: 0 }}>
                <strong>Workspace:</strong> {gateway.workspaceName}
              </p>
              {gateway.endpoints.map((e) => (
                <div
                  key={e.id}
                  style={{
                    marginTop: 8,
                    padding: 8,
                    borderRadius: 8,
                    background: theme === "dark" ? "#0f172a" : "#ffffff",
                    border: "1px solid rgba(148,163,184,0.35)"
                  }}
                >
                  <p style={{ margin: 0 }}>
                    <strong>{e.group}</strong> ({e.basePath})
                  </p>
                  <ul style={{ marginTop: 4, paddingLeft: 18 }}>
                    {e.routes.map((r, idx) => (
                      <li key={idx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Auth & Keys</h2>
              <p style={{ margin: 0 }}>
                <strong>Auth Mode:</strong> {gateway.auth.mode}
              </p>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Options:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {gateway.auth.options.map((o, idx) => (
                  <li key={idx}>{o}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Rules:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {gateway.auth.rules.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Rate Limiting</h2>
              <p style={{ margin: 0 }}>
                <strong>Rate Tier:</strong> {gateway.rateLimiting.rateTier}
              </p>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Policies:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {gateway.rateLimiting.policies.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Examples:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {gateway.rateLimiting.examples.map((ex, idx) => (
                  <li key={idx}>{ex}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Quotas & Responses</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Rules:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {gateway.quotas.rules.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Error Responses:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {gateway.quotas.responses.map((res, idx) => (
                  <li key={idx}>{res}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Webhooks</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Events:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {gateway.webhooks.events.map((ev, idx) => (
                  <li key={idx}>{ev}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Delivery:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {gateway.webhooks.delivery.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Management:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {gateway.webhooks.management.map((m, idx) => (
                  <li key={idx}>{m}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Workspace Isolation</h2>
              <p style={{ margin: 0 }}>
                <strong>Workspace:</strong> {gateway.isolation.workspaceName}
              </p>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Rules:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {gateway.isolation.rules.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
              <p style={{ marginTop: 6, fontSize: 12, opacity: 0.7 }}>
                {gateway.isolation.notes}
              </p>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Logging & Observability</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Layers:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {gateway.logging.layers.map((l, idx) => (
                  <li key={idx}>{l}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Key Queries:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {gateway.logging.queries.map((q, idx) => (
                  <li key={idx}>{q}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Error Handling</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Patterns:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {gateway.errorHandling.patterns.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Example Codes:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {gateway.errorHandling.examples.map((ex, idx) => (
                  <li key={idx}>{ex}</li>
                ))}
              </ul>
            </div>
          </div>

          <div style={panelStyle(theme)}>
            <h2 style={{ marginTop: 0 }}>Save API Gateway Plan</h2>
            <SaveProjectButton
              brand={gateway.workspaceName}
              generator="AI API Gateway"
              data={gateway}
            />
          </div>
        </>
      )}
    </div>
  );
}
