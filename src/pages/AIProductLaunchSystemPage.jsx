import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AIProductLaunchSystemPage() {
  const { theme } = useTheme();

  const sectionStyle = {
    marginBottom: 40,
    padding: 20,
    borderRadius: 12,
    background: theme === "dark" ? "#0b0d14" : "#ffffff",
    boxShadow:
      theme === "dark"
        ? "0 0 0 1px rgba(255,255,255,0.05)"
        : "0 0 0 1px rgba(0,0,0,0.08)",
  };

  const headingStyle = {
    fontSize: 32,
    fontWeight: 800,
    marginBottom: 12,
  };

  const inputStyle = {
    width: "100%",
    padding: 10,
    borderRadius: 8,
    border: theme === "dark" ? "1px solid #374151" : "1px solid #d1d5db",
    background: theme === "dark" ? "#020617" : "#ffffff",
    color: theme === "dark" ? "#e5e7eb" : "#111827",
    marginBottom: 12,
  };

  const cardStyle = {
    padding: 16,
    borderRadius: 10,
    background: theme === "dark" ? "#111827" : "#f3f4f6",
    border: theme === "dark" ? "1px solid #1f2937" : "1px solid #e5e7eb",
    marginBottom: 16,
  };

  return (
    <div style={{ padding: 20 }}>
      {/* HEADER */}
      <section style={sectionStyle}>
        <h1 style={headingStyle}>AI Product Launch System</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Generate full launch strategies: pre‑launch, launch, and post‑launch assets, timelines, and messaging.
        </p>
      </section>

      {/* INPUTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Launch Inputs
        </h2>

        <div style={panelStyle(theme)}>
          <label>Product / Offer</label>
          <input
            type="text"
            placeholder="AdCreator‑AI — full AI creative suite..."
            style={inputStyle}
          />

          <label>Launch Type</label>
          <select style={inputStyle}>
            <option>New product launch</option>
            <option>Feature release</option>
            <option>Major update / v2</option>
            <option>Seasonal / promo launch</option>
          </select>

          <label>Launch Window</label>
          <select style={inputStyle}>
            <option>7‑day launch</option>
            <option>14‑day launch</option>
            <option>21‑day launch</option>
            <option>30‑day launch</option>
          </select>

          <label>Primary Channel</label>
          <select style={inputStyle}>
            <option>Email + social</option>
            <option>Paid ads</option>
            <option>Affiliate / partners</option>
            <option>Mixed channels</option>
          </select>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Generate Launch Plan
          </button>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Launch Timeline
        </h2>

        <div style={cardStyle}>
          <h3>Phases</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Pre‑launch — tease, build anticipation, collect leads.</li>
            <li>Launch — main offer, bonuses, urgency.</li>
            <li>Post‑launch — follow‑up, onboarding, upsells.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Sample 14‑Day Timeline</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Days 1–5: Teasers, waitlist, early content.</li>
            <li>Days 6–9: Launch emails, sales page traffic, live sessions.</li>
            <li>Days 10–14: Last‑chance promos, onboarding, feedback loop.</li>
          </ul>
        </div>
      </section>

      {/* PRE‑LAUNCH ASSETS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Pre‑launch Assets
        </h2>

        <div style={cardStyle}>
          <h3>Teaser Emails</h3>
          <p style={{ opacity: 0.85 }}>
            “Something big is coming for creators and marketers…”  
            “We’ve been quietly building your new creative superpower.”
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Social Teasers</h3>
          <p style={{ opacity: 0.85 }}>
            Short posts and stories hinting at AdCreator‑AI’s new capabilities and launch date.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Waitlist / Early Access</h3>
          <p style={{ opacity: 0.85 }}>
            “Join the early access list and be first to launch campaigns with AdCreator‑AI.”
          </p>
        </div>
      </section>

      {/* LAUNCH ASSETS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Launch Assets
        </h2>

        <div style={cardStyle}>
          <h3>Launch Emails</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Launch announcement — “We’re live.”</li>
            <li>Feature deep dive — “Here’s what you can now do.”</li>
            <li>Case study — “How creators use AdCreator‑AI.”</li>
            <li>Urgency — “Last chance to get launch bonuses.”</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Launch Page</h3>
          <p style={{ opacity: 0.85 }}>
            Tied into your Sales Page Generator and Funnel Builder for a cohesive launch experience.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Launch Bonuses</h3>
          <p style={{ opacity: 0.85 }}>
            “Launch‑only templates, extra campaigns, or extended trial periods.”
          </p>
        </div>
      </section>

      {/* POST‑LAUNCH */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Post‑launch & Retention
        </h2>

        <div style={cardStyle}>
          <h3>Onboarding Sequence</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Day 1 — Welcome + quickstart.</li>
            <li>Day 3 — First campaign walkthrough.</li>
            <li>Day 7 — Advanced features.</li>
            <li>Day 14 — Check‑in + feedback.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Upsell / Expansion</h3>
          <p style={{ opacity: 0.85 }}>
            “Upgrade to Pro for advanced analytics, team features, and priority support.”
          </p>
        </div>
      </section>

      {/* EXPORT & INTEGRATIONS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Export & Integrations
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            Export your launch plan and assets to email tools, landing page builders, or your funnel system.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            Export Launch Plan
          </button>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Send to Funnel Builder
          </button>
        </div>
      </section>
    </div>
  );
}
