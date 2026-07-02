import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { callAdCreator } from "../api/adcreator";

export default function PostingPlanGenerator() {
  const { setOutput } = useOutletContext();

  const [form, setForm] = useState({
    tone: "",
    productName: "",
    platforms: ""
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
        productName: form.productName
      },
      platforms: form.platforms.split(",").map((p) => p.trim())
    };

    const result = await callAdCreator("posting", payload);

    // ⭐ SEND OUTPUT TO PREVIEW PANEL ⭐
    setOutput({
      posting: result.postingPlan
    });

    setLoading(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Posting Plan Generator</h1>

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
        {loading ? "Generating..." : "Generate Posting Plan"}
      </button>
    </div>
  );
}
