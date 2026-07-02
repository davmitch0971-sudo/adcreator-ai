import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { callAdCreator } from "../api/adcreator";
import BrandSelector from "../components/BrandSelector";

export default function ImagePromptGenerator() {
  const { setOutput } = useOutletContext();

  const [brand, setBrand] = useState(null);

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

    const payload = {
      brand: {
        audience: form.audience,
        tone: form.tone
      },
      offer: {
        productName: form.productName,
        coreBenefit: form.coreBenefit
      },
      platform: form.platform
    };

    const result = await callAdCreator("images", payload);

    setOutput({
      image: result.imagePrompt
    });

    setLoading(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Image Prompt Generator</h1>

      <BrandSelector onSelect={handleBrandSelect} />

      {Object.keys(form).map((key) => (
        <input
          key={key}
          name={key}
          value={form[key]}
          placeholder={key}
          onChange={handleChange}
          style={{
            display: "block",
            marginBottom: 10,
            padding: 8,
            width: "100%"
          }}
        />
      ))}

      <button onClick={generate}>
        {loading ? "Generating..." : "Generate Image Prompt"}
      </button>
    </div>
  );
}
