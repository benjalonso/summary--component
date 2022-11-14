import React from "react";
import PopularCard from "./PopularCard";

const PopularCardsContainer = () => {
  return (
    <div className="md:max-2xl:ml-[11vw]">
      <h1 className="ml-5 my-3 text-teal-900">Populars</h1>
      <div className="scroll-smooth flex overflow-auto hover:overflow-x-auto snap-x snap-mandatory  ">
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
      </div>
    </div>
  );
};

export default PopularCardsContainer;
