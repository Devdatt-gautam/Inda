import { useState } from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import hamburger from "../assets/hamburger.png";
const Navbar = () => {
  const [visibility, setVisibility] = useState("hidden");
  const visibilityToggle = () => {
    if (visibility === "hidden") {
      setVisibility("");
    } else {
      setVisibility("hidden");
    }
  };
  return (
    <header
      className="flex justify-between items-center  w-full  overflow-x-hidden overflow-y-visible  "
      onClick={visibilityToggle}
    >
      <Link to="/">
        <img
          src={logo}
          alt="INDA logo"
          className="w-[250px]  max-md:w-[170px]  "
        />
      </Link>
      <nav
        className={`block max-lg:${visibility}     max-lg:absolute top-[5rem] right-0 max-lg:w-[80vw]  max-lg:bg-white max-lg:px-16 max-lg:py-16 z-[100] `}
      >
        <ul className="flex items-center gap-10 max-lg:gap-6 capitalize font-bold lg:text-xl  max-lg:flex-col max-lg:items-start ">
          <li className="hover:text-gray-500">
            <Link to="/">home</Link>
          </li>
          <li className="hover:text-gray-500">
            <Link to="/about-us">about us</Link>
          </li>
          <li className="hover:text-gray-500">
            <Link to="/our-projects">our projects</Link>
          </li>
          <li className="hover:text-gray-500">
            <Link to="/live-events">live events</Link>
          </li>
          <li className="hover:text-gray-500">
            <Link to="/teams">teams</Link>
          </li>
          <li className="hover:text-gray-500">
            <Link to="/contact-us">contact us</Link>
          </li>
          <li className="hover:text-gray-500">
            <Link to="/contact-us">
              {" "}
              <button className="bg-black text-white px-8 py-3 text-xl capitalize max-lg:text-sm max-lg:px-4 max-lg:py-1 hover:text-gray-300 lg:hidden">
                join us
              </button>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-2">
        <button className="bg-black text-white px-8 py-3 text-xl capitalize max-lg:text-sm max-lg:px-4 max-lg:py-1 hover:text-gray-300 max-lg:hidden">
          join us
        </button>
        <button onClick={visibilityToggle}>
          <img
            src={hamburger}
            alt="menu"
            className="lg:hidden w-[38px] h-[38px]"
          />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
