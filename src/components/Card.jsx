import React from "react";
import { MdLocationOn } from "react-icons/md";
import { BiCoinStack } from "react-icons/bi";
import { LuBedDouble } from "react-icons/lu";
import Button from "./Button";
import { Link } from "react-router-dom";

const BidStatus = () => {
  return (
    <div className="center flex-col my-6">
      <small className="text-slate-500">The highest current bid is</small>
      <h2 className="text-blue-600 font-bold">10% below the market price</h2>
    </div>
  );
};

const Progress = () => {
  return (
    <>
      <div className="mb-1 text-base font-bold">600 of 1,000 NFTs Minted</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-400">
        <div className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500 w-1/2"></div>
      </div>
    </>
  );
};

const Card = ({ isProgress, children }) => {
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

        {children}

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

Card.BidStatus = BidStatus;
Card.Progress = Progress;

export default Card;
