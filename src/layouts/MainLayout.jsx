import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import { Navigate, Outlet } from "react-router";

const MainLayout = ({ children }) => {
  const navRef = useRef();

  const [admin, setAdmin] = useState(null);

  function handleAdmin() {
    const token = localStorage.getItem("accessToken");
    token ? setAdmin(true) : setAdmin(false);
  }

  useEffect(() => {
    handleAdmin();
  }, [admin]);

  // if (admin === null) return;

  // if (!admin) {
  //   return <Navigate to={'/login'} />
  // }

  return (
    <>
      <div className="navBreak:grid grid-rows-1 xl:grid-cols-homeLayout grid-cols-homeLayout2">
        <Navbar ref={navRef} />

        <main className="navBreak:pr-10 pl-5 pr-5 h-auto">
          <TopBar toggleNav={navRef}></TopBar>
          <div className="xl:pl-5">
            {/* <div className=""> */}
            <section className="main-container">
              <Outlet></Outlet>
            </section>
          </div>
        </main>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
