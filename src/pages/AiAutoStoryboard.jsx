import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle, inputStyle } from "../styles/GlobalStyles";
import BrandSelector from "../components/BrandSelector";
import SaveProjectButton from "../components/SaveProjectButton";
import { buildBrandStyle } from "../utils/BrandStyleEngine";
import { callAdCreator } from "../api/adcreator";

export default function AiAutoStoryboard() {
  const { theme } = useTheme();

  const [brand, setBrand] = useState(null);
  const [script, setScript] = useState("");
  const [storyboard, setStoryboard] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleBrandSelect = (b) => {
    setBrand(b);
  };

  const generateStoryboard = async () => {
    if (!script.trim()) return alert("Paste a script first.");
    if (!brand) return alert("Select a brand.");

    setLoading(true);

    const style = buildBrandStyle(brand);

    const payload = {
      brand: {
        name: brand.name,
        audience: brand.audience,
        tone: brand.tone,
        style
      },
      script
    };

    const r = await callAdCreator("auto-storyboard", payload);

    setStoryboard(
      r.storyboard || [
        {
          id: "1",
          time: "0–3s",
          shot: "Wide shot",
          framing: "Center",
          description: "Product on table with dramatic lighting.",
          motion: "Slow push‑in",
          lighting: "High contrast",
          emotion: "Curiosity",
          notes: "Strong brand colors."
        }
      ]
    );

    setLoading(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>AI Auto‑Storyboard</h1>

      <div style={{ marginBottom: 16 }}>
        <BrandSelector onSelect={handleBrandSelect} />
      </div>

      <div style={{ ...panelStyle(theme), marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>Script Input</h2>

        <textarea
          value={script}
          onChange={(e) => setScript(e.target.value)}
          placeholder="Paste your video script here..."
          style={{
            ...inputStyle(theme),
            minHeight: 140,
            resize: "vertical"
          }}
        />

        <div style={{ marginTop: 10 }}>
          <button
            onClick={generateStoryboard}
            style={buttonStyle(theme)}
          >
            {loading ? "Generating Storyboard..." : "Generate Storyboard"}
          </button>
        </div>
      </div>

      {storyboard.length > 0 && (
        <div style={panelStyle(theme)}>
          <h2 style={{ marginTop: 0 }}>Storyboard Panels</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 12
            }}
          >
            {storyboard.map((panel) => (
              <div
                key={panel.id}
                style={{
                  borderRadius: 10,
                  padding: 10,
                  background: theme === "dark" ? "#0f172a" : "#ffffff",
                  border: "1px solid rgba(148,163,184,0.35)"
                }}
              >
                <strong>Scene {panel.id}</strong>
                <p style={{ fontSize: 12, opacity: 0.7 }}>{panel.time}</p>

                <div style={{ marginTop: 6 }}>
                  <strong>Shot:</strong> {panel.shot}
                </div>

                <div>
                  <strong>Framing:</strong> {panel.framing}
                </div>

                <div>
                  <strong>Description:</strong>
                  <p style={{ margin: 0 }}>{panel.description}</p>
                </div>

                <div>
                  <strong>Motion:</strong> {panel.motion}
                </div>

                <div>
                  <strong>Lighting:</strong> {panel.lighting}
                </div>

                <div>
                  <strong>Emotion:</strong> {panel.emotion}
                </div>

                <div>
                  <strong>Notes:</strong>
                  <p style={{ margin: 0 }}>{panel.notes}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 12 }}>
            <SaveProjectButton
              brand={brand}
              generator="AI Auto‑Storyboard"
              data={{ storyboard }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
