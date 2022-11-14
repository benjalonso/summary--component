import React from "react";
import { GiHummingbird } from "react-icons/gi";
import { MdWbSunny } from "react-icons/md";
import { BsFillCloudSunFill } from "react-icons/bs";
import { BsFillCloudRainHeavyFill } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { SlMagnifier } from "react-icons/sl";

export const NavBar = () => {


  return (
    <>
      <nav className="bg-green-800">
        <h1 className="text-green-50 py-2 ml-10 text-3xl">Chilean Birds</h1>
      </nav>
      <div className="md:max-2xl:flex md:max-2xl:flex-col md:max-2xl:w-[10vh] md:max-2xl:h-[80vh] md:max-2xl:absolute md:max-2xl:top-20 md:max-2xl:justify-evenly md:max-2xl: md:max-2xl:left-10 md:max-2xl:rounded   bg-green-600 grid grid-cols-3  ">
        <GiHummingbird
          id="sol"
          className="hover: mx-auto text-teal-900 text-3xl  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-green-200 duration-30"
        />
        <div className="grid grid-cols-4 gap-4 md:max-2xl:flex md:max-2xl:flex-col md:max-2xl:mx-auto md:max-2xl:justify-around md:max-2xl:gap-9 ">
          <MdWbSunny className=" text-green-50 text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-green-200 duration-30" />
          <BsFillCloudSunFill className="text-green-50 text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-green-200 duration-30" />
          <BsFillCloudRainHeavyFill className="text-green-50 text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-green-200 duration-30" />
          <BsFillBookmarkFill className="text-green-50 text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-green-200 duration-30" />
        </div>
        <FaUserAlt className="text-green-50 text-2xl mx-auto  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-green-200 duration-30" />
      </div>
      <div className=" my-2 grid grid-cols-8 md:max-2xl:my-4 md:max-2xl:ml-8">
        <SlMagnifier className="col-start-1 col-end-2 ml-auto mt-1 mx-1 text-teal-900" />
        <input
          type="text"
          placeholder="Search for Chilean birds"
          className="col-start-2 col-end-5 mr-10 bg-green-50 rounded-md border"
        />
      </div>
    </>
  );
};

export default NavBar;
