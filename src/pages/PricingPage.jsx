import { useTheme } from "../context/ThemeContext";
import { buttonStyle, panelStyle } from "../styles/GlobalStyles";
import { Link } from "react-router-dom";

export default function PricingPage() {
  const { theme } = useTheme();

  const sectionStyle = {
    marginBottom: 40,
    padding: 20,
    borderRadius: 12,
    background: theme === "dark" ? "#0b0d14" : "#ffffff",
    boxShadow: theme === "dark"
      ? "0 0 0 1px rgba(255,255,255,0.05)"
      : "0 0 0 1px rgba(0,0,0,0.08)"
  };

  const headingStyle = {
    fontSize: 32,
    fontWeight: 800,
    marginBottom: 12
  };

  return (
    <div style={{ padding: 20 }}>
      <section style={sectionStyle}>
        <h1 style={headingStyle}>Pricing</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Simple, transparent pricing. No contracts. Cancel anytime.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20 }}>
          Choose Your Plan
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20
          }}
        >
          <div style={panelStyle(theme)}>
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>Starter — $19/mo</h3>
            <ul style={{ paddingLeft: 20, lineHeight: 1.6 }}>
              <li>Unlimited posts</li>
              <li>Unlimited captions</li>
              <li>Unlimited templates</li>
              <li>Basic brand memory</li>
            </ul>
            <Link to="/subscription">
              <button
                style={{
                  ...buttonStyle(theme),
                  width: "100%",
                  marginTop: 20,
                  padding: "12px 20px",
                  fontSize: 16
                }}
              >
                Choose Starter
              </button>
            </Link>
          </div>

          <div style={panelStyle(theme)}>
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>Pro — $49/mo</h3>
            <ul style={{ paddingLeft: 20, lineHeight: 1.6 }}>
              <li>Unlimited video ads</li>
              <li>AI voiceovers</li>
              <li>AI motion graphics</li>
              <li>AI auto‑editing</li>
              <li>Advanced brand memory</li>
              <li>Posting plan generator</li>
            </ul>
            <Link to="/subscription">
              <button
                style={{
                  ...buttonStyle(theme),
                  width: "100%",
                  marginTop: 20,
                  padding: "12px 20px",
                  fontSize: 16
                }}
              >
                Choose Pro
              </button>
            </Link>
          </div>

          <div style={panelStyle(theme)}>
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>Enterprise — $99/mo</h3>
            <ul style={{ paddingLeft: 20, lineHeight: 1.6 }}>
              <li>Full AI Cloud OS access</li>
              <li>Planetary Intelligence Grid</li>
              <li>Multiversal Compute Fabric</li>
              <li>Team collaboration</li>
              <li>Enterprise analytics</li>
              <li>Priority support</li>
            </ul>
            <Link to="/subscription">
              <button
                style={{
                  ...buttonStyle(theme),
                  width: "100%",
                  marginTop: 20,
                  padding: "12px 20px",
                  fontSize: 16
                }}
              >
                Choose Enterprise
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>
          Ready to Start?
        </h2>
        <p style={{ opacity: 0.85 }}>
          Join thousands of creators and businesses using AdCreator‑AI.
        </p>

        <Link to="/subscription">
          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 20
            }}
          >
            Start Free Trial
          </button>
        </Link>
      </section>
    </div>
  );
}
