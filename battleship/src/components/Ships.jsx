import React from "react";

const Ships = () => {


  return (
    <div className="bg-slate-500 h-32 w-52 mt-10">
      <div className="m-1 flex flex-row" draggable={true}>
        <div className=" w-5 h-5 bg-green-200" id="destroyer-0"></div>
        <div className=" w-5 h-5 bg-green-200" id="destroyer-1"></div>
      </div>
      <div className="m-1 flex flex-row" draggable={true}>
        <div className=" w-5 h-5 bg-green-200" id="submarine-0"></div>
        <div className=" w-5 h-5 bg-green-200" id="submarine-1"></div>
        <div className=" w-5 h-5 bg-green-200" id="submarine-2"></div>
      </div>
      <div className="m-1 flex flex-row" draggable={true}>
        <div className=" w-5 h-5 bg-green-200" id="cruiser-0"></div>
        <div className=" w-5 h-5 bg-green-200" id="cruiser-1"></div>
        <div className=" w-5 h-5 bg-green-200" id="cruiser-2"></div>
      </div>
      <div className="m-1 flex flex-row" draggable={true}>
        <div className=" w-5 h-5 bg-green-200" id="battleship-0"></div>
        <div className=" w-5 h-5 bg-green-200" id="battleship-1"></div>
        <div className=" w-5 h-5 bg-green-200" id="battleship-2"></div>
        <div className=" w-5 h-5 bg-green-200" id="battleship-3"></div>
      </div>
      <div className="m-1 flex flex-row" draggable={true}>
        <div className=" w-5 h-5 bg-green-200" id="carrier-0"></div>
        <div className=" w-5 h-5 bg-green-200" id="carrier-1"></div>
        <div className=" w-5 h-5 bg-green-200" id="carrier-2"></div>
        <div className=" w-5 h-5 bg-green-200" id="carrier-3"></div>
        <div className=" w-5 h-5 bg-green-200" id="carrier-4"></div>
      </div>
    </div>
  );
};

export default Ships;
