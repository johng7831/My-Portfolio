"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Fashion Shopify Store",
    description:
    "Developed a responsive Shopify fashion eCommerce store with custom theme design to showcase clothing and accessories. Implemented product collections, filtering, cart, secure checkout, and payment setup. Configured shipping, taxes, and promotional sections while optimizing performance and ensuring a smooth, mobile-friendly shopping experience.",
    tech: ["Shopify", "Liquid", "JavaScript", "Shopify API"],
    link: "https://properstreetwear.com/",
  },
  {
    title: "Purebred Kittens Marketplace",
    description:
      "Developed a global online platform, Purebred Kitties, that connects cat lovers with ethical breeders offering purebred kittens. The platform features detailed breed listings, kitten profiles, and health assurance to help users find healthy and well-bred pets. It provides a seamless adoption experience with breed selection, secure browsing, and end-to-end support for shipping and adoption, making the process simple, transparent, and accessible worldwide.",
    tech: ["Shopify", "Liquid", "JavaScript", "HTML", "CSS"],
    link: "https://purebredkitties.com/",
  },
  {
    title: "Beauty Brand Ecommerce",
    description:
      "Developed a modern and responsive beauty brand eCommerce store showcasing skincare and cosmetic products with an engaging UI. Implemented product collections, filtering, cart, secure checkout, and payment integration. Configured shipping, taxes, and promotional banners while optimizing performance to ensure a smooth, mobile-friendly shopping experience.",
    tech: ["Shopify", "Liquid", "JavaScript", "HTML", "CSS"],
    link: "https://cosmetix.com.au/",
  },
  {
    title: "Affiliate Book Store",
    description:
      "Developed a curated book discovery platform with a clean, user-friendly interface and optimized browsing experience. Implemented categorized listings, search and filtering features, and seamless Amazon affiliate redirects for purchase. Focused on improving content discovery flow and performance to provide users with an engaging and efficient way to explore books.",
    tech: ["Shopify", "Liquid", "JavaScript", "HTML", "CSS"],
    link: "https://bonniebrushes.com/",
  },
  {
    title: "Digital Coloring Platform",
    description:
      "Developed a responsive printable coloring pages website focused on creativity, easy downloads, and a smooth user experience. Implemented categorized coloring collections, search and filtering, preview functionality, and one-click downloads. Optimized the platform for fast performance and mobile-friendly browsing to provide an engaging and seamless experience for users of all ages.",
    tech: ["Shopify", "Liquid", "JavaScript", "HTML", "CSS"],
    link: "https://huecoloring.com/",
  },
  {
    title: "Voyafly eSIM Platform",
    description:
      "Developed a global eSIM platform with instant activation, fast checkout, and a mobile-first travel-focused user experience. Implemented plan selection, country-based eSIM browsing, secure payment integration, and automated activation flow. Optimized the platform for speed, responsiveness, and seamless usability to support travelers with quick and reliable connectivity worldwide.",
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

                  
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}