const https = require('https');
const fs = require('fs');
const express = require('express');

const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem")
};

const app = express();

app.use((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/JSON'});

  res.end(JSON.stringify({
    mainIngreadient: 'chicken',
    calories: 500
  }));
});

app.listen(8000);

https.createServer(options, app).listen(8080);
console.log('Node server running on port 8080');
