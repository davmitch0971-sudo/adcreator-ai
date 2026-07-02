import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AIAudienceTargetingEnginePage() {
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
        <h1 style={headingStyle}>AI Audience Targeting Engine</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Generate audience segments, targeting logic, and platform‑ready targeting sets.
        </p>
      </section>

      {/* INPUT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Campaign & Audience Details
        </h2>

        <div style={panelStyle(theme)}>
          <label>Product / Offer</label>
          <input
            type="text"
            placeholder="AI-powered ad creation platform..."
            style={inputStyle}
          />

          <label>Ideal Customer Profile</label>
          <textarea
            placeholder="Freelance creators, small agencies, solo marketers..."
            style={{ ...inputStyle, height: 120 }}
          />

          <label>Primary Goal</label>
          <select style={inputStyle}>
            <option>Sales</option>
            <option>Leads</option>
            <option>Traffic</option>
            <option>Awareness</option>
          </select>

          <label>Platforms</label>
          <select style={inputStyle}>
            <option>Meta (Facebook / Instagram)</option>
            <option>Google / YouTube</option>
            <option>TikTok</option>
            <option>LinkedIn</option>
            <option>All Platforms</option>
          </select>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Generate Targeting Strategy
          </button>
        </div>
      </section>

      {/* OUTPUT: SEGMENTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Audience Segments
        </h2>

        <div style={cardStyle}>
          <h3>Segment 1 — Pro Creators</h3>
          <p style={{ opacity: 0.85 }}>
            Freelance video editors, content creators, and small agencies who need faster production.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Segment 2 — Solo Marketers</h3>
          <p style={{ opacity: 0.85 }}>
            One‑person marketing teams at SaaS startups and small businesses.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Segment 3 — Growing Agencies</h3>
          <p style={{ opacity: 0.85 }}>
            Agencies scaling client work and needing automation for creative output.
          </p>
        </div>
      </section>

      {/* OUTPUT: TARGETING LOGIC */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Targeting Logic (Example: Meta Ads)
        </h2>

        <div style={cardStyle}>
          <h3>Interests</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Video editing</li>
            <li>Content creation</li>
            <li>Digital marketing</li>
            <li>Advertising agencies</li>
            <li>Social media tools</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Behaviors</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Engaged shoppers</li>
            <li>Business page admins</li>
            <li>Frequent online buyers</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Demographics</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Age: 22–45</li>
            <li>Locations: US, UK, CA, AU, EU</li>
            <li>Job roles: Marketing, Creative, Founder</li>
          </ul>
        </div>
      </section>

      {/* EXPORT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Export Targeting Sets
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            Export audience segments and targeting logic for use in ad platforms.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Export Targeting Strategy
          </button>
        </div>
      </section>
    </div>
  );
}
