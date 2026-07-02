import { NavLink, Outlet } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { path: "/", label: "Super" },
  { path: "/scripts", label: "Scripts" },
  { path: "/videos", label: "Videos" },
  { path: "/images", label: "Images" },
  { path: "/captions", label: "Captions" },
  { path: "/templates", label: "Templates" },
  { path: "/posting", label: "Posting" },
  { path: "/video-editor", label: "Video Editor" },
  { path: "/scene-video", label: "Scene → Video" },
  { path: "/voice-lab", label: "Voice Lab" },
  { path: "/motion-graphics", label: "Motion Graphics" },
  { path: "/video-export", label: "Export Video" },
  { path: "/asset-studio", label: "Asset Studio" },
  { path: "/brand-memory", label: "Brand Brain" },
  { path: "/template-engine-2", label: "Template Engine 2.0" },
  { path: "/auto-storyboard", label: "Auto‑Storyboard" },
  { path: "/auto-shotlist", label: "Auto‑Shotlist" },
  { path: "/auto-camera-moves", label: "Auto‑Camera‑Moves" },
  { path: "/auto-transitions", label: "Auto‑Transitions" },
  { path: "/auto-edit", label: "Auto‑Edit" },
  { path: "/auto-color-grade", label: "Auto‑Color‑Grade" },
  { path: "/auto-sound-design", label: "Auto‑Sound‑Design" },
  { path: "/auto-vfx", label: "Auto‑VFX" },
  { path: "/auto-voice-sync", label: "Auto‑Voice‑Sync" },
  { path: "/auto-music", label: "Auto‑Music" },
  { path: "/billing", label: "Billing" },
  { path: "/subscription", label: "Subscription" },
  { path: "/user-analytics", label: "User Analytics" },
  { path: "/crm", label: "CRM" },
  { path: "/team", label: "Team" },
  { path: "/distribution", label: "Distribution" },
  { path: "/engagement", label: "Engagement" },
  { path: "/audience", label: "Audience" },
  { path: "/monetization", label: "Monetization" },
  { path: "/partnerships", label: "Partnerships" },
  { path: "/brands", label: "Brands" },
  { path: "/projects", label: "Projects" },
  { path: "/analytics", label: "Analytics" }
];

export default function Dashboard() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "220px 1fr",
        height: "100vh",
        background: theme === "dark" ? "#05060a" : "#f4f5fb",
        color: theme === "dark" ? "#f4f5fb" : "#111"
      }}
    >
      <aside
        style={{
          borderRight: "1px solid rgba(255,255,255,0.08)",
          padding: 12,
          background: theme === "dark" ? "#0b0d14" : "#ffffff"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16
          }}
        >
          <span style={{ fontWeight: 700 }}>AdCreator‑AI</span>
          <button
            onClick={toggleTheme}
            style={{
              border: "none",
              padding: "4px 8px",
              borderRadius: 6,
              cursor: "pointer",
              background: theme === "dark" ? "#1f2937" : "#e5e7eb",
              color: theme === "dark" ? "#f9fafb" : "#111827"
            }}
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>

        <nav style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              style={({ isActive }) => ({
                padding: "6px 10px",
                borderRadius: 6,
                textDecoration: "none",
                fontSize: 14,
                background: isActive
                  ? theme === "dark"
                    ? "#111827"
                    : "#e5e7eb"
                  : "transparent",
                color: theme === "dark" ? "#e5e7eb" : "#111827"
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main
        style={{
          overflow: "auto",
          padding: 12
        }}
      >
        <Outlet context={{}} />
      </main>
    </div>
  );
}
