const Navbar = () => {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-blue-900"></div>

            <div>
              <h1 className="font-bold text-xl text-slate-900">
                Smart Village Portal
              </h1>

              <p className="text-sm text-slate-500">CSIR-CBRI Roorkee</p>
            </div>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex items-center gap-8 font-medium text-slate-700">
              <li>
                <a
                  href="#mission"
                  className="hover:text-blue-900 transition-colors"
                >
                  Mission
                </a>
              </li>

              <li>
                <a
                  href="#cbri"
                  className="hover:text-blue-900 transition-colors"
                >
                  CSIR-CBRI
                </a>
              </li>

              <li>
                <a
                  href="#updates"
                  className="hover:text-blue-900 transition-colors"
                >
                  Updates
                </a>
              </li>

              <li>
                <a
                  href="#policies"
                  className="hover:text-blue-900 transition-colors"
                >
                  Policies
                </a>
              </li>

              <li>
                <button className="hover:text-blue-900 transition-colors">
                  Language
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
