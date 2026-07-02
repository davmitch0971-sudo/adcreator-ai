import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle, inputStyle } from "../styles/GlobalStyles";
import BrandSelector from "../components/BrandSelector";
import SaveProjectButton from "../components/SaveProjectButton";
import { buildBrandStyle } from "../utils/BrandStyleEngine";
import { callAdCreator } from "../api/adcreator";

export default function AiAutoVoiceSync() {
  const { theme } = useTheme();

  const [brand, setBrand] = useState(null);
  const [script, setScript] = useState("");
  const [voiceNotes, setVoiceNotes] = useState("");
  const [syncPlan, setSyncPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleBrandSelect = (b) => {
    setBrand(b);
  };

  const generateSync = async () => {
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
      script,
      voiceNotes
    };

    const r = await callAdCreator("auto-voice-sync", payload);

    setSyncPlan(
      r.syncPlan || {
        global: {
          pacing: "Medium‑fast, energetic but clear",
          emphasis: "Stress key benefit phrases and brand name",
          pauses: "Short pauses after hook and before CTA",
          tone: "Confident, friendly, slightly urgent",
          notes:
            "Keep delivery tight, avoid monotone, use micro‑pauses to let visuals breathe."
        },
        timeline: [
          {
            id: "1",
            time: "0–3s",
            line: "Hook line goes here.",
            pacing: "Fast",
            emphasis: "First 3 words",
            pauseAfter: "0.3s",
            emotion: "Excitement",
            notes: "Match quick cuts and bold text; keep voice slightly ahead of visuals."
          }
        ]
      }
    );

    setLoading(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>AI Auto‑Voice‑Sync</h1>

      <div style={{ marginBottom: 16 }}>
        <BrandSelector onSelect={handleBrandSelect} />
      </div>

      <div style={{ ...panelStyle(theme), marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>Script & Voice Notes</h2>

        <textarea
          value={script}
          onChange={(e) => setScript(e.target.value)}
          placeholder="Paste your voiceover script here..."
          style={{
            ...inputStyle(theme),
            minHeight: 140,
            resize: "vertical",
            marginBottom: 8
          }}
        />

        <textarea
          value={voiceNotes}
          onChange={(e) => setVoiceNotes(e.target.value)}
          placeholder="Optional: describe voice style (male/female, calm/energetic, accent, etc.)"
          style={{
            ...inputStyle(theme),
            minHeight: 80,
            resize: "vertical"
          }}
        />

        <div style={{ marginTop: 10 }}>
          <button
            onClick={generateSync}
            style={buttonStyle(theme)}
          >
            {loading ? "Building Voice Sync..." : "Generate Voice Sync Plan"}
          </button>
        </div>
      </div>

      {syncPlan && (
        <div style={panelStyle(theme)}>
          <h2 style={{ marginTop: 0 }}>Voice Sync Plan</h2>

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
              <strong>Global Delivery</strong>
              <p><strong>Pacing:</strong> {syncPlan.global.pacing}</p>
              <p><strong>Emphasis:</strong> {syncPlan.global.emphasis}</p>
              <p><strong>Pauses:</strong> {syncPlan.global.pauses}</p>
              <p><strong>Tone:</strong> {syncPlan.global.tone}</p>
              <strong>Notes</strong>
              <p style={{ margin: 0 }}>{syncPlan.global.notes}</p>
            </div>

            {syncPlan.timeline.map((t) => (
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

                <p><strong>Line:</strong> {t.line}</p>
                <p><strong>Pacing:</strong> {t.pacing}</p>
                <p><strong>Emphasis:</strong> {t.emphasis}</p>
                <p><strong>Pause After:</strong> {t.pauseAfter}</p>
                <p><strong>Emotion:</strong> {t.emotion}</p>

                <strong>Notes</strong>
                <p style={{ margin: 0 }}>{t.notes}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 12 }}>
            <SaveProjectButton
              brand={brand}
              generator="AI Auto‑Voice‑Sync"
              data={{ syncPlan }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
