import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import layer from "../assets/bottom-spiral.png";
import About from "../components/About";
import img from "../assets/about-img-1.png";
import Do from "../components/Do";
import spiral from "../assets/top-spiral.svg";
const HomePage = () => {
  return (
    <>
      {/* landing section */}
      <section className=" blue-bg lg:min-h-screen relative max-md:pb-12 pb-16 2xl:pb-64 md:px-10  xl:px-16 2xl:px-20 ">
        <Navbar />
        <Hero />
        <div className="absolute bottom-0 left-0 right-0 max-lg:hidden">
          <img src={layer} alt="layer" className="w-full " />
        </div>
      </section>

      {/* about section */}
      <section className="flex max-lg:flex-col lg:py-20 items-center justify-center px-10 lg:px-16 py-8 2xl:px-24">
        <About img={img} />
      </section>

      {/* what we do section */}
      <section className="px-10 lg:px-16 py-8 2xl:px-24 relative pt-8 md:pt-12 lg:pt-16 2xl:pt-32 bg-[#88A6F224]">
        <img
          src={spiral}
          alt="spiral-wave"
          className="absolute top-[-2px] right-0 left-0 w-full"
        />
        <Do />
      </section>
    </>
  );
};

export default HomePage;
