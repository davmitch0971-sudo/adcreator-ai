import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AILandingPageGeneratorPage() {
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

  const blockStyle = {
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
        <h1 style={headingStyle}>AI Landing Page Generator</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Generate complete landing pages from a single prompt.
        </p>
      </section>

      {/* PROMPT INPUT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Landing Page Prompt
        </h2>

        <div style={panelStyle(theme)}>
          <label>Product / Offer</label>
          <input
            type="text"
            placeholder="AI-powered marketing platform that builds campaigns automatically..."
            style={inputStyle}
          />

          <label>Audience</label>
          <input
            type="text"
            placeholder="Creators, marketers, small business owners..."
            style={inputStyle}
          />

          <label>Page Style</label>
          <select style={inputStyle}>
            <option>Modern & Clean</option>
            <option>Bold & Energetic</option>
            <option>Minimalist</option>
            <option>Cinematic</option>
          </select>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Generate Landing Page
          </button>
        </div>
      </section>

      {/* GENERATED PAGE SECTIONS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Generated Landing Page
        </h2>

        {/* HERO */}
        <div style={blockStyle}>
          <h3>Hero Section</h3>
          <p style={{ opacity: 0.85 }}>
            Build stunning ad campaigns in minutes — powered by AI.  
            CTA: Start Free Trial
          </p>
        </div>

        {/* VALUE PROPS */}
        <div style={blockStyle}>
          <h3>Value Proposition</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Automated scripts, storyboards, thumbnails, and ads</li>
            <li>Lightning-fast creative workflow</li>
            <li>Studio-quality outputs every time</li>
          </ul>
        </div>

        {/* FEATURES */}
        <div style={blockStyle}>
          <h3>Feature Blocks</h3>
          <p style={{ opacity: 0.85 }}>
            Feature 1 — AI Script Generator  
            Feature 2 — AI Storyboard Builder  
            Feature 3 — AI Thumbnail Creator  
            Feature 4 — AI Voiceover Engine
          </p>
        </div>

        {/* TESTIMONIALS */}
        <div style={blockStyle}>
          <h3>Testimonials</h3>
          <p style={{ opacity: 0.85 }}>
            “AdCreator‑AI cut our production time by 80%.”  
            “The fastest way to build ads we’ve ever used.”
          </p>
        </div>

        {/* PRICING */}
        <div style={blockStyle}>
          <h3>Pricing Section</h3>
          <p style={{ opacity: 0.85 }}>
            Starter — $19/mo  
            Pro — $49/mo  
            Agency — $99/mo
          </p>
        </div>

        {/* CTA */}
        <div style={blockStyle}>
          <h3>Final CTA</h3>
          <p style={{ opacity: 0.85 }}>
            Ready to build your next campaign?  
            CTA: Get Started
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
            Export your landing page as a structured layout or send it to your website builder.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Export Landing Page
          </button>
        </div>
      </section>
    </div>
  );
}
