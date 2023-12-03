import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
const HomePage = () => {
  return (
    <>
      <section className="xl:px-8 lg:px-2 blue-bg lg:min-h-screen ">
        <Navbar />
        <Hero />
      </section>
    </>
  );
};

export default HomePage;
