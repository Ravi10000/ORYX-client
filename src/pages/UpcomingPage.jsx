import React from "react";
import Heading from "../components/Heading";
import Select from "../components/Select";
import Search from "../components/Search";
import CarouselX from "../components/CarouselX";
import Card from "../components/Card";

const UpcomingPage = () => {
  return (
    <>
      <Heading
        heading={"Upcoming Properties"}
        subHeading={
          "Mint exclusive Real Estate NFTs before they hit the secondary market"
        }
      ></Heading>

      <form className="flex py-3 2xl:gap-10 gap-5 flex-wrap">
        <Select></Select>
        <Search
          className="flex-1"
          name={"search"}
          placeholder={"search by name"}
        ></Search>
        <Select></Select>
        <Select></Select>
        <Select></Select>
        <Select></Select>
        <input
          type="reset"
          value={"clear all filters"}
          className="text-gray-500 capitalize font-semibold"
        />
      </form>

      <div className="overflow-hidden my-8">
        <CarouselX>
          <Card isProgress={true}></Card>
          <Card isProgress={true}></Card>
          <Card isProgress={true}></Card>
          <Card isProgress={true}></Card>
          <Card isProgress={true}></Card>
          <Card isProgress={true}></Card>
          <Card isProgress={true}></Card>
          <Card isProgress={true}></Card>
        </CarouselX>
      </div>
    </>
  );
};

export default UpcomingPage;
