import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import PreviewPanel from "../components/PreviewPanel";

import {
  Home,
  FileText,
  Video,
  Image as ImageIcon,
  Layers,
  Type,
  Calendar,
  Folder,
  Book,
  Settings
} from "lucide-react";

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  // GLOBAL OUTPUT STATE FOR PREVIEW PANEL
  const [output, setOutput] = useState(null);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "#0d0f12",
        color: "white",
        overflow: "hidden",
        fontFamily: "Inter, sans-serif"
      }}
    >
      {/* SIDEBAR */}
      <div
        style={{
          width: collapsed ? "80px" : "260px",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(20px)",
          borderRight: "1px solid rgba(255,255,255,0.1)",
          transition: "0.25s",
          display: "flex",
          flexDirection: "column",
          padding: "20px 10px"
        }}
      >
        <button
          onClick={() => setCollapsed(!collapsed)}
          style={{
            background: "none",
            border: "none",
            color: "white",
            marginBottom: 20,
            cursor: "pointer",
            fontSize: 18
          }}
        >
          {collapsed ? "»" : "«"}
        </button>

        <NavItem to="/" label="Super Generator" collapsed={collapsed} icon={Home} />
        <NavItem to="/scripts" label="Scripts" collapsed={collapsed} icon={FileText} />
        <NavItem to="/videos" label="Videos" collapsed={collapsed} icon={Video} />
        <NavItem to="/images" label="Images" collapsed={collapsed} icon={ImageIcon} />
        <NavItem to="/templates" label="Templates" collapsed={collapsed} icon={Layers} />
        <NavItem to="/captions" label="Captions" collapsed={collapsed} icon={Type} />
        <NavItem to="/posting" label="Posting Plan" collapsed={collapsed} icon={Calendar} />

        <div style={{ marginTop: "auto" }}>
          <NavItem to="/projects" label="Projects" collapsed={collapsed} icon={Folder} />
          <NavItem to="/brands" label="Brand Library" collapsed={collapsed} icon={Book} />
          <NavItem to="/settings" label="Settings" collapsed={collapsed} icon={Settings} />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden"
        }}
      >
        {/* TOPBAR */}
        <div
          style={{
            height: 70,
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px"
          }}
        >
          <div style={{ fontSize: 20, fontWeight: 600 }}>AdCreator‑AI Studio</div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 15
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.1)",
                padding: "8px 14px",
                borderRadius: 8
              }}
            >
              Project: Default
            </div>

            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.2)"
              }}
            ></div>
          </div>
        </div>

        {/* CONTENT + PREVIEW */}
        <div
          style={{
            flex: 1,
            display: "flex",
            overflow: "hidden"
          }}
        >
          {/* MAIN PANEL */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: 30
            }}
          >
            {/* Pass output + setOutput to all generator screens */}
            <Outlet context={{ output, setOutput }} />
          </div>

          {/* PREVIEW PANEL */}
          <PreviewPanel output={output} />
        </div>
      </div>
    </div>
  );
}

function NavItem({ to, label, collapsed, icon: Icon }) {
  return (
    <Link
      to={to}
      style={{
        display: "flex",
        alignItems: "center",
        gap: collapsed ? 0 : 12,
        padding: collapsed ? "12px 10px" : "12px 20px",
        marginBottom: 8,
        borderRadius: 8,
        background: "rgba(255,255,255,0.08)",
        color: "white",
        textDecoration: "none",
        fontSize: collapsed ? 14 : 16,
        transition: "0.2s",
        overflow: "hidden"
      }}
    >
      <Icon size={collapsed ? 20 : 22} />
      {!collapsed && <span>{label}</span>}
    </Link>
  );
}
