import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const Home = () => {
  return (
    <div className="">
      <section className="max-[300px]:hidden">
        <NavBar />
        <div className="flex flex-col items-center mx-auto gap-24">
          <Hero />
          <AboutUs />
          <Services />
          <Footer />
        </div>
      </section>
      <div className="min-[300px]:hidden m-2">
        Device width too small. Please revisit on a larger device.
      </div>
    </div>
  );
};

export default Home;
