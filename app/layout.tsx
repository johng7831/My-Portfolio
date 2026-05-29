import "./globals.css";
import Navbar from "./components/Navbar";
import { Providers } from "./components/theme-provider";
import ThemeToggle from "./components/theme-toggle";

export const metadata = {
  title: "John Portfolio",
  description: "Modern Shopify Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#080808] text-white overflow-x-hidden">
        <Providers>
          {/* NAVBAR */}
          <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/5">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
              {/* Logo */}
              <a
                href="/"
                className="font-extrabold text-lg tracking-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                john<span className="text-violet-400">.</span>dev
              </a>
              {/* Links */}
              <div className="hidden md:flex items-center gap-8 text-sm">
                <a href="/" className="text-white/50 hover:text-white transition">
                  Home
                </a>
                <a href="/about" className="text-white/50 hover:text-white transition">
                  About
                </a>
                <a href="/projects" className="text-white/50 hover:text-white transition">
                  Projects
                </a>
                <a href="/contact" className="text-white/50 hover:text-white transition">
                  Contact
                </a>
              </div>
              {/* Right side */}
              <div className="flex items-center gap-4">
                <a
                  href="/contact"
                  className="px-4 py-2 rounded-full text-sm border border-violet-400/30 bg-violet-400/10 text-violet-300 hover:bg-violet-400/20 transition"
                >
                  Hire Me
                </a>
                <ThemeToggle />
              </div>
            </div>
          </nav>
             <Navbar />
          <main className="pt-24">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}