import React, { useRef } from "react";
import Ships from "./Ships";
import Square from "./Square";
import { useEffect } from "react";
import { useState } from "react";
import { useId } from "react";
export const Table = () => {
  const [hostBoard, setHostBoard] = useState(new Array(100).fill(0));
  const [enemyBoard, setEnemyBoard] = useState(null);
  let neutral = "bg-sky-300";
  let miss = "bg-sky-100";
  let hit = "bg-red-300";
  let table = [];
  let width = 10;
  let randomStart = Math.abs(Math.floor(Math.random() * 100))
  // console.log(randomStart)

  useEffect(() => {
    for (let i = 0; i < width * width; i++)
      if (hostBoard[randomStart] == 1) {
        table.push(<Square color={miss} id={i} key={i} />);
        // return true;
      } else if (hostBoard[randomStart] == 2) {
        table.push(<Square color={hit} id={i} key={i} />);
        // return false;
      } else {
        table.push(<Square color={neutral} id={i} key={i} />);
      }
    setHostBoard(table);
  }, []);

  function handleClick(uiGrid) {}

  function renderColors(x, y, grid) {
    if (grid[y][x] == 1) {
      table.push(<Square color={hit} />);
      // return true;
    } else if (grid[y][x] == 2) {
      table.push(<Square color={miss} />);
      // return false;
    } else {
      table.push(<Square color={neutral} />);
    }
    console.log(table);
  }

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
        {/* <h3 className="text-center text-xl">Your turn</h3> */}
      </div>
      <div className="grid grid-cols-2 gap-20">
        <div className="grid grid-cols-10">{hostBoard}</div>
        <div className="grid grid-cols-10 ">{enemyBoard}</div>
      </div>
      <Ships />
    </>
  );
};

export default Table;
