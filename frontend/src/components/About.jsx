// eslint-disable-next-line react/prop-types
const About = ({ img }) => {
  return (
    <>
      {/* about data */}
      <div className=" flex-1 ">
        <div className="">
          <h5 className="uppercase font-roboto text-[#1D2130] font-bold text-2xl max-sm:text-sm md:text-2xl flex gap-8 items-center 2xl:text-4xl">
            <div className="w-28 h-1 bg-[#1D2130]"></div>Who we are
          </h5>
          <h2 className="uppercase text-[#D62C2C] text-[2.4rem]  max-sm:text-xs font-bold md:my-8 my-2 2xl:text-[4.8rem] max-md:text-center">
            About
          </h2>
        </div>
        <p className="font-normal text-sm leading-6 text-[#525560] max-sm:font-semibold max-sm:leading-8 max-md:text-center max-sm:text-xl 2xl:text-2xl 2xl:leading-10">
          INDA was created by three young professionals, Malek Saeed, Mamdouh
          Tello, and Sudarshan Thakur, who were convinced that the critical gap
          for smaller charities is the lack of capacity to design projects,
          raise grants, and agility in managing programs. Even the intractable
          endemic poverty and humanitarian crisis can be better addressed if the
          local organizations and professionals have the capability to respond
          to the situation, rather than co-opted by the ideas of philanthropists
          alone.The idea to create INDA culminated as a part of the Changemakers
          Programme of the Enterprise Centre at the University of East Anglia,
          United Kingdom winning the &apos;Do It&apos; award. Malek Saeed,
          Mamdouh Tello, and Sudarshan Thakur believe that the problem faced by
          the world is immense, and young professionals need to come togetherto
          form a strong network to keep challenging the existing situation to
          find solutions with local organizations and professionals working at
          the cutting edge to bring change. They created INDA, to systematically
          enable organizations and their professionals to take up the challenge
          of the new era and find local and sustainable solutions.
        </p>
      </div>
      {/* about images */}
      <div className="flex-1">
        <img src={img} alt="Who we are" className="w-full" />
      </div>
    </>
  );
};

export default About;
