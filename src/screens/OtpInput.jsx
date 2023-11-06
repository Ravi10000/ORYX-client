import React, { useRef } from "react";

function OtpInput() {
  const inputRefs = Array.from({ length: 4 }, () => useRef(null));

  const handleInputChange = (e, index) => {
    const value = e.target.value;

    if (value.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  return (
    <div className="flex items-center justify-center">
      {inputRefs.map((ref, index) => (
        <input
          key={index}
          ref={ref}
          type="text"
          maxLength={1}
          className="w-12 h-12 text-center mx-2 border border-gray-300 rounded-sm focus:ring-1 ring-inset focus:ring-blue-300 outline-none"

          onChange={(e) => handleInputChange(e, index)}
        />
      ))}
    </div>
  );
}

export default OtpInput;
