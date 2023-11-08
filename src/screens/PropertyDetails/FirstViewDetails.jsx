import React from "react";
import Label from "../../components/Label";
import { IoBedOutline, IoLocationSharp } from "react-icons/io5";
import { BiShareAlt } from "react-icons/bi";
import { PiUsersThree } from "react-icons/pi";
import Stamp from "../../components/Stamp";

const FirstViewDetails = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-3">
        <Label.Bordered>
          <IoBedOutline /> 
          <span>Beds | 1,793 sqft</span>
        </Label.Bordered>
        <BiShareAlt size={24} color="gray" />
      </div>

      <div className="flex-1 flex flex-col justify-between gap-y-4">
        <div className="flex flex-col gap-4">
          <div className="h1 font-bold text-3xl">
            Modern 3-Bedroom Family Home
          </div>
          <div className="flex justify-between">
            <Label.Text>
              <PiUsersThree />
              <span>600 owners</span>
            </Label.Text>
            <Label.Text>
              <PiUsersThree />
              <span>600 owners</span>
            </Label.Text>
            <Label.Text>
              <PiUsersThree />
              <span>600 owners</span>
            </Label.Text>
          </div>
          <div className="text-blue-600 flex gap-3 center justify-start">
            <IoLocationSharp size={20} />
            <span className="text-gray-400 text-lg">
              House, Stockholm, Sweden
            </span>
          </div>
        </div>

        <div className="grid grid-rows-2 sm:grid-cols-2 gap-4 mb-4">
          <Stamp></Stamp>
          <Stamp></Stamp>
          <Stamp></Stamp>
          <Stamp></Stamp>
        </div>
      </div>
    </div>
  );
};

export default FirstViewDetails;
