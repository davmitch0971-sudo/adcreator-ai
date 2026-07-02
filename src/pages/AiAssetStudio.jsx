import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle, inputStyle } from "../styles/GlobalStyles";
import BrandSelector from "../components/BrandSelector";
import { callAdCreator } from "../api/adcreator";
import SaveProjectButton from "../components/SaveProjectButton";
import { buildBrandStyle } from "../utils/BrandStyleEngine";

export default function AiAssetStudio() {
  const { theme } = useTheme();

  const [brand, setBrand] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleBrandSelect = (b) => {
    setBrand(b);
  };

  const generateAssets = async () => {
    if (!prompt.trim()) return alert("Enter a prompt first.");
    setLoading(true);

    const style = buildBrandStyle(brand);

    const payload = {
      brand: {
        name: brand?.name,
        audience: brand?.audience,
        tone: brand?.tone,
        style
      },
      prompt
    };

    const r = await callAdCreator("asset-studio", payload);

    setAssets(r.assets || []);
    setLoading(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>AI Asset Studio</h1>

      <div style={{ marginBottom: 16 }}>
        <BrandSelector onSelect={handleBrandSelect} />
      </div>

      <div style={{ ...panelStyle(theme), marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>Asset Prompt</h2>

        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the asset you want (product shot, background, b-roll, environment, etc.)"
          style={{
            ...inputStyle(theme),
            minHeight: 120,
            resize: "vertical"
          }}
        />

        <div style={{ marginTop: 10 }}>
          <button
            onClick={generateAssets}
            style={buttonStyle(theme)}
          >
            {loading ? "Generating..." : "Generate Assets"}
          </button>
        </div>
      </div>

      {assets.length > 0 && (
        <div style={panelStyle(theme)}>
          <h2 style={{ marginTop: 0 }}>Generated Assets</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: 12
            }}
          >
            {assets.map((a) => (
              <div
                key={a.id}
                style={{
                  borderRadius: 8,
                  overflow: "hidden",
                  background: "#000"
                }}
              >
                <img
                  src={a.url}
                  alt="Generated Asset"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            ))}
          </div>

          <div style={{ marginTop: 12 }}>
            <SaveProjectButton
              brand={brand}
              generator="AI Asset Studio"
              data={{ assets }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
