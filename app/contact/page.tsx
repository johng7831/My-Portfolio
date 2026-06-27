"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <section className="relative w-full min-h-screen bg-background text-foreground px-6 py-24 flex items-center overflow-hidden">

      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(120,80,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(120,80,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glow */}
      <div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-[650px] h-[420px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(110,60,255,0.18) 0%, transparent 70%)",
        }}
      />

      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        {/* LEFT SIDE */}
        <motion.div variants={item}>
          <p className="text-violet-400 text-sm tracking-widest uppercase mb-4">
            Contact Me
          </p>

          <h2
            className="font-extrabold leading-tight mb-6"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(34px, 5vw, 56px)",
              letterSpacing: "-1px",
            }}
          >
            Let’s Build Something That Converts
          </h2>

          <p className="text-foreground/50 text-lg leading-8 mb-4">
            Have a Shopify project, ecommerce idea, or need a developer for your store?
          </p>

          <p className="text-foreground/40 text-lg leading-8">
            I specialize in developing modern, high-performance Shopify stores with a focus on
           custom features, seamless user experience, responsive design, and conversion
          optimization.
          </p>


        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          variants={item}
          className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-10 space-y-10 overflow-hidden"
        >

          {/* glow overlay */}
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-br from-violet-500/10 to-transparent" />

          {/* Phone */}
          <motion.div whileHover={{ x: 8 }} className="relative z-10">
            <h3 className="text-lg font-semibold text-foreground">
              Phone
            </h3>
            <p className="text-foreground/40 mt-2 text-sm">
              +91 78764 60270
            </p>
          </motion.div>

          {/* Email */}
          <motion.div whileHover={{ x: 8 }} className="relative z-10">
            <h3 className="text-lg font-semibold text-foreground">
              Email
            </h3>
            <p className="text-foreground/40 mt-2 text-sm">
              johng7831@gamil.com
            </p>
          </motion.div>

          {/* LinkedIn */}
          {/* <motion.div whileHover={{ x: 8 }} className="relative z-10">
            <h3 className="text-lg font-semibold text-foreground">
              LinkedIn
            </h3>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="text-violet-400 mt-2 inline-block text-sm hover:text-violet-300 transition"
            >
              View Profile →
            </a>
          </motion.div> */}

        </motion.div>

      </motion.div>
    </section>
  );
}