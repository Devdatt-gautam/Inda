// eslint-disable-next-line react/prop-types
const About = ({ img1, img2, img3, img4 }) => {
  return (
    <>
      {/* about data */}
      <div className="max-lg:px-8 max-lg:py-10 flex-1 lg:pl-16 2xl:pl-0">
        <div className="flex-1">
          <h5 className="uppercase font-roboto text-[#1D2130] font-bold text-2xl max-sm:text-lg flex gap-8 items-center 2xl:text-4xl">
            <div className="w-28 h-1 bg-[#1D2130]"></div>Who we are
          </h5>
          <h2 className="uppercase text-[#D62C2C] text-[2.4rem] max-sm:text-[2rem] font-bold my-8 2xl:text-[4.8rem]">
            About
          </h2>
        </div>
        <p className="font-normal text-sm leading-6 text-[#525560] max-lg:text-justify 2xl:text-2xl 2xl:leading-10">
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
      <div className="max-lg:px-[10%]  max-lg:py-8 flex-1">
        <div className="flex justify-start items-end width-full">
          <img
            src={img1}
            alt="collage-image"
            loading="lazy"
            className="w-[50%] aspect-[1.9] relative z-10 rounded-lg lg:w-[60%]"
          />

          <img
            src={img2}
            alt="collage-image"
            loading="lazy"
            className="w-[25%] aspect-[.8]  translate-x-[2.5%] translate-y-[-25%] relative z-10 rounded-lg lg:w-[32%] lg:translate-x-[-3.5%]"
          />
        </div>
        <div className="flex justify-end items-start">
          <img
            src={img3}
            alt="collage-image"
            loading="lazy"
            className="w-[22.5%] aspect-[0.9]  translate-y-[8%] relative z-10 translate-x-[-5%] rounded-lg lg:translate-x-[10%] lg:translate-y-[2%] lg:w-[30.5%]"
          />

          <img
            src={img4}
            alt="collage-image"
            loading="lazy"
            className="w-[51%] aspect-[1.98]  translate-x-[-30%] translate-y-[-35%] relative z-1 rounded-lg lg:w-[60%] lg:translate-x-[-15%]"
          />
        </div>
      </div>
    </>
  );
};

export default About;
