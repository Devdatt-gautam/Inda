import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import layer from "../assets/bottom-spiral.png";
import About from "../components/About";
import img1 from "../assets/about-img-1.png";
import img2 from "../assets/about-img-2.png";
import img3 from "../assets/about-img-3.png";
import img4 from "../assets/about-img-4.png";
const HomePage = () => {
  return (
    <>
      <section className=" blue-bg lg:min-h-screen relative pb-16 2xl:pb-64 ">
        <Navbar />
        <Hero />
        <div className="w-screen max-lg:hidden absolute bottom-0 ">
          <img src={layer} alt="layer" className="w-full " />
        </div>
      </section>
      <section className="lg:flex lg:py-20 2xl:mx-20 2xl:items-center">
        <About img1={img1} img2={img2} img3={img3} img4={img4} />
      </section>
    </>
  );
};

export default HomePage;
