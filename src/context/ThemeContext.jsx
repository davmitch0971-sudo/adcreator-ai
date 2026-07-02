import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const THEMES = {
  Default: {
    name: "Default",
    background: "#020617",
    panel: "rgba(15,23,42,0.9)",
    accent: "#3b82f6",
    text: "#e5e7eb"
  },
  Luxury: {
    name: "Luxury",
    background: "#020617",
    panel: "rgba(24,24,27,0.95)",
    accent: "#fbbf24",
    text: "#fef3c7"
  },
  Minimal: {
    name: "Minimal",
    background: "#f9fafb",
    panel: "#ffffff",
    accent: "#0f172a",
    text: "#0f172a"
  },
  Neon: {
    name: "Neon",
    background: "#020617",
    panel: "rgba(15,23,42,0.95)",
    accent: "#22c55e",
    text: "#e5e7eb"
  },
  Corporate: {
    name: "Corporate",
    background: "#0f172a",
    panel: "rgba(15,23,42,0.95)",
    accent: "#3b82f6",
    text: "#e5e7eb"
  },
  Creator: {
    name: "Creator",
    background: "#020617",
    panel: "rgba(24,24,27,0.95)",
    accent: "#ec4899",
    text: "#f9a8d4"
  }
};

export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState("Default");

  useEffect(() => {
    const saved = localStorage.getItem("adcreator_theme");
    if (saved && THEMES[saved]) setThemeName(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("adcreator_theme", themeName);
  }, [themeName]);

  const value = {
    themeName,
    theme: THEMES[themeName],
    setThemeName,
    themes: Object.keys(THEMES)
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
