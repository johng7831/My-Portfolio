import "./globals.css";

import { Providers } from "./components/theme-provider";
import ThemeToggle from "./components/theme-toggle";

export const metadata = {
  title: "My Port",
  description: "Built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        <Providers>
          {/* Navbar */}
          <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 p-4 flex justify-between items-center z-50">
            <a
              href="/"
              className="font-bold text-2xl"
            >
              MyPort
            </a>
            <div className="flex items-center gap-6">
              <a href="/" className="hover:text-purple-500 transition">
                Home
              </a>
              <a href="/about" className="hover:text-purple-500 transition">
                About
              </a>
              <a href="/projects" className="hover:text-purple-500 transition">
                Projects
              </a>
              <a href="/contact" className="hover:text-purple-500 transition">
                Contact
              </a>
              <ThemeToggle />
            </div>
          </nav>
          <main className="pt-20">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}