import { useState, useEffect } from "react";

export default function BrandSelector({ onSelect }) {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("adcreator_brands");
    if (saved) setBrands(JSON.parse(saved));
  }, []);

  return (
    <div style={{ marginBottom: 20 }}>
      <h3>Select Brand</h3>

      <select
        onChange={(e) => {
          const brand = brands.find((b) => b.id === Number(e.target.value));
          onSelect(brand || null);
        }}
        style={{
          padding: 8,
          borderRadius: 6,
          width: "100%",
          background: "rgba(0,0,0,0.4)",
          color: "white",
          border: "1px solid rgba(255,255,255,0.2)"
        }}
      >
        <option value="">-- None --</option>
        {brands.map((b) => (
          <option key={b.id} value={b.id}>
            {b.name}
          </option>
        ))}
      </select>
    </div>
  );
}
