import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function ProjectCard({ project }) {
  const { theme } = useTheme();

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(project.data, null, 2));
    alert("Project data copied.");
  };

  const handleDelete = () => {
    const projects = JSON.parse(localStorage.getItem("projects") || "[]");
    const next = projects.filter((p) => p.id !== project.id);
    localStorage.setItem("projects", JSON.stringify(next));
    window.location.reload();
  };

  return (
    <div style={{ marginBottom: 10, ...panelStyle(theme) }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 6
        }}
      >
        <div>
          <div style={{ fontWeight: 600 }}>{project.brand}</div>
          <div style={{ fontSize: 12, opacity: 0.7 }}>
            {project.generator} •{" "}
            {new Date(project.createdAt).toLocaleString()}
          </div>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <button
            onClick={handleCopy}
            style={{ ...buttonStyle(theme), padding: "4px 8px", fontSize: 11 }}
          >
            Copy
          </button>
          <button
            onClick={handleDelete}
            style={{
              ...buttonStyle(theme),
              padding: "4px 8px",
              fontSize: 11,
              background: "#b91c1c"
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
