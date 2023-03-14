import React from "react";
import { Link } from "react-router-dom";
export const Login = () => {
  return (
    <>
      <div>
        <h2 className="text-center text-[2rem]">Pick a Weapon</h2>
      </div>
      <div className="bg-[rgba(7,7,15,0.7)] w-3/5 mx-auto h-52 text-center">
        <h3 className="text-center text-[2rem] mt-2">CHOOSE YOUR WEAPON</h3>
        <input
          className="mx-1 my-3 text-black text-center"
          placeholder="Player 1"
          type="text"
        />
        <input
          className="mx-1 my-3 text-black text-center"
          placeholder="Player 2"
          type="text"
        />
        <div className="grid grid-cols-2 mx-40 h-2/4 ">
          <button
            type="submit"
            className="bg-[rgba(7,7,15,0.5)] mx-3 text-5xl text-indigo-500 hover:bg-[rgba(7,7,15,0.9)] font-bold"
          >
            <Link to={"/game"}>X</Link>
          </button>
          <button
            className="bg-[rgba(7,7,15,0.5)] hover:bg-[rgba(7,7,15,0.9)] mx-3 text-5xl text-amber-500 font-bold "
            type="submit"
          >
            <Link to={"/game"}>O</Link>
          </button>
        </div>
      </div>
    </>
  );
};
