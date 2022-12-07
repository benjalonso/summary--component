import { Table } from "./components/Table.jsx";
import Ships from "./components/Ships.jsx";
import { useState, useEffect } from "react";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [ships, setShips] = useState([]);
  const [boardReady, setBoardReady] = useState(false);
  const [cpuBoard, setCpuBoard] = useState([]);
  const [cpuReady, setCpuReady] = useState(false);
  const [cpuShips, setCpuShips] = useState([]);
  const [cpuShipToPlaceIndex, setCpuShipToPlaceIndex] = useState(0);
  const [cpuShipToPlace, setCpuShipToPlace] = useState(
    Ships[cpuShipToPlaceIndex]
  );
  const [isVertical, setIsVertical] = useState(false);
  const [axis, setAxis] = useState("Vertical");
  const [onTarget, setOnTarget] = useState(false);

  
  const startGame = () => {
    if (boardReady && !gameWon) {
      setGameStarted(true);
    } else if (gameWon) {
      refresh();
    }
  };

  const validateShip = (coords, player) => {
    let start = coords[0];
    let end = coords[coords.length - 1];
    // check for edges
    if (end >= 100 || start % 10 > end % 10) return false;
    //check for other ships
    let checkShips = player === "Player" ? ships : cpuShips;
    for (let i = 0; i < coords.length; i++) {
      if (checkShips.some((ship) => ship.coords.includes(coords[i]))) {
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    if (gameStarted && !cpuReady) {
      if (cpuShips.length <= 5) {
        setCpuShipToPlace(Ships[cpuShipToPlaceIndex]);
        placeCPUship();
      } else {
        // setCpuReady(true);
        // show cpu ship location, delete when done
        for (let i = 0; i < cpuShips.length; i++) {
          for (let j = 0; j < cpuShips[i].coords.length; j++) {
            let coordId = cpuShips[i].coords[j];
            document.getElementById(
              `Computer-${coordId}`
            ).style.backgroundColor = "grey";
          }
        }
      }
    }
  });

  const tryAgain = () => {
    placeCPUship();
  };

  const placeCPUship = () => {
    let ship = cpuShipToPlace;
    let coordinate = Math.floor(Math.random() * 98);
    const axisArr = [1, 10];
    const increment = axisArr[Math.floor(Math.random() * 2)];
    const coordinates = [coordinate];
    for (let j = 1; j < cpuShipToPlace.size; j++) {
      coordinates.push(coordinate + j * increment);
    }
    if (validateShip(coordinates, "Computer")) {
      setCpuShips((currentShips) => {
        return [...currentShips, ship];
      });
      ship.coords = coordinates;
    } else {
      tryAgain();
      return;
    }
    setCpuShipToPlaceIndex((prev) => parseInt(prev + 1));
  };

  return (
    <div className="grid place-content-center bg-slate-700 min-h-screen">
      <Table
        cpuShips={cpuShips}
        player="Computer"
        cpuBoard={cpuBoard}
        setCpuBoard={setCpuBoard}
        gameWon={gameWon}
      />
    </div>
  );
}

export default App;
