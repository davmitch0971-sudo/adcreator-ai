import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle, inputStyle } from "../styles/GlobalStyles";
import BrandSelector from "../components/BrandSelector";
import SaveProjectButton from "../components/SaveProjectButton";
import { buildBrandStyle } from "../utils/BrandStyleEngine";
import { callAdCreator } from "../api/adcreator";

export default function AiAutoEdit() {
  const { theme } = useTheme();

  const [brand, setBrand] = useState(null);
  const [script, setScript] = useState("");
  const [assets, setAssets] = useState("");
  const [editPlan, setEditPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleBrandSelect = (b) => {
    setBrand(b);
  };

  const generateEdit = async () => {
    if (!script.trim()) return alert("Paste a script first.");
    if (!assets.trim()) return alert("Describe or list your clips/assets.");
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
      script,
      assets
    };

    const r = await callAdCreator("auto-edit", payload);

    setEditPlan(
      r.editPlan || {
        timeline: [
          {
            id: "1",
            time: "0–3s",
            clip: "Hook clip",
            action: "Fast cut, zoom‑in",
            overlay: "Bold text hook",
            transitionIn: "Hard cut",
            transitionOut: "Fast whip",
            notes: "High energy, strong brand colors."
          }
        ],
        globalNotes:
          "Keep pacing tight, emphasize transformation, use brand colors and fonts consistently."
      }
    );

    setLoading(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>AI Auto‑Edit</h1>

      <div style={{ marginBottom: 16 }}>
        <BrandSelector onSelect={handleBrandSelect} />
      </div>

      <div style={{ ...panelStyle(theme), marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>Script & Assets</h2>

        <textarea
          value={script}
          onChange={(e) => setScript(e.target.value)}
          placeholder="Paste your video script here..."
          style={{
            ...inputStyle(theme),
            minHeight: 120,
            resize: "vertical",
            marginBottom: 8
          }}
        />

        <textarea
          value={assets}
          onChange={(e) => setAssets(e.target.value)}
          placeholder="List or describe your clips/assets (e.g. hook clip, product close‑up, b‑roll, logo, etc.)"
          style={{
            ...inputStyle(theme),
            minHeight: 100,
            resize: "vertical"
          }}
        />

        <div style={{ marginTop: 10 }}>
          <button
            onClick={generateEdit}
            style={buttonStyle(theme)}
          >
            {loading ? "Building Auto‑Edit..." : "Generate Auto‑Edit Plan"}
          </button>
        </div>
      </div>

      {editPlan && (
        <div style={panelStyle(theme)}>
          <h2 style={{ marginTop: 0 }}>Edit Timeline</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 12
            }}
          >
            {editPlan.timeline?.map((item) => (
              <div
                key={item.id}
                style={{
                  borderRadius: 10,
                  padding: 10,
                  background: theme === "dark" ? "#0f172a" : "#ffffff",
                  border: "1px solid rgba(148,163,184,0.35)"
                }}
              >
                <strong>Segment {item.id}</strong>
                <p style={{ fontSize: 12, opacity: 0.7 }}>{item.time}</p>

                <div><strong>Clip:</strong> {item.clip}</div>
                <div><strong>Action:</strong> {item.action}</div>
                <div><strong>Overlay:</strong> {item.overlay}</div>
                <div><strong>Transition In:</strong> {item.transitionIn}</div>
                <div><strong>Transition Out:</strong> {item.transitionOut}</div>

                <div>
                  <strong>Notes:</strong>
                  <p style={{ margin: 0 }}>{item.notes}</p>
                </div>
              </div>
            ))}
          </div>

          {editPlan.globalNotes && (
            <div style={{ marginTop: 12 }}>
              <strong>Global Notes</strong>
              <p style={{ margin: 0 }}>{editPlan.globalNotes}</p>
            </div>
          )}

          <div style={{ marginTop: 12 }}>
            <SaveProjectButton
              brand={brand}
              generator="AI Auto‑Edit"
              data={{ editPlan }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
