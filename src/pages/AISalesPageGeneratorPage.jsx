import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AISalesPageGeneratorPage() {
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
        <h1 style={headingStyle}>AI Sales Page Generator</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Generate modern SaaS‑style sales pages with clear value props, feature sections, social proof, and CTAs.
        </p>
      </section>

      {/* INPUTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Sales Page Inputs
        </h2>

        <div style={panelStyle(theme)}>
          <label>Product Name</label>
          <input
            type="text"
            placeholder="AdCreator‑AI"
            style={inputStyle}
          />

          <label>One‑line Value Proposition</label>
          <input
            type="text"
            placeholder="Create full ad campaigns in minutes, not hours."
            style={inputStyle}
          />

          <label>Primary Audience</label>
          <input
            type="text"
            placeholder="Creators, marketers, agencies..."
            style={inputStyle}
          />

          <label>Core Outcome</label>
          <input
            type="text"
            placeholder="Launch high‑performing campaigns faster with AI‑powered tools."
            style={inputStyle}
          />

          <label>Plan / Pricing Focus</label>
          <input
            type="text"
            placeholder="Pro plan starting at $49/month."
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
            Generate Sales Page
          </button>
        </div>
      </section>

      {/* HERO SECTION */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Hero Section
        </h2>

        <div style={cardStyle}>
          <h3>Headline</h3>
          <p style={{ opacity: 0.85 }}>
            “Create high‑performing ad campaigns in minutes with AdCreator‑AI.”
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Subheadline</h3>
          <p style={{ opacity: 0.85 }}>
            “All‑in‑one AI creative suite for modern marketers, creators, and agencies.”
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Primary CTA</h3>
          <p style={{ opacity: 0.85 }}>
            “Start your 14‑day free trial” — with a secondary “View pricing” link.
          </p>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Key Value Props
        </h2>

        <div style={cardStyle}>
          <h3>Value Prop 1 — Speed</h3>
          <p style={{ opacity: 0.85 }}>
            “Go from idea to full campaign in minutes, not days.”
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Value Prop 2 — Consistency</h3>
          <p style={{ opacity: 0.85 }}>
            “Generate consistent, on‑brand creatives across every channel.”
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Value Prop 3 — Control</h3>
          <p style={{ opacity: 0.85 }}>
            “Keep creative control while letting AI handle the heavy lifting.”
          </p>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Feature Sections
        </h2>

        <div style={cardStyle}>
          <h3>Feature Group — Campaign Creation</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>AI Video Ad Generator</li>
            <li>AI Creative Brief Generator</li>
            <li>AI UGC Script Generator</li>
            <li>AI Ad Variations Engine</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Feature Group — Brand & Assets</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Brand style profiles</li>
            <li>Asset library integration</li>
            <li>Template builder</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Feature Group — Optimization</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Ad copy optimization</li>
            <li>SEO content generation</li>
            <li>Audience targeting insights</li>
          </ul>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Social Proof
        </h2>

        <div style={cardStyle}>
          <h3>Testimonials</h3>
          <p style={{ opacity: 0.85 }}>
            “We cut our campaign build time by 80% with AdCreator‑AI.”
          </p>
          <p style={{ opacity: 0.85 }}>
            “Our creative team finally has a system that keeps everything consistent.”
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Logos / Badges</h3>
          <p style={{ opacity: 0.85 }}>
            “Trusted by agencies, creators, and in‑house marketing teams.”
          </p>
        </div>
      </section>

      {/* OBJECTIONS & FAQ */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Objections & FAQ
        </h2>

        <div style={cardStyle}>
          <h3>“Is this going to replace my team?”</h3>
          <p style={{ opacity: 0.85 }}>
            No — AdCreator‑AI augments your team, giving them a faster, more consistent way to ship campaigns.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>“How hard is it to get started?”</h3>
          <p style={{ opacity: 0.85 }}>
            You can generate your first campaign in under 10 minutes with guided workflows.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>“What if it doesn’t work for me?”</h3>
          <p style={{ opacity: 0.85 }}>
            Try it risk‑free with a 14‑day trial and cancel anytime.
          </p>
        </div>
      </section>

      {/* PRICING & CTA */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Pricing & Final CTA
        </h2>

        <div style={cardStyle}>
          <h3>Pricing Snapshot</h3>
          <p style={{ opacity: 0.85 }}>
            “Plans starting at $49/month — built for solo creators, teams, and agencies.”
          </p>
        </div>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            Final CTA: “Start your free trial and build your next campaign with AdCreator‑AI.”
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            Generate Full Sales Page Copy
          </button>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Export to Landing Page Builder
          </button>
        </div>
      </section>
    </div>
  );
}
