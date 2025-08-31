const express = require('express');
const { startRecognition } = require('./speechRecognition');

const app = express();
app.use(express.json());

app.post('/command', (req, res) => {
  const command = req.body.command;
  console.log(`Received command: ${command}`);
  // Here you can add the command processing logic
  res.status(200).send({ message: `Command ${command} processed.` });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
  startRecognition();
});