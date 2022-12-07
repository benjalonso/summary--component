import React from "react";

const Square = ({
  board,
  cords,
  color,
  board,
  cpuBoard,
  setCpuBoard,
  gameWon,
  gameStarted,
  currentPlayer
}) => {
  const atack = () => {
    if (board === "Computer") {
      if (cpuBoard.includes(coords)) return;
      setCpuBoard((currentBoard) => [...currentBoard, coords]);
    }
  };

  const handleClick = (e) => {
    if (gameWon) return;
    if (currentPlayer === "Computer") return;
    if (board === "Computer") {
      e.preventDefault();
      shotOutcome();
    }
  };
  return (
    <div
      onClick={(e) => handleClick(e)}
      id={`${board}-${coords}`}
      className={`${color} border-2 border-sky-800 w-6 h-6 grid place-content-center `}
    ></div>
  );
};

export default Square;
