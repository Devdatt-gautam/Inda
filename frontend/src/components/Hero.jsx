import img1 from "../assets/home-bg1.png";
import img2 from "../assets/home-bg2.png";
import img3 from "../assets/home-bg3.png";
import img4 from "../assets/home-bg4.png";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const Hero = () => {
  const [value, setValue] = useState(0);
  const [heroImg, setHeroImg] = useState(img1);
  useEffect(() => {
    const setval = () => {
      if (value === 1) {
        setHeroImg(img2);
        console.log(img2);
      } else if (value === 2) {
        setHeroImg(img3);
        console.log(img3);
      } else if (value === 3) {
        setHeroImg(img4);
        console.log(img4);
      } else {
        setHeroImg(img1);
        console.log(img1);
      }
    };
    setval();
    const timer = setTimeout(() => {
      setValue((value + 1) % 4);
      console.log(value);
    }, 10000);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="flex max-md:flex-col-reverse md:items-center max-md:justify-end max-lg:mt-4 md:justify-center lg:min-h-[80vh] w-full  ">
      {value === 0 && (
        <motion.h3
          className="text-[3.5rem] md:w-[40%] max-sm:text-[2rem]
          max-lg:text-[2.75rem]
            2xl:text-[5.25rem]  font-bold max-md:text-center max-md:my-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Inclusive care for children with{" "}
          <span className="text-[#DA8A43]">special needs</span>
        </motion.h3>
      )}
      {value === 1 && (
        <motion.h3
          className="text-[3.5rem] md:w-[40%] max-sm:text-[2rem]
          max-lg:text-[2.75rem]
            2xl:text-[5.25rem]  font-bold max-md:text-center max-md:my-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Mobilizing strategic and new flows of
          <span className="text-[#88B607]"> Impact Investment</span>
        </motion.h3>
      )}
      {value === 2 && (
        <motion.h3
          className="text-[3.5rem] md:w-[40%] max-sm:text-[2rem]
          max-lg:text-[2.75rem]
            2xl:text-[5.25rem]  font-bold max-md:text-center max-md:my-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Solving the world&apos;s{" "}
          <span className="text-[#830598]">biggest problems</span>
        </motion.h3>
      )}
      {value === 3 && (
        <motion.h3
          className="text-[3.5rem] md:w-[40%] max-sm:text-[2rem]
          max-lg:text-[2.75rem]
            2xl:text-[5.25rem]  font-bold max-md:text-center max-md:my-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Supporting entrepreneurs as the engine to{" "}
          <span className="text-[#234115]">reduce poverty</span>
        </motion.h3>
      )}
      <motion.div className="md:w-[60%] max-md:mx-2 rounded-[3rem] border-black border-2 aspect-video flex overflow-hidden">
        <AnimatePresence>
          <motion.img
            src={heroImg}
            key={heroImg}
            initial={{ opacity: 0, x: "100%" }}
            animate={{
              opacity: 1,
              x: "0%",
              transition: { delay: 0.4, duration: 0.5 },
            }}
            exit={{ opacity: 1, x: "-100%", transition: { duration: 0.5 } }}
            transition={{
              // x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            alt="image"
            className=" w-full "
          />
        </AnimatePresence>
      </motion.div>
    </div>
  );
  // } else if (value === 1) {
  //   return (
  //     <div className="flex max-md:flex-col-reverse md:items-center max-md:justify-end max-lg:mt-4 md:justify-center lg:min-h-[80vh] w-full md:px-6">
  //       <h3
  //         className="text-[3.5rem] md:w-[40%] max-sm:text-[2rem]
  //         max-lg:text-[2.75rem]
  //          max-md:mx-2 2xl:text-[6.25rem]"
  //       >
  //
  //       </h3>
  //       <div className="md:w-[60%] max-md:mx-2 ">
  //         <img
  //           src={img2}
  //           alt="image"
  //           className="rounded-[3rem] w-full  border-black border-2 aspect-video"
  //         />
  //       </div>
  //     </div>
  //   );
  // } else if (value === 2) {
  //   return (
  //     <div className="flex max-md:flex-col-reverse md:items-center max-md:justify-end max-lg:mt-4 md:justify-center lg:min-h-[80vh] w-full md:px-6">
  //       <h3
  //         className="text-[3.5rem] md:w-[40%] max-sm:text-[2rem]
  //         max-lg:text-[2.75rem]
  //          max-md:mx-2 2xl:text-[6.25rem]"
  //       >
  //         Solving the world&apos;s{" "}
  //         <span className="text-[#830598]">biggest problems</span>
  //       </h3>
  //       <div className="md:w-[60%] max-md:mx-2 ">
  //         <img
  //           src={img3}
  //           alt="image"
  //           className="rounded-[3rem] w-full  border-black border-2 aspect-video"
  //         />
  //       </div>
  //     </div>
  //   );
  // } else if (value === 3) {
  //   return (
  //     <div className="flex max-md:flex-col-reverse md:items-center max-md:justify-end max-lg:mt-4 md:justify-center lg:min-h-[80vh] w-full md:px-6">
  //       <h3
  //         className="text-[3.5rem] md:w-[40%] max-sm:text-[2rem]
  //         max-lg:text-[2.75rem]
  //          max-md:mx-2 2xl:text-[6.25rem]"
  //       >
  //         Supporting entrepreneurs as the engine to{" "}
  //         <span className="text-[#234115]">reduce poverty</span>
  //       </h3>
  //       <div className="md:w-[60%] max-md:mx-2 ">
  //         <img
  //           src={img4}
  //           alt="image"
  //           className="rounded-[3rem] w-full  border-black border-2 aspect-video"
  //         />
  //       </div>
  //     </div>
  //   );
};

export default Hero;
