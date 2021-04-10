const {
  polishSummaryFields,
  processFoodData
} = require('./ingredientScraper');
const {loadFoodData} = require('./dataLoader');
const {expect} = require('./testUtils');

const foodData = {};

const filesToRead = [
  'food',
  'component_value'
];

loadFoodData(filesToRead, foodData);

const test = (text, expected, reason) => {
  const ingredients = [];
  const summary = {};
  
  processFoodData(foodData, text, ingredients, summary);
  expect(reason, !!ingredients.find((element) => element.name.toLowerCase() === expected.toLowerCase()), true);
};

setTimeout(() => {
  test('kanaaa', 'kana', 'Haettiin kanaa ruoasta');
}, 1000);


