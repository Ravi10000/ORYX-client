import React from "react";

const Table = () => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="text-center whitespace-nowrap w-full">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>username</th>
            <th>Fractions Owned</th>
            <th>Current Value</th>
            <th>Performance</th>
            <th>Dividends Received </th>
            <th>Trading Volume </th>
            <th>Total Profit/Loss</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td className="center min-w-max">
              <img
                src="	https://oryx.maxocart.com/assets/dream2earn/user_01.png"
                alt=""
                width={52}
              />
            </td>
            <td>Gohard</td>
            <td>2.4K</td>
            <td>$1.2M</td>
            <td>+20%</td>
            <td>+ $100,000</td>
            <td>$2.5M</td>
            <td className="text-green-500">+ $300,000</td>
          </tr>
          <tr>
            <td>1</td>
            <td className="center  min-w-fit">
              <img
                src="	https://oryx.maxocart.com/assets/dream2earn/user_01.png"
                alt=""
                width={52}
              />
            </td>
            <td>Gohard</td>
            <td>2.4K</td>
            <td>$1.2M</td>
            <td>+20%</td>
            <td>+ $100,000</td>
            <td>$2.5M</td>
            <td className="text-green-500">+ $300,000</td>
          </tr>
          <tr>
            <td>1</td>
            <td className="center min-w-fit">
              <img
                src="	https://oryx.maxocart.com/assets/dream2earn/user_01.png"
                alt=""
                width={52}
              />
            </td>
            <td>Gohard</td>
            <td>2.4K</td>
            <td>$1.2M</td>
            <td>+20%</td>
            <td>+ $100,000</td>
            <td>$2.5M</td>
            <td className="text-green-500">+ $300,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Colored = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-left" role="colored">
        <thead className="text-base text-white uppercase bg-blue-400  dark:text-white">
          <tr className="p-5">
            <th scope="col" className="p-6 text-sm">
              Product name
            </th>
            <th scope="col" className="p-6 text-sm">
              Color
            </th>
            <th scope="col" className="p-6 text-sm">
              Category
            </th>
            <th scope="col" className="p-6 text-sm">
              Price
            </th>
            <th scope="col" className="p-6 text-sm">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-blue-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium whitespace-nowrap "
            >
              Apple MacBook Pro 17"
            </th>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium hover:underline">
                Edit
              </a>
            </td>
          </tr>
          <tr>
            <th
              scope="row"
              className="px-6 py-4 font-medium whitespace-nowrap "
            >
              Microsoft Surface Pro
            </th>
            <td className="px-6 py-4">White</td>
            <td className="px-6 py-4">Laptop PC</td>
            <td className="px-6 py-4">$1999</td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium hover:underline">
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

import { BiDotsHorizontal } from "react-icons/bi";

const Bordered = () => {
  return (
    <div className="relative overflow-x-auto border border-slate-300 sm:rounded-lg">
      <table className="w-full text-left " role="colored">
        <thead className="text-base text-slate-900 uppercase ">
          <tr className="p-5 border-b border-slate-300">
            <th scope="col" className="p-6 text-sm">
              Name
            </th>
            <th scope="col" className="p-6 text-sm">
              Date
            </th>
            <th scope="col" className="p-6 text-sm">
              Price
            </th>
            <th scope="col" className="p-6 text-sm">
              NFTs Owned
            </th>
            <th scope="col" className="p-6 text-sm">
              Payout
            </th>
            <th scope="col" className="p-6 text-sm">
              Status
            </th>
            <th scope="col" className="p-6 text-sm"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-slate-300 font-semibold">
            <td
              scope="row"
              className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img
                className="w-14 h-14 rounded-lg"
                src="https://oryx.maxocart.com/assets/dream2earn/image_02.png"
                alt="Jese image"
              />
              <div className="pl-3 ">
                <div className=" text-gray-700 font-semibold text-base">
                  Modern 3-Bedroom Family Home
                </div>
              </div>
            </td>
            <td className="px-6 py-4 text-sm">01-03-2022</td>
            <td className="px-6 py-4">$2999</td>
            <td>50/1000</td>
            <td>$40.10</td>

            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>{" "}
                Pending
              </div>
            </td>
            <td className="px-6 py-4">
              <div href="#" className="font-medium hover:underline">
                <BiDotsHorizontal size={24} />
              </div>
            </td>
          </tr>

          <tr className="border-b border-slate-300 font-semibold">
            <td
              scope="row"
              className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img
                className="w-14 h-14 rounded-lg"
                src="https://oryx.maxocart.com/assets/dream2earn/image_03.png"
                alt="Jese image"
              />
              <div className="pl-3 ">
                <div className=" text-gray-700 font-semibold text-base">
                  Modern 3-Bedroom Family Home
                </div>
              </div>
            </td>
            <td className="px-6 py-4 text-sm">01-03-2022</td>
            <td className="px-6 py-4">$2999</td>
            <td>50/1000</td>
            <td>$40.10</td>

            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>{" "}
                Pending
              </div>
            </td>
            <td className="px-6 py-4">
              <div href="#" className="font-medium hover:underline">
                <BiDotsHorizontal size={24} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Table.Colored = Colored;
Table.Bordered = Bordered;

export default Table;
