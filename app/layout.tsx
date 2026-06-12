import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "AdCreator AI",
  description: "Create high‑converting ads automatically with AI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <header className="w-full border-b border-white/10 bg-black/60 backdrop-blur">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold flex items-center gap-2">
              🔥 <span>AdCreator AI</span>
            </Link>

            <nav className="flex items-center gap-6 text-sm">
              <Link href="/dashboard" className="hover:text-red-400 transition">
                Dashboard
              </Link>
              <Link href="/create" className="hover:text-red-400 transition">
                Create
              </Link>
              <Link href="/profile" className="hover:text-red-400 transition">
                Profile
              </Link>
              <Link href="/subscribe" className="hover:text-yellow-400 transition">
                Upgrade
              </Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
