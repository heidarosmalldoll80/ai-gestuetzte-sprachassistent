const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = () => {
  console.log('Spracherkennung gestartet.');
};

recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  console.log(`Erkannte Sprache: ${transcript}`);
  // Hier können Sie die Logik zur Verarbeitung der Sprache hinzufügen
};

function startRecognition() {
  recognition.start();
}

module.exports = { startRecognition };