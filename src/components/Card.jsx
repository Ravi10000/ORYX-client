import React from "react";
import { MdLocationOn } from "react-icons/md";
import { BiCoinStack } from "react-icons/bi";
import { LuBedDouble } from "react-icons/lu";
import Button from "./Button";
import { Link } from "react-router-dom";

const Card = ({ isProgress }) => {
  return (
    <div className="flex-1 mx-1 2xl:max-w-sm bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-200 dark:border-gray-700">
      <Link to="#" className="relative">
        <img
          className="rounded-t-lg"
          src="https://oryx.maxocart.com/assets/dream2earn/unsplash_IYfp2Ixe9nM.png"
          alt=""
        />

        <div className="absolute z-20 w-fit h-fit inset-0 border-2 text-primary font-semibold px-4 py-2 m-3 rounded-full bg-white border-primary">
          Rental Property
        </div>
        <div className="absolute bottom-0 right-0 flex flex-col items-end">
          <div className="z-20 w-fit h-fit border-2 text-primary font-semibold px-4 py-2 m-3 rounded-xl bg-white border-primary">
            Vacant
          </div>
          <div className="z-20 w-fit h-fit border-2 text-primary font-semibold px-4 py-2 m-3 rounded-xl bg-white border-primary">
            <div className="center">
              <LuBedDouble size={26} />
            </div>
            <span>1 Bed</span>
          </div>
        </div>
      </Link>

      <div className="mt-8">
        <span className="w-filt py-4 px-8 bg-green-500 text-2xl font-bold rounded-tr-full rounded-br-full text-white">
          860 USD*
        </span>
      </div>

      <div className="p-5">
        <Link href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-900">
            Authentic 3-Bedroom Penthouse with a private terrace
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-900 dark:text-gray-600 flex gap-2 items-center">
          <MdLocationOn size={22} />
          <span>Athens, Greece</span>
        </p>
        {/* <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="w-3.5 h-3.5 ml-2"
            ariaHidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokelinecap="round"
              strokelinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a> */}

        <div className="flex gap-3 justify-center my-8">
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

        {isProgress && (
          <>
            <div className="mb-1 text-base font-bold">
              600 of 1,000 NFTs Minted
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-400">
              <div className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500 w-1/2"></div>
            </div>
          </>
        )}

        <div className="flex justify-between flex-wrap">
          <div className="flex flex-col">
            <span className="text-lg text-gray-600">Price of Real Estate*</span>
            <span className="text-2xl">150,000 USD</span>
          </div>

          <div>
            <Button>Buy Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
