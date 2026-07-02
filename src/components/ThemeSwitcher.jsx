import { useTheme } from "../context/ThemeContext";

export default function ThemeSwitcher() {
  const { themeName, setThemeName, themes } = useTheme();

  return (
    <div style={{ marginLeft: "auto" }}>
      <label
        style={{
          fontSize: 12,
          opacity: 0.7,
          marginRight: 6
        }}
      >
        Theme
      </label>

      <select
        value={themeName}
        onChange={(e) => setThemeName(e.target.value)}
        style={{
          padding: 6,
          borderRadius: 6,
          border: "1px solid rgba(255,255,255,0.2)",
          background: "rgba(15,23,42,0.9)",
          color: "white",
          fontSize: 12
        }}
      >
        {themes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
    </div>
  );
}
