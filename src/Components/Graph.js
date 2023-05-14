import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);
const Graph = ({ nearasteroids,noofasteroids }) => {
   console.log('noofasteroids',noofasteroids);
  var arr = [];
  // console.log('nearugd', nearasteroids);
   
  const data={
  labels:nearasteroids,
   
    datasets: [
      {
        label: "First Dataset",
        data:noofasteroids.map((asteroid) => asteroid.count),

       borderColor: "green",
         tension: 0.4,

         pointStyle: "rect",
         pointBorderColor: "blue",

         showLine: true,
      }
    ]
  };
  return (
    <div className="graph">
      <Line data={data}>Hello</Line>
      {/* <div>{lowerlabel}</div> */}
    </div>
  );
};

export default Graph;
