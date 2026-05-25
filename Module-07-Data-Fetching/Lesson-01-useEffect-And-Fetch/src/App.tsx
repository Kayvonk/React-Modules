// LESSON: useEffect and Fetch
// Fetch data from an API inside useEffect with an empty [] dependency array.
// Store the response in state and show a loading placeholder while it's null.

import { useState, useEffect } from 'react';

interface Country {
  name:       { common: string };
  capital?:   string[];
  region:     string;
  population: number;
}

function CountryCard({ name, capital, region, population }: {
  name: string; capital?: string; region: string; population: number;
}) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "0.75rem", borderRadius: "4px" }}>
      <h3>{name}</h3>
      <p>{region} · {capital ?? 'N/A'}</p>
      <p>Pop: {population.toLocaleString()}</p>
    </div>
  );
}

export default function App() {
  // TODO 1: Declare a countries state variable typed as Country[] | null, starting as null.

  // TODO 2: Add a useEffect with an empty [] that fetches from:
  //         https://restcountries.com/v3.1/region/europe?fields=name,capital,region,population
  //         Parse the JSON response and call setCountries with the result.

  // TODO 3: If countries is null, render a <p>Loading...</p> instead of the grid.
  //         Once loaded, map countries to <CountryCard> components.

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Country Explorer</h1>
      <p>Loading...</p>
    </div>
  );
}
