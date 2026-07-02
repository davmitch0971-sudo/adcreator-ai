export default function ExportProjectButton({ project }) {
  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(project, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `project-${project.id}.json`;
    a.click();

    URL.revokeObjectURL(url);
  };

  const exportTXT = () => {
    const content =
      `Project: ${project.generator}\n` +
      `Brand: ${project.brand}\n` +
      `Saved: ${new Date(project.createdAt).toLocaleString()}\n\n` +
      JSON.stringify(project.data, null, 2);

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `project-${project.id}.txt`;
    a.click();

    URL.revokeObjectURL(url);
  };

  const copyClipboard = () => {
    const content =
      `Project: ${project.generator}\n` +
      `Brand: ${project.brand}\n` +
      `Saved: ${new Date(project.createdAt).toLocaleString()}\n\n` +
      JSON.stringify(project.data, null, 2);

    navigator.clipboard.writeText(content);
  };

  return (
    <div style={{ marginTop: 10, display: "flex", gap: 10 }}>
      <button
        onClick={exportJSON}
        style={{
          padding: "6px 10px",
          borderRadius: 6,
          background: "#3b82f6",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        Export JSON
      </button>

      <button
        onClick={exportTXT}
        style={{
          padding: "6px 10px",
          borderRadius: 6,
          background: "#22c55e",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        Export TXT
      </button>

      <button
        onClick={copyClipboard}
        style={{
          padding: "6px 10px",
          borderRadius: 6,
          background: "#f59e0b",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        Copy
      </button>
    </div>
  );
}
