import React from "react";

import ChartComponent from "../../../Components/Chart";

const Activity = () => {
  return (
    <div className="activity">
      <div className="flex_between unflex">
        <div className="flex my-20">
          <h2>Activity</h2>
          <select name="" id="" className="text_secondary">
            <option value="Month">Month</option>
            <option value="Day">Day</option>
          </select>
        </div>
        <p className="text_secondary deeper-color">View Transaction History</p>
      </div>
      <ChartComponent />
    </div>
  );
};

export default Activity;
