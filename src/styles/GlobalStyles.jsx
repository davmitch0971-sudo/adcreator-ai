export const ui = {
  radius: 10,
  radiusSm: 6,
  padding: 12,
  paddingLg: 20,
  inputHeight: 42,
  shadow: "0 4px 20px rgba(0,0,0,0.25)",
  border: "1px solid rgba(148,163,184,0.35)",
  transition: "all 0.15s ease"
};

export const inputStyle = (theme) => ({
  height: ui.inputHeight,
  padding: "0 12px",
  borderRadius: ui.radiusSm,
  border: ui.border,
  background: theme.panel,
  color: theme.text,
  width: "100%",
  marginBottom: 12,
  outline: "none",
  transition: ui.transition
});

export const buttonStyle = (theme) => ({
  padding: "10px 16px",
  borderRadius: ui.radiusSm,
  background: theme.accent,
  color: "white",
  border: "none",
  cursor: "pointer",
  fontWeight: 600,
  transition: ui.transition
});

export const panelStyle = (theme) => ({
  background: theme.panel,
  borderRadius: ui.radius,
  padding: ui.paddingLg,
  border: ui.border,
  boxShadow: ui.shadow
});
