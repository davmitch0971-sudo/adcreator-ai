import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AIAdCopyOptimizerPage() {
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
        <h1 style={headingStyle}>AI Ad Copy Optimizer</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Rewrite your ad copy for higher CTR, stronger hooks, and cleaner messaging.
        </p>
      </section>

      {/* INPUT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Original Ad Copy
        </h2>

        <div style={panelStyle(theme)}>
          <label>Paste Your Ad Copy</label>
          <textarea
            placeholder="Paste your ad copy here..."
            style={{ ...inputStyle, height: 140 }}
          />

          <label>Platform</label>
          <select style={inputStyle}>
            <option>Facebook</option>
            <option>Instagram</option>
            <option>TikTok</option>
            <option>YouTube</option>
            <option>LinkedIn</option>
          </select>

          <label>Optimization Style</label>
          <select style={inputStyle}>
            <option>High‑CTR</option>
            <option>Short & Punchy</option>
            <option>Benefit‑Driven</option>
            <option>Emotional</option>
            <option>Professional</option>
          </select>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Optimize Ad Copy
          </button>
        </div>
      </section>

      {/* RESULTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Optimized Ad Copy
        </h2>

        <div style={cardStyle}>
          <h3>Version A — High‑CTR Rewrite</h3>
          <p style={{ opacity: 0.85 }}>
            Stop wasting hours creating ads — let AI build your entire campaign in minutes.
            Tap to start your free trial.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Version B — Benefit‑Driven</h3>
          <p style={{ opacity: 0.85 }}>
            Create stunning ads instantly. No editing. No stress. Just results.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Version C — Short & Punchy</h3>
          <p style={{ opacity: 0.85 }}>
            Build ads in minutes — not hours. Try AdCreator‑AI.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Version D — Emotional</h3>
          <p style={{ opacity: 0.85 }}>
            Imagine creating ads without the frustration. Now you can — with AdCreator‑AI.
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
            Export all optimized versions or send them to your ad builder.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Export Optimized Copy
          </button>
        </div>
      </section>
    </div>
  );
}
