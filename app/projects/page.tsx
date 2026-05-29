const projects = [
  {
    title: "Fashion Shopify Store",
    description:
      "Custom Shopify storefront with responsive design, product filtering, and optimized checkout experience.",
    tech: ["Shopify", "Liquid", "Tailwind"],
  },
  {
    title: "Beauty Brand Ecommerce",
    description:
      "Modern ecommerce experience focused on conversion optimization and mobile-first UI.",
    tech: ["Next.js", "Shopify", "React"],
  },
  {
    title: "Electronics Store",
    description:
      "High-performance Shopify store with custom sections and advanced product pages.",
    tech: ["Shopify", "JavaScript", "CSS"],
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-purple-400 text-lg mb-4">
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            A collection of Shopify and ecommerce projects focused on
            performance, responsive design, and conversion optimization.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300"
            >

              {/* Project Image Placeholder */}
              <div className="h-56 bg-gradient-to-br from-purple-500/20 to-zinc-900 flex items-center justify-center">
                <span className="text-gray-500">
                  Project Preview
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="border border-zinc-700 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-8">

                  <button className="bg-white text-black px-5 py-2 rounded-full font-medium hover:scale-105 transition">
                    Live Demo
                  </button>

                  <button className="border border-zinc-700 px-5 py-2 rounded-full hover:bg-white hover:text-black transition">
                    Code
                  </button>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}