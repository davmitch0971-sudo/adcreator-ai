import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AIContentRepurposingEnginePage() {
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
        <h1 style={headingStyle}>AI Content Repurposing Engine</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Turn one long‑form piece into dozens of platform‑specific assets automatically.
        </p>
      </section>

      {/* INPUTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Repurposing Inputs
        </h2>

        <div style={panelStyle(theme)}>
          <label>Source Content Type</label>
          <select style={inputStyle}>
            <option>Long‑form article</option>
            <option>YouTube video</option>
            <option>Podcast episode</option>
            <option>Livestream</option>
            <option>Interview</option>
          </select>

          <label>Paste Source Content</label>
          <textarea
            placeholder="Paste your long‑form content here..."
            style={{ ...inputStyle, minHeight: 160, resize: "vertical" }}
          />

          <label>Target Platforms</label>
          <select style={inputStyle}>
            <option>TikTok + Reels</option>
            <option>YouTube + Shorts</option>
            <option>Instagram + Facebook</option>
            <option>Twitter / X</option>
            <option>LinkedIn</option>
            <option>All platforms</option>
          </select>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Repurpose Content
          </button>
        </div>
      </section>

      {/* SHORT‑FORM OUTPUT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Short‑Form Content
        </h2>

        <div style={cardStyle}>
          <h3>Hooks</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>“Most creators waste hours making content. Here’s the fix.”</li>
            <li>“This one shift will double your output.”</li>
            <li>“Stop creating from scratch — repurpose smarter.”</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Short‑Form Scripts</h3>
          <p style={{ opacity: 0.85 }}>
            15–30 second scripts optimized for TikTok, Reels, and Shorts.
          </p>
        </div>
      </section>

      {/* SOCIAL POSTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Social Posts
        </h2>

        <div style={cardStyle}>
          <h3>Twitter / X Threads</h3>
          <p style={{ opacity: 0.85 }}>
            Multi‑tweet breakdowns of your long‑form content.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>LinkedIn Posts</h3>
          <p style={{ opacity: 0.85 }}>
            Professional insights extracted from your content.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Instagram Carousels</h3>
          <p style={{ opacity: 0.85 }}>
            Slide‑based summaries and actionable takeaways.
          </p>
        </div>
      </section>

      {/* EMAILS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Email Content
        </h2>

        <div style={cardStyle}>
          <h3>Newsletter Version</h3>
          <p style={{ opacity: 0.85 }}>
            Clean, structured email version of your long‑form content.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Drip Sequence</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Day 1 — Main idea</li>
            <li>Day 2 — Key insight</li>
            <li>Day 3 — Actionable takeaway</li>
            <li>Day 4 — Case study</li>
            <li>Day 5 — CTA</li>
          </ul>
        </div>
      </section>

      {/* GRAPHICS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Graphic Assets
        </h2>

        <div style={cardStyle}>
          <h3>Quote Graphics</h3>
          <p style={{ opacity: 0.85 }}>
            Pull key lines from your content and convert them into shareable visuals.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Infographics</h3>
          <p style={{ opacity: 0.85 }}>
            Turn complex ideas into simple visual diagrams.
          </p>
        </div>
      </section>

      {/* EXPORT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Export & Integrations
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            Export all repurposed content or send it to the Creative Strategy OS.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            Export Repurposed Content
          </button>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Send to Creative Strategy OS
          </button>
        </div>
      </section>
    </div>
  );
}
