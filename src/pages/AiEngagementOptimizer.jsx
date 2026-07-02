import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { panelStyle, inputStyle, buttonStyle } from "../styles/GlobalStyles";
import SaveProjectButton from "../components/SaveProjectButton";

export default function AiEngagementOptimizer() {
  const { theme } = useTheme();

  const [platform, setPlatform] = useState("youtube");
  const [hook, setHook] = useState("");
  const [title, setTitle] = useState("");
  const [thumbnailDesc, setThumbnailDesc] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyze = () => {
    if (!hook.trim() || !title.trim() || !thumbnailDesc.trim()) {
      return alert("Fill in hook, title, and thumbnail description.");
    }

    setLoading(true);

    const score = {
      hookStrength: 82,
      retentionPotential: 75,
      clickThroughPotential: 80,
      algorithmFit: 78
    };

    const recommendations = {
      hook: [
        "Lead with the transformation, not the process.",
        "Make the first 3–5 seconds visually and emotionally loud.",
        "Use a clear promise: what changes for the viewer after watching?"
      ],
      title: [
        "Keep it under ~60 characters for most platforms.",
        "Avoid vague words like 'stuff' or 'things'; be specific.",
        "Use 1 strong verb and 1 strong outcome."
      ],
      thumbnail: [
        "Ensure the subject is readable at mobile size.",
        "Use 1–2 words max on thumbnail text.",
        "Avoid clutter; focus on face + big promise."
      ],
      platformNotes: {
        youtube:
          "Front‑load value in first 30 seconds. Avoid long intros. Use chapters for longer videos.",
        tiktok:
          "Hook must land in first 1–2 seconds. Use fast cuts and strong visual contrast.",
        instagram:
          "Prioritize aesthetic and vibe. Use captions for clarity; many watch without sound."
      }
    };

    setAnalysis({ score, recommendations });
    setLoading(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>AI Engagement Optimizer</h1>

      <div style={{ ...panelStyle(theme), marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>Input</h2>

        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          style={{ ...inputStyle(theme), marginBottom: 8 }}
        >
          <option value="youtube">YouTube</option>
          <option value="tiktok">TikTok</option>
          <option value="instagram">Instagram Reels</option>
          <option value="facebook">Facebook Video</option>
          <option value="linkedin">LinkedIn</option>
        </select>

        <textarea
          value={hook}
          onChange={(e) => setHook(e.target.value)}
          placeholder="Describe your opening hook (first 3–10 seconds)."
          style={{
            ...inputStyle(theme),
            minHeight: 80,
            resize: "vertical",
            marginBottom: 8
          }}
        />

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Video title"
          style={{ ...inputStyle(theme), marginBottom: 8 }}
        />

        <textarea
          value={thumbnailDesc}
          onChange={(e) => setThumbnailDesc(e.target.value)}
          placeholder="Describe your thumbnail concept (subject, text, colors)."
          style={{
            ...inputStyle(theme),
            minHeight: 80,
            resize: "vertical",
            marginBottom: 8
          }}
        />

        <button
          onClick={analyze}
          style={buttonStyle(theme)}
        >
          {loading ? "Analyzing..." : "Analyze Engagement"}
        </button>
      </div>

      {analysis && (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 12,
              marginBottom: 16
            }}
          >
            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Scores</h2>
              <p>
                <strong>Hook Strength:</strong> {analysis.score.hookStrength}/100
              </p>
              <p>
                <strong>Retention Potential:</strong>{" "}
                {analysis.score.retentionPotential}/100
              </p>
              <p>
                <strong>Click‑Through Potential:</strong>{" "}
                {analysis.score.clickThroughPotential}/100
              </p>
              <p>
                <strong>Algorithm Fit:</strong>{" "}
                {analysis.score.algorithmFit}/100
              </p>
              <p style={{ fontSize: 12, opacity: 0.7 }}>
                Scores are heuristic placeholders. Later you can wire real data
                from watch‑time and CTR.
              </p>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Hook Recommendations</h2>
              <ul style={{ marginTop: 6, paddingLeft: 18 }}>
                {analysis.recommendations.hook.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Title Recommendations</h2>
              <ul style={{ marginTop: 6, paddingLeft: 18 }}>
                {analysis.recommendations.title.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Thumbnail Recommendations</h2>
              <ul style={{ marginTop: 6, paddingLeft: 18 }}>
                {analysis.recommendations.thumbnail.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
            </div>

            <div style={panelStyle(theme)}>
              <h2 style={{ marginTop: 0 }}>Platform Notes</h2>
              <p style={{ margin: 0 }}>
                {analysis.recommendations.platformNotes[platform]}
              </p>
            </div>
          </div>

          <div style={panelStyle(theme)}>
            <h2 style={{ marginTop: 0 }}>Save Engagement Plan</h2>
            <SaveProjectButton
              brand={null}
              generator="AI Engagement Optimizer"
              data={{
                platform,
                hook,
                title,
                thumbnailDesc,
                analysis
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}
