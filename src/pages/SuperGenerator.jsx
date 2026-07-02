import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { callAdCreator } from "../api/adcreator";

export default function SuperGenerator() {
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
    length: "",
    type: "",
    goal: "",
    platforms: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const generateAll = async () => {
    setLoading(true);

    const brand = {
      audience: form.audience,
      tone: form.tone
    };

    const offer = {
      productName: form.productName,
      coreBenefit: form.coreBenefit,
      painPoint: form.painPoint,
      proofType: form.proofType,
      proofDetail: form.proofDetail,
      action: form.action
    };

    const payloadScript = {
      brand,
      offer,
      platform: form.platform,
      goal: form.goal
    };

    const payloadVideo = {
      brand,
      offer,
      platform: form.platform,
      length: form.length
    };

    const payloadImage = {
      brand,
      offer: {
        productName: form.productName,
        coreBenefit: form.coreBenefit
      },
      platform: form.platform
    };

    const payloadTemplate = {
      brand: { tone: form.tone },
      offer,
      type: form.type
    };

    const payloadCaption = {
      brand,
      offer,
      platform: form.platform
    };

    const payloadPosting = {
      brand: { tone: form.tone },
      offer: { productName: form.productName },
      platforms: form.platforms.split(",").map((p) => p.trim())
    };

    const [
      scriptRes,
      videoRes,
      imageRes,
      templateRes,
      captionRes,
      postingRes
    ] = await Promise.all([
      callAdCreator("scripts", payloadScript),
      callAdCreator("videos", payloadVideo),
      callAdCreator("images", payloadImage),
      callAdCreator("templates", payloadTemplate),
      callAdCreator("captions", payloadCaption),
      callAdCreator("posting", payloadPosting)
    ]);

    setOutput({
      script: scriptRes.script,
      video: videoRes.videoScript,
      image: imageRes.imagePrompt,
      template: templateRes.template,
      caption: captionRes.caption,
      posting: postingRes.postingPlan
    });

    setLoading(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Super Generator</h1>
      <p>One input → All outputs. Your creator command center.</p>

      {Object.keys(form).map((key) => (
        <input
          key={key}
          name={key}
          placeholder={key}
          onChange={handleChange}
          style={{ display: "block", marginBottom: 10 }}
        />
      ))}

      <button onClick={generateAll}>
        {loading ? "Generating Everything..." : "Generate All"}
      </button>
    </div>
  );
}
