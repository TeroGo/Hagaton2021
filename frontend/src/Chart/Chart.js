import React from "react";
//import styles from "./Chart.module.css";
import { VictoryPie } from "victory-pie";
  

const Chart = (props) => {

 
    var chartData = [];

    if(props.data !==null && props.data.summary !==null && props.data.summary.calories !== null){
      chartData = [
        { x: "Calories", y: props.data?.summary?.calories},
        { x: "Group Carb", y: props.data?.summary?.carbs },
        { x: "Fat", y: props.data?.summary?.fat },
        { x: "Protein", y: props.data?.summary?.protein }
      ];
    }
   // empty if no data
    return (
    <div>
          {props.data && <VictoryPie
            data={chartData}
            colorScale={["skyblue", "teal", "maroon", "pink"]}
            radius={100}
          />}
    </div>
  );
};

export default Chart;
