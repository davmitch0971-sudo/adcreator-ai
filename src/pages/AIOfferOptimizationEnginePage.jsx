import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AIOfferOptimizationEnginePage() {
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
        <h1 style={headingStyle}>AI Offer Optimization Engine</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Optimize pricing, bonuses, guarantees, positioning, and perceived value using AI‑powered offer intelligence.
        </p>
      </section>

      {/* INPUTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Offer Inputs
        </h2>

        <div style={panelStyle(theme)}>
          <label>Product / Offer Name</label>
          <input
            type="text"
            placeholder="AdCreator‑AI Pro"
            style={inputStyle}
          />

          <label>Target Audience</label>
          <input
            type="text"
            placeholder="Creators, marketers, SMBs..."
            style={inputStyle}
          />

          <label>Current Price</label>
          <input
            type="text"
            placeholder="$49/mo"
            style={inputStyle}
          />

          <label>Offer Components</label>
          <textarea
            placeholder="List features, bonuses, guarantees..."
            style={{ ...inputStyle, minHeight: 120 }}
          />

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Optimize Offer
          </button>
        </div>
      </section>

      {/* VALUE ANALYSIS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Value Analysis
        </h2>

        <div style={cardStyle}>
          <h3>Perceived Value Drivers</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Speed of transformation.</li>
            <li>Depth of features.</li>
            <li>Brand positioning.</li>
            <li>Social proof.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Value Gaps</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Missing emotional appeal.</li>
            <li>Weak differentiation.</li>
            <li>Guarantee not strong enough.</li>
          </ul>
        </div>
      </section>

      {/* OFFER STRUCTURE */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Offer Structure Recommendations
        </h2>

        <div style={cardStyle}>
          <h3>Core Offer</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Clear transformation statement.</li>
            <li>Strong positioning angle.</li>
            <li>Defined deliverables.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Bonuses</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Fast‑action bonuses.</li>
            <li>Templates or swipe files.</li>
            <li>Exclusive community access.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Guarantees</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>30‑day risk‑free guarantee.</li>
            <li>“Double your output or your money back.”</li>
            <li>“Results in 7 days or we work with you.”</li>
          </ul>
        </div>
      </section>

      {/* PRICING OPTIMIZATION */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Pricing Optimization
        </h2>

        <div style={cardStyle}>
          <h3>AI Pricing Suggestions</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Increase perceived value before raising price.</li>
            <li>Introduce tiered pricing.</li>
            <li>Add annual plan with discount.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Psychological Pricing</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Charm pricing ($49 → $47).</li>
            <li>Anchor pricing (compare to agency costs).</li>
            <li>Value stacking.</li>
          </ul>
        </div>
      </section>

      {/* EXPORT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Export & Integrations
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            Export optimized offer or send it to the Sales Page Generator.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            Export Offer
          </button>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Send to Sales Page Generator
          </button>
        </div>
      </section>
    </div>
  );
}
