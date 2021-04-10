const natural = require('natural');
const csv = require('csv-parser');
const fs = require('fs')
const path = require('path');

const classifier = new natural.BayesClassifier();
const results = [];
let classifierTrained = false;

fs.createReadStream(path.join(__dirname, 'data/classifier/trainingset-1.csv'))
  .pipe(csv({ separator: ';', headers: ['classification', 'text'] }))
  .on('data', (data) => results.push(data))
  .on('end', () => {
    results.forEach(({ classification, text }) => {
      classifier.addDocument(text, classification);
    });
    classifier.train();
    classifierTrained = true;
    console.log('Finished training classifier');
  });

module.exports = {
  classify: function(text) {
    if(classifierTrained) {
      return classifier.classify(text);
    } else {
      return 'Classifier not trained';
    }
  }
};
