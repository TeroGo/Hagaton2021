const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const csv = require('csv-parser')
const fs = require('fs');

const app = express();
app.use(express.static(path.join(__dirname, 'public/build')));

const filesToRead = [
  'food',
  'component_value'
];
const foodData = {};

filesToRead.forEach(element => {
  fs.createReadStream('data/finelli/'+ element + '.csv')
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



app.get('/api/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/JSON'});
  const queryText = req.query.text;
  const foundIngredients = [];

  if (queryText) {
    foodData.food.forEach(element => {
      const regex = new RegExp(`.*${element.FOODNAME}.*`, 'i');
      if(queryText.match(regex)) {
        console.log('found ' + element);
        foundIngredients.push(element);
      }
    });
  }
  console.log(queryText);

  res.end(JSON.stringify({
    ingredients: foundIngredients,
    calories: 5000
  }));
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
