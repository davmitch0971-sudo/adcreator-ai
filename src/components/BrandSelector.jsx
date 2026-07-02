import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function BrandSelector({ onSelect }) {
  const { theme } = useTheme();

  const brands = JSON.parse(localStorage.getItem("brands") || "[]");

  const handleSelect = (b) => {
    onSelect(b);
  };

  return (
    <div style={panelStyle(theme)}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontWeight: 600 }}>Brands</span>
        <span style={{ fontSize: 12, opacity: 0.7 }}>
          {brands.length} saved
        </span>
      </div>

      {brands.length === 0 && (
        <p style={{ fontSize: 12, opacity: 0.7, marginTop: 8 }}>
          No brands yet. Create some in the Brands page.
        </p>
      )}

      <div style={{ marginTop: 8, display: "flex", flexWrap: "wrap", gap: 6 }}>
        {brands.map((b) => (
          <button
            key={b.id}
            onClick={() => handleSelect(b)}
            style={{
              ...buttonStyle(theme),
              padding: "4px 10px",
              fontSize: 12
            }}
          >
            {b.name}
          </button>
        ))}
      </div>
    </div>
  );
}
