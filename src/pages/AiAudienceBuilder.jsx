import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { panelStyle, inputStyle, buttonStyle } from "../styles/GlobalStyles";
import SaveProjectButton from "../components/SaveProjectButton";

export default function AiAudienceBuilder() {
  const { theme } = useTheme();

  const [niche, setNiche] = useState("");
  const [platform, setPlatform] = useState("youtube");
  const [personas, setPersonas] = useState(null);
  const [pillars, setPillars] = useState(null);
  const [growthPath, setGrowthPath] = useState(null);
  const [loading, setLoading] = useState(false);

  const buildAudience = () => {
    if (!niche.trim()) {
      return alert("Describe your niche or who you want to reach.");
    }

    setLoading(true);

    const samplePersonas = [
      {
        id: 1,
        name: "Ambitious Solo Creator",
        ageRange: "22–35",
        goals: [
          "Grow audience fast",
          "Turn content into income",
          "Look professional without a big team"
        ],
        fears: [
          "Burnout",
          "Posting without results",
          "Looking amateur compared to big creators"
        ]
      },
      {
        id: 2,
        name: "Small Brand Owner",
        ageRange: "28–45",
        goals: [
          "Make the brand feel bigger than it is",
          "Have consistent content",
          "Tell a clear story across platforms"
        ],
        fears: [
          "Wasting money on agencies",
          "Inconsistent brand voice",
          "Falling behind competitors"
        ]
      }
    ];

    const samplePillars = [
      {
        id: 1,
        name: "Education",
        description: "Teach your audience how to think about your niche.",
        examples: [
          "Breakdowns of successful campaigns",
          "Step‑by‑step tutorials",
          "Behind‑the‑scenes of your process"
        ]
      },
      {
        id: 2,
        name: "Proof",
        description: "Show that your system, tools, or ideas actually work.",
        examples: [
          "Before/after transformations",
          "Client or user stories",
          "Live builds or live edits"
        ]
      },
      {
        id: 3,
        name: "Identity",
        description: "Help your audience see themselves as the kind of person who does this.",
        examples: [
          "Mindset content",
          "Values and beliefs",
          "Narratives about the future of your niche"
        ]
      }
    ];

    const sampleGrowthPath = {
      platform,
      stages: [
        {
          id: 1,
          name: "Stage 1 — Signal",
          focus: "Post consistently 3x/week. Find what gets any response.",
          metrics: ["Views", "Watch time", "Saves", "Comments"]
        },
        {
          id: 2,
          name: "Stage 2 — Pattern",
          focus: "Double down on formats that perform. Refine hooks and thumbnails.",
          metrics: ["CTR", "Retention", "Repeat viewers"]
        },
        {
          id: 3,
          name: "Stage 3 — Depth",
          focus: "Introduce longer‑form or deeper content for your most engaged viewers.",
          metrics: ["Session time", "Subscribers/followers", "Shares"]
        }
      ],
      notes:
        "Treat growth as stages, not a single event. Each stage has its own content style and metrics."
    };

    setPersonas(samplePersonas);
    setPillars(samplePillars);
    setGrowthPath(sampleGrowthPath);
    setLoading(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>AI Audience Builder</h1>

      <div style={{ ...panelStyle(theme), marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>Niche & Platform</h2>

        <textarea
          value={niche}
          onChange={(e) => setNiche(e.target.value)}
          placeholder="Describe your niche and who you want to reach (e.g., 'solo video creators who want studio‑level output')."
          style={{
            ...inputStyle(theme),
            minHeight: 90,
            resize: "vertical",
            marginBottom: 8
          }}
        />

        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          style={{ ...inputStyle(theme), marginBottom: 8 }}
        >
          <option value="youtube">YouTube</option>
          <option value="tiktok">TikTok</option>
          <option value="instagram">Instagram Reels</option>
          <option value="facebook">Facebook</option>
          <option value="linkedin">LinkedIn</option>
        </select>

        <button
          onClick={buildAudience}
          style={buttonStyle(theme)}
        >
          {loading ? "Building Audience Map..." : "Generate Audience Map"}
        </button>
      </div>

      {(personas || pillars || growthPath) && (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 12,
              marginBottom: 16
            }}
          >
            {personas && (
              <div style={panelStyle(theme)}>
                <h2 style={{ marginTop: 0 }}>Audience Personas</h2>
                {personas.map((p) => (
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
                      <strong>{p.name}</strong> — {p.ageRange}
                    </p>
                    <p style={{ marginTop: 4, fontSize: 13 }}>
                      <strong>Goals:</strong>
                    </p>
                    <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                      {p.goals.map((g, idx) => (
                        <li key={idx}>{g}</li>
                      ))}
                    </ul>
                    <p style={{ marginTop: 4, fontSize: 13 }}>
                      <strong>Fears:</strong>
                    </p>
                    <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                      {p.fears.map((f, idx) => (
                        <li key={idx}>{f}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {pillars && (
              <div style={panelStyle(theme)}>
                <h2 style={{ marginTop: 0 }}>Content Pillars</h2>
                {pillars.map((c) => (
                  <div
                    key={c.id}
                    style={{
                      marginBottom: 8,
                      padding: 8,
                      borderRadius: 8,
                      background: theme === "dark" ? "#0f172a" : "#ffffff",
                      border: "1px solid rgba(148,163,184,0.35)"
                    }}
                  >
                    <p style={{ margin: 0 }}>
                      <strong>{c.name}</strong>
                    </p>
                    <p style={{ marginTop: 2, fontSize: 13 }}>
                      {c.description}
                    </p>
                    <p style={{ marginTop: 4, fontSize: 13 }}>
                      <strong>Examples:</strong>
                    </p>
                    <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                      {c.examples.map((e, idx) => (
                        <li key={idx}>{e}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {growthPath && (
              <div style={panelStyle(theme)}>
                <h2 style={{ marginTop: 0 }}>Growth Path</h2>
                <p style={{ margin: 0 }}>
                  <strong>Platform:</strong> {growthPath.platform}
                </p>
                {growthPath.stages.map((s) => (
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
                    <p style={{ marginTop: 2, fontSize: 13 }}>
                      {s.focus}
                    </p>
                    <p style={{ marginTop: 4, fontSize: 13 }}>
                      <strong>Key Metrics:</strong>
                    </p>
                    <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                      {s.metrics.map((m, idx) => (
                        <li key={idx}>{m}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                <p style={{ marginTop: 8, fontSize: 12, opacity: 0.7 }}>
                  {growthPath.notes}
                </p>
              </div>
            )}
          </div>

          <div style={panelStyle(theme)}>
            <h2 style={{ marginTop: 0 }}>Save Audience Map</h2>
            <SaveProjectButton
              brand={null}
              generator="AI Audience Builder"
              data={{
                niche,
                platform,
                personas,
                pillars,
                growthPath
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}
