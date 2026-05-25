// LESSON: JSX Syntax
// JSX lets you embed JavaScript expressions inside HTML-like markup.
// Use {} to drop any JS expression into JSX, and className instead of class.

const city = "Austin";
const temperature = 98;
const description = "Sunny and hot";

export default function App() {
  return (
    <div class="weather-card">
      <h1>{city}</h1>
      <p className="temp">{temperature}°F</p>
      <p>{description}</p>
      <p>Feeling: cool</p>
      <div className="div"></div>
    </div>
  );
}

// TODO 1: Fix the attribute on the outer <div> — JSX uses className, not class.
// TODO 2: Replace the hardcoded "cool" text with a ternary that shows "Hot!" when temperature > 85, otherwise "Nice".
// TODO 3: Add a new variable called humidity set to any number, then render it in a <p> tag using {}.
