export default function ProjectCard({ project }) {
  return (
    <div
      style={{
        padding: 15,
        borderRadius: 10,
        background: "rgba(255,255,255,0.06)",
        marginBottom: 12
      }}
    >
      <h3 style={{ margin: 0 }}>{project.generator}</h3>
      <p style={{ opacity: 0.7, marginTop: 4 }}>
        Brand: {project.brand}
      </p>
      <p style={{ opacity: 0.7 }}>
        Saved: {new Date(project.createdAt).toLocaleString()}
      </p>

      <pre
        style={{
          background: "rgba(0,0,0,0.4)",
          padding: 10,
          borderRadius: 8,
          whiteSpace: "pre-wrap",
          marginTop: 10
        }}
      >
        {JSON.stringify(project.data, null, 2)}
      </pre>
    </div>
  );
}
