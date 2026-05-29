import "./globals.css";

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
    <html lang="en">
      <body>
        <nav className="fixed top-0 left-0 w-full bg-white shadow p-4 flex justify-between items-center z-50">
          <a href="/" className="font-bold text-2xl">
            MyPort
          </a>
          <div className="space-x-6">
            <a href="/" className="hover:text-blue-500">
              Home
            </a>
            <a href="/about" className="hover:text-blue-500">
              About Us
            </a>
            <a href="/projects" className="hover:text-blue-500">
              Pro
            </a>
            <a href="/contact" className="hover:text-blue-500">
              Contact
            </a>
          </div>
        </nav>
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}