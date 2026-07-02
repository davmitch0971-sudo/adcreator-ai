import { useTheme } from "../context/ThemeContext";
import { panelStyle, inputStyle } from "../styles/GlobalStyles";

export default function AiSubscriptionManager() {
  const { theme } = useTheme();

  const planName = "AdCreator‑AI Pro";
  const price = "$5.99 / month";
  const status = "Active (via PayPal)";
  const renewal = "Auto‑renew enabled in PayPal";
  const limits = [
    "Unlimited projects",
    "Full AI production suite access",
    "Priority generation speed"
  ];
  const billingNotes =
    "To change, cancel, or update payment details, manage your subscription directly in your PayPal account.";

  const history = [
    { id: 1, date: "2026‑07‑01", amount: "$5.99", status: "Paid (PayPal)" },
    { id: 2, date: "2026‑06‑01", amount: "$5.99", status: "Paid (PayPal)" }
  ];

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>Subscription Manager</h1>

      <div style={{ ...panelStyle(theme), marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>Current Plan</h2>

        <p><strong>Plan:</strong> {planName}</p>
        <p><strong>Price:</strong> {price}</p>
        <p><strong>Status:</strong> {status}</p>
        <p><strong>Renewal:</strong> {renewal}</p>

        <div style={{ marginTop: 10 }}>
          <strong>Usage & Limits</strong>
          <ul style={{ marginTop: 6, paddingLeft: 18 }}>
            {limits.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div style={{ marginTop: 10 }}>
          <strong>Manage Subscription</strong>
          <p style={{ margin: "4px 0 8px" }}>
            Subscription billing is handled via PayPal. Use PayPal to cancel or
            update payment details.
          </p>
          <input
            value="https://www.paypal.com/myaccount/autopay/"
            readOnly
            style={{
              ...inputStyle(theme),
              width: "100%"
            }}
          />
        </div>
      </div>

      <div style={panelStyle(theme)}>
        <h2 style={{ marginTop: 0 }}>Billing History</h2>

        {history.map((h) => (
          <div
            key={h.id}
            style={{
              padding: 8,
              borderRadius: 8,
              marginBottom: 8,
              background: theme === "dark" ? "#0f172a" : "#ffffff",
              border: "1px solid rgba(148,163,184,0.35)"
            }}
          >
            <p style={{ margin: 0 }}>
              <strong>Date:</strong> {h.date}
            </p>
            <p style={{ margin: 0 }}>
              <strong>Amount:</strong> {h.amount}
            </p>
            <p style={{ margin: 0 }}>
              <strong>Status:</strong> {h.status}
            </p>
          </div>
        ))}

        <div style={{ marginTop: 10 }}>
          <strong>Notes</strong>
          <p style={{ margin: 0 }}>{billingNotes}</p>
        </div>
      </div>
    </div>
  );
}
