import { useState } from "react";

export default function SaveProjectButton({ brand, generator, data }) {
  const [saved, setSaved] = useState(false);

  const save = () => {
    const existing = JSON.parse(localStorage.getItem("adcreator_projects") || "[]");

    const newProject = {
      id: Date.now(),
      brand: brand?.name || "No Brand",
      generator,
      data,
      createdAt: new Date().toISOString()
    };

    localStorage.setItem(
      "adcreator_projects",
      JSON.stringify([newProject, ...existing])
    );

    setSaved(true);
  };

  return (
    <button
      onClick={save}
      style={{
        marginTop: 10,
        padding: "8px 12px",
        borderRadius: 6,
        border: "none",
        background: saved ? "#4ade80" : "#3b82f6",
        color: "white",
        fontWeight: 600,
        cursor: "pointer"
      }}
    >
      {saved ? "Saved ✓" : "Save Project"}
    </button>
  );
}
