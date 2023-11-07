import React, { useState } from "react";
import { IoMdPricetag } from "react-icons/io";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Button from "../components/Button";

const AccordionItem = ({
  title,
  content,
  isActive,
  onClick,
  icon,
  index,
  item,
  totalItems
}) => {
  return (
    <div
      className={`border ${
        index === 0 ? "rounded-tl-2xl rounded-tr-2xl" : ""
      } ${
        index === totalItems - 1 ? "rounded-bl-2xl rounded-br-2xl" : ""
      } overflow-hidden`}
    >
      <div
        className={`p-4 cursor-pointer flex  items-center  justify-between ${
          isActive
            ? "bg-blue-200 text-blue-500 focus:ring-4 focus:ring-blue-300"
            : "bg-gray-50"
        } `}
        onClick={onClick}
      >
        <div className="flex items-center gap-2">
          {icon} {title}
        </div>

        <MdKeyboardArrowDown
          size={30}
          className={
            isActive ? "transition-transform rotate-180 duration-300" : "transition-transform rotate-0 duration-300"
          }
        />
      </div>
      {
        <div
          className={`acc-item overflow-hidden ${
            isActive ? "active" : ""
          }`}
        >
          <table className="py-3 w-full text-sm" role="colored">
            <thead>
              <tr className="text-start border-b border-gray-200">
                {item.headings?.map((heading, index) => {
                  return (
                    <th key={index} className="font-semibold text-sm text-slate-900 text-start py-4 px-10">
                      {heading.name}
                    </th>
                  );
                })}
              </tr>
            </thead>
            {/* Your table content goes here */}
            {content}
          </table>
        </div>
      }
    </div>
  );
};

const SingleAccItem = ({ isActive, onClick, item }) => {
  return (
    <div className={`border rounded-xl overflow-hidden`}>
      <div
        className={`p-4 cursor-pointer flex  items-center  justify-between ${
          isActive
            ? "bg-blue-200 text-blue-500 focus:ring-4 focus:ring-blue-300"
            : "bg-gray-50"
        } `}
        onClick={onClick}
      >
        <div className="flex items-center gap-2">
          {item.icon}
          <div className="flex flex-col">
            <span className="text-blue-500 text-xs">{item.title}</span>
            <span className="text-gray-500 text-base font-semibold ">
              {item.subTitle}
            </span>
          </div>
        </div>

        <MdKeyboardArrowDown
          size={30}
          className={
            isActive ? "transition-transform rotate-180 duration-300" : "transition-transform rotate-0 duration-300"
          }
        />
      </div>
      <div className={`acc-item ${isActive ? "active" : ""}`}>
        <div className={"flex flex-col gap-4 py-4 px-4"}>
          <div className="flex justify-between text-sm">
            <h3>Property Listing Price :</h3>
            <p>USD 500,500</p>
          </div>
          <div className="flex justify-between text-sm font-bold">
            <h3>Property Listing Price :</h3>
            <p>USD 500,500</p>
          </div>
          <div className="flex justify-between text-sm">
            <h3>Property Listing Price :</h3>
            <p>USD 500,500</p>
          </div>
          <div className="flex justify-between text-sm">
            <h3>Property Listing Price :</h3>
            <p>USD 500,500</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ items, isSingleAccordion }) => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    if (activeItem === index) {
      // Clicking on the active item should close it.
      setActiveItem(null);
    } else {
      setActiveItem(index);
    }
  };

  return (
    <div>
      {items.map((item, index) =>
        isSingleAccordion ? (
          <SingleAccItem
            key={index}
            item={item}
            isActive={activeItem === index}
            onClick={() => handleItemClick(index)}
          ></SingleAccItem>
        ) : (
          <AccordionItem
            key={index}
            index={index}
            title={item.title}
            content={item.content}
            isActive={activeItem === index}
            onClick={() => handleItemClick(index)}
            icon={item.icon}
            item={item}
            totalItems={items.length}
          />
        )
      )}
    </div>
  );
};

export default Accordion;
