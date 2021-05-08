import React, { useState } from 'react';

require('dotenv').config();

console.log(process.env.REACT_APP_TEST);

const api = {
  key: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
  base: 'https://api.openweathermap.org/data/2.5/'
}




function App() {


  /*
  const [query, setQuery] = useState('');

  const [weather, setWeather] = useState({});

  // evt = event
  // sending an api request using fetch
  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }
  */

  return (

    <main>
      <body>
        <div className="upload-music-info">
          <button className="upload-music-button">Upload Music</button>

        </div>
        <form action='/action_page.php'>
          <input type='file' id='myFile' name='filename'></input>
          <input type='submit'></input>
        </form>
      </body>
    </main>
  );
}

export default App;
