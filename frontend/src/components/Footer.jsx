function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-10 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-bold text-cyan-400">
              CyberSphere
            </h2>

            <p className="text-gray-400 mt-5 leading-8">

              AI-powered Cybersecurity and
              Digital Forensics Platform.

            </p>

          </div>

          {/* Platform */}

          <div>

            <h3 className="text-white font-semibold mb-5">
              Platform
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Dashboard</li>
              <li>Threat Detection</li>
              <li>AI Assistant</li>
              <li>Analytics</li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="text-white font-semibold mb-5">
              Resources
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Documentation</li>
              <li>Roadmap</li>
              <li>Support</li>
              <li>FAQs</li>

            </ul>

          </div>

          {/* Community */}

          <div>

            <h3 className="text-white font-semibold mb-5">
              Community
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Login</li>
              <li>Register</li>
              <li>Reviews</li>
              <li>Contact</li>

            </ul>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center">

            <p className="text-gray-500">

              © 2026 CyberSphere.
              All Rights Reserved.

            </p>

            <div className="flex gap-8 mt-5 md:mt-0">

              <button className="text-gray-400 hover:text-cyan-400 duration-300">
                Privacy Policy
              </button>

              <button className="text-gray-400 hover:text-cyan-400 duration-300">
                Terms
              </button>

              <button className="text-gray-400 hover:text-cyan-400 duration-300">
                Contact
              </button>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;