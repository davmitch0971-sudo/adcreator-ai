import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { panelStyle, inputStyle, buttonStyle } from "../styles/GlobalStyles";
import SaveProjectButton from "../components/SaveProjectButton";

export default function AiPartnershipsEngine() {
  const { theme } = useTheme();

  const [creatorProfile, setCreatorProfile] = useState("");
  const [niche, setNiche] = useState("");
  const [platform, setPlatform] = useState("youtube");
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  const generatePlan = () => {
    if (!creatorProfile.trim() || !niche.trim()) {
      return alert("Describe your creator profile and niche.");
    }

    setLoading(true);

    const brandMatches = [
      {
        id: 1,
        name: "Creator Tools & SaaS",
        fitReason:
          "Your audience is already using or looking for tools to improve their workflow.",
        examples: [
          "Editing software",
          "AI tools",
          "Project management platforms"
        ]
      },
      {
        id: 2,
        name: "Production Gear & Services",
        fitReason:
          "Your content revolves around production quality and creative workflows.",
        examples: [
          "Cameras, lights, mics",
          "Studios",
          "Remote production services"
        ]
      }
    ];

    const outreachScript = {
      subject: "Partnership idea for reaching {your niche} with real depth",
      opener:
        "Hey {Brand},\n\nI create content for {your niche}, focused on {core transformation}. My audience follows me for {why they trust you}.",
      pitch: [
        "I’d love to explore a partnership where we integrate your product into a real production workflow, not just a surface‑level shoutout.",
        "We can build a series that shows your product solving actual problems for creators/brands, with clear before/after moments.",
        "The goal: make your product feel like an essential part of the creative stack, not just an optional add‑on."
      ],
      close:
        "If this sounds interesting, I can send over 2–3 campaign concepts tailored to your current goals.\n\nBest,\n{Your Name}"
    };

    const campaignConcepts = [
      {
        id: 1,
        name: "From Idea to Studio‑Level Output",
        description:
          "Show how your brand’s product fits into a full pipeline from idea to finished content.",
        deliverables: [
          "3–5 long‑form videos",
          "Short‑form cutdowns for each episode",
          "Behind‑the‑scenes breakdowns"
        ],
        outcomes: [
          "Position brand as core part of the creative stack",
          "Drive trials or signups",
          "Build long‑term association with quality"
        ]
      },
      {
        id: 2,
        name: "Creator Upgrade Series",
        description:
          "Help creators go from their current setup to a more professional workflow using the brand’s product.",
        deliverables: [
          "Before/after content",
          "Tutorials featuring the product",
          "Live or recorded Q&A session"
        ],
        outcomes: [
          "Show real transformation",
          "Educate audience on product use",
          "Create evergreen content for brand"
        ]
      }
    ];

    const negotiationFramework = {
      valueAngles: [
        "Content production (number and type of assets)",
        "Audience depth (engagement, not just reach)",
        "Evergreen value (content that keeps working over time)",
        "Integration quality (how naturally the product fits your workflow)"
      ],
      pricingGuidelines: [
        "Anchor on the full value of the campaign, not just per‑post rates.",
        "Offer tiered packages (base, plus, premium) with clear deliverables.",
        "Include usage rights and duration explicitly."
      ],
      redFlags: [
        "Brand wants heavy control but low budget.",
        "No clarity on success metrics.",
        "Requests that conflict with your audience’s trust."
      ]
    };

    const structure = {
      platform,
      phases: [
        {
          id: 1,
          name: "Phase 1 — Alignment",
          focus:
            "Clarify brand goals, audience overlap, and what success looks like.",
          actions: [
            "Share audience and content overview",
            "Ask for brand’s current priorities",
            "Agree on 1–2 core outcomes"
          ]
        },
        {
          id: 2,
          name: "Phase 2 — Concept",
          focus:
            "Present 2–3 campaign concepts with clear deliverables and outcomes.",
          actions: [
            "Send short concept deck or email",
            "Highlight audience fit and story arc",
            "Offer tiered packages"
          ]
        },
        {
          id: 3,
          name: "Phase 3 — Execution",
          focus:
            "Produce content, integrate product naturally, and report results.",
          actions: [
            "Deliver content on agreed schedule",
            "Share performance insights",
            "Suggest follow‑up or long‑term partnership"
          ]
        }
      ],
      notes:
        "Treat partnerships as long‑term relationships, not one‑off posts. Focus on mutual value and audience trust."
    };

    setPlan({
      creatorProfile,
      niche,
      platform,
      brandMatches,
      outreachScript,
      campaignConcepts,
      negotiationFramework,
      structure
    });

    setLoading(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>AI Partnerships Engine</h1>

      <div style={{ ...panelStyle(theme), marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>Creator & Niche</h2>

        <textarea
          value={creatorProfile}
          onChange={(e) => setCreatorProfile(e.target.value)}
          placeholder="Describe your creator profile (e.g., 'AI‑powered video studio helping creators and brands produce studio‑level content')."
          style={{
            ...inputStyle(theme),
            minHeight: 80,
            resize: "vertical",
            marginBottom: 8
          }}
        />

        <textarea
          value={niche}
          onChange={(e) => setNiche(e.target.value)}
          placeholder="Describe your niche and ideal brand partners (e.g., 'tools and platforms that help creators produce, edit, or distribute content')."
          style={{
            ...inputStyle(theme),
            minHeight: 80,
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
          <option value="instagram">Instagram</option>
          <option value="linkedin">LinkedIn</option>
          <option value="podcast">Podcast</option>
        </select>

        <button
          onClick={generatePlan}
          style={buttonStyle(theme)}
        >
          {loading ? "Building Partnership Plan..." : "Generate Partnership Plan"}
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
              <h2 style={{ marginTop: 0 }}>Brand Match Map</h2>
              {plan.brandMatches.map((b) => (
                <div
                  key={b.id}
                  style={{
                    marginBottom: 8,
                    padding: 8,
                    borderRadius: 8,
                    background: theme === "dark" ? "#0f172a" : "#ffffff",
                    border: "1px solid rgba(148,163,184,0.35)"
                  }}
                >
                  <p style={{ margin: 0 }}>
                    <strong>{b.name}</strong>
                  </p>
                  <p style={{ marginTop: 2, fontSize: 13 }}>{b.fitReason}</p>
                  <p style={{ marginTop: 4, fontSize: 13 }}>
                    <strong>Examples:</strong>
                  </p>
                  <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                    {b.examples.map((e, idx) => (
                      <li key={idx}>{e}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Outreach Script</h2>
              <p style={{ margin: 0 }}>
                <strong>Subject:</strong> {plan.outreachScript.subject}
              </p>
              <p style={{ marginTop: 6, whiteSpace: "pre-wrap", fontSize: 13 }}>
                {plan.outreachScript.opener}
              </p>
              <p style={{ marginTop: 6, fontSize: 13 }}>
                <strong>Pitch:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plan.outreachScript.pitch.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
              <p style={{ marginTop: 6, whiteSpace: "pre-wrap", fontSize: 13 }}>
                {plan.outreachScript.close}
              </p>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Campaign Concepts</h2>
              {plan.campaignConcepts.map((c) => (
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
                  <p style={{ marginTop: 2, fontSize: 13 }}>{c.description}</p>
                  <p style={{ marginTop: 4, fontSize: 13 }}>
                    <strong>Deliverables:</strong>
                  </p>
                  <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                    {c.deliverables.map((d, idx) => (
                      <li key={idx}>{d}</li>
                    ))}
                  </ul>
                  <p style={{ marginTop: 4, fontSize: 13 }}>
                    <strong>Outcomes:</strong>
                  </p>
                  <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                    {c.outcomes.map((o, idx) => (
                      <li key={idx}>{o}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Negotiation Framework</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Value Angles:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plan.negotiationFramework.valueAngles.map((v, idx) => (
                  <li key={idx}>{v}</li>
                ))}
              </ul>
              <p style={{ marginTop: 6, fontSize: 13 }}>
                <strong>Pricing Guidelines:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plan.negotiationFramework.pricingGuidelines.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
              <p style={{ marginTop: 6, fontSize: 13 }}>
                <strong>Red Flags:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plan.negotiationFramework.redFlags.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Partnership Structure</h2>
              <p style={{ margin: 0 }}>
                <strong>Primary Platform:</strong> {plan.structure.platform}
              </p>
              {plan.structure.phases.map((ph) => (
                <div
                  key={ph.id}
                  style={{
                    marginTop: 8,
                    padding: 8,
                    borderRadius: 8,
                    background: theme === "dark" ? "#0f172a" : "#ffffff",
                    border: "1px solid rgba(148,163,184,0.35)"
                  }}
                >
                  <p style={{ margin: 0 }}>
                    <strong>{ph.name}</strong>
                  </p>
                  <p style={{ marginTop: 2, fontSize: 13 }}>{ph.focus}</p>
                  <p style={{ marginTop: 4, fontSize: 13 }}>
                    <strong>Actions:</strong>
                  </p>
                  <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                    {ph.actions.map((a, idx) => (
                      <li key={idx}>{a}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <p style={{ marginTop: 8, fontSize: 12, opacity: 0.7 }}>
                {plan.structure.notes}
              </p>
            </div>
          </div>

          <div style={panelStyle(theme)}>
            <h2 style={{ marginTop: 0 }}>Save Partnerships Plan</h2>
            <SaveProjectButton
              brand={null}
              generator="AI Partnerships Engine"
              data={plan}
            />
          </div>
        </>
      )}
    </div>
  );
}
