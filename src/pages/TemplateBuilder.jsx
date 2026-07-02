import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { callAdCreator } from "../api/adcreator";
import BrandSelector from "../components/BrandSelector";

export default function TemplateBuilder() {
  const { setOutput } = useOutletContext();

  const [brand, setBrand] = useState(null);

  const [form, setForm] = useState({
    tone: "",
    productName: "",
    coreBenefit: "",
    painPoint: "",
    proofType: "",
    proofDetail: "",
    action: "",
    type: ""
  });

  const autoFill = (brand) => {
    if (!brand) return;

    setForm((prev) => ({
      ...prev,
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
        tone: form.tone
      },
      offer: {
        productName: form.productName,
        coreBenefit: form.coreBenefit,
        painPoint: form.painPoint,
        proofType: form.proofType,
        proofDetail: form.proofDetail,
        action: form.action
      },
      type: form.type
    };

    const result = await callAdCreator("templates", payload);

    setOutput({
      template: result.template
    });

    setLoading(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Template Builder</h1>

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
        {loading ? "Generating..." : "Generate Template"}
      </button>
    </div>
  );
}
