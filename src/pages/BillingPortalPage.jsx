import { useTheme } from "../context/ThemeContext";
import { buttonStyle, panelStyle } from "../styles/GlobalStyles";

export default function BillingPortalPage() {
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
        <h1 style={headingStyle}>Billing Portal</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Manage your subscription, invoices, and payment methods.
        </p>
      </section>

      {/* SUBSCRIPTION */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Subscription Details
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            Your current plan: <strong>Pro — $49/mo</strong>
          </p>

          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            Renewal: Monthly — Renews automatically
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Change Plan
          </button>
        </div>
      </section>

      {/* INVOICES */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Invoices
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85 }}>
            View your past invoices and download receipts.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            View Invoices
          </button>
        </div>
      </section>

      {/* PAYMENT METHODS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Payment Methods
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85 }}>
            Update your credit card or add new payment methods.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Update Payment Method
          </button>
        </div>
      </section>

      {/* OPEN BILLING PORTAL */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Full Billing Portal
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85 }}>
            Open your full billing portal to manage everything in one place.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Open Billing Portal
          </button>
        </div>
      </section>
    </div>
  );
}
