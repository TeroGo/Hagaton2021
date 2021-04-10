import React from "react";
import styles from "./Chart.module.css";
import { VictoryPie } from "victory-pie";

const Chart = (props) => {
  console.log(props.data);

  var chartData;
  var isThereData = Object.keys(props.data).length !== 0;
  if (isThereData) {
    chartData = [
      { x: "Carb", y: props.data?.summary.carbs },
      { x: "Fat", y: props.data?.summary?.fat },
      { x: "Protein", y: props.data?.summary?.protein },
    ];
  }
  // empty if no data
  return (
    <div className={styles.chartContainer}>
      {isThereData && (
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
