import { Outlet, Link, useLocation } from "react-router-dom";
import PreviewPanel from "../components/PreviewPanel";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import ThemeSwitcher from "../components/ThemeSwitcher";
import { panelStyle } from "../styles/GlobalStyles";

export default function Dashboard() {
  const location = useLocation();
  const [output, setOutput] = useState({});
  const { theme } = useTheme();

  const navItems = [
    { path: "/", label: "Super" },
    { path: "/scripts", label: "Scripts" },
    { path: "/videos", label: "Videos" },
    { path: "/images", label: "Images" },
    { path: "/captions", label: "Captions" },
    { path: "/templates", label: "Templates" },
    { path: "/posting", label: "Posting" },
    { path: "/brands", label: "Brands" },
    { path: "/projects", label: "Projects" }
  ];

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: theme.background,
        color: theme.text,
        fontFamily: "Inter, system-ui, sans-serif"
      }}
    >
      {/* LEFT SIDE */}
      <div
        style={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
          padding: 20,
          gap: 20
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12
          }}
        >
          <h1 style={{ margin: 0 }}>AdCreator-AI Studio</h1>
          <ThemeSwitcher />
        </div>

        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap"
          }}
        >
          {navItems.map((item) => {
            const active =
              item.path === "/"
                ? location.pathname === "/"
                : location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  padding: "8px 14px",
                  borderRadius: 999,
                  fontSize: 14,
                  textDecoration: "none",
                  border: active
                    ? `1px solid ${theme.accent}`
                    : "1px solid rgba(148,163,184,0.4)",
                  color: active ? theme.accent : theme.text,
                  background: active
                    ? "rgba(148,163,184,0.12)"
                    : theme.panel,
                  transition: "all 0.15s ease"
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div style={{ flex: 1, overflow: "auto", ...panelStyle(theme) }}>
          <Outlet context={{ setOutput }} />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        style={{
          flex: 1.2,
          padding: 20,
          borderLeft: "1px solid rgba(148,163,184,0.35)",
          background:
            theme.name === "Minimal"
              ? "#f3f4f6"
              : "rgba(15,23,42,0.95)"
        }}
      >
        <PreviewPanel output={output} />
      </div>
    </div>
  );
}
