import React, { useState } from "react";
import "./App.css";

const mockWeatherData = {
  city: "New York",
  temperature: "25°C",
  description: "Sunny",
  humidity: "60%",
  wind: "10 km/h",
};

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const handleSearch = () => {
    // Simulate fetching weather data based on the input city
    if (city.toLowerCase() === "new york") {
      setWeather(mockWeatherData);
    } else {
      alert("Weather data not available for this city.");
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Get Weather</button>

      {weather && (
        <div className="weather-info">
          <h2>{weather.city}</h2>
          <p>Temperature: {weather.temperature}</p>
          <p>Description: {weather.description}</p>
          <p>Humidity: {weather.humidity}</p>
          <p>Wind: {weather.wind}</p>
        </div>
      )}
    </div>
  );
}

export default App;
