import React, { useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import { MdNotifications } from "react-icons/md";
import Button from "../components/Button";
import { AiOutlineBars } from "react-icons/ai";

const TopBar = ({ toggleNav }) => {
  
  return (
    <div className="topBar h-16 bg-white-600 flex justify-between">
      <ul className="logo h-full center flex gap-4">
        <li>
          <img
            src="https://oryx.maxocart.com/assets/dream2earn/Oryx.png"
            className="w-14 translate-y-1 "
            alt="logo"
          />
        </li>

        <li className="cursor-pointer block navBreak:hidden">
          <AiOutlineBars size={28} className="" 
            onClick={e => {
              toggleNav.current?.showNav()
            }}
          />
        </li>
      </ul>

      <ul className="flex center gap-5">
        <li>
          <FiSettings size={30} className="text-primary" />
        </li>
        <li className="relative">
          <span className="absolute flex h-4 w-4 center ">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <MdNotifications size={32} className="text-primary" />
        </li>

        <li>
          <Button className={"my-0 py-2 px-6"}>Connect</Button>
        </li>
      </ul>
    </div>
  );
};

export default TopBar;
