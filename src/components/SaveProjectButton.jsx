import { buttonStyle } from "../styles/GlobalStyles";
import { useTheme } from "../context/ThemeContext";

export default function SaveProjectButton({ brand, generator, data }) {
  const { theme } = useTheme();

  const handleSave = () => {
    const projects = JSON.parse(localStorage.getItem("projects") || "[]");
    const id = Date.now().toString();

    const payload = {
      id,
      brand: brand?.name || "Unknown Brand",
      generator,
      data,
      createdAt: new Date().toISOString()
    };

    localStorage.setItem("projects", JSON.stringify([...projects, payload]));
    alert("Project saved.");
  };

  return (
    <button onClick={handleSave} style={buttonStyle(theme)}>
      Save Project
    </button>
  );
}
