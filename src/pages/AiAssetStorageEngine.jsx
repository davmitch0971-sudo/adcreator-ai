import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { panelStyle, inputStyle, buttonStyle } from "../styles/GlobalStyles";
import SaveProjectButton from "../components/SaveProjectButton";

export default function AiAssetStorageEngine() {
  const { theme } = useTheme();

  const [workspaceName, setWorkspaceName] = useState("");
  const [storageTier, setStorageTier] = useState("balanced");
  const [retentionProfile, setRetentionProfile] = useState("standard");
  const [engine, setEngine] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateEngine = () => {
    if (!workspaceName.trim()) {
      return alert("Enter a workspace or brand name for storage planning.");
    }

    setLoading(true);

    const tiers = [
      {
        id: 1,
        name: "Hot Storage",
        description: "Fast, expensive, for active projects and frequently accessed assets.",
        assets: [
          "Current project timelines",
          "Recently uploaded footage",
          "Active thumbnails and overlays"
        ]
      },
      {
        id: 2,
        name: "Warm Storage",
        description: "Medium‑cost, for recently completed projects and reusable assets.",
        assets: [
          "Recently rendered videos",
          "Reusable brand assets",
          "Templates and presets"
        ]
      },
      {
        id: 3,
        name: "Cold Storage",
        description: "Low‑cost, slower access, for archives and long‑term backups.",
        assets: [
          "Old campaigns",
          "Compliance archives",
          "Rarely accessed footage"
        ]
      }
    ];

    const quotas = {
      storageTier,
      rules: [
        "Per‑workspace storage limits based on plan.",
        "Soft warnings at 80–90% usage.",
        "Hard caps with blocked uploads at 100% until cleanup.",
        "Tiered limits for hot vs. warm vs. cold storage."
      ],
      examples: [
        "Starter plan: small hot storage, limited warm, minimal cold.",
        "Pro plan: larger hot storage, generous warm, solid cold.",
        "Enterprise: custom quotas per workspace and department."
      ]
    };

    const lifecyclePolicies = [
      {
        id: 1,
        name: "Standard Retention",
        profile: "standard",
        rules: [
          "Move inactive assets from hot → warm after 30 days.",
          "Move completed projects from warm → cold after 90 days.",
          "Keep cold storage for at least 1–2 years."
        ]
      },
      {
        id: 2,
        name: "Aggressive Cleanup",
        profile: "aggressive",
        rules: [
          "Move inactive assets from hot → warm after 7–14 days.",
          "Move completed projects from warm → cold after 30–60 days.",
          "Delete cold assets after 6–12 months unless pinned."
        ]
      },
      {
        id: 3,
        name: "Compliance‑Heavy",
        profile: "compliance",
        rules: [
          "No automatic deletion; only manual or policy‑driven.",
          "Strict logging of all deletions and moves.",
          "Region‑aware storage (US/EU) for compliance."
        ]
      }
    ];

    const cdn = {
      integration: [
        "Use CDN for public or semi‑public assets (thumbnails, previews).",
        "Signed URLs for protected assets.",
        "Cache control per asset type (short for dynamic, long for static)."
      ],
      benefits: [
        "Faster global delivery.",
        "Reduced load on core storage.",
        "Better performance for high‑traffic brands."
      ]
    };

    const uploads = {
      flows: [
        "Direct browser uploads with resumable support.",
        "Server‑side ingestion for large files.",
        "Background processing for transcoding and thumbnail generation."
      ],
      safeguards: [
        "File type validation.",
        "Size limits per plan.",
        "Virus/malware scanning where required."
      ]
    };

    const versioning = {
      concepts: [
        "Versioned assets for timelines and key brand files.",
        "Ability to roll back to previous versions.",
        "Track who changed what and when."
      ],
      examples: [
        "Versioned logo files.",
        "Versioned intro/outro templates.",
        "Versioned project timelines."
      ]
    };

    const isolation = {
      workspaceName,
      rules: [
        "Strict separation of assets per workspace.",
        "No cross‑workspace asset visibility by default.",
        "Optional shared libraries for multi‑brand orgs."
      ],
      notes:
        "Isolation is critical for agencies and enterprises handling multiple clients or brands."
    };

    const metadataIndex = {
      fields: [
        "Asset type (video, audio, image, document).",
        "Project and workspace association.",
        "Created at / updated at.",
        "Tags and labels (campaign, platform, format)."
      ],
      queries: [
        "Find all assets for a given campaign.",
        "List all active assets in hot storage.",
        "Search by tag (e.g., ‘Q4 launch’, ‘shorts’)."
      ]
    };

    setEngine({
      workspaceName,
      storageTier,
      retentionProfile,
      tiers,
      quotas,
      lifecyclePolicies,
      cdn,
      uploads,
      versioning,
      isolation,
      metadataIndex
    });

    setLoading(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>AI Asset Storage Engine</h1>

      <div style={{ ...panelStyle(theme), marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>Workspace & Storage Settings</h2>

        <input
          value={workspaceName}
          onChange={(e) => setWorkspaceName(e.target.value)}
          placeholder="Workspace / brand name (e.g., 'AdCreator‑AI Studios', 'Client Brand A')."
          style={{ ...inputStyle(theme), marginBottom: 8 }}
        />

        <select
          value={storageTier}
          onChange={(e) => setStorageTier(e.target.value)}
          style={{ ...inputStyle(theme), marginBottom: 8 }}
        >
          <option value="balanced">Balanced (hot + warm + cold)</option>
          <option value="performance">Performance‑heavy (more hot storage)</option>
          <option value="cost">Cost‑optimized (more cold storage)</option>
        </select>

        <select
          value={retentionProfile}
          onChange={(e) => setRetentionProfile(e.target.value)}
          style={{ ...inputStyle(theme), marginBottom: 8 }}
        >
          <option value="standard">Standard retention</option>
          <option value="aggressive">Aggressive cleanup</option>
          <option value="compliance">Compliance‑heavy</option>
        </select>

        <button
          onClick={generateEngine}
          style={buttonStyle(theme)}
        >
          {loading ? "Building Asset Storage Engine..." : "Generate Asset Storage Engine"}
        </button>
      </div>

      {engine && (
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
              <h2 style={{ marginTop: 0 }}>Storage Tiers</h2>
              <p style={{ margin: 0 }}>
                <strong>Workspace:</strong> {engine.workspaceName}
              </p>
              {engine.tiers.map((t) => (
                <div
                  key={t.id}
                  style={{
                    marginTop: 8,
                    padding: 8,
                    borderRadius: 8,
                    background: theme === "dark" ? "#0f172a" : "#ffffff",
                    border: "1px solid rgba(148,163,184,0.35)"
                  }}
                >
                  <p style={{ margin: 0 }}>
                    <strong>{t.name}</strong>
                  </p>
                  <p style={{ marginTop: 2, fontSize: 13 }}>{t.description}</p>
                  <p style={{ marginTop: 4, fontSize: 13 }}>
                    <strong>Typical Assets:</strong>
                  </p>
                  <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                    {t.assets.map((a, idx) => (
                      <li key={idx}>{a}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Quotas & Limits</h2>
              <p style={{ margin: 0 }}>
                <strong>Storage Profile:</strong> {engine.storageTier}
              </p>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Rules:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {engine.quotas.rules.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Examples:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {engine.quotas.examples.map((e, idx) => (
                  <li key={idx}>{e}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Lifecycle Policies</h2>
              <p style={{ margin: 0 }}>
                <strong>Retention Profile:</strong> {engine.retentionProfile}
              </p>
              {engine.lifecyclePolicies.map((p) => (
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
                    <strong>{p.name}</strong> ({p.profile})
                  </p>
                  <p style={{ marginTop: 4, fontSize: 13 }}>
                    <strong>Rules:</strong>
                  </p>
                  <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                    {p.rules.map((r, idx) => (
                      <li key={idx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>CDN & Delivery</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Integration:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {engine.cdn.integration.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Benefits:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {engine.cdn.benefits.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Upload Pipelines</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Flows:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {engine.uploads.flows.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Safeguards:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {engine.uploads.safeguards.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Versioning</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Concepts:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {engine.versioning.concepts.map((c, idx) => (
                  <li key={idx}>{c}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Examples:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {engine.versioning.examples.map((e, idx) => (
                  <li key={idx}>{e}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Workspace Isolation</h2>
              <p style={{ margin: 0 }}>
                <strong>Workspace:</strong> {engine.isolation.workspaceName}
              </p>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Rules:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {engine.isolation.rules.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
              <p style={{ marginTop: 6, fontSize: 12, opacity: 0.7 }}>
                {engine.isolation.notes}
              </p>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Metadata Index & Search</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Fields:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {engine.metadataIndex.fields.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Key Queries:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {engine.metadataIndex.queries.map((q, idx) => (
                  <li key={idx}>{q}</li>
                ))}
              </ul>
            </div>
          </div>

          <div style={panelStyle(theme)}>
            <h2 style={{ marginTop: 0 }}>Save Asset Storage Engine Plan</h2>
            <SaveProjectButton
              brand={engine.workspaceName}
              generator="AI Asset Storage Engine"
              data={engine}
            />
          </div>
        </>
      )}
    </div>
  );
}
