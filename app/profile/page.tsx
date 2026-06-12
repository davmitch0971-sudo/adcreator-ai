"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [isPro, setIsPro] = useState(false);

  useEffect(() => {
    const sub = localStorage.getItem("adcreator_subscription");
    if (sub !== "pro") {
      router.replace("/subscribe");
    } else {
      setIsPro(true);
    }
  }, [router]);

  const logout = () => {
    localStorage.removeItem("adcreator_subscription");
    router.replace("/subscribe");
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>

      <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-4">
        <p className="text-white/60">
          Subscription status:{" "}
          <span className={isPro ? "text-green-400" : "text-red-400"}>
            {isPro ? "Active (Pro)" : "Inactive"}
          </span>
        </p>
        <button
          onClick={logout}
          className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm"
        >
          Log out / Remove access
        </button>
      </div>
    </main>
  );
}
