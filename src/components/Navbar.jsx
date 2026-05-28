import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { LOGO } from "./PageWrapper";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/daily", label: "Daily" },
  { to: "/journey", label: "Journey" },
  { to: "/chains", label: "Chains" },
  { to: "/mind", label: "Mind" },
  { to: "/prayer", label: "Prayer" },
  { to: "/journal", label: "Journal" },
  { to: "/resources", label: "Resources" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="relative z-50">
      <div className="backdrop-blur-md bg-red-950/40 border-b border-yellow-600/30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo + title */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={LOGO}
              alt="Kingdom Mandate Ministry"
              className="w-10 h-10 rounded-full object-cover shadow-[0_0_12px_rgba(200,160,40,0.5)]"
            />
            <span className="font-cinzel text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 hidden sm:inline">
              Kingdom Freedom
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-lg text-sm font-cinzel font-medium transition-all ${
                  location.pathname === link.to
                    ? "text-yellow-300 bg-yellow-500/10"
                    : "text-yellow-100/80 hover:text-yellow-300 hover:bg-yellow-500/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-yellow-300 hover:text-yellow-100 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 right-0 backdrop-blur-xl bg-red-950/80 border-b border-yellow-600/30 shadow-2xl">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 rounded-lg font-cinzel font-medium transition-all ${
                  location.pathname === link.to
                    ? "text-yellow-300 bg-yellow-500/15"
                    : "text-yellow-100/80 hover:text-yellow-300 hover:bg-yellow-500/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}