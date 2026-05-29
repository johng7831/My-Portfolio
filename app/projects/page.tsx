"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Fashion Shopify Store",
    description:
      "Custom Shopify storefront with responsive design, product filtering, and optimized checkout experience.",
    tech: ["Shopify", "Liquid", "JavaScript", "Shopify API"],
    link: "https://properstreetwear.com/",
  },
  {
    title: "Purebred Kittens Marketplace",
    description:
      "Marketplace-style ecommerce platform with smooth UX and product browsing experience.",
    tech: ["Shopify", "Liquid", "JavaScript", "HTML", "CSS"],
    link: "https://purebredkitties.com/",
  },
  {
    title: "Beauty Brand Ecommerce",
    description:
      "Modern ecommerce experience focused on conversion optimization and mobile-first UI.",
    tech: ["Shopify", "Liquid", "JavaScript", "HTML", "CSS"],
    link: "https://cosmetix.com.au/",
  },
  {
    title: "Affiliate Book Store",
    description:
      "Curated book platform with Amazon redirects, optimized discovery flow and clean UI experience.",
    tech: ["Shopify", "Liquid", "JavaScript", "HTML", "CSS"],
    link: "https://bonniebrushes.com/",
  },
  {
    title: "Digital Coloring Platform",
    description:
      "Printable coloring pages website focused on creativity, downloads, and smooth user experience.",
    tech: ["Shopify", "Liquid", "JavaScript", "HTML", "CSS"],
    link: "https://huecoloring.com/",
  },
  {
    title: "Voyafly eSIM Platform",
    description:
      "Global eSIM platform with instant activation, fast checkout, and mobile-first travel UX.",
    tech: ["Shopify", "Liquid", "React", "Tailwind", "API Integration"],
    link: "https://voyafly.com/",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section className="relative w-full min-h-screen bg-[#080808] text-white px-6 py-24 overflow-hidden">

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
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-[700px] h-[450px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(110,60,255,0.18) 0%, transparent 70%)",
        }}
      />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        {/* Heading */}
        <motion.div variants={item} className="text-center mb-16">
          <p className="text-violet-400 text-sm tracking-widest uppercase mb-4">
            My Work
          </p>

          <h2
            className="font-extrabold"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(34px, 5vw, 56px)",
              letterSpacing: "-1px",
            }}
          >
            Featured Projects
          </h2>

          <p className="text-white/50 mt-6 max-w-2xl mx-auto text-lg leading-8">
            A collection of Shopify and ecommerce builds focused on performance,
            responsive design, and conversion optimization.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden group"
            >
              {/* Glow hover overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-violet-500/10 to-transparent" />

              {/* Preview */}
              <div className="h-52 flex items-center justify-center border-b border-white/10">
                <span className="text-white/30 text-sm tracking-widest">
                  PROJECT PREVIEW
                </span>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold mb-3 group-hover:text-violet-300 transition">
                  {project.title}
                </h3>

                <p className="text-white/40 text-sm leading-7">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/50 hover:text-white hover:border-violet-400/40 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-6">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-full bg-violet-600 hover:bg-violet-500 transition text-sm font-medium"
                    >
                      Live
                    </a>
                  )}

                  <button className="px-5 py-2 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition text-sm">
                    Code
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}