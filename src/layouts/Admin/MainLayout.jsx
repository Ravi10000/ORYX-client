import React, { useRef } from "react";
import Navbar from "../../components/Admin/Navbar";
import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import { Outlet } from "react-router";

const MainLayout = ({ children }) => {
  const navRef = useRef();

  return (
    <>
      <div className="navBreak:grid grid-rows-1 xl:grid-cols-homeLayout grid-cols-homeLayout2">
        <Navbar ref={navRef} />

        <main className="h-auto">
          <TopBar toggleNav={navRef}></TopBar>
          <div className="navBreak:pr-10 pl-5 pr-5 xl:pl-5">
          {/* <div className=""> */}
            <section className="main-container">
              <Outlet></Outlet>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default MainLayout;
