import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AIStoryboardPage() {
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
        <h1 style={headingStyle}>AI Storyboard Generator</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Generate scene‑by‑scene visual storyboards for your video ads.
        </p>
      </section>

      {/* PROMPT INPUT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Storyboard Prompt
        </h2>

        <div style={panelStyle(theme)}>
          <label>Describe Your Video</label>
          <textarea
            placeholder="A fast‑paced product demo showing features, benefits, and a strong CTA..."
            style={{ ...inputStyle, height: 120 }}
          />

          <label>Visual Style</label>
          <select style={inputStyle}>
            <option>Cinematic</option>
            <option>Minimalist</option>
            <option>Bold & Colorful</option>
            <option>Clean & Modern</option>
          </select>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Generate Storyboard
          </button>
        </div>
      </section>

      {/* GENERATED STORYBOARD */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Generated Storyboard
        </h2>

        <div style={cardStyle}>
          <h3>Scene 1 — Hook Shot</h3>
          <p style={{ opacity: 0.85 }}>
            Close‑up of product with dramatic lighting. Bold text overlay: “Meet the Future.”
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Scene 2 — Feature Highlight</h3>
          <p style={{ opacity: 0.85 }}>
            Medium shot showing hands using the product. Callouts appear around the frame.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Scene 3 — Social Proof</h3>
          <p style={{ opacity: 0.85 }}>
            Quick cuts of customer testimonials with upbeat background music.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Scene 4 — CTA</h3>
          <p style={{ opacity: 0.85 }}>
            Logo animation with text: “Start Your Free Trial Today.”
          </p>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Export Storyboard
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            Export your storyboard as a PDF or share it with your team.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Export Storyboard
          </button>
        </div>
      </section>
    </div>
  );
}
