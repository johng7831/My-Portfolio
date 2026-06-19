"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const stats = [
  { num: "40+", label: "Stores Built" },
  { num: "4+", label: "Years Exp." },
  { num: "98%", label: "Satisfaction" },
];

const socials = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
];

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-background text-foreground overflow-hidden flex flex-col">

      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(120,80,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(120,80,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Purple glow */}
      <div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-28 w-[600px] h-[400px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(110,60,255,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Hero body */}
      <motion.div
        className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-16"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Badge */}
        <motion.div
          variants={item}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-violet-400 text-xs tracking-wide px-4 py-1.5 rounded-full border border-violet-400/30 bg-violet-400/10 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          Available for projects · 4+ years Shopify
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          transition={{ duration: 0.6 }}
          className="font-extrabold leading-none tracking-tighter mb-3"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(52px, 10vw, 90px)",
          }}
        >
          Hi, I'm <span className="text-violet-400">John</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          transition={{ duration: 0.65 }}
          className="text-foreground/50 mb-6"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(20px, 4vw, 36px)",
            letterSpacing: "-0.5px",
          }}
        >
          I build <strong className="text-foreground/90 font-bold">modern Shopify stores</strong> that convert
        </motion.p>

        {/* Description */}
        <motion.p
          variants={item}
          transition={{ duration: 0.7 }}
          className="text-foreground/35 text-[15px] font-light max-w-lg mx-auto leading-relaxed mb-10"
        >
          Shopify developer specializing in custom themes, ecommerce UI/UX,
          performance optimization, CRO strategies, and high-converting storefront experiences.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={item}
          transition={{ duration: 0.75 }}
          className="flex items-center gap-8 justify-center mb-10"
        >
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-8">
              <div className="text-center">
                <div
                  className="text-foreground font-extrabold leading-none"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "26px",
                    letterSpacing: "-1px",
                  }}
                >
                  <span>{s.num}</span>
                </div>
                <div className="text-foreground/30 text-[11px] tracking-widest uppercase mt-1">
                  {s.label}
                </div>
              </div>
              {i < stats.length - 1 && (
                <div className="w-px h-8 bg-white/10" />
              )}
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={item}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-3 mb-8"
        >
          <a
             href="/projects"
            className="px-7 py-3 rounded-full bg-violet-700 hover:bg-violet-600 transition-colors text-sm font-medium"
          >
            View my work
          </a>

          <a
             href="/contact"
            className="px-7 py-3 rounded-full border border-white/15 hover:border-white/40 text-foreground/70 hover:text-foreground transition text-sm"
          >
            Contact me
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          variants={item}
          transition={{ duration: 0.85 }}
          className="flex items-center gap-6"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="text-foreground/30 hover:text-violet-400 text-sm transition-colors"
            >
              {s.label}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}