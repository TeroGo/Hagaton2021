import React from "react";

const InfoBox = (props) => {
  console.log(props.dataFromParent);

  const content = () => {
    if (!props.dataFromParent?.ingredients) return "";
    return props.dataFromParent.ingredients[0].calories;
  };

  const text = content() || "apina";

  return (
    <div>
      <p>100g annos vastaa noin:</p>
      <ul>
        <li>125 sokeripalaa tai</li>
        <li>0.00005 grammaa uraania</li>
      </ul>

      {text}
    </div>
  );
};

export default InfoBox;
