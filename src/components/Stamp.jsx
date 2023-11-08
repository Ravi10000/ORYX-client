import React from "react";
import { CiMoneyBill } from "react-icons/ci";
import { AiTwotoneLock } from "react-icons/ai";

const Stamp = ({ title, value, valueUnit, icon }) => {
  let cloneIcon = null;

  if (React.isValidElement(icon))
    cloneIcon = React.cloneElement(icon, {
      size: 48,
    });

  return (
    <div className="border border-gray-300 rounded-lg px-4 py-4 gap-10 flex flex-col">
      <h1 className="text-sm font-semibold text-gray-700">
        {title || "Property Price"}
      </h1>
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold">
          {value || "725,000"} <span>{valueUnit || "USD"}</span>
        </p>
        <span className="text-gray-400">
          {cloneIcon || <CiMoneyBill size={48} />}
        </span>
      </div>
    </div>
  );
};

const Text = ({ title, value, icon }) => {
  return (
    <div className=" px-4 py-4 gap-6 flex flex-col">
      <h1 className="font-semibold text-gray-700 text-sm">{title || 'Initial Amount'}</h1>
      <div className="flex justify-between items-center ml-5">
        <p className="text-sm text-red-700 font-light">USD 725,000</p>
        <span className="text-gray-400">
          {icon || <AiTwotoneLock color="black" size={20} />}
        </span>
      </div>
    </div>
  );
};

Stamp.Text = Text;

export default Stamp;
