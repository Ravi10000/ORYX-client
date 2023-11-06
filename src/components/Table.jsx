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

Table.Colored = Colored

export default Table;
