function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6">

      <h1 className="text-3xl font-bold text-cyan-400">
        CyberSphere
      </h1>

      <ul className="flex gap-8 text-gray-300">

        <li className="hover:text-cyan-400 cursor-pointer">
          Home
        </li>

        <li className="hover:text-cyan-400 cursor-pointer">
          Features
        </li>

        <li className="hover:text-cyan-400 cursor-pointer">
          About
        </li>

        <li className="hover:text-cyan-400 cursor-pointer">
          Contact
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;