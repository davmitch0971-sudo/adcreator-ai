import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { callAdCreator } from "../api/adcreator";

export default function ImagePromptGenerator() {
  const { setOutput } = useOutletContext();

  const [form, setForm] = useState({
    audience: "",
    tone: "",
    productName: "",
    coreBenefit: "",
    platform: ""
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
        coreBenefit: form.coreBenefit
      },
      platform: form.platform
    };

    const result = await callAdCreator("images", payload);

    // ⭐ SEND OUTPUT TO PREVIEW PANEL ⭐
    setOutput({
      image: result.imagePrompt
    });

    setLoading(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Image Prompt Generator</h1>

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
        {loading ? "Generating..." : "Generate Image Prompt"}
      </button>
    </div>
  );
}
