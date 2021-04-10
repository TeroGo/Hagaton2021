

const carbDataField = 'CHOAVL';
const fatDataField = 'FAT';
const proteinDataField = 'PROT';
const energyDataField = 'ENERC';
const componentAmountDataField = 'BESTLOC';

const handleFoodComponentData = (object, summary, foodItem, foodData) => {
  const findComponentType = (id, dataField) => {
    const row = foodData.component_value.find(component =>
      component.FOODID === id &&
      component.EUFDNAME === dataField);
    
    const amount = row[`${componentAmountDataField}`].replace(',', '.');
    return parseFloat(amount);
  }
  // Repetitio mater studiorum est, or something like that?
  const carbs = findComponentType(foodItem.FOODID, carbDataField);
  const fat = findComponentType(foodItem.FOODID, fatDataField);
  const proteins = findComponentType(foodItem.FOODID, proteinDataField);
  const energy = findComponentType(foodItem.FOODID, energyDataField);

  object.fat = fat;
  object.carbs = carbs;
  object.protein = proteins;
  object.calories = energy;
  summary.fat += fat;
  summary.carbs += carbs;
  summary.protein += proteins;
  summary.calories += energy;
};


const polishSummaryFields = (summary, ingredients, weight, fields) => {
  fields.forEach(element => {
     summary[`${element}`] = summary[`${element}`] / ingredients * (weight / 100.0);
  });
};

const processFoodData = (foodData, queryText, foundIngredients, summary) => {
  foodData.food.forEach(element => {
    const regex = new RegExp(`.*${element.FOODNAME}.*`, 'i');
    if(queryText.match(regex)) {
      const ingredient = {
        name: element.FOODNAME,
        calories: 0,
        carbs: 0,
        fat: 0,
        protein: 0
      };
      handleFoodComponentData(ingredient, summary, element, foodData);
      foundIngredients.push(ingredient);
    }
  });
}

module.exports = {
  polishSummaryFields,
  processFoodData
}