import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";
import { callAdCreator } from "../api/adcreator";

export default function MotionGraphics() {
  const { theme } = useTheme();

  const [timeline, setTimeline] = useState([]);
  const [graphics, setGraphics] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadTimeline = () => {
    const projects = JSON.parse(localStorage.getItem("projects") || "[]");
    const last = projects.reverse().find((p) => p.generator === "AI Video Editor");
    if (!last) return alert("No timeline found.");
    setTimeline(last.data.timeline);
  };

  const generateGraphics = async () => {
    if (timeline.length === 0) return alert("Load timeline first.");
    setLoading(true);

    const payload = {
      scenes: timeline.map((scene) => ({
        id: scene.id,
        textOverlay: scene.textOverlay,
        notes: scene.notes
      }))
    };

    const r = await callAdCreator("motion-graphics", payload);

    setGraphics(r.graphics || []);
    setLoading(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>Motion Graphics Engine</h1>

      <div style={{ ...panelStyle(theme), marginBottom: 16 }}>
        <button
          onClick={loadTimeline}
          style={{ ...buttonStyle(theme), marginRight: 10 }}
        >
          Load Timeline
        </button>

        <button
          onClick={generateGraphics}
          style={buttonStyle(theme)}
        >
          {loading ? "Generating..." : "Generate Motion Graphics"}
        </button>
      </div>

      {graphics.length > 0 && (
        <div style={panelStyle(theme)}>
          <h2 style={{ marginTop: 0 }}>Generated Graphics</h2>
          {graphics.map((g) => (
            <div key={g.id} style={{ marginBottom: 12 }}>
              <strong>Scene {g.id}</strong>
              <video
                src={g.url}
                controls
                style={{
                  width: "100%",
                  borderRadius: 8,
                  marginTop: 6,
                  background: "#000"
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
