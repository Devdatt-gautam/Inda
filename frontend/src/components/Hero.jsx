import img1 from "../assets/home-bg1.png";
import img2 from "../assets/home-bg2.png";
import img3 from "../assets/home-bg3.png";
import img4 from "../assets/home-bg4.png";
import { useEffect, useState } from "react";
const Hero = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setValue((value + 1) % 4);
      console.log(value);
    }, 10000);
    return () => clearTimeout(timer);
  }, [value]);

  if (value === 0) {
    return (
      <div className="flex max-md:flex-col-reverse md:items-center max-md:justify-end max-lg:mt-4 md:justify-center lg:min-h-[80vh] w-full md:px-6 ">
        <h3
          className="text-[3.5rem] md:w-[40%] max-sm:text-[2rem]
          max-lg:text-[2.75rem]
           max-md:mx-2"
        >
          Inclusive care for children with{" "}
          <span className="text-[#DA8A43]">special needs</span>
        </h3>
        <div className="md:w-[60%] max-md:mx-2 ">
          <img
            src={img1}
            alt="image"
            className="rounded-[3rem] w-full  border-black border-2 aspect-video"
          />
        </div>
      </div>
    );
  } else if (value === 1) {
    return (
      <div className="flex max-md:flex-col-reverse md:items-center max-md:justify-end max-lg:mt-4 md:justify-center lg:min-h-[80vh] w-full md:px-6">
        <h3
          className="text-[3.5rem] md:w-[40%] max-sm:text-[2rem]
          max-lg:text-[2.75rem]
           max-md:mx-2"
        >
          Mobilizing strategic and new flows of
          <span className="text-[#88B607]"> Impact Investment</span>
        </h3>
        <div className="md:w-[60%] max-md:mx-2 ">
          <img
            src={img2}
            alt="image"
            className="rounded-[3rem] w-full  border-black border-2 aspect-video"
          />
        </div>
      </div>
    );
  } else if (value === 2) {
    return (
      <div className="flex max-md:flex-col-reverse md:items-center max-md:justify-end max-lg:mt-4 md:justify-center lg:min-h-[80vh] w-full md:px-6">
        <h3
          className="text-[3.5rem] md:w-[40%] max-sm:text-[2rem]
          max-lg:text-[2.75rem]
           max-md:mx-2"
        >
          Solving the world&apos;s{" "}
          <span className="text-[#830598]">biggest problems</span>
        </h3>
        <div className="md:w-[60%] max-md:mx-2 ">
          <img
            src={img3}
            alt="image"
            className="rounded-[3rem] w-full  border-black border-2 aspect-video"
          />
        </div>
      </div>
    );
  } else if (value === 3) {
    return (
      <div className="flex max-md:flex-col-reverse md:items-center max-md:justify-end max-lg:mt-4 md:justify-center lg:min-h-[80vh] w-full md:px-6">
        <h3
          className="text-[3.5rem] md:w-[40%] max-sm:text-[2rem]
          max-lg:text-[2.75rem]
           max-md:mx-2"
        >
          Supporting entrepreneurs as the engine to{" "}
          <span className="text-[#234115]">reduce poverty</span>
        </h3>
        <div className="md:w-[60%] max-md:mx-2 ">
          <img
            src={img4}
            alt="image"
            className="rounded-[3rem] w-full  border-black border-2 aspect-video"
          />
        </div>
      </div>
    );
  }
};

export default Hero;
