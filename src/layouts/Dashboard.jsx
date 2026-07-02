import { NavLink, Outlet } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { path: "/", label: "Dashboard Home" },
  { path: "/landing", label: "Landing Page" },
  { path: "/pricing", label: "Pricing" },
  { path: "/checkout", label: "Checkout" },
  { path: "/signup", label: "Signup" },
  { path: "/login", label: "Login" },
  { path: "/forgot", label: "Forgot Password" },
  { path: "/onboarding", label: "Onboarding" },
  { path: "/account", label: "Account Settings" },
  { path: "/profile", label: "User Profile" },
  { path: "/billing-portal", label: "Billing Portal" },
  { path: "/brands", label: "Brand Manager" },
  { path: "/projects", label: "Project Manager" },
  { path: "/assets", label: "Asset Library" },
  { path: "/analytics", label: "Analytics Dashboard" },
  { path: "/video-editor", label: "AI Video Editor" },
  { path: "/templates", label: "Template Builder" },
  { path: "/team", label: "Team Collaboration" },
  { path: "/notifications", label: "Notifications" },
  { path: "/admin-settings", label: "Admin Settings" },
  { path: "/support", label: "Support Center" },
  { path: "/status", label: "System Status" },
  { path: "/integrations", label: "Integrations" },
  { path: "/automation", label: "Automation Center" },
  { path: "/ai-script-generator", label: "AI Script Generator" },
  { path: "/ai-storyboard", label: "AI Storyboard" },
  { path: "/ai-voiceover", label: "AI Voiceover Generator" },
  { path: "/ai-image-generator", label: "AI Image Generator" },
  { path: "/ai-thumbnail-generator", label: "AI Thumbnail Generator" },
  { path: "/ai-ad-creative-generator", label: "AI Ad Creative Generator" },
  { path: "/ai-social-post-generator", label: "AI Social Post Generator" },
  { path: "/ai-product-photo-enhancer", label: "AI Product Photo Enhancer" },
  { path: "/ai-brand-style-generator", label: "AI Brand Style Generator" },
  { path: "/ai-landing-page-generator", label: "AI Landing Page Generator" },
  { path: "/ai-carousel-generator", label: "AI Carousel Generator" },
  { path: "/ai-ad-copy-optimizer", label: "AI Ad Copy Optimizer" },
  { path: "/ai-seo-content-generator", label: "AI SEO Content Generator" },
  { path: "/ai-full-campaign-builder", label: "AI Full Campaign Builder" },
  { path: "/ai-audience-targeting-engine", label: "AI Audience Targeting Engine" },
  { path: "/ai-competitor-analyzer", label: "AI Competitor Analyzer" },
  { path: "/ai-email-sequence-generator", label: "AI Email Sequence Generator" },
  { path: "/ai-brand-voice-generator", label: "AI Brand Voice Generator" },
  { path: "/ai-creative-brief-generator", label: "AI Creative Brief Generator" },
  { path: "/ai-video-ad-generator", label: "AI Video Ad Generator" },
  { path: "/ai-offer-builder", label: "AI Offer Builder" },
  { path: "/ai-ugc-script-generator", label: "AI UGC Script Generator" },
  { path: "/ai-ad-variations-engine", label: "AI Ad Variations Engine" },
  { path: "/ai-sales-page-generator", label: "AI Sales Page Generator" },
  { path: "/ai-funnel-builder", label: "AI Funnel Builder" },
  { path: "/ai-product-launch-system", label: "AI Product Launch System" },
  { path: "/ai-creative-strategy-os", label: "AI Creative Strategy OS" },
  { path: "/ai-ad-testing-lab", label: "AI Ad Testing Lab" },
  { path: "/ai-content-repurposing-engine", label: "AI Content Repurposing Engine" },
  { path: "/ai-creator-collaboration-hub", label: "AI Creator Collaboration Hub" }
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

      <main style={{ overflow: "auto", padding: 12 }}>
        <Outlet />
      </main>
    </div>
  );
}
