import React from "react";
import { Route, Link, Routes, useParams } from "react-router-dom";
import Label from "../components/Label";
import { BiShareAlt } from "react-icons/bi";
import { IoBedOutline, IoLocationSharp } from "react-icons/io5";
import { PiUsersThree } from "react-icons/pi";
import Stamp from "../components/Stamp";
import { HR } from "../components/Heading";
import Button from "../components/Button";
import { MdOutlineLocalOffer } from "react-icons/md";
import AccordionComponent from "../screens/Accordion";
import RoundIcon from "../components/RoundIcon";
import { IoMdPricetag } from "react-icons/io";
import MyChart from "../components/MyChart";

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

const PropertyDetail = () => {
  const params = useParams();

  return (
    <>
      <div className="2xl:grid grid-rows-2 2xl:grid-cols-2 gap-8 gap-y-8">
        <div>
          <div className="rounded-xl overflow-hidden mb-4 2xl:m-0">
            <img
              src="https://oryx.maxocart.com/assets/dream2earn/image_02.png"
              alt=""
              // width={"sm:w-full lg:w-auto"}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-3">
            <Label.Bordered>
              <IoBedOutline size={22} /> Beds | 1,793 sqft
            </Label.Bordered>
            <BiShareAlt size={24} color="gray" />
          </div>

          <div className="flex-1 flex flex-col justify-between gap-y-4">
            <div className="flex flex-col gap-4">
              <div className="h1 font-bold text-3xl">
                Modern 3-Bedroom Family Home
              </div>
              <div className="flex justify-between">
                <Label.Text>
                  <PiUsersThree size={20} />
                  600 owners
                </Label.Text>
                <Label.Text>
                  <PiUsersThree size={20} />
                  600 owners
                </Label.Text>
                <Label.Text>
                  <PiUsersThree size={20} />
                  600 owners
                </Label.Text>
              </div>
              <div className="text-blue-600 flex gap-3 center justify-start">
                <IoLocationSharp size={20} />
                <span className="text-gray-400 text-sm">
                  House, Stockholm, Sweden
                </span>
              </div>
            </div>

            <div className="grid grid-rows-2 sm:grid-cols-2 gap-4 mb-4">
              <Stamp></Stamp>
              <Stamp></Stamp>
              <Stamp></Stamp>
              <Stamp></Stamp>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-sm text-gray-500">Price History</h2>
          <HR></HR>

          <MyChart />
        </div>
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
      </div>

      {/* Accordion  */}
      <div className="mb-8">
        <AccordionComponent items={items}></AccordionComponent>
      </div>

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
      <h1 className="h1 text-3xl font-bold text-center my-8 mt-16">Overview</h1>

      <section className="grid grid-rows-1 lg:grid-cols-2 gap-16">
        <div>
          <h3 className="font-bold text-lg mb-8">About the Property</h3>
          <p className="text-sm pl-4 text-slate-900">
            Here you will find all available information regarding the specific
            property. For example, this might entail where the property is
            located, what makes it unique, and why it could interest you.
            Furthermore, Metropoly provides insights about market conditions and
            why our team believes that the property value will increase in the
            long term. We evaluate crucial aspects of the property, including
            the area, surrounding development, service charges, building
            quality, number of amenities, developer, and expected supply.
            <br />
            <br />
            All real estate offered on the Metropoly marketplace must pass a
            strict screening and selection process to provide users with the
            best opportunity to earn both rental yield and capital appreciation.
            In addition, we leverage data from leading third - party vendors to
            ensure that all of our internal research and analysis tools are
            accurate and reliable in current market conditions.
          </p>
        </div>
        <div className="grid 2xl:grid-cols-5 grid-cols-3 gap-5 xl:place-items-start place-items-center">
          <RoundIcon.Stamp></RoundIcon.Stamp>
          <RoundIcon.Stamp></RoundIcon.Stamp>
          <RoundIcon.Stamp></RoundIcon.Stamp>
          <RoundIcon.Stamp></RoundIcon.Stamp>
          <RoundIcon.Stamp></RoundIcon.Stamp>
          <RoundIcon.Stamp></RoundIcon.Stamp>
          <RoundIcon.Stamp></RoundIcon.Stamp>
        </div>
      </section>

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

      <p className="text-gray-500 text-sm center">
        This financial breakdown is entirely fictitious and serves only as an
        illustration. Prices and costs may vary and depend on the city, the
        country, the applicable laws, and other factors.
      </p>

      <div className="my-8 grid md:grid-cols-2">
        <div>
          <h1 className="h1 text-3xl font-bold text-center mt-16 mb-10">
            Property Info{" "}
          </h1>

          <div className="grid grid-cols-2 place-items-center gap-8">
            <RoundIcon.Stamp></RoundIcon.Stamp>
            <RoundIcon.Stamp></RoundIcon.Stamp>
            <RoundIcon.Stamp></RoundIcon.Stamp>
            <RoundIcon.Stamp></RoundIcon.Stamp>
          </div>
        </div>
        <div>
          <h1 className="h1 text-3xl font-bold text-center mt-16 mb-10">
            Rental Yields
          </h1>
          <div className="grid grid-cols-2 place-items-center gap-8">
            <RoundIcon.Stamp className="!bg-blue-400 shadow-xl"></RoundIcon.Stamp>
            <RoundIcon.Stamp className="!bg-blue-400 shadow-xl"></RoundIcon.Stamp>
            <RoundIcon.Stamp className="!bg-blue-400 shadow-xl"></RoundIcon.Stamp>
            <RoundIcon.Stamp className="!bg-blue-400 shadow-xl"></RoundIcon.Stamp>
          </div>
        </div>
      </div>

      <section className="bg-blue-500 py-16">
        <h1 className="h1 text-3xl font-bold text-center mb-2 text-white">
          Documents
        </h1>
        <p className="text-sm text-white text-center">
          Confidential property documents
        </p>
        <div className="flex gap-4 mt-8 center flex-wrap">
          <Button.Stamp></Button.Stamp>
          <Button.Stamp></Button.Stamp>
          <Button.Stamp></Button.Stamp>
          <Button.Stamp></Button.Stamp>
        </div>
      </section>

      <section className="my-10 mb-6">
        <h1 className="h1 text-3xl font-bold text-center mb-4 text-black">
          Location
        </h1>

        <img
          src="https://oryx.maxocart.com/assets/dream2earn/map_03.png"
          alt=""
        />
      </section>
      <section className="my-16 mb-4">
        <h1 className="h1 text-3xl font-bold text-center mb-2 text-black">
          Developer & Property Manager
        </h1>

        <div className="grid md:grid-cols-2 gap-y-8 place-items-center my-14">
          <div className="center flex-col max-w-lg gap-4">
            <h1 className="text-2xl">
                <img src="https://oryx.maxocart.com/assets/dream2earn/titan.svg" alt="" />
            </h1>
            <h2 className="text-sm font-bold ">
              Developer: Titan Real Estate Corp.
            </h2>
            <p className="text-xs text-gray-400 text-center">
              This company is fictitious and for illustrative purposes only.
              Titan is a multinational real estate development company based in
              London, UK. The company operates internationally and provides real
              estate development and management services.
            </p>
          </div>
          <div className="center flex-col max-w-lg gap-4">
            <h1 className="text-2xl">
                <img src="https://oryx.maxocart.com/assets/dream2earn/chill.svg" alt="" />
            </h1>
            <h2 className="text-sm font-bold ">
              Property Manager: Ben & Chill
            </h2>
            <p className="text-xs text-gray-400 text-center">
              This company is fictitious and for illustrative purposes only.
              Founded in 2012, Bed & Chill specializes in full-service property
              management services. The company’s mission is to help landlords
              save time and turn their house or apartment into a profitable
              revenue stream.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyDetail;
