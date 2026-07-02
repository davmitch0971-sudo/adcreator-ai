import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AICreativeBriefGeneratorPage() {
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
        <h1 style={headingStyle}>AI Creative Brief Generator</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Generate full creative briefs for campaigns, ads, videos, and brand launches.
        </p>
      </section>

      {/* INPUTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Brief Inputs
        </h2>

        <div style={panelStyle(theme)}>
          <label>Project Name</label>
          <input
            type="text"
            placeholder="AdCreator‑AI Summer Campaign"
            style={inputStyle}
          />

          <label>Product / Offer</label>
          <input
            type="text"
            placeholder="AI-powered creative automation platform..."
            style={inputStyle}
          />

          <label>Target Audience</label>
          <textarea
            placeholder="Creators, marketers, agencies..."
            style={{ ...inputStyle, height: 120 }}
          />

          <label>Primary Goal</label>
          <select style={inputStyle}>
            <option>Brand Awareness</option>
            <option>Lead Generation</option>
            <option>Sales Conversion</option>
            <option>Product Launch</option>
          </select>

          <label>Platforms</label>
          <select style={inputStyle}>
            <option>All Platforms</option>
            <option>Meta (Facebook/Instagram)</option>
            <option>YouTube</option>
            <option>TikTok</option>
            <option>LinkedIn</option>
          </select>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Generate Creative Brief
          </button>
        </div>
      </section>

      {/* OUTPUT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Creative Brief
        </h2>

        <div style={cardStyle}>
          <h3>Project Overview</h3>
          <p style={{ opacity: 0.85 }}>
            A campaign designed to showcase how AdCreator‑AI helps creators build full campaigns instantly.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Objective</h3>
          <p style={{ opacity: 0.85 }}>
            Drive awareness and adoption among creators and small marketing teams.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Audience Insight</h3>
          <p style={{ opacity: 0.85 }}>
            Creators want speed, simplicity, and tools that remove friction from content production.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Main Message</h3>
          <p style={{ opacity: 0.85 }}>
            “Create full campaigns in minutes — not hours.”
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Supporting Points</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>One-click workflows</li>
            <li>AI-powered scripts, storyboards, thumbnails</li>
            <li>Instant multi-platform exports</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Deliverables</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Video ads (YouTube, TikTok, Reels)</li>
            <li>Static ads (Meta, LinkedIn)</li>
            <li>Landing page hero + copy</li>
            <li>Social posts announcing the campaign</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Creative Direction</h3>
          <p style={{ opacity: 0.85 }}>
            Energetic, modern, fast-paced visuals with bold typography and creator-friendly tone.
          </p>
        </div>
      </section>

      {/* EXPORT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Export Brief
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            Export your creative brief or send it to the Full Campaign Builder.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Export Creative Brief
          </button>
        </div>
      </section>
    </div>
  );
}
