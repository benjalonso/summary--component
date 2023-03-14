import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Square from "./Square.jsx";

const Board = () => {

  let array = Array(9).fill(null);
  const [squares,setSquares] = React.useState(Array(9).fill(null))
  const [isNext, setIsNext] = useState(true);
  
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };
  
  const putTheValue = (index) => {
    if(calculateWinner(squares) || squares[index])return
    
    squares[index] = isNext ? 'X':'O'
    setSquares(squares)
    setIsNext((prevIsNext) => !prevIsNext);

    
  };

  const winner = calculateWinner(squares)
  let status
  
  if(winner) status = `Winner ${winner}`
  else(status = `Its ${isNext ? "X" : "O"} turn`)

  return (
    <>
      <h1 className="text-center m-7 text-[3rem]">Tic Tac Toe</h1>

      <div>
        <h2 className="text-center text-[2rem]">
          {status}
        </h2>
        <button class="bg-sky-600 hover:bg-sky-800 rounded-full px-3 p-1 my-1 grid place-content-center mx-auto">
          <Link className="h-full w-full" to={"/"}>
            Start Over
          </Link>
        </button>
      </div>
      <br />
      <br />
      <div class=" mx-72 grid grid-rows-3 grid-flow-col gap-4 ">
        <Square
          value={squares[0]}
          onClick={() => putTheValue(0)}
        />
        <Square
          value={squares[1]}
          onClick={() => putTheValue(1)}
        />
        <Square
          value={squares[2]}
          onClick={() => putTheValue(2)}
        />
        <Square
          value={squares[3]}
          onClick={() => putTheValue(3)}
        />
        <Square
          value={squares[4]}
          onClick={() => putTheValue(4)}
        />
        <Square
          value={squares[5]}
          onClick={() => putTheValue(5)}
        />
        <Square
          value={squares[6]}
          onClick={() => putTheValue(6)}
        />
        <Square
          value={squares[7]}
          onClick={() => putTheValue(7)}
        />
        <Square
          value={squares[8]}
          onClick={() => putTheValue(8)}
        />
      </div>
    </>
  );
};

export default Board;
