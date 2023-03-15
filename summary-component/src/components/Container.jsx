import React from "react";
import { Memory } from "./icons/Memory";
import { Reaction } from "./icons/Reaction";
import { Verbal } from "./icons/Verbal";
import { Visual } from "./icons/Visual";

const Container = () => {
  return (
    <div className="mobile:w-full mobile:h-full bg-white mx-auto desktop:mt-24 pb-3">
      {/* purple side */}
      <div className="bg-gradient-to-t from-gradient1a to-gradient1b mobile:h-[356px] mobile:rounded-b-[35px] ">
        <p className="text-center py-5 text-body font-bold text-lightBlue">Your Result</p>
        <div className="w-[140px] h-[140px] bg-gradient-to-t from-gradient2a to-gradient2b rounded-full mx-auto">
          <p className="text-center text-[56px] text-white pt-3 font-bold">76</p>
          <p className="text-center text-lightBlue">of 100</p>
        </div>
        <p className="text-center text-white text-headM pt-3">Great</p>
        <p className="text-center text-lightBlue w-[260px] mx-auto">
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </div>
      {/* detail side */}
      <div>
        <p className="text-darkNavy text-body ml-5 font-bold m-5">Summary</p>
        <div className="w-[315px] mx-auto flex bg-red bg-opacity-10 m-5 p-4 rounded-lg justify-between ">
          <div className="flex items-center gap-2">
            <Reaction />
            <p className="text-red">Reaction</p>{" "}
          </div>
          <div>
            <span className="text-darkNavy text-opacity-50 font-bold">
              <span className="text-darkNavy ">80</span> / 100
            </span>
          </div>
        </div>
        <div className="w-[315px] mx-auto flex bg-yellow bg-opacity-10 m-5 p-4 rounded-lg justify-between ">
          <div className="flex items-center gap-2">
            <Memory />
            <p className="text-yellow">Memory</p>{" "}
          </div>
          <div>
            <span className="text-darkNavy text-opacity-50 font-bold">
              <span className="text-darkNavy ">92</span> / 100
            </span>
          </div>
        </div>
        <div className="w-[315px] mx-auto flex bg-green bg-opacity-10 m-5 p-4 rounded-lg justify-between ">
          <div className="flex items-center gap-2">
            <Verbal />
            <p className="text-green">Verbal</p>{" "}
          </div>
          <div>
            <span className="text-darkNavy text-opacity-50 font-bold">
              <span className="text-darkNavy ">61</span> / 100
            </span>
          </div>
        </div>
        <div className="w-[315px] mx-auto flex bg-blue bg-opacity-10 m-5 p-4 rounded-lg justify-between ">
          <div className="flex items-center gap-2">
            <Visual />
            <p className="text-blue">Visual</p>{" "}
          </div>
          <div>
            <span className="text-darkNavy text-opacity-50 font-bold">
              <span className="text-darkNavy ">73</span> / 100
            </span>
          </div>
        </div>
        <button type="button" className="w-[315px] bg-darkNavy my-5 py-4 rounded-full text-white text-body font-bold grid place-items-center mx-auto ">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Container;
