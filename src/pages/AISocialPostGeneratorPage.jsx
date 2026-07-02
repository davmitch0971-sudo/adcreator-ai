import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AISocialPostGeneratorPage() {
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

  const postCard = {
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
        <h1 style={headingStyle}>AI Social Post Generator</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Generate platform‑optimized social media posts instantly.
        </p>
      </section>

      {/* PROMPT INPUT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Post Prompt
        </h2>

        <div style={panelStyle(theme)}>
          <label>Topic / Announcement</label>
          <textarea
            placeholder="Announcing our new AI-powered campaign builder..."
            style={{ ...inputStyle, height: 120 }}
          />

          <label>Platform</label>
          <select style={inputStyle}>
            <option>Instagram</option>
            <option>Facebook</option>
            <option>LinkedIn</option>
            <option>TikTok</option>
            <option>Twitter / X</option>
          </select>

          <label>Tone</label>
          <select style={inputStyle}>
            <option>Friendly</option>
            <option>Professional</option>
            <option>Bold</option>
            <option>Playful</option>
          </select>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Generate Social Posts
          </button>
        </div>
      </section>

      {/* GENERATED POSTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Generated Posts
        </h2>

        <div style={postCard}>
          <h3>Instagram Post</h3>
          <p style={{ opacity: 0.85 }}>
            Ready to level up your content? 🚀  
            AdCreator‑AI now builds full campaigns in minutes — scripts, storyboards, thumbnails, and more.
          </p>
          <p style={{ opacity: 0.85, marginTop: 10 }}>
            #AIContent #MarketingTools #AdCreatorAI #Creators
          </p>
        </div>

        <div style={postCard}>
          <h3>LinkedIn Post</h3>
          <p style={{ opacity: 0.85 }}>
            We’re excited to introduce a new way for teams to build campaigns faster.  
            AdCreator‑AI automates scripts, storyboards, thumbnails, and ad concepts — saving hours every week.
          </p>
        </div>

        <div style={postCard}>
          <h3>TikTok Caption</h3>
          <p style={{ opacity: 0.85 }}>
            POV: Your entire ad campaign gets built in minutes 🤯  
            Try AdCreator‑AI today.
          </p>
        </div>
      </section>

      {/* EXPORT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Export Options
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            Export all generated posts or send them to your scheduling tool.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Export All Posts
          </button>
        </div>
      </section>
    </div>
  );
}
