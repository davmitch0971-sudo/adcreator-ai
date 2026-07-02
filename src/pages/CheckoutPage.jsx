import { useTheme } from "../context/ThemeContext";
import { buttonStyle, panelStyle } from "../styles/GlobalStyles";
import { Link, useLocation } from "react-router-dom";

export default function CheckoutPage() {
  const { theme } = useTheme();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedPlan = searchParams.get("plan") || "Pro — $49/mo";

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
      <section style={sectionStyle}>
        <h1 style={headingStyle}>Checkout</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Complete your subscription and unlock the full AdCreator‑AI cloud.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Selected Plan
        </h2>
        <div style={panelStyle(theme)}>
          <h3 style={{ fontSize: 20, marginBottom: 8 }}>{selectedPlan}</h3>
          <p style={{ opacity: 0.85 }}>
            Includes access to AdCreator‑AI generators, cloud modules, and
            ongoing updates.
          </p>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Billing Details
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
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
          </div>

          <div style={panelStyle(theme)}>
            <label style={{ display: "block", marginBottom: 6 }}>
              Company / Brand
            </label>
            <input
              type="text"
              placeholder="Brand or business name"
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
              Use case
            </label>
            <input
              type="text"
              placeholder="e.g., ads for local business, coaching, real estate"
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
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Payment Summary
        </h2>
        <div style={panelStyle(theme)}>
          <p style={{ marginBottom: 8 }}>
            <strong>Plan:</strong> {selectedPlan}
          </p>
          <p style={{ marginBottom: 8 }}>
            <strong>Billing:</strong> Monthly subscription
          </p>
          <p style={{ marginBottom: 8 }}>
            <strong>Renewal:</strong> Renews automatically, cancel anytime.
          </p>
          <p style={{ marginBottom: 8, opacity: 0.85 }}>
            Payment processing will be handled by your chosen provider
            (Stripe, LemonSqueezy, or alternative) when you integrate it.
          </p>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>
          Confirm & Continue
        </h2>
        <p style={{ opacity: 0.85 }}>
          After confirming, you’ll be redirected to your subscription management
          and onboarding inside AdCreator‑AI.
        </p>

        <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Confirm Subscription
          </button>

          <Link to="/pricing">
            <button
              style={{
                ...buttonStyle(theme),
                padding: "12px 20px",
                fontSize: 16,
              }}
            >
              Back to Pricing
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
