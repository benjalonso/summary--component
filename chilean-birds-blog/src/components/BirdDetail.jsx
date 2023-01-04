import React from "react";
import { ContentContext } from "./App";
import { useContext, useState } from "react";

const BirdDetail = ({ main, full, thumbnail, spanish = "machucao" }) => {
  const [index, setIndex] = useState(0);
  const { modal, setModal } = useContext(ContentContext);
  const images = [main, full, thumbnail];

  const handleModal = () => {
    setModal("hidden");
  };
  console.log(images);
  return (
    <>
      <div
        className={` fixed top-0 bottom-0 left-0 right-0 z-10 hidden md:max-3xl:${modal}`}
      >
        <div className="bg-green-100 dark:bg-slate-200 z-20 absolute  w-screen h-screen  opacity-25 "></div>
        <div className="w-3/5 md:h-[55vh] lg:max-3xl:h-[67vh] dark:bg-slate-900 bg-green-50 border dark:border-slate-200 border-green-600 absolute z-50 top-[20vh] left-[22vw] rounded-md">
          <span
            onClick={handleModal}
            className="m-2 mr-4 text-xl grid place-items-end dark:text-slate-50 absolute right-0 cursor-pointer"
          >
            X
          </span>
          <div className="h-3/5 grid grid-cols-4 mt-5  mr-10">
            <div className="w-5/6 h-full mx-auto col-span-3 overflow-hidden">
              <img
                className="w-full h-full"
                src={images[index]}
                alt="imagen detalle de aves"
              />
            </div>

            <div className="col-span-1 grid-rows-3 gap-1 h-4/5 w-4/5">
              {images.map((img, i) => (
                <div
                  className="relative overflow-hidden cursor-pointer "
                  onClick={() => {
                    setIndex(i);
                  }}
                >
                  {/* <span className="w-full bg-green-200 h-full absolute"></span> */}
                  <img
                    className="h-full m-auto mb-3 w-full "
                    src={img}
                    key={img}
                    alt="imagen detalle de aves"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className=" md:mt-20 lg:max-3xl:mt-24 w-fit mx-auto">
            <button className="mx-auto border dark:text-slate-50 dark:bg-slate-500 bg-green-700 p-1 lg:max-3xl:p-2 lg:max-3xl:text-xl rounded-md text-green-50 ">{`More of ${spanish}`}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BirdDetail;
