import React from "react";


const Heading = ({ heading, subHeading, isHorizontalline = true }) => {
  return (
    <>
      <div>
        <h1 className="h1 font-bold 2xl:text-3xl md:text-2xl text-lg capitalize">
          {heading}
        </h1>
        <p className="text-sm text-gray-500 mt-1">{subHeading}</p>
      </div>
      {isHorizontalline && <hr className="w-full border-b border-t-0 py-2 border-gray-300" />}
    </>
  );
};

export default Heading;
