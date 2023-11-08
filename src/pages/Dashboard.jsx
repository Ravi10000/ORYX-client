import React from "react";
import { Link } from "react-router-dom";

import Button from "../components/Button";
import Card from "../components/Card";
import Table from "../components/Table";

import RoundIcon from "../components/RoundIcon";
import CardImage from "../components/CardImage";

import CarouselX from "../components/CarouselX";
import Banner from "../screens/Banner";

const Dashboard = () => {
  return (
    <>
      <Banner />
      
      <div className="container-r my-4">
        <h1 className="h1">Discover New Properties</h1>

        {/* <div className="flex gap-5 flex-wrap mx-auto"> */}
        <div className="overflow-hidden">
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
      </div>

      <div className="container-r">
        <h1 className="h1 font-bold">Metropoly so far</h1>

        <div className="flex justify-evenly center flex-wrap">
          <RoundIcon></RoundIcon>
          <RoundIcon></RoundIcon>
          <RoundIcon></RoundIcon>
          <RoundIcon></RoundIcon>
        </div>
      </div>

      <div className="container-r">
        <h1 className="h1 h1-between">
          <span>All-Time Leaderboards</span>
          <Link to={"#"} className="text-blue-600 underline">
            View All
          </Link>
        </h1>
        <Table></Table>
      </div>

      <div className="container-r">
        <h1 className="h1 h1-between">
          <span>Property of the Day</span>
          <Link to={"#"} className="text-blue-600 underline">
            Info
          </Link>
        </h1>

        <CardImage />
      </div>

      <div className="container-r">
        <h1 className="h1 h1-between">
          <span>Trending Real Estate NFTs</span>
          <Link to={"#"} className="text-blue-600 underline">
            View all
          </Link>
        </h1>

        <Table></Table>
      </div>
    </>
  );
};

export default Dashboard;
