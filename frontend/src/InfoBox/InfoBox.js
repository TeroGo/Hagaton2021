import React from "react";
import { nameOfFood } from "../App";

const InfoBox = (props) => {
  let test = "apina";
  if (props.dataFromParent.ingredients) {
    test = props.dataFromParent.ingredients[0].FOODID;
  }
  return <div>{test}</div>;
};

export default InfoBox;
