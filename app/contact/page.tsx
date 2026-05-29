export default function Contact() {
  return (
    <section className="w-full min-h-screen bg-black text-white px-6 py-20 flex items-center">
      
      <div className="w-full grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>
          <p className="text-purple-400 text-lg mb-4">
            Contact Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Let’s Build Your Shopify Store
          </h2>

          <p className="text-gray-400 mt-6 text-lg leading-8">
            Have a Shopify project or ecommerce idea in mind?
            I’d love to help you create a modern, high-converting online store.
          </p>

          <div className="mt-10 space-y-6">

            <div>
              <h3 className="text-xl font-semibold">
                Email
              </h3>

              <p className="text-gray-400 mt-2">
                john@example.com
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Location
              </h3>

              <p className="text-gray-400 mt-2">
                India
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Availability
              </h3>

              <p className="text-gray-400 mt-2">
                Available for freelance projects
              </p>
            </div>

          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 w-full">

          <form className="space-y-6">

            {/* Name */}
            <div>
              <label className="block mb-2 text-gray-300">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-gray-300">
                Email Address
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
              />
            </div>

            {/* Project Type */}
            <div>
              <label className="block mb-2 text-gray-300">
                Project Type
              </label>

              <input
                type="text"
                placeholder="Shopify Store Development"
                className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-gray-300">
                Message
              </label>

              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-purple-500 resize-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:scale-[1.02] transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}