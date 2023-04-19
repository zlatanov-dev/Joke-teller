import { VoiceRSS } from "./voice.js";
const button = document.getElementById('button');
const audioElement = document.getElementById('audio');


// Disable/Enable Button
function toggleButton() {
    button.disabled = !button.disabled;
}

// Passing Joke to VoiceRSS API
function tellMe(joke) {
    VoiceRSS.speech({
      // The API key is left vissible for a purpose
        key: '69725f5ce992423485d5ad99cdf98f09',
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    })
}


// Get Jokes From Joke API
async function getJokes() {
  const apiUrl = "https://v2.jokeapi.dev/joke/Programming";
  let joke = "";
  try {
    const repsonse = await fetch(apiUrl);
    const data = await repsonse.json();
    if (data.setup) {
      joke = `${data.setup}...${data.delivery}`;
    } else {
      joke = data.joke;
    }
    // Text-to-Speech
    tellMe(joke);

    // Disable Button
    toggleButton();
  } catch (error) {
    console.log("Whoops", error.message);
  }
}

// Event Listeners
button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);