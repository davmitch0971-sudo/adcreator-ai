import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AIFullCampaignBuilderPage() {
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
        <h1 style={headingStyle}>AI Full Campaign Builder</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Generate an entire multi‑platform campaign from a single brief.
        </p>
      </section>

      {/* CAMPAIGN BRIEF */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Campaign Brief
        </h2>

        <div style={panelStyle(theme)}>
          <label>Product / Offer</label>
          <input
            type="text"
            placeholder="AI-powered marketing platform that builds campaigns automatically..."
            style={inputStyle}
          />

          <label>Target Audience</label>
          <input
            type="text"
            placeholder="Creators, marketers, small business owners..."
            style={inputStyle}
          />

          <label>Primary Goal</label>
          <select style={inputStyle}>
            <option>Drive Sales</option>
            <option>Generate Leads</option>
            <option>Build Awareness</option>
            <option>Launch New Product</option>
          </select>

          <label>Platforms</label>
          <select style={inputStyle}>
            <option>All (YouTube, TikTok, Instagram, Facebook, LinkedIn)</option>
            <option>Video‑First (YouTube, TikTok, Reels)</option>
            <option>Social‑First (Instagram, Facebook)</option>
            <option>Professional (LinkedIn, Email)</option>
          </select>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Build Full Campaign
          </button>
        </div>
      </section>

      {/* CAMPAIGN OVERVIEW */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Campaign Overview
        </h2>

        <div style={cardStyle}>
          <h3>Core Message</h3>
          <p style={{ opacity: 0.85 }}>
            Build stunning ad campaigns in minutes — powered by AdCreator‑AI.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Main Hook</h3>
          <p style={{ opacity: 0.85 }}>
            Stop wasting hours on production — let AI build your entire campaign.
          </p>
        </div>
      </section>

      {/* ASSET MAP */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Campaign Assets
        </h2>

        <div style={cardStyle}>
          <h3>Video Ads</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>YouTube — 30s explainer ad</li>
            <li>TikTok — 15s fast‑paced vertical ad</li>
            <li>Reels — 20s product showcase</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Static & Image Assets</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Product hero images</li>
            <li>Thumbnails for each video</li>
            <li>Carousel graphics</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Copy & Messaging</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Ad copy variants for each platform</li>
            <li>Social posts announcing the campaign</li>
            <li>Landing page hero + value props</li>
          </ul>
        </div>
      </section>

      {/* FLOW / PIPELINE */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Campaign Pipeline
        </h2>

        <div style={cardStyle}>
          <p style={{ opacity: 0.85 }}>
            1. Generate scripts with AI Script Generator  
            2. Build storyboards with AI Storyboard  
            3. Create voiceovers with AI Voiceover Generator  
            4. Design visuals with AI Image & Thumbnail Generators  
            5. Optimize copy with AI Ad Copy Optimizer  
            6. Launch across platforms with AI Social Post & Landing Page Generators
          </p>
        </div>
      </section>

      {/* EXPORT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Export Campaign
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            Export your full campaign as a brief, or send assets to their respective generators.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Export Full Campaign
          </button>
        </div>
      </section>
    </div>
  );
}
