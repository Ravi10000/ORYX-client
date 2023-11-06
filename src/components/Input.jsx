import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io"

const Input = {}

const TextInput = (props) => {
  const { type, name, placeholder } = props;
  return (
    <input
      type={type}
      name={name}
      className="w-full p-2 border border-gray-300 rounded-sm focus:ring-1 ring-inset focus:ring-blue-300 outline-none placeholder:capitalize"
      placeholder={placeholder}
    />
  );
};

export const Checkbox = (props) => {
  return (
    <label className="text-sm" htmlFor={props.id}>
      <input
        type="checkbox"
        name={props.name}
        className={`${props.className}`}
        id={props.id}
      />
      {props.labelText}
    </label>
  );
};

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

import { AiOutlineUser } from "react-icons/ai"
import { BsSearch } from "react-icons/bs"

const Search = ({ className, name, placeholder }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <AiOutlineUser />
        </div>
        <input
          type="text"
          name={name}
          id="simple-search"
          className="bg-gray-50 border outline-none text-black border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:capitalize"
          placeholder={placeholder || ""}
          required
        />
      </div>
      <button
        type="submit"
        className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <BsSearch />
        <span className="sr-only">Search</span>
      </button>
    </div>
  );
};

Input.TextInput = TextInput
Input.Checkbox  = Checkbox
Input.Select  = Select
Input.Search  = Search

export default Input;
