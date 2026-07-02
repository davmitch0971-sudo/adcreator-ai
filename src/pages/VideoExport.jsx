import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";
import { callAdCreator } from "../api/adcreator";

export default function VideoExport() {
  const { theme } = useTheme();

  const [clips, setClips] = useState([]);
  const [voices, setVoices] = useState([]);
  const [graphics, setGraphics] = useState([]);
  const [finalVideo, setFinalVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadAssets = () => {
    const projects = JSON.parse(localStorage.getItem("projects") || "[]");

    const clipProject = projects.find((p) => p.generator === "Scene-to-Video");
    const voiceProject = projects.find((p) => p.generator === "AI Voice Lab");
    const graphicsProject = projects.find((p) => p.generator === "Motion Graphics");

    if (!clipProject) return alert("No video clips found.");
    if (!voiceProject) return alert("No voiceovers found.");
    if (!graphicsProject) return alert("No motion graphics found.");

    setClips(clipProject.data.clips);
    setVoices(voiceProject.data.voices);
    setGraphics(graphicsProject.data.graphics);
  };

  const exportFinalVideo = async () => {
    if (!clips.length || !voices.length || !graphics.length)
      return alert("Load all assets first.");

    setLoading(true);

    const payload = {
      clips,
      voices,
      graphics,
      format: "mp4",
      resolution: "1080p"
    };

    const r = await callAdCreator("video-export", payload);

    setFinalVideo(r.url || null);
    setLoading(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>Video Export Pipeline</h1>

      <div style={{ ...panelStyle(theme), marginBottom: 16 }}>
        <button
          onClick={loadAssets}
          style={{ ...buttonStyle(theme), marginRight: 10 }}
        >
          Load All Assets
        </button>

        <button
          onClick={exportFinalVideo}
          style={buttonStyle(theme)}
        >
          {loading ? "Rendering..." : "Export Final Video"}
        </button>
      </div>

      {finalVideo && (
        <div style={panelStyle(theme)}>
          <h2 style={{ marginTop: 0 }}>Final Render</h2>
          <video
            src={finalVideo}
            controls
            style={{
              width: "100%",
              borderRadius: 8,
              marginTop: 6,
              background: "#000"
            }}
          />
        </div>
      )}
    </div>
  );
}
