import React from "react";
import { BsFillBookmarkFill } from "react-icons/bs";


const BirdsCard = () => {
  return (
    <div className="font-semibold dark:font-normal h-28 w-40 mx-5 my-5 gap-2 shrink-0 snap-always rounded-lg relative group/item ">
      <img
        className="rounded-lg object-cover"
        src="https://i.pinimg.com/564x/85/aa/19/85aa19e8833ba85599f89ae9ebaf5357.jpg"
        alt="image_card"
      />
      <BsFillBookmarkFill className="absolute top-2 left-36 text-green-50 dark:text-slate-50 text-[15px] hover:text-green-600 opacity-75 invisible  group-hover/item:visible transition ease-in-out delay-150   group-active:scale-125  duration-300" />
      <span className="absolute top-[6,5rem] left-2 text-teal-700 text-[12px] dark:text-slate-50 ">
        Scelorchilus rubecula
      </span>
      <p className="absolute top-[118px] left-2 text-teal-800 text-sm dark:text-slate-50">Chucao</p>
    </div>
  );
};

export default BirdsCard;
