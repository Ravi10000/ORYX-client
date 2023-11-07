import React from "react";

import AccordionComponent from "../Accordion";
import { IoMdPricetag } from "react-icons/io";
import Button from "../../components/Button";

const items = [
  {
    title: "Listings",
    headings: [
      { name: "Price" },
      { name: "Ethereum" },
      { name: "Expiration" },
      { name: "From" },
      { name: "" },
    ],
    content: (
      <tbody>
        <tr>
          <td className="px-10 py-4">$ 725</td>
          <td className="px-10 py-4">0.4 ETH</td>
          <td className="px-10 py-4">6 Days</td>
          <td className="px-10 py-4">MoneyMaster_</td>
          <td className="px-10 py-4">
            <Button className={"w-max px-4 !m-0"}>Buy Now</Button>
          </td>
        </tr>
      </tbody>
    ),
    icon: <IoMdPricetag size={22} color="gray" />,
  },

  {
    title: "Listings",
    headings: [
      { name: "Price" },
      { name: "Ethereum" },
      { name: "Expiration" },
      { name: "From" },
      { name: "" },
    ],
    content: (
      <tbody>
        <tr>
          <td className="px-10 py-4">$ 725</td>
          <td className="px-10 py-4">0.4 ETH</td>
          <td className="px-10 py-4">6 Days</td>
          <td className="px-10 py-4">MoneyMaster_</td>
          <td className="px-10 py-4">
            <Button className={"w-max px-4 !m-0"}>Buy Now</Button>
          </td>
        </tr>
      </tbody>
    ),
    icon: <IoMdPricetag size={22} color="gray" />,
  },

  {
    title: "Listings",
    headings: [
      { name: "Price" },
      { name: "Ethereum" },
      { name: "Expiration" },
      { name: "From" },
      { name: "" },
    ],
    content: (
      <tbody>
        <tr>
          <td className="px-10 py-4">$ 725</td>
          <td className="px-10 py-4">0.4 ETH</td>
          <td className="px-10 py-4">6 Days</td>
          <td className="px-10 py-4">MoneyMaster_</td>
          <td className="px-10 py-4">
            <Button className={"w-max px-4 !m-0"}>Buy Now</Button>
          </td>
        </tr>
      </tbody>
    ),
    icon: <IoMdPricetag size={22} color="gray" />,
  },
];

const AccordionDetail = () => {
  return (
    <div className="mb-8">
      <AccordionComponent items={items}></AccordionComponent>
    </div>
  );
};

export default AccordionDetail;
