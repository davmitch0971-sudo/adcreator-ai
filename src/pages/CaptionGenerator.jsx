import { useState } from "react";
import { callAdCreator } from "../api/adcreator";

export default function CaptionGenerator() {
  const [form, setForm] = useState({
    audience: "",
    tone: "",
    productName: "",
    coreBenefit: "",
    painPoint: "",
    proofType: "",
    proofDetail: "",
    action: "",
    platform: ""
  });

  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const generate = async () => {
    setLoading(true);

    const payload = {
      brand: {
        audience: form.audience,
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
      platform: form.platform
    };

    const result = await callAdCreator("captions", payload);
    setOutput(result.caption);
    setLoading(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Caption Generator</h1>

      {Object.keys(form).map((key) => (
        <input
          key={key}
          name={key}
          placeholder={key}
          onChange={handleChange}
          style={{ display: "block", marginBottom: 10 }}
        />
      ))}

      <button onClick={generate}>
        {loading ? "Generating..." : "Generate Caption"}
      </button>

      {output && (
        <pre style={{ marginTop: 20, background: "#eee", padding: 10 }}>
          {JSON.stringify(output, null, 2)}
        </pre>
      )}
    </div>
  );
}
