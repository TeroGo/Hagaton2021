import React from "react";
import styles from "./Chart.module.css";
import { VictoryPie } from "victory-pie";

const Chart = (props) => {
  console.log(props.data);

  var chartData;
  function HandleZeroToEmptyStr(number, str) {

    if (number === 0) return " "
    return str;   // The function returns the product of p1 and p2
  }

  const hasData = Object.keys(props.data).length !== 0;

  if (hasData) {
    chartData = [
      {
        x: HandleZeroToEmptyStr(props.data?.summary.carbs, `Carbs: ${props.data?.summary.carbs}`),
        y: props.data?.summary.carbs,
      },
      { x: HandleZeroToEmptyStr(props.data?.summary.fat, `Fat: ${props.data?.summary.fat}`) ,
        y: props.data?.summary?.fat },
      {
        x: HandleZeroToEmptyStr(props.data?.summary.protein, `Protein: ${props.data?.summary.protein}`),
        y: props.data?.summary?.protein,
      },
    ];
  }
  // empty if no data
  return (
    <div className={styles.chartContainer}>
      {hasData && (
        <VictoryPie
          data={chartData}
          colorScale={["#6E0DDD", "#FF6600", " #FF0099", "red"]}
          radius={100}
        />
      )}
    </div>
  );
};

export default Chart;
