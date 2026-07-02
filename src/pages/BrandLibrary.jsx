import { useState, useEffect } from "react";

export default function BrandLibrary() {
  const [brands, setBrands] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [form, setForm] = useState({
    name: "",
    audience: "",
    tone: "",
    colors: "",
    voiceNotes: ""
  });

  useEffect(() => {
    const saved = localStorage.getItem("adcreator_brands");
    if (saved) {
      setBrands(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("adcreator_brands", JSON.stringify(brands));
  }, [brands]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const addBrand = () => {
    if (!form.name) return;

    const newBrand = {
      id: Date.now(),
      ...form
    };

    setBrands([...brands, newBrand]);
    setForm({
      name: "",
      audience: "",
      tone: "",
      colors: "",
      voiceNotes: ""
    });
  };

  const deleteBrand = (id) => {
    setBrands(brands.filter((b) => b.id !== id));
    if (selectedId === id) setSelectedId(null);
  };

  const selectedBrand = brands.find((b) => b.id === selectedId) || null;

  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        height: "100%",
        color: "white",
        fontFamily: "Inter, sans-serif"
      }}
    >
      {/* LEFT: BRAND LIST + CREATE */}
      <div style={{ width: 320 }}>
        <h1 style={{ marginBottom: 10 }}>Brand Library</h1>
        <p style={{ opacity: 0.7, marginBottom: 20 }}>
          Save your best brands and reuse them across generators.
        </p>

        <div
          style={{
            background: "rgba(255,255,255,0.06)",
            padding: 15,
            borderRadius: 10,
            marginBottom: 20
          }}
        >
          <h2 style={{ marginBottom: 10 }}>New Brand</h2>

          {Object.keys(form).map((key) => (
            <input
              key={key}
              name={key}
              placeholder={key}
              value={form[key]}
              onChange={handleChange}
              style={{
                display: "block",
                width: "100%",
                marginBottom: 8,
                padding: 8,
                borderRadius: 6,
                border: "1px solid rgba(255,255,255,0.2)",
                background: "rgba(0,0,0,0.4)",
                color: "white"
              }}
            />
          ))}

          <button
            onClick={addBrand}
            style={{
              marginTop: 8,
              padding: "8px 12px",
              borderRadius: 6,
              border: "none",
              background: "#4ade80",
              color: "#0b1120",
              fontWeight: 600,
              cursor: "pointer"
            }}
          >
            Save Brand
          </button>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            padding: 10,
            borderRadius: 10,
            height: "calc(100% - 260px)",
            overflowY: "auto"
          }}
        >
          <h2 style={{ marginBottom: 10 }}>Saved Brands</h2>

          {brands.length === 0 && (
            <p style={{ opacity: 0.7 }}>No brands yet. Add your first one.</p>
          )}

          {brands.map((brand) => (
            <div
              key={brand.id}
              style={{
                padding: 10,
                borderRadius: 8,
                marginBottom: 8,
                background:
                  selectedId === brand.id
                    ? "rgba(74,222,128,0.25)"
                    : "rgba(255,255,255,0.06)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer"
              }}
              onClick={() => setSelectedId(brand.id)}
            >
              <div>
                <div style={{ fontWeight: 600 }}>{brand.name}</div>
                <div style={{ fontSize: 12, opacity: 0.7 }}>
                  {brand.tone || "No tone set"}
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteBrand(brand.id);
                }}
                style={{
                  border: "none",
                  background: "rgba(239,68,68,0.9)",
                  color: "white",
                  borderRadius: 6,
                  padding: "4px 8px",
                  fontSize: 12,
                  cursor: "pointer"
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: BRAND DETAILS */}
      <div
        style={{
          flex: 1,
          background: "rgba(255,255,255,0.04)",
          borderRadius: 10,
          padding: 20,
          overflowY: "auto"
        }}
      >
        {!selectedBrand && (
          <p style={{ opacity: 0.7 }}>
            Select a brand on the left to see details.
          </p>
        )}

        {selectedBrand && (
          <div>
            <h1 style={{ marginBottom: 10 }}>{selectedBrand.name}</h1>

            <DetailBlock label="Audience" value={selectedBrand.audience} />
            <DetailBlock label="Tone" value={selectedBrand.tone} />
            <DetailBlock label="Colors" value={selectedBrand.colors} />
            <DetailBlock label="Voice Notes" value={selectedBrand.voiceNotes} />
          </div>
        )}
      </div>
    </div>
  );
}

function DetailBlock({ label, value }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ fontSize: 13, opacity: 0.7 }}>{label}</div>
      <div
        style={{
          marginTop: 4,
          padding: 10,
          borderRadius: 8,
          background: "rgba(0,0,0,0.4)",
          border: "1px solid rgba(255,255,255,0.15)",
          minHeight: 40
        }}
      >
        {value || <span style={{ opacity: 0.6 }}>Not set</span>}
      </div>
    </div>
  );
}
