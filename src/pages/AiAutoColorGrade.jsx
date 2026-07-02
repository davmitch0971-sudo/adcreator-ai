import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle, inputStyle } from "../styles/GlobalStyles";
import BrandSelector from "../components/BrandSelector";
import SaveProjectButton from "../components/SaveProjectButton";
import { buildBrandStyle } from "../utils/BrandStyleEngine";
import { callAdCreator } from "../api/adcreator";

export default function AiAutoColorGrade() {
  const { theme } = useTheme();

  const [brand, setBrand] = useState(null);
  const [footageDescription, setFootageDescription] = useState("");
  const [lookGoal, setLookGoal] = useState("cinematic");
  const [gradePlan, setGradePlan] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleBrandSelect = (b) => {
    setBrand(b);
  };

  const generateGrade = async () => {
    if (!footageDescription.trim())
      return alert("Describe your footage (lighting, camera, environment, etc.).");
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
      footageDescription,
      lookGoal
    };

    const r = await callAdCreator("auto-color-grade", payload);

    setGradePlan(
      r.gradePlan || {
        lutName: "Brand‑Cinematic‑Base",
        exposure: "+0.3",
        contrast: "+12",
        saturation: "+8",
        temperature: "Warm",
        tint: "Slight magenta",
        shadowsTint: "Teal",
        highlightsTint: "Warm orange",
        brandColorUsage: "Use primary brand color in midtones and secondary in highlights.",
        notes:
          "Keep skin tones natural, push background toward brand palette, maintain detail in shadows."
      }
    );

    setLoading(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>AI Auto‑Color‑Grade</h1>

      <div style={{ marginBottom: 16 }}>
        <BrandSelector onSelect={handleBrandSelect} />
      </div>

      <div style={{ ...panelStyle(theme), marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>Footage & Look</h2>

        <textarea
          value={footageDescription}
          onChange={(e) => setFootageDescription(e.target.value)}
          placeholder="Describe your footage: lighting, camera, environment, mood, issues (flat, noisy, mixed light, etc.)"
          style={{
            ...inputStyle(theme),
            minHeight: 120,
            resize: "vertical",
            marginBottom: 8
          }}
        />

        <select
          value={lookGoal}
          onChange={(e) => setLookGoal(e.target.value)}
          style={inputStyle(theme)}
        >
          <option value="cinematic">Cinematic</option>
          <option value="clean">Clean / Commercial</option>
          <option value="bold">Bold / High contrast</option>
          <option value="soft">Soft / Pastel</option>
          <option value="moody">Moody / Low key</option>
        </select>

        <div style={{ marginTop: 10 }}>
          <button
            onClick={generateGrade}
            style={buttonStyle(theme)}
          >
            {loading ? "Building Color Grade..." : "Generate Color Grade Plan"}
          </button>
        </div>
      </div>

      {gradePlan && (
        <div style={panelStyle(theme)}>
          <h2 style={{ marginTop: 0 }}>Color Grade Plan</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
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
              <strong>LUT / Base Look</strong>
              <p style={{ margin: 0 }}>{gradePlan.lutName}</p>
            </div>

            <div
              style={{
                borderRadius: 10,
                padding: 10,
                background: theme === "dark" ? "#0f172a" : "#ffffff",
                border: "1px solid rgba(148,163,184,0.35)"
              }}
            >
              <strong>Exposure</strong>
              <p style={{ margin: 0 }}>{gradePlan.exposure}</p>
              <strong>Contrast</strong>
              <p style={{ margin: 0 }}>{gradePlan.contrast}</p>
              <strong>Saturation</strong>
              <p style={{ margin: 0 }}>{gradePlan.saturation}</p>
            </div>

            <div
              style={{
                borderRadius: 10,
                padding: 10,
                background: theme === "dark" ? "#0f172a" : "#ffffff",
                border: "1px solid rgba(148,163,184,0.35)"
              }}
            >
              <strong>Temperature</strong>
              <p style={{ margin: 0 }}>{gradePlan.temperature}</p>
              <strong>Tint</strong>
              <p style={{ margin: 0 }}>{gradePlan.tint}</p>
              <strong>Shadows Tint</strong>
              <p style={{ margin: 0 }}>{gradePlan.shadowsTint}</p>
              <strong>Highlights Tint</strong>
              <p style={{ margin: 0 }}>{gradePlan.highlightsTint}</p>
            </div>

            <div
              style={{
                borderRadius: 10,
                padding: 10,
                background: theme === "dark" ? "#0f172a" : "#ffffff",
                border: "1px solid rgba(148,163,184,0.35)"
              }}
            >
              <strong>Brand Color Usage</strong>
              <p style={{ margin: 0 }}>{gradePlan.brandColorUsage}</p>
            </div>
          </div>

          <div style={{ marginTop: 12 }}>
            <strong>Notes</strong>
            <p style={{ margin: 0 }}>{gradePlan.notes}</p>
          </div>

          <div style={{ marginTop: 12 }}>
            <SaveProjectButton
              brand={brand}
              generator="AI Auto‑Color‑Grade"
              data={{ gradePlan }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
