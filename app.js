const express = require('express');
const { startRecognition } = require('./speechRecognition');

const app = express();
app.use(express.json());

app.post('/command', (req, res) => {
  const command = req.body.command;
  console.log(`Empfangener Befehl: ${command}`);
  // Hier können Sie die Logik zur Befehlsverarbeitung hinzufügen
  res.send(`Befehl ${command} verarbeitet.`);
});

app.listen(3000, () => {
  console.log('Server läuft auf Port 3000');
  startRecognition();
});