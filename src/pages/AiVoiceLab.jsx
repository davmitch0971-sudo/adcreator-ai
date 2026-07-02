import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle, inputStyle } from "../styles/GlobalStyles";
import { callAdCreator } from "../api/adcreator";

export default function AiVoiceLab() {
  const { theme } = useTheme();

  const [timeline, setTimeline] = useState([]);
  const [voices, setVoices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [voiceType, setVoiceType] = useState("male");

  const loadTimeline = () => {
    const projects = JSON.parse(localStorage.getItem("projects") || "[]");
    const last = projects.reverse().find((p) => p.generator === "AI Video Editor");
    if (!last) return alert("No timeline found. Save a Video Editor project first.");
    setTimeline(last.data.timeline);
  };

  const generateVoices = async () => {
    if (timeline.length === 0) return alert("Load a timeline first.");
    setLoading(true);

    const payload = {
      voiceType,
      scenes: timeline.map((scene) => ({
        id: scene.id,
        voiceover: scene.voiceover
      }))
    };

    const r = await callAdCreator("voice-lab", payload);

    setVoices(r.voices || []);
    setLoading(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>AI Voice Lab</h1>

      <div style={{ ...panelStyle(theme), marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>Voice Settings</h2>

        <select
          value={voiceType}
          onChange={(e) => setVoiceType(e.target.value)}
          style={{ ...inputStyle(theme), width: "100%", marginBottom: 10 }}
        >
          <option value="male">Male Voice</option>
          <option value="female">Female Voice</option>
          <option value="warm">Warm & Friendly</option>
          <option value="energetic">Energetic</option>
          <option value="deep">Deep Cinematic</option>
        </select>

        <button
          onClick={loadTimeline}
          style={{ ...buttonStyle(theme), marginRight: 10 }}
        >
          Load Timeline
        </button>

        <button
          onClick={generateVoices}
          style={buttonStyle(theme)}
        >
          {loading ? "Generating Voices..." : "Generate Voiceovers"}
        </button>
      </div>

      {voices.length > 0 && (
        <div style={panelStyle(theme)}>
          <h2 style={{ marginTop: 0 }}>Generated Voiceovers</h2>
          {voices.map((v) => (
            <div key={v.id} style={{ marginBottom: 12 }}>
              <strong>Scene {v.id}</strong>
              <audio
                controls
                src={v.url}
                style={{ width: "100%", marginTop: 6 }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
