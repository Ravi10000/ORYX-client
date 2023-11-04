import React from "react";

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

export default TextInput;
