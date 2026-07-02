import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle, inputStyle } from "../styles/GlobalStyles";
import BrandSelector from "../components/BrandSelector";
import SaveProjectButton from "../components/SaveProjectButton";
import { buildBrandStyle } from "../utils/BrandStyleEngine";
import { callAdCreator } from "../api/adcreator";

export default function AiAutoTransitions() {
  const { theme } = useTheme();

  const [brand, setBrand] = useState(null);
  const [script, setScript] = useState("");
  const [transitions, setTransitions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleBrandSelect = (b) => {
    setBrand(b);
  };

  const generateTransitions = async () => {
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

    const r = await callAdCreator("auto-transitions", payload);

    setTransitions(
      r.transitions || [
        {
          id: "1",
          time: "3–4s",
          type: "Smooth crossfade",
          direction: "Forward",
          speed: "0.6x",
          style: "Cinematic",
          emotion: "Momentum",
          blend: "Soft light",
          purpose: "Move from hook to product reveal",
          notes: "Use brand color overlay at 20% opacity."
        }
      ]
    );

    setLoading(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>AI Auto‑Transitions</h1>

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
            onClick={generateTransitions}
            style={buttonStyle(theme)}
          >
            {loading ? "Generating Transitions..." : "Generate Transitions"}
          </button>
        </div>
      </div>

      {transitions.length > 0 && (
        <div style={panelStyle(theme)}>
          <h2 style={{ marginTop: 0 }}>Transitions</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 12
            }}
          >
            {transitions.map((t) => (
              <div
                key={t.id}
                style={{
                  borderRadius: 10,
                  padding: 10,
                  background: theme === "dark" ? "#0f172a" : "#ffffff",
                  border: "1px solid rgba(148,163,184,0.35)"
                }}
              >
                <strong>Transition {t.id}</strong>
                <p style={{ fontSize: 12, opacity: 0.7 }}>{t.time}</p>

                <div><strong>Type:</strong> {t.type}</div>
                <div><strong>Direction:</strong> {t.direction}</div>
                <div><strong>Speed:</strong> {t.speed}</div>
                <div><strong>Style:</strong> {t.style}</div>
                <div><strong>Emotion:</strong> {t.emotion}</div>
                <div><strong>Blend:</strong> {t.blend}</div>
                <div><strong>Purpose:</strong> {t.purpose}</div>

                <div>
                  <strong>Notes:</strong>
                  <p style={{ margin: 0 }}>{t.notes}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 12 }}>
            <SaveProjectButton
              brand={brand}
              generator="AI Auto‑Transitions"
              data={{ transitions }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
