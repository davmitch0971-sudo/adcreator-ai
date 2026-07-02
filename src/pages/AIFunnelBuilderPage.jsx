import { useTheme } from "../context/ThemeContext";
import { panelStyle, buttonStyle } from "../styles/GlobalStyles";

export default function AIFunnelBuilderPage() {
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

  const cardStyle = {
    padding: 16,
    borderRadius: 10,
    background: theme === "dark" ? "#111827" : "#f3f4f6",
    border: theme === "dark" ? "1px solid #1f2937" : "1px solid #e5e7eb",
    marginBottom: 16,
  };

  return (
    <div style={{ padding: 20 }}>
      {/* HEADER */}
      <section style={sectionStyle}>
        <h1 style={headingStyle}>AI Funnel Builder</h1>
        <p style={{ fontSize: 18, opacity: 0.85 }}>
          Generate full funnels: opt‑in pages, sales pages, upsells, downsells, and email sequences in one flow.
        </p>
      </section>

      {/* INPUTS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Funnel Inputs
        </h2>

        <div style={panelStyle(theme)}>
          <label>Offer / Product</label>
          <input
            type="text"
            placeholder="AdCreator‑AI — full AI creative suite..."
            style={inputStyle}
          />

          <label>Primary Goal</label>
          <select style={inputStyle}>
            <option>Lead generation</option>
            <option>Front‑end sale</option>
            <option>High‑ticket booking</option>
            <option>Product launch</option>
          </select>

          <label>Traffic Source</label>
          <select style={inputStyle}>
            <option>Paid ads</option>
            <option>Organic social</option>
            <option>Email list</option>
            <option>Affiliate traffic</option>
          </select>

          <label>Funnel Complexity</label>
          <select style={inputStyle}>
            <option>Simple (Opt‑in → Sales → Thank you)</option>
            <option>Standard (Opt‑in → Sales → Upsell → Thank you)</option>
            <option>Advanced (Opt‑in → Sales → Upsell → Downsell → Thank you)</option>
          </select>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Generate Funnel
          </button>
        </div>
      </section>

      {/* FUNNEL MAP */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Funnel Map
        </h2>

        <div style={cardStyle}>
          <h3>Visual Funnel Overview</h3>
          <p style={{ opacity: 0.85 }}>
            Opt‑in → Sales Page → Upsell → Downsell → Thank You → Email Sequence.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Stage Breakdown</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Opt‑in: lead magnet or demo request.</li>
            <li>Sales: core offer with value props and social proof.</li>
            <li>Upsell: higher tier or bundle.</li>
            <li>Downsell: lighter version or payment plan.</li>
            <li>Thank you: onboarding and next steps.</li>
          </ul>
        </div>
      </section>

      {/* OPT‑IN PAGE */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Opt‑in Page
        </h2>

        <div style={cardStyle}>
          <h3>Headline</h3>
          <p style={{ opacity: 0.85 }}>
            “Get the AdCreator‑AI funnel blueprint used by top creators and agencies.”
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Lead Magnet Copy</h3>
          <p style={{ opacity: 0.85 }}>
            “Download the exact funnel structure we use to launch high‑performing campaigns.”
          </p>
        </div>
      </section>

      {/* SALES PAGE */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Core Sales Page
        </h2>

        <div style={cardStyle}>
          <h3>Headline</h3>
          <p style={{ opacity: 0.85 }}>
            “Launch full campaigns in minutes with AdCreator‑AI.”
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Offer Stack</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>AI Video Ad Generator</li>
            <li>AI UGC Script Generator</li>
            <li>AI Ad Variations Engine</li>
            <li>AI Sales Page Generator</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Guarantee & Risk Reversal</h3>
          <p style={{ opacity: 0.85 }}>
            “Try AdCreator‑AI free for 14 days — cancel anytime.”
          </p>
        </div>
      </section>

      {/* UPSELL & DOWNSELL */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Upsell & Downsell
        </h2>

        <div style={cardStyle}>
          <h3>Upsell Offer</h3>
          <p style={{ opacity: 0.85 }}>
            “Upgrade to AdCreator‑AI Pro — unlock advanced analytics, team collaboration, and priority support.”
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Downsell Offer</h3>
          <p style={{ opacity: 0.85 }}>
            “Stay on Starter with limited features at a lower monthly rate.”
          </p>
        </div>
      </section>

      {/* EMAIL SEQUENCE */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Email Sequence
        </h2>

        <div style={cardStyle}>
          <h3>5‑Email Follow‑up</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>Day 1 — Welcome + value overview.</li>
            <li>Day 2 — Case study / proof.</li>
            <li>Day 3 — Feature deep dive.</li>
            <li>Day 4 — Objection handling.</li>
            <li>Day 5 — Final CTA + urgency.</li>
          </ul>
        </div>
      </section>

      {/* EXPORT & INTEGRATIONS */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
          Export & Integrations
        </h2>

        <div style={panelStyle(theme)}>
          <p style={{ opacity: 0.85, marginBottom: 12 }}>
            Export your funnel map and copy to your landing page builder or ad account.
          </p>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            Export Funnel Blueprint
          </button>

          <button
            style={{
              ...buttonStyle(theme),
              padding: "12px 20px",
              fontSize: 16,
            }}
          >
            Send to Sales Page Generator
          </button>
        </div>
      </section>
    </div>
  );
}
