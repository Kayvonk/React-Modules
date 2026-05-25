// LESSON: Dependency Arrays
// Including a state variable in the dependency array causes the effect to re-run
// whenever that variable changes — perfect for re-fetching when a selection changes.

import { useState, useEffect } from 'react';

const CITIES = ['Austin', 'Chicago', 'Denver', 'Seattle', 'Miami'];

interface WeatherData {
  name:    string;
  main:    { temp: number; humidity: number };
  weather: { description: string }[];
}

export default function App() {
  // TODO 1: Declare a selectedCity state variable starting as CITIES[0].
  //         Wire each city button's onClick to update selectedCity.

  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    // This is a simulated response — replace with a real fetch in a production app.
    const fakeWeather: WeatherData = {
      name: 'Austin',
      main: { temp: Math.round(60 + Math.random() * 40), humidity: Math.round(40 + Math.random() * 40) },
      weather: [{ description: ['sunny', 'partly cloudy', 'cloudy', 'rainy'][Math.floor(Math.random() * 4)] }],
    };
    setWeather(fakeWeather);

    // TODO 2: Add selectedCity to the dependency array so this effect re-runs
    //         whenever the selected city changes.

    // TODO 3: Add a console.log inside this effect that prints "Fetching weather for: [city]"
    //         so you can confirm the effect re-runs each time selectedCity changes.
  }, []); // <-- add the dependency here

  return (
    <div style={{ padding: "2rem", maxWidth: "400px" }}>
      <h1>Weather by City</h1>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
        {CITIES.map(city => (
          <button key={city} onClick={() => {}}>{city}</button>
        ))}
      </div>
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.main.temp}°F — {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}
