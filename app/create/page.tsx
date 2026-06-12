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

export default function CreatePage() {
  const router = useRouter();

  const [product, setProduct] = useState("");
  const [audience, setAudience] = useState("");
  const [platform, setPlatform] = useState("Facebook");
  const [tone, setTone] = useState("Bold and direct");
  const [offer, setOffer] = useState("");
  const [callToAction, setCallToAction] = useState("Click to learn more");
  const [length, setLength] = useState("Short (1–2 paragraphs)");

  const [loading, setLoading] = useState(false);
  const [adText, setAdText] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const sub = localStorage.getItem("adcreator_subscription");
    if (sub !== "pro") {
      router.replace("/subscribe");
    }
  }, [router]);

  const saveAdToLocalStorage = (ad: string) => {
    const existing = localStorage.getItem("adcreator_ads");
    const parsed: SavedAd[] = existing ? JSON.parse(existing) : [];

    const newAd: SavedAd = {
      id: crypto.randomUUID(),
      product,
      platform,
      createdAt: new Date().toISOString(),
      ad,
    };

    const updated = [newAd, ...parsed];
    localStorage.setItem("adcreator_ads", JSON.stringify(updated));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setAdText("");

    if (!product || !audience || !offer) {
      setError("Product, audience, and offer are required.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/generate-ad", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product,
          audience,
          platform,
          tone,
          offer,
          callToAction,
          length,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to generate ad.");
        return;
      }

      setAdText(data.ad);
      saveAdToLocalStorage(data.ad);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-2">Create a High-Converting Ad</h1>
      <p className="text-white/60 mb-8">
        Fill out the details below and let AdCreator AI generate a ready-to-use ad.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6 mb-10">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Product / Offer *</label>
            <input
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-red-500"
              placeholder="Example: AI-powered ad generator for small businesses"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Target Audience *</label>
            <input
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-red-500"
              placeholder="Example: Local business owners who run Facebook ads"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Platform</label>
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-red-500"
            >
              <option>Facebook</option>
              <option>Instagram</option>
              <option>TikTok</option>
              <option>YouTube</option>
              <option>Google Ads</option>
              <option>LinkedIn</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Tone</label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-red-500"
            >
              <option>Bold and direct</option>
              <option>Friendly and casual</option>
              <option>Professional and trustworthy</option>
              <option>High-energy and hype</option>
              <option>Story-driven</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">Main Offer *</label>
          <input
            value={offer}
            onChange={(e) => setOffer(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-red-500"
            placeholder="Example: 7-day free trial, 30% off first month, etc."
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Call to Action</label>
          <input
            value={callToAction}
            onChange={(e) => setCallToAction(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-red-500"
            placeholder="Example: Click to get started in 60 seconds"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Length</label>
          <select
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-red-500"
          >
            <option>Short (1–2 paragraphs)</option>
            <option>Medium (3–4 paragraphs)</option>
            <option>Long (story-style)</option>
          </select>
        </div>

        {error && <p className="text-red-400 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 disabled:opacity-60 font-semibold transition"
        >
          {loading ? "Generating..." : "Generate Ad"}
        </button>
      </form>

      {adText && (
        <section className="p-6 rounded-xl bg-white/5 border border-white/10">
          <h2 className="text-xl font-semibold mb-3">Generated Ad</h2>
          <pre className="whitespace-pre-wrap text-sm text-white/90">
            {adText}
          </pre>
          <p className="text-xs text-white/40 mt-3">
            Saved to your dashboard. You can tweak, copy, and reuse it anytime.
          </p>
        </section>
      )}
    </main>
  );
}
