import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import layer from "../assets/bottom-spiral.png";
import About from "../components/About";
import img from "../assets/about-img-1.png";

const HomePage = () => {
  return (
    <>
      <section className=" blue-bg lg:min-h-screen relative max-md:pb-12 pb-16 2xl:pb-64 md:px-10  xl:px-16 2xl:px-20 ">
        <Navbar />
        <Hero />
        <div className="w-screen max-lg:hidden absolute bottom-0 ">
          <img src={layer} alt="layer" className="w-full " />
        </div>
      </section>
      <section className="flex max-lg:flex-col lg:py-20 items-center justify-center px-10 lg:px-16 py-8 2xl:px-24">
        <About img={img} />
      </section>
    </>
  );
};

export default HomePage;
