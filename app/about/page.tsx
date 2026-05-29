export default function About() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20 flex items-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>
          <p className="text-purple-400 text-lg mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Shopify Developer Focused on Modern Ecommerce Experiences
          </h2>

          <p className="text-gray-400 mt-6 text-lg leading-8">
            I’m John, a Shopify Developer with 2+ years of experience
            building responsive, high-converting ecommerce stores.
          </p>

          <p className="text-gray-400 mt-4 text-lg leading-8">
            I specialize in Shopify theme customization, Liquid development,
            performance optimization, and modern frontend experiences using
            React, Next.js, and Tailwind CSS.
          </p>

          <p className="text-gray-400 mt-4 text-lg leading-8">
            My goal is to help brands create fast, scalable, and visually
            engaging online stores that improve customer experience and sales.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <span className="border border-gray-700 px-4 py-2 rounded-full">
              Shopify
            </span>

            <span className="border border-gray-700 px-4 py-2 rounded-full">
              Liquid
            </span>

            <span className="border border-gray-700 px-4 py-2 rounded-full">
              Next.js
            </span>

            <span className="border border-gray-700 px-4 py-2 rounded-full">
              Tailwind CSS
            </span>
          </div>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-6">

          <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
            <h3 className="text-4xl font-bold text-purple-400">
              2+
            </h3>

            <p className="text-gray-400 mt-2">
              Years Experience
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
            <h3 className="text-4xl font-bold text-purple-400">
              20+
            </h3>

            <p className="text-gray-400 mt-2">
              Shopify Projects
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
            <h3 className="text-4xl font-bold text-purple-400">
              95+
            </h3>

            <p className="text-gray-400 mt-2">
              Lighthouse Score
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
            <h3 className="text-4xl font-bold text-purple-400">
              100%
            </h3>

            <p className="text-gray-400 mt-2">
              Responsive Design
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}