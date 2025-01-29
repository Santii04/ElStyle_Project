import About from "../components/about/About";
import FeaturedProducts from "../components/featuredProducts/FeaturesProducts";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";

function LandingPage() {

    return (
        <div className="min-w-screen min-h-screen bg-black text-white">
            <Header />
            <Hero />
            <FeaturedProducts />
            <About />
            <Footer />
        </div>
    );
}

export default LandingPage;