import React from "react";
import Logo from "../../assets/images/logo.png";

const TitleLogo = ({ title }) => {
  return (
    <>
      <div className="logo center">
        <img src={Logo} alt="" />
      </div>
      <h1 className="font-extrabold text-xl mb-2 self-center capitalize text-textColor">
        { title }
      </h1>
    </>
  );
};

export default TitleLogo;
