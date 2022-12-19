import React from "react";

const BirdDetail = ({ spanish = "Chucao" }) => {
  return (
    <>
      <div className="relative hidden md:max-3xl:block ">
        <div className="bg-green-200 dark:bg-slate-200 z-40 absolute  w-screen h-screen opacity-25  "></div>
        <div className="w-3/5 h-[60vh] dark:bg-slate-900 bg-green-50 border dark:border-slate-200 border-green-600 absolute z-50 top-[20vh] left-[22vw] rounded-md">
          <span className="m-2 mr-4 text-xl grid place-items-end dark:text-slate-50 absolute right-0">
            X
          </span>
          <div className="h-3/5 grid grid-cols-4 mt-3  mr-10">
            <div className=" mx-auto col-span-3">
              <img
                className="w-full h-3/4"
                src="https://i.pinimg.com/564x/85/aa/19/85aa19e8833ba85599f89ae9ebaf5357.jpg"
                alt="imagen detalle de aves"
              />
            </div>

            <div className="col-span-1 grid-rows-3 gap-1 h-4/5 ">
            <div className="relative ">
              {/* <span className="w-full bg-green-200 h-full absolute"></span> */}
                <img
                  className="h-1/4 m-auto mb-3 w-3/4 object-cover"
                  src="https://i.pinimg.com/564x/85/aa/19/85aa19e8833ba85599f89ae9ebaf5357.jpg"
                  alt="imagen detalle de aves"
                />
              </div>
              <div>
                <img
                  className="h-1/4 m-auto mb-3 w-3/4 object-cover"
                  src="https://i.pinimg.com/564x/85/aa/19/85aa19e8833ba85599f89ae9ebaf5357.jpg"
                  alt="imagen detalle de aves"
                />
              </div>
              <div>
                <img
                  className="h-1/4 m-auto mb-3 w-3/4 object-cover"
                  src="https://i.pinimg.com/564x/85/aa/19/85aa19e8833ba85599f89ae9ebaf5357.jpg"
                  alt="imagen detalle de aves"
                />
              </div>
            
            </div>
          </div>
          <div className="grid lg:max-2xl:mt-20 ">
            <button className="mx-auto border dark:bg-slate-50 dark:bg-slate-500 bg-green-700 p-1 rounded-md text-green-50 ">{`More of ${spanish}`}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BirdDetail;
