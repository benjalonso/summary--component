import React from "react";
import Square from "./Square";
import Ships from "./Ships";
export const Table = () => {
  const table = new Array(100).fill(null);

  return (
    <>
      <div>
        <button id="start">Start Game</button>
        <button id="randomize">Randomize Ships</button>
        <button id="reset">Reset Game</button>
        <h3>Your turn</h3>
        <h4>
          <span id="host-score">0</span> - <span id="guest-score">0</span>
        </h4>
      </div>
      <div className="grid grid-cols-2 gap-20">
        <div className="grid grid-cols-10">{table.fill(<Square />)}</div>
        <div className="grid grid-cols-10 ">{table.fill(<Square />)}</div>
      </div>
      <Ships />
    </>
  );
};

export default Table;
