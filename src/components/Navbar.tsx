import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute text-white z-10">
      <div>
        <Link to="/" className={logo ? "hidden" : "block"}>
          MALIN HEAD
        </Link>
      </div>
      <ul className="hidden md:flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/activities">Activities</Link>
        </li>
        <li>
          <Link to="/destinations">Destinations</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
      <div className="hidden md:flex">
        <BiSearch className="mr-2" size={20} />
      </div>
      {/* HAMBURGER */}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>
      {/* MOBILE MENU DROPDOWN */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute text-black left-0 top-0 w-full bg-gray-100 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <h1>
            <Link to="/">Home</Link>
          </h1>
          <li>
            <Link to="/">Activities</Link>
          </li>
          <li>
            <Link to="/">Destinations</Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
