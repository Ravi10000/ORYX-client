import React from "react";
import { BiLoader } from "react-icons/bi";

const Loader = () => {
  return (
    <div className="w-full h-auto center translate-y-4">
      <span className="animate-spin bg-slate-200 rounded-full p-2 ">
        <BiLoader size={35}/>
      </span>
    </div>
  );
};

export default Loader;
