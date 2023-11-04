import React from "react";
import { MdLocationOn } from "react-icons/md";
import { BiCoinStack } from "react-icons/bi";
import Button from "./Button";

const CardImage = () => {
  return (
    <div>
      <div className="relative overflow-hidden">
        <img
          src="https://oryx.maxocart.com/assets/dream2earn/image_01.png"
          alt=""
        />

        <div className="mt-14 absolute inset-0">
          <span className="w-filt py-4 px-8 bg-green-500 text-3xl font-bold rounded-tr-full rounded-br-full text-white">
            860 USD*
          </span>
        </div>
      </div>

      <div className="p-5 flex justify-between md:gap-16 gap-4 flex-wrap">
        <div>
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-900">
              Authentic 3-Bedroom Penthouse with a private terrace
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-900 dark:text-gray-600 flex gap-2 items-center">
            <MdLocationOn size={22} />
            <span>Athens, Greece</span>
          </p>
        </div>

        <div className="flex gap-3 justify-center">
          <div className="flex flex-col gap-1 items-center">
            <span className="text-primary font-semibold">34%</span>
            <span className="text-xs">Expected Return</span>
            <span className="text-xs">
              <BiCoinStack size={22} />
            </span>
          </div>

          <div className="flex flex-col gap-1 items-center">
            <span className="text-primary font-semibold">34%</span>
            <span className="text-xs">Expected Return</span>
            <span className="text-xs">
              <BiCoinStack size={22} />
            </span>
          </div>

          <div className="flex flex-col gap-1 items-center">
            <span className="text-primary font-semibold">34%</span>
            <span className="text-xs">Expected Return</span>
            <span className="text-xs">
              <BiCoinStack size={22} />
            </span>
          </div>
        </div>

        <div className="flex justify-between flex-1">
          <div className="flex flex-col">
            <span className="text-lg text-gray-600">Price of Real Estate*</span>
            <span className="text-2xl">150,000 USD</span>
          </div>

          <div className="whitespace-nowrap">
            <Button>Buy Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardImage;
