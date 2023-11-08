import React from "react";
import CarouselX from "../components/CarouselX";
import Card from "../components/Card";
import Heading from "../components/Heading";
import FilterForm from "../screens/FilterForm";

const Marketplace = () => {
  return (
    <>
      <Heading
        heading={"Marketplace"}
        subHeading={"Buy and Sell Real Estate NFTs Within Seconds"}
      />

      <FilterForm />

      <div className="overflow-hidden my-8">
        <CarouselX>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CarouselX>
      </div>
    </>
  );
};

export default Marketplace;
