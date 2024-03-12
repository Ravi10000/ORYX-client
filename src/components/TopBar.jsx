import { useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineBars } from "react-icons/ai";
import { useAddress, useDisconnect } from "@thirdweb-dev/react";
import SigninWindow from "./signin-window";
import userStore from "#/stores/user.store";
import Loader from "./Loader";
import { ConnectWallet } from "@thirdweb-dev/react";

const TopBar = ({ toggleNav }) => {
  const { user, isFetching } = userStore();
  const disconnect = useDisconnect();
  const { setUser } = userStore();
  const [isLoginWindowOpen, setIsLoginWindowOpen] = useState(false);

  // const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    disconnect();
    setUser(null);
    // navigate("/login");
  }

  const handleOpen = () => {
    setIsLoginWindowOpen((ps) => !ps);
  };
  return (
    <>
      {isLoginWindowOpen && (
        <SigninWindow isOpen={isLoginWindowOpen} handleOpen={handleOpen} />
      )}
      <div className="topBar h-auto bg-white-600 flex justify-between px-8 py-2 bg-white border-b sticky top-0 z-20">
        <ul className="logo h-full center flex gap-4">
          <li className="cursor-pointer block navBreak:hidden">
            <AiOutlineBars
              size={28}
              className=""
              onClick={() => {
                toggleNav.current?.showNav();
              }}
            />
          </li>
        </ul>

        <ul className="flex center gap-8 text-primary">
          {isFetching ? (
            <Loader />
          ) : user ? (
            <>
              <li>
                <button onClick={logout} className="font-bold text-secondary">
                  Logout
                </button>
              </li>
              <li className="relative">
                <span className="absolute flex h-4 w-4 center ">
                  <span className="animate-ping absolute inline-flex h-[10px] w-[10px] rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <IoMdNotificationsOutline size={32} />
              </li>
              <li>
                <ConnectWallet theme="light" />
              </li>
              {/* <li>
                <Link className="flex items-center">
                  <div className="user-profile w-10 h-10 bg-gray-800 rounded-full ">
                    <img src="" alt="" />
                  </div>
                </Link>
              </li> */}
            </>
          ) : (
            <button
              className="px-5 py-2 bg-blue-500 text-white rounded-lg"
              onClick={handleOpen}
            >
              Sign in
            </button>
          )}
        </ul>
      </div>
    </>
  );
};

export default TopBar;
