"use client";

import { useState } from "react";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/5">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="font-extrabold text-lg">
          john<span className="text-violet-400">.</span>dev
        </a>
        <div className="hidden md:flex gap-8 text-sm">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <ThemeToggle />
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 border-t border-white/10">
          <a onClick={() => setMenuOpen(false)} href="/">Home</a>
          <a onClick={() => setMenuOpen(false)} href="/about">About</a>
          <a onClick={() => setMenuOpen(false)} href="/projects">Projects</a>
          <a onClick={() => setMenuOpen(false)} href="/contact">Contact</a>
        </div>
      )}
    </nav>
  );
}