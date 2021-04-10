import React from "react";

const InfoBox = (props) => {
  console.log(props.dataFromParent);

  const content = () => {
    if (Object.keys(props.dataFromParent).length === 0) 
       return "";
    return "Main dish: "+props.dataFromParent.ingredients[0].name
    + " Calories "+ props.dataFromParent.ingredients[0].calories 
    + " / Carbs "+ props.dataFromParent.ingredients[0].carbs    
    + " / Fats "+ props.dataFromParent.ingredients[0].fat  
    + " / Protein "+ props.dataFromParent.ingredients[0].protein ;
  };

  const text = content() || " ";

  return (
    <div>
      <p>100g contains about:</p>
      {text}
    </div>
  );
};

export default InfoBox;
