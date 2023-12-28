import React, { useEffect, useState } from "react";

import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router";
import useActiveMenu from "../hooks/useActiveMenu";
import { PiUsersLight } from "react-icons/pi";

const TopBar = ({ toggleNav }) => {
  const { pathname } = useLocation();
  const activeMenu = useActiveMenu(pathname);

  const navigate = useNavigate();

  function logout() {
    localStorage.clear('accessToken');
    navigate('/login');
  }

  return (
    <div className="topBar h-auto bg-white-600 flex justify-between px-8 py-2 bg-white">
      <ul className="logo h-full center flex gap-4">
        <li className="flex flex-col capitalize">
          {activeMenu && (
            <>
              <span className=" text-2xl font-semibold">
                {activeMenu?.name}
              </span>
              <span className="flex text-[20px] gap-4 items-center font-medium">
                <span>
                  <PiUsersLight size={26} />{" "}
                </span>
                <span>
                  / {activeMenu.name} / &nbsp;
                  <span className="text-primary">
                    {activeMenu?.children[0].name}
                  </span>{" "}
                </span>
              </span>
            </>
          )}
        </li>

        <li className="cursor-pointer block navBreak:hidden">
          <AiOutlineBars
            size={28}
            className=""
            onClick={(e) => {
              toggleNav.current?.showNav();
            }}
          />
        </li>
      </ul>

      <ul className="flex center gap-8 text-primary">
        <li>
          <button onClick={logout}
            className='font-bold text-secondary'
          >
            Logout
          </button>
        </li>

        <li className="relative">
          <span className="absolute flex h-4 w-4 center ">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <IoMdNotificationsOutline size={32} />
        </li>

        <li>
          <Link className="flex items-center">
            <div className="user-profile w-10 h-10 bg-gray-800 rounded-full ">
              <img src="" alt="" />
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TopBar;
