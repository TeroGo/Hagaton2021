const natural = require('natural');
const csv = require('csv-parser');
const fs = require('fs')
const results = [];

const classifier = new natural.BayesClassifier();

fs.createReadStream('data/classifier/trainingset-1.csv')
  .pipe(csv({ separator: ';', headers: ['classification', 'text'] }))
  .on('data', (data) => results.push(data))
  .on('end', () => {
    results.forEach(({ classification, text }) => {
      classifier.addDocument(text, classification);
    });
    classifier.train();

    console.log(classifier.classify('Paahdettua siikaa'));
  });

