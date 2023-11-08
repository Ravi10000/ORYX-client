import React from "react";
import { Link } from "react-router-dom";

import Button from "../components/Button";
import Card from "../components/Card";
import Table from "../components/Table";

import RoundIcon from "../components/RoundIcon";
import CardImage from "../components/CardImage";

import CarouselX from "../components/CarouselX";

const Dashboard = () => {
  return (
    <>
      <div className="w-full p-8 bg-blue-400 rounded-xl">
        <h1 className="text-3xl font-bold text-white">
          Buy Your First Real Estate in Seconds
        </h1>
        <div className="md:px-7 py-5">
          <p className="text-xs text-white">
            The world &apos;s first NFT marketplace backed by real-world
            properties
          </p>

          <div className="flex pt-7 gap-5 whitespace-nowrap flex-wrap">
            <Link className="p-7 text-lg">Join Please Now</Link>
            <div className="px-5">
              <Button className="w-fit px-5 bg-transparent border-2 border-primary">
                How It works
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-r my-4">
        <h1 className="h1">Discover New Properties</h1>

        {/* <div className="flex gap-5 flex-wrap mx-auto"> */}
        <div className="overflow-hidden">
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
