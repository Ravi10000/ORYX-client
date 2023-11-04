import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
} from "react";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import navbar from "../data/NavData";
import Button from "./Button";
import { BsFillQuestionCircleFill } from 'react-icons/bs'

const Tabs = (props) =>
  props.tabs?.map((tab) => (
    <li key={tab.name} className="mb-3 capitalize flex gap-4">
      <Link
        to={tab.path}
        className="flex gap-4 hover:bg-gray-300 rounded-tl-md rounded-bl-md px-2 py-2 w-full hover:text-[1.08rem] transition-all text-base"
      >
        {<tab.icon size={24} />}
        {tab.name}
      </Link>
    </li>
  ));

const NavProfile = () => {
  return (
    <Link className="mb-5 flex gap-4 items-center">
      <div className="user-profile w-12 h-12 bg-gray-800 rounded-full ">
        <img src="" alt="" />
      </div>

      <div>
        <h1 className="text-sm">Demo Account</h1>
        <h2 className="text-xs text-gray-700 mb-1">Level: Broker</h2>
        <div className="flex gap-1">
          <span className="bg-blue-700 rounded-full p-[0.2rem] text-white">
            <GoHome size={14} />
          </span>
          <span className="bg-blue-700 rounded-full p-[0.2rem] text-white">
            <GoHome size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
};

const HelpCenter = () => {
  return (
    <div className="relative pr-4 center">
      <div className="icon w-10 h-10 rounded-full bg-white absolute top-0 -translate-y-1/2 center">
        <BsFillQuestionCircleFill color="purple"/>
      </div>
      <div className="content w-full min-h-[100px] bg-blue-400 rounded-lg p-8">
        <h1 className="h1 center mb-5">
          Help Center
        </h1>
        <p className="text-xs text-center text-slate-700">Do you have a question? Please use our Help Center for more info.</p>
        <div className="w-fit mx-auto">
          <Button>Visit the Help Center</Button>
        </div>
      </div>
    </div>
  );
};

const Navbar = (props, ref) => {
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1020) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check for screen width
    handleResize();

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      showNav: () => {
        setShowNav(true);
      },
      hideNav: () => {
        setShowNav(false);
      },
    }),
    []
  );

  return (
    <div className="w-full navBreak:sticky navBreak:h-screen navBreak:top-0">
      {showNav && (
        <>
          <div
            className="w-screen h-screen bg-black opacity-75 fixed inset-0 z-40 block navBreak:hidden"
            onClick={() => setShowNav(false)}
          ></div>

          <aside
            className={`
              fixed bg-white w-1/2 min-w-[280px] z-40 transform transition-transform -translate-x-full border-gray-500 border-r-2
              navBreak:w-auto navBreak:block navBreak:relative
              ${showNav ? "translate-x-0" : ""}
              overflow-y-scroll
            `}
          >
            <nav className="p-5 pr-0 h-screen z-20">
              <NavProfile></NavProfile>
              {navbar?.map((nav) => {
                return (
                  <ul key={nav.id} className="mb-7">
                    <h3 className="mb-3 capitalize text-sm font-semibold">
                      {nav.name}
                    </h3>
                    <Tabs tabs={nav.children}></Tabs>
                  </ul>
                );
              })}

              <HelpCenter />
            </nav>
          </aside>
        </>
      )}
    </div>
  );
};

export default forwardRef(Navbar);
