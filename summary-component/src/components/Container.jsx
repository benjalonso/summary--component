import React from "react";
import { Memory } from "./icons/Memory";
import { Reaction } from "./icons/Reaction";
import { Verbal } from "./icons/Verbal";
import { Visual } from "./icons/Visual";

const Container = () => {
  return (
    <div className="w-full h-full desktop:max-bigScreen:w-[736px] desktop:max-bigScreen:h-[512px]  bg-white mx-auto pb-3 desktop:max-bigScreen:flex desktop:max-bigScreen:mt-24 desktop:max-bigScreen:rounded-[30px] desktop:max-bigScreen:overflow-hidden  desktop:max-bigScreen:pb-0">
      {/* purple side */}
      <div className="bg-gradient-to-t from-gradient1a to-gradient1b mobile:h-[356px] mobile:rounded-b-[35px] desktop:max-bigScreen:w-[368px] desktop:max-bigScreen:h-full desktop:max-bigScreen:rounded-[30px]">
        <p className="text-center py-5 text-body font-bold text-lightBlue desktop:max-bigScreen:text-headM desktop:max-bigScreen:py-9">
          Your Result
        </p>
        <div className="w-[140px] h-[140px] bg-gradient-to-t from-gradient2a to-gradient2b rounded-full mx-auto desktop:max-bigScreen:w-[200px] desktop:max-bigScreen:h-[200px]">
          <p className="text-center text-[56px] text-white pt-3 font-bold desktop:max-bigScreen:text-headXL desktop:max-bigScreen:pt-9 desktop:max-bigScreen:h-[125px]">
            76
          </p>
          <p className="text-center text-lightBlue desktop:max-bigScreen:text-body">of 100</p>
        </div>
        <p className="text-center text-white text-headM pt-3 desktop:max-bigScreen:text-headL desktop:max-bigScreen:pt-6 desktop:max-bigScreen:pb-2">Great</p>
        <p className="text-center text-lightBlue w-[260px] mx-auto desktop:max-bigScreen:text-body">
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </div>
      {/* detail side */}
      <div className="desktop:max-bigScreen:w-[368px]">
        <p className="text-darkNavy text-body ml-5 font-bold m-5 desktop:max-bigScreen:text-headM desktop:max-bigScreen:m-10">Summary</p>
        <div className="w-[315px] mx-auto flex bg-red bg-opacity-10 m-5 p-4 rounded-lg justify-between desktop:max-bigScreen:w-[288px] desktop:max-bigScreen:text-body desktop:max-bigScreen:mx-auto">
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
        <div className="w-[315px] mx-auto flex bg-yellow bg-opacity-10 m-5 p-4 rounded-lg justify-between desktop:max-bigScreen:w-[288px] desktop:max-bigScreen:text-body desktop:max-bigScreen:mx-auto ">
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
        <div className="w-[315px] mx-auto flex bg-green bg-opacity-10 m-5 p-4 rounded-lg justify-between desktop:max-bigScreen:w-[288px] desktop:max-bigScreen:text-body desktop:max-bigScreen:mx-auto ">
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
        <div className="w-[315px] mx-auto flex bg-blue bg-opacity-10 m-5 p-4 rounded-lg justify-between desktop:max-bigScreen:w-[288px] desktop:max-bigScreen:text-body desktop:max-bigScreen:mx-auto ">
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
        <button
          type="button"
          className="w-[315px] bg-darkNavy my-5 py-4 rounded-full text-white text-body font-bold grid place-items-center mx-auto desktop:max-bigScreen:w-[288px] desktop:max-bigScreen:active:bg-gradient-to-t from-gradient1a to-gradient1b"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Container;
