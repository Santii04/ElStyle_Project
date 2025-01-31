import logo from '../../assets/images/logo2.png'

const Hero = () => {
  return (
    <section id="hero" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black z-10"></div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-20">
        <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-light mb-6">
            Elegancia en cada detalle
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            Donde la elegancia se combina con la moda actual. Descubre la esencia de ElStyle
          </p>
          <button variant="outline" className="text-white bg-[#1a1a1a] border-white transition-colors duration-600 hover:bg-white hover:text-black">
            Explora la Colección
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={logo}
            alt="EL Crown Logo"
            className="w-auto md:w-70 opacity-90"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero