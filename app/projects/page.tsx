"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Fashion Shopify Store",
    description:
      "Custom Shopify storefront with responsive design, product filtering, and optimized checkout experience.",
    tech: ["Shopify", "Liquid", "Tailwind"],
    link: "https://properstreetwear.com/",
  },
  {
    title: "Purebred Kittens Marketplace",
    description:
      "Marketplace-style ecommerce platform with smooth UX and product browsing experience.",
    tech: ["Shopify", "React", "Next.js"],
    link: "https://purebredkitties.com/",
  },
  {
    title: "Beauty Brand Ecommerce",
    description:
      "Modern ecommerce experience focused on conversion optimization and mobile-first UI.",
    tech: ["Next.js", "Shopify", "React"],
  },
  {
    title: "Book Store Shopify Project - Bonnie Brushes",
    description:
      "Creative Shopify store for books and artistic products with a clean shopping experience.",
    tech: ["Shopify", "Liquid", "CSS"],
    link: "https://bonniebrushes.com/",
  },
  {
    title: "Book Store Shopify Project - Hue Coloring",
    description:
      "Interactive coloring book ecommerce store built for smooth browsing and purchase flow.",
    tech: ["Shopify", "JavaScript", "CSS"],
    link: "https://huecoloring.com/",
  },
];

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
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function Projects() {
  return (
    <section className="w-full min-h-screen bg-black text-white px-6 py-20">
      <motion.div
        className="w-full"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.div variants={item} className="text-center mb-16">
          <motion.p variants={item} className="text-purple-400 text-lg mb-4">
            My Work
          </motion.p>
          <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold">
            Featured Projects
          </motion.h2>
          <motion.p
            variants={item}
            className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8"
          >
            A collection of Shopify and ecommerce projects focused on
            performance, responsive design, and conversion optimization.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden group"
            >
              <div className="h-56 bg-gradient-to-br from-purple-500/20 to-zinc-900 flex items-center justify-center overflow-hidden">
                <motion.span
                  initial={{ opacity: 0.6 }}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  className="text-gray-500 text-lg"
                >
                  Project Preview
                </motion.span>
              </div>

              <div className="p-6">
                <motion.h3
                  whileHover={{ x: 5 }}
                  className="text-2xl font-semibold"
                >
                  {project.title}
                </motion.h3>

                <p className="text-gray-400 mt-4 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-6">
                  {project.tech.map((item, i) => (
                    <motion.span
                      key={i}
                      whileHover={{
                        scale: 1.08,
                        borderColor: "#a855f7",
                      }}
                      className="border border-zinc-700 px-3 py-1 rounded-full text-sm cursor-pointer transition-all"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-black px-5 py-2 rounded-full font-medium"
                    >
                      Live Site
                    </motion.a>
                  )}

                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#ffffff",
                      color: "#000000",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-zinc-700 px-5 py-2 rounded-full"
                  >
                    Code
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}