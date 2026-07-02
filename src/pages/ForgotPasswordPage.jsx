import { useTheme } from "../context/ThemeContext";
import { buttonStyle, panelStyle } from "../styles/GlobalStyles";
import { Link } from "react-router-dom";

export default function ForgotPasswordPage() {
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

  const inputStyle = {
    width: "100%",
    padding: 10,
    borderRadius: 8,
    border: theme === "dark" ? "1px solid #374151" : "1px solid #d1d5db",
    background: theme === "dark" ? "#020617" : "#ffffff",
    color: theme === "dark" ? "#e5e7eb" : "#111827",
    marginBottom: 12,
  };

  return (
    <div style={{ padding: 20 }}>
      <section style={sectionStyle}>
        <h1 style={headingStyle}>Reset Your Password</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Enter your email and we’ll send you a password reset link.
        </p>
      </section>

      <section style={sectionStyle}>
        <div style={panelStyle(theme)}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="you@example.com"
            style={inputStyle}
          />

          <button
            style={{
              ...buttonStyle(theme),
              width: "100%",
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Send Reset Link
          </button>

          <p style={{ marginTop: 16, opacity: 0.85 }}>
            Remember your password?{" "}
            <Link to="/login" style={{ textDecoration: "underline" }}>
              Log in
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
