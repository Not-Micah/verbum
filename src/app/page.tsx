import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const Home = () => {
  return (
    <div className="">
      <section className="max-[300px]:hidden">
        <NavBar className="fixed top-0 left-0 right-0
      xl:w-[calc(100%-20rem)] lg:w-[calc(100%-16rem)] md:w-[calc(100%-12rem)] sm:w-[calc(100%-8rem)]
      mx-auto my-8 py-4
      bg-white/60 rounded-[15px] backdrop-blur-md shadow-md	" />
        <div className="flex flex-col items-center mx-auto gap-24">
          <Hero />
          <AboutUs />
          <Services />
          <Footer />
        </div>
      </section>
      <div className="min-[300px]:hidden w-full h-[100vh] bg-white p-2">
        Device width too small. Please revisit on a larger device.
      </div>
    </div>
  );
};

export default Home;
