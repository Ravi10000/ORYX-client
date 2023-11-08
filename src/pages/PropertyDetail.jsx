import React from "react";
import { useParams } from "react-router-dom";
import {
  Overview,
  FinancialDetails,
  AccordionDetail,
  SpeculateEarn,
  Footer,
  Location,
  DownloadSection,
  ExtraInfo,
  PropertyImage,
  FirstViewDetails,
  BuyIt,
  PriceHistory,
} from "../screens/PropertyDetails";

const Container = ({ children }) => {
  return (
    <div className="2xl:grid grid-rows-2 2xl:grid-cols-2 gap-8 gap-y-8">
      {children}
    </div>
  );
};

const PropertyDetail = () => {
  const params = useParams();

  return (
    <>
      <Container>
        <PropertyImage />
        <FirstViewDetails />
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
    </>
  );
};

export default PropertyDetail;
