import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AICarouselGeneratorPage() {
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

  const slideCard = {
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
        <h1 style={headingStyle}>AI Carousel Generator</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Generate multi‑slide Instagram and LinkedIn carousels instantly.
        </p>
      </section>

      {/* PROMPT INPUT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Carousel Prompt
        </h2>

        <div style={panelStyle(theme)}>
          <label>Topic</label>
          <textarea
            placeholder="How AdCreator‑AI builds full campaigns in minutes..."
            style={{ ...inputStyle, height: 120 }}
          />

          <label>Platform</label>
          <select style={inputStyle}>
            <option>Instagram</option>
            <option>LinkedIn</option>
          </select>

          <label>Number of Slides</label>
          <select style={inputStyle}>
            <option>3 Slides</option>
            <option>5 Slides</option>
            <option>7 Slides</option>
          </select>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Generate Carousel
          </button>
        </div>
      </section>

      {/* GENERATED SLIDES */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Generated Carousel Slides
        </h2>

        <div style={slideCard}>
          <h3>Slide 1 — Hook</h3>
          <p style={{ opacity: 0.85 }}>
            Build full ad campaigns in minutes — powered by AI.
          </p>
        </div>

        <div style={slideCard}>
          <h3>Slide 2 — Problem</h3>
          <p style={{ opacity: 0.85 }}>
            Creating ads manually takes hours — scripting, storyboarding, thumbnails, editing.
          </p>
        </div>

        <div style={slideCard}>
          <h3>Slide 3 — Solution</h3>
          <p style={{ opacity: 0.85 }}>
            AdCreator‑AI automates the entire creative pipeline.
          </p>
        </div>

        <div style={slideCard}>
          <h3>Slide 4 — Benefits</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Faster workflow</li>
            <li>Studio‑quality outputs</li>
            <li>Multi‑platform ready</li>
          </ul>
        </div>

        <div style={slideCard}>
          <h3>Slide 5 — CTA</h3>
          <p style={{ opacity: 0.85 }}>
            Start your free trial today.
          </p>
        </div>
      </section>

      {/* EXPORT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Export Carousel
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            Export your carousel slides or send them to the image generator.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Export Carousel
          </button>
        </div>
      </section>
    </div>
  );
}
