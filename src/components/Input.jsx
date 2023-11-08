import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Input = {};

const IconInput = (props) => {
  const { type, placeholder , icon, name, id, required, children} = props;
  return (
    <>
      <label
        htmlFor={id || "default-search"}
        className="mb-2 text-sm font-medium text-gray-900 sr-only "
      >
        Search
      </label>
      <div className="relative w-full center">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {icon}
        </div>
        <input
          type={type}
          id={id}
          name={name}
          className="block w-full p-4 pl-12 text-sm text-gray-900 border border-borderColor rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none placeholder:text-[15px] placeholder:text-textColor h-[60px] bg-[rgba(156, 207, 254, 0.10)]"
          placeholder={placeholder}
          required={required}
        />
        {/* right children */}
        <button className="absolute right-0 pr-4">
        {children}
        </button>
      </div>
    </>
  );
};

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

const LabelInput = (props) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={props.id}
        className="block mb-2 text-base font-medium text-gray-900"
      >
        {props.labelText}{" "}
        {props.isRequired && <span className="text-red-600">*</span>}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
        placeholder={props.placeholder}
      />
    </div>
  );
};

const Textarea = (props) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={props.id}
        className="block mb-2 text-base font-medium text-gray-900"
      >
        {props.labelText}
      </label>
      <textarea
        id={props.id}
        name={props.name}
        rows={props.rows || "4"}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 outline-none"
        placeholder={props.placeholder}
      ></textarea>
    </div>
  );
};

import { BsCloudUpload } from "react-icons/bs";
const File = () => {
  return (
    <div className="flex items-center justify-center w-full my-8">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <BsCloudUpload size={30} color="gray" />
          <p className="mb-2 text-sm text-gray-500">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
      </label>
    </div>
  );
};

const Toggle = () => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" />
      <div className="w-11 h-6 center bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:left-[0px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
    </label>
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

import { AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

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

Input.TextInput   = TextInput;
Input.Checkbox    = Checkbox;
Input.Select      = Select;
Input.Search      = Search;
Input.LabelInput  = LabelInput;
Input.Textarea    = Textarea;
Input.File        = File;
Input.Toggle      = Toggle;
Input.IconInput   = IconInput;

export default Input;
