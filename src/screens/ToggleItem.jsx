import React from "react";
import Input from "../components/Input";

const ToggleItem = (props) => {
  return (
    <div className="flex justify-between relative">
      <div>
        <h2 className="text-sm font-semibold">{props.heading}</h2>
        <p className="text-gray-500 text-xs">
          {props.subHeading}
        </p>
      </div>

      <Input.Toggle></Input.Toggle>
    </div>
  );
};

export default ToggleItem;
