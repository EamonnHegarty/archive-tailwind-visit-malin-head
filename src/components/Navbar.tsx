import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

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
        <h1 className={logo ? "hidden" : "block"}>MALIN HEAD</h1>
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Activities</li>
        <li>Destinations</li>
        <li>Blog</li>
      </ul>

      <div className="hidden md:flex">
        <BiSearch className="mr-2" size={20} />
        <BsPerson size={20} />
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
          <h1 className="border-b">MALIN HEAD</h1>
          <li className="border-b">Home</li>
          <li className="border-b">Activities</li>
          <li className="border-b">Destinations</li>
          <li className="border-b">Blog</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
