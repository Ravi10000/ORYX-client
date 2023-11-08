import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const Image = () => {
  return (
    <div>
      <div className="rounded-xl overflow-hidden mb-4 2xl:m-0 relative">
        <img
          src="https://oryx.maxocart.com/assets/dream2earn/image_02.png"
          alt=""
          // width={"sm:w-full lg:w-auto"}
        />

        <div className="w-10 h-10 rounded-full bg-white absolute top-5 right-5 center">
          <AiOutlineHeart color="#87CEEB" size={22}/>
        </div>
      </div>
    </div>
  );
};

export default Image;
