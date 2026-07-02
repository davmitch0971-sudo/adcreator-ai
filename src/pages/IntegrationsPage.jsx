import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function IntegrationsPage() {
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

  const integrationCard = {
    padding: 16,
    borderRadius: 10,
    background: theme === "dark" ? "#111827" : "#f3f4f6",
    border: theme === "dark" ? "1px solid #1f2937" : "1px solid #e5e7eb",
    marginBottom: 16,
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

  return (
    <div style={{ padding: 20 }}>
      {/* HEADER */}
      <section style={sectionStyle}>
        <h1 style={headingStyle}>Integrations</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Connect external services to enhance your AdCreator‑AI workflow.
        </p>
      </section>

      {/* OPENAI */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          OpenAI Integration
        </h2>

        <div style={integrationCard}>
          <h3>API Key</h3>
          <input type="password" placeholder="••••••••••••••" style={inputStyle} />
          <button style={{ ...buttonStyle(theme), padding: "10px 16px" }}>
            Save OpenAI Key
          </button>
        </div>
      </section>

      {/* STRIPE */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Stripe Integration
        </h2>

        <div style={integrationCard}>
          <h3>Stripe Secret Key</h3>
          <input type="password" placeholder="••••••••••••••" style={inputStyle} />
          <button style={{ ...buttonStyle(theme), padding: "10px 16px" }}>
            Save Stripe Key
          </button>
        </div>
      </section>

      {/* GOOGLE ANALYTICS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Google Analytics
        </h2>

        <div style={integrationCard}>
          <h3>Measurement ID</h3>
          <input type="text" placeholder="G-XXXXXXX" style={inputStyle} />
          <button style={{ ...buttonStyle(theme), padding: "10px 16px" }}>
            Connect Analytics
          </button>
        </div>
      </section>

      {/* ZAPIER */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Zapier Automation
        </h2>

        <div style={integrationCard}>
          <h3>Webhook URL</h3>
          <input type="text" placeholder="https://hooks.zapier.com/..." style={inputStyle} />
          <button style={{ ...buttonStyle(theme), padding: "10px 16px" }}>
            Save Webhook
          </button>
        </div>
      </section>

      {/* SOCIAL ACCOUNTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Social Media Accounts
        </h2>

        <div style={integrationCard}>
          <h3>Connect Facebook</h3>
          <button style={{ ...buttonStyle(theme), padding: "10px 16px" }}>
            Connect Facebook
          </button>
        </div>

        <div style={integrationCard}>
          <h3>Connect Instagram</h3>
          <button style={{ ...buttonStyle(theme), padding: "10px 16px" }}>
            Connect Instagram
          </button>
        </div>

        <div style={integrationCard}>
          <h3>Connect TikTok</h3>
          <button style={{ ...buttonStyle(theme), padding: "10px 16px" }}>
            Connect TikTok
          </button>
        </div>
      </section>
    </div>
  );
}
