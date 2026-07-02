import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { inputStyle, buttonStyle, panelStyle } from "../styles/GlobalStyles";

export default function Brands() {
  const { theme } = useTheme();
  const [form, setForm] = useState({
    name: "",
    audience: "",
    tone: "",
    colors: "",
    font: "",
    vibe: ""
  });

  const brands = JSON.parse(localStorage.getItem("brands") || "[]");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = () => {
    const id = Date.now().toString();
    const payload = {
      id,
      name: form.name,
      audience: form.audience,
      tone: form.tone,
      colors: form.colors.split(",").map((c) => c.trim()),
      font: form.font,
      vibe: form.vibe
    };
    localStorage.setItem("brands", JSON.stringify([...brands, payload]));
    setForm({
      name: "",
      audience: "",
      tone: "",
      colors: "",
      font: "",
      vibe: ""
    });
  };

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>Brands</h1>

      <div style={{ ...panelStyle(theme), marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>Create Brand</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 10
          }}
        >
          {Object.keys(form).map((key) => (
            <input
              key={key}
              name={key}
              value={form[key]}
              placeholder={key}
              onChange={handleChange}
              style={inputStyle(theme)}
            />
          ))}
        </div>
        <div style={{ marginTop: 10 }}>
          <button onClick={handleSave} style={buttonStyle(theme)}>
            Save Brand
          </button>
        </div>
      </div>

      <div style={panelStyle(theme)}>
        <h2 style={{ marginTop: 0 }}>Saved Brands</h2>
        {brands.length === 0 && (
          <p style={{ fontSize: 12, opacity: 0.7 }}>No brands yet.</p>
        )}
        {brands.map((b) => (
          <div key={b.id} style={{ marginBottom: 6 }}>
            <strong>{b.name}</strong>{" "}
            <span style={{ fontSize: 12, opacity: 0.7 }}>
              ({b.audience} • {b.tone})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
