Joke Teller

Try it! - https://joke-teller.github.io/

This is a simple JavaScript application that fetches programming-related jokes from the Joke API and converts them to speech using the VoiceRSS API.
Usage

    Clone or download the repository.
    Open index.html in a web browser.
    Click on the "Tell Me A Joke" button to hear a joke.

How it Works

The app uses the fetch() method to make a request to the Joke API and retrieve a joke. If the joke consists of a setup and delivery, the two are concatenated and passed to the tellMe() function, which uses the VoiceRSS API to convert the joke to speech. If the joke is a one-liner, it is passed directly to tellMe().

The toggleButton() function is used to enable or disable the "Tell Me A Joke" button. The button is disabled while the joke is being fetched and converted to speech, and re-enabled once the conversion is complete.

Dependencies

    voice.js - a JavaScript module that provides an interface to the VoiceRSS API.
