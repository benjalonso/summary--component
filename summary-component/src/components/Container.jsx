import React from "react";

const Container = () => {
  return (
    <div className="mobile:w-full mobile:h-full bg-white mx-auto desktop:mt-24">
      <div className="bg-gradient-to-t from-gradient1a to-gradient1b mobile:h-[356px] mobile:rounded-b-[35px] ">
        <p className="text-center py-5 text-body text-lightBlue">Your Result</p>
        <div className="w-[140px] h-[140px] bg-gradient-to-t from-gradient2a to-gradient2b rounded-full mx-auto">
            <p className="text-center text-[56px] text-white pt-3">76</p>
            <p className="text-center text-lightBlue">of 100</p>
        </div>
        <p className="text-center text-white text-headM pt-3">Great</p>
        <p className="text-center text-lightBlue w-[260px] mx-auto">Your performance exceed 65% of the people conducting the test here!</p>
      </div>
      <div></div>
    </div>
  );
};

export default Container;
