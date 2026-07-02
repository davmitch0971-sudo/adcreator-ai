import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle, inputStyle } from "../styles/GlobalStyles";
import BrandSelector from "../components/BrandSelector";
import SaveProjectButton from "../components/SaveProjectButton";
import { buildBrandStyle } from "../utils/BrandStyleEngine";
import { callAdCreator } from "../api/adcreator";

export default function BrandMemoryEngine() {
  const { theme } = useTheme();

  const [brand, setBrand] = useState(null);
  const [memory, setMemory] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleBrandSelect = (b) => {
    setBrand(b);
  };

  const buildMemory = async () => {
    if (!brand) return alert("Select a brand first.");
    setLoading(true);

    const style = buildBrandStyle(brand);

    const payload = {
      brand: {
        name: brand.name,
        audience: brand.audience,
        tone: brand.tone,
        style
      }
    };

    const r = await callAdCreator("brand-memory", payload);

    const mem = r.memory || {
      persona: "Bold, confident, direct brand that speaks like a real human.",
      toneRules: [
        "No corporate jargon.",
        "Short, punchy sentences.",
        "Swear lightly if audience fits.",
        "Always focus on outcomes, not features."
      ],
      visualRules: [
        "High contrast colors.",
        "Strong typography.",
        "Minimal clutter.",
        "Focus on product in action."
      ],
      do: [
        "Speak to one person.",
        "Use real language.",
        "Show transformation."
      ],
      dont: [
        "Sound generic.",
        "Over‑explain.",
        "Use buzzwords."
      ]
    };

    setMemory(mem);
    localStorage.setItem(
      "brandMemory:" + brand.name,
      JSON.stringify(mem)
    );

    setLoading(false);
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>AI Brand Brain — Memory Engine</h1>

      <div style={{ marginBottom: 16 }}>
        <BrandSelector onSelect={handleBrandSelect} />
      </div>

      <div style={{ ...panelStyle(theme), marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>Build Brand Memory</h2>

        <p style={{ fontSize: 13, opacity: 0.8 }}>
          This creates a persistent brand brain: persona, tone rules, visual rules,
          do/don't list, and stores it for reuse across generators.
        </p>

        <button
          onClick={buildMemory}
          style={buttonStyle(theme)}
        >
          {loading ? "Building Brand Brain..." : "Generate Brand Memory"}
        </button>
      </div>

      {memory && (
        <div style={panelStyle(theme)}>
          <h2 style={{ marginTop: 0 }}>Brand Memory</h2>

          <div style={{ marginBottom: 10 }}>
            <strong>Persona</strong>
            <p style={{ margin: 0 }}>{memory.persona}</p>
          </div>

          <div style={{ marginBottom: 10 }}>
            <strong>Tone Rules</strong>
            <ul style={{ marginTop: 4 }}>
              {memory.toneRules?.map((rule, i) => (
                <li key={i}>{rule}</li>
              ))}
            </ul>
          </div>

          <div style={{ marginBottom: 10 }}>
            <strong>Visual Rules</strong>
            <ul style={{ marginTop: 4 }}>
              {memory.visualRules?.map((rule, i) => (
                <li key={i}>{rule}</li>
              ))}
            </ul>
          </div>

          <div style={{ marginBottom: 10 }}>
            <strong>Do</strong>
            <ul style={{ marginTop: 4 }}>
              {memory.do?.map((rule, i) => (
                <li key={i}>{rule}</li>
              ))}
            </ul>
          </div>

          <div style={{ marginBottom: 10 }}>
            <strong>Don&apos;t</strong>
            <ul style={{ marginTop: 4 }}>
              {memory.dont?.map((rule, i) => (
                <li key={i}>{rule}</li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: 12 }}>
            <SaveProjectButton
              brand={brand}
              generator="Brand Memory Engine"
              data={{ memory }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
