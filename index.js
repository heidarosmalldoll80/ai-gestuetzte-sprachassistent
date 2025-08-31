const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Willkommen zum KI-gestützten Sprachassistenten!');
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});