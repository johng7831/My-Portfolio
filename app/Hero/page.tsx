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
          Shopify Developer specializing in custom themes,
          ecommerce UI/UX, performance optimization, and
          conversion-focused storefronts.
        </motion.p>

        <motion.div
          variants={item}
          transition={{ duration: 1 }}
          className="mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-500 hover:bg-purple-600 px-8 py-3 rounded-xl font-semibold"
          >
            View Projects
          </motion.button>
        </motion.div>

      </motion.div>

    </section>
  );
}