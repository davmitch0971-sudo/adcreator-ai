export default function PreviewPanel({ output }) {
  return (
    <div
      style={{
        width: 420,
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(20px)",
        borderLeft: "1px solid rgba(255,255,255,0.1)",
        padding: 20,
        overflowY: "auto",
        color: "white",
        fontFamily: "Inter, sans-serif"
      }}
    >
      <h2 style={{ marginBottom: 20 }}>AI Preview</h2>

      {!output && (
        <p style={{ opacity: 0.7 }}>
          Generate something to see live previews here.
        </p>
      )}

      {output && (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {output.script && (
            <PreviewBlock title="Script" content={output.script} />
          )}

          {output.video && (
            <PreviewBlock title="Video Script" content={output.video} />
          )}

          {output.image && (
            <PreviewBlock title="Image Prompt" content={output.image} />
          )}

          {output.template && (
            <PreviewBlock title="Template" content={output.template} />
          )}

          {output.caption && (
            <PreviewBlock title="Caption" content={output.caption} />
          )}

          {output.posting && (
            <PreviewBlock title="Posting Plan" content={output.posting} />
          )}
        </div>
      )}
    </div>
  );
}

function PreviewBlock({ title, content }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.08)",
        padding: 15,
        borderRadius: 10
      }}
    >
      <h3 style={{ marginBottom: 10 }}>{title}</h3>
      <pre
        style={{
          whiteSpace: "pre-wrap",
          fontSize: 14,
          lineHeight: "1.4",
          opacity: 0.9
        }}
      >
        {typeof content === "string"
          ? content
          : JSON.stringify(content, null, 2)}
      </pre>
    </div>
  );
}
