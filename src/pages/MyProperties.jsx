import React from "react";
import Heading from "../components/Heading";
import CarouselX from "../components/CarouselX";
import Card from "../components/Card";
import FilterForm from "../screens/FilterForm";

const MyProperties = () => {
  return (
    <div>
      <Heading
        heading={"My Properties"}
        subHeading={"Find all of your properties in one place."}
      ></Heading>
      <FilterForm></FilterForm>

      <div className="py-10 overflow-hidden">
        <CarouselX>
          <Card>
            <Card.MortageInfo></Card.MortageInfo>
          </Card>
          <Card>
            <Card.MortageInfo></Card.MortageInfo>
          </Card>
          <Card>
            <Card.MortageInfo></Card.MortageInfo>
          </Card>
          <Card>
            <Card.MortageInfo></Card.MortageInfo>
          </Card>
        </CarouselX>
      </div>
    </div>
  );
};

export default MyProperties;
