import React from "react";

const Square = ({
  board = "Computer",
  coords,
  cpuShips,
  cpuBoard,
  setCpuBoard,
  gameWon,
  
}) => {
  const atack = () => {
    if (board === "Computer") {
      if (cpuBoard.includes(coords)) return;
      setCpuBoard((currentBoard) => [...currentBoard, coords]);
      for (let i = 0; i < cpuShips.length; i++) {
        for (let j = 0; j < cpuShips[i].coords.length; j++) {
          if (cpuShips[i].coords[j] === coords) {
            document.getElementById(
              `${board}-${coords}`
            ).style.backgroundColor = "var(--alertRed)";
            cpuShips[i].health--;
            if (cpuShips[i].health === 0) {
              cpuShips[i].status = "sunk";
              for (let k = 0; k < cpuShips[i].size; k++) {
                document.getElementById(
                  `${board}-${cpuShips[i].coords[k]}`
                ).style.backgroundColor = "darkred";
              }
            }
            if (cpuShips.every((ship) => ship.status === "sunk")) {
              gameOver("Player");
            }
            return;
          }
        }
      }
      document.getElementById(`${board}-${coords}`).style.backgroundColor =
        "var(--miss)";
    }
  };
  const handleClick = (e) => {
    if (gameWon) return;
    if (board === "Computer") {
      e.preventDefault();
      atack();
    }
  };
  return (
    <div
      onClick={(e) => handleClick(e)}
      id={`${board}-${coords}`}
      className={
        "bg-sky-300 border-2 border-sky-800 w-6 h-6 grid place-content-center "
      }
    />
  );
};

export default Square;
