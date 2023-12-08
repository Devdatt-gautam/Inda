import ProjectCard from "./ProjectCard";
import img1 from "../assets/project-1.png";
import img2 from "../assets/project-2.png";
import img3 from "../assets/project-3.png";

const Project = () => {
  return (
    <div className="max-w-[1800px] mx-auto">
      <h5 className="uppercase font-roboto text-[#1D2130] font-bold text-2xl max-sm:text-sm md:text-2xl flex gap-8 items-center 2xl:text-4xl mb-2">
        <div className="w-28 h-1 max-sm:w-11 bg-[#1D2130]"></div>Projects we
        have done
      </h5>
      <h6 className="text-[#1D2130] font-bold tracking-wider max-w-lg xl:max-w-3xl sm:text-3xl max-sm:text-md 2xl:text-5xl md:ml-32">
        We are creating a place where children with special needs can thrive
      </h6>
      <div className="mt-8 flex flex-wrap gap-4 md:gap-8 justify-evenly items-center">
        <ProjectCard img={img1} heading="Mission smile 1k: Outdoor charity" />
        <ProjectCard img={img2} heading="Weekly excursions" />
        <ProjectCard img={img3} heading="Monthly public awareness" />
      </div>
    </div>
  );
};

export default Project;
