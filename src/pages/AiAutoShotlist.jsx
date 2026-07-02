import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle, inputStyle } from "../styles/GlobalStyles";
import BrandSelector from "../components/BrandSelector";
import SaveProjectButton from "../components/SaveProjectButton";
import { buildBrandStyle } from "../utils/BrandStyleEngine";
import { callAdCreator } from "../api/adcreator";

export default function AiAutoShotlist() {
  const { theme } = useTheme();

  const [brand, setBrand] = useState(null);
  const [script, setScript] = useState("");
  const [shotlist, setShotlist] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleBrandSelect = (b) => {
    setBrand(b);
  };

  const generateShotlist = async () => {
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

    const r = await callAdCreator("auto-shotlist", payload);

    setShotlist(
      r.shotlist || [
        {
          id: "1",
          time: "0–3s",
          shotType: "Wide",
          cameraAngle: "Eye level",
          movement: "Slow push‑in",
          lens: "35mm",
          lighting: "High contrast",
          framing: "Center",
          action: "Product sits on table",
          purpose: "Establish product",
          notes: "Use brand colors in background."
        }
      ]
    );

    setLoading(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>AI Auto‑Shotlist</h1>

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
            onClick={generateShotlist}
            style={buttonStyle(theme)}
          >
            {loading ? "Generating Shotlist..." : "Generate Shotlist"}
          </button>
        </div>
      </div>

      {shotlist.length > 0 && (
        <div style={panelStyle(theme)}>
          <h2 style={{ marginTop: 0 }}>Shotlist</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 12
            }}
          >
            {shotlist.map((shot) => (
              <div
                key={shot.id}
                style={{
                  borderRadius: 10,
                  padding: 10,
                  background: theme === "dark" ? "#0f172a" : "#ffffff",
                  border: "1px solid rgba(148,163,184,0.35)"
                }}
              >
                <strong>Shot {shot.id}</strong>
                <p style={{ fontSize: 12, opacity: 0.7 }}>{shot.time}</p>

                <div><strong>Type:</strong> {shot.shotType}</div>
                <div><strong>Angle:</strong> {shot.cameraAngle}</div>
                <div><strong>Movement:</strong> {shot.movement}</div>
                <div><strong>Lens:</strong> {shot.lens}</div>
                <div><strong>Lighting:</strong> {shot.lighting}</div>
                <div><strong>Framing:</strong> {shot.framing}</div>
                <div><strong>Action:</strong> {shot.action}</div>
                <div><strong>Purpose:</strong> {shot.purpose}</div>

                <div>
                  <strong>Notes:</strong>
                  <p style={{ margin: 0 }}>{shot.notes}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 12 }}>
            <SaveProjectButton
              brand={brand}
              generator="AI Auto‑Shotlist"
              data={{ shotlist }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
