import { useTheme } from "../context/ThemeContext";
import { buttonStyle, panelStyle } from "../styles/GlobalStyles";

export default function TemplateBuilderPage() {
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

  const templateCard = {
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
        <h1 style={headingStyle}>Template Builder</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Create reusable ad templates with scenes, overlays, and brand styling.
        </p>

        <button
          style={{
            ...buttonStyle(theme),
            padding: "12px 20px",
            fontSize: 16,
            marginTop: 20,
          }}
        >
          + New Template
        </button>
      </section>

      {/* EXISTING TEMPLATES */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Your Templates
        </h2>

        <div style={templateCard}>
          <h3>Product Spotlight Template</h3>
          <p style={{ opacity: 0.85, marginBottom: 10 }}>
            3 scenes — optimized for product demos.
          </p>
          <button style={{ ...buttonStyle(theme), padding: "8px 14px" }}>
            Edit Template
          </button>
        </div>

        <div style={templateCard}>
          <h3>Testimonial Template</h3>
          <p style={{ opacity: 0.85, marginBottom: 10 }}>
            4 scenes — includes caption overlays.
          </p>
          <button style={{ ...buttonStyle(theme), padding: "8px 14px" }}>
            Edit Template
          </button>
        </div>
      </section>

      {/* TEMPLATE EDITOR */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Template Editor
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            Add scenes, overlays, text blocks, and brand styling.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "10px 16px",
              marginBottom: 10,
              width: "100%",
            }}
          >
            + Add Scene
          </button>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "10px 16px",
              marginBottom: 10,
              width: "100%",
            }}
          >
            + Add Text Overlay
          </button>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "10px 16px",
              marginBottom: 10,
              width: "100%",
            }}
          >
            + Add CTA Block
          </button>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "10px 16px",
              marginBottom: 10,
              width: "100%",
            }}
          >
            Apply Brand Styling
          </button>
        </div>
      </section>

      {/* SAVE */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Save Template
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            Save your template for future ad generation.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Save Template
          </button>
        </div>
      </section>
    </div>
  );
}
