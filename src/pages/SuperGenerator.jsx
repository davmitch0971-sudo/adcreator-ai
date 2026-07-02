import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { callAdCreator } from "../api/adcreator";
import BrandSelector from "../components/BrandSelector";
import SaveProjectButton from "../components/SaveProjectButton";
import { buildBrandStyle } from "../utils/BrandStyleEngine";
import { useTheme } from "../context/ThemeContext";
import { inputStyle, buttonStyle, panelStyle } from "../styles/GlobalStyles";

export default function SuperGenerator() {
  const { setOutput } = useOutletContext();
  const { theme } = useTheme();

  const [brand, setBrand] = useState(null);
  const [result, setResult] = useState(null);

  const [form, setForm] = useState({
    audience: "",
    tone: "",
    productName: "",
    coreBenefit: "",
    painPoint: "",
    proofType: "",
    proofDetail: "",
    action: "",
    platform: "",
    goal: "",
    length: "",
    type: ""
  });

  const autoFillFromBrand = (b) => {
    if (!b) return;
    setForm((prev) => ({
      ...prev,
      audience: b.audience || prev.audience,
      tone: b.tone || prev.tone,
      productName: b.name || prev.productName
    }));
  };

  const handleBrandSelect = (b) => {
    setBrand(b);
    autoFillFromBrand(b);
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
        coreBenefit: form.coreBenefit,
        painPoint: form.painPoint,
        proofType: form.proofType,
        proofDetail: form.proofDetail,
        action: form.action
      },
      platform: form.platform,
      goal: form.goal,
      length: form.length,
      type: form.type
    };

    const r = await callAdCreator("super", payload);

    setResult(r);
    setOutput({
      script: r.script,
      video: r.videoScript,
      image: r.imagePrompt,
      caption: r.caption,
      template: r.template,
      posting: r.postingPlan
    });

    setLoading(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>Super Generator</h1>

      <div style={{ marginBottom: 16 }}>
        <BrandSelector onSelect={handleBrandSelect} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12
        }}
      >
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
          {loading ? "Generating..." : "Generate Full Suite"}
        </button>
      </div>

      {result && (
        <div style={{ marginTop: 16, ...panelStyle(theme) }}>
          <SaveProjectButton
            brand={brand}
            generator="Super"
            data={result}
          />
        </div>
      )}
    </div>
  );
}
