import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { panelStyle, inputStyle, buttonStyle } from "../styles/GlobalStyles";
import SaveProjectButton from "../components/SaveProjectButton";

export default function AiMonetizationPlanner() {
  const { theme } = useTheme();

  const [niche, setNiche] = useState("");
  const [audienceStage, setAudienceStage] = useState("early");
  const [productType, setProductType] = useState("digital-product");
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  const generatePlan = () => {
    if (!niche.trim()) {
      return alert("Describe your niche and what kind of audience you have.");
    }

    setLoading(true);

    const offers = [
      {
        id: 1,
        name: "Starter Pack",
        price: "$29",
        type: "Entry offer",
        description:
          "Low‑ticket product that lets people experience your system without a big commitment."
      },
      {
        id: 2,
        name: "Core System",
        price: "$149",
        type: "Flagship offer",
        description:
          "Full framework, templates, and walkthroughs for your niche. This is your main product."
      },
      {
        id: 3,
        name: "Studio Access",
        price: "$49/mo",
        type: "Subscription",
        description:
          "Ongoing access to tools, updates, and community. Recurring revenue layer."
      }
    ];

    const ladder = [
      {
        id: 1,
        name: "Free Value",
        description:
          "High‑quality free content that proves you understand the niche and can help.",
        examples: [
          "YouTube breakdowns",
          "Short‑form tips",
          "Free mini‑guides or checklists"
        ]
      },
      {
        id: 2,
        name: "Low‑Ticket",
        description:
          "Affordable product that turns viewers into customers and filters for seriousness.",
        examples: [
          "Template packs",
          "Mini‑courses",
          "One‑off workshops"
        ]
      },
      {
        id: 3,
        name: "Core Offer",
        description:
          "Your main product that delivers the full transformation you promise.",
        examples: [
          "Full course",
          "Done‑with‑you program",
          "Software subscription"
        ]
      },
      {
        id: 4,
        name: "High‑Touch",
        description:
          "Premium tier for a small subset of your audience who want direct access.",
        examples: [
          "1:1 consulting",
          "Small group coaching",
          "Custom implementation"
        ]
      }
    ];

    const funnel = {
      entry: "Short‑form content → lead magnet → email list",
      steps: [
        "Hook with a clear transformation in your short‑form content.",
        "Offer a free, specific lead magnet that solves one focused problem.",
        "Deliver the lead magnet via email and start a short nurture sequence.",
        "Introduce your low‑ticket offer as the next logical step.",
        "Ascend best customers into your core offer and subscription."
      ],
      leadMagnets: [
        "Niche‑specific checklist",
        "Swipe file of scripts or prompts",
        "Mini roadmap PDF"
      ]
    };

    const emailSequence = [
      {
        id: 1,
        day: "Day 0",
        subject: "Here’s your {lead magnet} + what to expect next",
        focus:
          "Deliver value immediately, set expectations, and hint at the bigger transformation."
      },
      {
        id: 2,
        day: "Day 1",
        subject: "The biggest mistake {your niche} makes",
        focus:
          "Agitate the main problem and show how your approach solves it differently."
      },
      {
        id: 3,
        day: "Day 3",
        subject: "How to go from {current state} to {desired state}",
        focus:
          "Lay out a simple 3‑step path and position your low‑ticket offer as the easiest way to start."
      },
      {
        id: 4,
        day: "Day 5",
        subject: "What life looks like after you fix {core problem}",
        focus:
          "Paint the after picture and invite them into your core offer or subscription."
      }
    ];

    const timeline = {
      stage: audienceStage,
      productType,
      months: [
        {
          id: 1,
          name: "Month 1 — Foundation",
          focus:
            "Clarify niche, audience, and core transformation. Launch free content and lead magnet.",
          actions: [
            "Publish 2–3 long‑form pieces",
            "Post short‑form content 3x/week",
            "Create and launch lead magnet"
          ]
        },
        {
          id: 2,
          name: "Month 2 — First Revenue",
          focus:
            "Launch low‑ticket offer and refine messaging based on audience response.",
          actions: [
            "Run simple launch to email list",
            "Test 2–3 offer angles",
            "Collect testimonials and case studies"
          ]
        },
        {
          id: 3,
          name: "Month 3 — System",
          focus:
            "Turn launches into a repeatable system and introduce subscription or core offer.",
          actions: [
            "Automate email sequence",
            "Add subscription or core product",
            "Start tracking LTV and conversion rates"
          ]
        }
      ],
      notes:
        "Treat monetization as a system, not a single launch. Each month builds on the last."
    };

    setPlan({
      niche,
      audienceStage,
      productType,
      offers,
      ladder,
      funnel,
      emailSequence,
      timeline
    });

    setLoading(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>AI Monetization Planner</h1>

      <div style={{ ...panelStyle(theme), marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>Niche & Stage</h2>

        <textarea
          value={niche}
          onChange={(e) => setNiche(e.target.value)}
          placeholder="Describe your niche and audience (e.g., 'video creators using AdCreator‑AI who want to turn content into income')."
          style={{
            ...inputStyle(theme),
            minHeight: 90,
            resize: "vertical",
            marginBottom: 8
          }}
        />

        <select
          value={audienceStage}
          onChange={(e) => setAudienceStage(e.target.value)}
          style={{ ...inputStyle(theme), marginBottom: 8 }}
        >
          <option value="early">Early — small audience, just starting</option>
          <option value="growing">Growing — consistent views, some fans</option>
          <option value="established">Established — strong audience, ready to scale</option>
        </select>

        <select
          value={productType}
          onChange={(e) => setProductType(e.target.value)}
          style={{ ...inputStyle(theme), marginBottom: 8 }}
        >
          <option value="digital-product">Digital product (course, templates, etc.)</option>
          <option value="software">Software / SaaS</option>
          <option value="service">Service / agency</option>
          <option value="membership">Membership / community</option>
        </select>

        <button
          onClick={generatePlan}
          style={buttonStyle(theme)}
        >
          {loading ? "Building Monetization Plan..." : "Generate Monetization Plan"}
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
              <h2 style={{ marginTop: 0 }}>Offer Stack</h2>
              {plan.offers.map((o) => (
                <div
                  key={o.id}
                  style={{
                    marginBottom: 8,
                    padding: 8,
                    borderRadius: 8,
                    background: theme === "dark" ? "#0f172a" : "#ffffff",
                    border: "1px solid rgba(148,163,184,0.35)"
                  }}
                >
                  <p style={{ margin: 0 }}>
                    <strong>{o.name}</strong> — {o.price}
                  </p>
                  <p style={{ marginTop: 2, fontSize: 13 }}>
                    <strong>Type:</strong> {o.type}
                  </p>
                  <p style={{ marginTop: 2, fontSize: 13 }}>{o.description}</p>
                </div>
              ))}
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Product Ladder</h2>
              {plan.ladder.map((l) => (
                <div
                  key={l.id}
                  style={{
                    marginBottom: 8,
                    padding: 8,
                    borderRadius: 8,
                    background: theme === "dark" ? "#0f172a" : "#ffffff",
                    border: "1px solid rgba(148,163,184,0.35)"
                  }}
                >
                  <p style={{ margin: 0 }}>
                    <strong>{l.name}</strong>
                  </p>
                  <p style={{ marginTop: 2, fontSize: 13 }}>{l.description}</p>
                  <p style={{ marginTop: 4, fontSize: 13 }}>
                    <strong>Examples:</strong>
                  </p>
                  <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                    {l.examples.map((e, idx) => (
                      <li key={idx}>{e}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Funnel Overview</h2>
              <p style={{ margin: 0 }}>
                <strong>Entry:</strong> {plan.funnel.entry}
              </p>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Steps:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plan.funnel.steps.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
              <p style={{ marginTop: 4, fontSize: 13 }}>
                <strong>Lead Magnets:</strong>
              </p>
              <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                {plan.funnel.leadMagnets.map((lm, idx) => (
                  <li key={idx}>{lm}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Email Sequence</h2>
              {plan.emailSequence.map((e) => (
                <div
                  key={e.id}
                  style={{
                    marginBottom: 8,
                    padding: 8,
                    borderRadius: 8,
                    background: theme === "dark" ? "#0f172a" : "#ffffff",
                    border: "1px solid rgba(148,163,184,0.35)"
                  }}
                >
                  <p style={{ margin: 0 }}>
                    <strong>{e.day}</strong> — {e.subject}
                  </p>
                  <p style={{ marginTop: 2, fontSize: 13 }}>{e.focus}</p>
                </div>
              ))}
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Monetization Timeline</h2>
              <p style={{ margin: 0 }}>
                <strong>Audience Stage:</strong> {plan.audienceStage}
              </p>
              <p style={{ marginTop: 2, marginBottom: 4 }}>
                <strong>Product Type:</strong> {plan.productType}
              </p>
              {plan.timeline.months.map((m) => (
                <div
                  key={m.id}
                  style={{
                    marginTop: 8,
                    padding: 8,
                    borderRadius: 8,
                    background: theme === "dark" ? "#0f172a" : "#ffffff",
                    border: "1px solid rgba(148,163,184,0.35)"
                  }}
                >
                  <p style={{ margin: 0 }}>
                    <strong>{m.name}</strong>
                  </p>
                  <p style={{ marginTop: 2, fontSize: 13 }}>{m.focus}</p>
                  <p style={{ marginTop: 4, fontSize: 13 }}>
                    <strong>Actions:</strong>
                  </p>
                  <ul style={{ marginTop: 2, paddingLeft: 18 }}>
                    {m.actions.map((a, idx) => (
                      <li key={idx}>{a}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <p style={{ marginTop: 8, fontSize: 12, opacity: 0.7 }}>
                {plan.timeline.notes}
              </p>
            </div>
          </div>

          <div style={panelStyle(theme)}>
            <h2 style={{ marginTop: 0 }}>Save Monetization Plan</h2>
            <SaveProjectButton
              brand={null}
              generator="AI Monetization Planner"
              data={plan}
            />
          </div>
        </>
      )}
    </div>
  );
}
