import React, { useState } from "react";

const Time = () => {
  const [minutes, setMinutes] = useState(15);
  const [secondsA, setSecondsA] = useState(0);
  const [secondsB, setSecondsB] = useState(0);

  const count = () => {
    
  };

  const handleClick = () => {};
  return (
    <>
      <div className="minutes">
        <input type="text" value={minutes} disabled />
      </div>
      <div className="colon">:</div>
      <div className="seconds">
        <input id="second" type="text" value={secondsA} disabled />
        <input id="second" type="text" value={secondsB} disabled />
      </div>
    </>
  );
};

export default Time;
