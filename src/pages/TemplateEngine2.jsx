import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle, inputStyle } from "../styles/GlobalStyles";
import BrandSelector from "../components/BrandSelector";
import SaveProjectButton from "../components/SaveProjectButton";
import { buildBrandStyle } from "../utils/BrandStyleEngine";
import { callAdCreator } from "../api/adcreator";

export default function TemplateEngine2() {
  const { theme } = useTheme();

  const [brand, setBrand] = useState(null);
  const [templateType, setTemplateType] = useState("ad");
  const [goal, setGoal] = useState("conversion");
  const [productName, setProductName] = useState("");
  const [coreBenefit, setCoreBenefit] = useState("");
  const [painPoint, setPainPoint] = useState("");
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleBrandSelect = (b) => {
    setBrand(b);
    if (b?.name) setProductName(b.name);
    if (b?.tone) setGoal("brand-awareness");
  };

  const generateTemplates = async () => {
    if (!brand) return alert("Select a brand first.");
    if (!productName.trim()) return alert("Enter product name.");

    setLoading(true);

    const style = buildBrandStyle(brand);

    const payload = {
      brand: {
        name: brand.name,
        audience: brand.audience,
        tone: brand.tone,
        style
      },
      templateType,
      goal,
      productName,
      coreBenefit,
      painPoint
    };

    const r = await callAdCreator("template-engine-2", payload);

    setTemplates(r.templates || []);
    setLoading(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>AI Template Engine 2.0</h1>

      <div style={{ marginBottom: 16 }}>
        <BrandSelector onSelect={handleBrandSelect} />
      </div>

      <div style={{ ...panelStyle(theme), marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>Template Settings</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 10
          }}
        >
          <select
            value={templateType}
            onChange={(e) => setTemplateType(e.target.value)}
            style={inputStyle(theme)}
          >
            <option value="ad">Ad Template</option>
            <option value="story">Story Template</option>
            <option value="carousel">Carousel Template</option>
            <option value="product">Product Template</option>
            <option value="promo">Promo Template</option>
          </select>

          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            style={inputStyle(theme)}
          >
            <option value="conversion">Conversion</option>
            <option value="brand-awareness">Brand Awareness</option>
            <option value="engagement">Engagement</option>
            <option value="education">Education</option>
          </select>

          <input
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Product Name"
            style={inputStyle(theme)}
          />

          <input
            value={coreBenefit}
            onChange={(e) => setCoreBenefit(e.target.value)}
            placeholder="Core Benefit"
            style={inputStyle(theme)}
          />

          <input
            value={painPoint}
            onChange={(e) => setPainPoint(e.target.value)}
            placeholder="Pain Point"
            style={inputStyle(theme)}
          />
        </div>

        <div style={{ marginTop: 10 }}>
          <button
            onClick={generateTemplates}
            style={buttonStyle(theme)}
          >
            {loading ? "Generating Templates..." : "Generate Templates"}
          </button>
        </div>
      </div>

      {templates.length > 0 && (
        <div style={panelStyle(theme)}>
          <h2 style={{ marginTop: 0 }}>Generated Templates</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 12
            }}
          >
            {templates.map((t) => (
              <div
                key={t.id}
                style={{
                  borderRadius: 10,
                  padding: 10,
                  background: theme === "dark" ? "#0f172a" : "#ffffff",
                  border: "1px solid rgba(148,163,184,0.35)"
                }}
              >
                <strong>{t.name}</strong>
                <p style={{ fontSize: 12, opacity: 0.7 }}>{t.description}</p>

                <div style={{ marginTop: 8 }}>
                  <strong>Layout:</strong>
                  <pre
                    style={{
                      fontSize: 11,
                      background: theme === "dark" ? "#1e293b" : "#f1f5f9",
                      padding: 8,
                      borderRadius: 6,
                      overflowX: "auto"
                    }}
                  >
                    {JSON.stringify(t.layout, null, 2)}
                  </pre>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 12 }}>
            <SaveProjectButton
              brand={brand}
              generator="Template Engine 2.0"
              data={{ templates }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
