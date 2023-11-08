import React from "react";
import Heading from "../components/Heading";
import CarouselX from "../components/CarouselX";
import Card from "../components/Card";
import FilterForm from "../screens/FilterForm";

const UpcomingPage = () => {
  return (
    <>
      <Heading
        heading={"Upcoming Properties"}
        subHeading={
          "Mint exclusive Real Estate NFTs before they hit the secondary market"
        }
      ></Heading>

      <FilterForm></FilterForm>

      <div className="overflow-hidden my-8">
        <CarouselX>
          <Card>
            <Card.Progress />
          </Card>
          <Card>
            <Card.Progress />
          </Card>
          <Card>
            <Card.Progress />
          </Card>
          <Card>
            <Card.Progress />
          </Card>
          <Card>
            <Card.Progress />
          </Card>
          <Card>
            <Card.Progress />
          </Card>
          <Card>
            <Card.Progress />
          </Card>
          <Card>
            <Card.Progress />
          </Card>
        </CarouselX>
      </div>
    </>
  );
};

export default UpcomingPage;
