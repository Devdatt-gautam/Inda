/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Docard = ({ data }) => {
  return (
    <div className=" md:max-w-md">
      <div className="flex gap-4 items-end">
        <img src={data.icon} alt={data.heading} className="w-5 md:w-7  " />
        <h4 className="font-bold text-lg capitalize text-[#1D2130]">
          {data.heading}
        </h4>
      </div>
      <div className="pl-9 md:pl-11 text-[#525560] text-sm font-medium">
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default Docard;
