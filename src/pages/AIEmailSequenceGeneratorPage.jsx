import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AIEmailSequenceGeneratorPage() {
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
        <h1 style={headingStyle}>AI Email Sequence Generator</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Generate full email funnels — onboarding, nurture, sales, and re‑engagement.
        </p>
      </section>

      {/* INPUT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Sequence Details
        </h2>

        <div style={panelStyle(theme)}>
          <label>Product / Offer</label>
          <input
            type="text"
            placeholder="AdCreator‑AI — full AI creative suite..."
            style={inputStyle}
          />

          <label>Audience</label>
          <input
            type="text"
            placeholder="Creators, marketers, agencies..."
            style={inputStyle}
          />

          <label>Sequence Type</label>
          <select style={inputStyle}>
            <option>Onboarding</option>
            <option>Sales Funnel</option>
            <option>Nurture Sequence</option>
            <option>Re‑Engagement</option>
          </select>

          <label>Length</label>
          <select style={inputStyle}>
            <option>3 Emails</option>
            <option>5 Emails</option>
            <option>7 Emails</option>
          </select>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Generate Email Sequence
          </button>
        </div>
      </section>

      {/* OUTPUT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Generated Email Sequence
        </h2>

        {/* EMAIL 1 */}
        <div style={cardStyle}>
          <h3>Email 1 — Welcome & Value</h3>
          <p style={{ opacity: 0.85 }}>
            Welcome to AdCreator‑AI! You’re about to unlock a faster, smarter way to create ads.
            Here’s how to get started in under 5 minutes…
          </p>
        </div>

        {/* EMAIL 2 */}
        <div style={cardStyle}>
          <h3>Email 2 — Problem & Solution</h3>
          <p style={{ opacity: 0.85 }}>
            Most creators waste hours scripting, editing, and designing. AdCreator‑AI automates
            the entire workflow — saving you time and boosting output.
          </p>
        </div>

        {/* EMAIL 3 */}
        <div style={cardStyle}>
          <h3>Email 3 — Social Proof</h3>
          <p style={{ opacity: 0.85 }}>
            Thousands of creators use AdCreator‑AI to build campaigns in minutes. Here’s how they do it…
          </p>
        </div>

        {/* EMAIL 4 */}
        <div style={cardStyle}>
          <h3>Email 4 — Feature Deep Dive</h3>
          <p style={{ opacity: 0.85 }}>
            From scripts to thumbnails to full campaigns — here’s a breakdown of what you can generate instantly.
          </p>
        </div>

        {/* EMAIL 5 */}
        <div style={cardStyle}>
          <h3>Email 5 — CTA / Offer</h3>
          <p style={{ opacity: 0.85 }}>
            Ready to upgrade your workflow? Start your free trial and build your first campaign today.
          </p>
        </div>
      </section>

      {/* EXPORT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Export Sequence
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            Export your email sequence or send it to your automation platform.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Export Email Sequence
          </button>
        </div>
      </section>
    </div>
  );
}
