import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { callAdCreator } from "../api/adcreator";
import BrandSelector from "../components/BrandSelector";
import SaveProjectButton from "../components/SaveProjectButton";
import { buildBrandStyle } from "../utils/BrandStyleEngine";
import { useTheme } from "../context/ThemeContext";
import { inputStyle, buttonStyle, panelStyle } from "../styles/GlobalStyles";

export default function ImagePromptGenerator() {
  const { setOutput } = useOutletContext();
  const { theme } = useTheme();

  const [brand, setBrand] = useState(null);
  const [result, setResult] = useState(null);

  const [form, setForm] = useState({
    audience: "",
    tone: "",
    productName: "",
    coreBenefit: "",
    platform: ""
  });

  const autoFill = (brand) => {
    if (!brand) return;
    setForm((prev) => ({
      ...prev,
      audience: brand.audience || prev.audience,
      tone: brand.tone || prev.tone,
      productName: brand.name || prev.productName
    }));
  };

  const handleBrandSelect = (b) => {
    setBrand(b);
    autoFill(b);
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);

    const style = buildBrandStyle(brand);

    const payload = {
      brand: {
        audience: form.audience,
        tone: form.tone,
        style
      },
      offer: {
        productName: form.productName,
        coreBenefit: form.coreBenefit
      },
      platform: form.platform
    };

    const r = await callAdCreator("images", payload);

    setResult(r);
    setOutput({ image: r.imagePrompt });

    setLoading(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>Image Prompt Generator</h1>

      <div style={{ marginBottom: 16 }}>
        <BrandSelector onSelect={handleBrandSelect} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {Object.keys(form).map((key) => (
          <input
            key={key}
            name={key}
            value={form[key]}
            placeholder={key}
            onChange={handleChange}
            style={inputStyle(theme)}
          />
        ))}
      </div>

      <div style={{ marginTop: 16 }}>
        <button
          onClick={generate}
          style={buttonStyle(theme)}
        >
          {loading ? "Generating..." : "Generate Image Prompt"}
        </button>
      </div>

      {result && (
        <div style={{ marginTop: 16, ...panelStyle(theme) }}>
          <SaveProjectButton
            brand={brand}
            generator="Image Prompt"
            data={result}
          />
        </div>
      )}
    </div>
  );
}
