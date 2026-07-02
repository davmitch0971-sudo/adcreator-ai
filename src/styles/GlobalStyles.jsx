export const inputStyle = (theme) => ({
  padding: 8,
  borderRadius: 6,
  border: "1px solid",
  borderColor: theme === "dark" ? "#374151" : "#d1d5db",
  background: theme === "dark" ? "#020617" : "#ffffff",
  color: theme === "dark" ? "#e5e7eb" : "#111827",
  fontSize: 13
});

export const buttonStyle = (theme) => ({
  padding: "8px 14px",
  borderRadius: 6,
  border: "none",
  cursor: "pointer",
  background: theme === "dark" ? "#2563eb" : "#1d4ed8",
  color: "#ffffff",
  fontWeight: 600,
  fontSize: 13
});

export const panelStyle = (theme) => ({
  borderRadius: 10,
  padding: 12,
  background:
    theme === "dark"
      ? "linear-gradient(135deg,#020617,#0f172a)"
      : "linear-gradient(135deg,#ffffff,#e5e7eb)",
  border: "1px solid rgba(148,163,184,0.35)"
});
