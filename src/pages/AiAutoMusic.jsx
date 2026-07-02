import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle, inputStyle } from "../styles/GlobalStyles";
import BrandSelector from "../components/BrandSelector";
import SaveProjectButton from "../components/SaveProjectButton";
import { buildBrandStyle } from "../utils/BrandStyleEngine";
import { callAdCreator } from "../api/adcreator";

export default function AiAutoMusic() {
  const { theme } = useTheme();

  const [brand, setBrand] = useState(null);
  const [sceneDescription, setSceneDescription] = useState("");
  const [musicGoal, setMusicGoal] = useState("cinematic");
  const [musicPlan, setMusicPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleBrandSelect = (b) => {
    setBrand(b);
  };

  const generateMusic = async () => {
    if (!sceneDescription.trim())
      return alert("Describe your scenes and desired music mood.");
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
      sceneDescription,
      musicGoal
    };

    const r = await callAdCreator("auto-music", payload);

    setMusicPlan(
      r.musicPlan || {
        global: {
          genre: "Cinematic electronic",
          tempo: "120 BPM",
          key: "A minor",
          mood: "Energetic, uplifting, confident",
          brandMotif: "Short 3‑note motif using brand intervals",
          notes:
            "Use driving rhythm under hooks, soften during product detail, big lift on CTA."
        },
        timeline: [
          {
            id: "1",
            time: "0–3s",
            section: "Intro / Hook",
            intensity: "High",
            elements: "Big hit, riser, pulsing bass, bright synth",
            transition: "Riser into drop at 3s",
            notes: "Match visual hook impact; music should grab attention immediately."
          }
        ]
      }
    );

    setLoading(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>AI Auto‑Music</h1>

      <div style={{ marginBottom: 16 }}>
        <BrandSelector onSelect={handleBrandSelect} />
      </div>

      <div style={{ ...panelStyle(theme), marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>Scenes & Music Goal</h2>

        <textarea
          value={sceneDescription}
          onChange={(e) => setSceneDescription(e.target.value)}
          placeholder="Describe your scenes, pacing, emotional beats, and where you want music to rise or fall."
          style={{
            ...inputStyle(theme),
            minHeight: 140,
            resize: "vertical",
            marginBottom: 8
          }}
        />

        <select
          value={musicGoal}
          onChange={(e) => setMusicGoal(e.target.value)}
          style={inputStyle(theme)}
        >
          <option value="cinematic">Cinematic / Epic</option>
          <option value="commercial">Commercial / Clean</option>
          <option value="energetic">Energetic / High tempo</option>
          <option value="soft">Soft / Emotional</option>
          <option value="dark">Dark / Tense</option>
        </select>

        <div style={{ marginTop: 10 }}>
          <button
            onClick={generateMusic}
            style={buttonStyle(theme)}
          >
            {loading ? "Building Music Plan..." : "Generate Music Plan"}
          </button>
        </div>
      </div>

      {musicPlan && (
        <div style={panelStyle(theme)}>
          <h2 style={{ marginTop: 0 }}>Music Plan</h2>

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
              <strong>Global Track</strong>
              <p><strong>Genre:</strong> {musicPlan.global.genre}</p>
              <p><strong>Tempo:</strong> {musicPlan.global.tempo}</p>
              <p><strong>Key:</strong> {musicPlan.global.key}</p>
              <p><strong>Mood:</strong> {musicPlan.global.mood}</p>
              <p><strong>Brand Motif:</strong> {musicPlan.global.brandMotif}</p>
              <strong>Notes</strong>
              <p style={{ margin: 0 }}>{musicPlan.global.notes}</p>
            </div>

            {musicPlan.timeline.map((t) => (
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

                <p><strong>Section:</strong> {t.section}</p>
                <p><strong>Intensity:</strong> {t.intensity}</p>
                <p><strong>Elements:</strong> {t.elements}</p>
                <p><strong>Transition:</strong> {t.transition}</p>

                <strong>Notes</strong>
                <p style={{ margin: 0 }}>{t.notes}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 12 }}>
            <SaveProjectButton
              brand={brand}
              generator="AI Auto‑Music"
              data={{ musicPlan }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
