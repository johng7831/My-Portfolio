"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="border border-zinc-700 dark:border-zinc-600 px-4 py-2 rounded-xl"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </motion.button>
  );
}