function Testimonials() {
  return (
    <section id="reviews" className="bg-slate-950 py-24">

      <div className="max-w-7xl mx-auto px-10">

        <h2 className="text-5xl font-bold text-center text-white">
          Community Reviews
        </h2>

        <p className="text-gray-400 text-center mt-4">
          Reviews shared by CyberSphere users.
        </p>

        <div className="mt-16 bg-slate-900 rounded-2xl border border-slate-800 p-16 text-center">

          <h3 className="text-3xl font-bold text-cyan-400">
            No Reviews Yet
          </h3>

          <p className="text-gray-400 mt-6 text-lg">
            Be the first CyberSphere user to share your experience after using the platform.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;