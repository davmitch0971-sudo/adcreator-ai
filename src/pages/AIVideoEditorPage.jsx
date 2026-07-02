import { useTheme } from "../context/ThemeContext";
import { buttonStyle, panelStyle } from "../styles/GlobalStyles";

export default function AIVideoEditorPage() {
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

  const timelineStyle = {
    height: 120,
    background: theme === "dark" ? "#1f2937" : "#e5e7eb",
    borderRadius: 10,
    marginBottom: 20,
  };

  const clipStyle = {
    height: 60,
    background: theme === "dark" ? "#374151" : "#d1d5db",
    borderRadius: 8,
    marginBottom: 10,
  };

  return (
    <div style={{ padding: 20 }}>
      {/* HEADER */}
      <section style={sectionStyle}>
        <h1 style={headingStyle}>AI Video Editor</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Edit scenes, trim clips, add overlays, and export your final video ad.
        </p>

        <button
          style={{
            ...buttonStyle(theme),
            padding: "12px 20px",
            fontSize: 16,
            marginTop: 20,
          }}
        >
          + Add New Clip
        </button>
      </section>

      {/* VIDEO PREVIEW */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Video Preview
        </h2>

        <div
          style={{
            height: 320,
            background: theme === "dark" ? "#111827" : "#f3f4f6",
            borderRadius: 12,
            marginBottom: 20,
          }}
        ></div>

        <button
          style={{
            ...buttonStyle(theme),
            padding: "12px 20px",
            fontSize: 16,
          }}
        >
          Play / Pause
        </button>
      </section>

      {/* TIMELINE */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Timeline
        </h2>

        <div style={timelineStyle}></div>

        <div style={clipStyle}></div>
        <div style={clipStyle}></div>
        <div style={clipStyle}></div>
      </section>

      {/* EDITING TOOLS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Editing Tools
        </h2>

        <div style={panelStyle(theme)}>
          <button
            style={{
              ...buttonStyle(theme),
              padding: "10px 16px",
              marginBottom: 10,
              width: "100%",
            }}
          >
            Trim Clip
          </button>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "10px 16px",
              marginBottom: 10,
              width: "100%",
            }}
          >
            Add Overlay
          </button>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "10px 16px",
              marginBottom: 10,
              width: "100%",
            }}
          >
            Add Captions
          </button>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "10px 16px",
              marginBottom: 10,
              width: "100%",
            }}
          >
            Add Transition
          </button>
        </div>
      </section>

      {/* EXPORT */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Export Video
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            Export your final video in MP4, MOV, or WebM.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Export Video
          </button>
        </div>
      </section>
    </div>
  );
}
