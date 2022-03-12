import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function weatherDisplay(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });
  }

  function searchSubmit(event) {
    event.preventDefault();
    let apiKey = "63557c3b856339c603d5ab6d7046f330";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(weatherDisplay);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={searchSubmit}>
      <input type="search" placeholder="Enter a city.." onChange={updateCity} />
      <button type="Submit">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>
            Temperature:<strong> {Math.round(weather.temperature)}°C</strong>
          </li>
          <br />
          <li>
            Description: <strong> {weather.description}</strong>
          </li>
          <br />
          <li>
            Humidity: <strong>{weather.humidity}%</strong>
          </li>
          <br />
          <li>
            Wind:<strong> {weather.wind}km/h</strong>
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
