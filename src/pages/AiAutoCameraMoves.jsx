import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle, inputStyle } from "../styles/GlobalStyles";
import BrandSelector from "../components/BrandSelector";
import SaveProjectButton from "../components/SaveProjectButton";
import { buildBrandStyle } from "../utils/BrandStyleEngine";
import { callAdCreator } from "../api/adcreator";

export default function AiAutoCameraMoves() {
  const { theme } = useTheme();

  const [brand, setBrand] = useState(null);
  const [script, setScript] = useState("");
  const [moves, setMoves] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleBrandSelect = (b) => {
    setBrand(b);
  };

  const generateMoves = async () => {
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

    const r = await callAdCreator("auto-camera-moves", payload);

    setMoves(
      r.moves || [
        {
          id: "1",
          time: "0–3s",
          movement: "Slow push‑in",
          speed: "0.4x",
          direction: "Forward",
          style: "Cinematic",
          emotion: "Curiosity",
          path: "Straight line",
          purpose: "Reveal product",
          notes: "Use brand color accents in background."
        }
      ]
    );

    setLoading(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>AI Auto‑Camera‑Moves</h1>

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
            onClick={generateMoves}
            style={buttonStyle(theme)}
          >
            {loading ? "Generating Camera Moves..." : "Generate Camera Moves"}
          </button>
        </div>
      </div>

      {moves.length > 0 && (
        <div style={panelStyle(theme)}>
          <h2 style={{ marginTop: 0 }}>Camera Moves</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 12
            }}
          >
            {moves.map((m) => (
              <div
                key={m.id}
                style={{
                  borderRadius: 10,
                  padding: 10,
                  background: theme === "dark" ? "#0f172a" : "#ffffff",
                  border: "1px solid rgba(148,163,184,0.35)"
                }}
              >
                <strong>Move {m.id}</strong>
                <p style={{ fontSize: 12, opacity: 0.7 }}>{m.time}</p>

                <div><strong>Movement:</strong> {m.movement}</div>
                <div><strong>Speed:</strong> {m.speed}</div>
                <div><strong>Direction:</strong> {m.direction}</div>
                <div><strong>Style:</strong> {m.style}</div>
                <div><strong>Emotion:</strong> {m.emotion}</div>
                <div><strong>Path:</strong> {m.path}</div>
                <div><strong>Purpose:</strong> {m.purpose}</div>

                <div>
                  <strong>Notes:</strong>
                  <p style={{ margin: 0 }}>{m.notes}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 12 }}>
            <SaveProjectButton
              brand={brand}
              generator="AI Auto‑Camera‑Moves"
              data={{ moves }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
