const express = require('express');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 5000;
const csv = require('csv-parser')
const fs = require('fs');
const { classify } = require('./classifier');
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public/build')));

const filesToRead = [
  'food',
  'component_value'
];
const foodData = {};

filesToRead.forEach(element => {
  fs.createReadStream(path.join(__dirname, 'data/finelli/'+ element + '.csv'))
  .pipe(csv({ separator: ';'}))
  .on('data', (data) => {
    if (!foodData[`${element}`]) {
      foodData[`${element}`] = [];
    }
    foodData[`${element}`].push(data);
  })
  .on('end', () => {
    // console.log(foodData[`${element}`]);
  });
});

const carbDataField = 'CHOAVL';
const fatDataField = 'FAT';
const proteinDataField = 'PROT';
const energyDataField = 'ENERC';
const componentAmountDataField = 'BESTLOC';

const handleFoodComponentData = (object, summary, foodItem) => {
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
app.get('/api/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/JSON'});
  const queryText = req.query.text;
  if(!queryText){
    res.status(400);
    res.end('Provide queryText');
  }
  const weight = req.query.weight || 100;
  const foundIngredients = [];
  const classification = classify(queryText || '');
  const summary = {
    name: queryText,
    calories: 0,
    carbs: 0,
    fat: 0,
    protein: 0,
    classification
  };

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
      handleFoodComponentData(ingredient, summary, element);

      console.log(ingredient);
      foundIngredients.push(ingredient);
    }
  });
  polishSummaryFields(summary, foundIngredients.length, weight, ['fat', 'carbs', 'protein', 'calories']);

  res.end(JSON.stringify({
    summary,
    ingredients: foundIngredients
  }));
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
