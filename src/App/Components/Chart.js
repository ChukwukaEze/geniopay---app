import React from "react";
import UP from "../../assets/images/status-up.svg";
import MI from "../../assets/images/Received.svg";
import SD from "../../assets/images/Send.svg";
import fullchart from "../../assets/images/fullchart.svg";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

const ChartComponent = () => {
  const chartData = [];
  return (
    <div className="chart">
      <div className="chart_info">
        <div className="flex">
          <div className="trans_icon">
            <img className="icon-image" src={UP} alt="" />
          </div>
          <div>
            <p>Total transactions</p>
            <p>
              <strong>$88,600.00</strong>
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="trans_icon">
            <img className="icon-image" src={MI} alt="" />
          </div>
          <div>
            <p>Pay-In</p>
            <p>
              <strong>$4,600.00</strong>
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="trans_icon">
            <img className="icon-image" src={SD} alt="" />
          </div>
          <div>
            <p>Pay-Out</p>
            <p>
              <strong>$72,600.00</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="chart_image">
        <Chart
          type="line"
          data={{
            labels: [
              "Dec",
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
            ],
            datasets: [
              {
                id: 1,
                label: "",
                data: [0, 4000, 3000, 3500, 3000, 3000, 2000, 3000, 3700],
                fill: {
                  target: "origin",
                  above: "rgba(47, 162, 185, 0.12)",
                },
                display: true,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.5,
                options: {
                  scales: {
                    y: {
                      min: 1,
                      max: 4.2,
                      ticks: {
                        callback: function (value, index, values) {
                          return `$${value}k`;
                        },
                      },
                    },
                  },
                },
              },
            ],
          }}
        />
        {/* <img src={fullchart} alt="fullchart" /> */}
      </div>
    </div>
  );
};

export default ChartComponent;
