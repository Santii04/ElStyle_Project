const Footer = () => {
    const footerLinks = {
      shop: [
        { label: "Colecciones", href: "#" },
        { label: "Accesorios", href: "#" }
      ],
      about: [
        { label: "Información legal", href: "#" },
        { label: "Contáctanos", href: "#" }
      ],
      connect: [
        { label: "Instagram", href: "#" },
        { label: "WhatsApp", href: "#" },
      ]
    }
  
    return (
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="mb-8 md:mb-0">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PBsjhLyHRDqHqzUwla7SytamOIAyqI.png"
                alt="ELStyle Logo"
                width={120}
                height={120}
                className="w-24 mb-4"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-lg font-light mb-4 capitalize">{category}</h3>
                  <ul className="space-y-2">
                    {links.map((link) => (
                      <li key={link.label}>
                        <a 
                          href={link.href} 
                          className="text-white/60 hover:text-white transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60">
            <p>&copy; {new Date().getFullYear()} ELStyle. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer