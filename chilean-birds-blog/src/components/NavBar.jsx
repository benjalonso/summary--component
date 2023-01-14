import React from "react";
import { GiHummingbird } from "react-icons/gi";
import { MdWbSunny } from "react-icons/md";
import { BsFillCloudSunFill } from "react-icons/bs";
import { BsFillCloudRainHeavyFill } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { SlMagnifier } from "react-icons/sl";
import getBirdsBySearching from "../api/searchByName.js";
import { useQuery } from "@tanstack/react-query";
import { useState, useContext, useMemo } from "react";
import { ContentContext } from "./App";
import BirdsCard from "./BirdsCard";
import TituloPagina from "./TituloPagina.jsx";

export const NavBar = () => {
  const handleDarkMode = () => {
    let html = document.getElementById("htmltag");
    if (!html.classList.contains("dark")) {
      html.classList.add("dark");
    } else if (html.classList.contains("dark")) {
      html.classList.remove("dark");
    }
  };
  const { setContent, setAuthModal, authModal } = useContext(
    ContentContext,
    (prev, next) => prev.content !== next.content
  );

  const [name, setName] = useState("");

  const { isLoading, data, isError, error, isSuccess } = useQuery({
    queryKey: ["search", name],
    queryFn: () => getBirdsBySearching(name),
    keepPreviousData: true,
  });

  const handleSearch = async () => {
    setContent(
      await data?.birds?.map((b) => {
        return (
          <BirdsCard
            key={b._id}
            img={b.main}
            spanish={b.spanish}
            latin={b.latin}
            full={b.full}
            thumbnail={b.thumbnail}
            data={{ ...data }}
          />
        );
      })
    );
  };
  const handleRender = useMemo(() => handleSearch(), [data]);

  const displayData = async () => {
    if (isLoading) <div className="text-5xl"> Loading</div>;
    else if (isSuccess) {
      handleRender;
    } else if (isError) <div className="text-5xl"> Error: {error.message}</div>;
  };

  const handleChange = (e) => {
    if (e.key === "Enter") {
      setName(e.target.value);
    }
  };

  const handleAuth = () => {
    setAuthModal("block");
  };

  window.addEventListener("load", displayData());

  return (
    <>
      <div className="sticky top-0 z-10">
        <nav className="bg-green-800 dark:bg-slate-800 grid grid-flow-col justify-between z-30">
          <TituloPagina />
          <label className="switch">
            <input
              type="checkbox"
              onClick={() => {
                handleDarkMode();
              }}
            />
            <span className="slider "></span>
          </label>
        </nav>
        <div className="py-2 items-center md:max-2xl:flex md:max-2xl:flex-col md:max-2xl:w-[10vh] md:max-2xl:h-[80vh] md:max-2xl:absolute md:max-2xl:top-20 md:max-2xl:justify-between md:max-2xl: md:max-2xl:left-[35px] md:max-2xl:rounded   bg-green-600 dark:bg-slate-700 grid grid-cols-6  ">
          <div className="col-span-5 grid grid-cols-5 md:max-2xl:grid-cols-2 md:max-2xl:gap-2  md:max-2xl:mt-2 md:max-2xl:place-items-center">
            <GiHummingbird
              id="sol"
              className="col-span-1 place-content-center ml-10 text-teal-900 dark:text-indigo-500 text-3xl  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  dark:hover:text-slate-300 hover:text-green-200 duration-30 cursor-pointer"
            />
            <div className="col-span-4 place-content-center gap-4 grid grid-flow-col md:max-2xl:flex md:max-2xl:flex-col md:max-2xl:mx-auto md:max-2xl:justify-around md:max-2xl:gap-3 ">
              <MdWbSunny className=" text-green-50 dark:text-slate-50 dark:hover:text-slate-300 text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-slate-200 duration-30 cursor-pointer" />
              <BsFillCloudSunFill className="text-green-50 dark:text-slate-50 dark:hover:text-slate-300 text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-slate-200 duration-30 cursor-pointer" />
              <BsFillCloudRainHeavyFill className=" text-green-50 dark:text-slate-50 dark:hover:text-slate-300 text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-slate-200 duration-30 cursor-pointer" />
              <div className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-30">
                <BsFillBookmarkFill className="text-green-50 dark:text-slate-50 dark:hover:text-slate-300 text-2xl  hover:text-slate-200 cursor-pointer" />
                <span className="absolute h-3 w-3 rounded-full top-[-4px] right-0 bg-red-600 dark:bg-indigo-500 text-slate-50 "></span>
              </div>
            </div>
          </div>
          <FaUserAlt
            onClick={() => {
              handleAuth("block");
            }}
            className="text-green-50 dark:text-slate-50 dark:hover:text-slate-300 text-2xl mx-auto  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-green-200 duration-30 cursor-pointer"
          />
        </div>
      </div>
      <div className="group my-2 grid grid-cols-8 md:max-2xl:my-4 md:max-2xl:ml-8 relative">
        <SlMagnifier className="col-start-1 col-end-2 ml-auto mt-1 mx-1 text-teal-900  dark:text-slate-50 transition ease-in-out delay-150   focus:scale-110  duration-300 absolute lg:max-2xl:left-[163px] md:left-[125px] left-[75px] z-10 group-hover:-translate-x-3" />
        <input
          type="text"
          name="name"
          value={name.name}
          onKeyDown={handleChange}
          placeholder="Search for Chilean birds"
          className="col-start-2 col-end-5 mr-10 dark:bg-slate-900 dark:border-0 dark:text-slate-50 bg-green-50 rounded-md border transition ease-in-out delay-150   group-hover:scale-110  duration-300 pl-10 lg:max-2xl:pl-7"
        />
      </div>
    </>
  );
};

export default NavBar;
