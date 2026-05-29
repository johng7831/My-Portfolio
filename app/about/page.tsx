"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
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

export default function About() {
  return (
    <section className="w-full min-h-screen bg-black text-white px-6 py-20 flex items-center">

      <motion.div
        className="w-full grid md:grid-cols-2 gap-16 items-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Left Side */}
        <motion.div variants={item}>
          <motion.p
            variants={item}
            className="text-purple-400 text-lg mb-4"
          >
            About Me
          </motion.p>
          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Shopify Developer Focused on Modern Ecommerce Experiences
          </motion.h2>
          <motion.p
            variants={item}
            className="text-gray-400 mt-6 text-lg leading-8"
          >
            I’m John, a Shopify Developer with 2+ years of experience
            building responsive, high-converting ecommerce stores.
          </motion.p>
          <motion.p
            variants={item}
            className="text-gray-400 mt-4 text-lg leading-8"
          >
          I specialize in Shopify theme customization and Liquid development, with a strong focus on performance optimization, SEO best practices, Shopify automation, and building modern, responsive frontend experiences. I work with React, Next.js, and Tailwind CSS to create scalable and maintainable interfaces that are fast, efficient, and search-engine friendly.

          My technical skill set includes JavaScript, TypeScript, Liquid (Shopify’s templating language), jQuery, PHP, AJAX, Shopify APIs, SEO optimization, and Shopify automation workflows. I focus on delivering high-performing, conversion-driven eCommerce solutions with strong attention to performance, scalability, and service-level optimization (SLO).
          </motion.p>
          <motion.p
            variants={item}
            className="text-gray-400 mt-4 text-lg leading-8"
          >
            My goal is to help brands create fast, scalable, and visually
            engaging online stores that improve customer experience and sales.
          </motion.p>

          {/* Skills */}
          <motion.div
            variants={item}
            className="mt-8 flex gap-4 flex-wrap"
          >
            {[
              "Shopify",
              "Liquid",
              "HTML",
              "CSS",
              "Javascript",
              "Typescript",
              "Shopify API",
              "Rest API",
              "Graphql API",
              "PHP",
              "React",
            ].map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{
                  scale: 1.08,
                  borderColor: "#a855f7",
                }}
                className="border border-gray-700 px-4 py-2 rounded-full cursor-pointer transition-all"
              >
                {skill}
              </motion.span>
            ))}

          </motion.div>
        </motion.div>
        {/* Right Side */}
        <motion.div
          variants={item}
          className="grid grid-cols-2 gap-6"
        >
          {[
            {
              number: "2+",
              text: "Years Experience",
            },
            {
              number: "25+",
              text: "Shopify Projects",
            },
            {
              number: "95+",
              text: "Lighthouse Score",
            },
            {
              number: "100%",
              text: "Responsive Design",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800"
            >
              <h3 className="text-4xl font-bold text-purple-400">
                {card.number}
              </h3>
              <p className="text-gray-400 mt-2">
                {card.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}