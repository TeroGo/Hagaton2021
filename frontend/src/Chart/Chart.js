import React from "react";
import styles from "./Chart.module.css";
import { VictoryPie } from "victory-pie";

const Chart = (props) => {
  console.log(props.data);

  var chartData;

  const hasData = Object.keys(props.data).length !== 0;

  if (hasData) {
    chartData = [
      {
        x: `Carbs: ${props.data?.summary.carbs}`,
        y: props.data?.summary.carbs,
      },
      { x: `Fat: ${props.data?.summary.fat}`, y: props.data?.summary?.fat },
      {
        x: `Protein: ${props.data?.summary.protein}`,
        y: props.data?.summary?.protein,
      },
    ];
  }
  // empty if no data
  return (
    <div>
      {hasData && (
        <VictoryPie
          data={chartData}
          colorScale={["skyblue", "teal", "maroon", "pink"]}
          radius={100}
        />
      )}
    </div>
  );
};

export default Chart;
