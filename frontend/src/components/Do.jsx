import Docard from "./Docard";

import doData from "./../data/doData";

const Do = () => {
  return (
    <div className="max-w-[1800px] mx-auto">
      <h5 className="uppercase font-roboto text-[#1D2130] font-bold text-2xl max-sm:text-sm md:text-2xl flex gap-8 items-center 2xl:text-4xl mb-4">
        <div className="w-28 h-1 max-sm:w-11 bg-[#1D2130]"></div>what we do
      </h5>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-row justify-items-center xl:my-8">
        {doData.map((data, index) => (
          <Docard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Do;
