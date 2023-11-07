import React from 'react'
import AccordionComponent from "../Accordion";
import { IoMdPricetag } from "react-icons/io";


const financialAccordion = [
  {
    title: "Transactions",
    subTitle: "Details",

    headings: [
      { name: "Price" },
      { name: "Ethereum" },
      { name: "Expiration" },
      { name: "From" },
      { name: "" },
    ],
    content: (
      <div className="flex flex-col gap-4 py-4 px-4">
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
    ),
    icon: <IoMdPricetag size={32} color="gray" />,
  },
];

const FinancialDetails = () => {
  return (
    <>
        <h1 className="h1 text-3xl font-bold text-center mt-16 mb-10">
        Financial Details
      </h1>

      <section className="grid md:grid-cols-2 gap-8 my-8">
        <AccordionComponent
          items={financialAccordion}
          isSingleAccordion
        ></AccordionComponent>
        <AccordionComponent
          items={financialAccordion}
          isSingleAccordion
        ></AccordionComponent>
      </section>

      <p className="text-gray-500 text-sm center text-center">
        This financial breakdown is entirely fictitious and serves only as an
        illustration. Prices and costs may vary and depend on the city, the
        country, the applicable laws, and other factors.
      </p>
    </>
  )
}

export default FinancialDetails