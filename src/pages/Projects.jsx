import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("adcreator_projects") || "[]");
    setProjects(saved);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Saved Projects</h1>

      {projects.length === 0 && (
        <p style={{ opacity: 0.7 }}>No saved projects yet.</p>
      )}

      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}
