import React from "react";
//import styles from "./Chart.module.css";
import { VictoryPie } from "victory-pie";

const myData = [
  { x: "Group A", y: 900 },
  { x: "Group B", y: 400 },
  { x: "Group C", y: 300 },
];


const Chart = () => {
  return (
          <VictoryPie
            data={myData}
            colorScale={["blue", "yellow", "red"]}
            radius={100}
          />
        
  );
};

export default Chart;
