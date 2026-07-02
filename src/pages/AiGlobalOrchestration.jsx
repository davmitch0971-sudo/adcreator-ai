import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { panelStyle, inputStyle, buttonStyle } from "../styles/GlobalStyles";
import SaveProjectButton from "../components/SaveProjectButton";

export default function AiGlobalOrchestration() {
  const { theme } = useTheme();

  const [orchestratorName, setOrchestratorName] = useState("AdCreator‑AI Global Orchestrator");
  const [strategy, setStrategy] = useState("balanced");
  const [mode, setMode] = useState("auto");
  const [orchestrator, setOrchestrator] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateOrchestrator = () => {
    if (!orchestratorName.trim()) {
      return alert("Enter a global orchestration name for planning.");
    }

    setLoading(true);

    const autoscaling = {
      strategy,
      layers: [
        "Per‑region autoscaling for render farms.",
        "Global autoscaling for shared workloads.",
        "Autoscaling for API gateway nodes.",
        "Autoscaling for background workers and queues."
      ],
      rules: [
        "Scale based on queue depth, latency, and error rates.",
        "Avoid thrashing by using cooldown periods.",
        "Different policies per plan tier (Starter / Pro / Enterprise)."
      ]
    };

    const failover = {
      modes: [
        "Region‑to‑region failover (US ↔ EU).",
        "Render farm failover within region.",
        "API gateway failover with DNS / routing changes.",
        "Storage access failover to replicas where allowed."
      ],
      safeguards: [
        "Respect data residency constraints during failover.",
        "Failover only for tenants that allow cross‑region backup.",
        "Clear incident logging and post‑mortems."
      ]
    };

    const routing = {
      mode,
      rules: [
        "Latency‑aware routing for global tenants.",
        "Region‑locked routing for residency‑bound tenants.",
        "Traffic shaping based on capacity and health.",
        "Separate routing strategies for API, renders, and assets."
      ],
      examples: [
        "US users → US region by default.",
        "EU users → EU region by default.",
        "Global tenants → closest healthy region with capacity."
      ]
    };

    const workloadBalancing = {
      dimensions: [
        "Balance render jobs across farms.",
        "Balance API traffic across gateways.",
        "Balance background tasks across worker pools.",
        "Balance storage operations across buckets."
      ],
      signals: [
        "Queue depth.",
        "Latency.",
        "Error rate.",
        "Per‑tenant quotas and priorities."
      ]
    };

    const tenantMigrations = {
      flows: [
        "Migrate tenant from US → EU or EU → US.",
        "Migrate tenant from single‑region → multi‑region.",
        "Migrate heavy tenants to dedicated render pools."
      ],
      steps: [
        "Plan migration with clear timeline.",
        "Copy data and verify integrity.",
        "Switch routing and update configs.",
        "Monitor post‑migration health."
      ],
      safeguards: [
        "Respect legal and contractual constraints.",
        "Communicate clearly with tenant before migration.",
        "Rollback plan in case of issues."
      ]
    };

    const renderDistribution = {
      strategies: [
        "Distribute heavy jobs to dedicated pools.",
        "Use global farm for overflow workloads.",
        "Prioritize Enterprise tenants during contention.",
        "Throttle low‑priority workloads when needed."
      ],
      metrics: [
        "Per‑tenant render latency.",
        "Per‑region render throughput.",
        "Queue depth per farm.",
        "Error rates per pipeline."
      ]
    };

    const storageReplication = {
      policies: [
        "Per‑tenant replication settings (on/off, regions).",
        "Compliance‑aware replication (EU data stays in EU).",
        "Versioned backups for critical tenants."
      ],
      flows: [
        "Scheduled replication jobs.",
        "On‑demand snapshots for key tenants.",
        "Disaster‑recovery restore flows."
      ]
    };

    const apiTrafficShaping = {
      tools: [
        "Rate limiting per region.",
        "Per‑tenant traffic shaping.",
        "Priority lanes for critical endpoints.",
        "Blackout / maintenance windows with clear messaging."
      ],
      examples: [
        "Throttle non‑critical endpoints during incidents.",
        "Protect render APIs during high load.",
        "Give Enterprise tenants higher priority."
      ]
    };

    const globalHealthIntelligence = {
      views: [
        "Global health dashboard (regions, farms, gateways, storage).",
        "Per‑tenant global health view.",
        "Incident timeline and impact analysis."
      ],
      signals: [
        "Error spikes.",
        "Latency anomalies.",
        "Capacity saturation.",
        "Security anomalies in API usage."
      ]
    };

    setOrchestrator({
      orchestratorName,
      strategy,
      mode,
      autoscaling,
      failover,
      routing,
      workloadBalancing,
      tenantMigrations,
      renderDistribution,
      storageReplication,
      apiTrafficShaping,
      globalHealthIntelligence
    });

    setLoading(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>AI Global Orchestration Layer</h1>

      <div style={{ ...panelStyle(theme), marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>Global Orchestration Settings</h2>

        <input
          value={orchestratorName}
          onChange={(e) => setOrchestratorName(e.target.value)}
          placeholder="Global orchestrator name (e.g., 'AdCreator‑AI Global Orchestrator')."
          style={{ ...inputStyle(theme), marginBottom: 8 }}
        />

        <select
          value={strategy}
          onChange={(e) => setStrategy(e.target.value)}
          style={{ ...inputStyle(theme), marginBottom: 8 }}
        >
          <option value="balanced">Balanced (latency + cost + capacity)</option>
          <option value="performance">Performance‑first</option>
          <option value="cost">Cost‑optimized</option>
        </select>

        <select
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          style={{ ...inputStyle(theme), marginBottom: 8 }}
        >
          <option value="auto">Auto‑orchestration</option>
          <option value="manual">Manual control with overrides</option>
          <option value="hybrid">Hybrid (auto + manual overrides)</option>
        </select>

        <button
          onClick={generateOrchestrator}
          style={buttonStyle(theme)}
        >
          {loading ? "Building Global Orchestration Plan..." : "Generate Global Orchestration Plan"}
        </button>
      </div>

      {orchestrator && (
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
              <h2 style={{ marginTop: 0 }}>Autoscaling</h2>
              <p style={{ margin: 0 }}>
                <strong>Strategy:</strong> {orchestrator.autoscaling.strategy}
              </p>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Layers:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {orchestrator.autoscaling.layers.map((l, idx) => (
                  <li key={idx}>{l}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Rules:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {orchestrator.autoscaling.rules.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Failover</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Modes:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {orchestrator.failover.modes.map((m, idx) => (
                  <li key={idx}>{m}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Safeguards:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {orchestrator.failover.safeguards.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Routing</h2>
              <p style={{ margin: 0 }}>
                <strong>Mode:</strong> {orchestrator.routing.mode}
              </p>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Rules:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {orchestrator.routing.rules.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Examples:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {orchestrator.routing.examples.map((e, idx) => (
                  <li key={idx}>{e}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Workload Balancing</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Dimensions:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {orchestrator.workloadBalancing.dimensions.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Signals:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {orchestrator.workloadBalancing.signals.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Tenant Migrations</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Flows:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {orchestrator.tenantMigrations.flows.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Steps:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {orchestrator.tenantMigrations.steps.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Safeguards:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {orchestrator.tenantMigrations.safeguards.map((g, idx) => (
                  <li key={idx}>{g}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Render Distribution</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Strategies:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {orchestrator.renderDistribution.strategies.map((st, idx) => (
                  <li key={idx}>{st}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Metrics:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {orchestrator.renderDistribution.metrics.map((m, idx) => (
                  <li key={idx}>{m}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Storage Replication</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Policies:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {orchestrator.storageReplication.policies.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Flows:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {orchestrator.storageReplication.flows.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>API Traffic Shaping</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Tools:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {orchestrator.apiTrafficShaping.tools.map((t, idx) => (
                  <li key={idx}>{t}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Examples:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {orchestrator.apiTrafficShaping.examples.map((e, idx) => (
                  <li key={idx}>{e}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Global Health Intelligence</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Views:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {orchestrator.globalHealthIntelligence.views.map((v, idx) => (
                  <li key={idx}>{v}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Signals:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {orchestrator.globalHealthIntelligence.signals.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>
          </div>

          <div style={panelStyle(theme)}>
            <h2 style={{ marginTop: 0 }}>Save Global Orchestration Plan</h2>
            <SaveProjectButton
              brand={orchestrator.orchestratorName}
              generator="AI Global Orchestration Layer"
              data={orchestrator}
            />
          </div>
        </>
      )}
    </div>
  );
}
