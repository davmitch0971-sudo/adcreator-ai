import { useTheme } from "../context/ThemeContext";
import { buttonStyle, panelStyle } from "../styles/GlobalStyles";

export default function BrandManagerPage() {
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

  return (
    <div style={{ padding: 20 }}>
      {/* HEADER */}
      <section style={sectionStyle}>
        <h1 style={headingStyle}>Brand Manager</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Store your logos, colors, fonts, and brand rules so AdCreator‑AI can auto‑style everything.
        </p>
      </section>

      {/* BRAND BASICS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Brand Basics
        </h2>

        <div style={panelStyle(theme)}>
          <label>Brand Name</label>
          <input type="text" placeholder="Your brand name" style={inputStyle} />

          <label>Tagline</label>
          <input type="text" placeholder="Short tagline" style={inputStyle} />

          <label>Primary Website</label>
          <input type="text" placeholder="https://yourbrand.com" style={inputStyle} />

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Save Brand Basics
          </button>
        </div>
      </section>

      {/* COLORS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Brand Colors
        </h2>

        <div style={panelStyle(theme)}>
          <label>Primary Color (HEX)</label>
          <input type="text" placeholder="#2563eb" style={inputStyle} />

          <label>Secondary Color (HEX)</label>
          <input type="text" placeholder="#f97316" style={inputStyle} />

          <label>Accent Color (HEX)</label>
          <input type="text" placeholder="#22c55e" style={inputStyle} />

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Save Colors
          </button>
        </div>
      </section>

      {/* FONTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Brand Fonts
        </h2>

        <div style={panelStyle(theme)}>
          <label>Heading Font</label>
          <input type="text" placeholder="e.g. Inter, Poppins" style={inputStyle} />

          <label>Body Font</label>
          <input type="text" placeholder="e.g. Roboto, Open Sans" style={inputStyle} />

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Save Fonts
          </button>
        </div>
      </section>

      {/* LOGO & ASSETS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Logos & Assets
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            Upload your logo and key brand assets so the AI can use them in every ad.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Upload Logo
          </button>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Upload Brand Assets
          </button>
        </div>
      </section>

      {/* BRAND RULES */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Brand Rules & Voice
        </h2>

        <div style={panelStyle(theme)}>
          <textarea
            placeholder="Describe your brand voice, rules, and guidelines..."
            style={{
              ...inputStyle,
              height: 140,
              resize: "none",
            }}
          ></textarea>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Save Brand Rules
          </button>
        </div>
      </section>
    </div>
  );
}
