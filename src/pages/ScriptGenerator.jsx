import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { callAdCreator } from "../api/adcreator";

export default function ScriptGenerator() {
  const { setOutput } = useOutletContext();

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
    goal: ""
  });

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
      platform: form.platform,
      goal: form.goal
    };

    const result = await callAdCreator("scripts", payload);

    // ⭐ SEND OUTPUT TO PREVIEW PANEL ⭐
    setOutput({
      script: result.script
    });

    setLoading(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Script Generator</h1>

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
        {loading ? "Generating..." : "Generate Script"}
      </button>
    </div>
  );
}
