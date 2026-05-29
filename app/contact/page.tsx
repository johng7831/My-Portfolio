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

export default function Contact() {
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
            Contact Me
          </motion.p>

          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Let’s Build Your Shopify Store
          </motion.h2>

          <motion.p
            variants={item}
            className="text-gray-400 mt-6 text-lg leading-8"
          >
            Have a Shopify project or ecommerce idea in mind?
            I’d love to help you create a modern, high-converting online store.
          </motion.p>

          {/* Contact Info */}
          <motion.div
            variants={item}
            className="mt-10 space-y-6"
          >

            {[
              {
                title: "Email",
                value: "john@example.com",
              },
              {
                title: "Location",
                value: "India",
              },
              {
                title: "Availability",
                value: "Available for freelance projects",
              },
            ].map((info, index) => (
              <motion.div
                key={index}
                whileHover={{
                  x: 10,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                }}
              >

                <h3 className="text-xl font-semibold">
                  {info.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {info.value}
                </p>

              </motion.div>
            ))}

          </motion.div>

        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          variants={item}
          whileHover={{
            y: -5,
          }}
          className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 w-full"
        >

          <form className="space-y-6">

            {/* Name */}
            <motion.div variants={item}>

              <label className="block mb-2 text-gray-300">
                Full Name
              </label>

              <motion.input
                whileFocus={{
                  scale: 1.02,
                  borderColor: "#a855f7",
                }}
                type="text"
                placeholder="John Doe"
                className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none"
              />
            </motion.div>
            {/* Email */}
            <motion.div variants={item}>
              <label className="block mb-2 text-gray-300">
                Email Address
              </label>
              <motion.input
                whileFocus={{
                  scale: 1.02,
                  borderColor: "#a855f7",
                }}
                type="email"
                placeholder="john@example.com"
                className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none"
              />
            </motion.div>
            {/* Project Type */}
            <motion.div variants={item}>
              <label className="block mb-2 text-gray-300">
                Project Type
              </label>
              <motion.input
                whileFocus={{
                  scale: 1.02,
                  borderColor: "#a855f7",
                }}
                type="text"
                placeholder="Shopify Store Development"
                className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none"
              />
            </motion.div>
            {/* Message */}
            <motion.div variants={item}>
              <label className="block mb-2 text-gray-300">
                Message
              </label>
              <motion.textarea
                whileFocus={{
                  scale: 1.02,
                  borderColor: "#a855f7",
                }}
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none resize-none"
              />
            </motion.div>
            {/* Button */}
            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              type="submit"
              className="w-full bg-white text-black py-4 rounded-xl font-semibold"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}