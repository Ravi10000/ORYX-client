import React from "react";
import RoundIcon from "../../components/RoundIcon";

const ExtraInfo = () => {
  return (
    <div className="my-8 grid md:grid-cols-2">
      <div>
        <h1 className="h1 text-3xl font-bold text-center mt-16 mb-10">
          Property Info{" "}
        </h1>

        <div className="grid grid-cols-2 place-items-center gap-8">
          <RoundIcon.Stamp></RoundIcon.Stamp>
          <RoundIcon.Stamp></RoundIcon.Stamp>
          <RoundIcon.Stamp></RoundIcon.Stamp>
          <RoundIcon.Stamp></RoundIcon.Stamp>
        </div>
      </div>
      <div>
        <h1 className="h1 text-3xl font-bold text-center mt-16 mb-10">
          Rental Yields
        </h1>
        <div className="grid grid-cols-2 place-items-center gap-8">
          <RoundIcon.Stamp className="!bg-blue-400 shadow-xl"></RoundIcon.Stamp>
          <RoundIcon.Stamp className="!bg-blue-400 shadow-xl"></RoundIcon.Stamp>
          <RoundIcon.Stamp className="!bg-blue-400 shadow-xl"></RoundIcon.Stamp>
          <RoundIcon.Stamp className="!bg-blue-400 shadow-xl"></RoundIcon.Stamp>
        </div>
      </div>
    </div>
  );
};

export default ExtraInfo;
