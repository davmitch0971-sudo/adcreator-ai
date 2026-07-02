import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { panelStyle, inputStyle, buttonStyle } from "../styles/GlobalStyles";
import SaveProjectButton from "../components/SaveProjectButton";

export default function AiCloudControlPlane() {
  const { theme } = useTheme();

  const [cloudName, setCloudName] = useState("AdCreator‑AI Cloud");
  const [primaryRegion, setPrimaryRegion] = useState("us");
  const [mode, setMode] = useState("production");
  const [plane, setPlane] = useState(null);
  const [loading, setLoading] = useState(false);

  const generatePlane = () => {
    if (!cloudName.trim()) {
      return alert("Enter a cloud / platform name for control plane planning.");
    }

    setLoading(true);

    const tenantRegistry = {
      cloudName,
      fields: [
        "Tenant ID",
        "Tenant name",
        "Plan tier (Starter / Pro / Enterprise)",
        "Primary region (US / EU / Global)",
        "Status (active / suspended / trial)",
        "Created at / updated at"
      ],
      actions: [
        "Provision new tenant.",
        "Change plan tier.",
        "Change region routing.",
        "Suspend / reactivate tenant.",
        "View tenant health and usage."
      ]
    };

    const regionMap = {
      primaryRegion,
      regions: [
        {
          id: 1,
          name: "US",
          roles: [
            "Primary region for US‑based tenants.",
            "Hosts US render farms.",
            "Hosts US storage buckets.",
            "Hosts US API gateway."
          ]
        },
        {
          id: 2,
          name: "EU",
          roles: [
            "Primary region for EU‑based tenants.",
            "EU data residency compliance.",
            "Hosts EU render farms.",
            "Hosts EU storage buckets and API gateway."
          ]
        },
        {
          id: 3,
          name: "Global",
          roles: [
            "Routing layer for global tenants.",
            "Latency‑aware routing.",
            "Fallback routing for cross‑region workloads."
          ]
        }
      ]
    };

    const renderFarmMap = {
      farms: [
        {
          id: 1,
          name: "US Render Farm",
          region: "US",
          notes: "Handles US tenants’ render pipelines and high‑throughput workloads."
        },
        {
          id: 2,
          name: "EU Render Farm",
          region: "EU",
          notes: "Handles EU tenants’ render pipelines with data residency constraints."
        },
        {
          id: 3,
          name: "Global Render Farm",
          region: "Global",
          notes: "Optional global pool for overflow or special workloads."
        }
      ],
      controls: [
        "Scale render workers up/down per region.",
        "Route heavy tenants to dedicated pools.",
        "Monitor render queue depth and latency."
      ]
    };

    const storageMap = {
      buckets: [
        {
          id: 1,
          name: "US‑Hot / US‑Warm / US‑Cold",
          region: "US",
          notes: "Tiered storage for US tenants."
        },
        {
          id: 2,
          name: "EU‑Hot / EU‑Warm / EU‑Cold",
          region: "EU",
          notes: "Tiered storage for EU tenants with residency guarantees."
        },
        {
          id: 3,
          name: "Global‑Archive",
          region: "Global",
          notes: "Optional cross‑region archive for special tenants."
        }
      ],
      policies: [
        "Per‑tenant storage quotas enforced at bucket level.",
        "Lifecycle rules per region and plan tier.",
        "Strict separation of tenant namespaces inside buckets."
      ]
    };

    const apiKeyRegistry = {
      fields: [
        "Key ID",
        "Tenant / workspace association",
        "Scope (projects / renders / assets / webhooks)",
        "Status (active / revoked / rotated)",
        "Created at / last used at"
      ],
      rules: [
        "Keys must always be scoped to a tenant.",
        "Rotation and revocation must be logged.",
        "Never show full key after creation; partial display only.",
        "Separate keys for sandbox vs. production."
      ]
    };

    const quotas = {
      layers: [
        "Global quotas per plan tier.",
        "Per‑tenant quotas (projects, renders, storage, API calls).",
        "Per‑region quotas for capacity planning."
      ],
      controls: [
        "Adjust quotas per tenant from control plane.",
        "Set soft and hard limits.",
        "Trigger alerts when usage nears limits."
      ]
    };

    const usageDashboards = {
      views: [
        "Global usage by region (renders, storage, API calls).",
        "Top tenants by usage.",
        "Top endpoints and modules by usage.",
        "Growth trends over time."
      ],
      drilldowns: [
        "Per‑tenant usage timeline.",
        "Per‑tenant module adoption (which features are used).",
        "Per‑tenant error rates and performance."
      ]
    };

    const featureFlagManager = {
      capabilities: [
        "Define global feature flags.",
        "Override flags per tenant or per region.",
        "Roll out features gradually (percentage‑based).",
        "Disable features quickly in case of issues."
      ],
      examples: [
        "Enable new render pipeline only for Pro/Enterprise tenants.",
        "Enable experimental editor for US tenants first.",
        "Disable a problematic feature globally with one switch."
      ]
    };

    const billingSync = {
      flows: [
        "Sync plan changes from control plane to billing provider.",
        "Sync usage metrics for overage billing.",
        "Trigger invoices and receipts on key events."
      ],
      safeguards: [
        "Audit trail for all billing‑related actions.",
        "Grace periods before enforcing hard limits.",
        "Clear communication before suspending tenants."
      ]
    };

    const alerts = {
      categories: [
        "Platform health (errors, latency, outages).",
        "Capacity (storage, renders, API limits).",
        "Security (suspicious API usage, key abuse).",
        "Billing (quota exceeded, unpaid invoices)."
      ],
      actions: [
        "Escalation paths per severity.",
        "Runbooks linked to each alert type.",
        "Per‑tenant and global alert views."
      ]
    };

    const healthChecks = {
      checks: [
        "API gateway health per region.",
        "Render pipeline health per region.",
        "Storage health and latency per region.",
        "Tenant runtime health (isolation, quotas, routing)."
      ],
      dashboards: [
        "Global status board (green / yellow / red).",
        "Region‑specific health views.",
        "Historical uptime and incident logs."
      ]
    };

    setPlane({
      cloudName,
      primaryRegion,
      mode,
      tenantRegistry,
      regionMap,
      renderFarmMap,
      storageMap,
      apiKeyRegistry,
      quotas,
      usageDashboards,
      featureFlagManager,
      billingSync,
      alerts,
      healthChecks
    });

    setLoading(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>AI Cloud Control Plane</h1>

      <div style={{ ...panelStyle(theme), marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>Cloud & Environment Settings</h2>

        <input
          value={cloudName}
          onChange={(e) => setCloudName(e.target.value)}
          placeholder="Cloud name (e.g., 'AdCreator‑AI Cloud')."
          style={{ ...inputStyle(theme), marginBottom: 8 }}
        />

        <select
          value={primaryRegion}
          onChange={(e) => setPrimaryRegion(e.target.value)}
          style={{ ...inputStyle(theme), marginBottom: 8 }}
        >
          <option value="us">US primary</option>
          <option value="eu">EU primary</option>
          <option value="global">Global / multi‑region</option>
        </select>

        <select
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          style={{ ...inputStyle(theme), marginBottom: 8 }}
        >
          <option value="production">Production</option>
          <option value="staging">Staging</option>
          <option value="sandbox">Sandbox</option>
        </select>

        <button
          onClick={generatePlane}
          style={buttonStyle(theme)}
        >
          {loading ? "Building Cloud Control Plane..." : "Generate Cloud Control Plane"}
        </button>
      </div>

      {plane && (
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
              <h2 style={{ marginTop: 0 }}>Tenant Registry</h2>
              <p style={{ margin: 0 }}>
                <strong>Cloud:</strong> {plane.tenantRegistry.cloudName}
              </p>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Fields:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plane.tenantRegistry.fields.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Actions:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plane.tenantRegistry.actions.map((a, idx) => (
                  <li key={idx}>{a}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Region Map</h2>
              <p style={{ margin: 0 }}>
                <strong>Primary Region:</strong> {plane.regionMap.primaryRegion}
              </p>
              {plane.regionMap.regions.map((r) => (
                <div
                  key={r.id}
                  style={{
                    marginTop: 8,
                    padding: 8,
                    borderRadius: 8,
                    background: theme === "dark" ? "#0f172a" : "#ffffff",
                    border: "1px solid rgba(148,163,184,0.35)"
                  }}
                >
                  <p style={{ margin: 0 }}>
                    <strong>{r.name}</strong>
                  </p>
                  <p style={{ marginTop: 4, fontSize: 13 }}>
                    <strong>Roles:</strong>
                  </p>
                  <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                    {r.roles.map((role, idx) => (
                      <li key={idx}>{role}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Render Farm Map</h2>
              {plane.renderFarmMap.farms.map((f) => (
                <div
                  key={f.id}
                  style={{
                    marginTop: 8,
                    padding: 8,
                    borderRadius: 8,
                    background: theme === "dark" ? "#0f172a" : "#ffffff",
                    border: "1px solid rgba(148,163,184,0.35)"
                  }}
                >
                  <p style={{ margin: 0 }}>
                    <strong>{f.name}</strong> ({f.region})
                  </p>
                  <p style={{ marginTop: 4, fontSize: 13 }}>{f.notes}</p>
                </div>
              ))}
              <p style={{ marginTop: 6, fontSize: 13 }}>
                <strong>Controls:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plane.renderFarmMap.controls.map((c, idx) => (
                  <li key={idx}>{c}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Storage Map</h2>
              {plane.storageMap.buckets.map((b) => (
                <div
                  key={b.id}
                  style={{
                    marginTop: 8,
                    padding: 8,
                    borderRadius: 8,
                    background: theme === "dark" ? "#0f172a" : "#ffffff",
                    border: "1px solid rgba(148,163,184,0.35)"
                  }}
                >
                  <p style={{ margin: 0 }}>
                    <strong>{b.name}</strong> ({b.region})
                  </p>
                  <p style={{ marginTop: 4, fontSize: 13 }}>{b.notes}</p>
                </div>
              ))}
              <p style={{ marginTop: 6, fontSize: 13 }}>
                <strong>Policies:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plane.storageMap.policies.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>API Key Registry</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Fields:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plane.apiKeyRegistry.fields.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Rules:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plane.apiKeyRegistry.rules.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Quotas & Capacity</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Layers:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plane.quotas.layers.map((l, idx) => (
                  <li key={idx}>{l}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Controls:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plane.quotas.controls.map((c, idx) => (
                  <li key={idx}>{c}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Usage Dashboards</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Views:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plane.usageDashboards.views.map((v, idx) => (
                  <li key={idx}>{v}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Drilldowns:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plane.usageDashboards.drilldowns.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Feature Flag Manager</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Capabilities:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plane.featureFlagManager.capabilities.map((c, idx) => (
                  <li key={idx}>{c}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Examples:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plane.featureFlagManager.examples.map((e, idx) => (
                  <li key={idx}>{e}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Billing Sync</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Flows:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plane.billingSync.flows.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Safeguards:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plane.billingSync.safeguards.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Alerts</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Categories:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plane.alerts.categories.map((c, idx) => (
                  <li key={idx}>{c}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Actions:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plane.alerts.actions.map((a, idx) => (
                  <li key={idx}>{a}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Health Checks</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Checks:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plane.healthChecks.checks.map((c, idx) => (
                  <li key={idx}>{c}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Dashboards:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plane.healthChecks.dashboards.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
            </div>
          </div>

          <div style={panelStyle(theme)}>
            <h2 style={{ marginTop: 0 }}>Save Cloud Control Plane Plan</h2>
            <SaveProjectButton
              brand={plane.cloudName}
              generator="AI Cloud Control Plane"
              data={plane}
            />
          </div>
        </>
      )}
    </div>
  );
}
