import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="px-10 pt-36 pb-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full">
            AI Powered Security Platform
          </span>

          <h1 className="text-6xl font-bold mt-8 leading-tight">
            Secure.
            <br />
            Analyze.
            <br />
            Learn.
          </h1>

          <p className="text-gray-400 text-xl mt-8">
            CyberSphere helps students, professionals and researchers detect
            cyber threats, analyze attacks and improve security skills using AI.
          </p>

          <div className="flex gap-5 mt-10">
            <button className="bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-xl font-semibold">
              Get Started
            </button>

            <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition px-8 py-4 rounded-xl">
              Live Demo
            </button>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="w-[420px] h-[420px] rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center shadow-2xl">

            <div className="text-center">
              <h2 className="text-4xl font-bold">
                Threat Dashboard
              </h2>

              <p className="mt-4 text-gray-200 text-lg">
                AI Monitoring Active
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;