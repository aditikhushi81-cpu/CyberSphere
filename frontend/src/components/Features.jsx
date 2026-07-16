import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section id="features" className="px-10 py-24">

      <motion.h2
        className="text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Why Choose CyberSphere
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        <FeatureCard
          icon="🛡️"
          title="Threat Detection"
          description="Detect cyber threats using AI-powered security analysis."
        />

        <FeatureCard
          icon="🤖"
          title="AI Assistant"
          description="Get instant cybersecurity guidance powered by artificial intelligence."
        />

        <FeatureCard
          icon="📊"
          title="Analytics"
          description="Visualize reports, attacks and security performance."
        />

        <FeatureCard
          icon="🔐"
          title="Digital Forensics"
          description="Investigate cyber incidents using professional forensic tools."
        />

      </motion.div>

    </section>
  );
}

export default Features;