import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AICompetitorAnalyzerPage() {
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
        <h1 style={headingStyle}>AI Competitor Analyzer</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Analyze competitor ads and generate stronger, differentiated campaigns.
        </p>
      </section>

      {/* INPUT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Competitor Details
        </h2>

        <div style={panelStyle(theme)}>
          <label>Competitor Brand / Product</label>
          <input
            type="text"
            placeholder="Example: BigAgency Ads Suite"
            style={inputStyle}
          />

          <label>Competitor Ad Links / Descriptions</label>
          <textarea
            placeholder="Paste links or describe their main ads, hooks, and offers..."
            style={{ ...inputStyle, height: 140 }}
          />

          <label>Your Product / Offer</label>
          <input
            type="text"
            placeholder="AdCreator‑AI — full AI creative and campaign builder..."
            style={inputStyle}
          />

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Analyze Competitor
          </button>
        </div>
      </section>

      {/* ANALYSIS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Competitor Analysis
        </h2>

        <div style={cardStyle}>
          <h3>Positioning</h3>
          <p style={{ opacity: 0.85 }}>
            Competitor focuses on “professional agency tools” and emphasizes complexity and depth.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Strengths</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Strong visual branding</li>
            <li>Clear value props for agencies</li>
            <li>Social proof from big clients</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Weaknesses</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Complex onboarding</li>
            <li>Overwhelming feature set</li>
            <li>Not creator‑friendly</li>
          </ul>
        </div>
      </section>

      {/* DIFFERENTIATION */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Differentiation Strategy
        </h2>

        <div style={cardStyle}>
          <h3>How You Stand Out</h3>
          <p style={{ opacity: 0.85 }}>
            AdCreator‑AI focuses on speed, simplicity, and creator‑friendly workflows — turning complex production into one‑click flows.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Key Angles</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>“Built for creators, not agencies.”</li>
            <li>“From idea to full campaign in minutes.”</li>
            <li>“No learning curve — just results.”</li>
          </ul>
        </div>
      </section>

      {/* STRONGER ADS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Stronger Ad Concepts
        </h2>

        <div style={cardStyle}>
          <h3>Concept 1 — Speed vs. Complexity</h3>
          <p style={{ opacity: 0.85 }}>
            Show how traditional tools take hours vs. AdCreator‑AI doing it in minutes.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Concept 2 — Creator‑First Workflow</h3>
          <p style={{ opacity: 0.85 }}>
            Focus on solo creators and small teams who need fast, intuitive tools.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Concept 3 — Full Campaign in One Click</h3>
          <p style={{ opacity: 0.85 }}>
            Highlight the Full Campaign Builder and how it unifies scripts, storyboards, thumbnails, and ads.
          </p>
        </div>
      </section>

      {/* EXPORT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Export Competitive Strategy
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            Export analysis and ad concepts as a strategy brief or send them to your campaign builder.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Export Competitor Report
          </button>
        </div>
      </section>
    </div>
  );
}
