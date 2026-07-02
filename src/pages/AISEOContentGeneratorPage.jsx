import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AISEOContentGeneratorPage() {
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
        <h1 style={headingStyle}>AI SEO Content Generator</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Generate SEO‑optimized blog posts, outlines, keywords, and meta descriptions.
        </p>
      </section>

      {/* INPUT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          SEO Content Prompt
        </h2>

        <div style={panelStyle(theme)}>
          <label>Topic</label>
          <input
            type="text"
            placeholder="How AI is transforming digital marketing..."
            style={inputStyle}
          />

          <label>Target Keywords</label>
          <input
            type="text"
            placeholder="AI marketing tools, automated ads, campaign builder..."
            style={inputStyle}
          />

          <label>Content Length</label>
          <select style={inputStyle}>
            <option>Short (500 words)</option>
            <option>Medium (1000 words)</option>
            <option>Long (2000 words)</option>
          </select>

          <label>Tone</label>
          <select style={inputStyle}>
            <option>Professional</option>
            <option>Friendly</option>
            <option>Bold</option>
            <option>Technical</option>
          </select>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Generate SEO Content
          </button>
        </div>
      </section>

      {/* OUTPUT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          SEO Content Output
        </h2>

        <div style={cardStyle}>
          <h3>Meta Description</h3>
          <p style={{ opacity: 0.85 }}>
            Discover how AI tools like AdCreator‑AI are transforming digital marketing by automating ad creation, boosting productivity, and improving campaign performance.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Keyword Cluster</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>AI marketing tools</li>
            <li>automated ad creation</li>
            <li>AI campaign builder</li>
            <li>creative automation</li>
            <li>AI content generation</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>SEO Outline</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Introduction — AI’s role in modern marketing</li>
            <li>Why automation matters</li>
            <li>How AI improves creative workflows</li>
            <li>Real‑world examples</li>
            <li>Future of AI‑powered marketing</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Draft Content</h3>
          <p style={{ opacity: 0.85 }}>
            AI is reshaping digital marketing by automating creative tasks that once required hours of manual work. Platforms like AdCreator‑AI streamline scripting, storyboarding, image generation, and ad creation — helping marketers produce high‑quality content faster than ever...
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
            Export your SEO content or send it to your blog builder.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Export SEO Content
          </button>
        </div>
      </section>
    </div>
  );
}
