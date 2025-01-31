import { useState } from 'react';
import logo from '../../assets/images/logo2.png';
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#products", label: "Colección" },
    { href: "#about", label: "Acerca de nosotros" },
    { href: "#footer", label: "Contáctanos" },
  ];

  return (
    <header className="border-b border-white/10 bg-black">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <img src={logo} alt="ELStyle Main Logo" className="w-auto h-15" />

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Navigation */}
        <nav
          className={`absolute md:relative z-50 left-0 top-20 md:top-auto w-full md:w-auto bg-black md:bg-transparent transition-all duration-500 md:translate-y-0 md:opacity-100 ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-96 opacity-0"
          }`}
        >
          <ul className="flex flex-col md:flex-row">
            {navLinks.map((link) => (
              <li key={link.label} className="border-b border-white/10 md:border-none">
                <a
                  href={link.href}
                  className="block px-4 py-2 text-white hover:text-white transition-colors"
                  onClick={() => setMenuOpen(false)} 
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
