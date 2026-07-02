import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AIOfferBuilderPage() {
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
        <h1 style={headingStyle}>AI Offer Builder</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Craft irresistible offers, bonuses, guarantees, and pricing angles that convert.
        </p>
      </section>

      {/* INPUTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Offer Inputs
        </h2>

        <div style={panelStyle(theme)}>
          <label>Product / Service</label>
          <input
            type="text"
            placeholder="AdCreator‑AI — full AI creative suite..."
            style={inputStyle}
          />

          <label>Target Audience</label>
          <input
            type="text"
            placeholder="Creators, marketers, agencies..."
            style={inputStyle}
          />

          <label>Main Outcome</label>
          <input
            type="text"
            placeholder="Create full campaigns in minutes instead of hours..."
            style={inputStyle}
          />

          <label>Price Range</label>
          <input
            type="text"
            placeholder="$49–$199/month"
            style={inputStyle}
          />

          <label>Offer Type</label>
          <select style={inputStyle}>
            <option>SaaS Subscription</option>
            <option>Course / Training</option>
            <option>Service / Agency</option>
            <option>Coaching / Consulting</option>
          </select>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Generate Offer Stack
          </button>
        </div>
      </section>

      {/* CORE OFFER */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Core Offer
        </h2>

        <div style={cardStyle}>
          <h3>Main Offer</h3>
          <p style={{ opacity: 0.85 }}>
            AdCreator‑AI Pro — full access to AI campaign tools, video ad generator, creative brief generator, and more.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Key Benefits</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Create full campaigns in minutes</li>
            <li>Eliminate creative bottlenecks</li>
            <li>Consistent, high-performing ad output</li>
          </ul>
        </div>
      </section>

      {/* BONUS STACK */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Bonus Stack
        </h2>

        <div style={cardStyle}>
          <h3>Bonus 1 — Launch Templates</h3>
          <p style={{ opacity: 0.85 }}>
            Pre-built campaign templates for launches, evergreen funnels, and seasonal promos.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Bonus 2 — UGC Script Pack</h3>
          <p style={{ opacity: 0.85 }}>
            Ready-to-use UGC scripts for TikTok, Reels, and Shorts.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Bonus 3 — Ad Variations Library</h3>
          <p style={{ opacity: 0.85 }}>
            50+ proven hooks, angles, and frameworks for high-performing ads.
          </p>
        </div>
      </section>

      {/* GUARANTEE & RISK REVERSAL */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Guarantee & Risk Reversal
        </h2>

        <div style={cardStyle}>
          <h3>Guarantee</h3>
          <p style={{ opacity: 0.85 }}>
            “Try AdCreator‑AI for 30 days. If you don’t create campaigns faster, get your money back.”
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Risk Reversal</h3>
          <p style={{ opacity: 0.85 }}>
            No contracts, cancel anytime, keep any campaigns you’ve already generated.
          </p>
        </div>
      </section>

      {/* PRICING ANGLES */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Pricing Angles
        </h2>

        <div style={cardStyle}>
          <h3>Anchor Pricing</h3>
          <p style={{ opacity: 0.85 }}>
            “Agencies charge $2,000+ per campaign. AdCreator‑AI gives you unlimited campaigns for a fraction of that.”
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Value Justification</h3>
          <p style={{ opacity: 0.85 }}>
            “If AdCreator‑AI helps you launch even one winning campaign per month, it pays for itself.”
          </p>
        </div>
      </section>

      {/* EXPORT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Export Offer
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            Export your full offer stack or send it to the Sales Page Generator.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            Export Offer Stack
          </button>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Send to AI Sales Page Generator
          </button>
        </div>
      </section>
    </div>
  );
}
