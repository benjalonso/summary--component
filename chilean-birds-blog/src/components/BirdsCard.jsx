import React, { useContext } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { ContentContext } from "./App";
import BirdModal from "./BirdModal.jsx";

const BirdsCard = ({ img, spanish, latin, full, thumbnail, data }) => {
  const { setModal } = useContext(
    ContentContext,
    (prev, next) => prev.modal !== next.modal
  );

  const handleModal = () => {
    setModal("block");
  };
  return (
    <>
      <BirdModal
        main={img}
        full={full}
        thumbnail={thumbnail}
        spanish={spanish}
        data={data}
      />

      <div
        onClick={handleModal}
        className="font-semibold dark:font-normal h-28 w-40 mx-5 my-5 gap-2 shrink-0 snap-always rounded-lg relative group/item cursor-pointer"
      >
        <div className="rounded-lg overflow-hidden h-full w-full">
          <img
            className="rounded-lg object-cover h-full w-full"
            src={img}
            alt="image_card"
          />
        </div>
        <BsFillBookmarkFill className="absolute top-2 left-[125px] text-green-400 dark:text-slate-500 text-[15px] hover:text-green-600 dark:hover:text-slate-900  invisible group-hover/item:visible transition  ease-in-out delay-300   hover:scale-125" />
        <span className="absolute top-[6,5rem] left-2 text-teal-700 text-[12px] dark:text-slate-50 ">
          {latin}
        </span>
        <p className="absolute top-[125px] left-2 text-teal-800 text-sm dark:text-slate-50">
          {spanish}
        </p>
      </div>
    </>
  );
};

export default BirdsCard;
