import React from "react";

        
export const HR = () => <hr className="w-full border-b border-t-0 py-2 border-gray-300" /> 

const Heading = ({ heading, subHeading, isHorizontalline = true, children }) => {
  return (
    <>
      <div className="grid sm:grid-cols-headingLayout gap-y-4">
        <div className="flex-1">
          <h1 className="h1 font-bold 2xl:text-3xl md:text-2xl text-lg capitalize">
            {heading}
          </h1>
          <p className="text-sm text-gray-500 mt-1">{subHeading}</p>
        </div>
        <div>
          { children }
        </div>
      </div>

      {isHorizontalline && (
        <HR />
      )}
    </>
  );
};

export default Heading;
