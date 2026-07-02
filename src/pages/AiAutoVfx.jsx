import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle, inputStyle } from "../styles/GlobalStyles";
import BrandSelector from "../components/BrandSelector";
import SaveProjectButton from "../components/SaveProjectButton";
import { buildBrandStyle } from "../utils/BrandStyleEngine";
import { callAdCreator } from "../api/adcreator";

export default function AiAutoVfx() {
  const { theme } = useTheme();

  const [brand, setBrand] = useState(null);
  const [sceneDescription, setSceneDescription] = useState("");
  const [vfxPlan, setVfxPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleBrandSelect = (b) => {
    setBrand(b);
  };

  const generateVfx = async () => {
    if (!sceneDescription.trim())
      return alert("Describe the scene(s) you want VFX for.");
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
      sceneDescription
    };

    const r = await callAdCreator("auto-vfx", payload);

    setVfxPlan(
      r.vfxPlan || {
        globalStyle: {
          look: "Modern cinematic with subtle glow and motion blur",
          particles: "Light particles in brand colors for key moments",
          overlays: "Soft gradient overlays using brand palette",
          notes:
            "Keep VFX supportive, not overwhelming. Focus on enhancing motion and key beats."
        },
        timeline: [
          {
            id: "1",
            time: "0–3s",
            effect: "Speed lines + subtle camera shake",
            particles: "Small brand‑color sparks around product",
            glow: "Soft glow on logo",
            motionBlur: "Medium blur on fast movement",
            overlay: "Diagonal gradient in brand primary color",
            notes: "Use VFX to amplify hook impact without obscuring text."
          }
        ]
      }
    );

    setLoading(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>AI Auto‑VFX</h1>

      <div style={{ marginBottom: 16 }}>
        <BrandSelector onSelect={handleBrandSelect} />
      </div>

      <div style={{ ...panelStyle(theme), marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>Scene Description</h2>

        <textarea
          value={sceneDescription}
          onChange={(e) => setSceneDescription(e.target.value)}
          placeholder="Describe your scenes: motion, key moments, product shots, transitions, energy level, etc."
          style={{
            ...inputStyle(theme),
            minHeight: 140,
            resize: "vertical"
          }}
        />

        <div style={{ marginTop: 10 }}>
          <button
            onClick={generateVfx}
            style={buttonStyle(theme)}
          >
            {loading ? "Generating VFX Plan..." : "Generate VFX Plan"}
          </button>
        </div>
      </div>

      {vfxPlan && (
        <div style={panelStyle(theme)}>
          <h2 style={{ marginTop: 0 }}>VFX Plan</h2>

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
              <strong>Global Style</strong>
              <p><strong>Look:</strong> {vfxPlan.globalStyle.look}</p>
              <p><strong>Particles:</strong> {vfxPlan.globalStyle.particles}</p>
              <p><strong>Overlays:</strong> {vfxPlan.globalStyle.overlays}</p>
              <strong>Notes</strong>
              <p style={{ margin: 0 }}>{vfxPlan.globalStyle.notes}</p>
            </div>

            {vfxPlan.timeline.map((t) => (
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

                <p><strong>Effect:</strong> {t.effect}</p>
                <p><strong>Particles:</strong> {t.particles}</p>
                <p><strong>Glow:</strong> {t.glow}</p>
                <p><strong>Motion Blur:</strong> {t.motionBlur}</p>
                <p><strong>Overlay:</strong> {t.overlay}</p>

                <strong>Notes</strong>
                <p style={{ margin: 0 }}>{t.notes}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 12 }}>
            <SaveProjectButton
              brand={brand}
              generator="AI Auto‑VFX"
              data={{ vfxPlan }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
