const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('3000', (req, res) => {
  const content = fs.readFileSync('text.txt', 'utf-8');
  res.send(content);
});

app.post('3000', (req, res) => {
  const body = req.body;
  fs.appendFileSync('text.txt', body);
  res.send('Data added to file');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});