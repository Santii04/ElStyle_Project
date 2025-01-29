import logo from '../../assets/images/logo6.png'

const About = () => {
    const features = [
      {
        title: "Elegancia",
        description: "Diseños que exponen tu elegancia al vestir"
      },
      {
        title: "Moderno",
        description: "Mantén un estilo contemporáneo con nuestras colecciones"
      },
      {
        title: "Tu estilo",
        description: "Te escuchamos para que tus prendas hablen por ti"
      },
      {
        title: "Confiabilidad",
        description: "Un estilo que te acompaña en tu día a día"
      }
    ]
  
    return (
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <img
              src={logo}
              alt="ELStyle Text Logo"
              width={400}
              height={100}
              className="mb-8"
            />
            <p className="text-xl text-white/80 max-w-xl">
              Nacemos de la pasión por mantener la elegancia junto con un estilo moderno, ELStyle representa la fusión perfecta entre diseños modernos y
              una elegancia absoluta.
            </p>
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="text-center p-8 border border-white/10">
                  <h3 className="text-2xl font-light mb-2">{feature.title}</h3>
                  <p className="text-white/60">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default About