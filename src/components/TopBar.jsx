import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineBars } from "react-icons/ai";

const TopBar = ({ toggleNav }) => {

  const navigate = useNavigate();

  function logout() {
    localStorage.clear('accessToken');
    navigate('/login');
  }

  return (
    <div className="topBar h-auto bg-white-600 flex justify-between px-8 py-2 bg-white border-b">
      <ul className="logo h-full center flex gap-4">

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
