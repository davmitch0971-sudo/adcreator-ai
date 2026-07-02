import { useTheme } from "../context/ThemeContext";
import { buttonStyle, panelStyle } from "../styles/GlobalStyles";
import { Link } from "react-router-dom";

export default function OnboardingPage() {
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

  return (
    <div style={{ padding: 20 }}>
      {/* HEADER */}
      <section style={sectionStyle}>
        <h1 style={headingStyle}>Welcome to AdCreator‑AI</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Let's set up your brand and generate your first AI‑powered ad.
        </p>
      </section>

      {/* QUICK START */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Quick Start
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          <div style={panelStyle(theme)}>
            <h3 style={{ marginBottom: 10 }}>1. Add Your Brand</h3>
            <p style={{ opacity: 0.85 }}>
              Upload your logo, brand colors, fonts, and product details.
            </p>
            <Link to="/brands">
              <button
                style={{
                  ...buttonStyle(theme),
                  width: "100%",
                  marginTop: 20,
                  padding: "12px 20px",
                  fontSize: 16,
                }}
              >
                Add Brand
              </button>
            </Link>
          </div>

          <div style={panelStyle(theme)}>
            <h3 style={{ marginBottom: 10 }}>2. Create Your First Project</h3>
            <p style={{ opacity: 0.85 }}>
              Start a new ad campaign or content project.
            </p>
            <Link to="/projects">
              <button
                style={{
                  ...buttonStyle(theme),
                  width: "100%",
                  marginTop: 20,
                  padding: "12px 20px",
                  fontSize: 16,
                }}
              >
                New Project
              </button>
            </Link>
          </div>

          <div style={panelStyle(theme)}>
            <h3 style={{ marginBottom: 10 }}>3. Generate Your First Ad</h3>
            <p style={{ opacity: 0.85 }}>
              Use the SuperGenerator to instantly create a full video ad.
            </p>
            <Link to="/videos">
              <button
                style={{
                  ...buttonStyle(theme),
                  width: "100%",
                  marginTop: 20,
                  padding: "12px 20px",
                  fontSize: 16,
                }}
              >
                Generate Ad
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* OPTIONAL SETUP */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Optional Setup
        </h2>

        <ul style={{ paddingLeft: 20, lineHeight: 1.6 }}>
          <li>Set up your posting plan</li>
          <li>Enable brand memory</li>
          <li>Upload assets to the AI Asset Studio</li>
          <li>Customize templates</li>
          <li>Explore advanced AI modules</li>
        </ul>
      </section>

      {/* FINAL CTA */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>
          You're Ready to Build
        </h2>
        <p style={{ opacity: 0.85 }}>
          Start creating ads, content, and full campaigns with your AI cloud.
        </p>

        <Link to="/videos">
          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 20,
            }}
          >
            Start Creating
          </button>
        </Link>
      </section>
    </div>
  );
}
