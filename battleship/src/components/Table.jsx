import React from "react";
import Square from "./Square";
import Ships from "./Ships";

export const Table = () => {

const table = new Array(100).fill(null);
let hostTable = table.fill(<Square/>)
let enemysTable = table.fill(<Square/>)
let directions = ['x', 'y']
function generate(direction, ship, squares) {
  let randomDirection = dir[Math.floor(Math.random() * direction.length)];
  let current = ship.directions[randomDirection];
}

  return (
    <>
      <div className="bg-slate-300 m-2 rounded">
        <div className="grid grid-cols-3 place-content-center">
          <button className="border border-cyan-800 m-2" id="start">
            Start Game
          </button>
          <button className="border border-cyan-800 m-2" id="randomize">
            Randomize Ships
          </button>
          <button className="border border-cyan-800 m-2" id="reset">
            Reset Game
          </button>
        </div>
        <h3 className="text-center text-xl">Your turn</h3>
        <h4 className="text-center ">
          <span id="host-score">0</span > - <span id="guest-score">0</span>
        </h4>
      </div>
      <div className="grid grid-cols-2 gap-20">
        <div className="grid grid-cols-10">{hostTable}</div>
        <div className="grid grid-cols-10 ">{enemysTable}</div>
      </div>
      <Ships />
    </>
  );
};

export default Table;
