import React from "react";
import { BiDotsHorizontal } from "react-icons/bi";

const Payouts = () => {
  return (
    <>
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

      <div className="w-full flex justify-end my-6">
        <nav aria-label="Page navigation example">
          <ul className="flex items-center -space-x-px h-10 text-base">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 "
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
              >
                2
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 "
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Payouts;
