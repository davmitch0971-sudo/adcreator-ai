"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MONTHLY_URL = process.env.NEXT_PUBLIC_PAYPAL_MONTHLY_URL!;
const YEARLY_URL = process.env.NEXT_PUBLIC_PAYPAL_YEARLY_URL!;

export default function SubscribePage() {
  const router = useRouter();
  const [isPro, setIsPro] = useState(false);

  useEffect(() => {
    const sub = localStorage.getItem("adcreator_subscription");
    if (sub === "pro") {
      setIsPro(true);
    }
  }, []);

  const markAsPro = () => {
    localStorage.setItem("adcreator_subscription", "pro");
    setIsPro(true);
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Upgrade to 🔥 AdCreator AI Pro</h1>
      <p className="text-white/70 max-w-xl mb-8">
        Choose a plan below, complete your PayPal subscription, then click
        &quot;I&apos;ve Subscribed&quot; to unlock your account.
      </p>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <a
          href={MONTHLY_URL}
          target="_blank"
          className="px-6 py-4 rounded-xl bg-white/5 border border-white/15 hover:border-red-500 transition text-left"
        >
          <div className="text-lg font-semibold mb-1">Monthly</div>
          <div className="text-2xl font-bold mb-1">$9.99</div>
          <div className="text-white/60 text-sm">
            Full access, billed every month. Cancel anytime.
          </div>
        </a>

        <a
          href={YEARLY_URL}
          target="_blank"
          className="px-6 py-4 rounded-xl bg-white/5 border border-yellow-400/60 hover:border-yellow-400 transition text-left"
        >
          <div className="text-lg font-semibold mb-1">Yearly (Best Value)</div>
          <div className="text-2xl font-bold mb-1">$79</div>
          <div className="text-white/60 text-sm">
            Save vs monthly. Full access for a full year.
          </div>
        </a>
      </div>

      <button
        onClick={markAsPro}
        className="px-8 py-3 rounded-lg bg-red-600 hover:bg-red-700 font-semibold transition"
      >
        I&apos;ve Subscribed – Unlock My Account
      </button>

      {isPro && (
        <p className="mt-4 text-green-400 text-sm">
          Subscription marked as active. Redirecting to dashboard…
        </p>
      )}
    </main>
  );
