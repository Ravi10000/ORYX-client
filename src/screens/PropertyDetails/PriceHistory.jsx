import React from "react";
import { HR } from "../../components/Heading";
import MyChart from "../../components/MyChart";

const PriceHistory = () => {
  return (
    <div>
      <h2 className="text-sm text-gray-500">Price History</h2>
      <HR></HR>

      <MyChart />
    </div>
  );
};

export default PriceHistory;
