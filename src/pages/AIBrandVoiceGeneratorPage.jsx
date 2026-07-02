import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AIBrandVoiceGeneratorPage() {
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
        <h1 style={headingStyle}>AI Brand Voice Generator</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Generate a complete brand voice system — tone, personality, messaging pillars, and sample copy.
        </p>
      </section>

      {/* INPUT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Brand Voice Inputs
        </h2>

        <div style={panelStyle(theme)}>
          <label>Brand Name</label>
          <input
            type="text"
            placeholder="AdCreator‑AI"
            style={inputStyle}
          />

          <label>Brand Personality</label>
          <select style={inputStyle}>
            <option>Bold & Energetic</option>
            <option>Friendly & Approachable</option>
            <option>Premium & Elegant</option>
            <option>Clean & Minimal</option>
            <option>Technical & Expert</option>
          </select>

          <label>Audience</label>
          <input
            type="text"
            placeholder="Creators, marketers, agencies..."
            style={inputStyle}
          />

          <label>Communication Style</label>
          <select style={inputStyle}>
            <option>Short & Punchy</option>
            <option>Warm & Conversational</option>
            <option>Professional & Clear</option>
            <option>Playful & Fun</option>
          </select>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Generate Brand Voice
          </button>
        </div>
      </section>

      {/* OUTPUT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Brand Voice System
        </h2>

        <div style={cardStyle}>
          <h3>Brand Personality Summary</h3>
          <p style={{ opacity: 0.85 }}>
            Confident, modern, energetic, and helpful. Focused on clarity, speed, and empowerment.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Messaging Pillars</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Speed — “Create faster than ever.”</li>
            <li>Empowerment — “You don’t need a big team to create big results.”</li>
            <li>Clarity — “No complexity. No friction.”</li>
            <li>Innovation — “AI that feels like magic.”</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Brand Vocabulary</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>“Instantly”</li>
            <li>“Effortless”</li>
            <li>“Create smarter”</li>
            <li>“Built for creators”</li>
            <li>“One‑click workflow”</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Voice Guidelines</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Do: Be clear, direct, and energetic.</li>
            <li>Do: Focus on benefits, not features.</li>
            <li>Don’t: Use jargon or overly technical language.</li>
            <li>Don’t: Sound robotic or corporate.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Sample Brand Copy</h3>
          <p style={{ opacity: 0.85 }}>
            “Create stunning ads in minutes — not hours. AdCreator‑AI gives you the power to build full campaigns instantly, without the stress.”
          </p>
        </div>
      </section>

      {/* EXPORT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Export Brand Voice
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            Export your brand voice system or send it to your brand style generator.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Export Brand Voice
          </button>
        </div>
      </section>
    </div>
  );
}
