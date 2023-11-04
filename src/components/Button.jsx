import React from "react";

const Button = ({ children, type , className}) => {
  return (
    <button
      type={type || "button"}
      className={`w-full p-2 py-3 my-4 bg- text-white rounded-md bg-primary hover:bg-indigo-600 ${className ? className : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
