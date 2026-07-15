function Stats() {
  const stats = [
    {
      number: "0",
      title: "Active Users",
    },
    {
      number: "0",
      title: "Threats Detected",
    },
    {
      number: "0",
      title: "Reports Generated",
    },
    {
      number: "0%",
      title: "AI Accuracy",
    },
  ];

  return (
    <section className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-10">

        <h2 className="text-4xl font-bold text-center text-white mb-14">
          Platform Statistics
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 text-center hover:scale-105 duration-300"
            >
              <h1 className="text-5xl font-bold text-cyan-400">
                {item.number}
              </h1>

              <p className="text-gray-300 mt-4 text-lg">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;