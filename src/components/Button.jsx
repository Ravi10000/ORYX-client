import React from "react";
import { AiOutlineDownload } from "react-icons/ai"

const Button = ({ children, type, className }) => {
  return (
    <button
      type={type || "button"}
      className={`w-full p-2 py-3 my-4 bg- text-white rounded-lg bg-primary hover:bg-hover ${
        className ? className : ""
      }`}
    >
      {children}
    </button>
  );
};
const Icon = () => {
  
}
const Stamp = ({ children, type, className }) => {
  return (
    <button
      type={type || "button"}
      className={`w-max p-3 py-3 my-4 bg- text-white rounded-xl bg-white ${
        className ? className : ""
      }`}
    >
      {/* {children} */}
      <div className="flex justify-between items-center gap-6">
        <div className="flex flex-col items-start">
          <h1 className="text-black font-semibold text-xs">Download</h1>
          <p className="text-xs text-blue-700">Independent Property Report</p>
        </div>
        <AiOutlineDownload color="gray" />
      </div>
    </button>
  );
};

Button.Stamp = Stamp;

export default Button;
