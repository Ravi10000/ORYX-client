import React from "react";
import { PiHandCoinsBold } from "react-icons/pi";

const RoundIcon = () => {
  return (
    <div className="flex flex-col center gap-4 p-11">
      <span className="w-20 h-20 shadow-2xl shadow-slate-800 bg-gray-200 rounded-full flex justify-center items-center">
        <PiHandCoinsBold size={30} />
      </span>
      <div>
        <p className="flex flex-col text-xl font-bold">
          <span className="flex gap-2 center">
            <span className="text-extrabold text-primary text-lg">540</span>
            <span>Real-Estate</span>
          </span>
          <span>Listed on Metropoly</span>
        </p>
      </div>
    </div>
  );
};

const Stamp = ({ className }) => {
  return (
    <div className="flex flex-col center gap-2">
      <span className={`w-14 h-14 rounded-full flex justify-center items-center bg-slate-700 ${ className ? className : '' }`}>
        <PiHandCoinsBold size={30} color="white"/>
      </span>
      <div>
        <p className="flex flex-col text-xs font-medium text-gray-600">
            Real-Estate
        </p>
        <p className="flex flex-col text-lg text-center font-medium text-gray-600">
        $725

        </p>
      </div>
    </div>
  );
};

RoundIcon.Stamp = Stamp

export default RoundIcon;
