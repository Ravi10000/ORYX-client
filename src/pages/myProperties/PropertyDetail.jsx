import React from "react";
import { useLocation } from "react-router-dom";
import {
  Overview,
  FinancialDetails,
  AccordionDetail,
  SpeculateEarn,
  Footer,
  Location,
  DownloadSection,
  ExtraInfo,
  BuyIt,
  PriceHistory,
} from "../../screens/PropertyDetails";

import Label from "../../components/Label";
import { IoBedOutline, IoLocationSharp } from "react-icons/io5";
import { BiShareAlt } from "react-icons/bi";
import { PiUsersThree } from "react-icons/pi";
import Stamp from "../../components/Stamp";
import { CiMoneyBill } from "react-icons/ci";
import CarouselX from "../../components/CarouselX";

const Container = ({ children }) => {
  return (
    <div className="xl:grid grid-rows-2 xl:grid-cols-2 gap-8 gap-y-8">
      {children}
    </div>
  );
};

function PropertyDetail() {
  const location = useLocation();
  const property = location.state;

  return (
    <>
      <div className="sm:px-10 xl:px-0">
        <Container>

          <div className="mb-10 xl:mb-0">
            {property && (
              <CarouselX superLargeDesktop={1} desktop={1} tablet={1} mobile={1}>
                {property?.images?.map((image, index) => (
                  <div key={index}>
                    <img
                      src={`${import.meta.env.VITE_ASSET_URI}/${image?.url}`}
                      alt="property image"
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </CarouselX>
            )}

            {/* <div className="w-10 h-10 rounded-full bg-white absolute top-5 right-5 center">
          className="rounded-xl overflow-hidden mb-4 2xl:m-0 relative"
            <AiOutlineHeart color="#87CEEB" size={22} />
          </div> */}

          </div>

          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-3">
              <Label.Bordered>
                <IoBedOutline />
                <span>Beds | 1,793 sqft</span>
              </Label.Bordered>
              <BiShareAlt size={24} color="gray" />
            </div>

            <div className="flex-1 flex flex-col justify-between gap-y-4">
              <div className="flex flex-col gap-4">
                <div className="h1 font-bold text-3xl">
                  {property?.name}
                </div>
                <div className="flex justify-between">
                  <Label.Text>
                    <PiUsersThree />
                    <span>600 owners</span>
                  </Label.Text>
                  <Label.Text>
                    <PiUsersThree />
                    <span>600 owners</span>
                  </Label.Text>
                  <Label.Text>
                    <PiUsersThree />
                    <span>600 owners</span>
                  </Label.Text>
                </div>
                <div className="text-blue-600 flex gap-3 center justify-start">
                  <IoLocationSharp size={21} />
                  <span className="text-gray-400 text-lg">
                    House, Stockholm, Sweden
                  </span>
                </div>
              </div>

              <div className="grid grid-rows-2 sm:grid-cols-2 gap-4 mb-4">
                <Stamp></Stamp>
                <Stamp value={property.dividendYield} valueUnit={"%"} title={"Dividend Yield"} icon={<CiMoneyBill />} ></Stamp>
              </div>
            </div>
          </div>

          <PriceHistory />
          <BuyIt />

        </Container>

        {/* Accordion  */}
        <AccordionDetail />

        <SpeculateEarn />

        <Overview />

        <FinancialDetails />

        <ExtraInfo />

        <DownloadSection />

        <Location />

        <Footer />
      </div>
    </>
  );
};

export default PropertyDetail;
