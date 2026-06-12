"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type SavedAd = {
  id: string;
  product: string;
  platform: string;
  createdAt: string;
  ad: string;
};

export default function Dashboard() {
  const router = useRouter();
  const [ads, setAds] = useState<SavedAd[]>([]);

  useEffect(() => {
    const sub = localStorage.getItem("adcreator_subscription");
    if (sub !== "pro") {
      router.replace("/subscribe");
      return;
    }

    const stored = localStorage.getItem("adcreator_ads");
    if (stored) {
      try {
        setAds(JSON.parse(stored));
      } catch {
        setAds([]);
      }
    }
  }, [router]);

  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-2">Your Generated Ads</h1>
      <p className="text-white/60 mb-6">
        Every ad you generate on the Create page is saved here for quick reuse.
      </p>

      {ads.length === 0 ? (
        <p className="text-white/40">
          No ads yet. Go to the <span className="text-red-400">Create</span> page
          to generate your first ad.
        </p>
      ) : (
        <div className="space-y-4">
          {ads.map((ad) => (
            <div
              key={ad.id}
              className="p-4 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="flex items-center justify-between mb-2 text-sm text-white/60">
                <span>{ad.product}</span>
                <span>
                  {ad.platform} •{" "}
                  {new Date(ad.createdAt).toLocaleString(undefined, {
                    dateStyle: "short",
                    timeStyle: "short",
                  })}
                </span>
              </div>
              <pre className="whitespace-pre-wrap text-sm text-white/90">
                {ad.ad}
              </pre>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
