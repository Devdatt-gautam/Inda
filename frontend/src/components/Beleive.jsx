import img1 from "../assets/beleif-1.png";
import img2 from "../assets/beleif-2.png";
const Beleive = () => {
  return (
    <div className="max-w-[1800px] mx-auto">
      <h5 className="uppercase font-roboto text-[#1D2130] font-bold text-2xl max-sm:text-sm md:text-2xl flex gap-8 items-center 2xl:text-4xl mb-2">
        <div className="w-28 h-1 max-sm:w-11 bg-[#1D2130]"></div>our beleif
      </h5>
      {/* heading description image */}
      <div className="flex flex-col justify-center gap-4 md:flex-row md:justify-between items-center">
        <div className="flex flex-col gap-4 flex-[2]">
          <h3 className="text-[#D62C2C] font-semibold text-lg max-md:text-center mb-2 leading-6 md:text-2xl uppercase tracking-widest flex items-center gap-4 2xl:text-3xl">
            <div className="w-3 h-3 bg-[#D62C2C] rounded-full"></div>
            Ideas can Change the World.
          </h3>
          <p className="text-[#525560] text-sm font-medium max-md:text-center max-w-xl mx-auto md:max-w-xl md:mx-0 px-8 lg:text-lg">
            We believe that ideas are more powerful than resources. The major
            push should be on nurturing ideas to counter the status quo.We are a
            network or experienced and dedicated professional who are ready to
            reimagine situations for the betterment of the local community.
          </p>
        </div>
        <div className="   flex-1 flex justify-end">
          <img src={img1} alt="beleif" className="w-full" />
        </div>
      </div>
      {/* heading description image */}
      <div className="flex flex-col justify-center gap-4 md:flex-row md:justify-between items-start  lg:my-12 my-8">
        <div className="flex flex-col gap-4 flex-[2] ">
          <h3 className="text-[#D62C2C] font-semibold text-lg max-md:text-center mb-2 leading-6 md:text-2xl uppercase tracking-widest flex items-center gap-4 2xl:text-3xl">
            <div className="w-3 h-3 bg-[#D62C2C] rounded-full "></div>
            Organizations Need to be Catalysts.{" "}
          </h3>
          <p className="text-[#525560] text-sm font-medium max-md:text-center max-w-xl mx-auto md:max-w-xl md:mx-0 px-8 lg:text-lg">
            The ideas can eventuate only if there are carriers who align with
            the purpose of bringing change by pushing the boundaries of comfort
            and unraveling. The complexities involved in addressing the issues
            of poverty and inequality. The organisations working with the
            community at the grassroots should not only engage with empathy but
            also co-create solutions, mobilise resources, design strategies and
            mange programs. The poverty and i net quality challenge as well as .
            The humanitarian crisis can be best addressed whe local
            organisations are equipped to navigate the professionally managed
            grants and programs. I the absence of such capacities, communities
            tend to.
          </p>
        </div>
        <div className="  flex-1 flex justify-end">
          <img src={img2} alt="beleif" className="max-md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default Beleive;
