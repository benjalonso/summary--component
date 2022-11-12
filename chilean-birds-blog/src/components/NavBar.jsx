import React from "react";
import { GiHummingbird } from "react-icons/gi";
import { MdWbSunny } from "react-icons/md";
import { BsFillCloudSunFill } from "react-icons/bs";
import { BsFillCloudRainHeavyFill } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

export const NavBar = () => {
  return (
    <>
      <nav className="bg-green-800">
        <h1 className="text-green-50 py-2 ml-10 text-3xl">Chilean Birds</h1>
      </nav>
      <nav className="py-2 bg-green-600 grid grid-cols-3 ">
        <GiHummingbird className=" hover: mx-auto text-teal-900 text-3xl  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-green-200 duration-30" />
        <div className="grid grid-cols-4 gap-4 ">
          <MdWbSunny className="text-green-50 text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-green-200 duration-30" />
          <BsFillCloudSunFill className="text-green-50 text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-green-200 duration-30" />
          <BsFillCloudRainHeavyFill className="text-green-50 text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-green-200 duration-30" />
          <BsFillBookmarkFill className="text-green-50 text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-green-200 duration-30" />
        </div>
        <FaUserAlt className="text-green-50 text-2xl mx-auto  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-green-200 duration-30" />
      </nav>
      <div className="grid">
        <input type="text" placeholder="Search" className="mx-10 " />
      </div>
    </>
  );
};

export default NavBar;
