import React from "react";
import "../../Admin.css";
import { Outlet } from "react-router";
import AuthBanner from "../../assets/images/auth-banner.png";

const AuthLayout = () => {
  return (
    <div className="grid grid-cols-[33%_1fr] h-screen gap-x-[72px] pl-12 items-center">
      <section className="container-r">
        <Outlet></Outlet>
      </section>
      <section>
        <div className="image-wraper h-screen bg-gray-600  overflow-hidden">
          <img src={AuthBanner} alt="" className="w-full h-full " />
        </div>
      </section>
    </div>
  );
};

export default AuthLayout;
