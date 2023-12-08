// eslint-disable-next-line react/prop-types
const ProjectCard = ({ img, heading }) => {
  return (
    <div className="w-full max-w-[411px] aspect-[0.97] min-h-fit  overflow-hidden rounded-[2rem] relative sm:px-12 sm:pb-12 sm:pt-20 p-4 flex flex-col justify-between">
      <img
        src={img}
        alt="image"
        loading="lazy"
        className="object-cover object-center w-full inset-0 absolute z-[-1] "
      />
      <div>
        <h4 className="text-white font-bold sm:text-2xl text-xl sm:max-w-[20ch]">
          {heading}
        </h4>
        <p className="text-white font-normal sm:text-lg text-md sm:my-4 my-2 max-sm:leading-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros.
        </p>
      </div>
      <div>
        <button className="text-base max-sm:text-sm max-sm:px-6 max-sm:py-2 text-black bg-white px-8 py-3 capitalize hover:text-white hover:bg-black">
          learn more
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
