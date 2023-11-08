import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
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
  );
};

export default Banner;
