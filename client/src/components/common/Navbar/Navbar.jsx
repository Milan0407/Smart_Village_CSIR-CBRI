import { useState } from "react";
import { Menu, X, Languages } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Mission", href: "#mission" },
    { label: "CSIR-CBRI", href: "#cbri" },
    { label: "Updates", href: "#updates" },
    { label: "Policies", href: "#policies" },
    { label: "Villages", href: "#villages" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="h-16 lg:h-20 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-blue-900 flex-shrink-0" />

            <div className="leading-tight">
              <h1 className="font-bold text-sm sm:text-base lg:text-xl text-slate-900">
                Smart Village Portal
              </h1>

              <p className="hidden sm:block text-xs lg:text-sm text-slate-500">
                CSIR-CBRI Roorkee
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8 font-medium text-slate-700">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-blue-900 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}

              <li>
                <button className="flex items-center gap-2 hover:text-blue-900 transition-colors">
                  <Languages size={18} />
                  Language
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-slate-100"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <nav className="px-4 py-4">
            <ul className="space-y-1">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block py-3 px-3 rounded-lg hover:bg-slate-100 text-slate-700 font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}

              <li>
                <button className="w-full flex items-center gap-2 py-3 px-3 rounded-lg hover:bg-slate-100 text-slate-700 font-medium">
                  <Languages size={18} />
                  Language
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;