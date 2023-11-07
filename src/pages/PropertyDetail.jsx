import React from "react";
import { Route, Link, Routes, useParams } from "react-router-dom";
import Label from "../components/Label";
import AccordionComponent from "../screens/Accordion";
import RoundIcon from "../components/RoundIcon";
import { IoMdPricetag } from "react-icons/io";
import Overview from "../screens/PropertyDetails/Overview";
import FinancialDetails from "../screens/PropertyDetails/FinancialDetails";
import AccordionDetail from "../screens/PropertyDetails/AccordionDetail";
import SpeculateEarn from "../screens/PropertyDetails/SpeculateEarn";
import Footer from "../screens/PropertyDetails/Footer";
import Location from "../screens/PropertyDetails/Location";
import DownloadSection from "../screens/PropertyDetails/DownloadSection";
import ExtraInfo from "../screens/PropertyDetails/ExtraInfo";
import PropertyImage from "../screens/PropertyDetails/Image";
import FirstViewDetails from "../screens/PropertyDetails/FirstViewDetails";
import BuyIt from "../screens/PropertyDetails/BuyIt";
import PriceHistory from "../screens/PropertyDetails/PriceHistory";

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
      <AccordionDetail></AccordionDetail>

      <SpeculateEarn></SpeculateEarn>

      <Overview></Overview>

      <FinancialDetails></FinancialDetails>

      <ExtraInfo></ExtraInfo>

      <DownloadSection></DownloadSection>

      <Location></Location>

      <Footer></Footer>
    </>
  );
};

export default PropertyDetail;
