import React from "react";
import Heading from "../components/Heading";
import CarouselX from "../components/CarouselX";
import Card from "../components/Card";

const Favorites = () => {
  return (
    <>
      <Heading
        heading={"favorites"}
        subHeading={"All of your favorite real estate NFTs in one place."}
      ></Heading>

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

export default Favorites;
