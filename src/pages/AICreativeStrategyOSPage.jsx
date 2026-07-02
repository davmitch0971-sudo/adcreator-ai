import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AICreativeStrategyOSPage() {
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
        <h1 style={headingStyle}>AI Creative Strategy OS</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Build weekly content calendars, multi‑platform rollout plans, campaign strategy maps, and creative direction frameworks.
        </p>
      </section>

      {/* INPUTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Strategy Inputs
        </h2>

        <div style={panelStyle(theme)}>
          <label>Brand / Product</label>
          <input
            type="text"
            placeholder="AdCreator‑AI"
            style={inputStyle}
          />

          <label>Primary Goal</label>
          <select style={inputStyle}>
            <option>Grow audience</option>
            <option>Generate leads</option>
            <option>Drive sales</option>
            <option>Launch campaign</option>
            <option>Increase retention</option>
          </select>

          <label>Content Frequency</label>
          <select style={inputStyle}>
            <option>Daily</option>
            <option>3x per week</option>
            <option>Weekly</option>
          </select>

          <label>Platforms</label>
          <select style={inputStyle}>
            <option>TikTok + Reels</option>
            <option>YouTube + Shorts</option>
            <option>Instagram + Facebook</option>
            <option>Twitter / X</option>
            <option>Mixed platforms</option>
          </select>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Generate Creative Strategy
          </button>
        </div>
      </section>

      {/* WEEKLY CONTENT CALENDAR */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Weekly Content Calendar
        </h2>

        <div style={cardStyle}>
          <h3>Sample Weekly Plan</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Monday — Educational post (problem → solution)</li>
            <li>Tuesday — UGC‑style demo</li>
            <li>Wednesday — Case study / proof</li>
            <li>Thursday — Feature spotlight</li>
            <li>Friday — Direct response CTA</li>
            <li>Saturday — Community / behind‑the‑scenes</li>
            <li>Sunday — Recap + soft CTA</li>
          </ul>
        </div>
      </section>

      {/* CAMPAIGN STRATEGY MAP */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Campaign Strategy Map
        </h2>

        <div style={cardStyle}>
          <h3>Core Pillars</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Awareness — short‑form content + teasers</li>
            <li>Consideration — demos, tutorials, comparisons</li>
            <li>Conversion — direct response ads + landing pages</li>
            <li>Retention — onboarding + lifecycle content</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Creative Angles</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Speed angle — “Create campaigns in minutes.”</li>
            <li>Proof angle — “Here’s how creators use it.”</li>
            <li>Empowerment angle — “You don’t need a team.”</li>
            <li>Cost angle — “Save thousands on agencies.”</li>
          </ul>
        </div>
      </section>

      {/* MULTI‑PLATFORM ROLLOUT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Multi‑Platform Rollout Plan
        </h2>

        <div style={cardStyle}>
          <h3>TikTok / Reels</h3>
          <p style={{ opacity: 0.85 }}>
            Fast hooks, UGC‑style demos, quick transformations.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>YouTube</h3>
          <p style={{ opacity: 0.85 }}>
            Tutorials, deep dives, case studies, long‑form storytelling.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Instagram</h3>
          <p style={{ opacity: 0.85 }}>
            Carousels, product highlights, community content.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Twitter / X</h3>
          <p style={{ opacity: 0.85 }}>
            Thought leadership, insights, fast updates.
          </p>
        </div>
      </section>

      {/* CREATIVE DIRECTION FRAMEWORK */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Creative Direction Framework
        </h2>

        <div style={cardStyle}>
          <h3>Brand Voice</h3>
          <p style={{ opacity: 0.85 }}>
            Confident, modern, helpful, creator‑focused.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Visual Style</h3>
          <p style={{ opacity: 0.85 }}>
            Clean UI, bold typography, high‑contrast colors.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Messaging Themes</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Speed + efficiency</li>
            <li>Creative empowerment</li>
            <li>Consistency + quality</li>
            <li>AI as a creative partner</li>
          </ul>
        </div>
      </section>

      {/* EXPORT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Export Strategy
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            Export your strategy or send it to the Campaign Builder.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            Export Creative Strategy
          </button>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Send to Full Campaign Builder
          </button>
        </div>
      </section>
    </div>
  );
}
