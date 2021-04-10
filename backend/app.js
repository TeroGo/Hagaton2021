const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/JSON'});

  res.end(JSON.stringify({
    mainIngreadient: 'chicken',
    calories: 500
  }));
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
