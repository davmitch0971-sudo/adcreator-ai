import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { panelStyle, inputStyle, buttonStyle } from "../styles/GlobalStyles";
import SaveProjectButton from "../components/SaveProjectButton";

export default function AiCommunityBuilder() {
  const { theme } = useTheme();

  const [platform, setPlatform] = useState("discord");
  const [niche, setNiche] = useState("");
  const [tone, setTone] = useState("high-energy");
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  const generatePlan = () => {
    if (!niche.trim()) {
      return alert("Describe your niche and who this community is for.");
    }

    setLoading(true);

    const structure = {
      platform,
      channels: [
        {
          id: 1,
          name: "welcome",
          purpose: "Onboarding new members and setting expectations.",
          content: [
            "Welcome message",
            "Community rules",
            "How to get the most out of the space"
          ]
        },
        {
          id: 2,
          name: "wins",
          purpose: "Share results, progress, and transformations.",
          content: [
            "Before/after posts",
            "Launch wins",
            "Workflow upgrades"
          ]
        },
        {
          id: 3,
          name: "build-in-public",
          purpose: "Share work‑in‑progress and get feedback.",
          content: [
            "Screenshots of timelines",
            "Script drafts",
            "Thumbnail iterations"
          ]
        },
        {
          id: 4,
          name: "questions",
          purpose: "Ask for help, feedback, and guidance.",
          content: [
            "Technical questions",
            "Strategy questions",
            "Gear and tools questions"
          ]
        }
      ]
    };

    const engagementLoops = [
      {
        id: 1,
        name: "Weekly Build Thread",
        description:
          "Every week, members post what they’re building and what they’ll ship.",
        cadence: "Weekly",
        examples: [
          "‘What are you shipping this week?’ thread",
          "Members reply with 1–3 concrete deliverables",
          "Follow‑up thread to share shipped work"
        ]
      },
      {
        id: 2,
        name: "Feedback Fridays",
        description:
          "Dedicated time for deep feedback on content, offers, and workflows.",
        cadence: "Weekly",
        examples: [
          "Drop 1 piece of content for feedback",
          "Give feedback to 2 other members",
          "Highlight 2–3 standout posts"
        ]
      },
      {
        id: 3,
        name: "Launch Circle",
        description:
          "Space for members actively launching something to share progress.",
        cadence: "Ongoing",
        examples: [
          "Daily or weekly check‑ins",
          "Launch debriefs",
          "Shared lessons and templates"
        ]
      }
    ];

    const rituals = [
      {
        id: 1,
        name: "Monthly Retrospective",
        description:
          "Look back at what the community built, learned, and shipped.",
        steps: [
          "Share top 3 wins from the month",
          "Share 1 thing you’ll do differently next month",
          "Highlight member projects and transformations"
        ]
      },
      {
        id: 2,
        name: "Office Hours / Live Sessions",
        description:
          "Live calls where you review member work, answer questions, and share updates.",
        steps: [
          "Pick 1–2 member projects to review live",
          "Share 1 new framework or workflow",
          "Open Q&A"
        ]
      }
    ];

    const moderation = {
      tone,
      rules: [
        "No spam or low‑effort self‑promotion.",
        "Feedback must be specific and constructive.",
        "Respect privacy; don’t share member work outside without permission.",
        "No harassment, discrimination, or bad‑faith behavior."
      ],
      enforcement: [
        "First: gentle reminder.",
        "Second: temporary mute or removal from specific channels.",
        "Third: removal from community for repeated violations."
      ]
    };

    const onboarding = {
      steps: [
        "Welcome DM or pinned message explaining what this space is for.",
        "Ask new members to share who they are, what they’re building, and what they want from the community.",
        "Point them to 2–3 key threads or resources.",
        "Invite them to participate in the next live session or ritual."
      ],
      questions: [
        "What are you building right now?",
        "What’s your biggest bottleneck?",
        "What does ‘success’ look like for you in the next 90 days?"
      ]
    };

    const valueMap = {
      corePromise:
        "This community helps you go from building alone to building with a serious, focused group.",
      valueTypes: [
        "Accountability",
        "Feedback",
        "Shared templates and workflows",
        "Access to your thinking and systems"
      ],
      retentionDrivers: [
        "Regular live sessions or events",
        "Visible progress from other members",
        "Easy ways to ask for and receive help",
        "Clear path from ‘new’ to ‘core’ member"
      ]
    };

    setPlan({
      platform,
      niche,
      tone,
      structure,
      engagementLoops,
      rituals,
      moderation,
      onboarding,
      valueMap
    });

    setLoading(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>AI Community Builder</h1>

      <div style={{ ...panelStyle(theme), marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>Community Basics</h2>

        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          style={{ ...inputStyle(theme), marginBottom: 8 }}
        >
          <option value="discord">Discord</option>
          <option value="slack">Slack</option>
          <option value="circle">Circle</option>
          <option value="facebook-group">Facebook Group</option>
          <option value="custom">Custom / in‑app community</option>
        </select>

        <textarea
          value={niche}
          onChange={(e) => setNiche(e.target.value)}
          placeholder="Describe who this community is for and what they’re building (e.g., 'creators using AdCreator‑AI to build studio‑level content businesses')."
          style={{
            ...inputStyle(theme),
            minHeight: 90,
            resize: "vertical",
            marginBottom: 8
          }}
        />

        <select
          value={tone}
          onChange={(e) => setTone(e.target.value)}
          style={{ ...inputStyle(theme), marginBottom: 8 }}
        >
          <option value="high-energy">High‑energy, intense, builder‑focused</option>
          <option value="calm-focused">Calm, focused, craft‑driven</option>
          <option value="supportive">Supportive, community‑first</option>
        </select>

        <button
          onClick={generatePlan}
          style={buttonStyle(theme)}
        >
          {loading ? "Building Community Plan..." : "Generate Community Plan"}
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
              <h2 style={{ marginTop: 0 }}>Structure & Channels</h2>
              <p style={{ margin: 0 }}>
                <strong>Platform:</strong> {plan.structure.platform}
              </p>
              {plan.structure.channels.map((ch) => (
                <div
                  key={ch.id}
                  style={{
                    marginTop: 8,
                    padding: 8,
                    borderRadius: 8,
                    background: theme === "dark" ? "#0f172a" : "#ffffff",
                    border: "1px solid rgba(148,163,184,0.35)"
                  }}
                >
                  <p style={{ margin: 0 }}>
                    <strong>#{ch.name}</strong>
                  </p>
                  <p style={{ marginTop: 2, fontSize: 13 }}>{ch.purpose}</p>
                  <p style={{ marginTop: 4, fontSize: 13 }}>
                    <strong>Content:</strong>
                  </p>
                  <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                    {ch.content.map((c, idx) => (
                      <li key={idx}>{c}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Engagement Loops</h2>
              {plan.engagementLoops.map((loop) => (
                <div
                  key={loop.id}
                  style={{
                    marginBottom: 8,
                    padding: 8,
                    borderRadius: 8,
                    background: theme === "dark" ? "#0f172a" : "#ffffff",
                    border: "1px solid rgba(148,163,184,0.35)"
                  }}
                >
                  <p style={{ margin: 0 }}>
                    <strong>{loop.name}</strong> — {loop.cadence}
                  </p>
                  <p style={{ marginTop: 2, fontSize: 13 }}>
                    {loop.description}
                  </p>
                  <p style={{ marginTop: 4, fontSize: 13 }}>
                    <strong>Examples:</strong>
                  </p>
                  <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                    {loop.examples.map((e, idx) => (
                      <li key={idx}>{e}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Community Rituals</h2>
              {plan.rituals.map((r) => (
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
                  <p style={{ marginTop: 2, fontSize: 13 }}>
                    {r.description}
                  </p>
                  <p style={{ marginTop: 4, fontSize: 13 }}>
                    <strong>Steps:</strong>
                  </p>
                  <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                    {r.steps.map((s, idx) => (
                      <li key={idx}>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Moderation & Tone</h2>
              <p style={{ margin: 0 }}>
                <strong>Community Tone:</strong> {plan.moderation.tone}
              </p>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Rules:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plan.moderation.rules.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Enforcement:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plan.moderation.enforcement.map((e, idx) => (
                  <li key={idx}>{e}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Onboarding Flow</h2>
              <p style={{ marginTop: 0, fontSize: 13 }}>
                <strong>Steps:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plan.onboarding.steps.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Questions:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plan.onboarding.questions.map((q, idx) => (
                  <li key={idx}>{q}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Community Value Map</h2>
              <p style={{ margin: 0 }}>
                <strong>Core Promise:</strong> {plan.valueMap.corePromise}
              </p>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Value Types:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plan.valueMap.valueTypes.map((v, idx) => (
                  <li key={idx}>{v}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Retention Drivers:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plan.valueMap.retentionDrivers.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
            </div>
          </div>

          <div style={panelStyle(theme)}>
            <h2 style={{ marginTop: 0 }}>Save Community Plan</h2>
            <SaveProjectButton
              brand={null}
              generator="AI Community Builder"
              data={plan}
            />
          </div>
        </>
      )}
    </div>
  );
}
