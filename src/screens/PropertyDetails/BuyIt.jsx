import React from "react";
import { MdOutlineLocalOffer } from "react-icons/md";
import Button from "../../components/Button";

const BuyIt = () => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-sm text-gray-500">Current Price</h2>
      {/* <HR></HR> */}

      <div className="flex justify-between">
        <div className="xl:text-4xl text-2xl font-bold flex items-end gap-2">
          <h1>$ 725</h1>
          <span className="text-xl text-gray-300">(0.44 ETH)</span>
        </div>

        <div className="flex gap-4">
          <button className="font-bold text-lg">-</button>
          <input
            type="number"
            name=""
            id=""
            disabled
            className="border-none outline-none text-xl text-black w-16 text-center appearance-none h-10"
            value={1}
          />
          <button className="font-bold text-lg">+</button>
        </div>
      </div>

      <div className="">
        <Button className={"font-bold text-xl"}>Buy Now</Button>
        <Button>
          <div className="center gap-3 font-bold text-xl">
            <MdOutlineLocalOffer size={25} /> Offer
          </div>
        </Button>
      </div>
    </div>
  );
};

export default BuyIt;
