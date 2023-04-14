const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

let initialAmount = 10000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/profit', (req, res) => {
  initialAmount += 2250;
  res.send(initialAmount.toString());
});

app.get('/loss', (req, res) => {
  initialAmount -= 750;
  res.send(initialAmount.toString());
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
