import React from "react";
import Button from "../../components/Button";
import Stamp from "../../components/Stamp";
import MyChart from "../../components/MyChart";

const SpeculateEarn = () => {
  return (
    <div>
      <h1 className="h1 text-3xl text-center my-8">
        How much can you earn with this Property?*
      </h1>

      <div className="2xl:grid 2xl:grid-cols-[1fr_520px]">
        <div className="py-4 px-4">
          <div className="grid sm:grid-cols-2 grid-rows-2 gap-4">
            <Stamp.Text></Stamp.Text>
            <Stamp.Text></Stamp.Text>
            <Stamp.Text></Stamp.Text>
            <Stamp.Text></Stamp.Text>
          </div>

          <div className="mt-8">
            <MyChart gradientHeight={470}></MyChart>
          </div>
        </div>
        <div className="2xl:border-l border-gray-300 px-10">
          <div className="wraper whitespace-nowrap flex gap-10 2xl:flex-col flex-wrap py-4">
            <div className="flex-1">
              <h4 className="text-base text-gray-800 mb-1 ">
                Total Average Annualized Return
              </h4>
              <p className="font-bold text-sm">10.28%</p>
            </div>
            <div className="flex-1">
              <h4 className="text-base text-gray-800 mb-1">
                Total Average Annualized Return
              </h4>
              <p className="font-bold text-sm">10.28%</p>
            </div>
            <div className="flex-1">
              <h4 className="text-base text-gray-800 mb-1">
                Total Average Annualized Return
              </h4>
              <p className="font-bold text-sm">10.28%</p>
            </div>

            <div className="flex-1">
              <h3 className="text-base font-semibold text-gray-800 mb-1">
                Total Expected Value After 5 Years
              </h3>
              <p className="text-2xl text-blue-600 font-bold">USD 30,280</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8 mt-4 2xl:mt-0">
        <div className="center">
          <Button className={"whitespace-nowrap px-8 w-max !mt-0"}>
            Buy Now
          </Button>
        </div>
        <p className="text-gray-500 text-sm center text-center">
          This calculator is for illustrative purposes only. Buying a
          real-estate NFT carries risk and you may not receive the anticipated
          returns.
        </p>
      </div>
    </div>
  );
};

export default SpeculateEarn;
