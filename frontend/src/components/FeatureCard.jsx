function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500 transition">

      <div className="text-5xl mb-5">
        {icon}
      </div>

      <h2 className="text-2xl font-bold mb-3">
        {title}
      </h2>

      <p className="text-gray-400">
        {description}
      </p>

    </div>
  );
}

export default FeatureCard;