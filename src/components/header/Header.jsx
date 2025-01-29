import logo from '../../assets/images/logo2.png';

const Header = () => {
  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#", label: "Colección" },
    { href: "#", label: "Acerca de nosotros" },
    { href: "#", label: "Contáctanos" },
  ]

  return (
    <header className="border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img
          src={logo}
          alt="ELStyle Main Logo"
          className="w-auto h-15"
        />
        <nav>
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href} 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header