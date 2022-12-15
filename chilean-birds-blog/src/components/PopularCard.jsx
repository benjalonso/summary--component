import React from "react";
import { BsFillBookmarkFill } from "react-icons/bs";

const PopularCard = () => {
  return (
    <div className=" h-30 w-64 mx-5 gap-6 shrink-0 snap-always rounded-lg relative group/item cursor-pointer">
      <img
        className="rounded-lg object-cover"
        src="https://i.pinimg.com/564x/85/aa/19/85aa19e8833ba85599f89ae9ebaf5357.jpg"
        alt="image_card"
      />
      <BsFillBookmarkFill className="absolute top-2 left-56 text-green-400 text-[15px] dark:text-slate-500 hover:text-green-600 dark:hover:text-slate-900  invisible group-hover/item:visible transition ease-in-out delay-300   hover:scale-125  duration-300" />
      <span className="absolute top-28 left-4 text-green-50 text-[12px] opacity-75">
        Scelorchilus rubecula
      </span>
      <p className="absolute top-32 left-4 text-green-50 opacity-75">Chucao</p>
    </div>
  );
};

export default PopularCard;
