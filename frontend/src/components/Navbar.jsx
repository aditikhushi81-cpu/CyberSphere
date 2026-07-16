function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-5">

        <h1 className="text-3xl font-bold text-cyan-400">
          CyberSphere
        </h1>

        <ul className="flex gap-8 text-gray-300">

          <li>
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#features" className="hover:text-cyan-400 transition">
              Features
            </a>
          </li>

          <li>
            <a href="#home" className="hover:text-cyan-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;