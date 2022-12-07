import React, { useRef } from "react";
import Square from "./Square";

export const Table = ({ player, cpuBoard, setCpuBoard, gameWon, cpuShips }) => {

  const grid = () => {
    let table = [];
    for (let i = 0; i < 10; i++)
      for (let j = 0; j < 10; j++) {
        table.push(
          <Square
          cpuShips={cpuShips}
            key={`${j} ${i}`}
            coords={j + i * 10}
            board={player}
            cpuBoard={cpuBoard}
            setCpuBoard={setCpuBoard}
            gameWon={gameWon}
          />
        );
      }
    return table;
  };

  return (
    <>
      <div className="bg-slate-300 m-1 rounded">
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
      </div>
      <div className="grid grid-cols-2 gap-20">
        {/* <div className="grid grid-cols-10">{hostBoard}</div> */}
        <div className="grid grid-cols-10 ">{grid()}</div>
      </div>

    </>
  );
};

export default Table;
