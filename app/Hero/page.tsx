"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-black text-white flex items-center justify-center px-6">
      <motion.div
        className="w-full text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          transition={{ duration: 0.6 }}
          className="text-purple-400 text-lg mb-4"
        >
          Shopify Developer • 2+ Years Experience
        </motion.p>

        <motion.h1
          variants={item}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Hi, I’m John
        </motion.h1>

        <motion.h2
          variants={item}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-semibold mt-4"
        >
          I Build Modern Shopify Stores
        </motion.h2>

        <motion.p
          variants={item}
          transition={{ duration: 0.9 }}
          className="text-gray-400 text-lg mt-6 max-w-3xl mx-auto leading-relaxed"
        >
          Shopify Developer specializing in custom themes, ecommerce UI/UX,
          performance optimization, CRO strategies, and high-converting
          storefront experiences.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          variants={item}
          transition={{ duration: 1 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition font-medium"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-gray-500 hover:border-white transition font-medium"
          >
            Contact Me
          </a>
        </motion.div>

        {/* SOCIAL LINKS */}
        <motion.div
          variants={item}
          transition={{ duration: 1.1 }}
          className="mt-8 flex justify-center gap-6 text-gray-400 text-sm"
        >
          <a href="#" className="hover:text-white transition">
            GitHub
          </a>
          <a href="#" className="hover:text-white transition">
            LinkedIn
          </a>
          <a href="#" className="hover:text-white transition">
            Twitter
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}