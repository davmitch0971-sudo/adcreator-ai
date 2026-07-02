import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { panelStyle, inputStyle, buttonStyle } from "../styles/GlobalStyles";
import SaveProjectButton from "../components/SaveProjectButton";

export default function AiTenantRuntime() {
  const { theme } = useTheme();

  const [tenantName, setTenantName] = useState("");
  const [region, setRegion] = useState("us");
  const [planTier, setPlanTier] = useState("pro");
  const [runtime, setRuntime] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateRuntime = () => {
    if (!tenantName.trim()) {
      return alert("Enter a tenant / workspace name for runtime planning.");
    }

    setLoading(true);

    const isolation = {
      tenantName,
      rules: [
        "Strict data isolation per tenant.",
        "Separate storage buckets or namespaces per tenant.",
        "Separate render queues per tenant or per plan tier.",
        "No cross‑tenant asset or project visibility by default."
      ],
      notes:
        "Isolation is the core of multi‑tenant SaaS; every resource must be traceable to a tenant boundary."
    };

    const quotas = {
      planTier,
      resources: [
        "Max projects per tenant.",
        "Max active renders per tenant.",
        "Max storage per tenant (hot/warm/cold).",
        "Max API calls per tenant per day."
      ],
      examples: [
        "Starter: low project count, limited renders, small storage.",
        "Pro: higher limits across projects, renders, and storage.",
        "Enterprise: custom quotas negotiated per contract."
      ]
    };

    const featureFlags = {
      planTier,
      flags: [
        "Enable/disable advanced modules per plan (Enterprise Suite, API Gateway, etc.).",
        "Gate experimental features behind flags.",
        "Allow per‑tenant overrides for specific capabilities.",
        "Support rollout strategies (percentage‑based, region‑based)."
      ],
      strategies: [
        "Gradual rollout to a subset of tenants.",
        "Region‑specific feature availability.",
        "Plan‑tier‑based feature gating."
      ]
    };

    const billingHooks = {
      events: [
        "tenant.created",
        "tenant.plan.changed",
        "tenant.quota.exceeded",
        "tenant.suspended",
        "tenant.reactivated"
      ],
      integrations: [
        "Call billing provider on plan changes.",
        "Sync usage metrics for overage billing.",
        "Trigger invoices or receipts on key events."
      ],
      safeguards: [
        "Never suspend a tenant without clear communication.",
        "Grace periods before hard enforcement.",
        "Audit trail for all billing‑related actions."
      ]
    };

    const deploymentProfiles = [
      {
        id: 1,
        name: "Single‑Region",
        description: "Tenant fully hosted in one region (e.g., US).",
        useCases: [
          "Smaller tenants.",
          "Non‑strict compliance requirements.",
          "Lower latency needs within one geography."
        ]
      },
      {
        id: 2,
        name: "Region‑Locked",
        description: "Tenant locked to a specific region (US/EU) for compliance.",
        useCases: [
          "EU data residency requirements.",
          "Region‑specific legal constraints.",
          "Enterprise contracts with region clauses."
        ]
      },
      {
        id: 3,
        name: "Multi‑Region",
        description: "Tenant deployed across multiple regions with routing.",
        useCases: [
          "Global brands.",
          "High‑availability requirements.",
          "Latency‑sensitive workloads."
        ]
      }
    ];

    const sandboxing = {
      layers: [
        "Per‑tenant sandbox for experiments.",
        "Separate ‘sandbox’ vs. ‘production’ environments.",
        "Configurable limits for sandbox to avoid runaway usage."
      ],
      flows: [
        "Promote configs from sandbox → production.",
        "Test new pipelines in sandbox before rollout.",
        "Isolate experimental features from core workloads."
      ]
    };

    const routing = {
      region,
      rules: [
        "Route tenant traffic to region‑specific infrastructure.",
        "Ensure storage, renders, and APIs respect region choice.",
        "Keep cross‑region data movement controlled and logged."
      ],
      examples: [
        "US tenants → US storage, US render farm, US API gateway.",
        "EU tenants → EU storage, EU render farm, EU API gateway.",
        "Global tenants → smart routing based on user location."
      ]
    };

    const monitoring = {
      views: [
        "Per‑tenant health dashboard (errors, latency, usage).",
        "Per‑tenant resource usage (storage, renders, API calls).",
        "Per‑tenant feature usage (which modules are actually used)."
      ],
      alerts: [
        "Error rate spikes per tenant.",
        "Quota nearing limits.",
        "Unusual traffic patterns (possible abuse or viral growth)."
      ]
    };

    setRuntime({
      tenantName,
      region,
      planTier,
      isolation,
      quotas,
      featureFlags,
      billingHooks,
      deploymentProfiles,
      sandboxing,
      routing,
      monitoring
    });

    setLoading(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>AI Tenant Runtime</h1>

      <div style={{ ...panelStyle(theme), marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>Tenant & Runtime Settings</h2>

        <input
          value={tenantName}
          onChange={(e) => setTenantName(e.target.value)}
          placeholder="Tenant / workspace name (e.g., 'AdCreator‑AI Cloud', 'Client Brand A')."
          style={{ ...inputStyle(theme), marginBottom: 8 }}
        />

        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          style={{ ...inputStyle(theme), marginBottom: 8 }}
        >
          <option value="us">US region</option>
          <option value="eu">EU region</option>
          <option value="global">Global / multi‑region</option>
        </select>

        <select
          value={planTier}
          onChange={(e) => setPlanTier(e.target.value)}
          style={{ ...inputStyle(theme), marginBottom: 8 }}
        >
          <option value="starter">Starter</option>
          <option value="pro">Pro</option>
          <option value="enterprise">Enterprise</option>
        </select>

        <button
          onClick={generateRuntime}
          style={buttonStyle(theme)}
        >
          {loading ? "Building Tenant Runtime..." : "Generate Tenant Runtime"}
        </button>
      </div>

      {runtime && (
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
              <h2 style={{ marginTop: 0 }}>Isolation</h2>
              <p style={{ margin: 0 }}>
                <strong>Tenant:</strong> {runtime.isolation.tenantName}
              </p>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Rules:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {runtime.isolation.rules.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
              <p style={{ marginTop: 6, fontSize: 12, opacity: 0.7 }}>
                {runtime.isolation.notes}
              </p>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Quotas & Resources</h2>
              <p style={{ margin: 0 }}>
                <strong>Plan Tier:</strong> {runtime.quotas.planTier}
              </p>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Resources:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {runtime.quotas.resources.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Examples:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {runtime.quotas.examples.map((e, idx) => (
                  <li key={idx}>{e}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Feature Flags</h2>
              <p style={{ margin: 0 }}>
                <strong>Plan Tier:</strong> {runtime.featureFlags.planTier}
              </p>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Flags:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {runtime.featureFlags.flags.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Strategies:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {runtime.featureFlags.strategies.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Billing Hooks</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Events:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {runtime.billingHooks.events.map((ev, idx) => (
                  <li key={idx}>{ev}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Integrations:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {runtime.billingHooks.integrations.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Safeguards:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {runtime.billingHooks.safeguards.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Deployment Profiles</h2>
              {runtime.deploymentProfiles.map((p) => (
                <div
                  key={p.id}
                  style={{
                    marginTop: 8,
                    padding: 8,
                    borderRadius: 8,
                    background: theme === "dark" ? "#0f172a" : "#ffffff",
                    border: "1px solid rgba(148,163,184,0.35)"
                  }}
                >
                  <p style={{ margin: 0 }}>
                    <strong>{p.name}</strong>
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
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Sandboxing</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Layers:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {runtime.sandboxing.layers.map((l, idx) => (
                  <li key={idx}>{l}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Flows:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {runtime.sandboxing.flows.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Region Routing</h2>
              <p style={{ margin: 0 }}>
                <strong>Region:</strong> {runtime.routing.region}
              </p>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Rules:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {runtime.routing.rules.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Examples:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {runtime.routing.examples.map((e, idx) => (
                  <li key={idx}>{e}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Monitoring & Alerts</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Views:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {runtime.monitoring.views.map((v, idx) => (
                  <li key={idx}>{v}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Alerts:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {runtime.monitoring.alerts.map((a, idx) => (
                  <li key={idx}>{a}</li>
                ))}
              </ul>
            </div>
          </div>

          <div style={panelStyle(theme)}>
            <h2 style={{ marginTop: 0 }}>Save Tenant Runtime Plan</h2>
            <SaveProjectButton
              brand={runtime.tenantName}
              generator="AI Tenant Runtime"
              data={runtime}
            />
          </div>
        </>
      )}
    </div>
  );
}
