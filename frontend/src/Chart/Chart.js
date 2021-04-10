import React from "react";
//import styles from "./Chart.module.css";
import { VictoryPie } from "victory-pie";
import { chartData } from "../App";



const Chart = () => {
  return (
          <VictoryPie
            data={chartData}
            colorScale={["skyblue", "teal", "maroon", "pink"]}
            radius={100}
          />
        
  );
};

export default Chart;
