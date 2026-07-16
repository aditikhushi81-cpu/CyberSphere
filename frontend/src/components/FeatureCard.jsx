import { motion } from "framer-motion";

function FeatureCard({ title, description, icon }) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 60,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{
        duration: 0.6,
      }}
      whileHover={{
        y: -12,
        scale: 1.04,
        boxShadow: "0px 0px 30px rgba(34,211,238,0.35)",
      }}
      className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500 transition cursor-pointer"
    >
      <div className="text-5xl mb-5">
        {icon}
      </div>

      <h2 className="text-2xl font-bold mb-3">
        {title}
      </h2>

      <p className="text-gray-400 leading-8">
        {description}
      </p>
    </motion.div>
  );
}

export default FeatureCard;