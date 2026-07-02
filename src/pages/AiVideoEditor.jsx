import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { inputStyle, buttonStyle, panelStyle } from "../styles/GlobalStyles";
import BrandSelector from "../components/BrandSelector";
import SaveProjectButton from "../components/SaveProjectButton";
import { buildBrandStyle } from "../utils/BrandStyleEngine";
import { callAdCreator } from "../api/adcreator";

export default function AiVideoEditor() {
  const { theme } = useTheme();

  const [brand, setBrand] = useState(null);
  const [scriptInput, setScriptInput] = useState("");
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleBrandSelect = (b) => {
    setBrand(b);
  };

  const generateTimeline = async () => {
    if (!scriptInput.trim()) return;
    setLoading(true);

    const style = buildBrandStyle(brand);

    const payload = {
      brand: {
        name: brand?.name,
        audience: brand?.audience,
        tone: brand?.tone,
        style
      },
      script: scriptInput
    };

    const r = await callAdCreator("video-editor", payload);

    const scenes = r?.scenes || [
      {
        id: "1",
        time: "0–5s",
        visual: "Hook shot of product in use",
        textOverlay: "Stop wasting time on boring ads.",
        voiceover: "Tired of ads that don't convert?",
        notes: "Fast cut, high energy."
      }
    ];

    setTimeline(scenes);
    setLoading(false);
  };

  const handleFieldChange = (id, field, value) => {
    setTimeline((prev) =>
      prev.map((scene) =>
        scene.id === id ? { ...scene, [field]: value } : scene
      )
    );
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>AI Video Editor</h1>

      <div style={{ marginBottom: 16 }}>
        <BrandSelector onSelect={handleBrandSelect} />
      </div>

      <div style={{ ...panelStyle(theme), marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>Base Script</h2>
        <textarea
          value={scriptInput}
          onChange={(e) => setScriptInput(e.target.value)}
          placeholder="Paste or write your video script here..."
          style={{
            ...inputStyle(theme),
            minHeight: 120,
            resize: "vertical"
          }}
        />
        <div style={{ marginTop: 10 }}>
          <button
            onClick={generateTimeline}
            style={buttonStyle(theme)}
          >
            {loading ? "Building Timeline..." : "Generate Timeline"}
          </button>
        </div>
      </div>

      {timeline.length > 0 && (
        <div style={{ ...panelStyle(theme) }}>
          <h2 style={{ marginTop: 0 }}>Timeline</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {timeline.map((scene) => (
              <div
                key={scene.id}
                style={{
                  borderRadius: 8,
                  padding: 8,
                  border: "1px solid rgba(148,163,184,0.5)",
                  background:
                    theme === "dark" ? "#020617" : "rgba(249,250,251,0.9)"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 6
                  }}
                >
                  <strong>Scene {scene.id}</strong>
                  <span style={{ fontSize: 12, opacity: 0.7 }}>
                    {scene.time}
                  </span>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 6
                  }}
                >
                  <textarea
                    value={scene.visual}
                    onChange={(e) =>
                      handleFieldChange(scene.id, "visual", e.target.value)
                    }
                    placeholder="Visual description"
                    style={{
                      ...inputStyle(theme),
                      minHeight: 60,
                      resize: "vertical"
                    }}
                  />
                  <textarea
                    value={scene.voiceover}
                    onChange={(e) =>
                      handleFieldChange(scene.id, "voiceover", e.target.value)
                    }
                    placeholder="Voiceover line"
                    style={{
                      ...inputStyle(theme),
                      minHeight: 60,
                      resize: "vertical"
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 6,
                    marginTop: 6
                  }}
                >
                  <input
                    value={scene.textOverlay || ""}
                    onChange={(e) =>
                      handleFieldChange(scene.id, "textOverlay", e.target.value)
                    }
                    placeholder="Text overlay"
                    style={inputStyle(theme)}
                  />
                  <input
                    value={scene.notes || ""}
                    onChange={(e) =>
                      handleFieldChange(scene.id, "notes", e.target.value)
                    }
                    placeholder="Notes (transitions, effects, pacing)"
                    style={inputStyle(theme)}
                  />
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 12 }}>
            <SaveProjectButton
              brand={brand}
              generator="AI Video Editor"
              data={{ timeline }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
