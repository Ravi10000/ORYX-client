import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
  useRef,
} from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import menus from "../../data/Admin/Menus";
import Button from "../Button";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import TitleLogo from "./TitleLogo";
import { FaAngleDown } from "react-icons/fa";
import { PiUsersLight } from "react-icons/pi";
import { DotIcon } from "../../assets/svg";
import HomePng from "../../assets/images/home.png"

const Navigation = ({ nav, pathname, setCurrentOpenSubMenu }) => {
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);

  return (
    <ul key={nav.id} className="mb-0">
      {/* <div className="w-[232px] h-11 bg-blue-500 rounded-md" /> */}
      <h3
        className={`cursor-pointer mb-2 capitalize text-xs font-semibold flex justify-between items-center px-4 py-4  rounded-md leading-none ${
          isOpenSubMenu ? "text-white bg-primary" : ""
        }`}
        onClick={(e) => {
          setIsOpenSubMenu((prev) => !prev);
          // set current open sub menu
          setCurrentOpenSubMenu(nav);
        }}
      >
        <div className="center gap-2 ">
          <PiUsersLight size={28} />
          {/* {nav.icon} */}
          {nav.name}
        </div>
        <FaAngleDown
          className={`transition-transform duration-[5000] ${
            isOpenSubMenu ? "rotate-180" : "rotate-0"
          }`}
          size={18}
        />
      </h3>

      <div className={`subMenu ${
        isOpenSubMenu ? "active" : ""
      } px-4`}>
        <Tabs
          tabs={nav.children}
          activePathName={pathname}
          isOpenSubMenu={isOpenSubMenu}
        ></Tabs>
      </div>
    </ul>
  );
};

const Navbar = (props, ref) => {
  const [showNav, setShowNav] = useState(false);
  const [isNavShowAnim, setIsNavShowAnim] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const { pathname } = useLocation();
  const currentOpenSubMenu = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1020) {
        setIsDesktop(false);
      } else {
        setIsDesktop(true);
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

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
    if (showNav) setIsNavShowAnim(false);
  }, [pathname]);

  useImperativeHandle(
    ref,
    () => ({
      showNav: () => {
        setShowNav(true);
        setIsNavShowAnim(true);
      },
      hideNav: () => {
        setShowNav(false);
      },
    }),
    []
  );

  return (
    <div className="w-full navBreak:sticky navBreak:h-screen navBreak:top-0">
      {
        <>
          {showNav && (
            <div
              className="w-screen h-screen bg-black opacity-75 transition-opacity fixed inset-0 z-50 block navBreak:hidden"
              onClick={() => {
                setIsNavShowAnim(false);
              }}
            ></div>
          )}

          <aside
            className={`
              fixed bg-white w-1/2 min-w-[280px] z-50 transform transition-transform duration-[5000] h-full ${
                isDesktop ? "" : "-translate-x-full"
              } shadow
              navBreak:w-auto navBreak:flex flex-col navBreak:relative
              ${isNavShowAnim ? "translate-x-0" : ""}
              overflow-y-scroll p-5 flex flex-col
            `}
            onTransitionEnd={function (e) {
              if (e.propertyName !== "transform") return;
              const isNavStart = [...e.target.classList].includes(
                "translate-x-0"
              );
              if (!isNavStart) setShowNav(false);
            }}
          >
              <TitleLogo css={"mb-8"} />
            <nav className="h-max z-20">
              {menus?.map((nav) => {
                return (
                  <Navigation
                    key={nav.name}
                    nav={nav}
                    pathname={pathname}
                    setCurrentOpenSubMenu={(curOpenSubMenu) => {
                      currentOpenSubMenu.current = curOpenSubMenu;
                    }}
                  />
                );
              })}

            </nav>
              <div className="mt-auto">
                <HelpCenter />
              </div>
          </aside>
        </>
      }
    </div>
  );
};

const Tabs = (props) =>
  props.tabs?.map((tab) => (
    <li
      key={tab.name}
      className={`capitalize flex gap-4`}
    >
      <NavLink
        to={tab.path}
        role="admin"
        className="flex gap-2.5 items-center rounded-l-lg py-2 w-full transition-all text-sm"
      >
        <DotIcon />
        {tab.name}
      </NavLink>
    </li>
  ));

const HelpCenter = () => {
  return (
    <div className="relative center">
      <div className="icon w-[197px] h-[140px] bg-transparent absolute top-0 right-0 -translate-y-[70%] center">
        <img src={HomePng} alt="" />
      </div>
      <div className="content w-full min-h-[100px] bg-lightBlue rounded-xl  p-8 pb-4 pt-14">
        <h1 className="h1 center mb-1 font-semibold text-white">Unlimited Access</h1>
        <div className="w-fit">
          <Button className={"px-4 py-[7px] rounded-md"}>Sign Up</Button>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Navbar);
