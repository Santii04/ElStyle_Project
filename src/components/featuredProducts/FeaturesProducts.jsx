import tshirt1 from '../../assets/images/tshirt1.jpg'
import tshirt2 from '../../assets/images/tshirt2.jpg'
import tshirt3 from '../../assets/images/tshirt3.jpg'

const FeaturedProducts = () => {

    const images = [tshirt1, tshirt2, tshirt3];

    const products = [1, 2, 3].map((item) => ({
      id: item,
      title: "Camiseta básica",
      price: "$59.900",
      image: images[item-1]
    }))

    console.log(products)
  
    return (
      <section id="products" className="py-24 bg-white text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-16 text-center">
            Nuestra última colección
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={`Product ${product.id}`}
                    width={300}
                    height={400}
                    className="w-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-light">{product.title}</h3>
                  <p className="text-gray-600">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default FeaturedProducts