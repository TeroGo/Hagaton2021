const natural = require('natural');
const csv = require('csv-parser');
const fs = require('fs')
const results = [];

const classifier = new natural.BayesClassifier();

function expect(reason, value, expected) {
  if(value !== expected) {
    console.info(`\u274C ${reason}`);
    console.error(`Error: Expected ${expected}, got: ${value}`);
    process.exit(-1);
  } else {
    console.info(`\u2705 ${reason}`);
  }
}

fs.createReadStream('data/classifier/trainingset-1.csv')
  .pipe(csv({ separator: ';', headers: ['classification', 'text'] }))
  .on('data', (data) => results.push(data))
  .on('end', () => {
    results.forEach(({ classification, text }) => {
      classifier.addDocument(text, classification);
    });
    classifier.train();

    expect('Paahdettua siikaa', classifier.classify('Paahdettua siikaa'), 'WHITE_FISH');
    expect('Possua', classifier.classify('Possua'), 'PORK');
  });
