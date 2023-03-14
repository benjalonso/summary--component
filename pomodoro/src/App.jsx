import Time from "./components/Time";
import React, { useState } from "react";

function App() {
  const [minutes, setMinutes] = useState(15);
  const [secondsA, setSecondsA] = useState(0);
  const [secondsB, setSecondsB] = useState(0);
  let min = 15;
  let decS = 0;
  let unitS = 0;
  // const countDown = () => {
  //   setSecondsB(secondsB - 1);
  //   if (secondsA === 0 && minutes !== 0) {
  //     setSecondsA(5);
  //   } else if (secondsA !== 0 && secondsB === 0) {
  //     setSecondsA(secondsA - 1);
  //   }
  //   if (secondsB === 0) {
  //     setSecondsB(9);
  //   }
  // };

  const countDown = () => {
    if (decS === 0 && min !== 0) {
      decS = 5;
    }
    if (decS !== 0 && unitS === 0) {
      decS - 1;
    }
    if (unitS === 0) {
      unitS = 9;
    }
    unitS - 1;
  };
  // const handleClick = () => {
  setInterval(countDown, 1000);
  // };
  return (
    <div className="wrapper">
      <div className="ring">
        <svg width="518" height="518" viewBox="0 0 518 518">
          <circle strokeWidth="9px" x="0" y="y" cx="259" cy="259" r="254" />
        </svg>
      </div>

      <div className="timer">
        <div className="time">
          <div className="minutes">
            <input type="text" value={min} disabled />
          </div>
          <div className="colon">:</div>
          <div className="seconds">
            <input id="second" type="text" value={decS} disabled />
            <input id="second" type="text" value={unitS} disabled />
          </div>
        </div>
        <button className="start">start</button>
        <button className="settings">
          <img src="public/gear.svg" alt="Settings" />
        </button>
      </div>
    </div>
  );
}

export default App;
