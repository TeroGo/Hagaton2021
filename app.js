const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const { classify } = require('./classifier');
const {
  polishSummaryFields,
  processFoodData
} = require('./ingredientScraper');
const {loadFoodData} = require('./dataLoader');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public/build')));

const filesToRead = [
  'food',
  'component_value'
];

const foodData = {
};

loadFoodData(filesToRead, foodData);

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

  processFoodData(foodData, queryText, foundIngredients, summary)
  polishSummaryFields(summary, foundIngredients.length, weight, ['fat', 'carbs', 'protein', 'calories']);

  res.end(JSON.stringify({
    summary,
    ingredients: foundIngredients
  }));
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
