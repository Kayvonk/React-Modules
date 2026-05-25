// LESSON: Lifting State Up
// When two sibling components need to share state, move that state to their
// common parent and pass it down as props along with the setter as a callback.

import { useState } from 'react';

function CelsiusInput({ celsius, onCelsiusChange }) {
  return (
    <div>
      <label>Celsius: </label>
      <input
        type="number"
        value={celsius}
        onChange={(e) => onCelsiusChange(Number(e.target.value))}
      />
    </div>
  );
}

function FahrenheitInput({ fahrenheit, onFahrenheitChange }) {
  return (
    <div>
      <label>Fahrenheit: </label>
      <input
        type="number"
        value={fahrenheit}
        onChange={(e) => onFahrenheitChange(Number(e.target.value))}
      />
    </div>
  );
}

export default function App() {
  // TODO 1: Declare a celsius state variable here in the parent (starting at 0).

  // TODO 2: Pass celsius and a handler to CelsiusInput so it can read and update the value.
  //         The handler should just call setCelsius with the new value.

  // TODO 3: Pass a fahrenheit value (derived: celsius * 9/5 + 32) and a handler to
  //         FahrenheitInput — the handler should convert back to Celsius before calling setCelsius.

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Temperature Converter</h1>
      <CelsiusInput celsius={0} onCelsiusChange={() => {}} />
      <FahrenheitInput fahrenheit={32} onFahrenheitChange={() => {}} />
    </div>
  );
}
