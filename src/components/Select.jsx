import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io"

const Select = () => {
  const [selectedValue, setSelectedValue] = useState("1");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="relative">
      <select
        name=""
        id=""
        className="px-5 py-2 border border-gray-300 bg-gray-50  text-gray-600 rounded-3xl outline-none pr-8"
        value={selectedValue}
        onChange={handleSelectChange}
        style={{ WebkitAppearance: "none", appearance: "none" }}
      >
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
        <option value="5">Option 5</option>
        <option value="6">Option 6</option>
      </select>
      <div className="absolute top-0 right-0 h-full flex items-center pr-2 pointer-events-none">
        <IoMdArrowDropdown />
      </div>
    </div>
  );
};

export default Select;
