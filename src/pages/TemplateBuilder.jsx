import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { callAdCreator } from "../api/adcreator";

export default function TemplateBuilder() {
  const { setOutput } = useOutletContext();

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

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

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

    // ⭐ SEND OUTPUT TO PREVIEW PANEL ⭐
    setOutput({
      template: result.template
    });

    setLoading(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Template Builder</h1>

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
        {loading ? "Generating..." : "Generate Template"}
      </button>
    </div>
  );
}
