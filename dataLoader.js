const csv = require('csv-parser')
const fs = require('fs');
const path = require('path');

const loadFoodData = (filesToRead, foodData) => {
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
}

module.exports = {
  loadFoodData
};