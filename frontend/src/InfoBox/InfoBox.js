import React from "react";

const InfoBox = (props) => {
  console.log(props.dataFromParent);

  const content = () => {
    if (Object.keys(props.dataFromParent).length === 0) return "";
    return (
      <>
        <div>
          {"Main ingredient: " + props.dataFromParent.ingredients[0].name}
        </div>
        <div>
          {" Calories " +
            props.dataFromParent.ingredients[0].calories +
            " / Carbs " +
            props.dataFromParent.ingredients[0].carbs +
            " / Fats " +
            props.dataFromParent.ingredients[0].fat +
            " / Protein " +
            props.dataFromParent.ingredients[0].protein}
        </div>
      </>
    );
  };

  const text = content() || "";

  return <div>{text}</div>;
};

export default InfoBox;
