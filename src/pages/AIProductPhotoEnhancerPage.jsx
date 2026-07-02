import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AIProductPhotoEnhancerPage() {
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
        <h1 style={headingStyle}>AI Product Photo Enhancer</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Upgrade raw product photos into studio‑quality, ad‑ready images.
        </p>
      </section>

      {/* UPLOAD + SETTINGS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Upload & Enhancement Settings
        </h2>

        <div style={panelStyle(theme)}>
          <label>Upload Product Photo</label>
          <input type="file" style={inputStyle} />

          <label>Background Style</label>
          <select style={inputStyle}>
            <option>Clean White</option>
            <option>Soft Gradient</option>
            <option>Studio Dark</option>
            <option>On‑Brand Color</option>
          </select>

          <label>Enhancement Level</label>
          <select style={inputStyle}>
            <option>Subtle</option>
            <option>Standard</option>
            <option>High Impact</option>
          </select>

          <label>Output Use Case</label>
          <select style={inputStyle}>
            <option>Website Product Page</option>
            <option>Social Media Ad</option>
            <option>Marketplace Listing</option>
            <option>Print Catalog</option>
          </select>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Enhance Photo
          </button>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Before & After Preview
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
          }}
        >
          <div style={cardStyle}>
            <h3>Original Photo</h3>
            <div
              style={{
                height: 200,
                background: theme === "dark" ? "#1f2937" : "#e5e7eb",
                borderRadius: 10,
                marginTop: 10,
              }}
            ></div>
          </div>

          <div style={cardStyle}>
            <h3>Enhanced Photo</h3>
            <div
              style={{
                height: 200,
                background: theme === "dark" ? "#1f2937" : "#e5e7eb",
                borderRadius: 10,
                marginTop: 10,
              }}
            ></div>
            <button
              style={{
                ...buttonStyle(theme),
                padding: "8px 14px",
                marginTop: 10,
              }}
            >
              Download Enhanced Photo
            </button>
          </div>
        </div>
      </section>

      {/* VARIANTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Ad‑Ready Variants
        </h2>

        <div style={cardStyle}>
          <h3>Social Media Variant</h3>
          <p style={{ opacity: 0.85 }}>
            Cropped square, bold contrast, optimized for feeds and carousels.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Website Product Variant</h3>
          <p style={{ opacity: 0.85 }}>
            Clean background, consistent lighting, ideal for product grids.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Marketplace Variant</h3>
          <p style={{ opacity: 0.85 }}>
            Compliance‑friendly background and framing for marketplaces.
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
            Export enhanced photos in multiple sizes and formats for different platforms.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Export All Variants
          </button>
        </div>
      </section>
    </div>
  );
}
