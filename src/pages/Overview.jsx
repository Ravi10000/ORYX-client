import React from "react";
import Heading from "../components/Heading";
import OverviewCard from "../components/OverviewCard";
import Table from "../components/Table";
import { Link } from "react-router-dom";

const Overview = () => {
  return (
    <div>
      <Heading heading={"Overview"} isHorizontalline={false}></Heading>

      <div className="grid 2xl:grid-cols-4 py-10 gap-6 md:grid-cols-3 grid-cols-2">
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
      </div>

      <div className="h1 h1-between">
        <Heading
          heading={"Recent Transactions"}
          isHorizontalline={false}
        ></Heading>
        <Link to={"#"} className="text-blue-600 underline">
          View All
        </Link>
      </div>

      <div className="py-10">
        <Table.Colored></Table.Colored>
      </div>

      <div className="py-10">
        <div className="border border-gray-300 rounded-lg flex flex-col gap-2 p-4">
          <div className="flex justify-between">
            <h2 className="font-semibold text-lg">Portfolio</h2>
            <h2 className="font-medium">USD 156,790</h2>
          </div>
          <div className="flex justify-between">
            <h2 className="font-semibold text-lg">Annual Rental Income</h2>
            <h2 className="font-medium">USD 156,790</h2>
          </div>
          <div className="flex justify-between">
            <h2 className="font-semibold text-lg">Total Profit/Loss</h2>
            <h2 className="font-medium">USD 156,790</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
