const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = () => {
  console.log('Speech recognition started.');
};

recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  console.log(`Recognized speech: ${transcript}`);
  // Add logic for processing the speech here
};

function startRecognition() {
  recognition.start();
}

module.exports = { startRecognition };