import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle, inputStyle } from "../styles/GlobalStyles";
import SaveProjectButton from "../components/SaveProjectButton";

export default function AiBillingEngine() {
  const { theme } = useTheme();

  const [planName] = useState("AdCreator‑AI Pro");
  const [price] = useState("$5.99 / month");
  const [status] = useState("Active (via PayPal)");
  const [nextBilling] = useState("Next billing: auto‑renew via PayPal");
  const [paypalLink, setPaypalLink] = useState(
    "https://www.paypal.com/myaccount/autopay/"
  );
  const [notes, setNotes] = useState(
    "Billing is handled entirely through PayPal. Manage, cancel, or update payment details in your PayPal account."
  );

  return (
    <div style={{ padding: 10 }}>
      <h1 style={{ marginBottom: 16 }}>AI Billing Engine</h1>

      <div style={{ ...panelStyle(theme), marginBottom: 16 }}>
        <h2 style={{ marginTop: 0 }}>Current Subscription</h2>

        <div style={{ marginBottom: 8 }}>
          <strong>Plan:</strong> {planName}
        </div>
        <div style={{ marginBottom: 8 }}>
          <strong>Price:</strong> {price}
        </div>
        <div style={{ marginBottom: 8 }}>
          <strong>Status:</strong> {status}
        </div>
        <div style={{ marginBottom: 8 }}>
          <strong>Billing:</strong> {nextBilling}
        </div>

        <div style={{ marginTop: 12 }}>
          <strong>PayPal Subscription Management</strong>
          <p style={{ margin: "4px 0 8px" }}>
            Use this link to manage your active PayPal subscription
            (cancel, update card, etc.).
          </p>

          <input
            value={paypalLink}
            onChange={(e) => setPaypalLink(e.target.value)}
            style={{
              ...inputStyle(theme),
              width: "100%",
              marginBottom: 8
            }}
          />

          <a
            href={paypalLink}
            target="_blank"
            rel="noreferrer"
            style={{
              ...buttonStyle(theme),
              display: "inline-block",
              textDecoration: "none",
              marginTop: 4
            }}
          >
            Open PayPal Billing
          </a>
        </div>
      </div>

      <div style={panelStyle(theme)}>
        <h2 style={{ marginTop: 0 }}>Billing Notes</h2>

        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          style={{
            ...inputStyle(theme),
            minHeight: 100,
            resize: "vertical"
          }}
        />

        <div style={{ marginTop: 12 }}>
          <SaveProjectButton
            brand={null}
            generator="AI Billing Engine"
            data={{
              planName,
              price,
              status,
              nextBilling,
              paypalLink,
              notes
            }}
          />
        </div>
      </div>
    </div>
  );
}
