import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";
import { callAdCreator } from "../api/adcreator";

export default function SceneToVideo() {
  const { theme } = useTheme();

  const [timeline, setTimeline] = useState([]);
  const [clips, setClips] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadTimeline = () => {
    const projects = JSON.parse(localStorage.getItem("projects") || "[]");
    const last = projects.reverse().find((p) => p.generator === "AI Video Editor");
    if (!last) return alert("No timeline found. Save a Video Editor project first.");
    setTimeline(last.data.timeline);
  };

  const generateClips = async () => {
    if (timeline.length === 0) return alert("Load a timeline first.");
    setLoading(true);

    const payload = {
      scenes: timeline.map((scene) => ({
        id: scene.id,
        visual: scene.visual,
        voiceover: scene.voiceover,
        textOverlay: scene.textOverlay,
        notes: scene.notes
      }))
    };

    const r = await callAdCreator("scene-video", payload);

    setClips(r.clips || []);
    setLoading(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>Scene‑to‑Video Generation</h1>

      <div style={{ ...panelStyle(theme), marginBottom: 16 }}>
        <button
          onClick={loadTimeline}
          style={{ ...buttonStyle(theme), marginRight: 10 }}
        >
          Load Timeline
        </button>

        <button
          onClick={generateClips}
          style={buttonStyle(theme)}
        >
          {loading ? "Generating Clips..." : "Generate Video Clips"}
        </button>
      </div>

      {timeline.length > 0 && (
        <div style={{ ...panelStyle(theme), marginBottom: 16 }}>
          <h2 style={{ marginTop: 0 }}>Timeline Loaded</h2>
          {timeline.map((scene) => (
            <div key={scene.id} style={{ marginBottom: 10 }}>
              <strong>Scene {scene.id}</strong> — {scene.time}
              <p style={{ margin: 0, opacity: 0.7 }}>{scene.visual}</p>
            </div>
          ))}
        </div>
      )}

      {clips.length > 0 && (
        <div style={panelStyle(theme)}>
          <h2 style={{ marginTop: 0 }}>Generated Clips</h2>
          {clips.map((clip) => (
            <div key={clip.id} style={{ marginBottom: 12 }}>
              <strong>Clip {clip.id}</strong>
              <video
                src={clip.url}
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
