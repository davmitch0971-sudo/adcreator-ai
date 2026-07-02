import { useTheme } from "../context/ThemeContext";
import { buttonStyle, panelStyle } from "../styles/GlobalStyles";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const { theme } = useTheme();

  const sectionStyle = {
    marginBottom: 40,
    padding: 20,
    borderRadius: 12,
    background: theme === "dark" ? "#0b0d14" : "#ffffff",
    boxShadow:
      theme === "dark"
        ? "0 0 0 1px rgba(255,255,255,0.05)"
        : "0 0 0 1px rgba(0,0,0,0.08)",
  };

  const headingStyle = {
    fontSize: 32,
    fontWeight: 800,
    marginBottom: 12,
  };

  return (
    <div style={{ padding: 20 }}>
      {/* HEADER */}
      <section style={sectionStyle}>
        <h1 style={headingStyle}>Create Your Account</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Sign up to access your AdCreator‑AI cloud dashboard.
        </p>
      </section>

      {/* SIGNUP FORM */}
      <section style={sectionStyle}>
        <div style={panelStyle(theme)}>
          <label style={{ display: "block", marginBottom: 6 }}>Name</label>
          <input
            type="text"
            placeholder="Full name"
            style={{
              width: "100%",
              padding: 10,
              borderRadius: 8,
              border:
                theme === "dark"
                  ? "1px solid #374151"
                  : "1px solid #d1d5db",
              background: theme === "dark" ? "#020617" : "#ffffff",
              color: theme === "dark" ? "#e5e7eb" : "#111827",
            }}
          />

          <label
            style={{ display: "block", marginTop: 12, marginBottom: 6 }}
          >
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            style={{
              width: "100%",
              padding: 10,
              borderRadius: 8,
              border:
                theme === "dark"
                  ? "1px solid #374151"
                  : "1px solid #d1d5db",
              background: theme === "dark" ? "#020617" : "#ffffff",
              color: theme === "dark" ? "#e5e7eb" : "#111827",
            }}
          />

          <label
            style={{ display: "block", marginTop: 12, marginBottom: 6 }}
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Create a password"
            style={{
              width: "100%",
              padding: 10,
              borderRadius: 8,
              border:
                theme === "dark"
                  ? "1px solid #374151"
                  : "1px solid #d1d5db",
              background: theme === "dark" ? "#020617" : "#ffffff",
              color: theme === "dark" ? "#e5e7eb" : "#111827",
            }}
          />

          <button
            style={{
              ...buttonStyle(theme),
              width: "100%",
              marginTop: 20,
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Create Account
          </button>

          <p style={{ marginTop: 16, opacity: 0.85 }}>
            Already have an account?{" "}
            <Link to="/login" style={{ textDecoration: "underline" }}>
              Log in
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
