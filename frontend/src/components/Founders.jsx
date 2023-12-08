import img1 from "../assets/founder-1.png";
import img2 from "../assets/founder-2.png";
import img3 from "../assets/founder-3.png";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Founders = () => {
  const founderDetails = [
    {
      name: "maleek Saeed",
      description:
        "Lorem Ipsum is simply dummy text of the typesetting industry. Lorem Ipsum has been the industry's standatext ever since when an unknown printer.",
    },
    {
      name: "Mamdouh Tello",
      description:
        "Lorem Ipsum is simply dummy text of the typesetting industry. Lorem Ipsum has been the industry's standatext ever since when an unknown printer.",
    },
    {
      name: "Sudarshan Thakur",
      description:
        "Lorem Ipsum is simply dummy text of the typesetting industry. Lorem Ipsum has been the industry's standatext ever since when an unknown printer.",
    },
  ];
  const [value, setValue] = useState(0);
  const [founderImg, setFounderImg] = useState(img1);
  useEffect(() => {
    const setval = () => {
      if (value === 1) {
        setFounderImg(img2);
        console.log(img2);
      } else if (value === 2) {
        setFounderImg(img3);
        console.log(img3);
      } else {
        setFounderImg(img1);
        console.log(img1);
      }
    };
    setval();
    const timer = setTimeout(() => {
      setValue((value + 1) % 3);
      console.log(value);
    }, 10000);
    return () => clearTimeout(timer);
  }, [value]);
  return (
    <div
      className="max-w-[1800px] mx-auto lg:min-h-screen
  "
    >
      <h5 className="uppercase font-roboto text-[#1D2130] font-bold text-2xl max-sm:text-sm md:text-2xl flex gap-8 items-center 2xl:text-4xl mb-2">
        <div className="w-28 h-1 max-sm:w-11 bg-[#1D2130]"></div>Our founders
      </h5>
      <div className="flex flex-col md:flex-row-reverse items-center">
        <div className="md:w-[60%] overflow-hidden flex">
          <AnimatePresence>
            <motion.img
              src={founderImg}
              key={founderImg}
              alt="founder-profile"
              className="w-full"
              initial={{ x: "100%" }}
              animate={{ x: "0%", transition: { delay: 1, duration: 1 } }}
              exit={{ x: "-100%" }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
        </div>
        <div className="flex flex-col gap-4 lg:gap-6 md:w-[40%]">
          <h2 className="text-[#1B2534] text-4xl lg:text-5xl capitalize font-extrabold">
            {founderDetails[value].name}
          </h2>
          <p className="font-open text-[#606060] text-lg 2xl:text-2xl max-w-[50ch]">
            {founderDetails[value].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Founders;
