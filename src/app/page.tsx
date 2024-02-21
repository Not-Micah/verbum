import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col items-center mx-auto gap-24">
      <Hero />
      <AboutUs />
      <Services />
      <Footer />
    </div>
  )
}

export default Home