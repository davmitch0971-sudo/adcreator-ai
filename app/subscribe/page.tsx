"use client";

import React, { useState } from "react";

export default function SubscribePage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    try {
      setLoading(true);
      setMessage("");

      const res = await fetch("/api/paypal/validate", {
        method: "POST",
      });

      const data = await res.json();

      if (data?.url) {
        window.location.href = data.url;
      } else {
        setMessage("Unable to start subscription.");
      }
    } catch (err) {
      setMessage("Subscription failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-black text-white">
      <div className="max-w-lg w-full bg-neutral-900 p-8 rounded-xl shadow-xl border border-neutral-700">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Subscribe to FixPilot‑AI Pro
        </h1>

        <p className="text-neutral-300 text-center mb-6">
          Unlock unlimited ad generation, dashboard access, and premium tools.
        </p>

        <div className="flex flex-col items-center gap-4">
          <button
            onClick={handleSubscribe}
            disabled={loading}
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold"
          >
            {loading ? "Processing..." : "Subscribe with PayPal"}
          </button>

          {message && (
            <p className="text-red-400 text-center text-sm">{message}</p>
          )}
        </div>
      </div>
    </main>
  );
