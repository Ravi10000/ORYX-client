import React from "react";
import Heading from "../components/Heading";
import FilterForm from "../screens/FilterForm";
import CarouselX from "../components/CarouselX";
import Card from "../components/Card";

const Auctions = () => {
  return (
    <>
      <Heading
        heading={"auctions"}
        subHeading={"Get real estate NFTs at the lowest price."}
      ></Heading>

      <FilterForm></FilterForm>

      <div className="overflow-hidden my-8">
        <CarouselX>
          <Card>
            <Card.BidStatus />
          </Card>
          <Card>
            <Card.BidStatus />
          </Card>
          <Card>
            <Card.BidStatus />
          </Card>
          <Card>
            <Card.BidStatus />
          </Card>
        </CarouselX>
      </div>
    </>
  );
};

export default Auctions;
