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

export default function About() {
  return (
    <section className="relative w-full min-h-screen bg-[#080808] text-white px-6 py-24 flex items-center overflow-hidden">

      {/* Grid background (same as hero) */}
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
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[400px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(110,60,255,0.18) 0%, transparent 70%)",
        }}
      />

      <motion.div
        className="relative z-10 w-full grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        {/* LEFT SIDE */}
        <motion.div variants={item}>
          <motion.p className="text-violet-400 text-sm tracking-widest uppercase mb-4">
            About Me
          </motion.p>

          <motion.h2
            className="font-extrabold leading-tight mb-6"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(32px, 5vw, 56px)",
              letterSpacing: "-1px",
            }}
          >
            Shopify Developer Crafting High-Converting Ecommerce Stores
          </motion.h2>

          <motion.p className="text-white/50 text-lg leading-8 mb-4">
            I’m John, a Shopify Developer with 2+ years of experience building
            responsive, fast, and conversion-focused ecommerce stores.
          </motion.p>

          <motion.p className="text-white/40 text-lg leading-8 mb-4">
            I specialize in Shopify theme customization, Liquid development,
            performance optimization, SEO, and modern frontend stacks like
            React, Next.js, and Tailwind CSS. I focus on scalable architecture,
            speed, and clean UI systems.
          </motion.p>

          <motion.p className="text-white/40 text-lg leading-8">
            My goal is to help brands build fast, scalable, and visually refined
            stores that improve conversions and user experience.
          </motion.p>

          {/* Skills */}
          <motion.div className="mt-10 flex flex-wrap gap-3">
            {[
              "Shopify",
              "Liquid",
              "HTML",
              "CSS",
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Shopify API",
              "GraphQL",
              "PHP",
              "REST API",
            ].map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.08 }}
                className="px-4 py-2 text-sm rounded-full border border-white/10 bg-white/5 text-white/60 hover:text-white hover:border-violet-400/40 transition"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          variants={item}
          className="grid grid-cols-2 gap-6"
        >
          {[
            { number: "2+", text: "Years Experience" },
            { number: "25+", text: "Shopify Projects" },
            { number: "95+", text: "Lighthouse Score" },
            { number: "100%", text: "Responsive Design" },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden"
            >
              {/* glow overlay */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-br from-violet-500/10 to-transparent" />

              <h3 className="text-4xl font-extrabold text-violet-400">
                {card.number}
              </h3>
              <p className="text-white/40 mt-2 text-sm tracking-wide">
                {card.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}