import React from "react";
import Input from "../components/Input";

const FilterForm = () => {
  return (
    <form className="flex py-3 2xl:gap-10 gap-5 flex-wrap">
      <Input.Search
        className="flex-1 min-w-[250px]"
        name={"search"}
        placeholder={"search by name"}
      ></Input.Search>
      <Input.Select />
      <Input.Select />
      <Input.Select />
      <Input.Select />
      <Input.Select />
      <input
        type="reset"
        value={"clear all filters"}
        className="text-gray-500 capitalize font-semibold"
      />
    </form>
  );
};

export default FilterForm;
