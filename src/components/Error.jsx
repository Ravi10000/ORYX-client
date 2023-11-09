import React from "react";

function Error({ message }) {
  return (
    <div
      className="bg-red-100 border border-red-300 text-red-700 px-4 py-2 rounded relative"
      role="alert"
    >
      <strong className="font-semibold">Error: </strong>
      <span className="block sm:inline">{message}</span>
    </div>
  );
}

function Text({ message }) {
  return (
    <div
      className=" text-red-700 px-4 rounded relative center py-4"
      role="alert"
    >
      {/* <strong className="font-semibold"> </strong> */}
      <span className="block sm:inline">{message}</span>
    </div>
  );
}

Error.Text = Text

export default Error;
