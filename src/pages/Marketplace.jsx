import React from "react";
import CarouselX from "../components/CarouselX";
import Card from "../components/Card";
import Heading from "../components/Heading";
import Input from "../components/Input";

const Marketplace = () => {
  return (
    <>
      <Heading
        heading={"Marketplace"}
        subHeading={"Buy and Sell Real Estate NFTs Within Seconds"}
      ></Heading>

      <form className="flex py-3 2xl:gap-10 gap-5 flex-wrap">
        <Input.Select />
        <Input.Search
          className="flex-1"
          name={"search"}
          placeholder={"search by name"}
        ></Input.Search>
        <Input.Select />
        <Input.Select />
        <Input.Select />
        <Input.Select />
        <input
          type="reset"
          value={"clear all filters"}
          className="text-gray-500 capitalize font-semibold"
        />
      </form>

      <div className="overflow-hidden my-8">
        <CarouselX>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </CarouselX>
      </div>
    </>
  );
};

export default Marketplace;
