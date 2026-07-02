import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle, inputStyle } from "../styles/GlobalStyles";
import BrandSelector from "../components/BrandSelector";
import SaveProjectButton from "../components/SaveProjectButton";
import { buildBrandStyle } from "../utils/BrandStyleEngine";
import { callAdCreator } from "../api/adcreator";

export default function AiAutoSoundDesign() {
  const { theme } = useTheme();

  const [brand, setBrand] = useState(null);
  const [script, setScript] = useState("");
  const [soundPlan, setSoundPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleBrandSelect = (b) => {
    setBrand(b);
  };

  const generateSoundDesign = async () => {
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

    const r = await callAdCreator("auto-sound-design", payload);

    setSoundPlan(
      r.soundPlan || {
        globalMix: {
          ambience: "Soft room tone with subtle brand‑color mood pad",
          eq: "Boost 3kHz for clarity, reduce 200Hz muddiness",
          compression: "Medium ratio, slow attack, fast release",
          stereoWidth: "Wide for ambience, narrow for voice",
          reverb: "Short plate for transitions"
        },
        timeline: [
          {
            id: "1",
            time: "0–3s",
            sfx: "Fast whoosh + impact hit",
            ambience: "Low rumble for tension",
            transition: "High‑frequency sweep",
            brandTone: "Short signature chime",
            notes: "Match pacing of hook, emphasize energy."
          }
        ]
      }
    );

    setLoading(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>AI Auto‑Sound‑Design</h1>

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
            onClick={generateSoundDesign}
            style={buttonStyle(theme)}
          >
            {loading ? "Generating Sound Design..." : "Generate Sound Design"}
          </button>
        </div>
      </div>

      {soundPlan && (
        <div style={panelStyle(theme)}>
          <h2 style={{ marginTop: 0 }}>Sound Design Plan</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 12
            }}
          >
            <div
              style={{
                borderRadius: 10,
                padding: 10,
                background: theme === "dark" ? "#0f172a" : "#ffffff",
                border: "1px solid rgba(148,163,184,0.35)"
              }}
            >
              <strong>Global Mix</strong>
              <p><strong>Ambience:</strong> {soundPlan.globalMix.ambience}</p>
              <p><strong>EQ:</strong> {soundPlan.globalMix.eq}</p>
              <p><strong>Compression:</strong> {soundPlan.globalMix.compression}</p>
              <p><strong>Stereo Width:</strong> {soundPlan.globalMix.stereoWidth}</p>
              <p><strong>Reverb:</strong> {soundPlan.globalMix.reverb}</p>
            </div>

            {soundPlan.timeline.map((t) => (
              <div
                key={t.id}
                style={{
                  borderRadius: 10,
                  padding: 10,
                  background: theme === "dark" ? "#0f172a" : "#ffffff",
                  border: "1px solid rgba(148,163,184,0.35)"
                }}
              >
                <strong>Segment {t.id}</strong>
                <p style={{ fontSize: 12, opacity: 0.7 }}>{t.time}</p>

                <p><strong>SFX:</strong> {t.sfx}</p>
                <p><strong>Ambience:</strong> {t.ambience}</p>
                <p><strong>Transition:</strong> {t.transition}</p>
                <p><strong>Brand Tone:</strong> {t.brandTone}</p>

                <strong>Notes</strong>
                <p style={{ margin: 0 }}>{t.notes}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 12 }}>
            <SaveProjectButton
              brand={brand}
              generator="AI Auto‑Sound‑Design"
              data={{ soundPlan }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
