import React from 'react';

require('dotenv').config();

const api = {
  key: process.env.OPEN_WEATHER_API_KEY,
  base: 'https://api.openweathermap.org/data/2.5/'
}




function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        </div>
      </main>

    </div>
  );
}

export default App;
