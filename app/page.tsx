import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-black to-[#0a0a0a] text-white">
      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-32 text-center">
        <h1 className="text-6xl font-extrabold mb-6 leading-tight animate-fade-in">
          Create High‑Converting Ads  
          <span className="text-red-500"> Automatically</span>
        </h1>

        <p className="text-white/70 text-xl max-w-2xl mx-auto mb-10 animate-fade-in-slow">
          AdCreator AI writes scroll‑stopping ads for Facebook, Instagram, TikTok, YouTube, and more —  
          in seconds, not hours.
        </p>

        <Link
          href="/create"
          className="px-10 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-lg font-semibold transition shadow-lg shadow-red-600/20 animate-pop"
        >
          Create Your First Ad
        </Link>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Why Marketers Love AdCreator AI</h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-red-500 transition">
            <h3 className="text-xl font-semibold mb-3">Instant Ad Generation</h3>
            <p className="text-white/60">
              Describe your product and audience — the AI writes a polished, ready‑to‑use ad.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-red-500 transition">
            <h3 className="text-xl font-semibold mb-3">Platform‑Optimized</h3>
            <p className="text-white/60">
              Facebook, Instagram, TikTok, YouTube, Google Ads — each ad is tailored to the platform.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-red-500 transition">
            <h3 className="text-xl font-semibold mb-3">High‑Converting Copy</h3>
            <p className="text-white/60">
              Built‑in persuasion frameworks ensure your ads convert more clicks into customers.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Simple, Transparent Pricing</h2>
        <p className="text-white/60 mb-12">Upgrade anytime. Cancel anytime.</p>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="p-8 rounded-xl bg-white/5 border border-white/10 w-full md:w-80">
            <h3 className="text-2xl font-semibold mb-2">Monthly</h3>
            <p className="text-4xl font-bold mb-4">$9.99</p>
            <p className="text-white/60 mb-6">Full access. Billed monthly.</p>
            <Link
              href="/subscribe"
              className="block px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition"
            >
              Upgrade
            </Link>
          </div>

          <div className="p-8 rounded-xl bg-white/5 border border-yellow-400/60 w-full md:w-80">
            <h3 className="text-2xl font-semibold mb-2">Yearly</h3>
            <p className="text-4xl font-bold mb-4">$79</p>
            <p className="text-white/60 mb-6">Best value. Save more.</p>
            <Link
              href="/subscribe"
              className="block px-6 py-3 rounded-lg bg-yellow-500 hover:bg-yellow-600 transition"
            >
              Upgrade
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCT SCREENSHOT SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-10">See It In Action</h2>

        <div className="rounded-xl overflow-hidden border border-white/10 shadow-xl shadow-black/40">
          <img
            src="/screenshot.png"
            alt="Product Screenshot"
            className="w-full opacity-90 hover:opacity-100 transition"
          />
        </div>

        <p className="text-white/50 text-sm mt-4">
          (Add your real screenshot to <code>/public/screenshot.png</code>)
        </p>
      </section>

      {/* VIDEO DEMO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-10">Watch How It Works</h2>

        <div className="rounded-xl overflow-hidden border border-white/10 shadow-xl shadow-black/40">
          <video
            src="/demo.mp4"
            controls
            className="w-full"
          />
        </div>

        <p className="text-white/50 text-sm mt-4">
          (Add your real video to <code>/public/demo.mp4</code>)
        </p>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">What Users Are Saying</h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <p className="text-white/70 mb-4">
              “I generated 12 ads in one day. This tool paid for itself instantly.”
            </p>
            <p className="text-white/40 text-sm">— Sarah, E‑commerce Owner</p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <p className="text-white/70 mb-4">
              “My CTR doubled after switching to AdCreator AI. Unreal.”
            </p>
            <p className="text-white/40 text-sm">— Mike, Media Buyer</p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <p className="text-white/70 mb-4">
              “The fastest way to create ads for clients. Total game changer.”
            </p>
            <p className="text-white/40 text-sm">— Jenna, Agency Owner</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-white/50 text-sm">
        <p>© {new Date().getFullYear()} AdCreator AI — All rights reserved.</p>

        <div className="flex justify-center gap-6 mt-4">
          <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
          <Link href="/terms" className="hover:text-white transition">Terms</Link>
          <Link href="/subscribe" className="hover:text-white transition">Pricing</Link>
        </div>
      </footer>
    </main>
  );
}
