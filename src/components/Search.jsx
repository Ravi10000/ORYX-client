import React from "react";
import { AiOutlineUser } from "react-icons/ai"
import { BsSearch } from "react-icons/bs"

const Search = ({ className, name, placeholder }) => {
  return (
    <form className={`flex items-center ${className}`}>
      <label for="simple-search" className="sr-only">
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
    </form>
  );
};

export default Search;
