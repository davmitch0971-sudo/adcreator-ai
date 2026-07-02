import { useTheme } from "../context/ThemeContext";
import { panelStyle } from "../styles/GlobalStyles";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const { theme } = useTheme();

  const projects = JSON.parse(localStorage.getItem("projects") || "[]");

  const grouped = projects.reduce((acc, p) => {
    if (!acc[p.brand]) acc[p.brand] = [];
    acc[p.brand].push(p);
    return acc;
  }, {});

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>Projects</h1>

      {Object.keys(grouped).length === 0 && (
        <p style={{ opacity: 0.7 }}>No projects saved yet.</p>
      )}

      {Object.keys(grouped).map((brand) => (
        <div
          key={brand}
          style={{
            marginBottom: 20,
            ...panelStyle(theme)
          }}
        >
          <h2 style={{ marginTop: 0 }}>{brand}</h2>

          {grouped[brand].map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ))}
    </div>
  );
}
